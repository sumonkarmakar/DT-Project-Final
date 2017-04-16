angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
console.log('root loading');
	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		
		.when('/movies', {
			templateUrl: 'views/movies.html',
			controller: 'MoviesController'	
		})

		.when('/city',{
			templateUrl: 'views/city.html',
			controller: 'CityController'
		})

		.when('/theatre',{
			templateUrl:'views/theater.html',
			controller: 'TheatreController'
		})

		.when('/show',{
			templateUrl:'views/showmapping.html',
			controller:'ShowMappingController'
		})
		
		.when('/moviedetail/:movieid',{
			templateUrl:'views/moviedetail.html',
			controller:'MovieDetailController'
		})

		.when('/booking/:showid',{
			templateUrl:'views/booking.html',
			controller: 'BookingController'
		})

		.when('/confirmbooking/:bookingid',{
			templateUrl:'views/confirmbooking.html',	
			controller:'ConfirmBookingController'
		});
		
		/*.when('/admin',{
			templateUrl:'views/admin.html',
			controller:'AdminController'
		})*/
		

	$locationProvider.html5Mode(true); 

}]);