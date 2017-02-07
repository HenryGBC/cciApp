(function() {
  'use strict';

  angular
    .module('starter')
    .controller('HomeCtrl', HomeCtrl);

  /** @ngInject */
  function HomeCtrl($scope, $timeout) {
    var vm = this;
    
    angular.extend(vm, {
      items: []
    });
    activate();
    function activate() {
      console.log('HomeCtrl')
      vm.items = [
        {id:1, title: 'Productores de Aceite de Oliva para importanción a españa', date: '02-Dic-2016'},
        {id:2, title: 'Necesitamos consultores para proyecto de cuidado ambiental', date: '02-Dic-2016'},
        {id:3, title: 'Desarrollo de Aplicación Movil para empresa de logistica', date: '02-Dic-2016'},
        {id:4, title: 'Distribuidores de piel para zapatos', date: '02-Dic-2016'},
        {id:5, title: 'Buscamos inversionistas en proyecto de impacto ambiental', date: '02-Dic-2016'}
      ]
    }
  }
})();
