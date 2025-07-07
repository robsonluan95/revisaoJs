// ✅ 4️⃣ EXERCÍCIOS DO DIA 3
// 👉 Faz hoje de noite quando der. Copia isso pro teu Notion!

// ✅ Exercício 1
// Crie um objeto carro com:

// marca (string)

// modelo (string)

// ano (number)
// ✅ Imprima as propriedades com console.log

// ✅ Exercício 2
// Use desestruturação para pegar a marca e modelo do objeto carro.
// ✅ Imprima os valores.

// ✅ Exercício 3
// Crie um array de 3 objetos representando produtos:

// nome

// preço

// ✅ Use forEach para imprimir o nome e preço de cada produto.

// ✅ Exercício 4
// Use map para criar um novo array com o preço em promoção (10% de desconto).
// ✅ Imprima o novo array.

// ✅ Exercício 5
// Use filter para criar um array só com produtos com preço acima de 50 reais.
// ✅ Imprima o resultado.

const carro = {marca: "Honda",modelo:"Civic",ano: 2005}
console.log(carro)

let {marca,modelo}= carro
console.log(marca,modelo)

const produtos = [
    {nome:"Uno",preco:"12000"},
    {nome:"Civic",preco:"18000"},
    {nome:"Corola",preco:"18000"},
]

function Imprimir(){
    produtos.forEach((produto)=>{
        console.log(produto.nome,produto.preco)
    })
}
Imprimir()

const arrStore = [
    {name:"Coca-cola",price:8.99},
    {name:"Doritos",price:12.99},
    {name:"hershey's",price:2.3},
    {name:"Hambuger",price:6.70},
    {name:"Guarana",price:1.99},

]

const newArr =(arr)=>{
    const arrDiscount = arr.map(item=>({name:item.name ,price: (item.price*0.9).toFixed(2)}))
    return arrDiscount
}

console.log(newArr(arrStore))

const greaterThan3 = arrStore.filter(item=> item.price>3)
console.log(greaterThan3)