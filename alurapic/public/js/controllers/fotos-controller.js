angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos =[];

/*     var promise = $http.get('/v1/fotos'); //$http.get nos retorna é uma 'promise'
    promise.then(function(retorno){
        $scope.fotos = retorno.data;
    })
    .catch(function(erro){
        console.log(erro)
    }); */

    $http.get('/v1/fotos')
        .success(function(retorno) {
            console.log(retorno);
            $scope.fotos = retorno; // não precisa fazer retorno.data
        })
        .error(function(erro) {
            console.log(erro);
        });         
}); 