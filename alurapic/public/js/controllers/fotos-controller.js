angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    /*  
    var promise = $http.get('/v1/fotos'); //$http.get nos retorna é uma 'promise'
    promise.then(function(retorno){
        $scope.fotos = retorno.data;
    })
    .catch(function(erro){
        console.log(erro)
    }); 
    */
    //Acima está certo, porém podemos usar assim com sucess e error:
  /*
    $http.get('/v1/fotos')
    .success(function(retorno) {
        console.log(retorno);
        $scope.fotos = retorno; // não precisa fazer retorno.data
    })
    .error(function(erro) {
        console.log(erro);
    });  
  */
 
    recursoFoto.query(function(fotos){
        $scope.fotos = fotos;
    }, function(erro){
        console.log(erro);
    });
    
    $scope.remover = function(foto) {
        console.log(foto);
        /*
        $http.delete('/v1/fotos/' + foto._id)
        .success(function() {
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';

        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
        });
        */
       
        recursoFoto.delete({fotoId:foto._id}, function(){
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
        }, function(erro){
            console.log(erro);
            $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
        });
    };
}); 
