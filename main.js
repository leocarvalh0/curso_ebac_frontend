document.addEventListener('DOMContentLoaded', function() {
    const nome = document.getElementById('nome');
    const avatar = document.getElementById('avatar');
    const repositorios = document.getElementById('repositorios');
    const usuario = document.getElementById('usuario');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const link = document.getElementById('link');

    fetch('https://api.github.com/users/leocarvalh0')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        nome.innerText = json.name;
        avatar.src = json.avatar_url;
        usuario.innerText = json.login;
        repositorios.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        link.href = json.html_url;
    })
    .catch(function(erro) {
        throw new Error('Erro ao carregar os dados');
    })
})