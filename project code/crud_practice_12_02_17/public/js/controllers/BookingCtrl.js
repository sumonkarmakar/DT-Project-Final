console.log('BookingController loading');
angular.module('BookingCtrl',[]).controller('BookingController',function($scope,$http,$routeParams,$location){
	var refresh = function(){
		console.log('Inside BookingController');
		console.log($routeParams.showid);
		$scope.ShowData={};
		$scope.showBooking=false;
		$http.get('/show/getShow/' + $routeParams.showid)
			.success(function(response){
				console.log(response);
				$scope.ShowData=response[0];
				$scope.slots=$scope.ShowData.slot;
				console.log($scope.slots);
		});
	}
	refresh();
  // payment option
  $scope.makePayment = function(){
      console.log('Reached payment');
         

      var booking = {
        Show:$routeParams.showid,
        BookingDate:new Date(),
        ShowDate:$scope.selectedDate,
        ShowTime:$scope.selectedSlot,
        TotalPrice:$scope.selectedCost,
        Seats:$scope.selectedSeats
      };
     
     console.log('Booking:'+ booking.BookingDate);
     console.log('ShowDate: ' + booking.ShowDate);

      $http.post('booking/addBooking',booking)
        .then(function(response){
            console.log(response);
            console.log("Booking done successfully");
            $location.path('/confirmbooking/'+response.data._id);
        });

  };

	//show seats
	$scope.showSeats=function(){
		  $scope.showBooking=true;
		  var letters=['A','B','C','D','E','F','G','H','I'];
   	  var str='<tr><td colspan=2><center style="color:Green">ROYAL CLASS Rs.300</center></td></tr>';
	    var seatno=0;
	    var className='available';
	    var clickbody='';
  /*  this.$http.get('/api/theaters/'+this.$routeParams.tid)
      .then(response => {
        this.theaterThings = response.data;
          this.socket.syncUpdates('theater', this.theaterThings);
          for(var i=0;i<this.theaterThings.slot.length;i++)
          {
            if(this.theaterThings.slot[i]._id==this.$routeParams.sid)
            {
              this.movieThings= this.theaterThings.slot[i].movie;
              for (var j=0; j<this.theaterThings.slot[i].dateinfo.length; j++) {
                console.log('date1');
                if(this.theaterThings.slot[i].dateinfo[j].ondate===this.$routeParams.showdt)
                {
                  console.log('date2');
                  this.seats=this.theaterThings.slot[i].dateinfo[j].seats;
                }
              } 
              console.log(this.seats);
            }
          } */ 
          for(var r=0;r<letters.length;r++)
          {

            str+='<center><tr class="seat"><td>'+letters[r]+'</td><td><ul class="list-inline">';
            for(var i=1;i<=14;i++)
            {
              seatno++;
              clickbody='bookSeat('+seatno+')';
              //console.log(seatno);
             /* console.log(seatno+''+$.inArray(seatno,this.seats));
              if($.inArray(seatno,this.seats)!=-1)
              {
                className='booked';
                clickbody='return false;';
              }
              else
              {
                className='available';
                clickbody='bookSeat('+seatno+')';
              }*/
              console.log(className);
              if(i<10)
              {
                 str+='<li><a id="'+seatno+'" class="'+className+'" onclick="'+clickbody+'">&nbsp;'+i+'&nbsp;</a></li>';
              }
              else
              {
                 str+='<li><a id="'+seatno+'" class="'+className+'" onclick="'+clickbody+'">'+i+'</a></li>';
              }
             
                if(i===4||i===10)
                {
                  str+='<li>&nbsp;&nbsp;&nbsp;</li>'; 
                }
            }
            str+='</ul></td></tr><center>';
            if(r===2)
            {
              str+='<tr><td colspan=2 style="color:Green"><center>EXECUTIVE Rs.150</center></td></tr>';
            }//
          } 
          $('#seatplan').html(str);     
        }//);
 
	//}
});