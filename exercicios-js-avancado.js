
// =============================================
// 🚀 Exercícios de Lógica em JavaScript (Intermediário/Avançado)
// 📅 Arquivo gerado para treinar array, objetos e métodos de alto nível
// 💡 Métodos úteis: map, filter, reduce, split, join, sort, includes, etc.
// =============================================

// 1. Dobrar os valores de um array
// 🔧 Use: map
function dobrarValores(array) {
  // return array.map(num => num * 2);
}

console.log(dobrarValores([1, 2, 3])) // [2, 4, 6]

// --------------------------------------------

// 2. Filtrar nomes com mais de 5 letras
// 🔧 Use: filter
function filtrarNomes(nomes) {
  // return nomes.filter(nome => nome.length > 5);
}

console.log(filtrarNomes(["Ana", "Robson", "Clara", "Luiz", "Gabriela"])) // ["Robson", "Gabriela"]

// --------------------------------------------

// 3. Somar apenas números positivos
// 🔧 Use: filter + reduce
function somarPositivos(array) {
  // return array.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0);
}

console.log(somarPositivos([-3, 2, 0, 5, -1])) // 7

// --------------------------------------------

// 4. Contar palavras em uma frase
// 🔧 Use: split
function contarPalavras(frase) {
  // return frase.trim().split(/\s+/).length;
}

console.log(contarPalavras("Eu gosto muito de programar.")) // 5

// --------------------------------------------

// 5. Contar letras
// 🔧 Use: for..of ou reduce
function contarLetras(string) {
  // let contagem = {};
  // for (let letra of string) {
  //   if (letra === ' ') continue;
  //   contagem[letra] = (contagem[letra] || 0) + 1;
  // }
  // return contagem;
}

console.log(contarLetras("ana")) // { a: 2, n: 1 }

// --------------------------------------------

// 6. Encontrar o segundo maior número
// 🔧 Use: sort ou lógica manual
function segundoMaior(array) {
  // let ordenado = [...new Set(array)].sort((a, b) => b - a);
  // return ordenado[1];
}

console.log(segundoMaior([5, 1, 7, 3, 9])) // 7

// --------------------------------------------

// 7. Verificar se dois arrays são iguais
// 🔧 Use: length + every
function arraysIguais(a1, a2) {
  // if (a1.length !== a2.length) return false;
  // return a1.every((val, index) => val === a2[index]);
}

console.log(arraysIguais([1, 2, 3], [1, 2, 3])) // true
console.log(arraysIguais([1, 2, 3], [3, 2, 1])) // false

// --------------------------------------------

// 8. Extrair nomes de um array de objetos
// 🔧 Use: map
function extrairNomes(array) {
  // return array.map(obj => obj.nome);
}

console.log(extrairNomes([{ nome: "Ana", idade: 25 }, { nome: "Robson", idade: 30 }])) // ["Ana", "Robson"]

// --------------------------------------------

// 9. Filtrar maiores de idade
// 🔧 Use: filter
function filtrarMaioresDeIdade(usuarios) {
  // return usuarios.filter(user => user.idade >= 18);
}

console.log(filtrarMaioresDeIdade([
  { nome: "Carlos", idade: 17 },
  { nome: "Bianca", idade: 22 },
  { nome: "João", idade: 15 }
]))

// --------------------------------------------

// 10. Somar idades com reduce
// 🔧 Use: reduce
function somarIdades(pessoas) {
  // return pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0);
}

console.log(somarIdades([
  { nome: "Maria", idade: 20 },
  { nome: "Lucas", idade: 25 },
  { nome: "Joana", idade: 30 }
])) // 75
