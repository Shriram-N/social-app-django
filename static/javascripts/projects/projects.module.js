(function () {
  'use strict';

  angular
    .module('thinkster.projects', [
      'thinkster.projects.controllers',
      'thinkster.projects.directives',
      'thinkster.projects.services'
    ]);

  angular
    .module('thinkster.projects.controllers', []);

  angular
    .module('thinkster.projects.directives', ['ngDialog']);

  angular
    .module('thinkster.projects.services', []);
})();
