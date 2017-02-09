(function() {
  'use strict';

  angular
    .module('starter')
    .controller('SearchCtrl', SearchCtrl);

  /** @ngInject */
  function SearchCtrl($scope, $timeout) {
    var vm = this;
    
    angular.extend(vm, {
    	
    });
    activate();
    function activate() {
      console.log('SearchCtrl')
    }
  }
})();
