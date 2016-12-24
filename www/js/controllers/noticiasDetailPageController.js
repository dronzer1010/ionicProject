angular.module('starter').controller('noticiasDetailPageController', function($scope, $state, $window, $stateParams) {

console.log('yes comes here...');
  $scope.goBack = function() {
    $state.go('tab.noticiasPage');
    // $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
  $scope.myData= $stateParams.data_obj;
  console.log('$stateParams.data : ' + $scope.myData );

});
