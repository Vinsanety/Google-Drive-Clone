var app = angular.module('DriveClone', ['ui.router', 'ngMaterial'])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home')
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/views/home.html',
    controller: 'homeController',
    controllerAs: 'home'
  })

}])
