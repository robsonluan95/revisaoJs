
// =============================================
// 📙 Exercícios de JavaScript - Nível Intermediário
// 🧰 Arrays, Objetos, Funções de Alta Ordem
// =============================================

// 1. Contar vogais em uma string
function contarVogais(str) {
  // const vogais = "aeiouAEIOU";
  // return str.split('').filter(l => vogais.includes(l)).length;
}
console.log(contarVogais("Javascript")); // 3

// 2. Inverter uma string
function inverter(str) {
  // return str.split('').reverse().join('');
}
console.log(inverter("abc")); // "cba"

// 3. Remover duplicatas de array
function removerDuplicatas(array) {
  // return [...new Set(array)];
}
console.log(removerDuplicatas([1, 2, 2, 3])); // [1,2,3]

// 4. Verificar se palavra é palíndromo
function ehPalindromo(str) {
  // let invertida = str.split('').reverse().join('');
  // return str === invertida;
}
console.log(ehPalindromo("arara")); // true

// 5. Criar função que retorna objeto de contagem de letras
function contarLetras(str) {
  // const resultado = {};
  // for (let letra of str) {
  //   if (letra !== ' ') resultado[letra] = (resultado[letra] || 0) + 1;
  // }
  // return resultado;
}
console.log(contarLetras("ovo")); // { o:2, v:1 }
