angular.module('starter').controller('loginController', function($scope, $state, $ionicModal, $timeout, UserService, IonicPopupService) {

    // Form data for the login modal
    $scope.loginData = {};

    // Perform the login action when the user submits the login form
    $scope.Login = function() {

        var loginObj = {
            userName: $scope.loginData.employId,
            password: $scope.loginData.password
        }

        UserService.login(loginObj).then(function(response) {
            if (response.success = "true") {
                $state.go('tab.induccion');
            } else {
                IonicPopupService.alert("Success", "User Login successfully.");
            }
        }).catch(function(error) {
            var error = JSON.parse(error);
            IonicPopupService.alert("ERROR!!", error.msg);
            console.log('error : ' + angular.toJson(error, ' '));
        });

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
    $scope.resetPassword = function() {
        console.log('yes this page is calling...');
        // $scope.closeForgotPassword();
    };

});
