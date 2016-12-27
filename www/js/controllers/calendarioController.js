angular.module('starter').controller('calendarioController', function($scope, $state, $window,$sce,$filter, EventService) {



  $scope.goBack = function() {
    // $window.history.back();
    $state.go('tab.more');
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goCreateEventPage = function () {

    $state.go('tab.calendarioCreateEvent');
  };

  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    EventService.getEvents().then(function(response) {
      if (response.success = "true") {
        $scope.acceptedEvents = response.data;
        $scope.calendar.eventSource =  createEvents([$scope.acceptedEvents]);
      // console.log('event data  : ' + angular.toJson($scope.acceptedEvents , ' '));

      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error.msg);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });


  function createEvents(data) {
    console.log('yes this function calling....'+ angular.toJson(data)  );
    var events = [];
    for (var i = 0; i < data.length; i += 1) {
      var startDate = new Date(data[i].startDate);
      var endDate = new Date(data[i].endDate);

      // var startTime = new Date(data[i].startTime);
      // var endTime = new Date(data[i].endTime);

      // var eventStartTime = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startTime.getUTCHours(), startTime.getUTCMinutes());
      // var eventEndTime = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endTime.getUTCHours(), endTime.getUTCMinutes());

      var eventStartTime = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
      var eventEndTime = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

      console.log('eventStartTime ' + eventStartTime);
      console.log('eventEndTime : ' + eventEndTime);

      events.push({
        title: data[i].title,
        startTime: eventStartTime,
        endTime: eventEndTime,
        allDay: false
      });

    }
    return events;
  }



  $scope.onViewTitleChanged = function(title) {
    $scope.viewTitle = title;
  };
// for calender :

$scope.calendar = {};
$scope.changeMode = function(mode) {
  $scope.calendar.mode = mode;
};

$scope.loadEvents = function() {
  $scope.calendar.eventSource = createRandomEvents();
};

$scope.onEventSelected = function(event) {
  console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
};



$scope.today = function() {
  $scope.calendar.currentDate = new Date();
};

$scope.isToday = function() {
  var today = new Date(),
    currentCalendarDate = new Date($scope.calendar.currentDate);

  today.setHours(0, 0, 0, 0);
  currentCalendarDate.setHours(0, 0, 0, 0);
  return today.getTime() === currentCalendarDate.getTime();
};

$scope.onDoubleTap = function(selectedTime, events) {
  console.log('Selected time.....: ' + selectedTime + ', hasEvents: ' + (events !== undefined && events.length !== 0));
  $scope.selectedStartDate = selectedTime;
  $scope.selectedStartTime = selectedTime;
  console.log('events : ' + events);
// $state.go('tab.calendarioCreateEvent');
$state.go('tab.calendarioCreateEvent', {
  'event_obj': JSON.stringify($scope.acceptedEvents)
});
};



// $scope.openDetailModel = function (detailInfo) {
//   $scope.selectedDetailInfo = detailInfo;
//   console.log('detail info data : ' + angular.toJson($scope.selectedDetailInfo));
//   $scope.requestDetailModal.show();
//
// };

//   $scope.$on('$ionicView.enter', function(ev) {
//     if (ev.targetScope !== $scope)
//       return;
//
//     NoticiasService.getAllCirculars().then(function(response) {
//
//       if (response.success = "true") {
//         $scope.circulars = response.data;
//
//       }
//     }).catch(function(error) {
//         var error = JSON.parse(error);
//         IonicPopupService.alert("ERROR!!", error.msg);
//         console.log('error : ' + angular.toJson(error, ' '));
//     });
//
//   });
//
//   $scope.view_pdf = function (url) {
//     var ref = window.open(url, '_blank', 'location=no');
// };


});
