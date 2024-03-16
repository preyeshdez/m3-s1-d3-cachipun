let victoriasHumano = 0;
let victoriasMaquina = 0;
let empates = 0;
let eleccionHumano;
let eleccionMaquina;
let cantidadRondas = 0;
let resultado = "";

function main(){
    cantidadRondas = Number(prompt("Ingrese la cantidad de rondas que desea jugar"));

    for(let i=1; i<=cantidadRondas; i++){
        jugar(i);
    };

    resultado = `Resultado final\nJugador: ${victoriasHumano}\nMáquina: ${victoriasMaquina}\nEmpates: ${empates}`;

    if(victoriasHumano>victoriasMaquina){
        alert(`${resultado}\nFelicidades, ganaste`)
    } else if(victoriasHumano<victoriasMaquina){
        alert(`${resultado}\nMala suerte, la máquina ganó`);
    }else{
        alert(`${resultado}\nHa habido un empate`);
    }

    alert("Fin del juego");
}

function jugar(partida){
    alert("Inicia la ronda " + partida);
    // 1 = piedra, 2 = papel, 3 = tijeras.
    eleccionHumano = Number(prompt("Elegir:\n1: Piedra\n2: Papel\n3: Tijeras"));
    eleccionMaquina = Math.floor(Math.random() * (4 - 1) + 1);

    if(eleccionHumano == eleccionMaquina){
        alert("Empate");
        empates++
    } else if(eleccionHumano == 1 && eleccionMaquina == 2){
        alert("Jugador: Piedra vs Máquina: Papel\nPerdiste esta ronda");
        victoriasMaquina++;
    } else if(eleccionHumano == 1 && eleccionMaquina == 3){
        alert("Jugador: Piedra vs Máquina: Tijeras\nGanaste esta ronda")
        victoriasHumano++;
    } else if(eleccionHumano == 2 && eleccionMaquina == 1){
        alert("Jugador: Papel vs Máquina: Piedra\nGanaste esta ronda")
        victoriasHumano++;
    } else if(eleccionHumano == 2 && eleccionMaquina == 3){
        alert("Jugador: Papel vs Máquina: Tijeras\nPerdiste esta ronda");
        victoriasMaquina++;
    } else if(eleccionHumano == 3 && eleccionMaquina == 1){
        alert("Jugador: Tijeras vs Máquina: Piedra\nPerdiste esta ronda");
        victoriasMaquina++;
    } else if(eleccionHumano = 3 && eleccionMaquina == 2){
        alert("Jugador: Tijeras vs Máquina: Papel\nGanaste esta ronda")
        victoriasHumano++;
    }

    let resultadoParcial = `Jugador: ${victoriasHumano}\nMáquina: ${victoriasMaquina}\nEmpates: ${empates}`;
    alert(resultadoParcial);

};

main();