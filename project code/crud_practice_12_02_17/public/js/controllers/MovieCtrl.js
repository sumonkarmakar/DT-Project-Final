
console.log('MoviesController loading');
angular.module('MovieCtrl',[]).controller('MoviesController',function($scope,$http){	
	$scope.addMovie=function()
	{
		console.log("Title"+$scope.title);
		console.log("Year"+$scope.year);
		$http.get('http://www.omdbapi.com/?t='+$scope.title+'&y='+$scope.year+'&plot=short&r=json')
		.success(function(response){
			console.log("Result-----------");
			console.log(response);
			$http.post('/movie/addMovie',response).then(function(){
				console.log("done");
			});
		});
	}


	/*$scope.getMovie=function(){
		$http.put()
	}*/

	// calling refresh function

	var refresh = function(){
		console.log("Entered Movie Controller!");
		$http.get('/movie/listMovie').success(function(response){
			console.log('Movie Displayed Successfully');
			$scope.movieList = response;
			console.log($scope.movieList);
		});
	};

	refresh();

	// delete movie
	$scope.deleteMovie=function(movie){
		console.log("Reached Delete!!");
		console.log(movie);
		$http.delete('/movie/deleteMovie/'+ movie._id).success(function(response){
			console.log(response);
			refresh();
		});
	};
});