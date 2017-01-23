angular.module('starter').controller('nominacionSelectPageController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };


  $scope.goCompletePage = function () {
    $state.go('tab.nominacionCompletePage');
  };



});
