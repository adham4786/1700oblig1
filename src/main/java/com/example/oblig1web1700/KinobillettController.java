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

  //
 //   @RequestMapping(value = "/lagre", method = RequestMethod.POST)
//    @RequestMapping(value = "/lagre", method = {RequestMethod.POST, RequestMethod.GET})
//    @PostMapping("/lagre")
    @RequestMapping(value = "/lagre", method = RequestMethod.POST)
    public void lagreBillett (@RequestBody Kinobillett innBillett){rep.lagreBillett(innBillett);}
    @GetMapping("/hent")
    public List<Kinobillett> hentBilletter(){
        //kan enten bruke hentBilletter eller finnAlle
        return rep.hentBilletter();
    }

    @DeleteMapping("/slettAlle")
    public void slettAlleBilletter(){rep.slettAlleBilletter();}

    @DeleteMapping("/slettBillett")
    public String slettBillett(@RequestParam Long id){
        rep.slettBillett(id);
        return "slettet";
    }

    /*
    @PostMapping("/oppdaterBillett")
    public String oppdaterBillett(Kinobillett billett){
        rep.oppdaterBillett(billett);
        return "oppdatert";
    } */

    @RequestMapping(value = "/oppdaterBillett", method = RequestMethod.POST)
    public String oppdaterBillett(@RequestBody Kinobillett billett){
        rep.oppdaterBillett(billett);
        return "oppdatert";
    }

 //   @PostMapping("/hentBillettFraDB")
    @RequestMapping(value ="/hentBillettFraDB", method = RequestMethod.POST)
    public Kinobillett hentBillettFraDB(@RequestParam Long id){
        return rep.hentEtterID(id);
    }


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
