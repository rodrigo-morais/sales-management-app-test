/// <reference path="../vendor/d3/d3.min.js" />
/// <reference path="../vendor/angular-charts/dist/angular-charts.min.js" />
requirejs.config({
    "baseUrl": "/app",
    "urlArgs": "v=1.0",
    "paths": {
        'jquery': '../vendor/jquery/dist/jquery.min',
        'jquery-ui': '../vendor/jquery-ui/jquery-ui.min',
        'angular': '../vendor/angular/angular',
        'angular-resource': '../vendor/angular-resource/angular-resource',
        'angular-route': '../vendor/angular-route/angular-route',
        'angularAMD': '../vendor/angularAMD/angularAMD',
        'angularCSS': '../vendor/angular-css/angular-css',
        'angular-local-storage': '../vendor/angular-local-storage/dist/angular-local-storage.min',
        'd3': '../vendor/d3/d3.min',
        'angular-charts': '../vendor/angular-charts/dist/angular-charts',
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
        'angular-local-storage': {
            exports: "angular-local-storage",
            deps: ["angular"]
        },
        'angularCSS': {
            exports: "angularCSS",
            deps: ["angular"]
        },
        'angular-charts': {
            exports: "angular-charts",
            deps: ["angular", "d3"]
        },
        'angularAMD': ['angular'],
        'bootstrap':
        {
            deps: ["jquery"]
        }
    },
    deps: ["app"]
});