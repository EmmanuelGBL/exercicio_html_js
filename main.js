const form = document.getElementById('form-numerico');
const MensagemErro = document.querySelector('.error-message')
const MensagemSucesso = document.querySelector('.sucess-message')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const numeroA = document.getElementById('numero-A').valueAsNumber;
    const numeroB = document.getElementById('numero-B').valueAsNumber;
    
    if (numeroB > numeroA) {
        MensagemSucesso.innerHTML = "O segundo numero é maior que o primeiro, parabéns! Muito Bem!";
        MensagemSucesso.style.display = 'block';
        MensagemErro.style.display = 'none';
        
    } else {
        MensagemErro.innerHTML = "O primeiro numero foi maior que o segundo numero, digite novamente!";
        MensagemErro.style.display = 'block';
        MensagemSucesso.style.display = 'none';
    }
});







