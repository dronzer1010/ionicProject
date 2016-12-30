/**
 * @ngInject
 */
function SessionFunction($rootScope, $ionicHistory) {

  var Session = {
    user: null,

    getUser: function() {
      Session.user = localStorage.getItem("user");
      return JSON.parse(Session.user);
    },
    setUser: function(data) {
      Session.user = JSON.stringify(data);
      localStorage.setItem("user", Session.user);
    },



    isLoggedIn: function() {
      if (!!Session.getUser()) {
        return true;
      } else {
        return false;
      }
    },
    cache: {},
    // reset: function() {
    //   var newSession = {};
    //   newSession.user = null;
    //   newSession.guestUser = null;
    //   newSession.isGuest = Session.isGuest;
    //   newSession.getUserId = Session.getUserId;
    //   newSession.isLoggedIn = Session.isLoggedIn;
    //   newSession.reset = Session.reset;
    //   newSession.cache = {};
    //   angular.copy(newSession, Session);
    // }
  };
  return Session;
}

angular.module('starter').service('Session', SessionFunction);
