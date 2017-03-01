package tokyo.beach;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("{id}")
    public Band getById(@PathVariable Long id) {
        return bandDataMapper.getById(id)
                .orElseThrow(() -> new RuntimeException("could not find band"));
    }
}
