

angular.module('myApp').service('fileUpload',['$http',function($http){

    this.uploadFiletoUrl = function(file,uploadUrl){
        var fd = new FormData();
        fd.append('profilepic', file);
        $http.post(uploadUrl, fd,{
            transformRequest : angular.identity,
            headers : {'ContentType' :undefined }
        })
        .then(function(){
            alert(1)
        })
        .catch(function(){
            alert(0)
        });
    }


}]);