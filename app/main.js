"use strict";
const victoria = document.getElementById("victoria");
const palabras = document.getElementById("palabras");
const letras = document.getElementById("letra");
const boton = document.getElementById("boton");
let fallos = document.getElementById("fallos");
let vidas = document.getElementById("vidas");
let oculta = document.getElementById("oculta");
let todas = ["divan", "sonajero", "ayudar", "arqueologia", "peligro", "colina", "extractor", "espagueti", "polo", "burbuja", "crema", "cafe", "estrella", "explosion", "guitarra", "plastico", "navaja", "martillo", "libros", "lapiz", "lapicera", "aluminio", "embarcacion", "letra", "agujeta", "ventana", "libreria", "sonido", "universidad", "rueda", "perro", "llaves", "camisa", "pelo", "papa", "sillon", "felicidad", "catre", "teclado", "servilleta", "escuela", "pantalla", "sol", "codo", "tenedor", "estadistica", "mapa", "agua", "mensaje", "lima", "cohete", "rey", "edificio", "cesped", "presidencia", "hojas", "parlante", "colegio", "granizo", "pestaña", "lampara", "mano", "monitor", "flor", "musica", "hombre", "tornillo", "habitacion", "velero", "abuela", "abuelo", "palo", "satelite", "templo", "lentes", "boligrafo", "plato", "nube", "gobierno", "botella", "castillo", "enano", "casa", "libro", "persona", "planeta", "televisor", "guantes", "metal", "telefono", "proyector", "mono", "remera", "muela", "petroleo", "percha", "remate", "debate", "anillo", "cuaderno", "ruido", "pared", "taladro", "herramienta", "cartas", "chocolate", "anteojos", "impresora", "caramelos", "living", "luces", "angustia", "zapato", "bomba", "lluvia", "ojo", "corbata", "periodico", "diente", "planta", "chupetin", "buzo", "oficina", "persiana", "puerta", "tio", "silla", "ensalada", "pradera", "zoologico", "candidato", "deporte", "recipiente", "diarios", "fotografia", "ave", "hierro", "refugio", "pantalon", "barco", "carne", "nieve", "tecla", "humedad", "pistola", "departamento", "celular", "tristeza", "hipopotamo", "sofa", "cama", "arbol", "mesada", "campera", "discurso", "auto", "cinturon", "rucula", "famoso", "madera", "lentejas", "piso", "maletin", "reloj", "diputado", "cuchillo", "desodorante", "candado", "luz", "montañas", "computadora", "radio", "moño", "cuadro", "calor", "partido", "teatro", "bife", "fiesta", "bala", "auriculares"];
let randomIndex = Math.floor(Math.random() * todas.length);
let randomElement = todas[randomIndex];
let lvidas = parseInt(vidas.innerText);
let fail = fallos.innerText;
let po = oculta.innerHTML;
let newrandomElement = randomElement;
const mascara = "-";
for (let i = 0; i < randomElement.length; i++) {
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
    for (let i = 0; i < randomElement.length; i++) {
        oculta.innerText = oculta.innerText + mascara;
    }
    arrayoculto = oculta.innerText.split("");
    palabrafinal = arrayoculto;
    victoria.innerHTML = "";
    letras.disabled = false;
    letras.value = "";
});
letras.addEventListener("keyup", function (event) {
    let any = false;
    if (event.key === "Enter" && letras.value != "") {
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
        if (palabrafinal.join("") == randomElement) {
            victoria.innerHTML = "Has ganado y el notas no ha muerto, que no es poco. Pulsa Empezar para otra partida.";
            letras.disabled = true;
        }
        letras.value = "";
    }
});
//# sourceMappingURL=main.js.map