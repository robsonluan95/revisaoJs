
import { produtos } from "./produtos.js";
import { adicionarProduto,listaProdutos,atualizarProduto,deleteProduto} from "./utils.js";


// const novoProduto = { nome: 'Fone Bluetooth', preco: 250, categoria: 'Eletrônicos' }


// const listaDeProdutos = adicionarProduto(produtos,novoProduto);
// console.log("Produtos : ", listaDeProdutos);

// const listProdutos = listaProdutos(produtos)
// console.log(listProdutos)

const atualizarPorId = atualizarProduto(produtos,15,"Novo marca texto")
console.log(atualizarPorId)

const deltetarProduto =deleteProduto(produtos,1)
console.log(deltetarProduto)