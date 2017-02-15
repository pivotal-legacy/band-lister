package tokyo.beach;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.junit.Test;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

public class BandDataMapperTest {

    @Test
    public void test_getAll_returnsBands() throws Exception {
        JdbcTemplate jdbcTemplate = new JdbcTemplate(createDataSource());
        cleanDatabase(jdbcTemplate);
        createFakeBand(jdbcTemplate, "The Beatles", 4);
        createFakeBand(jdbcTemplate, "Radiohead", 5);

        BandDataMapper bandDataMapper = new BandDataMapper(jdbcTemplate);


        List<Band> bands = bandDataMapper.getAll();


        List<Band> expectedBands = Arrays.asList(
                new Band(1, "The Beatles", 4),
                new Band(2, "Radiohead", 5)
        );

        assertThat(bands.size(), equalTo(2));
        assertThat(bands.get(0).getName(), equalTo("The Beatles"));
        assertThat(bands.get(0).getMemberCount(), equalTo(4));
        assertThat(bands.get(1).getName(), equalTo("Radiohead"));
        assertThat(bands.get(1).getMemberCount(), equalTo(5));
    }

    private DataSource createDataSource() {
        DataSource dataSource = new DataSource();
        dataSource.setUrl("jdbc:mysql://localhost/band_lister_test");
        dataSource.setUsername("root");
        return dataSource;
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
