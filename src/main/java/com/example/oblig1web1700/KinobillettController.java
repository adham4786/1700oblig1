package com.example.oblig1web1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@SpringBootApplication
@RestController

public class KinobillettController {
    @Autowired
    KinobillettRepository rep;

    @RequestMapping(value = "/lagre", method = RequestMethod.POST)
    public void lagreBillett (@RequestBody Kinobillett innBillett){
        rep.lagreBillett(innBillett);
    }

    @GetMapping("/hent")
    public List<Kinobillett> hentBilletter(){
        return rep.hentBilletter();
    }

    @DeleteMapping("/slettAlle")
    public void slettAlleBilletter(){
        rep.slettAlleBilletter();
    }

    @DeleteMapping("/slettBillett")
    public String slettBillett(@RequestParam Long id){
        rep.slettBillett(id);
        return "slettet";
    }

    @PostMapping("/oppdaterBillett")
    public String oppdaterBillettIDBPost(Kinobillett billett){
        rep.oppdaterBillett(billett);
        return "oppdatert";
    }

    @PostMapping("/hentBillettFraDB")
    public Kinobillett hentBillettFraDB(@RequestParam Long id){
        return rep.hentEtterID(id);
    }


    public static void main(String[] args) {
        SpringApplication.run(KinobillettController.class, args);
    }



}