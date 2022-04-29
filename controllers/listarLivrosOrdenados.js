//Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas.

const livros = require('../database')
const read = require('readline-sync')

const livrosOrdenados = () => {
   //quando o 1 é chamado lá no app entra aqui nesse codigo
    const confirmacao = read.question('Tem certeza que deseja ver os livros ordenados? S/N ').toUpperCase()

    if (confirmacao ==='S') {
      const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas ) 
      console.table(livrosOrdenados)
    }
}
module.exports = livrosOrdenados