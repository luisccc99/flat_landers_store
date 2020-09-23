(function (){
    let app = angular.module('store-products', [])

    .directive('productTitle', function () {
        return {
            restrict: 'A',
            templateUrl: './templates/product-title.html'
        }
    })

    .directive('productPanels', function () {
        return {
            restrict: 'E',
            templateUrl: './templates/product-panels.html',
            controller: function () {
                this.tab = 1;
                this.selectTab = function (setTab) {
                    this.tab = setTab;
                }

                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                }
            },
            controllerAs: 'panels'
        }
    })

    .directive('reviewPanels', function () {
        return {
            restrict: 'E',
            templateUrl: './templates/product-reviews.html',
            controller: function () {
                this.review = {};
                this.addReview = function (product) {
                    this.review.createdOn = new Date();
                    product.reviews.push(this.review);
                    this.review = {};
                }
            },
            controllerAs: 'reviewCtrl'
        }
    })

    .directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: './templates/product-gallery.html',
            controller: function () {
                this.current = 0;
                this.setCurrent = function(i) {
                    this.current = i || 0;
                }

                this.isSet = function(i) {
                    this.current === i;
                }
            },
            controllerAs: 'gallery'
        }
    })

    .directive('productDescription', function () {
        return {
            restrict: 'A',
            templateUrl: './templates/product-description.html'
        }
    })

    .directive('productSpecs', function () {
        return {
            restrict: 'A',
            templateUrl: './templates/product-specs.html'
        }
    })

})()