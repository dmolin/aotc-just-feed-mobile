angular.module('jf.restaurants')
.directive('jfSearchForm', [
  'EventService', 'RestaurantService',
  (EventService, RestaurantService) => (
{
  restrict: 'E',
  template: _template,
  scope:{
    searchModel: "="
  },
  
  controller: ($scope) => {
    $scope.model = { selected: 'all', postcode:'' }; //default selection
  },
  
  link: (scope, element, attrs) => {
    var eventBus = EventService.subscribe(scope);

    console.log("provided model", scope.searchModel)
    
    scope.onSubmit = () => {
      scope.model.postcode = scope.model.postcode.toUpperCase();

      //propagate result to bounded model
      Object.assign(scope.searchModel, scope.model);
      //search for restaurants
      //eventBus.trigger('')
      /***
      RestaurantService.search(scope.model.postcode, scope.model.selected)
        .then((result) => {
          console.log(result)
          eventBus.trigger('restaurants-search-result', Object.assign({}, {area: result.Area, shortResultText: result.ShortResultText, restaurants: result.restaurants))
        })
        .catch((err) => {
          console.log("Error", err);
        })
      */
      
    }
  }
})
]);

function _template() {
  return (
  `
  <section class="restaurant-search">
    <form class="restaurant-search-form form form--wide" ng-submit="onSubmit()">
      <input class="restaurant-search-postcode form-control" type="text" placeholder="Your postcode" ng-model="model.postcode"/>
      <div class="restaurant-search-options form-control form-control--radios">
        <input id="type-all" type="radio" name="restaurant-delivery-type" value="all" ng-model="model.selected" />
        <label for="type-all"><span>All</span></label>
        <input id="type-delivery" type="radio" name="restaurant-delivery-type" value="delivery" ng-model="model.selected" />
        <label for="type-delivery"><span>Delivery</span></label>
        <input id="type-collection" type="radio" name="restaurant-delivery-type" value="collection" ng-model="model.selected" />
        <label for="type-collection"><span>Collection</span></label>
      </div>
      <button class="restaurant-search-button form-control action">Find takeaways</button>
    </form>
  </section>
  `
  )
}
