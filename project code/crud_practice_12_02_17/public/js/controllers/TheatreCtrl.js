console.log("TheatreController Loading");
angular.module('TheatreCtrl',[]).controller('TheatreController',function($scope,$http){
    console.log("Entered TheatreController");
	// calling refresh function
	var refresh = function(){
		console.log('refresh()');
		// get theatre
		$http.get('/theatre/getTheatre').success(function(response){
			console.log("Read Successfull");
			$scope.theatreList = response;
			console.log($scope.theatreList);		
		});

		// get city
		$http.get('/city/getCity').success(function(response){
			console.log("City Read Successfully");
			$scope.cityList=response;
			console.log($scope.cityList);
		});

		
	};
	refresh();

	// delete theatre
	$scope.deleteTheatre = function(theatre){
		console.log("Reached delete");
		$http.delete('/theatre/deleteTheatre/' + theatre._id).success(function(response){
			console.log(response);
		});
		refresh();
	};
	
	// add thetre
	$scope.addTheatre = function() {
		console.log('Theatre Name is ' + $scope.theatreName);
        var theatre={
        	Name:$scope.theatreName,
        	City:$scope.selectedCity.cityName,
        	Address:$scope.theatreAddress,
        	Contact:$scope.theatreContact
        };

        console.log('theatre added Successfully');
         $http.post('theatre/addTheatre/',theatre)
            .then(function(response) {
              	console.log(response);
                console.log("CREATE IS SUCCESSFUL");
                refresh();
        });
    };

   /* // delete thetre
    $scope.deleteTheatre = function(theatre){
    	console.log("Reached delete");
    	$http.delete('/theatre/deleteTheatre' + theatre._id).success(function(response){
    		console.log(response);
    		refresh();
    	});
    };
*/
});