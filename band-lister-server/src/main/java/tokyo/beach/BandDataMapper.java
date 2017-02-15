package tokyo.beach;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
class BandDataMapper {
    private JdbcTemplate jdbcTemplate;

    BandDataMapper(JdbcTemplate jdbcTemplate) {
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
}
