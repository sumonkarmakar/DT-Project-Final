console.log('CityController loading');
angular.module('CityCtrl',[]).controller('CityController',function($scope,$http){
	
	// calling refresh function
	var refresh = function(){
		console.log("Entered city controller");
		$http.get('/city/getCity').success(function(response){
			console.log('Read Successfully');
			$scope.cityList = response;
			$scope.cityName = "";
            console.log($scope.cityList);
		});
	};

    refresh();

    // add city
   $scope.addCity = function() {
        var city={cityName:$scope.cityName};
        console.log('city added Successfully');
         $http.post('city/addCity',city)
            .then(function(response) {
                console.log(response);
                console.log("CREATE IS SUCCESSFUL");
                refresh();
            });
        };

    // delete city
    $scope.deleteCity = function(city){
        console.log("Reached Edit!");
        $http.delete('/city/deleteCity/' + city._id).success(function(response){
            console.log(response);
            refresh();
        });
    };   
});