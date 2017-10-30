

var ammuTodo = angular.module('ammuTodo',[]);

ammuTodo.controller('mainController',function($scope, $http){
//function mainController($scope,$http){
        $scope.formData = {};

    //when loading on the page, get all todos and show them
    $http.get('/api/todos')
        .then(function successCallback(data){
            $scope.todos = data;
            console.log(data);
        }, function errorCallback(data){
             console.log('Error' + data);
        });
       
    //when submitting  the add form , send the text to the node API
    $scope.createTodo = function(){
        $http.post('/api/todos',$scope.formData)
        .then(function successCallback(data){
            $scope.formData = {};
                $scope.todos = data;
                console.log(data);
        },function errorCallback(data){
               console.log('Error' + data);
        });
    };
    //delete a todo after checking it
    $scope.deleTodo = function(){
        $http.post('/api/todos'+ id)
        .then(function successCallback(data){
             $scope.todos = data;
            console.log(data);
        },function errorCallback(data){
            console.log('Error' + data);
        });
    };

});
            