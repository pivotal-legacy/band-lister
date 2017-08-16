package tokyo.beach.band;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BandRepo {
    private JdbcTemplate jdbcTemplate;

    public BandRepo(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<Band> getAll() {
        String sqlString = "SELECT * FROM bands";

        return jdbcTemplate.query(
                sqlString,
                ((rs, rowNum) -> new Band(
                        rs.getLong("id"),
                        rs.getString("name"),
                        rs.getInt("member_count")
                ))
        );
    }

    Band getById(Long id) {
        String sqlString = "SELECT * FROM bands where id=?";
        return jdbcTemplate.queryForObject(
                sqlString,
                (rs, i) -> new Band(
                        rs.getLong("id"),
                        rs.getString("name"),
                        rs.getInt("member_count")
                ),
                id
        );
    }
}
