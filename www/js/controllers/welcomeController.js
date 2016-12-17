angular.module('starter').controller('welcomeController', function($scope, $state, $ionicModal, $timeout) {


  $scope.goForLogin = function() {
    $state.go('app.login');
  };


});
