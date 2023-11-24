const form = document.getElementById('form-deposito');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');

    const messageSucess = document.querySelector('.message-sucess');
    const messageError = document.querySelector('.message-error');

    if (parseFloat(campoA.value) < parseFloat(campoB.value)) {  
        messageError.style.display = 'none';
        messageSucess.style.display = 'block'
    } else {
        messageSucess.style.display = 'none';
        messageError.style.display = 'block';
    }

    campoA.value = '';
    campoB.value = '';
})