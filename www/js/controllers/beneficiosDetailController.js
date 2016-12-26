angular.module('starter').controller('beneficiosDetailController', function($scope, $state, $window,$stateParams) {

  $scope.goBack = function() {
    // $state.go('tab.beneficiousCoupons');
    $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
  $scope.coupenDetails= JSON.parse($stateParams.coupen_obj);

  // console.log('$stateParams.data : ' + angular.toJson($scope.coupenDetails , ' ') );

});
