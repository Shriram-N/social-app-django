(function () {
  'use strict';

  angular
    .module('thinkster', [
      'thinkster.routes',
      'thinkster.authentication',
      'thinkster.config',
      'thinkster.layout',
       'thinkster.projects',
       'thinkster.utils',
       'thinkster.Profiles',
       'thinkster.modules'

    ]);



  angular
    .module('thinkster.routes', ['ngRoute']);

  angular
    .module('thinkster.config', []);


})();
