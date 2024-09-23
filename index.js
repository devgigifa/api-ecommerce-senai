// require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const rotas_produtos = require('./rotas/rotaProdutos')
const clientes = require('./rotas/rotaClientes')
const rotasAutenticacao = require('./rotas/rotaAutenticacao')

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

const swaggerDocument = YAML.load('./docs/documentacao.yaml')

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/produtos', rotas_produtos)
app.use('/clientes', clientes)
app.use('/auth', rotasAutenticacao)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(5500)

module.exports = app