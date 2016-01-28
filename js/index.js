var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: '../partials/home.html'
    })
    .when('/uses',{
        templateUrl: '../partials/uses.html'
    })
    .when('/regulations',{
        templateUrl: '../partials/regulations.html'
    })
    .when('/technology',{
        templateUrl: '../partials/technology.html'
    })
    .otherwise({
        redirectTo: '/'
    });
})