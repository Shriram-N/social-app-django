
(function () {
  'use strict';

  angular
    .module('thinkster.Profiles.controllers')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$location', '$routeParams', 'projects', 'Profile', 'Snackbar'];

  function ProfileController($location, $routeParams, projects, Profile, Snackbar) {
    var vm = this;

    vm.Profile = undefined;
    vm.projects = [];

    activate();

    function activate() {
       vm.username = $routeParams.username.substr(1);

      Profile.get(username).then(ProfileSuccessFn, ProfileErrorFn);
      projects.get(username).then(projectsSuccessFn, projectsErrorFn);


      function ProfileSuccessFn(data, status, headers, config) {
        console.log(data.data);
        console.log('in Profile data');
        vm.Profile = data.data;
      }

      function ProfileErrorFn(data, status, headers, config) {

        $location.url('/');
        Snackbar.error('That user does not exist.');
      }

      function projectsSuccessFn(data, status, headers, config) {
        console.log('in Profile data');
        vm.projects = data.data;
      }

      function projectsErrorFn(data, status, headers, config) {
        Snackbar.error(data.data.error);
      }
    }
  }
})();
