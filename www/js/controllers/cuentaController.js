angular.module('starter').controller('cuentaController', function($scope, $state, $window,$stateParams) {

  $scope.goBack = function() {
    // $state.go('tab.beneficiousCoupons');
    $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };


});
