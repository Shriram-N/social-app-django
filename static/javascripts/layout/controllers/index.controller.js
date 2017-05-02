(function () {
  'use strict';

  angular
    .module('thinkster.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'Authentication', 'projects', 'Snackbar'];

  function IndexController($scope, Authentication, projects, Snackbar) {
    var vm = this;

    vm.isAuthenticated = Authentication.isAuthenticated();
    vm.projects = [];

    activate();

    function activate() {
      projects.all().then(projectsSuccessFn, projectsErrorFn);

      function projectsSuccessFn(data, status, headers, config) {
        vm.projects = data.data;
        console.log(data.data);
      }

      function projectsErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }

      $scope.$on('project.created', function (event, project) {
        vm.projects.unshift(project);
      });

      $scope.$on('project.created.error', function () {
        vm.projects.shift();
      });


    }
  }
})();
