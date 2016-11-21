(function(){
var app = angular.module("kidTalk", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/cat", {
		templateUrl: "views/cat.html"
	});
	$routeProvider.when("/dog", {
		templateUrl: "views/dog.html"
	});
	$routeProvider.otherwise({
		template: "Cat or Dog?!? Choose a side."
	})
});

})();