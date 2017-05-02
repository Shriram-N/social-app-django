(function () {
  'use strict';

  angular
    .module('thinkster.Profiles.services')
    .factory('Profile', Profile);

  Profile.$inject = ['$http'];

  function Profile($http) {

    var Profile = {
      destroy: destroy,
      get: get,
      update: update
    };

    return Profile;

    function destroy(Profile) {
      return $http.delete('/api/v1/accounts/' + Profile.id + '/');
    }


    function get(username) {
      return $http.get('/api/v1/accounts/' + username + '/');
    }


    function update(Profile) {
      return $http.put('/api/v1/accounts/' + Profile.username + '/', Profile);
    }
  }
})();
