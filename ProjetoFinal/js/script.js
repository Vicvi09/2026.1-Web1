const jogadores = [
    "Pelé",
    "Garrincha",
    "Romário",
    "Bebeto",
    "Ronaldo",
    "Ronaldinho",
    "Kaká",
    "Neymar",
    "Rivaldo",
    "Cafu",
    "Roberto Carlos",
    "Dunga",
    "Zico",
    "Sócrates",
    "Falcão",
    "Tostão",
    "Jairzinho",
    "Careca",
    "Thiago Silva",
    "Casemiro",
    "Alisson",
    "Marquinhos",
    "Vinícius Júnior",
    "Richarlison",
    "Lucas Paquetá"
];


let restantes = [...jogadores];
let sorteados = [];

const palavra = document.getElementById("sorteado");
const historico = document.getElementById("historico");
const botao = document.getElementById("btn");

const cartelas = [
    document.getElementById("cartela1"),
    document.getElementById("cartela2"),
    document.getElementById("cartela3"),
    document.getElementById("cartela4"),
    document.getElementById("cartela5")
];


function criarCartela(cartela){

    let copia = [...jogadores];

    for(let i=0;i<8;i++){

        let indice = Math.floor(Math.random()*copia.length);

        let jogador = copia[indice];

        copia.splice(indice,1);

        let casa = document.createElement("div");

        casa.classList.add("casa");

        casa.innerHTML = jogador;

        cartela.appendChild(casa);

    }

}


cartelas.forEach(criarCartela);


botao.addEventListener("click", sortear);

function sortear(){

    if(restantes.length==0){

        alert("Todos os jogadores já foram sorteados!");

        return;

    }

    let indice = Math.floor(Math.random()*restantes.length);

    let nome = restantes[indice];

    restantes.splice(indice,1);

    sorteados.push(nome);

    palavra.innerHTML = nome;

    historico.innerHTML = sorteados.join(" | ");

    marcarJogador(nome);

    verificarVencedor();

}


function marcarJogador(nome){

    const casas = document.querySelectorAll(".casa");

    casas.forEach(function(casa){

        if(casa.innerHTML === nome){

            casa.classList.add("marcado");

        }

    });

}


function verificarVencedor(){

    for(let i=1;i<=5;i++){

        let casas = document.querySelectorAll("#cartela"+i+" .casa");

        let ganhou = true;

        casas.forEach(function(casa){

            if(!casa.classList.contains("marcado")){

                ganhou = false;

            }

        });

        if(ganhou){

            setTimeout(function(){

                alert("🎉 Jogador " + i + " venceu o Bingo da Copa!");

                if(confirm("Deseja iniciar uma nova partida?")){

                    location.reload();

                }

            },200);

            botao.disabled = true;

            return;

        }

    }

}
function iniciarJogo(){

    window.location.href = "jogo.html";

}
function voltar() {

    if(confirm("Tem certeza que deseja voltar? O jogo será reiniciado.")){

        window.location.href = "iniciar.html";

    }

}