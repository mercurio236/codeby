import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, CardGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'
import api from '../../Servicos/api'


export default function ListarProdutos(props) {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        function connection() {
            api.get('ecommerce/produtos')
                .then((res) => {
                    setProdutos(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        connection()
    }, [])


    /* const protdutos = [
        { id: '0', nome: 'Teste1', preco: 'R$ 59,90' },
        { id: '1', nome: 'Teste2', preco: 'R$ 9,90' },
        { id: '2', nome: 'Teste3', preco: 'R$ 5,90' },
        { id: '3', nome: 'Teste4', preco: 'R$ 10,90' },
        { id: '4', nome: 'Teste5', preco: 'R$ 559,90' },
        { id: '5', nome: 'Teste6', preco: 'R$ 539,90' },
        { id: '6', nome: 'Teste7', preco: 'R$ 519,90' },
    ] */

    function handleComprar(event, produto) {
        event.preventDefault();
        props.adicionarProduto(produto)
        props.exibirMensagem(produto)
    }

    function render() {
        
        const cards = produtos.map((produto) =>
        <Container >
                <Row>
                    <Col >
                        <CardGroup >
                            <Card
                                key={produto.id}
                                style={{flexDirection:'row', justifyContent:'center', alignItems:'center', display:'flex', marginBottom:15, marginTop:10}}>

                                <Card.Img src={produto.imageUrl} style={{ height: 250, width: 280 }} />
                                <Card.Body>
                                    <Card.Title>{produto.name}</Card.Title>
                                    <Card.Text>
                                        Gramas: {produto.skuName}
                                       
                                    </Card.Text>
                                    <Button variant="success"  onClick={(event) => handleComprar(event, produto)}>Comprar por {parseFloat(produto.price)/100}</Button>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>

            </Container>
        )
        return cards;
    }

    return render()
}

ListarProdutos.propTypes = {
    adicionarProduto: PropTypes.func.isRequired,
    exibirMensagem: PropTypes.func.isRequired

}
