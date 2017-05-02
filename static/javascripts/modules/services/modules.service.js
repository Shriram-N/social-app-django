(function () {
  'use strict';

  angular
    .module('thinkster.modules.services')
    .factory('modules', modules);

  modules.$inject = ['$http'];

  function modules($http) {
    var modules = {

      all: all,
      create: create,
      get: get
    };

    return modules;


    function all() {
      console.log('in......modules all')
      return $http.get('/api/v1/modules/');
    }

    function create(title,description) {
      return $http.post('/api/v1/modules/', {
        title: title,
        description: description
      });
    }

    function get(username) {
      return $http.get('/api/v1/accounts/' + username + '/projects/');
    }
  }
})();
