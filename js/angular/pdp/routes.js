// ROUTES
pdpApp.config(["$routeProvider", function ($routeProvider, $log) {
    $routeProvider
    
    .when('/', {
        templateUrl: 'html/templates/design.html',
        controller: 'DesignController'
    })
    .when('/page2', {
        templateUrl: 'html/templates/page2.html',
        controller: 'Page2Controller'
    })
    .otherwise({
        redirectTo: '/'
    });
    
}]);