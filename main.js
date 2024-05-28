function Serie(nome, temporadas, anoLancamento) {
    this.nome = nome;
    this.temporadas = temporadas;
    this.anoLancamento = anoLancamento;
    this.getAssistir = function() {
        console.log(`Assistindo ${this.nome}...`);
    }
}

function SerieNetflix(nome, temporadas, anoLancamento) {
    this.plataforma = 'Netflix';
    Serie.call(this, nome, temporadas, anoLancamento);
}

function SerieHboMax(nome, temporadas, anoLancamento) {
    this.plataforma = 'Hbo Max';
    Serie.call(this, nome, temporadas, anoLancamento);
}

const arrow = new SerieNetflix('Arrow', 8, 2010);
const got = new SerieHboMax('GOT', 8, 2012);
const sherlock = new SerieHboMax('Sherlock', 3, 2016);

console.log(arrow.getAssistir());
console.log(got.getAssistir());
console.log(sherlock.getAssistir());