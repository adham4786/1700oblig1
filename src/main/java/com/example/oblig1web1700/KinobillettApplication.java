package com.example.oblig1web1700;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@RestController

public class KinobillettApplication {
    private final List<Kinobillett> billettRegistering = new ArrayList<>();

    public static void main(String[] args) {
        SpringApplication.run(KinobillettApplication.class, args);
    }

    // Endepunkt for å registrere en ny kinobillettbestilling
    @PostMapping("/bestillinger")
    public void bestillBillett(@RequestBody Kinobillett billett) {
        billettRegistering.add(billett);
    }

    // Endepunkt for å hente alle kinobillettbestillinger
    @GetMapping("/bestillinger")
    public List<Kinobillett> hentAlleBestillinger() {
        return billettRegistering;
    }

    // Endepunkt for å slette alle kinobillettbestillinger
    @DeleteMapping("/bestillinger")
    public void slettAlleBestillinger() {
        billettRegistering.clear();
    }
}
