
console.log('Inside MovieDetailController');

angular.module('MovieDetailCtrl',[])
.controller('MovieDetailController',function($scope,$http,$routeParams){
	
	console.log('Inside function MovieDetailController');
	console.log('Parameter value is ');
	console.log($routeParams.movieid);
	$scope.MovieData={};
	$scope.showTable=false;
	var refresh=function(){
		console.log("Called refresh")
		//retreive detail of a particular movie
		$http.get('/movie/getMovie/'+$routeParams.movieid)
		.success(function(response){
			console.log(response);
			$scope.MovieData=response[0];
		});

		//retreive list of cities
		$http.get('/city/getCity').success(function(response){
			console.log('Read Successfully');
			$scope.cityList = response;
			$scope.cityName = "";
            console.log($scope.cityList);
		});

		//$http.get()

	}

	refresh();
	
	$scope.viewThetersByCity=function(){
		$http.get('/show/getShow').success(function(response){
			console.log("Show from MovieDetailCtrl Successfully");
			$scope.showList=response;
			console.log($scope.showList);
			console.log('City selected'+$scope.selectedCity);
			$scope.showTable=true;
		});
	} 

	
}); 