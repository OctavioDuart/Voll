const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8000;
const logDatabase = require('./database/connection'); // @ apenas para logs
const app = express();

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./routes/moviesRoute')(app);


app.listen(port, (err) => {
    (err) ?
        console.error(`Ocorreu um erro ao iniciar o servidor ${err}`)
        :
        console.log(`Servidor inciado com sucesso na porta  ${port}`)
});




