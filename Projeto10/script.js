function iniciar() {

    var valor = parseInt(document.getElementById("iptQtd").value);

    var spnNumber = document.getElementById("spnNumber");

    if (isNaN(valor)) {
        spnNumber.innerHTML = "Digite um número!";
        return;
    }

    if (valor % 2 === 0) {
        spnNumber.innerHTML = valor + " é PAR";
    } else {
        spnNumber.innerHTML = valor + " é ÍMPAR";
    }
}

function verificar() {

    var valor = parseInt(document.getElementById("iptQtd").value);

    var spnNumber = document.querySelector("#spnNumber");

    if (!isNaN(valor)) {

        if (valor % 2 === 0) {
            spnNumber.textContent = valor + " é PAR";
        } else {
            spnNumber.textContent = valor + " é ÍMPAR";
        }

    } else {
        spnNumber.textContent = "Digite um número!";
    }
}