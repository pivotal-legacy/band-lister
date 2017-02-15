package tokyo.beach;

import org.junit.Test;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;

import static org.hamcrest.core.IsEqual.equalTo;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;

public class BandControllerTest {

    @Test
    public void test_getAll_returnsBandsOnSuccess() throws Exception {
        BandDataMapper mockBandDataMapper = mock(BandDataMapper.class);
        BandController bandController = new BandController(mockBandDataMapper);
        MockMvc mockController = standaloneSetup(bandController).build();

        when(mockBandDataMapper.getAll()).thenReturn(
                Collections.singletonList(new Band(1, "The Beatles", 4))
        );

        mockController.perform(get("/bands"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id", equalTo(1)))
                .andExpect(jsonPath("$[0].name", equalTo("The Beatles")))
                .andExpect(jsonPath("$[0].memberCount", equalTo(4)));
    }
}
