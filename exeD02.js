// ✅ 🎯 EXERCÍCIOS DO DIA 2
// Abre teu editor ou CodeSandbox e faz um por um.

// ✅ Faz e me manda aqui o código ou diz se teve dificuldade em algum.

// ✅ Exercício 1
// Crie uma função tradicional chamada soma que receba 2 números e retorne a soma.
// ➡️ Testa com 5 + 7.

// ✅ Exercício 2
// Crie uma arrow function chamada multiplica que receba 2 números e retorne a multiplicação.
// ➡️ Testa com 3 * 4.

// ✅ Exercício 3
// Crie um array com 4 frutas.
// ➡️ Use forEach para imprimir cada fruta no console.

// ✅ Exercício 4
// Crie um array de números [1, 2, 3, 4, 5].
// ➡️ Use map para criar um novo array com cada número ao quadrado.
// ➡️ Imprima o novo array.

// ✅ Exercício 5
// Use o mesmo array de números.
// ➡️ Use filter para criar um novo array só com números maiores que 3.
// ➡️ Imprima o resultado.


function soma(num1, num2){
    return num1+num2
}
console.log(soma(5,7))

const multiplicacao = (num1,num2)=>{
    return num1*num2
}
console.log(multiplicacao(3,4))

const arrayFrutas = ["banana","maça","uva","melão"]

arrayFrutas.forEach((fruta)=>{
    console.log("Fruta: ", fruta)
})

const arrayNum= [1, 2, 3, 4, 5]
let arrNum2 = arrayNum.map((num)=>num*num)

console.log(arrNum2)

function arrayFilter(num){
    let arrayFilterNum=arrayNum.filter((n)=> n>num)
    return arrayFilterNum
}

console.log(arrayFilter(3))