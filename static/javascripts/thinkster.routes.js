(function () {
  'use strict';

  angular
    .module('thinkster.routes')
    .config(config);

  config.$inject = ['$routeProvider'];


  function config($routeProvider) {

    $routeProvider.when('/register', {
      controller: 'RegisterController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/register.html'
    }).when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/login.html'
    }).when('/', {
      controller: 'IndexController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/layout/index.html'
    }).when('/+:username', {
        controller: 'ProfileController',
        controllerAs: 'vm',
        templateUrl: '/static/templates/Profiles/Profile.html'
      }).when('/+:username/settings', {
        controller: 'ProfileSettingsController',
        controllerAs: 'vm',
        templateUrl: '/static/templates/Profiles/settings.html'
      }).when('/accounts/modules', {
          controller: 'modulesController',
          controllerAs: 'vm',
          templateUrl: '/static/templates/modules/modules.html'
          }).otherwise('/');

      }
})();
