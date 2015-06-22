define(["exports", "angular", "angular-route", "angularAMD", "angularCSS", "angular-resource", "angular-local-storage", "angular-charts", "bootstrap", "jquery-ui", "components/footer/directives/footerDirective", "components/menu/directives/rmMenuDirective", "components/graphs/directives/graphsDirective", "components/graphs/directives/salesListDirective"], function (exports, _angular, _angularRoute, _angularAMD, _angularCSS, _angularResource, _angularLocalStorage, _angularCharts, _bootstrap, _jqueryUi, _componentsFooterDirectivesFooterDirective, _componentsMenuDirectivesRmMenuDirective, _componentsGraphsDirectivesGraphsDirective, _componentsGraphsDirectivesSalesListDirective) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var angular = _interopRequire(_angular);

    var ngRoute = _interopRequire(_angularRoute);

    var angularAMD = _interopRequire(_angularAMD);

    var angularCss = _interopRequire(_angularCSS);

    var ngResource = _interopRequire(_angularResource);

    var LocalStorageModule = _interopRequire(_angularLocalStorage);

    var angularCharts = _interopRequire(_angularCharts);

    var bootstrap = _interopRequire(_bootstrap);

    var jqueryUI = _interopRequire(_jqueryUi);

    var footerDirective = _interopRequire(_componentsFooterDirectivesFooterDirective);

    var rmMenuDirective = _interopRequire(_componentsMenuDirectivesRmMenuDirective);

    var graphsDirective = _interopRequire(_componentsGraphsDirectivesGraphsDirective);

    var salesListDirective = _interopRequire(_componentsGraphsDirectivesSalesListDirective);

    var app = angular.module("myApp", ["ngRoute", "ngResource", "door3.css", "LocalStorageModule", "angularCharts"]);

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
        })).when("/totalSalesMan", angularAMD.route({
            templateUrl: "app/totalSalesMan/templates/totalSalesMan.html",
            controller: "totalSalesManController",
            controllerUrl: "totalSalesMan/controllers/totalSalesManController",
            controllerAs: "vm"
        })).when("/totalSalesMonth", angularAMD.route({
            templateUrl: "app/totalSalesMonth/templates/totalSalesMonth.html",
            controller: "totalSalesMonthController",
            controllerUrl: "totalSalesMonth/controllers/totalSalesMonthController",
            controllerAs: "vm"
        })).when("/total5SalesOrders", angularAMD.route({
            templateUrl: "app/total5SalesOrders/templates/total5SalesOrders.html",
            controller: "total5SalesOrdersController",
            controllerUrl: "total5SalesOrders/controllers/total5SalesOrdersController",
            controllerAs: "vm"
        })).when("/top5SalesMen", angularAMD.route({
            templateUrl: "app/top5SalesMen/templates/top5SalesMen.html",
            controller: "top5SalesMenController",
            controllerUrl: "top5SalesMen/controllers/top5SalesMenController",
            controllerAs: "vm"
        })).otherwise(angularAMD.route({
            templateUrl: "app/login/templates/login.html",
            controller: "loginController",
            controllerUrl: "login/controllers/loginController",
            controllerAs: "vm"
        }));
    }]);

    app.directive("footerPage", [footerDirective]).directive("rmMenu", [rmMenuDirective]).directive("salesList", [salesListDirective]).directive("graphsList", ["$timeout", graphsDirective]);

    return angularAMD.bootstrap(app);
});