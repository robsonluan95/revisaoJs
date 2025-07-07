// async function buscarPosts(){
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const posts = await response.json()
//   console.log(posts)
// }
// buscarPosts()



async function buscarUser(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
  const userNameEmail = users.map((user)=>({
    name:user.name,
    email:user.email
  }))

  console.log(userNameEmail)
}

buscarUser()

const produtos = [
  { nome: "Mouse Gamer", preco: 120.00 },
  { nome: "Teclado Mecânico", preco: 350.00 },
  { nome: "Monitor 24''", preco: 899.99 }
];

function buscarProdutos(validada){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(validada){
        resolve(produtos)
      }else{
        reject("Error - Erro ao buscar produtos")
      }
    },2000)
  })
}

async function exibirProduto(){
  try{
    let produto = await buscarProdutos(false)
    console.log(produto)
  }catch(err){
    console.error(err)
  }
}

exibirProduto()