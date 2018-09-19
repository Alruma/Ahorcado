const victoria = document.getElementById("victoria") as HTMLLabelElement;
const palabras = document.getElementById("palabras") as HTMLInputElement;
const letras = document.getElementById("letra") as HTMLInputElement;
const boton = document.getElementById("boton") as HTMLButtonElement;
let fallos = document.getElementById("fallos") as HTMLLabelElement;
let vidas = document.getElementById("vidas") as HTMLLabelElement;
let oculta = document.getElementById("oculta") as HTMLLabelElement;
let todas = ["diván", "sonajero", "ayudar", "arqueología", "peligro", "colina", "extractor", "espagueti", "polo", "burbuja"];
let randomIndex = Math.floor(Math.random() * todas.length);
let randomElement = todas[randomIndex];
let lvidas = parseInt(vidas.innerText);
let fail = fallos.innerText;
let po = oculta.innerHTML;
let newrandomElement = randomElement;
const mascara = "-";

for(let i = 0; i < randomElement.length ; i++){
    oculta.innerText = oculta.innerText + mascara;
}
let arrayoculto = oculta.innerText.split("");
let palabrafinal = arrayoculto;


boton.addEventListener("click", function () {
    randomIndex = Math.floor(Math.random() * todas.length);
    randomElement = todas[randomIndex];
    vidas.innerHTML = 5 + "";
    fallos.innerHTML = "";
    lvidas = 5;
    oculta.innerText = "";
    console.log(randomElement);
    for(let i = 0; i < randomElement.length ; i++){
        oculta.innerText = oculta.innerText + mascara;
    }
    arrayoculto = oculta.innerText.split("");
    palabrafinal = arrayoculto;
    victoria.innerHTML = "";
    letras.disabled = false;    
})



letras.addEventListener("keyup", function (event) {
    let any = false;
    if (event.key === "Enter"  && letras.value != "") {
        for (let i = 0; i < randomElement.length; i++) {
            if (letras.value == randomElement[i]) {
                any = true;
                palabrafinal[i] = randomElement[i];
                oculta.innerText = palabrafinal.join("");
            }
        }
        if (any == false) {
            fallos.innerHTML = fallos.innerHTML + fail + letras.value + ", ";
            lvidas -= 1;
            vidas.innerText = lvidas + "";
            if (lvidas <= 0) {
                victoria.innerHTML = "Unlucky busta, ha muerto.";
                letras.disabled = true;
            }
        }
        if(palabrafinal.join("") == randomElement){
            victoria.innerHTML = "Has ganado y el notas no ha muerto, que no es poco. Pulsa Empezar para otra partida.";
        }
        letras.value = "";
    }
});
