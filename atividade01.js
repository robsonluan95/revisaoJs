function sumTwoNumber(numb,numb2){
    return numb + numb2 
}

console.log(sumTwoNumber(10,5))

function parOuImpar(num){
    return num % 2 === 0 ? 'par':'impar'


}
console.log(parOuImpar(10))


function maiorQue(num1,num2){
    if (num1>num2){
        return num1
    }else{
        return num2
    }
}

console.log(maiorQue(10,99))
const arrayNum = [12,52,88,9,54,-5627]

function sumA(array){
    let sum = 0

    for (let i = 0 ; i<array.length;i++){
        sum+=array[i]
        
    }
    return sum
    
}
console.log(sumA(arrayNum))


function contadorDeOcorrencia(arrayDeOcorrencia,numero){
    let cont = 0
    for (let i = 0; i<arrayDeOcorrencia.length;i++){
        if (arrayDeOcorrencia[i]===numero){
            cont+=1
        }

    }
    return cont
}

console.log(contadorDeOcorrencia([2,15, 3,5,2,2,2, 2, 5, 2, 7], 15))


function inverterString(string){
    let stringInverse = ''
    for (let i = string.length-1 ; i>=0 ; i--){
        stringInverse += string[i]
    }
    return stringInverse

}

console.log(inverterString("casa"))

const ehPalindromo =(string)=>{
    let stringInverse = ''
    for (let i = string.length - 1 ; i >=0 ; i-- ){
        stringInverse += string[i]
    }
    if (stringInverse === string){
        return true
    }else {
        return false
    }

}

console.log(ehPalindromo('ana'))


const maiorNumArray = (array)=>{
    let numArray =array[0]
    for (let i = 0 ; i < array.length; i++){
        if (numArray<array[i]){
            numArray = array[i]
        }
    }
    return numArray
}

console.log(maiorNumArray(arrayNum))

function separaPar(arrayPares){
    let arrayDePares =[]
    for (let i = 0; i <arrayPares.length  ;i++){
        if (arrayPares[i] % 2 == 0){
            arrayDePares[arrayDePares.length]= arrayPares[i]
        }
    }
    return arrayDePares
}

console.log(separaPar([1, 2, 3, 4, 5, 6]))

function contarVogais(string){
    const arrayVogais = string.split('')
    let quantVogais = 0

    for(let i = 0 ; i<arrayVogais.length; i++ ){
        if (arrayVogais[i] == 'a'||arrayVogais[i] == 'e'||arrayVogais[i] == 'i'||arrayVogais[i] == 'o'||arrayVogais[i] == 'u'){
            quantVogais+=1
        }

    }
    return quantVogais
}

console.log(contarVogais("corri para o neymar"))