const livros = require('../database')
const read = require('readline-sync')

const buscarLivros = () => {
    const opcaoInicial = read.question('Deseja buscar por categoria? S/N').toUpperCase()

    if (opcaoInicial === 'S') {
        const categorias = livros.map(livro => livro.categoria)
        console.table(categorias)
    }
}

module.exports = buscarLivros

