requirejs.config({
    "baseUrl": "/app",
    "urlArgs": "v=1.0",
    "paths": {
        'jquery': '../vendor/jquery/dist/jquery.min',
        'angular': '../vendor/angular/angular',
        'angular-resource': '../vendor/angular-resource/angular-resource',
        'angular-route': '../vendor/angular-route/angular-route',
        'angularAMD': '../vendor/angularAMD/angularAMD',
        'angularCSS': '../vendor/angular-css/angular-css',
        'bootstrap': '../vendor/bootstrap/dist/js/bootstrap.min',
        'moment': '../vendor/moment/moment'
    },
    "shim": {
        'angular': {
            exports: "angular",
            deps: ["jquery"]
        },
        'angular-route': {
            exports: "angular-route",
            deps: ["angular"]
        },
        'angular-resource': {
            exports: "angular-resource",
            deps: ["angular"]
        },
        'angularCSS': {
            exports: "angularCSS",
            deps: ["angular"]
        },
        'angularAMD': ['angular'],
        'bootstrap':
        {
            deps: ["jquery"]
        }
    },
    deps: ["app"]
});