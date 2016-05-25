angular.module('jf.common')
.controller('HomeCtrl', [
    '$scope',
    '$state',
  function HomeCtrl(
    $scope,
    $state
  )
  {
    var ctrl = this
    //const ctrl = $scope;
    console.log("Home Controller!!", ctrl)

    ctrl.searchModel = {};

    $scope.$watch('ctrl.searchModel', function(val, oval) {
      console.log("watch", val, oval);
      if(val.postcode !== oval.postcode || val.selected !== oval.selected) {
        //console.log("model has changed", ctrl.searchModel);
        //trigger route change
        $state.go('search', ctrl.searchModel)
      }

    }, true)

  }])