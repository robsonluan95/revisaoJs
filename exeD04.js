// 🚀 ✅ DIA 4 — PLANO COMPLETO
// ✅ 1️⃣ Funções que retornam outras funções
// Em JS, funções são cidadãs de primeira classe ➜ você pode retornar outra função!

// ✅ Exemplo simples:

// js
// Copiar
// Editar
// function saudacao(nome) {
//   return function() {
//     console.log("Olá, " + nome);
//   }
// }

// const saudacaoLuan = saudacao("Luan");
// saudacaoLuan(); // Olá, Luan
// ✅ Exercício 1:
// 👉 Crie uma função multiplicador que recebe um número X e retorna uma função que multiplica qualquer Y por X.

// js
// Copiar
// Editar
// const dobra = multiplicador(2);
// dobra(5); // 10
// ✅ 2️⃣ Callbacks
// ✅ Uma callback é uma função passada como argumento para outra função.

// ✅ Exemplo:

// js
// Copiar
// Editar
// function processar(valor, callback) {
//   callback(valor);
// }

// processar(5, (num) => {
//   console.log(num * 2);
// }); // 10
// ✅ Exercício 2:
// 👉 Crie uma função executaOperacao que recebe dois números e uma função operadora (ex: soma, multiplicação) e executa.

// js
// Copiar
// Editar
// executaOperacao(2, 3, soma) // 5
// executaOperacao(2, 3, multiplicar) // 6
// ✅ 3️⃣ Promises
// ✅ Uma Promise representa um valor que estará disponível no futuro.

// ✅ Sintaxe básica:

// js
// Copiar
// Editar
// const promessa = new Promise((resolve, reject) => {
//   // processo assíncrono
//   setTimeout(() => {
//     resolve("Sucesso!");
//   }, 2000);
// });

// promessa.then((res) => {
//   console.log(res);
// });
// ✅ Exercício 3:
// 👉 Crie uma Promise que simule buscar dados de usuário após 2 segundos.

// ✔️ Exemplo de uso:

// js
// Copiar
// Editar
// buscarUsuario().then(res => console.log(res));
// ✔️ Resultado esperado:

// css
// Copiar
// Editar
// { nome: "Luan", idade: 29 }
// ✅ 4️⃣ Async/Await
// ✅ Açúcar sintático para lidar com Promises de forma mais limpa.

// ✅ Exemplo:

// js
// Copiar
// Editar
// function esperar() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Pronto!");
//     }, 1000);
//   });
// }

// async function executar() {
//   console.log("Esperando...");
//   const resultado = await esperar();
//   console.log(resultado);
// }

// executar();
// ✅ Exercício 4:
// 👉 Usando o buscarUsuario do exercício anterior, crie uma função exibirUsuario que use async/await para imprimir no console:

// yaml
// Copiar
// Editar
// Nome: Luan | Idade: 29
// ✅ 5️⃣ Mini Desafio Extra (opcional)
// ✅ Simule uma busca de produtos com delay de 2 segundos.

// ✔️ Resultado esperado:

// yaml
// Copiar
// Editar
// [
//   { nome: "Camiseta", preco: 29.99 },
//   { nome: "Calça", preco: 59.99 }
// ]
// ✔️ Use:

// Promise

// Async/Await

// Imprima no console

// ✅ 📌 RESUMO DO DIA 4
// ✔️ Funções retornando funções
// ✔️ Callbacks para controle de fluxo
// ✔️ Promises para operações assíncronas
// ✔️ Async/Await para escrever de forma limpa

const multiplicador = (x) => {
    return (y) => x * y
}

const dobra = multiplicador(3)
console.log(dobra(2))

const somax = (x) => {
    return (y) => x + y
}

const teste = somax(2)
console.log(teste(5))

function potenciaDe(x) {
    return (y) => y ** x
}

const quadrado = potenciaDe(2)
console.log(quadrado(5))

const prefixador = (string) => {
    return (nome) => `${string} , ${nome}`
}

const senhor = prefixador("Senhor")

console.log(senhor("Luan"))

function filtroPorTamanhoMinimo(min) {
    return (arr) => {
        let arrNew = []
        for (const n of arr) {
            if (n.length > min) {
                arrNew.push(n)
            }
        }
        return arrNew
    }
}

const filtro = filtroPorTamanhoMinimo(3)

console.log(filtro(["Oi", "Hello", "Mundo", "JS"]))

function soma(num1, num2) {
    return num1 + num2
}



function executaOperacao(num1, num2, operacao) {
    return operacao(num1, num2)

}

console.log(executaOperacao(1, 1, soma))


const user = { nome: "Luan", idade: 29 }

function buscaUsuario(prop) {
    console.log("Buscando dados")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (prop === "erro") {
                reject("erro ao buscar")
            } else {
                resolve(user)
            }
        }, 2000)

    })
}
//sucesso
buscaUsuario().then((user) => {
    console.log(user)
}).catch(() => {
    console.log("error")
})



const users = [
    { nome: "Luan", idade: 29 },
    { nome: "Carlos", idade: 79 },
    { nome: "Hercules", idade: 24 }
]

function respostaPromise(dados) {
    return new Promise((resolve, reject) => {
        console.log("buscando usuarios")
        setTimeout(() => {
            if (dados === "") {
                reject("Erro")
            } else {
                resolve(dados)
            }
        }, 2000)
    })
}

respostaPromise(users)
    .then(res=>console.log(res))
    .catch(res=>console.log(res))

async function exibirUser(){
    const user = await buscaUsuario()
    console.log("Nome:", user.nome,"|","Idade:",user.idade)
}

exibirUser()


const produtosEstoque = [
    {name:"Coca-cola",price:8.99},
    {name:"Doritos",price:12.99},
    {name:"hershey's",price:2.3},
    {name:"Hambuger",price:6.70},
    {name:"Guarana",price:1.99},
]

const buscarProdutos= (produtos)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (produtos.length===0){
                reject("Error")
            }else{
                resolve(produtos)
            }
        },2000)
    })
}

async function exibirProdutos(produtos){
    const prod = await buscarProdutos(produtos)
    console.log(prod)
}

exibirProdutos(produtosEstoque)