pdpApp.controller('DesignController', ["$scope", "pdpServices", "$location", "$routeParams", function($scope, pdpServices, $location, $routeParams) {
    $scope.version = pdpServices.getVersion();
}]);