// ✅ 🌟 DIA 5 — Destructuring, Spread, Rest
// Tema de hoje: trabalhar melhor com Objetos e Arrays.
// Usado o tempo todo em React.

// ✅ 📌 1️⃣ Destructuring de Objetos
// ✅ Conceito:
// Permite extrair campos de objetos de forma direta.

// ✅ Exemplo:

// js
// Copiar
// Editar
// const pessoa = { nome: "Luan", idade: 29 };
// const { nome, idade } = pessoa;

// console.log(nome);  // "Luan"
// console.log(idade); // 29
// ✅ 🔹 Exercício 1:
// ➡️ Dado o objeto abaixo:

// js
// Copiar
// Editar
// const carro = { marca: "Toyota", modelo: "Corolla", ano: 2020 };
// ✅ Use destructuring para extrair marca e modelo, e imprima no console.

// ✅ 📌 2️⃣ Destructuring de Arrays
// ✅ Conceito:
// Extrai valores de arrays em variáveis.

// ✅ Exemplo:

// js
// Copiar
// Editar
// const cores = ["vermelho", "azul", "verde"];
// const [cor1, cor2] = cores;

// console.log(cor1); // "vermelho"
// console.log(cor2); // "azul"
// ✅ 🔹 Exercício 2:
// ➡️ Dado:

// js
// Copiar
// Editar
// const numeros = [10, 20, 30, 40];
// ✅ Use destructuring para extrair os dois primeiros números e imprima no console.

// ✅ 📌 3️⃣ Spread Operator ...
// ✅ Conceito:
// Copia ou combina arrays/objetos facilmente.

// ✅ Exemplo com Arrays:

// js
// Copiar
// Editar
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];

// console.log(arr2); // [1, 2, 3, 4]
// ✅ Exemplo com Objetos:

// js
// Copiar
// Editar
// const user = { nome: "Luan", idade: 29 };
// const userClone = { ...user, cidade: "São Paulo" };

// console.log(userClone);
// // { nome: "Luan", idade: 29, cidade: "São Paulo" }
// ✅ 🔹 Exercício 3:
// ➡️ Dado:

// js
// Copiar
// Editar
// const camisa = { tamanho: "M", preco: 29.99 };
// ✅ Use o spread para criar um novo objeto que tenha:

// todos os campos de camisa

// mais cor: "azul"

// ✅ Imprima o novo objeto.

// ✅ 📌 4️⃣ Rest Operator ...
// ✅ Conceito:
// Pega o resto das propriedades ou argumentos.

// ✅ Exemplo com Objetos:

// js
// Copiar
// Editar
// const { nome, ...resto } = { nome: "Luan", idade: 29, cidade: "SP" };

// console.log(nome);  // "Luan"
// console.log(resto); // { idade: 29, cidade: "SP" }
// ✅ Exemplo com Funções:

// js
// Copiar
// Editar
// function somar(...numeros) {
//   return numeros.reduce((acc, n) => acc + n, 0);
// }

// console.log(somar(1, 2, 3, 4)); // 10
// ✅ 🔹 Exercício 4:
// ✅ Crie uma função juntarPalavras que receba qualquer quantidade de palavras (usando rest) e retorne todas juntas em uma string separada por espaço.

// ✅ Exemplo esperado:

// js
// Copiar
// Editar
// console.log(juntarPalavras("oi", "tudo", "bem"));
// // "oi tudo bem"
// ✅ 📌 5️⃣ Desafio Extra — Map e Spread
// ✅ Enunciado:
// ➡️ Dado este array de produtos:

// js
// Copiar
// Editar
// [
//   { nome: "Camiseta", preco: 29.99 },
//   { nome: "Calça", preco: 59.99 },
//   { nome: "Tênis", preco: 89.99 }
// ]
// ✅ Use .map() para criar um NOVO array de produtos com:

// o mesmo nome

// o preço com 10% de desconto (duas casas decimais)

// ✅ Imprima o resultado final.

// ✅ 📌 Resumo do Dia 5 (coloca no Notion)
// ✅ Destructuring de Objetos
// ✅ Destructuring de Arrays
// ✅ Spread Operator (...) para copiar/mesclar
// ✅ Rest Operator (...) para pegar o resto
// ✅ Map com Objetos para transformação

// ✅ ❤️ Instrução para você:
// ✔️ Copia esse plano pro Notion.
// ✔️ Resolve um por um no editor.
// ✔️ Manda as tuas respostas aqui pra eu corrigir.





const carro = { marca: "Toyota", modelo: "Corolla", ano: 2020 };

const {marca,modelo}=carro

console.log(marca,modelo)

const numeros = [10, 20, 30, 40];
const [numero1,numero2]= numeros

console.log(numero1,numero2)

const camisa = { tamanho: "M", preco: 29.99 };

const camisaInfo = {...camisa,cor:"azul"}
console.log(camisaInfo)


function juntarPalavras(...arr){
    
    return arr.join("")
}

console.log(juntarPalavras("oi", "tudo", "bem"));

const arrayProdutos = [
  { nome: "Camiseta", preco: 29.99 },
  { nome: "Calça", preco: 59.99 },
  { nome: "Tênis", preco: 89.99 }
]


function descontoProdutos(arr){
    return arr.map((item)=>({
        ...item,
        preco:(item.preco*0.9).toFixed(2)
    }))
    
}

console.log(descontoProdutos(arrayProdutos))


// ✅ Exercício 4.1
// ➡️ Crie uma função somaTudo que aceite qualquer número de argumentos e retorne a soma.

// ✅ Exemplo esperado:

// js
// Copiar
// Editar
// console.log(somaTudo(1, 2, 3, 4, 5)); // 15
// ✅ Exercício 4.2
// ➡️ Crie uma função listarItens que receba qualquer número de itens (strings) e retorne um array com eles em ordem alfabética.

// ✅ Exemplo esperado:

// js
// Copiar
// Editar
// console.log(listarItens("Banana", "Maçã", "Abacaxi"));
// // ["Abacaxi", "Banana", "Maçã"]
// ✅ Exercício 4.3
// ➡️ Dado este objeto:

// js
// Copiar
// Editar
// const usuario = { nome: "Luan", idade: 29, cidade: "São Paulo", profissao: "Dev" };
// ✅ Use destructuring + rest para extrair nome e guardar o resto em uma variável.
// ✅ Imprima nome e o objeto com o resto.

// ✅ 🌟 MAIS EXERCÍCIOS - TÓPICO 5 (Map com Objetos)
// ✅ Exercício 5.1
// ➡️ Dado:

// js
// Copiar
// Editar
// const livros = [
//   { titulo: "JS Básico", paginas: 120 },
//   { titulo: "React para Iniciantes", paginas: 200 }
// ];
// ✅ Use .map() para criar um novo array com objetos no formato:

// js
// Copiar
// Editar
// { titulo: "JS Básico", leituraRapida: true/false }
// ✔️ Considere leituraRapida = true se tiver menos de 150 páginas.

// ✅ Exercício 5.2
// ➡️ Dado:

// js
// Copiar
// Editar
// const carrinho = [
//   { produto: "Mouse", preco: 50 },
//   { produto: "Teclado", preco: 100 },
//   { produto: "Monitor", preco: 800 }
// ];
// ✅ Use .map() para aplicar 15% de desconto em cada item.
// ✅ Retorne um array novo com:

// js
// Copiar
// Editar
// { produto, precoComDesconto }
// ✅ Preço com duas casas decimais.

// ✅ Exercício 5.3
// ➡️ Dado:

// js
// Copiar
// Editar
// const estoque = [
//   { produto: "Caneta", quantidade: 10 },
//   { produto: "Caderno", quantidade: 0 },
//   { produto: "Lápis", quantidade: 5 }
// ];
// ✅ Use .filter() para retornar apenas os produtos com quantidade maior que 0.

const somaTudo =(...num)=>{
    let cont = 0
    for (const n of num){
        cont+=n
    }
    return cont 
}

console.log(somaTudo(1, 2, 3, 4, 5))

function listarItems(...arr){
    return arrOrganizado= arr.sort()

}
console.log(listarItems("Banana", "Maçã", "Abacaxi"));

const usuario = { nome: "Luan", idade: 29, cidade: "São Paulo", profissao: "Dev" };

const userObj= (x)=>{

    const {nome,...rest}=x
    return{"nome com rest":nome,rest}

}

console.log(userObj(usuario))


const livros = [
  { titulo: "JS Básico", paginas: 120 },
  { titulo: "React para Iniciantes", paginas: 200 }
];

function newArr(allBooks){

    return allBooks.map((book)=>({
        titulo:book.titulo,
        leituraRapiada: book.paginas<150
    }))
}

console.log(newArr(livros))


const carrinho = [
  { produto: "Mouse", preco: 50 },
  { produto: "Teclado", preco: 100 },
  { produto: "Monitor", preco: 800 }
];

const newArrDiscount=(products)=>{
    return products.map((item)=>({
        produto:item.produto,
        preco:item.preco*0.85

    }))
}

console.log(newArrDiscount(carrinho))

const estoque = [
  { produto: "Caneta", quantidade: 10 },
  { produto: "Caderno", quantidade: 0 },
  { produto: "Lápis", quantidade: 5 }
];

function filtrarProdutos(produtos){
    return produtos.filter(produtos=>produtos.quantidade>0)
} 
console.log(filtrarProdutos(estoque))


const filme = {
  titulo: "Interestelar",
  ano: 2014,
  diretor: "Christopher Nolan",
  genero: "Ficção Científica"
};

const {titulo,diretor}=filme

console.log(titulo,diretor)

const cidades = ["São Paulo","Rio de Janeiro","Belo Horizonte","Curitiba"]

const [cidade1,cidade2]=cidades

console.log(cidade1,cidade2)

const produtoOriginal = { nome: "Celular", preco: 1500 };

function alterarProduto(produto){
    return {...produto,garantia:12}
}
console.log(alterarProduto(produtoOriginal))

const pessoa = { nome: "Ana", idade: 25, cidade: "Recife", profissao: "Designer" };

const {nome,...resto}= pessoa
console.log("nome:" ,nome,resto)

function multiplosNumeros (...num){
    let arr =[]
    for (const n of num){
        arr.push(n*2)
    }
    return arr
}

console.log(multiplosNumeros(1, 2, 3)); 

const pets = [
  { nome: "Rex", tipo: "Cachorro" },
  { nome: "Mimi", tipo: "Gato" },
  { nome: "Tico", tipo: "Papagaio" }
];

const descricao=(arr)=>{
    return arr.map((item)=>({
        descricao:`${item.nome} é um ${item.tipo}`
    }))
}

console.log(descricao(pets))

const produtos = [
  { nome: "TV", preco: 2500 },
  { nome: "Geladeira", preco: 3000 },
  { nome: "Liquidificador", preco: 150 }
];

function produtosFilter(produtos){
    return produtos.filter(produtos=>produtos.preco>1000)
}

console.log(produtosFilter(produtos))

const alunos = [
  { nome: "João", nota: 7 },
  { nome: "Maria", nota: 9 },
  { nome: "José", nota: 5 }
];

function passou(alunos){
    return alunos.map((aluno)=>({
        nome:aluno.nome,
        nota:aluno.nota,
        status:aluno.nota>=6?"Aprovado":"Reprovado"
    }))
}

console.log(passou(alunos))