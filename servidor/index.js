const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors')

const {
    finalizarCompra,
    obterCidadesPorEstados,
    obterProdutos
} = require('./controllers/ecommerce')

const app = express();
const port = 3001;


app.use(cors());
app.use(bodyParse.json());

//url

app.post('/ecommerce/checkout/finalizar-compra', finalizarCompra);
app.get('/ecommerce/estado/:siglaEstado/cidades', obterCidadesPorEstados);
app.get('/ecommerce/:produtos', obterProdutos);


app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`))