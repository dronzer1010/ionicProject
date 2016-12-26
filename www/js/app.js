// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('login', {
  url: '/login',
  templateUrl: 'templates/login.html',
  controller: 'loginController'
 })


  .state('tab.beneficious', {
    url: '/beneficious',
    views: {
      'tab-beneficious': {
        templateUrl: 'templates/beneficious.html',
        controller: 'beneficiousController'
      }
    }
  })

  .state('tab.beneficiousSubCategory', {
    url: '/beneficiousSubCategory/:catId',
    views: {
      'tab-beneficious': {
        templateUrl: 'templates/beneficiousSubCategory.html',
        controller: 'beneficiousSubCategoryController'
      }
    }
  })

  .state('tab.beneficiousCoupons', {
    url: '/beneficiousCoupons/:subCatId',
    views: {
      'tab-beneficious': {
        templateUrl: 'templates/beneficiousCoupons.html',
        controller: 'beneficiosCoupenController'
      }
    }
  })


  .state('tab.beneficiosDetailPage', {
    url: '/beneficiosDetailPage/:coupen_obj',
    views: {
      'tab-beneficious': {
        templateUrl: 'templates/beneficiosDetailPage.html',
        controller: 'beneficiosDetailController'
      }
    }
  })

  .state('tab.induccion', {
      url: '/induccion',
      views: {
        'tab-induccion': {
          templateUrl: 'templates/induccion.html',
          controller: 'induccionController'
        }
      }
    })

    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })


    .state('tab.more', {
      url: '/more',
      views: {
        'tab-more': {
          templateUrl: 'templates/more.html',
          controller: 'moreController'
        }
      }
    })

    .state('tab.formacionSubmenu', {
      url: '/formacionSubmenu',
      views: {
        'tab-more': {
          templateUrl: 'templates/formacionSubmenu.html',
          controller: 'formacionSubmenuController'
        }
      }
    })
    .state('tab.noticiasPage', {
      url: '/noticiasPage',
      views: {
        'tab-more': {
          templateUrl: 'templates/noticiasPage.html',
          controller: 'noticiasPageController'
        }
      }
    })
    .state('tab.noticiasDetailPage', {
      url: '/noticiasDetailPage/:data_obj',
      views: {
        'tab-more': {
          templateUrl: 'templates/noticiasDetailPage.html',
          controller: 'noticiasDetailPageController'
        }
      }
    })

    .state('tab.contactos', {
      url: '/contactos',
      views: {
        'tab-more': {
          templateUrl: 'templates/contactos.html',
          controller: 'contactosController'
        }
      }
    })

    .state('tab.contactosDetailPage', {
      url: '/contactosDetailPage/:contactos_data',
      views: {
        'tab-more': {
          templateUrl: 'templates/contactosDetailPage.html',
          controller: 'contactosDetailController'
        }
      }
    })


  .state('tab.formulario', {
    url: '/formulario',
    views: {
      'tab-formulario': {
        templateUrl: 'templates/formulario.html',
        controller: 'formularioController'
      }
    }
  })


  .state('tab.noticas', {
    url: '/noticas',
    views: {
      'tab-noticas': {
        templateUrl: 'templates/noticas.html',
        controller: 'noticasController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
