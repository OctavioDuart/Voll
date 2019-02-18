const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
};

mongoose.connect('mongodb://localhost:27017/voll', options)
    .then(() => {
        console.log(`Conexão com o banco de dados estabelecida com suecesso`);
    })
    .catch(err => {
        console.error(`Erro ao se conectar com o banco de dados ${err}`)
    })

module.exports = mongoose;