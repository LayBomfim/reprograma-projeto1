//Deverá listar livros que ainda não foram lidos

const livros = require('../database')
const read = require('readline-sync')

const livrosNaoLidos = () => {
    const livrosNaoLidos = livros.filter((item) => item.leu === false)
    const livrosNaoLidosOrdenados = livrosNaoLidos.sort((a, b) => a.paginas - b.paginas)
    console.table(livrosNaoLidosOrdenados)

}
 module.exports = livrosNaoLidos

 //Além de pedir a lista dos livros não lidos, solicitei de maneiras ordenadas por páginas.

 
