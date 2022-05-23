const cidadeEstados = require('../cidades-estados.json');
const produtos = require('../listaProd1401.json');

function finalizarCompra(req, res){
    console.log(req.body);
    res.send('ok')
}

function obterCidadesPorEstados(req, res){
    const siglaEstado = req.params['siglaEstado'].toUpperCase();
    const dadosEstado = cidadeEstados.estados.filter(estado => estado.sigla === siglaEstado);
    if(dadosEstado.length === 0){
        res.status(404).json({erro: `${siglaEstado} não é um estado valido.`});
    }
    res.json(dadosEstado[0].cidades);
}

function obterProdutos(req, res){
    const produtoCad = req.params['produtos'].toUpperCase();
    const dadosProduto = produtos.items;
    if(dadosProduto.length === 0){
        res.status(404).json({erro: `${produtoCad} não é um estado valido.`})
    }
    res.json(dadosProduto)
    
}

module.exports ={
    finalizarCompra,
    obterCidadesPorEstados,
    obterProdutos
}