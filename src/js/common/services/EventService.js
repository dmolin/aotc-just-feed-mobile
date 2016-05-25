angular.module('jf.common')
.factory('EventService', ['$rootScope', ($rootScope) => {
  class EventServiceImpl {
    constructor(scope) {
      this.boundedEvents = {}
      this.boundedScope = scope
      scope.$on('$destroy', () => { this.cleanup() })
    }

    trigger(name, data) {
      return $rootScope.$emit(name, data)
    }

    on(name, cb) {
      this.boundedEvents[name] = $rootScope.$on(name, cb)
      return this.boundedEvents[name]
    }

    cleanup() {
      Object.keys(this.boundedEvents).forEach((eventName) => {
        this.boundedEvents[eventName]()
        delete this.boundedEvents[eventName]
      })
    }
  }

  return {
    subscribe: ($scope) => {
      return new EventServiceImpl($scope)
    }
  }
}]);