(function () {
  'use strict';

  angular
    .module('thinkster.projects.controllers')
    .controller('NewprojectController', NewprojectController);

  NewprojectController.$inject = ['$rootScope', '$scope', 'Authentication', 'Snackbar', 'projects'];

  function NewprojectController($rootScope, $scope, Authentication, Snackbar, projects) {
    var vm = this;

    vm.submit = submit;

    function submit() {
      $rootScope.$broadcast('project.created', {
        title: vm.title,
        description: vm.description,
        creator: {
          username: Authentication.getAuthenticatedAccount().username
        }
      });

      $scope.closeThisDialog();

      projects.create(vm.title,vm.description).then(createprojectSuccessFn, createprojectErrorFn);

      function createprojectSuccessFn(data, status, headers, config) {
        Snackbar.show('Success! project created.');
      }

      function createprojectErrorFn(data, status, headers, config) {
        $rootScope.$broadcast('project.created.error');
        Snackbar.error(data.error);
      }
    }
  }
})();
