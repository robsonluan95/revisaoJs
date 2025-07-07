let array = [10, 20, 30, 40]


const arr= array.reduce((acc,val)=>acc+val,0)

console.log(arr)


let produtos = [
  { nome: "Livro", preco: 40 },
  { nome: "Caneta", preco: 5 },
  { nome: "Mochila", preco: 120 }
]


const somaProdutos = produtos.reduce((acc,valAtual)=>acc + valAtual.preco,0)

console.log(somaProdutos)

const alunos = [
  { nome: "Carlos", nota: 8 },
  { nome: "Ana", nota: 4 },
  { nome: "Pedro", nota: 9 },
  { nome: "Julia", nota: 5 }
]

const aprovados = alunos.reduce((acc,alunos)=>alunos.nota>=6?acc+1:acc,0)

console.log(aprovados)

const frutas = ["maçã", "banana", "maçã", "laranja", "banana"];

const contagem = frutas.reduce((acumulador,fruta)=>{
    if(acumulador[fruta]){
        acumulador[fruta] = acumulador[fruta]+1
    }else{
        acumulador[fruta]=1
    }
    return acumulador
},{})

console.log(contagem)
