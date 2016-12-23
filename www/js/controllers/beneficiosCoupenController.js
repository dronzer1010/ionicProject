angular.module('starter').controller('beneficiosCoupenController', function($scope, $state, $window, CouponService, $stateParams) {

  $scope.subCatId = $stateParams.subCatId;
  console.log('$scope.subCatId.. : ' + $scope.subCatId);
  $scope.goBack = function() {
    $state.go('tab.beneficiousSubCategory');
    // $window.history.back();
  };

  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    CouponService.getAllCoupens().then(function(response) {
      $scope.coupensList = [];
      if (response.success = "true") {
          //$scope.data = response.data;
        for (var i = 0;  i < response.data.length; i++) {
          if (response.data[i].subcategory === $stateParams.subCatId+'') {
            $scope.coupensList.push(response.data[i]);
          }
        }

          // $scope.allCoupens = response.data;
          // console.log('$scope.allCoupens : ' +  angular.toJson(response.data, ' ') );
      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error.msg);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });

  $scope.goDetailPage = function(coupenId) {
    $state.go('tab.beneficiosDetailPage', { 'coupenId': coupenId });
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };



});
