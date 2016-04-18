pdpApp.service("pdpServices", ["$http", "$q", "$rootScope", function($http, $q, $rootScope) {
    var self = this,
        version = 'PDP - 2016';
    // Return public API.
    return({
        version: version,
        getVersion: getVersion
    });
    function getVersion() {
        return this.version;
    }
    // ---
    // PRIVATE METHODS.
    // ---
    function handleError( response ) {
        if (! angular.isObject( response.data ) ||! response.data.message) {
            return( $q.reject( "An unknown error occurred." ) );
        }
        // Otherwise, use expected error message.
        return( $q.reject( response.data.message ) );
    }
    // transform the successful response, unwrapping the application data
    // from the API response payload.
    function handleSuccess( response ) {
        return( response.data );
    }
}]);

