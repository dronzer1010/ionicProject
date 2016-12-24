angular.module('starter').controller('contactosController', function($scope, $state, $window,$sce, ContactosService) {

  $scope.goBack = function() {
    // $window.history.back();
    $state.go('tab.more');
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
  $scope.goContactosDetailPage = function () {
    $state.go('tab.contactosDetailPage');
  };





});
