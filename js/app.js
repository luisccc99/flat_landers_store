(function () {
    let app = angular.module('store', ['store-products']);

    app.controller('StoreController', ['$http', '$log', function ($http, $log) {
        let store = this;
        store.products = [];
        $http({
            method: 'GET',
            url: '../products.json'
        }).then(function successCallback(response) {
            $log.info(response.data);
            store.products = response.data;
        }, function errorCallback(response) {
            $log.error(error)
        });
    }]);


})();