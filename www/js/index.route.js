(function() {
  'use strict';

  angular
    .module('starter')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
	      url: '/login',
	      templateUrl: 'templates/login.html',
	      controller: 'LoginCtrl'
	  })
	  .state('tab', {
	    url: '/tab',
	    abstract: true,
	    templateUrl: 'templates/tabs.html',
	  })
	  .state('tab.home', {
	    url: '/home',
	    views: {
	      'tab-home': {
	        templateUrl: 'templates/tab-home.html',
	        controller: 'HomeCtrl',
	        controllerAs: 'home'
	      }
	    }
	  })
	  .state('tab.home-detail', {
	      url: '/home/:itemId',
	      views: {
	        'tab-home': {
	          templateUrl: 'templates/item-detail.html'
	        }
	      }
   	 })
	 .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl',
          controllerAs: 'chats'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl',
          controllerAs: 'chat'
        }
      }
    })
    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-profile.html',
          controller: 'ProfileCtrl',
          controllerAs: 'pr'
        }
      }
    })
    .state('tab.add', {
      url: '/add',
      views: {
        'tab-add': {
          templateUrl: 'templates/tab-add.html',
          controller: 'AddCtrl',
          controllerAs: 'add'
        }
      }
    })
    .state('tab.search', {
      url: '/search',
      views: {
        'tab-search': {
          templateUrl: 'templates/tab-search.html',
          controller: 'SearchCtrl',
          controllerAs: 'sr'
        }
      }
    });


// setup an abstract state for the tabs directive
    
    $urlRouterProvider.otherwise('/login');
  }

})();
