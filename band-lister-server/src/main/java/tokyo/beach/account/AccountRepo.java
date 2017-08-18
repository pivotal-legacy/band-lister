package tokyo.beach.account;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class AccountRepo {
    private final JdbcTemplate jdbcTemplate;

    public AccountRepo(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public DatabaseAccount getByUsername(String username) {
        String queryString = "SELECT * FROM accounts WHERE username=?";
        return jdbcTemplate.queryForObject(
                queryString,
                (rs, i) -> new DatabaseAccount(
                        rs.getLong("id"),
                        rs.getString("username"),
                        rs.getString("password")
                ),
                username
        );
    }
}
