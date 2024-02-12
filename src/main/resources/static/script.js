billettArray= [];

function nyBillett(){
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;
    billettArray.push({film:film,antall:antall,fornavn:fornavn,
        etternavn:etternavn,telefonnr:telefonnr,epost:epost})
    console.log(billettArray);
    populateHTML(billettArray);
}

function populateHTML(innArray){
    console.log("So far so good")
    let html = "<ul>";
    console.log(innArray)
    for(let i in innArray){
        console.log(innArray[i].fornavn)
        html += "<li>" + innArray[i].film+"<br>"+innArray[i].antall+"<br>"+
            innArray[i].fornavn+"<br>"+innArray[i].etternavn+"<br>"+
            innArray[i].telefonnr+"<br>"+innArray[i].epost+"<br>"+"</li>"
        html+="</ul>"
        document.getElementById("bilett").innerHTML = html;
        console.log(html)
    }

}