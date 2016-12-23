angular.module('starter').controller('noticasController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
  $scope.link = 'https://www.google.com/';

});
