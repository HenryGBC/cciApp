(function() {
  'use strict';

  angular
    .module('starter')
    .controller('ChatsCtrl', ChatsCtrl);

  /** @ngInject */
  function ChatsCtrl($scope, $timeout, Chats) {
    var vm = this;
    
    angular.extend(vm, {
      chats: []
    });

    vm.remove = function(chat) {
	    Chats.remove(chat);
	};
    activate();
    function activate() {
      console.log('ChatsCtrl')
       vm.chats = Chats.all();
  
    }
  }
})();
