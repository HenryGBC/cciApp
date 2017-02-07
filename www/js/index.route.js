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
   	 });

// setup an abstract state for the tabs directive
    
    $urlRouterProvider.otherwise('/login');
  }

})();
