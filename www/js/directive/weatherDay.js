
angular.module('starter')

.directive('weatherDay', function() {
    return {
        restrict: 'E', replace: true,
        scope: {
            day: '='
        },
        controller: function($scope) {
            $scope.getDate = function() {
            	var date = new Date();
              date.setDate(date.getDate() + $scope.day.number);
              return date;
            }
        },
        template: '<div class="col col-25" style="float:left;margin:2px 2px 2px 2px;background-color: rgb(0, 66, 138);">{{ getDate() | date: "EEE d"}}<h5>{{ day.temp.current | formatTemp}}</h5>wind: {{day.wind }}<br/>  <weather-icon sky="{{ day.sky }}"></weather-icon></div>'
        // template: '<div style="float:left;">{{ getDate() | date: "EEEE d"}}<h5>Current: {{ day.temp.current | formatTemp}}</h5>min: {{ day.temp.min  | formatTemp}}, <br/> max: {{ day.temp.max  | formatTemp}},<br/> wind: {{day.wind }}<br/>  <weather-icon sky="{{ day.sky }}"></weather-icon></div>'
    };
});
