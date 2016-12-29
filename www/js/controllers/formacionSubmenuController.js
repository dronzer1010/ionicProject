angular.module('starter').controller('formacionSubmenuController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };

  $scope.goDetailPage = function() {
    $state.go('app.beneficiosDetailPage');
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
});
