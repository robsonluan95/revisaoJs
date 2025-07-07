// ✅ Exercício 1
// ✔️ Buscar lista de usuários em:

// https://jsonplaceholder.typicode.com/users

// ✔️ Filtrar e mostrar apenas os que são da cidade "South Christy"

async function exibirApi(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const user = await response.json()
  const userCities = await user.filter(user => user.address.city=="South Christy")
  console.log(userCities)
}

exibirApi()



// ✅ Exercício 2
// ✔️ Buscar posts em:

// https://jsonplaceholder.typicode.com/posts

// ✔️ Mostrar apenas os 5 primeiros títulos em MAIÚSCULO

async function exibirPosts(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const post = await response.json()
  const fistFivePost = post.slice(0,5)
  const titlePorts= fistFivePost.map((titlePort)=>({
    title:titlePort.title.toUpperCase()
  }))
  console.log(titlePorts)
}

exibirPosts()

// ✅ Exercício 3
// ✔️ Buscar os usuários da mesma API

// ✔️ Transformar o array de usuários em objeto com ID como chave.

// ✅ Exemplo esperado:

async function buscarUser(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
  const arrUser = users.reduce((acc,user)=>{
    acc[user.id]={
      name:user.name,
      email:user.email
    }
    return acc
  },{})
  console.log(arrUser)

}

buscarUser()


// ✅ Exercício 4
// ✔️ Crie um array local de produtos:

const loja = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Fone", preco: 200 },
  { nome: "Monitor", preco: 1200 }
]

async function buscarProdutos(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let desconto = loja.filter(res=>res.preco>1000)
      .map((res)=>({
        nome:res.nome,
        preco:res.preco*0.9
      }))
      resolve(desconto)
    },1000)

  })
}

buscarProdutos().then((res)=>console.log(res))