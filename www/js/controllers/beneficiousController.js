angular.module('starter').controller('beneficiousController', function($scope, $state, $window) {


  $scope.goBack = function() {
    $window.history.back();
  };

  $scope.goBeneficiousCouponsPage= function() {
    $state.go('tab.beneficiousCoupons');

  };

$scope.goDetailPage = function() {
  $state.go('tab.beneficiosDetailPage');

};

});
