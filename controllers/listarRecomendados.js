//Deverá listar livros que já foram lidos e que são recomendados

const livros = require('../database')
const read = require('readline-sync')

const listarRecomendados = () => {
    const listarRecomendados = livros.filter((item) => item.recomenda)
console.table(listarRecomendados)

}
module.exports = listarRecomendados