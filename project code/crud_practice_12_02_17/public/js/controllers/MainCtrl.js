console.log('MainController loading');
angular.module('MainCtrl', []).controller('MainController', function($scope,$http) {

	var refresh=function()
	{
		//$scope.moviList[];
		$http.get('/show/getShow')
		.success(function(response){
			//console.log("details data of showmapping");
			//console.log(response);
		    var showList = response;
		    //console.log("Show /list");
		   // console.log(showList);
			$scope.moviList = [];
			console.log($scope.moviList.length);
				for(var i=0;i<showList.length;i++){
					var flag=0;
					if ($scope.moviList.length==0) {
						$scope.moviList.push(showList[i].movie);
						console.log($scope.moviList.length);
						
					}
					else
					{
						console.log("updated");
						for(var j=0;j<$scope.moviList.length;j++)
						{
							if($scope.moviList[j]._id==showList[i].movie._id)
							{
								flag++;
								break;
							}
						}
						if (flag==0) {
							$scope.moviList.push(showList[i].movie);
						}
					}
				}	
			console.log($scope.moviList);	
		});
	}
	refresh();
});