define(["exports", "angular", "angular-route", "angularAMD", "angularCSS", "angular-resource", "angular-local-storage", "bootstrap", "components/footer/directives/footerDirective", "components/menu/directives/rmMenuDirective", "components/graphs/directives/graphsDirective"], function (exports, _angular, _angularRoute, _angularAMD, _angularCSS, _angularResource, _angularLocalStorage, _bootstrap, _componentsFooterDirectivesFooterDirective, _componentsMenuDirectivesRmMenuDirective, _componentsGraphsDirectivesGraphsDirective) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var angular = _interopRequire(_angular);

    var ngRoute = _interopRequire(_angularRoute);

    var angularAMD = _interopRequire(_angularAMD);

    var angularCss = _interopRequire(_angularCSS);

    var ngResource = _interopRequire(_angularResource);

    var LocalStorageModule = _interopRequire(_angularLocalStorage);

    var bootstrap = _interopRequire(_bootstrap);

    var footerDirective = _interopRequire(_componentsFooterDirectivesFooterDirective);

    var rmMenuDirective = _interopRequire(_componentsMenuDirectivesRmMenuDirective);

    var graphsDirective = _interopRequire(_componentsGraphsDirectivesGraphsDirective);

    var app = angular.module("myApp", ["ngRoute", "ngResource", "door3.css", "LocalStorageModule"]);

    app.config(function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix("myApp").setStorageType("sessionStorage").setNotify(false, false);
    });

    app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider.when("/", angularAMD.route({
            templateUrl: "app/login/templates/login.html",
            controller: "loginController",
            controllerUrl: "login/controllers/loginController",
            controllerAs: "vm"
        })).when("/home", angularAMD.route({
            templateUrl: "app/home/templates/home.html",
            controller: "homeController",
            controllerUrl: "home/controllers/homeController",
            controllerAs: "vm"
        })).otherwise(angularAMD.route({
            templateUrl: "app/login/templates/login.html",
            controller: "loginController",
            controllerUrl: "login/controllers/loginController",
            controllerAs: "vm"
        }));
    }]);

    app.directive("footerPage", [footerDirective]).directive("rmMenu", [rmMenuDirective]).directive("graphsList", [graphsDirective]);

    return angularAMD.bootstrap(app);
});