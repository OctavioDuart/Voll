(function () {
    'use strict';
    angular
        .module('myApp', ['toastr'])
        .controller('myCtrl', myCtrl)

    function myCtrl($http, toastr) {

        var vm = this;

        init();
        vm.registerMovie = registerMovie;
        vm.cancelRegister = cancelRegister;
        vm.deleteMovie = deleteMovie;
        vm.showModal = showModal

        // função para buscarmos os dados assim que a página é renderizada
        function init() {
            $http({
                method: "GET",
                url: "http://localhost:8000/movie/find"
            }).then((response) => {
                vm.movies = response.data;
            })
        }

        // Registra o filme caso os dados passem na validação
        function registerMovie(data) {
            if (validationData(data) === true) {
                $http({
                    method: "POST",
                    url: "http://localhost:8000/movie/register",
                    data: data
                }).then((response) => {
                    if (response.status === 200) {
                        toastr.success(`O filme foi salvo com sucesso ! .  `);
                        vm.data = undefined;
                        init();
                    }
                }).catch(error => {
                    if (!error.data)
                        toastr.error(`Ocorreu um erro na comunicação com o servidor.`);

                    if (error.data.code === 11000)
                        toastr.error(`Esse filme ja esta cadastrado em nossa base de dados.`);
                });
            }
        }

        // Validação dos dados
        function validationData(movie) {
            if (movie === undefined || movie.name === undefined || movie.url === undefined || movie.description === undefined) {
                toastr.warning(`Por favor ! Preencha todos os campos.`)
                return false;
            }
            return true;
        }

        // Cancela o registro de um novo filme apagando o valor dos campos
        function cancelRegister() {
            vm.data = undefined;
        }

        //Deleta as informações do filme
        function deleteMovie(movie) {
            var url = `http://localhost:8000/movie/delete/${movie}`;
            console.log("URL DELETE", url)
            $http({
                method: "DELETE",
                url: `http://localhost:8000/movie/delete/${movie}`
            }).then(response => {
                if (response)
                    toastr.success(`Filme deletado com sucesso.`);
                init();
            }).catch(error => {
                toastr.warning(`Ocorreu um erro ao deletar o filme.`);
            })
        }

        function showModal(movieDescription, movieId) {
            if (movieDescription === '' || movieDescription === undefined) {
                toastr.warning(`Você deve informar uma descrição`);
                init();
            } else {
                var data = {
                    id: movieId,
                    description: movieDescription
                }
                $http({
                    method: "PUT",
                    url: `http://localhost:8000/movie/update`,
                    data: data
                }).then((response) => {
                    if (response)
                        toastr.success(`A descrição foi alterada com sucesso`);
                    init();
                }).catch(error => {
                    toastr.warning(`Ocorreu um erro ao alterar a descrição`);
                })
            }
        }
    }
})();