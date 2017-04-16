console.log(" ShowMapping controller loading");
angular.module('ShowMappingCtrl',[]).controller('ShowMappingController',function($scope,$http){

	console.log($scope.showList);
	console.log("Entered showmapping controller");
	var refresh = function(){
		// get show()
		console.log('refresh()');
		$http.get('/show/getShow').success(function(response){
			console.log("Show Successfully");
			$scope.showList=response;
			console.log($scope.showList);
		});

		// get city()
		// console.log('refresh()');
		$http.get('/city/getCity').success(function(response){
			console.log("City added Successfully");
			$scope.cityList=response;
			console.log($scope.cityList);
		});

		// get theatre()
		// console.log('refresh()');
		$http.get('/theatre/getTheatre').success(function(response){
			console.log("Theatre added Successfully");
			$scope.theatreList=response;
			console.log($scope.theatreList);
		});

		// get movie
		$http.get('/movie/listMovie').success(function(response){
			console.log("Movie added Successfully");
			$scope.movieList=response;
			console.log($scope.movieList);
		});
	};

	refresh();

	//$scope.editShow();
	// delete show
	console.log("Reached delete!!");
	$scope.deleteShow = function(show){
		console.log("show deleted Successfully!!!!");
		$http.delete('/show/deleteShow/' + show._id).success(function(response){
			console.log(response);
		});
		refresh();
	};

	// add show
	$scope.addShow = function(){
		console.log('slot time is '+$scope.slot);
		var show = {
			theater:$scope.selectedTheatre._id,
			movie:$scope.selectedMovie._id,
			fromDate:$scope.selectedMovie.Released,
			toDate:$scope.toDate,
			slot:$scope.slot
		};
		console.log('Show added Successfully');
		$http.post('/show/addShow/',show)
			.then(function(response){
				console.log('create is Successfully');
				refresh();
		});
	};

});