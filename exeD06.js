// function simularAPI(api) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!api) {
//                 reject({ mensagem: "Erro ao obter dados" })
//             } else {
//                 resolve({ mensagem: "Dados recebidos com sucesso!" })
//             }

//         }, 2000)
//     })
// }

// simularAPI(false).then((resposta) => { console.log(resposta) }).catch((resposta) => console.log(resposta))

// const produto= { nome: "Notebook", preco: 2500 }

// function buscarProduto(produto){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(produto)
//         },2000)
//     })

// }

// async function exibirProduto(x){
//     const produto = await buscarProduto(x)
//     console.log(produto)
// }

// exibirProduto(produtos)



// const produtosx = [
//     { nome: "Mouse", preco: 50 },
//     { nome: "Teclado", preco: 100 }
// ];

// function buscarProduto(produtos) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(produtos)
//         }, 1000)
//     })

// }

// async function exibirProduto(x) {
//     const produtos = await buscarProduto(x)
//     console.log(produtosx)
// }

// exibirProduto(produtosx)


// const produtos = [
//     { nome: "Mouse Gamer", preco: 120.00 },
//     { nome: "Teclado Mecânico", preco: 350.00 },
//     { nome: "Monitor 24''", preco: 899.99 },
//     { nome: "Headset", preco: 199.50 },
//     { nome: "Cadeira Gamer", preco: 999.00 },
//     { nome: "Webcam Full HD", preco: 230.00 },
//     { nome: "Microfone USB", preco: 320.00 }
// ];

// function aplicarDesconto(produtos) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const arr = produtos.map((produto) => ({
//                 nome: produto.nome,
//                 preco: produto.preco * 0.9

//             }))
//             resolve(arr)
//         }, 2000)
//     })
// }

// async function exibir(x) {
//     const arr =await aplicarDesconto(x)
//     console.log(arr)
// }

// exibir(produtos)

const estoque = [
  { nome: "Caneta", quantidade: 10 },
  { nome: "Caderno", quantidade: 0 },
  { nome: "Lápis", quantidade: 5 },
  { nome: "Borracha", quantidade: 0 },
  { nome: "Marca-texto", quantidade: 3 }
];

function consultaEstoque(estoque){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const disponiveis =estoque.filter(estoque=>estoque.quantidade>0)
            if (disponiveis.length===0){
                reject("Nenhum item disponivel emestoque")
            }else{
                resolve(disponiveis)
            }

        },2000)
    })
}

async function exibir(x){
    const arr = await consultaEstoque(x)
    console.table(arr)
}  

exibir(estoque)