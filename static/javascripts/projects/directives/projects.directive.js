(function () {
  'use strict';

  angular
    .module('thinkster.projects.directives')
    .directive('projects', projects);

  function projects() {

    var directive = {
      controller: 'projectsController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        projects: '='
      },
      templateUrl: '/static/templates/projects/projects.html'
    };

    return directive;
  }
})();
