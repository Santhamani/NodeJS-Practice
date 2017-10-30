

angular.module.('myApp').controller('empController',function($scope, $http){
						//$scope.users = []; //declare an empty array
						$http.get("Json/data.json").success(function(response){ 
							$scope.employees = response;  //ajax request to fetch data into $scope.data
						});	