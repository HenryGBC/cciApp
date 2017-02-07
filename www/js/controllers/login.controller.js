(function() {
  'use strict';

  angular
    .module('starter')
    .controller('LoginCtrl', LoginCtrl);

  /** @ngInject */
  function LoginCtrl($scope, $timeout) {
    var vm = this;
    
    angular.extend(vm, {
    });
    activate();
    function activate() {
      console.log('LoginCtrl')
    }
  }
})();
