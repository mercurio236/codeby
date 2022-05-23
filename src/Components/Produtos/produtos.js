import React, { useState } from 'react';
import ListaProdutos from './listarProdutos';
import PropTypes from 'prop-types'
import { Alert } from 'react-bootstrap'

function Produtos(props) {
    const [exibirMSG, setExibirMSG] = useState(false);
    const [produto, setProduto] = useState('');

    function visivel() {
        return props.visivel ? null : 'hidden';
    }

    function exibirMensagem(produto) {
        setExibirMSG(true);
        setProduto(produto.name);
        setTimeout(() => {
            setExibirMSG(false)
        }, 3000);
    }

    return (
        <div className={visivel()}>
            <Alert variant="success" style={{margin:10}} show={exibirMSG}>{produto} adicionado com sucesso no carrinho</Alert>
            <ListaProdutos exibirMensagem={exibirMensagem} adicionarProduto={props.adicionarProduto}/>
        </div>
    )
}

Produtos.propTypes = {
    visivel: PropTypes.bool.isRequired,
    adicionarProduto: PropTypes.func.isRequired
}
export default Produtos