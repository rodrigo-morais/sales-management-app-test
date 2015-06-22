'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import angularAMD from 'angularAMD';
import angularCss from 'angularCSS';
import ngResource from 'angular-resource';
import LocalStorageModule from 'angular-local-storage';
import angularCharts from 'angular-charts';
import bootstrap from 'bootstrap';
import jqueryUI from 'jquery-ui';
import footerDirective from "components/footer/directives/footerDirective";
import rmMenuDirective from "components/menu/directives/rmMenuDirective";
import graphsDirective from "components/graphs/directives/graphsDirective";
import salesListDirective from "components/graphs/directives/salesListDirective";

let app = angular.module('myApp', ['ngRoute', 'ngResource', 'door3.css', 'LocalStorageModule', 'angularCharts']);

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('myApp')
        .setStorageType('sessionStorage')
        .setNotify(false, false);
});

app.config([
  '$routeProvider',
  '$locationProvider',
  ($routeProvider, $locationProvider) => {
      $routeProvider.
          when('/',  angularAMD.route({
              templateUrl: 'app/login/templates/login.html',
              controller: 'loginController',
              controllerUrl: 'login/controllers/loginController',
              controllerAs: 'vm'
          })).
          when('/home',  angularAMD.route({
              templateUrl: 'app/home/templates/home.html',
              controller: 'homeController',
              controllerUrl: 'home/controllers/homeController',
              controllerAs: 'vm'
          })).
          when('/totalSalesMan',  angularAMD.route({
              templateUrl: 'app/totalSalesMan/templates/totalSalesMan.html',
              controller: 'totalSalesManController',
              controllerUrl: 'totalSalesMan/controllers/totalSalesManController',
              controllerAs: 'vm'
          })).
          when('/totalSalesMonth',  angularAMD.route({
              templateUrl: 'app/totalSalesMonth/templates/totalSalesMonth.html',
              controller: 'totalSalesMonthController',
              controllerUrl: 'totalSalesMonth/controllers/totalSalesMonthController',
              controllerAs: 'vm'
          })).
          when('/total5SalesOrders',  angularAMD.route({
              templateUrl: 'app/total5SalesOrders/templates/total5SalesOrders.html',
              controller: 'total5SalesOrdersController',
              controllerUrl: 'total5SalesOrders/controllers/total5SalesOrdersController',
              controllerAs: 'vm'
          })).
          when('/top5SalesMen',  angularAMD.route({
              templateUrl: 'app/top5SalesMen/templates/top5SalesMen.html',
              controller: 'top5SalesMenController',
              controllerUrl: 'top5SalesMen/controllers/top5SalesMenController',
              controllerAs: 'vm'
          })).
          otherwise(angularAMD.route({
              templateUrl: 'app/login/templates/login.html',
              controller: 'loginController',
              controllerUrl: 'login/controllers/loginController',
              controllerAs: 'vm'
          }));

  }
]);

app
    .directive('footerPage', [footerDirective])
    .directive('rmMenu', [rmMenuDirective])
    .directive('salesList', [salesListDirective])
    .directive('graphsList', ['$timeout', graphsDirective]);

return angularAMD.bootstrap(app);