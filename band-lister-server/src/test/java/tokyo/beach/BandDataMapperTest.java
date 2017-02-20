package tokyo.beach;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.junit.Before;
import org.junit.Test;
import org.springframework.core.io.PathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;

import java.net.URL;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;
import static org.springframework.jdbc.datasource.init.ScriptUtils.executeSqlScript;

public class BandDataMapperTest {
    JdbcTemplate jdbcTemplate;

    private final String DATABASE_SCRIPT_PATH = "/db";

    @Before
    public void setUp() throws Exception {
        recreateDatabase();
        loadInitialDatabaseSchema();

        this.jdbcTemplate = new JdbcTemplate(createDataSource());
        cleanDatabase(this.jdbcTemplate);
    }

    @Test
    public void test_getAll_returnsBands() throws Exception {
        createFakeBand(jdbcTemplate, "The Beatles", 4);
        createFakeBand(jdbcTemplate, "Radiohead", 5);


        BandDataMapper bandDataMapper = new BandDataMapper(jdbcTemplate);


        List<Band> bands = bandDataMapper.getAll();


        assertThat(bands.size(), equalTo(2));
        assertThat(bands.get(0).getName(), equalTo("The Beatles"));
        assertThat(bands.get(0).getMemberCount(), equalTo(4));
        assertThat(bands.get(1).getName(), equalTo("Radiohead"));
        assertThat(bands.get(1).getMemberCount(), equalTo(5));
    }

    private DataSource createDataSource() {
        DataSource dataSource = new DataSource();
        dataSource.setUrl("jdbc:mysql://localhost:3306/band_lister_test");
        dataSource.setUsername("root");
        return dataSource;
    }

    private DataSource createLoginDataSource() {
        DataSource dataSource = new DataSource();
        dataSource.setUrl("jdbc:mysql://localhost:3306");
        dataSource.setUsername("root");
        return dataSource;
    }

    private void recreateDatabase() throws SQLException {
        DataSource loginDataSource = createLoginDataSource();
        Connection loginConnection = loginDataSource.getConnection();

        URL url = getClass().getResource(DATABASE_SCRIPT_PATH + "/refreshTestDatabase.sql");
        Resource refreshDatabaseResource = new UrlResource(url);
        executeSqlScript(loginConnection, refreshDatabaseResource);
    }

    private void loadInitialDatabaseSchema() throws SQLException {
        DataSource testDBDataSource = createDataSource();
        Connection connection = testDBDataSource.getConnection();

        URL url = getClass().getResource(DATABASE_SCRIPT_PATH + "/schema.sql");
        Resource createSchemaResource = new UrlResource(url);
        executeSqlScript(connection, createSchemaResource);
    }

    private void cleanDatabase(JdbcTemplate jdbcTemplate) {
        jdbcTemplate.execute("DELETE FROM bands");
    }

    private void createFakeBand(JdbcTemplate jdbcTemplate, String name, int memberCount) {
        SimpleJdbcInsert simpleJdbcInsert = new SimpleJdbcInsert(jdbcTemplate);

        Map parameters = new HashMap();
        parameters.put("name", name);
        parameters.put("member_count", memberCount);

        simpleJdbcInsert.withTableName("bands").execute(parameters);
    }
}
