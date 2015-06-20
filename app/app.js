'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import angularAMD from 'angularAMD';
import angularCss from 'angularCSS';
import ngResource from 'angular-resource';
import LocalStorageModule from 'angular-local-storage';
import bootstrap from 'bootstrap';
import footerDirective from "components/footer/directives/footerDirective";
import rmMenuDirective from "components/menu/directives/rmMenuDirective";

let app = angular.module('myApp', ['ngRoute', 'ngResource', 'door3.css', 'LocalStorageModule']);

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
    .directive('rmMenu', [rmMenuDirective]);

return angularAMD.bootstrap(app);