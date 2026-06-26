const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b");

const valorR = document.getElementById("valorR");
const valorG = document.getElementById("valorG");
const valorB = document.getElementById("valorB");

const painelR = document.getElementById("painelR");
const painelG = document.getElementById("painelG");
const painelB = document.getElementById("painelB");

const resultado = document.getElementById("resultado");

function atualizarCor(){

    let vermelho = r.value;
    let verde = g.value;
    let azul = b.value;

    valorR.innerHTML = vermelho;
    valorG.innerHTML = verde;
    valorB.innerHTML = azul;

    painelR.style.backgroundColor = `rgb(${vermelho},0,0)`;

    painelG.style.backgroundColor = `rgb(0,${verde},0)`;

    painelB.style.backgroundColor = `rgb(0,0,${azul})`;

    document.querySelector("body").style.backgroundColor =
    `rgb(${vermelho},${verde},${azul})`;

}

r.addEventListener("input", atualizarCor);

g.addEventListener("input", atualizarCor);

b.addEventListener("input", atualizarCor);

