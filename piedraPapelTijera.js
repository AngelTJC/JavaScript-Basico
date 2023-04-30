let opciones = ["piedra", "papel", "tijera"];

function juego(entrada) {
    let cpu = opciones[Math.floor(Math.random() * (2 - 0 + 1)) + 0];

    if (entrada === "piedra" && cpu === "tijera") {
        console.log("Ganaste!!!! --->" + cpu);
    } else if (entrada === "papel" && cpu === "piedra") {
        console.log("Ganaste!!! --->" + cpu);
    } else if (entrada === "tijera" && cpu === "papel") {
        console.log("Ganaste!!! --->" + cpu);
    } else if (entrada === "piedra" && cpu === "papel") {
        console.log("Perdiste!!! --->" + cpu);
    } else if (entrada === "papel" && cpu === "tijera") {
        console.log("Perdiste!!! --->" + cpu);
    } else if (entrada === "tijera" && cpu === "piedra") {
        console.log("Perdiste!!! --->" + cpu);
    } else if (entrada === cpu) {
        console.log("Empate!!! --->" + cpu);
    }

}
