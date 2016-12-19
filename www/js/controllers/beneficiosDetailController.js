angular.module('starter').controller('beneficiosDetailController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };

});
