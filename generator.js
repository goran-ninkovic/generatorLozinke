const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "#", "$", "%", "&", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "_"];
let minDuzinaLozinke = 8;
let maxDuzinaLozinke = 15;
let min = 0;
let max = 78;
let dugme = document.querySelector("[type=button]");
dugme.addEventListener("click", generisiLozinku);

function generisiLozinku() {
    let duzinaLozinke = Math.floor(Math.random() * (maxDuzinaLozinke - minDuzinaLozinke + 1) ) + minDuzinaLozinke;
    for (let i = 0; i < duzinaLozinke; i++) {
        let randomChar = characters[Math.floor(Math.random() * (max - min + 1) ) + min];
        document.getElementById("password").value += randomChar;
    }
    
    let lozinka = document.getElementById("password");
    let patternMalaSlova = /[a-z]/g;
    let patternVelikaSlova = /[A-Z]/g;
    let patternCifre = /[0-9]/g;
    let patternSpecijalniZnaci = /[!#$%&*+,-.:;<=>?_]/g;
    let malaSlova = patternMalaSlova.test(lozinka.value);
    let velikaSlova = patternVelikaSlova.test(lozinka.value);
    let cifre = patternCifre.test(lozinka.value);
    let specijalniZnaci = patternSpecijalniZnaci.test(lozinka.value);
    
    if (!malaSlova || !velikaSlova || !cifre || !specijalniZnaci) {
        lozinka.value = "";
        generisiLozinku();
    } else {
        document.getElementById("p1").style.display = "block";
        document.getElementById("brojKaraktera").innerHTML = duzinaLozinke;
        document.getElementById("spisakKaraktera").style.display = "block";

        let brojMalihSlova = lozinka.value.match(patternMalaSlova || []).length;
        document.getElementById("brojMalihSlova").innerHTML = brojMalihSlova;

        let brojVelikihSlova = lozinka.value.match(patternVelikaSlova || []).length;
        document.getElementById("brojVelikihSlova").innerHTML = brojVelikihSlova;

        let brojCifara = lozinka.value.match(patternCifre || []).length;
        document.getElementById("brojCifara").innerHTML = brojCifara;
        
        let brojSpecijalnihZnakova = lozinka.value.match(patternSpecijalniZnaci || []).length;
        document.getElementById("brojSpecijalnihZnakova").innerHTML = brojSpecijalnihZnakova;

        dugme.disabled = true;
    }
}