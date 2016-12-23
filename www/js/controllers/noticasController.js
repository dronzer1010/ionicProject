angular.module('starter').controller('noticasController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
  $scope.link='http://www.cbu.edu.zm/downloads/pdf-sample.pdf';

  $scope.File_Id = 'myId';


});
