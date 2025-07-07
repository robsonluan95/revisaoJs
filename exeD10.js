// ✅ Exercícios
// ✅ Exercício 1: GET - Lista de todos os posts
// ✔️ Use fetch para buscar:

// async function listPosts(){
//   try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const posts = await response.json()
//     const all = posts.slice(0,5)
//     console.log(all)

//   }catch(err){
//     console.error(err)
//   }
// }

// listPosts()


// ✅ Exemplo 2: GET com transformação (usuários + empresa)
// Vamos buscar usuários e exibir apenas nome e empresa:


// async function getUserEntreprise() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const dataUsers = await response.json()
//     const user = dataUsers.map((user)=>({
//       name:user.name,
//       enterprise:user.company.name
//     }))
//     console.log(user)
//   } catch (err) {
//     console.error(err)
//   }



// }
// getUserEntreprise()


// ✅ Exemplo 3: Simulando um POST
// Agora vamos simular o envio de um post para a API com method POST:

async function criarPost() {
  try {
    const novoPost = {
      title: "Meu Post",
      body: "Conteudo",
      userId: 1
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(novoPost)
    })
    const resultado = await response.json()
    console.log(resultado)

  } catch (err) {
    console.error(err)
  }
}

criarPost()


async function criarUser() {
  try {
    const users = {
      id: "999",
      name: "Robson Luan"
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(users)

    })
    const resposta = await response.json()
    console.log(resposta)
  } catch (err) {
    console.error(err)
  }
}


criarUser()






const produtos = [
  { nome: "Mouse Gamer", preco: 120.00 },
  { nome: "Teclado Mecânico", preco: 350.00 },
  { nome: "Monitor 24''", preco: 899.99 }
];

const criarProduto= ()=>{
  try{
    const novoProduto = {
      nome,preco
    }


  }catch(err){
    console.log(err)
  }
}

criarProduto(nome,preco)