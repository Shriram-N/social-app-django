(function () {
  'use strict';

  angular
    .module('thinkster.projects.directives')
    .directive('project', project);

  function project() {

    var directive = {
      restrict: 'E',
      scope: {
        project: '='
      },
      templateUrl: '/static/templates/projects/project.html'
    };

    return directive;
  }
})();
