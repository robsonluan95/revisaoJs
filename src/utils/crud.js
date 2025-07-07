
// adicionar produto
export function adicionarProduto(produtos,novoProduto){
    produtos.push(novoProduto)
    return produtos
}

// listar produtos

export function listarProdutos(produtos){
    return produtos
}

export function atualizarProduto(produtos,id,preco){
    return produtos.map((produto)=>produto.id===id?{...produto,preco}:produto)
}

export function excluirProduto(produtos,id){
    return produtos.filter(produto=>produto.id!=id)
}

export function buscarProdutoPorId(produtos,id){
    return produtos.filter(produtos=>produtos.id==id)
}

export function buscarPorCategoria(produtos,categoria){
    return produtos.filter(produtos=>produtos.categoria==categoria)
}

export function calcularValorTotal(produtos){
    return produtos.reduce((acc,valorAtual)=>acc+valorAtual.preco,0)
}