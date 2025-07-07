//Cadastro de produtos
import promptSync from "prompt-sync"
import { adicionarProduto, listarProdutos, atualizarProduto, excluirProduto, buscarProdutoPorId, buscarPorCategoria, calcularValorTotal } from "./utils/crud.js"
import { produtos } from "./data/produtos.js"


const prompt = promptSync()
console.log("Bem-vindo ao gerenciador de produtos!")



let option

do {
    console.log("\nMenu:");
    console.log("1 - Listar produtos");
    console.log("2 - Adicionar produto");
    console.log("3 - Atualizar produtos");
    console.log("4 - Excluir produto");
    console.log("5 - Buscar produto");
    console.log("6 - buscar categoria do produto");
    console.log("7 - Valor total");
    console.log("0 - Sair");
    option = prompt("Escolha uma opção: ")

    switch (option) {
        case "1":
            const todosProdutos = listarProdutos(produtos)
            console.log(todosProdutos)
            break;
        case "2":

            const nome = prompt("Nome do produto: ")
            const preco = prompt("Preço do produto: ")
            const categoria = prompt("Categoria do produto: ")
            const idNovo = produto.length + 1
            const novoProduto = { id:idNovo, nome, preco, categoria }

            const produtosNovos = adicionarProduto(produtos, novoProduto)
            console.log("Produto adicionado:", produtosNovos)
            break;
        case "3":
            const idAtualizado = prompt("ID do produto: ")
            const precoAtualizado = prompt("Preço do produto: ")
            const atualizarProdutos = atualizarProduto(produtos, idAtualizado, precoAtualizado)
            console.log(atualizarProdutos)
            break;
        case "4":
            const idExcluir = prompt("ID do produto: ")
            const deletarProduto = excluirProduto(produtos, idExcluir)
            console.log(deletarProduto)
            break;
        case "5":
            const idBuscar = prompt("ID do produto: ")
            const buscarPorId = buscarProdutoPorId(produtos, idBuscar)
            console.log(buscarPorId)
            break;
        case "6":
            const categoriaBuscar = prompt("Categoria do produto: ")
            const itensPorCategoria = buscarPorCategoria(produtos, categoriaBuscar)
            console.log(itensPorCategoria)
            break;
        case "7":

            const valorTotal = calcularValorTotal(produtos)
            console.log("valor total", valorTotal)
            break;
        default:
            console.log("Error - opção invalida")
            break;
    }


} while (option != 0)
console.log("Programa encerrado!");









