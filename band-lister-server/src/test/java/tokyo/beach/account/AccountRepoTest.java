package tokyo.beach.account;

import org.junit.Before;
import org.junit.Test;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;

import java.util.HashMap;

import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static tokyo.beach.TestDataSource.*;

public class AccountRepoTest {
    private JdbcTemplate jdbcTemplate;
    private AccountRepo repo;

    @Before
    public void setUp() throws Exception {
        resetDatabaseForTest();

        this.jdbcTemplate = new JdbcTemplate(createDataSource());
        this.repo = new AccountRepo(jdbcTemplate);

        cleanDatabaseTables(this.jdbcTemplate);
    }

    @Test
    public void test_getByUsername_returnsAccount() throws Exception {
        createFakeAccount(jdbcTemplate, "bob", "abcd");

        DatabaseAccount account = repo.getByUsername("bob");

        assertThat(account.getId(), is(notNullValue()));
        assertThat(account.getUsername(), equalTo("bob"));
        assertThat(account.getUsername(), equalTo("bob"));
    }

    private int createFakeAccount(JdbcTemplate jdbcTemplate, String username, String password) {
        SimpleJdbcInsert simpleJdbcInsert = new SimpleJdbcInsert(jdbcTemplate);

        HashMap params = new HashMap();
        params.put("username", username);
        params.put("password", password);

        return simpleJdbcInsert.withTableName("accounts").execute(params);
    }
}
