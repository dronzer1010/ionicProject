angular.module('starter').controller('beneficiousController', function($scope, $state) {

$scope.goDetailPage = function() {
  $state.go('tab.beneficiosDetailPage');

};

});
