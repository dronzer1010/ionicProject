angular.module('starter').controller('contactosDetailController', function($scope, $state, $window,ContactosService) {

console.log('yes comes here...');
  $scope.goBack = function() {
    $state.go('tab.contactos');
    // $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };


});
