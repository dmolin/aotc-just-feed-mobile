angular.module('jf.restaurants')
.factory('RestaurantService', ['$http', ($http) => {
  const config = {
    headers: {
      'Accept-Tenant': 'uk',
      'Accept-Version': '2.0',
      'Accept-Language': 'en-US',
      'Accept': 'application/json',
      'Authorization': 'Basic VGVjaFRlc3RBUEk6dXNlcjI='
    }
  }

  return {
    search: (postcode, deliveryType) => {
      const url = 'http://public.je-apis.com/restaurants?q=' + encodeURIComponent(postcode) // + '&type=' + encodeURIComponent(deliveryType||'all')
      return $http(Object.assign({}, config, {url:url, method:'GET'})).then((response) => (response.data))
    }
  }
}])