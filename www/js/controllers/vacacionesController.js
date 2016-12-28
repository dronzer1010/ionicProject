angular.module('starter').controller('vacacionesController', function($scope, $state, $window) {

  $scope.goBack = function() {
      $state.go('tab.formulario');
    // $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

});
