require.config({
    baseUrl: '/app',
    urlArgs: 'v=1.0'
});

require(
    [
        'app'
    ],
    function(){
        angular.bootstrap(document, ['myApp']);
    }
);