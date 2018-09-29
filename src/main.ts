const victoria = document.getElementById("victoria") as HTMLLabelElement;
const palabras = document.getElementById("palabras") as HTMLInputElement;
const letras = document.getElementById("letra") as HTMLInputElement;
const boton = document.getElementById("boton") as HTMLButtonElement;
let fallos = document.getElementById("fallos") as HTMLLabelElement;
let vidas = document.getElementById("vidas") as HTMLLabelElement;
let oculta = document.getElementById("oculta") as HTMLLabelElement;
let todas = ["diván","sonajero" , "ayudar", "arqueología", "peligro", "colina", "extractor", "espagueti", "polo", "burbuja","crema","café","estrella","explosión","guitarra","plástico","navaja","martillo","libros","lápiz","lapicero","aluminio","embarcación","letra","agujeta","ventana","Liberia","sonido","universidad","rueda","perro","llaves","camisa","pelo","papa","sillón","felicidad","catre","teclado","servilleta","escuela","pantalla","sol","codo","tenedor","estadística","mapa","agua","mensaje","lima","cohete","rey","edificio","césped","presidencia","hojas","parlante","colegio","granizo","pestaña","lampara","mano","monitor","flor","música","hombre","tornillo","habitación","velero","abuela","abuelo","palo","satélite","templo","lentes","bolígrafo","plato","nube","gobierno","botella","castillo","enano","casa","libro","persona","planeta","televisor","guantes","metal","teléfono","proyector","mono","remera","muela","petroleo","percha","remate","debate","anillo","cuaderno","ruido","pared","taladro","herramienta","cartas","chocolate","anteojos","impresora","caramelos","luces","angustia","zapato","bomba","lluvia","ojo","corbata","periódico","diente","planta","chupete","buzo","oficina","persiana","puerta","tío","silla","ensalada","pradera","zoológico","candidato","deporte","recipiente","diarios","fotografía","ave","hierro","refugio","pantalón","barco","carne","nieve","tecla","humedad","pistola","departamento","celular","tristeza","hipopótamo","sofá","cama","árbol","mesada","campera","discurso","auto","cinturón","rúcula","famoso","madera","lentejas","piso","maletín","reloj","diputado","cuchillo","desodorante","candado","luz","montañas","computadora","radio","moño","cuadro","calor","partido","teatro","fiesta","bala","auriculares"]
let randomIndex = Math.floor(Math.random() * todas.length);
let randomElement = todas[randomIndex];
let lvidas = parseInt(vidas.innerText);
let fail = fallos.innerText;        
let po = oculta.innerHTML;
let newrandomElement = randomElement;
let palabra = normalizar(randomElement);
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
    for(let i = 0; i < randomElement.length ; i++){
        oculta.innerText = oculta.innerText + mascara;
    }
    arrayoculto = oculta.innerText.split("");
    palabrafinal = arrayoculto;
    victoria.innerHTML = "";
    letras.disabled = false;
    letras.value = "";
    palabra = normalizar(randomElement);
})

letras.addEventListener("keyup", function (event) {
    let any : boolean = false;
    if (event.key === "Enter"  && letras.value != "") {
        for (let i = 0; i < randomElement.length; i++) {
            if (letras.value.toLowerCase() == palabra[i]) {
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
                oculta.innerText = randomElement;
            }
        }
        if(palabrafinal.join("") == randomElement){
            victoria.innerHTML = "Has ganado y el notas no ha muerto, que no es poco. Pulsa Empezar para otra partida.";
            letras.disabled = true;
        }
        letras.value = "";
    }
});


function normalizar(p:string){
    let palabranormal = [];
    palabranormal = p.split("");
    for(let i:number = 0; i < p.length; i++){
        if(p[i] == "á"){
            palabranormal[i] = "a";
        }
        if(p[i] == "é"){
            palabranormal[i] = "e";
        }
        if(p[i] == "í"){
            palabranormal[i] = "i";
        }
        if(p[i] == "ó"){
            palabranormal[i] = "o";
        }
        if(p[i] == "ú"){
            palabranormal[i] = "u";
        }
    }
        return palabranormal;
}