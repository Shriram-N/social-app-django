(function () {
'use strict';

angular
  .module('thinkster.config')
  .config(config);

config.$inject = ['$locationProvider','$httpProvider'];

function config($locationProvider,$httpProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

}

})();
