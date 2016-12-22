angular.module('starter').controller('noticasController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };

});
