
var myApp = angular.module('myApp', []);


myApp.controller('mainController',['$scope','$http',function($scope,$http) {
	
	$scope.listitems = [];
	$scope.completeitems = [];
	$scope.tempitems = [];
	$scope.activeitems = [];


	$scope.addToDo=function(item)
	{
		$scope.listitems.push({item: $scope.item});
	
		$scope.item="";
		$scope.totalItems =  $scope.listitems.length;
		console.log($scope.listitems);

		$scope.activeitems=$scope.listitems;
	}

	$scope.deleteTask=function(index)
	{
		 $scope.listitems.splice(index,1);
		 	$scope.totalItems =  $scope.listitems.length;
		 		$scope.activeitems=$scope.listitems;

	}


   $scope.completeTask=function(index,check)
   {

		if(check == true)
		{
		// console.log(check);
		$scope.completeitems.push($scope.listitems[index]);
		//$scope.activeitems.splice(index,1);

		
		$scope.totalItems =  $scope.listitems.length - $scope.completeitems.length;

		}
		else
		{
		// console.log( $scope.totalItems);
		 $scope.completeitems.pop($scope.listitems[index]);
		 // $scope.activeitems.splice(index,1,$scope.listitems[index]);
		 $scope.totalItems =  $scope.listitems.length - $scope.completeitems.length;
		// console.log($scope.completeitems);
		// 	console.log( $scope.totalItems);
		}

   }

   $scope.allTask=function()	
	{


		$scope.listitems=$scope.activeitems;
				
		// $scope.listitems = $scope.listitems.concat($scope.completeitems);

			// $scope.listitems = angular.extend({}, $scope.completeitems);
			// $scope.listitems=$scope.tempitems;
			// console.log($scope.tempitems);
				}



   	$scope.activeTask=function()
	{
		$scope.listitems=$scope.activeitems;
	}



   	$scope.finishTask=function()
	{
			console.log("hello");
			$scope.listitems=$scope.completeitems;
	}


		
}])