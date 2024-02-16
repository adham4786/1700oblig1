//initializes a ticket array
billettArray= [];
//main function for creating a ticket
function nyBillett(){
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

    //alert that shows if any of the fields are empty
    if (film === '' || antall === '' || fornavn === ''
        || etternavn === '' || telefonnr === '' || epost === '') {
        alert("Fyll ut alle felt!");
        return;
    }
    //if no fields are empty these validations will be checked
    //max amount of tickets is 999 min is 1
    const antallFeilmelding = document.getElementById("antallFeilmelding");
    const antallRegexp = /^[1-9]\d{0,2}$/;
    let validertAntall = antallRegexp.test(antall);
    if (!validertAntall) {
        antallFeilmelding.textContent = "Skriv inn et gyldig antall (maks 3 siffer)";
        antallFeilmelding.style.display = "block";
    } else {
        antallFeilmelding.textContent = ""
        antallFeilmelding.style.display = "none";
    }

    //checks if film is selected
    const filmFeilmelding = document.getElementById("filmFeilmelding");
    if (film === ""){
        filmFeilmelding.textContent = "Vennligst velg en film"
        filmFeilmelding.style.display = "block";
    } else {
        filmFeilmelding.textContent = ""
        filmFeilmelding.style.display = "none";
    }
    //checks if name is only letters, spaces or dash
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
    //similar to fornavn
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
    //checks if there are 8 numbers
    const telefonnrFeilmelding = document.getElementById("telefonnrFeilmelding");
    const telefonnrRegexp = /^\d{8}$/;
    let validertTelefonnr = telefonnrRegexp.test(telefonnr);
    if (!validertTelefonnr) {
        telefonnrFeilmelding.textContent = "Skriv inn et gyldig telefonnr (8 siffer)";
        telefonnrFeilmelding.style.display = "block";
    } else {
        telefonnrFeilmelding.textContent = ""
        telefonnrFeilmelding.style.display = "none";
    }
    //checks if email follows email rules (ex. something@email.net)
    const epostFeilmelding = document.getElementById("epostFeilmelding");
    // Took epostRegexp code from https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/
    const epostRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let validertEpost = epostRegexp.test(epost);
    if (!validertEpost) {
        epostFeilmelding.textContent = "Skriv inn en gyldig E-post";
        epostFeilmelding.style.display = "block";
    } else {
        epostFeilmelding.textContent = ""
        epostFeilmelding.style.display = "none";
    }


    //this if sentence makes sure everything is correct before submitting to HTML
    if (film !== "" && validertAntall && validertFornavn && validertEtternavn
        && validertEpost && validertTelefonnr) {
        billettArray.push({
            film:film, antall:antall, fornavn:fornavn,
            etternavn:etternavn, telefonnr:telefonnr, epost:epost
        })
        console.log(billettArray);
        populateHTML(billettArray);
        //Blanks out the input fields
        document.getElementById("film").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";
    }
}

//shows tickets in the HTML, used in nyBillett() function
function populateHTML(innArray){
    //console log to see how far I got, decided to keep it
    console.log("So far so good")
    let html = "<ol>";
    console.log(innArray)
    for(let i in innArray){
        console.log(innArray[i].fornavn)
        html += "<li>" + innArray[i].film+"<br>"+innArray[i].antall+"<br>"+
            innArray[i].fornavn+"<br>"+innArray[i].etternavn+"<br>"+
            innArray[i].telefonnr+"<br>"+innArray[i].epost+"<br>"+"</li>"
    }
    html+="</ol>"
    document.getElementById("billett").innerHTML = html;
    console.log(html)
}

//empties the array and removes tickets from HTML
function slettBilletter (){
    billettArray.length = 0
    document.getElementById("billett").innerHTML = "";
}
