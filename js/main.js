$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')
    
    $('#cep').mask('00000-000')

    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        }, 

        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const nome = $('#nome').val();
        const email = $('#email').val();
        const telefone = $('#telefone').val();
        const cpf = $('#cpf').val();
        const endereco = $('#endereco').val();
        const cep = $('#cep').val();

        let novoItem = $('<ul></ul>');
        $(`<li>Nome: ${nome}</li>
            <li>E-mail: ${email}</li>
            <li>Telefone: ${telefone}</li>
            <li>CPF: ${cpf}</li>
            <li>Endereço: ${endereco}</li>
            <li>CEP: ${cep}</li>
        `).appendTo(novoItem);
        $(novoItem).appendTo('.resultado');
    })
})