const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index")) //rota '/', que abre o projeto diretamente, função que recebe resquest e response, e renderiza a página como responde (res.render)
route.get('/room', (req, res) => res.render("room"))
route.get('/create-pass', (req, res) => res.render("create-pass"))

//formato da informação passada pelo formulário da modal
//route.get('/room/:room/:question/:action')

module.exports = route