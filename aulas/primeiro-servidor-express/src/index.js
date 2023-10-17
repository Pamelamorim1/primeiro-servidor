const express = require('express');

// Instância do objeto express
const app = express();

// Criando rota pela biblioteca express
app.get('/', (requisicao, resposta) => {
    resposta.send('Olá Mundo, esse é o meu primeiro servidor com o express. - localhost')
});
app.get('/home', (requisicao, resposta) => {
    resposta.send('tela inicial da rota.')
});
app.get('/array', (requisicao, resposta) => {
    const array = [1, 2, 3, 4, 5, 6];
    resposta.send(array);
});

app.listen(3000);