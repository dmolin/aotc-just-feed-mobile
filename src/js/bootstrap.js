
function bootstrap() {
  console.log("bootstrap")

  require('./common')
  require('./restaurants')

  angular.module('jf', ['templates', 'ui.router', 'jf.common', 'jf.restaurants'])
    .config(($stateProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise('/home')
      
      $stateProvider
        .state('home', {
          url:'/home',
          views: {
            main: {
              controller: 'HomeCtrl',
              controllerAs: 'ctrl',
              templateUrl: 'common/controllers/home.html'
            }
          }
        })
        .state('search', {
          url: '/search/:postcode/:selected',
          views: {
            main: {
              controller: 'SearchCtrl',
              controllerAs: 'ctrl',
              templateUrl: 'restaurants/controllers/search-ctrl.html'
            }
          }
        })
    })

  var appEl = document.querySelector('[data-id=ngapp]')
  angular.bootstrap(appEl, ['jf']);
}

export default bootstrap;