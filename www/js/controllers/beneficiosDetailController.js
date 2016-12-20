angular.module('starter').controller('beneficiosDetailController', function($scope, $state, $window) {

console.log('yes comes here...');
  $scope.goBack = function() {
    $window.history.back();
  };

});
