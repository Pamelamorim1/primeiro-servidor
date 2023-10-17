// Solicitando utilização da biblioteca
const express = require('express');
const porta = 3000;

const usuarios = [ { id: 11, nome: 'joao', idade: 17 },
{ id: 1, nome: 'pamela', idade: 23 },
{ id: 19, nome: 'anderson', idade: 29 },
{ id: 4, nome: 'kevely', idade: 35 },
{ id: 7, nome: 'lucas', idade: 48 },
];

// Criando rota para servidor
const app = express();

// Enviando informações para o servidor
app.get('/usuarios', (req, res) => {
    res.send(usuarios);
});

// Porta do servidor
app.listen(porta, () => {
    console.log(`Servidor inicializado na porta ${porta}`)
});

