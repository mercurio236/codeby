import React, { useState } from 'react'
import Menu from './Components/Menu/menu'
import Produtos from './Components/Produtos/produtos';
import Checkout from './Components/Checkout/checkout';

function App() {

  const [carrinho, setCarrinho] = useState({ produtos: [] });
  const [exibirProdutos, setExibirProdutos] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(false);
  const [total, setTotal] = useState('0,00');

  function adicionarProduto(produto) {
    const objCarrinho = Object.assign({}, carrinho)

    let novoProduto = true;
    objCarrinho.produtos.forEach((prod, index) => {
      if (prod.name === produto.name) {
        objCarrinho.produtos[index].quantidade++;
        novoProduto = false;
      }
    })
    if (novoProduto) {
      objCarrinho.produtos.push({
        name: produto.name, 
        price: produto.price, 
        quantidade: 1
      })
    }

    setCarrinho(objCarrinho)
  }

  function handleExibirProdutos(){
    setExibirCheckout(false)
    setExibirProdutos(true);
  }

  function handleExibirCheckout(total){
    setExibirCheckout(true)
    setExibirProdutos(false)
    setTotal(total)
  }

  return (
    <div>
      <Menu produtos={carrinho.produtos} handleExibirProdutos={handleExibirProdutos} handleExibirCheckout={handleExibirCheckout}/>
      <Produtos visivel={exibirProdutos} adicionarProduto={adicionarProduto} />
      
    </div>
  );
}

export default App;
