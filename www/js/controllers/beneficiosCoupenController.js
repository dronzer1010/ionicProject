angular.module('starter').controller('beneficiosCoupenController', function($scope, $state, $window, CouponService, $stateParams, IonicPopupService) {

  $scope.subCatId = $stateParams.subCatId;
  // console.log('$scope.subCatId.. : ' + $scope.subCatId);
  $scope.goBack = function() {
    $state.go('tab.beneficiousSubCategory');
    // $window.history.back();
  };

  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    CouponService.getAllCoupens().then(function(response) {
      // console.log('coupens response : ' + angular.toJson(response.data, ' '));
      $scope.coupensList = [];
      if (response.success = "true") {
        for (var i = 0;  i < response.data.length; i++) {
          if (response.data[i].subcategory === $stateParams.subCatId+'') {
            $scope.coupensList.push(response.data[i]);
          }
        }


      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error.msg);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });

  $scope.goDetailPage = function(data) {
    $state.go('tab.beneficiosDetailPage', {
      'coupen_obj': JSON.stringify(data)
    });
  };


  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };



});
