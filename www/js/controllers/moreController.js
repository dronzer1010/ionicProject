angular.module('starter').controller('moreController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $window.history.back();
  };
$scope.goFormacionSubMenu = function () {
  $state.go('tab.formacionSubmenu');
  console.log('yes goFormacionSubMenu function calling...');
};
$scope.goBeneficiousSubmenu = function () {
  $state.go('tab.beneficious');
};

$scope.goNoticiasPage = function () {
  $state.go('tab.noticiasPage');
}; 

$scope.goContactosPage = function () {
  $state.go('tab.contactos');
};

$scope.goCalendarioPage = function () {
  $state.go('tab.calendario');
};

});
