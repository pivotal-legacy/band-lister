package tokyo.beach.band;

import org.junit.Before;
import org.junit.Test;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;
import static tokyo.beach.TestDataSource.*;

public class BandRepoTest {
    private JdbcTemplate jdbcTemplate;

    @Before
    public void setUp() throws Exception {
        resetDatabaseForTest();

        this.jdbcTemplate = new JdbcTemplate(createDataSource());

        cleanDatabaseTables(this.jdbcTemplate);
    }

    @Test
    public void test_getAll_returnsBands() throws Exception {
        createFakeBand(jdbcTemplate, "The Beatles", 4);
        createFakeBand(jdbcTemplate, "Radiohead", 5);


        BandRepo bandRepo = new BandRepo(jdbcTemplate);


        List<Band> bands = bandRepo.getAll();


        assertThat(bands.size(), equalTo(2));
        assertThat(bands.get(0).getName(), equalTo("The Beatles"));
        assertThat(bands.get(0).getMemberCount(), equalTo(4));
        assertThat(bands.get(1).getName(), equalTo("Radiohead"));
        assertThat(bands.get(1).getMemberCount(), equalTo(5));
    }

    @Test
    public void test_getById_returnsBand_onSuccess() throws Exception {
        int bandId = createFakeBand(jdbcTemplate, "The Beatles", 4);

        BandRepo bandRepo = new BandRepo(jdbcTemplate);


        Band band = bandRepo.getById((long) bandId);


        assertThat(band.getName(), equalTo("The Beatles"));
        assertThat(band.getMemberCount(), equalTo(4));
    }

    private int createFakeBand(JdbcTemplate jdbcTemplate, String name, int memberCount) {
        SimpleJdbcInsert simpleJdbcInsert = new SimpleJdbcInsert(jdbcTemplate);

        Map parameters = new HashMap();
        parameters.put("name", name);
        parameters.put("member_count", memberCount);

        return simpleJdbcInsert.withTableName("bands").execute(parameters);
    }
}
