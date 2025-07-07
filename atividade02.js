function dobrarArray(array) {
    let arrayDobrado = []
    for (let i = 0; i < array.length; i++) {
        arrayDobrado[arrayDobrado.length] = array[i] * 2
    }
    return arrayDobrado
}

console.log("Dobra array :", dobrarArray([1, 2, 3]))

const nomeMaior5 = (arrayNomes) => {
    nomes = []
    for (let i = 0; i < arrayNomes.length; i++) {
        if (arrayNomes[i].split('').length > 5) {
            nomes[nomes.length] = arrayNomes[i]
        }
    }

    return nomes
}
console.log("Nome maior que 5 :", nomeMaior5(["Ana", "Robson", "Clara", "Luiz", "Gabriela"]))


const somarPositivo = (arrayNum) => {
    let soma = 0
    for (let i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > 0) {
            soma += arrayNum[i]
        }
    }
    return soma
}

console.log("Soma dos Positivos :", somarPositivo([-3, 2, 0, 5, -1, 8, 8, 9, -15]))

const contarPalavra = (string) => {
    let cont = (string.split(' ').length)
    return cont
}

console.log("Contador de Palavras: ",contarPalavra("Eu gosto muito de programar vai neymaaaar play."))

const quantidadeLetras = (string) => {
    //Cria o objeto
    let contagem = {};

    for (let i = 0; i < string.length; i++) {
        //Segura qual letra o laço ta passando no momento
        let letra = string[i]
        //Verifica se essa letra ja tem no objeto
        if (contagem[letra]) {
            //Caso tenha letra ele atribiu soma ao valor que ela tem
            contagem[letra]++
        } else {
            //Caso não tenha ele a coloca 1
            contagem[letra] = 1
        }

    }
    return contagem
}

const segundoMaior = arrNum => {
    let [maior,segundoMaior] = [arrNum[0], arrNum[0]]

    for (const n of arrNum) {
        if (n > maior) {
            segundoMaior = maior;
            maior = n
        }else if(n>segundoMaior && n < maior){
            segundoMaior = n
        }

    }
    return segundoMaior
}

console.log("Segundo maior numero: ",segundoMaior([5, 1, 7, 3, 9]))

const arrComparison = (arr1,arr2) =>{
    if (arr1.length === arr2.length){
        for(let i = 0 ;i < arr1.length; i++){
            if(arr1[i] != arr2[i]){
                return false
            }
        }
        return true
        
    }else{
        return false
    }
}

console.log('Array de comparação',arrComparison([1, 2, 3], [1, 4, 3]))
let numE = 20

function exemplo(){ 
	let numE = 10
	return numE
}
console.log(exemplo())
// valor que vai sair é 10

let num = 20

function exemploAninhado(){ 
	let num = 10
	if(true){
		let num = 40
		console.log("Num do IF" , num )
	}
	console.log("Num da Função" , num )
}
console.log("Num da do escopo Geral" , num )
exemploAninhado()
// valor que vai sair são todos do referente local que se encontra 

const arrowFunction = (n) => { 
	
	if(n %2 ==0 ){
		console.log("par: " , n)
		return
	}
	console.log("impar: " , n)
}
arrowFunction(11)

const arrowFunction20 = (n) => { 
	return n*0,8
}
console.log(`80% de 10 é :` , arrowFunction20(10))

// SIMPLIFICADA

const arrowPorcentagem = (x) => x * 0.8
console.log("Quanto é:", arrowPorcentagem(88))

const arrowVerificPar= (n) => { 
	if ( n === undefined){
        console.log("Não tem valor " )
		return
	}else if(n %2 ==0 ){
		console.log("tem e é par: " , n)
		return
	}else {
        console.log("tem mas é impar: " , n)
    }
	
}
arrowVerificPar()

function notificacao(nome,notificacao=0){
    if (nome=== undefined){
        console.log("Sem usuario ")
    }
    return `Ola ${nome} , você tem ${notificacao} notificações`
}

console.log(notificacao("Luan",50))

function arraySort(num){
    let arr = [...num]


    for (let i = 0 ; i < arr.lenth){
        if (n<menor ){
            
        }
    }


}

console.log(arraySort([5,3,2,4,1]))