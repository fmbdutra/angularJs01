angular.module('alurapic')
.controller('FotoController', function($scope, $http) {

    $scope.foto = {};
    $scope.mensagem = '';

    $scope.submeter = function() {

        if ($scope.formulario.$valid) {

            $http.post('/v1/fotos', $scope.foto)
            .success(function() {
                console.log('Foto adicionada com sucesso');
                $scope.mensagem = 'Foto cadastrada com sucesso';
            })
            .error(function(erro) {
                console.log('Não foi possível cadastra a foto');
                $scope.mensagem = 'Não foi possível cadastrar a foto';
            })
        }
    };
});