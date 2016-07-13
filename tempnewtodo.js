
var myApp = angular.module('myApp', []);


myApp.controller('mainController',['$scope','$http',function($scope,$http) {
	
	$scope.listitems = [];
	$scope.completeitems = [];
	$scope.tempitems = [];
	$scope.allitems = [];
	$scope.temp=[];
	$scope.activetask =[];


	$scope.addToDo=function(item)
	{
		$scope.listitems.push({name: $scope.item});
		$scope.activetask.push({name: $scope.item});
	
		$scope.item="";
		$scope.totalItems =  $scope.listitems.length;
		//console.log($scope.listitems);

		$scope.allitems=$scope.listitems;


	}

	$scope.deleteTask=function(index)
	{

		$scope.flag = false;
		console.log($scope.completeitems.number);


		for(var i=0;i<$scope.completeitems.length;i++)
		{

				if($scope.completeitems[i].number == index)
				{

					console.log("hello");

				$scope.a = $scope.completeitems.indexOf(index);
		 		$scope.completeitems.splice($scope.completeitems[$scope.a],1);

		 		$scope.flag = true;
		 		console.log($scope.completeitems);

				}


		}

		 $scope.listitems.splice(index,1);
		 	 $scope.activetask.splice(index,1);
		 $scope.totalItems =  $scope.listitems.length;
		 $scope.allitems=$scope.listitems;
		 	console.log($scope.listitems);

	}


   $scope.completeTask=function(index,check)
   {

		if(check == true)
		{
		// console.log(check);
		$scope.completeitems.push({item :$scope.listitems[index],number : index});

	//	console.log($scope.completeitems);
		//$scope.activeitems.splice(index,1);

		
		$scope.totalItems =  $scope.listitems.length - $scope.completeitems.length;

		  $scope.activetask.splice(index,1);

		}
		else
		{
		// console.log( $scope.totalItems);
		 $scope.completeitems.pop($scope.listitems[index]);
		 $scope.activetask.pop($scope.listitems[index]);
		 // $scope.activeitems.splice(index,1,$scope.listitems[index]);
		 $scope.totalItems =  $scope.listitems.length - $scope.completeitems.length;


		// console.log($scope.completeitems);
		// 	console.log( $scope.totalItems);
		}

   }

   $scope.allTask=function()
	{
		$scope.listitems = [];

		console.log($scope.allitems);

		$scope.listitems=$scope.allitems;
				
			}



   	$scope.activeTask=function()
	{
		

		for(var i=0;i<$scope.completeitems.length;i++)
		{

		for(var j=0;j<$scope.listitems.length;j++)
		{
				// console.log($scope.listitems[j].name);
				console.log($scope.completeitems[i].item.name);
				
			if($scope.listitems[j].name == $scope.completeitems[i].item.name)
			{
				console.log("hello");
				 $scope.listitems.splice(j,1);
			}
			
		}

		}

		$scope.activetask =$scope.listitems;
// console.log( $scope.listitems);

	}



   	$scope.finishTask=function()
	{
	

		if($scope.completeitems == [])
		{
			$scope.listitems =[];
		}

		else
		{

			$scope.listitems = [];
		
			for(var i=0;i<$scope.completeitems.length;i++)
			{
					
					$scope.listitems.push($scope.completeitems[i].item);

			}
		}
	}


	$scope.clearCompletedTodos=function()
	{
	
		for(var i=0;i<$scope.completeitems.length;i++)
		{

		for(var j=0;j<$scope.listitems.length;j++)
		{
				// console.log($scope.listitems[j].name);
				console.log($scope.completeitems[i].item.name);
				
			if($scope.listitems[j].name == $scope.completeitems[i].item.name)
			{
				console.log("hello");
				 $scope.listitems.splice(j,1);
			}	
		}
		}

				$scope.completeitems =[];
	}

	$scope.editTodo=function(index)
	{

		console.log('$scope.status' + index);

	}

		
}])