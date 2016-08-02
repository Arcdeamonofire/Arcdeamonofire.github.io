var app = angular.module('PortfolioApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({enabled:true});

  $routeProvider.when('/', {
		templateUrl: '/public/partials/home.html'
	})

}]);
