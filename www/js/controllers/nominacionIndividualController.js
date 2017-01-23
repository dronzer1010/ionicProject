angular.module('starter').controller('nominacionIndividualController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goNominacionSelectPage = function () {
    $state.go('tab.nominacionSelectPage');
  };


});
