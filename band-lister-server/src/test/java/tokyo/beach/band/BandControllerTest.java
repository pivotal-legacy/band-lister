package tokyo.beach.band;

import org.junit.Before;
import org.junit.Test;
import org.springframework.test.web.servlet.MockMvc;

import static java.util.Collections.singletonList;
import static org.hamcrest.core.IsEqual.equalTo;
import static org.mockito.Matchers.anyLong;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;

public class BandControllerTest {
    private BandRepo mockBandRepo;
    private MockMvc mockController;

    @Before
    public void setUp() throws Exception {
        mockBandRepo = mock(BandRepo.class);
        BandController bandController = new BandController(mockBandRepo);
        mockController = standaloneSetup(bandController).build();
    }

    @Test
    public void test_getAll_returnsBandsOnSuccess() throws Exception {
        when(mockBandRepo.getAll())
                .thenReturn(singletonList(new Band(1, "The Beatles", 4)));

        mockController.perform(get("/bands"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id", equalTo(1)))
                .andExpect(jsonPath("$[0].name", equalTo("The Beatles")))
                .andExpect(jsonPath("$[0].memberCount", equalTo(4)));
    }

    @Test
    public void test_getByName_returnsBandOnSuccess() throws Exception {
        when(mockBandRepo.getById(anyLong()))
                .thenReturn(new Band(1L, "The Beatles", 4));

        mockController.perform(get("/bands/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", equalTo(1)))
                .andExpect(jsonPath("$.name", equalTo("The Beatles")))
                .andExpect(jsonPath("$.memberCount", equalTo(4)));
    }
}
