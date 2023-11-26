$('form').on('submit', function(e) {
    e.preventDefault();

    const nomeDaTarefa = $('#nome-tarefa').val();
    let novoItem = $('<li></li>');
    $(`<span>${nomeDaTarefa}</span>`).appendTo(novoItem);
    $(novoItem).appendTo('ul')

    $('#nome-tarefa').val('');
})

$('ul').click(function() {
    $('span').css("text-decoration", "line-through")
})