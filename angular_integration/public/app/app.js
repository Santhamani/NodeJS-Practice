
					var myApp = angular.module('myModule', ['angularUtils.directives.dirPagination']);

					
						
						$scope.sort = function(keyname){
							$scope.sortKey = keyname;   //set the sortKey to the param passed
							$scope.reverse = !$scope.reverse; //if true make it false and vice versa
						}
							/*$scope.employees = [];
							$scope.employees.id = '';
							$scope.employees.firstName = '';
							$scope.employees.lastName = '';
							$scope.employees.gender = '';
							$scope.employees.salary = '';
						*/
						$scope.addItem = function()
						{
							var empdata =
							 {	
							 	id:$scope.id,
							 	firstName:$scope.firstName,
								lastName:$scope.lastName,
								gender:$scope.gender,
								salary:$scope.salary
							};
						
							$scope.employees.push(empdata);
							
						}

						$scope.delItem = function(x){
								
								$scope.employees.splice(x, 1);
						}
					});