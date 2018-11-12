angular.module('App').controller('listEleve', ['$scope','$http',function($scope, $http){

    /* J'appelle mon api qui affiche ma liste éleve */
    $http({
        method: 'GET',
        url: 'api/eleves/show'
      }).then(function successCallback(response) {
          
        //je déclare ma variable pour ma vue ( index.html)
        $scope.le = response.data;

        console.log(response);
        
    }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
    });

    //je recupere le detail de mon eleve a travers une fonction appelé depuis ma vue (index.html)
    $scope.detailsEleve = function(eleve){

        //j'affiche les details dans ma vue en appelant autrement que le ( sinon conflit)
        $scope.infosEleve = eleve;
        console.log(eleve);
    }
}]);