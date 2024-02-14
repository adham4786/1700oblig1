billettArray= [];
function nyBillett(){
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

/*    if (film === '' || antall === '' || fornavn === ''
        || etternavn === '' || telefonnr === '' || epost === '') {
        alert("Fyll ut alle felt!");
        return;
    } */


    billettArray.push({film:film,antall:antall,fornavn:fornavn,
        etternavn:etternavn,telefonnr:telefonnr,epost:epost})
    console.log(billettArray);
    populateHTML(billettArray);

    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";

}

function populateHTML(innArray){
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

function slettBilletter (){
    billettArray.length = 0
    document.getElementById("billett").innerHTML = "";
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


for html:
<p id="navnFeilmelding"></p>

    oninput="sjekkNavn()"


    hvis ikke jeg bare skal bruke html så funker det å bygge på denne koden:
        const navnFeilmelding = document.getElementById("navnFeilmelding");
    const navnRegexp = /^[a-åA-Å\s\-]+$/;
    if (!navnRegexp.test(fornavn)) {
        navnFeilmelding.textContent = "Skriv inn et navn.";
    }
    else {
        navnFeilmelding.textContent = ""

        men her må billettArray.push og sletting av input felt inn
    }

} */