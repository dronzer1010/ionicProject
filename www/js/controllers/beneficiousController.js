angular.module('starter').controller('beneficiousController', function($scope, $state, $window, CouponService) {

  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    CouponService.getAllCategories().then(function(response) {
      $scope.categories = [];
      if (response.success = "true") {
        console.log('yes true');
          $scope.categories = response.data;
          console.log('$scope.categories : ' +  angular.toJson(response.data, ' ') );
      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error.msg);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });


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
