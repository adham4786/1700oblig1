package com.example.oblig1web1700;

public class Kinobillett {
    private String film;
    private int antall;
    private String fornavn;
    private String etternavn;
    private String telefon;
    private String epost;
    private Long id;

    // Constructors
    public Kinobillett(String film,int antall,String fornavn,String etternavn,String telefon,String epost) {
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefon = telefon;
        this.epost = epost;
    }
    public Kinobillett(Long id, String film,int antall,String fornavn,String etternavn,String telefon,String epost) {
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefon = telefon;
        this.epost = epost;
        this.id = id;
    }

    public Kinobillett(){
    }

    // Getters and setters
    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // toString-method
    @Override
    public String toString() {
        return "Kinobillett{" +
                "film='" + film + '\'' +
                ", antall=" + antall +
                ", fornavn='" + fornavn + '\'' +
                ", etternavn='" + etternavn + '\'' +
                ", telefon='" + telefon + '\'' +
                ", epost='" + epost + '\'' +
                ", id='" + id + '\'' +
                '}';
    }
}

