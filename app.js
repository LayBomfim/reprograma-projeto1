
    const read = require('readline-sync')
    const buscarLivros = require('./controllers/buscarLivros')
const livrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
    const livrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarRecomendados = require('./controllers/listarRecomendados')

    const resposta = read.question(`
    ============== Menu ================
    
    1 - CATEGORIA: Buscar livro por categoria
    2 - ORDENAR: Ordenar livros por quantidade de paginas
    3 - RECOMENDADOS: Buscar livros recomendados
    4 - LISTA DE DESEJO: Busca livros nao lidos
    
    5 - SAIR
    
    Digite um numero[1-5]:
    `)

    console.log(resposta)


    //Quando a pessoa escolher a opção 1, eu quero que o JS chame a função que vai estar no meu arquivo
    //controllers/buscarLivros

    switch (resposta) {
        case '1':
            buscarLivros()
         //chamar a funcao buscarLivros
            break
        case '2':
            livrosOrdenados()
            break
        case '3':
            listarRecomendados()
            break
        case'4':
            livrosNaoLidos()         
        default:
            console.log('fim do algoritmo')
            break
    }        
           