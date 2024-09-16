require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotas_produtos = require('./rotas/rotaProdutos')
const clientes = require('./rotas/rotaClientes')
const rotasAutenticacao = require('./rotas/rotaAutenticacao')
const cookieParser = require('cookie-parser')

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/produtos', rotas_produtos)
app.use('/clientes', clientes)
app.use('/auth', rotasAutenticacao)

app.listen(5500)

module.exports = app