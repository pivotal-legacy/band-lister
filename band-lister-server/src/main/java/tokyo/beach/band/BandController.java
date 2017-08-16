package tokyo.beach.band;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/bands")
@RestController
public class BandController {
    private BandRepo bandRepo;

    public BandController(BandRepo bandRepo) {
        this.bandRepo = bandRepo;
    }

    @GetMapping
    public List<Band> getAll() {
        return bandRepo.getAll();
    }

    @GetMapping("{id}")
    public Band getById(@PathVariable Long id) {
        return bandRepo.getById(id);
    }
}
