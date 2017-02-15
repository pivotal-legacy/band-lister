package tokyo.beach;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BandController {

    private BandDataMapper bandDataMapper;

    public BandController(BandDataMapper bandDataMapper) {
        this.bandDataMapper = bandDataMapper;
    }

    @GetMapping("/bands")
    public List<Band> getAll() {
        return bandDataMapper.getAll();
    }
}
