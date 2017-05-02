(function () {
  'use strict';

  angular
    .module('thinkster.modules.controllers')
    .controller('modulesController', modulesController);

  modulesController.$inject = ['$scope', 'Authentication','modules', 'Snackbar'];

  function modulesController($scope,Authentication, modules, Snackbar) {
    var vm = this;

    vm.columns = [];
    vm.tab = 1;
    vm.filtProj ='';
    var username = vm.username;


    vm.isSelected = function (checkTab) {
                return (this.tab === checkTab);
            }

    vm.select = function(setTab) {
        vm.tab = setTab;
    console.log('inside module descritpion');
        if (setTab === 2)

            vm.filtProj = "results";
        else if (setTab === 3)
            vm.filtProj = "process";
        else
            vm.filtProj = "process";
      }

    activate();
    projectmodules();

    function projectmodules(){

      modules.get(username).then(modulesSuccessFn, modulesErrorFn);

      function modulesSuccessFn(data, status, headers, config) {

        //we will get modules project from this list
        var raw_data = data.data;
        console.log(username);
        console.log(raw_data);
        vm.project_id=raw_data[1]

      }

      function modulesErrorFn(data, status, headers, config) {
        Snackbar.error(data.data.error);
      }
    }

    function activate() {
      //it has all the module values,we need to filter for the projects with the moudule
      //we will get the project id from this list
      //we need to filter the list for projects ids from modulesSuccessFn
      modules.all().then(modulesSuccessFn, modulesErrorFn);

      function modulesSuccessFn(data, status, headers, config) {
        vm.modules = data.data;
        console.log(data.data);
      }

      function modulesErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
  }
}
})();
