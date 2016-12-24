angular.module('starter').controller('noticasController', function($scope, $state, $window,$sce, CouponService) {

  $scope.goBack = function() {
    $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };
  $scope.link='http://www.cbu.edu.zm/downloads/pdf-sample.pdf';

  $scope.File_Id = 'myId';


  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;
  $scope.link='http://www.cbu.edu.zm/downloads/pdf-sample.pdf';

    CouponService.getAllCirculars().then(function(response) {

      if (response.success = "true") {
        $scope.circulars = response.data;
        var file = new Blob([response.data.path], {type: 'application/pdf'});
        var fileURL = URL.createObjectURL(file);
        // $scope.content = 'http://banistmo-backend.herokuapp.com/' + fileURL;

        $scope.content = $sce.trustAsResourceUrl(fileURL);
        console.log('$scope.content.. : ' + $scope.content);
          console.log('$scope.categories : ' +  angular.toJson($scope.circulars, ' ') );
      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error.msg);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });
});
