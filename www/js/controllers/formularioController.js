angular.module('starter').controller('formularioController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };


});
