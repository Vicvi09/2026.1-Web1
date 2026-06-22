function salvar() {
    const inputNumber = document.getElementById('iptNumber');
    const number = inputNumber.value;
    
    if (number) {
        localStorage.setItem('number', number);
        console.log('Número salvo:', number);
        inputNumber.value = '';
    } else {
        console.log('Por favor, insira um número para salvar.');
    }

    mostrar();

}    

function mostrar() {
    const savedNumber = localStorage.getItem('number');

    const spanSavedNumber = document.getElementById('spanSavedNumber');

    if (savedNumber) {
        spanSavedNumber.textContent = `Número salvo: ${savedNumber}`;
        console.log('Número recuperado:', savedNumber);
    } else {
        spanSavedNumber.textContent = 'Nenhum número salvo.';
        console.log('Nenhum número encontrado no localStorage.');
    }
}

function limpar() {
    localStorage.clear();
    console.log('localStorage limpo.');
    mostrar();
}