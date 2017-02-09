(function() {
  'use strict';

  angular
    .module('starter')
    .controller('ChatDetailCtrl', ChatDetailCtrl);

  /** @ngInject */
  function ChatDetailCtrl($scope, $timeout, Chats, $stateParams) {
    var vm = this;
    
    angular.extend(vm, {
      chat: {}
    });
    activate();
    function activate() {
      console.log('ChatDetailCtrl')
      vm.chat = Chats.get($stateParams.chatId);
    }
    
  }
})();
