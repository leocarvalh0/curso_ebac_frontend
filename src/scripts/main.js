document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-calculadora').addEventListener('submit', function(e) {
        e.preventDefault();

        let num1 = document.getElementById('primeiro-numero').value;
        let num2 = document.getElementById('segundo-numero').value;
        num1 = parseInt(num1);
        num2 = parseInt(num2);


        let soma = num1 + num2;
        
        document.querySelector('.resultado-valor').innerText = soma;
        document.querySelector('.resultado').style.display = 'block'

    })
})