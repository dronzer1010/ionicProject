angular.module('starter').controller('induccionCourseDinamicaController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  
});
