(function() {
  'use strict';

  angular
    .module('starter')
    .controller('AddCtrl', AddCtrl);

  /** @ngInject */
  function AddCtrl($scope, $timeout) {
    var vm = this;
    
    angular.extend(vm, {
    	
    });
    activate();
    function activate() {
      console.log('AddCtrl')
    }
  }
})();
