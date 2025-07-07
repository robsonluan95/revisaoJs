
export function adicionarProduto(produtos,novoProduto){
    produtos.push(novoProduto)
    return produtos
}

export function listaProdutos(produtos){
    return produtos
}

export function atualizarProduto(produtos,id,novoNome){
    return produtos.map((produto)=>{
        return produto.id ===id? {...produto,nome:novoNome}:produto
    })
}

export function deleteProduto(produtos,id){
    return produtos.filter(produto=>produto.id!=id)
}