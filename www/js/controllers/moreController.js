angular.module('starter').controller('moreController', function($scope, $state, $window, $ionicModal) {

  $scope.goBack = function() {
    $window.history.back();
  };
$scope.goFormacionSubMenu = function () {
  $state.go('tab.formacionSubmenu');
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
$scope.goFormularioPage = function () {
  $state.go('tab.formulario');
};

////for openmode :
////for open modal :
$ionicModal.fromTemplateUrl('templates/modal.html', {
  scope: $scope,
  animation: 'slide-in-up'
}).then(function(modal) {
  console.log('before assign');
  $scope.modal = modal;
});
$scope.openModal = function() {
  $scope.modal.show();
};
$scope.closeModal = function() {
  $scope.modal.hide();
};
// Cleanup the modal when we're done with it!
$scope.$on('$destroy', function() {
  $scope.modal.remove();
});

});
