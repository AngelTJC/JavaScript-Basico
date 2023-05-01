let opciones = ["piedra", "papel", "tijera"];

function random(min, max) {
    return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
} 

let cpu = opciones[random(0, 2)];

let input = prompt("Juguemos, escribre piedra, papel o tijera");

switch (input) {
    case "piedra":
        if (cpu === "tijera") {
            console.log("Ganaste!  cpu-->" + cpu);
        } else if (cpu === "papel") {
            console.log("Perdiste!  cpu-->" + cpu);
        } else if (input === cpu) {
            console.log("Empate!  cpu-->" + cpu);
        }
        break;

    case "papel":
        if (cpu === "piedra") {
            console.log("Ganaste!  cpu-->" + cpu);
        } else if (cpu === "tijera") {
            console.log("Perdiste!  cpu-->" + cpu);
        } else if (input === cpu) {
            console.log("Empate!  cpu-->" + cpu);
        }
        break;

    case "tijera":
        if (cpu === "papel") {
            console.log("Ganaste!  cpu-->" + cpu);
        } else if (cpu === "piedra") {
            console.log("Perdiste!  cpu-->" + cpu);
        } else if (input === cpu) {
            console.log("Empate!  cpu-->" + cpu);
        }
        break;
    default:
        console.log("Entrada de texto no valida.")

}