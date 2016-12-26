angular.module('starter').controller('noticasController', function($scope, $state, $window,$sce, NoticiasService) {

  $scope.goBack = function() {
    $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };


  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    NoticiasService.getAllCirculars().then(function(response) {

      if (response.success = "true") {
        $scope.circulars = response.data;

      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error.msg);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });

  // $scope.$on('$ionicView.enter', function(ev) {
  //   if (ev.targetScope !== $scope)
  //     return;
  //
  //   NoticiasService.getAllNotices().then(function(response) {
  //     console.log('noticias data..: ' + angular.toJson(response , ' '));
  //     if (response.success = "true") {
  //       // console.log('noticias data..: ' + angular.toJson(response , ' '));
  //
  //
  //     }
  //   }).catch(function(error) {
  //       var error = JSON.parse(error);
  //       IonicPopupService.alert("ERROR!!", error.msg);
  //       console.log('error : ' + angular.toJson(error, ' '));
  //   });
  //
  // });



  $scope.view_pdf = function (url) {
    var ref = window.open(url, '_blank', 'location=no');
}
});
