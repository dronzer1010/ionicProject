angular.module('starter').controller('induccionCourseController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goCourseContent = function () {
    $state.go('tab.induccionCourseContent');
  };

  $scope.goCourseDinamica = function () {
    $state.go('tab.induccionCourseDinamica');
  };


});
