function iniciar() {

    var valor = document.getElementById("iptQtd").value;

    valor = parseInt(valor);

    if (isNaN(valor)) {
        alert("Digite um número!");
        return;
    }

    var spnRes = document.createElement("span");

    spnRes.style.width = "50px";
    spnRes.style.height = "50px";
    spnRes.style.width = "50px";
    spnRes.style.height = "50px";
    spnRes.style.display = "inline-flex";
    spnRes.style.justifyContent = "center";
    spnRes.style.alignItems = "center";
    spnRes.style.margin = "3px";
    var cores = ["red", "blue", "green", "purple", "orange", "pink", "yellow", "brown", "gray", "black"];

    var corAleatoria = cores[Math.floor(Math.random() * cores.length)];

    spnRes.style.backgroundColor = corAleatoria;
    spnRes.style.color = "white";

    spnRes.innerHTML = valor;

    document.getElementById("principal").appendChild(spnRes);

}

function removerAleatorio() {

    var principal = document.getElementById("principal");

    var elementos = principal.children;

    if (elementos.length > 0) {

        var indice = Math.floor(Math.random() * elementos.length);

        principal.removeChild(elementos[indice]);
    }
}