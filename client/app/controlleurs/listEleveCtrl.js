angular.module('App').controller('listEleve', ['$scope','$http',function($scope, $http){

    
    
    
    /* J'appelle mon api qui affiche ma liste éleve pour qu'il recharge lorsque je fait des modifs*/
    function afficherListeEleve()
    {
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
    }

    $scope.ajout = function(eleve){
        $http({
            method: 'POST',
            url: 'api/eleves/add',
            data: eleve
          }).then(function successCallback(response) {
            

            afficherListeEleve();

    
            console.log(response);
            
        }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
        });
        

    }



    $scope.update = function(eleve){

        $scope.eleveDetails2 = eleve;
        $scope.data2 = eleve;
        console.log(eleve);
    }

    $scope.modifier = function(eleve){


        $http({
            method: 'PUT',
            url: '/api/eleves/modifier',
            data: eleve
          }).then(function successCallback(response) {
            
            $scope.eleveDetails2 = null;
    
            console.log(response);
            
        }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
        });
        

    }
    
    







     //je recupere le detail de mon eleve a travers une fonction appelé depuis ma vue (index.html)
    $scope.detailsEleve = function(eleve){
    
        //j'affiche les details dans ma vue en appelant autrement que le ( sinon conflit)
        $scope.infosEleve = eleve;
        console.log(eleve);
    }
      
    






    $scope.delete = function(eleve){

        $http({
            method: 'DELETE',
            url: 'api/eleves/delete/'+eleve._id
          }).then(function successCallback(response) {
              
            //je déclare ma variable pour ma vue ( index.html)
           // $scope.le = response.data;

           // Je rapelle ma liste eleve apres une suppression API
           afficherListeEleve();
         

        }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
        });
    
        console.log(eleve._id);
        
    }

  






    // J'appelle ma liste d'élève au premier tour
    afficherListeEleve();
}]);