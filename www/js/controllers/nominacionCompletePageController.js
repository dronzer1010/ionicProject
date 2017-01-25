angular.module('starter').controller('nominacionCompletePageController', function($scope, $state, $window) {

  $scope.goBack = function() {
      // $state.go('tab.nominacionSelectPage');
    $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };




});
