console.log(Math.max(5,78,10))

console.log(Math.floor(5.14))

let listNumber = [1,2,3,4,5]

for (let i = 0 ; i< listNumber.length ; i++){
    console.log("numero: ",listNumber[i])
    if (listNumber[i] == 3){
        console.log("3")
        continue
    }
}
let cont =0
while(cont <= 10 ){
    console.log("Estou imprimindo :", cont )
    cont ++
}

do {
    console.log('valor cont : ', cont)
    cont--
}while(cont == 0)


const candidatos =[
    
    {nome: 'João', idade: 25},
    {nome: 'Maria', idade: 30},
    {nome: 'Luan' , idade: 29},
    {nome: 'Pedro', idade: 35},
    {nome: 'Joana', idade: 20},
    
]

for(let i=0; i< candidatos.length; i++){
    if (candidatos[i].nome == 'Luan'){
        console.log(candidatos[i].nome , "Programador")
        continue
    }
    console.log(candidatos[i].nome , ' não é Programador')
}


const job = 'programador'

switch (job){
    case 'programador':
        console.log('Programador')
        break;
    case 'advogado':
        console.log('Advogado')
        break
    default:
        console.log('Não sei o que é isso')
}