import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Alert, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faCashRegister, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import ItensCarrinho from './itemsCarrinho';

export default function Menu(props) {


    function calcularTotal() {
        if (props.produtos.length === 0) {
            return '0,00';
        }
        let total = 0;
        props.produtos.forEach(produto => {
            let price = produto.price.toString().replace(',', '.').replace('R$', '');
            total += parseFloat(price) * produto.quantidade / 100;
        });

        return total.toFixed(2).toString().replace('.', ',');
    }

    function frete() {

        let total = 0;
        props.produtos.forEach(produto => {
            let price = produto.price
            total += parseFloat(price) * produto.quantidade / 100;
            
        });
        return total.toFixed(2).toString().replace('.', ',');
    }


    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="">Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavDropdown  title={
                            <div style={{ display: 'inline-block' }}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                &nbsp;
                                Carrinho
                            </div>
                        }
                            drop="start"
                            key="start">
                            <NavDropdown.Item href=""
                                onClick={props.handleExibirProdutos}
                            >
                                <FontAwesomeIcon icon={faShoppingBasket} />
                                &nbsp;
                                <strong>Produtos</strong>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                            <ItensCarrinho produtos={props.produtos} />
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="" data-testid="total-carrinho">
                                Total: R$ {calcularTotal()}
                            </NavDropdown.Item>
                            <span className={props.produtos.length === 0 ? 'hidden' : null}>
                                <NavDropdown.Divider />
                                {parseFloat(frete()).toFixed(2) >= 10 ? <Alert variant="success">Frete Grátis</Alert> : <Alert variant="dark">Frete Normal</Alert>}
                                <NavDropdown.Divider />
                                <NavDropdown.Item style={{ color: 'green' }} onClick={() => props.handleExibirCheckout(calcularTotal())} href="">
                                    <FontAwesomeIcon icon={faCashRegister} />
                                    &nbsp;
                                    <strong>Finalizar compra</strong>
                                </NavDropdown.Item>
                            </span>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

Menu.propTypes = {
    produtos: PropTypes.array.isRequired,
    handleExibirProdutos: PropTypes.func.isRequired,
    handleExibirCheckout: PropTypes.func.isRequired
}