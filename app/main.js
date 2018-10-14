"use strict";
const mascara = "-";
const noche = document.getElementById("noche");
const marta = document.getElementById("chuparla");
const victoria = document.getElementById("victoria");
const palabras = document.getElementById("palabras");
const letras = document.getElementById("letra");
const boton = document.getElementById("boton");
let fallos = document.getElementById("fallos");
let vidas = document.getElementById("vidas");
let oculta = document.getElementById("oculta");
let todas = ["diván", "sonajero", "ayudar", "arqueología", "morciguillo", "peligro", "colina", "extractor", "espagueti", "polo", "burbuja", "crema", "café", "estrella", "explosión", "guitarra", "plástico", "navaja", "martillo", "libros", "lápiz", "lapicero", "aluminio", "embarcación", "letra", "agujeta", "ventana", "Liberia", "sonido", "universidad", "rueda", "perro", "llaves", "camisa", "pelo", "papa", "sillón", "felicidad", "catre", "teclado", "servilleta", "escuela", "pantalla", "sol", "codo", "tenedor", "estadística", "mapa", "agua", "mensaje", "lima", "cohete", "rey", "edificio", "césped", "presidencia", "hojas", "parlante", "colegio", "granizo", "pestaña", "lampara", "mano", "monitor", "flor", "música", "hombre", "tornillo", "habitación", "velero", "abuela", "abuelo", "palo", "satélite", "templo", "lentes", "bolígrafo", "plato", "nube", "gobierno", "botella", "castillo", "enano", "casa", "libro", "persona", "planeta", "televisor", "guantes", "metal", "teléfono", "proyector", "mono", "remera", "muela", "petróleo", "percha", "remate", "debate", "anillo", "cuaderno", "ruido", "pared", "taladro", "herramienta", "cartas", "chocolate", "anteojos", "impresora", "caramelos", "luces", "angustia", "zapato", "bomba", "lluvia", "ojo", "corbata", "periódico", "diente", "planta", "chupete", "buzo", "oficina", "persiana", "puerta", "tío", "silla", "ensalada", "pradera", "zoológico", "candidato", "deporte", "recipiente", "diarios", "fotografía", "ave", "hierro", "refugio", "pantalón", "barco", "carne", "nieve", "tecla", "humedad", "pistola", "departamento", "celular", "tristeza", "hipopótamo", "sofá", "cama", "árbol", "mesada", "campera", "discurso", "auto", "cinturón", "rúcula", "famoso", "madera", "lentejas", "piso", "maletín", "reloj", "diputado", "cuchillo", "desodorante", "candado", "luz", "montañas", "computadora", "radio", "moño", "cuadro", "calor", "partido", "teatro", "fiesta", "bala", "auriculares"];
// let todas =["áááááééééiííiííóóoooóó"];
let randomIndex = Math.floor(Math.random() * todas.length);
let randomElement = todas[randomIndex];
let lvidas = parseInt(vidas.innerText);
let fail = fallos.innerText;
let po = oculta.innerHTML;
let newrandomElement = randomElement;
let palabra = normalizar(randomElement);
let letranormal = normalizaracentos(letras.value);
marta.addEventListener("click", function () {
    vidas.innerHTML = lvidas + 5 + "";
    lvidas += 5;
    marta.disabled = true;
});
for (let i = 0; i < randomElement.length; i++) {
    oculta.innerText = oculta.innerText + mascara;
}
let arrayoculto = oculta.innerText.split("");
let palabrafinal = arrayoculto;
function normalizar(p) {
    let palabranormal = [];
    palabranormal = p.split("");
    for (let i = 0; i < p.length; i++) {
        if (p[i] == "á") {
            palabranormal[i] = "a";
        }
        if (p[i] == "é") {
            palabranormal[i] = "e";
        }
        if (p[i] == "í") {
            palabranormal[i] = "i";
        }
        if (p[i] == "ó") {
            palabranormal[i] = "o";
        }
        if (p[i] == "ú") {
            palabranormal[i] = "u";
        }
    }
    return palabranormal;
}
function isLetter(str) {
    return str.length === 1 && /[a-zñ]/i.test(str);
}
boton.addEventListener("click", function () {
    randomIndex = Math.floor(Math.random() * todas.length);
    randomElement = todas[randomIndex];
    vidas.innerHTML = 5 + "";
    fallos.innerHTML = "";
    lvidas = 5;
    oculta.innerText = "";
    for (let i = 0; i < randomElement.length; i++) {
        oculta.innerText = oculta.innerText + mascara;
    }
    arrayoculto = oculta.innerText.split("");
    palabrafinal = arrayoculto;
    victoria.innerHTML = "";
    letras.disabled = false;
    marta.disabled = false;
    letras.value = "";
    palabra = normalizar(randomElement);
});
letras.addEventListener("keyup", function (event) {
    let any = false;
    if (event.key === "Enter" && letras.value != "") {
        if (isLetter(normalizaracentos(letras.value)) === true) {
            for (let i = 0; i < randomElement.length; i++) {
                if (normalizaracentos(letras.value.toLowerCase()) == palabra[i]) {
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
                    marta.disabled = true;
                    victoria.innerHTML = "Unlucky busta, el monigote ha muerto.";
                    letras.disabled = true;
                    oculta.innerText = randomElement;
                }
            }
            if (palabrafinal.join("") == randomElement) {
                victoria.innerHTML = "Has ganado y el notas no ha muerto, que no es poco. Pulsa Empezar para otra partida.";
                letras.disabled = true;
            }
            letras.value = "";
        }
        else {
            letras.value = "";
            alert("Te reviento, Rodrigo");
        }
    }
});
function normalizaracentos(p) {
    if (p.toLowerCase() == "á" || p.toLowerCase() == "à" || p.toLowerCase() == "â" || p.toLowerCase() == "ä") {
        p = "a";
    }
    if (p.toLowerCase() == "é" || p.toLowerCase() == "è" || p.toLowerCase() == "ê" || p.toLowerCase() == "ë") {
        p = "e";
    }
    if (p.toLowerCase() == "í" || p.toLowerCase() == "ì" || p.toLowerCase() == "î" || p.toLowerCase() == "ï") {
        p = "i";
    }
    if (p.toLowerCase() == "ó" || p.toLowerCase() == "ò" || p.toLowerCase() == "ô" || p.toLowerCase() == "ö") {
        p = "o";
    }
    if (p.toLowerCase() == "ú" || p.toLowerCase() == "ù" || p.toLowerCase() == "û" || p.toLowerCase() == "ü") {
        p = "u";
    }
    return p;
}
//# sourceMappingURL=main.js.map