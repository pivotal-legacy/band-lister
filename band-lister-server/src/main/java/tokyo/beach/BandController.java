package tokyo.beach;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/bands")
@RestController
public class BandController {
    private BandDataMapper bandDataMapper;

    BandController(BandDataMapper bandDataMapper) {
        this.bandDataMapper = bandDataMapper;
    }

    @GetMapping
    public List<Band> getAll() {
        return bandDataMapper.getAll();
    }
}
