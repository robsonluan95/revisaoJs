const produtos = [
  { nome: "Mouse Gamer", preco: 120.00, categoria: "Eletrônicos" },
  { nome: "Teclado Mecânico", preco: 350.00, categoria: "Eletrônicos" },
  { nome: "Monitor 24''", preco: 899.99, categoria: "Eletrônicos" },
  { nome: "Cadeira Gamer", preco: 999.00, categoria: "Móveis" },
  { nome: "Headset", preco: 199.50, categoria: "Eletrônicos" },
  { nome: "Webcam Full HD", preco: 230.00, categoria: "Eletrônicos" },
  { nome: "Microfone USB", preco: 320.00, categoria: "Eletrônicos" },
  { nome: "Smartphone", preco: 2500.00, categoria: "Eletrônicos" },
  { nome: "Notebook", preco: 3500.00, categoria: "Eletrônicos" },
  { nome: "Impressora", preco: 600.00, categoria: "Eletrônicos" },
  { nome: "Caneta", preco: 5.00, categoria: "Papelaria" },
  { nome: "Caderno", preco: 15.00, categoria: "Papelaria" },
  { nome: "Lápis", preco: 3.00, categoria: "Papelaria" },
  { nome: "Borracha", preco: 2.50, categoria: "Papelaria" },
  { nome: "Marca-texto", preco: 4.50, categoria: "Papelaria" },
  { nome: "Livro", preco: 40.00, categoria: "Livros" },
  { nome: "Kindle", preco: 399.00, categoria: "Eletrônicos" },
  { nome: "Tablet", preco: 1200.00, categoria: "Eletrônicos" },
  { nome: "Carregador", preco: 80.00, categoria: "Eletrônicos" },
  { nome: "Cabo USB", preco: 25.00, categoria: "Eletrônicos" },
  { nome: "Sapato", preco: 150.00, categoria: "Vestuário" },
  { nome: "Camisa", preco: 60.00, categoria: "Vestuário" },
  { nome: "Calça Jeans", preco: 120.00, categoria: "Vestuário" },
  { nome: "Jaqueta", preco: 220.00, categoria: "Vestuário" },
  { nome: "Relógio", preco: 450.00, categoria: "Acessórios" },
  { nome: "Óculos de Sol", preco: 200.00, categoria: "Acessórios" },
  { nome: "Boné", preco: 45.00, categoria: "Acessórios" },
  { nome: "Mochila", preco: 130.00, categoria: "Acessórios" },
  { nome: "Tênis", preco: 250.00, categoria: "Vestuário" },
  { nome: "Chinelo", preco: 30.00, categoria: "Vestuário" },
  { nome: "Guarda-chuva", preco: 35.00, categoria: "Acessórios" },
  { nome: "Quadro Decorativo", preco: 120.00, categoria: "Casa" },
  { nome: "Almofada", preco: 40.00, categoria: "Casa" },
  { nome: "Abajur", preco: 90.00, categoria: "Casa" },
  { nome: "Tapete", preco: 180.00, categoria: "Casa" },
  { nome: "Sofá", preco: 2500.00, categoria: "Móveis" },
  { nome: "Mesa de Jantar", preco: 1500.00, categoria: "Móveis" },
  { nome: "Cadeira de Escritório", preco: 400.00, categoria: "Móveis" },
  { nome: "Estante", preco: 350.00, categoria: "Móveis" },
  { nome: "Armário", preco: 800.00, categoria: "Móveis" },
  { nome: "Batedeira", preco: 300.00, categoria: "Eletrodomésticos" },
  { nome: "Geladeira", preco: 3000.00, categoria: "Eletrodomésticos" },
  { nome: "Fogão", preco: 1800.00, categoria: "Eletrodomésticos" },
  { nome: "Micro-ondas", preco: 600.00, categoria: "Eletrodomésticos" },
  { nome: "Sanduicheira", preco: 120.00, categoria: "Eletrodomésticos" },
  { nome: "Ventilador", preco: 200.00, categoria: "Eletrodomésticos" },
  { nome: "Aspirador de Pó", preco: 500.00, categoria: "Eletrodomésticos" },
  { nome: "Liquidificador", preco: 150.00, categoria: "Eletrodomésticos" },
  { nome: "Fone Bluetooth", preco: 250.00, categoria: "Eletrônicos" }
];


async function filtrarEletronicos(produtos){
  return new Promise ((resolve,reject)=>{
    const produtosFilter = produtos.filter(produto=>produto.categoria ==="Eletrônicos")
    resolve(produtosFilter)
  })
}
filtrarEletronicos(produtos).then((res)=>{console.log(res)})


function somaTotal(produtos) {
  return produtos.reduce((acc,atual)=>acc + atual.preco,0)
}

console.log(somaTotal(produtos) )

const produto = { nome: "Teclado", preco: 200, categoria: "Periféricos" }

const {nome,preco,...resto}=produto

console.log("Nome",nome)



async function exibirTitulosPosts() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    const postCompleto = posts.slice(0,3)
    const recebe = postCompleto.map((post)=>({
      title:post.title.toUpperCase()
    }))
    console.log(recebe)
  }catch(err){
    console.error(err)
  }
}

exibirTitulosPosts()


async function buscarProdutos(produtos) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const produto = produtos.filter(produtos=>produtos.preco>=500)
      if(produto){
        resolve(produto)
      }else{
        reject("Error - Erro ao buscar produtos")
      }
      
    },2000)
  })
}


async function exibirProdutosCaros(produtos){
  try{
    const produtoComDesconto = await buscarProdutos(produtos)
    console.log(produtoComDesconto)
  }catch(err){
    console.log(err)
  }
}

exibirProdutosCaros(produtos)