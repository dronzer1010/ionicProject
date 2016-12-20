angular.module('starter').controller('moreController', function($scope, $state) {


$scope.goFormacionSubMenu = function () {
  $state.go('tab.formacionSubmenu');
  console.log('yes goFormacionSubMenu function calling...');
};

});
