bilettArray= [];

function leggTilArray(){

    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;
    bilettArray.push({antall:antall,fornavn:fornavn,etternavn:etternavn,
    telefonnr:telefonnr,epost:epost})
}