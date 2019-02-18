const express = require('express');
const router = express();
const promise = require('bluebird');
const MoviesModel = require('../models/moviesModel');

router.post("/register", (req, res) => {
    return promise.try(promiseRegisterData)
        .then(promiseReturn)
        .catch(promiseError)


    function promiseRegisterData() {
        const ModelMovies = new MoviesModel(req.body);
        return ModelMovies.save();
    }

    function promiseReturn(result) {
        if (!result)
            return res.status(500).send('Ocorreu algum erro ao salvar o usuário .');

        return res.status(200).send('Usuário salvo com sucesso ! . ');
    }

    function promiseError(ex) {
        return res.status(500).send(ex);
    }
});

router.get('/find', (req, res) => {
    return promise.try(promiseGetMovies)
        .then(promiseReturn)
        .catch(promiseError)

    function promiseGetMovies() {
        return MoviesModel.find();
    }

    function promiseReturn(result) {
        if (result.length === 0)
            return res.status(200).send(false);

        return res.status(200).send(result);
    }

    function promiseError(ex) {
        return res.status(500).send(ex);
    }
});

router.delete('/delete/:id', (req, res) => {
    return promise.try(promiseDeleteMovie)
        .then(promiseReturn)
        .catch(promiseError)

    function promiseDeleteMovie() {
        return MoviesModel.findByIdAndDelete(req.params.id);
    }

    function promiseReturn(result) {
        if (result.errors)
            return res.status(500).send(false);

        return res.status(200).send(true);
    }

    function promiseError(ex) {
        return res.status(500).send(ex);
    }
});

router.put('/update', (req, res) => {
    return promise.try(promiseUpdateMovie)
        .then(promiseReturn)
        .catch(promiseError)

    function promiseUpdateMovie() {
        const updateData = {
            'description': req.body.description
        }
        return MoviesModel.findByIdAndUpdate(req.body.id, updateData, { new: true });
    }

    function promiseReturn(result) {
        console.log(result);
        return res.status(200).send(true);
    }

    function promiseError (ex) {
        return res.status(200).send(ex);
    }
});

module.exports = app => app.use('/movie', router);