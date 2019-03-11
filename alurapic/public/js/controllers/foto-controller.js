angular.module('alurapic')
.controller('FotoController', function($scope, recursoFoto, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    /*
    if($routeParams.fotoId){
        $http.get('/v1/fotos/'+$routeParams.fotoId)
        .success(function(foto){
            $scope.foto = foto;
        })
        .error(function(erro){
            console.log(erro);
            $scope.messagem='Não foi possível obter a foto'
        });
    }
    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            if($routeParams.fotoId){
                $http.put('/v1/fotos/'+$scope.foto._id, $scope.foto)
                .success(function(){
                    $scope.formulario.$setPristine();
                    $scope.mensagem='Foto  '+ $scope.foto.titulo +' foi alterada'
                })
                .error(function(erro){
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível alterar';
                })
            

            } else {
                $http.post('/v1/fotos', $scope.foto)
                .success(function() {
                    $scope.foto = {};
                    $scope.formulario.$setPristine();
                    console.log('Foto adicionada com sucesso');
                    $scope.mensagem = 'Foto cadastrada com sucesso';
                })
                .error(function(erro) {
                    console.log('Não foi possível cadastra a foto');
                    $scope.mensagem = 'Não foi possível cadastrar a foto';
                })               

            }
        }
    };
    */
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
            }
        }
    };
});
    
