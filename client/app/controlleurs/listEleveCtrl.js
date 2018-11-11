angular.module('App').controller('listEleve', ['$scope',function($scope){
   //je déclare ma variable pour ma vue ( index.html)
    $scope.le = listeEleves;
    //je recupere le detail de mon eleve a travers une fonction appelé depuis ma vue (index.html)
    $scope.detailsEleve = function(eleve){

        //j'affiche les details dans ma vue en appelant autrement que le ( sinon conflit)
        $scope.infosEleve = eleve;
        console.log(eleve);
    }
}]);