angular.module('minhasDiretivas', [])
    .directive('meuPainel', function() {

        var ddo = {}; //Directive Definition Object (DDO)

        ddo.restrict = "AE";
        ddo.transclude = true;

        ddo.scope = {
            titulo: '@titulo'

            /* 
            Veja que nele temos @titulo, a sintaxe @ indica que estamos copiando o valor
            como string do atributo titulo adicionando na diretiva em nossa marcação. 
            Porém, quando o nome do atributo na diretiva na marcação é igual ao nome da
            propriedade que guardará o seu valor, podemos deixar apenas @ 
            */ 
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

        return ddo;
    });