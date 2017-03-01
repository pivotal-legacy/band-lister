package tokyo.beach;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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

    public Optional<Band> getById(Long id) {
        String sqlString = "SELECT * FROM bands where id=?";
        try {
            Band band = jdbcTemplate.queryForObject(
                    sqlString,
                    (rs, i) -> new Band(
                            rs.getLong("id"),
                            rs.getString("name"),
                            rs.getInt("member_count")
                    ),
                    id
            );
            return Optional.of(band);
        } catch (Exception e) {
            return Optional.empty();
        }

    }
}
