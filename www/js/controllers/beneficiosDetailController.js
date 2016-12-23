angular.module('starter').controller('beneficiosDetailController', function($scope, $state, $window) {

console.log('yes comes here...');
  $scope.goBack = function() {
    // $state.go('tab.beneficiousCoupons');
    $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
 

});
