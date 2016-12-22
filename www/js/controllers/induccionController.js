angular.module('starter').controller('induccionController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };
});
