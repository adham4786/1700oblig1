billettArray= [];
function nyBillett(){
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefon = document.getElementById("telefon").value;
    let epost = document.getElementById("epost").value;

    if (film === '' || antall === '' || fornavn === ''
        || etternavn === '' || telefon === '' || epost === '') {
        alert("Fyll ut alle felt!");
        return;
    }
    const antallFeilmelding = document.getElementById("antallFeilmelding");
    const antallRegexp = /^\d{1,3}$/;
    let validertAntall = antallRegexp.test(antall);
    if (!validertAntall) {
        antallFeilmelding.textContent = "Skriv inn et gyldig antall (maks 3 siffer)";
        antallFeilmelding.style.display = "block";
    } else {
        antallFeilmelding.textContent = ""
        antallFeilmelding.style.display = "none";
    }

    const filmFeilmelding = document.getElementById("filmFeilmelding");
    if (film === ""){
        filmFeilmelding.textContent = "Vennligst velg en film"
        filmFeilmelding.style.display = "block";
    } else {
        filmFeilmelding.textContent = ""
        filmFeilmelding.style.display = "none";
    }

    const fornavnFeilmelding = document.getElementById("fornavnFeilmelding");
    const fornavnRegexp = /^[a-åA-Å\s\-]+$/;
    let validertFornavn = fornavnRegexp.test(fornavn);
    if (!validertFornavn) {
        fornavnFeilmelding.textContent = "Fornavn kan kun inneholde 'A-Å, 'a-å', '-' eller ' '.";
        fornavnFeilmelding.style.display = "block";
    } else {
        fornavnFeilmelding.textContent = ""
        fornavnFeilmelding.style.display = "none";
    }

    const etternavnFeilmelding = document.getElementById("etternavnFeilmelding");
    const etternavnRegexp = /^[a-åA-Å\s\-]+$/;
    let validertEtternavn = etternavnRegexp.test(etternavn);
    if (!validertEtternavn) {
        etternavnFeilmelding.textContent = "Etternavn kan kun inneholde 'A-Å, 'a-å', '-' eller ' '.";
        etternavnFeilmelding.style.display = "block";
    } else {
        etternavnFeilmelding.textContent = ""
        etternavnFeilmelding.style.display = "none";
    }

    const telefonFeilmelding = document.getElementById("telefonFeilmelding");
    const telefonRegexp = /^\d{8}$/;
    let validertTelefon = telefonRegexp.test(telefon);
    if (!validertTelefon) {
        telefonFeilmelding.textContent = "Skriv inn et gyldig telefonnr (8 siffer)";
        telefonFeilmelding.style.display = "block";
    } else {
        telefonFeilmelding.textContent = ""
        telefonFeilmelding.style.display = "none";
    }

    const epostFeilmelding = document.getElementById("epostFeilmelding");
    const epostRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let validertEpost = epostRegexp.test(epost);
    if (!validertEpost) {
        epostFeilmelding.textContent = "Skriv inn en gyldig E-post";
        epostFeilmelding.style.display = "block";
    } else {
        epostFeilmelding.textContent = ""
        epostFeilmelding.style.display = "none";
    }


    if (film !== "" && validertAntall && validertFornavn && validertEtternavn
        && validertEpost && validertTelefon) {
        billettArray.push({
            film:film, antall:antall, fornavn:fornavn,
            etternavn:etternavn, telefon:telefon, epost:epost
        })
        console.log(billettArray);
        populateHTML(billettArray);

        document.getElementById("film").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefon").value = "";
        document.getElementById("epost").value = "";
    }
}

function populateHTML(innArray){
    console.log("So far so good")
    let html = "<ol>";
    console.log(innArray)
    for(let i in innArray){
        console.log(innArray[i].fornavn)
        html += "<li>" + innArray[i].film+"<br>"+innArray[i].antall+"<br>"+
            innArray[i].fornavn+"<br>"+innArray[i].etternavn+"<br>"+
            innArray[i].telefon+"<br>"+innArray[i].epost+"<br>"+"</li>"
    }
    html+="</ol>"
    document.getElementById("billett").innerHTML = html;
    console.log(html)
}

function slettBilletter (){
    billettArray.length = 0
    document.getElementById("billett").innerHTML = "";
}

function lagreBillettFraInput(){
    kinobillett = {
        "film": document.getElementById("film").value,
        "antall": document.getElementById("antall").value,
        "fornavn": document.getElementById("fornavn").value,
        "etternavn": document.getElementById("etternavn").value,
        "telefon": document.getElementById("telefon").value,
        "epost": document.getElementById("epost").value
    }
    console.log(kinobillett)
    /* $.post("http://localhost:8080/lagre",kinobillett, function (data){}) */

    $.ajax({
        url: "http://localhost:8080/lagre",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(kinobillett),
        })
    nyBillett();
}

/*
function sjekkNavn(){
    const navn = document.getElementById("fornavn");
    const feilmelding = document.getElementById("navnFeilmelding");

    const navnRegexp = /^[a-åA-Å\s\-]+$/;
    if (navnRegexp.test(fornavn)) {
        feilmelding.textContent = "";
    }
    else {
        feilmelding.textContent = "Skriv inn et navn."
    }

}
for html:
<p id="navnFeilmelding"></p>

    oninput="sjekkNavn()"


    hvis ikke jeg bare skal bruke html så funker det å bygge på denne koden:
    html:
    <p id="navnFeilmelding"></p>
    js:
        const navnFeilmelding = document.getElementById("navnFeilmelding");
    const navnRegexp = /^[a-åA-Å\s\-]+$/;
    if (!navnRegexp.test(fornavn)) {
        navnFeilmelding.textContent = "Skriv inn et navn.";
    }
    else {
        navnFeilmelding.textContent = ""

        men her må billettArray.push og sletting av input felt inn
    }
 */