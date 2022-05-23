import React from 'react';
import PropType from 'prop-types'
import {NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons'


export default function ItemsCarrinho(props){
    function render(){
        if(props.produtos.length === 0){
            return(
                <NavDropdown.Item href="" data-testid="itens">
                    <FontAwesomeIcon icon={faSadTear}/>
                    &nbsp;
                    Carrinho Vazio...
                </NavDropdown.Item>
            )
        }
        const itens = props.produtos.map(produto =>
            <NavDropdown.Item href="" key={produto.id}>
                {produto.name} - {produto.quantidade} x {parseFloat(produto.price)/100}
            </NavDropdown.Item>
            );
            return itens;
    }

    return render()
}

ItemsCarrinho.propTypes = {
    produtos: PropType.array.isRequired
}