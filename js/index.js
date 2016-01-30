console.log("    ____   ____   ____   _   __ ______ _____\n   / __ \\ / __ \\ / __ \\ / | / // ____// ___/\n  / / / // /_/ // / / //  |/ // __/   \\__ \\ \n / /_/ // _, _// /_/ // /|  // /___  ___/ / \n/_____//_/ |_| \\____//_/ |_//_____/ /____/  \n                                            ")
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
