(function () {
  'use strict';

  angular
    .module('thinkster.projects.services')
    .factory('projects', projects);

  projects.$inject = ['$http'];

  function projects($http) {
    var projects = {

      all: all,
      create: create,
      get: get
    };

    return projects;


    function all() {
      console.log('in......projects all')
      return $http.get('/api/v1/projects/');
    }

    function create(title,description) {
      return $http.post('/api/v1/projects/', {
        title: title,
        description: description
        


      });
    }

    function get(username) {
      return $http.get('/api/v1/accounts/' + username + '/projects/');
    }
  }
})();
