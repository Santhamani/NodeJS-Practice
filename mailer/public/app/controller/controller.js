

angular.module('myApp').controller('myCtrl',['$scope','$http',function($scope,$http){
   /* $scope.uploadfile = function(){
        var file = $scope.myFile;
        console.dir(file);
        var upload = "/profileCreate";
        fileupload.uploadFiletoUrl(file,uploadUrl);

    };*/

    $scope.sendEmail = function(email,username,subject,content){
        $http.post('/users',{email:email,username:username,subject:subject,content:content})
            .then(function(data){
                alert('email sent');
            }).catch(function(err){
                console.log(err);
            });
    }
}]);