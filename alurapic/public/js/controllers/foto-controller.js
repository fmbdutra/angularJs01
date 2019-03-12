angular.module('alurapic')
.controller('FotoController', function($scope, recursoFoto, $routeParams, cadastroDeFotos) {

    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.fotoId){
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
            $scope.foto = foto;
        },function(erro){
            console.erro(erro);
            $scope.mensagem='Não foi possível obter a foto';
        });
    }   

    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            /*
            if($routeParams.fotoId) {
                
                recursoFoto.update({fotoId: $scope.foto._id},
                    $scope.foto, function(){
                    $scope.mensagem = 'Foto  '+ $scope.foto.titulo +' foi alterada';
                }, function(erro){
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível alterar';
                });
            } else {
                recursoFoto.save($scope.foto, function() {
                    $scope.foto = {};
                    $scope.formulario.$setPristine();
                    $scope.mensagem = 'Foto cadastrada com sucesso';
                }, function(erro){
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível cadastrar a foto';
                });            
            }*/
            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados){
                $scope.mensagem = dados.mensagem;
                if (dados.inclusao) $scope.foto = {};
            })
            .catch(function(erro){
                $scope.mensagem = erro.mensagem;
            });
        }
    };
});
    
