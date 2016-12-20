angular.module('starter').controller('loginController', function($scope, $state, $ionicModal, $timeout) {

  // Form data for the login modal
  $scope.loginData = {};

  // Perform the login action when the user submits the login form
  $scope.Login = function() {
    console.log('Login page calling');
    // IonicPopupService.alert("Success", "User Login Successfully.");
    // $state.go('tab.beneficious');
    $state.go('tab.induccion');

  };
  // Create the forgot password  modal that we will use later
  $ionicModal.fromTemplateUrl('templates/forgotPassword.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
$scope.hideBackButton = true;
  // Triggered in the forgot password modal to close it
  $scope.closeForgotPassword = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.forgotPassword = function() {
    $scope.modal.show();
    $scope.$apply();
  };

  /////this code is for forgot password page:
  $scope.resetPassword = function () {
    console.log('yes this page is calling...');
    // $scope.closeForgotPassword();
  };

});
