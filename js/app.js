var MyApp = angular.module('myApp',['ngRoute']);

// MyApp.controller('appController',['$scope', function($scope){
//     $scope.message = "Welcome to my App";       //displayed on page
// }]);

MyApp.config(['$routeProvider', function($routeProvider){   
//everything including the function is being passed to config and an array and this function is
//actually passed as a part of that array. this is done to easily compress when using JS minifiers.
    $routeProvider.
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'RegistrationController'
        }).
        when('/register',{
            templateUrl: 'views/register.html',
            controller: 'RegistrationController'
        }).
        when('/success',{
            templateUrl: 'views/success.html',
            controller: 'SuccessController'
        }).
        otherwise({
            redirectTo: '/login'
        });
}]);