package com.example.oblig1web1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;


@SpringBootApplication
@RestController

public class KinobillettController {
    @Autowired
    KinobillettRepository rep;

    @PostMapping("/lagre")
    public void lagreBillett (Kinobillett innBillett){rep.lagreBillett(innBillett);}

    @GetMapping("/hent")
    public void hentBilletter(){rep.hentBilletter();}

    @DeleteMapping("/slett")
    public void slettBilletter(){rep.slettBilletter();}

    public static void main(String[] args) {
        SpringApplication.run(KinobillettController.class, args);
    }



}



    /*
    import java.util.ArrayList;
    import java.util.List;


   public final List<Kinobillett> billettRegistering = new ArrayList<>();

    // Endepunkt for å registrere en ny kinobillettbestilling
    @PostMapping("/registrerBestillinger")
    public void bestillBillett(@RequestBody Kinobillett billett) {
        billettRegistering.add(billett);
    }

    // Endepunkt for å hente alle kinobillettbestillinger
    @GetMapping("/hentBestillinger")
    public List<Kinobillett> hentAlleBestillinger() {
        return billettRegistering;
    }

    // Endepunkt for å slette alle kinobillettbestillinger
    @DeleteMapping("/slettBestillinger")
    public void slettAlleBestillinger() {
        billettRegistering.clear();
    }


     */
