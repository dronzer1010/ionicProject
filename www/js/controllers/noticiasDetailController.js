angular.module('starter').controller('noticiasDetailController', function($scope, $state, $window,$sce, NoticiasService, IonicPopupService) {

  $scope.goBack = function() {
    // $window.history.back();
    $state.go('tab.noticas');
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goCommentPage = function () {
    $state.go('tab.noticasComment');
  };
  $scope.godetailPage = function () {
    $state.go('tab.noticasDetail');
  };

  $scope.like = function () {
    IonicPopupService.alert("Oops!!", "You cant like more than once the same news");
  };

  // $scope.$on('$ionicView.enter', function(ev) {
  //   if (ev.targetScope !== $scope)
  //     return;
  //
  //   NoticiasService.getAllCirculars().then(function(response) {
  //     console.log('noticias response : ' + angular.toJson(response , ' '));
  //
  //     if (response.success = "true") {
  //       $scope.circulars = response.data;
  //
  //     }
  //   }).catch(function(error) {
  //       var error = JSON.parse(error);
  //       IonicPopupService.alert("ERROR!!", error.msg);
  //       console.log('error : ' + angular.toJson(error, ' '));
  //   });
  //
  // });


});
