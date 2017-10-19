'use strict';

/**
 * @ngdoc function
 * @name indiabizzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the indiabizzApp
 */
angular.module('indiabizzApp')
.controller('MainCtrl', function ($uibModal, $document) {

  this.loginModal = function() {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'views/login.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg'
    });
  }

  this.cities =[
    {
      name:'New York City',
      class:'',
      count:'6'
    },
    {
      name:'Chicago',
      class:'chicago',
      count:'8'
    },
    {
      name:'Los Angeles',
      class:'angeles',
      count:'11'
    },
    {
      name:'San Francisco',
      class:'francisco',
      count:'10'
    },
    {
      name:'Seattle',
      class:'seattle',
      count:'6'
    },
    {
      name:'Washington, D.C.',
      class:'washington',
      count:'6'
    },
    {
      name:'Orlando',
      class:'orlando',
      count:'7'
    },
    {
      name:'Miami',
      class:'miami',
      count:'6'
    },
  ];
})
.controller('ModalInstanceCtrl', function($scope, $uibModalInstance) {
  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});
