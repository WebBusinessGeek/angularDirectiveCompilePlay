var app = angular.module('app', []);



app.controller('someController', function($scope){

	$scope.name = 'Controller Name'
});


app.directive('telementUse', function(){
	return {
		restrict: 'EA',
		template: '<p>Dynamically placed content based on telement argument passed to compile: </p>',
		compile: function(telement, attrs){
			telement.contents().append('From the compile function');
		}
	}

});


app.directive('attrsUse', function(){
	return{
		restrict: 'EA',
		template: '<p>Dynamically appends content based on value passed to a attribute via the above input: </p>',
		compile: function(telement, attrs){
			telement.contents().append(attrs.attribute);
		}
	}
})

