const alunos = [
    {nome: 'Leonardo', nota: 10},
    {nome: 'Pedro', nota: 9},
    {nome: 'João', nota: 3},
    {nome: 'Ruama', nota: 8},
    {nome: 'Valentina', nota: 6},
    {nome: 'Marisa', nota: 2},
]

console.log('Alunos APROVADOS:')
const alunosAprovados = alunos.some(function(item) {
    if (item.nota >= 6) {
        console.log(`Nome: ${item.nome}, Nota: ${item.nota}`);
    }
})

console.log('Alunos REPROVADOS:')
const alunosReprovados = alunos.some(function(item) {
    if (item.nota < 6) {
        console.log(`Nome: ${item.nome}, Nota: ${item.nota}`);
    }
})