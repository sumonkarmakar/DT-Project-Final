console.log('Inside confirm booking controller.');

angular.module('ConfirmBookingCtrl',[]).controller('ConfirmBookingController',function($scope,$http,$routeParams,$location){
	var refresh = function(){
		$scope.bookingid=$routeParams.bookingid;
		/*$scope.ShowDate=$routeParams.ShowDate;
		$scope.ShowTime=$routeParams.ShowTime;*/
		console.log('Inside ConfirmBookingController');
		console.log($routeParams.bookingid);
		/*console.log($routeParams.ShowDate);
		console.log($routeParams.ShowTime);*/
		$http.get('/booking/getBooking/' + $routeParams.bookingid)
			.success(function(response){
				console.log(response);
		})
	}
	refresh();
})