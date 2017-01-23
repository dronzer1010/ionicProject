angular.module('starter').controller('ghContigoController', function($scope, $state, $window,IonicPopupService) {



  $scope.goBack = function() {
    $state.go('tab.more');
    // $window.history.back();
  };

$scope.gomenuPage = function () {
  $state.go('tab.more');
};

});
