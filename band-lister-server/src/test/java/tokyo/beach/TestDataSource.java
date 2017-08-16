package tokyo.beach;
import org.apache.tomcat.jdbc.pool.DataSource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.jdbc.core.JdbcTemplate;

import java.net.URL;
import java.sql.Connection;
import java.sql.SQLException;

import static org.springframework.jdbc.datasource.init.ScriptUtils.executeSqlScript;

public class TestDataSource {
    private static final String DATABASE_SCRIPT_PATH = "/db";

    public static DataSource createDataSource() {
        DataSource dataSource = new org.apache.tomcat.jdbc.pool.DataSource();
        dataSource.setUrl("jdbc:mysql://localhost:3306/band_lister_test");
        dataSource.setUsername("root");
        dataSource.setPassword("");
        return dataSource;
    }

    public static DataSource createLoginDataSource() {
        DataSource dataSource = new DataSource();
        dataSource.setUrl("jdbc:mysql://localhost:3306/mysql");
        dataSource.setUsername("root");
        dataSource.setPassword("");
        return dataSource;
    }

    public static void resetDatabaseForTest() throws SQLException {
        recreateDatabase();
        loadInitialDatabaseSchema();
    }

    public static void recreateDatabase() throws SQLException {
        DataSource loginDataSource = createLoginDataSource();
        Connection loginConnection = loginDataSource.getConnection();

        URL url = new TestDataSource().getClass().getResource(DATABASE_SCRIPT_PATH + "/refreshTestDatabase.sql");
        Resource refreshDatabaseResource = new UrlResource(url);
        executeSqlScript(loginConnection, refreshDatabaseResource);
    }

    public static void loadInitialDatabaseSchema() throws SQLException {
        DataSource testDBDataSource = createDataSource();
        Connection connection = testDBDataSource.getConnection();

        URL url = new TestDataSource().getClass().getResource(DATABASE_SCRIPT_PATH + "/schema.sql");
        Resource createSchemaResource = new UrlResource(url);
        executeSqlScript(connection, createSchemaResource);
    }

    public static void cleanDatabaseTables(JdbcTemplate jdbcTemplate) {
        jdbcTemplate.execute("DELETE FROM accounts");
        jdbcTemplate.execute("DELETE FROM bands");
    }

}
