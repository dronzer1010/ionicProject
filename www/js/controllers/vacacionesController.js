angular.module('starter').controller('vacacionesController', function($scope, $state, $window, VacacionesService, IonicPopupService, Session) {

  $scope.goBack = function() {
      $state.go('tab.formulario');
    // $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    VacacionesService.getAllUsers().then(function(response) {
      $scope.allUsers = [];
      if (response.success = "true") {
        // console.log('yes true');
          $scope.allUsers = response.data;
          console.log('$scope.allUsers : ' +  angular.toJson($scope.allUsers, ' ') );
      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });
  var userData = Session.getUser();
  var AuthorizationData = JSON.parse(userData);
  console.log('$scope.userData : ' + AuthorizationData.data.auth_token);

  $scope.submit = function (incioDateValue,finDateValue,regresoDateValue,name,comentariosData) {
    console.log('$scope.incioDateValue : ' + incioDateValue);
    console.log('$scope.finDateValue : ' + finDateValue);
    console.log('$scope.regresoDateValue : ' + regresoDateValue);
    console.log('$scope.selectedName : ' + name);
    console.log('$scope.description : ' + comentariosData);
    var leaveObj = {
        startsOn: incioDateValue,
        endsOn: finDateValue,
        joinsOn: regresoDateValue,
        reportsTo: name,
        vacationType: comentariosData,
        Authorization : AuthorizationData.data.auth_token
    }
    console.log('leaveObj : ' + angular.toJson(leaveObj , ' '));

    VacacionesService.applyForLeave(leaveObj).then(function(response) {
        if (response.success = "true") {
              console.log('apply for leave successfully...');
        } else {
          console.log('error at apply for leave.');
            // IonicPopupService.alert("ERROR", "User not apply for leave.");
        }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error);
        console.log('error : ' + angular.toJson(error, ' '));
    });
  };


});
