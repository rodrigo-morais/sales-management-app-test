define(["exports", "app", "home/services/salesService"], function (exports, _app, _homeServicesSalesService) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var app = _interopRequire(_app);

    var SalesService = _homeServicesSalesService.SalesService;

    var HomeController = (function () {
        function HomeController($location, $rootScope, localStorageService, salesService) {
            var _this2 = this;

            _classCallCheck(this, HomeController);

            var sessionId = null;

            this._location = $location;
            this._localStorageService = localStorageService;
            this._service = salesService;
            this._rootScope = $rootScope;
            if (!this._rootScope.logoff) {
                this._rootScope.logoff = function () {
                    if (_this2._localStorageService.isSupported) {
                        _this2._localStorageService.remove("userName", "sessionId");
                        _this2._location.path("/");
                    }
                };
            }

            if (this._localStorageService.isSupported) {
                if (this._localStorageService.get("sessionId") === null) {
                    this._rootScope.logged = false;
                    this._rootScope.menus = [];
                    this._location.path("/");
                } else {
                    this.userName = this._localStorageService.get("userName");
                    sessionId = this._localStorageService.get("sessionId");
                    this._rootScope.userName = this.userName;
                    this._rootScope.logged = true;
                }
            }

            this.charts = [];
            var _this = this;
            this._service.getTotalSalesMan(sessionId).then(function (data) {
                _this.charts.push({
                    text: "Total for sales man",
                    selected: false,
                    type: "pie",
                    service: "totalSalesMan",
                    data: data,
                    visible: true,
                    url: "/#totalSalesMan"
                });
                _this._service.getTotalSalesMonth(sessionId).then(function (data) {
                    _this.charts.push({
                        text: "Total sales per month",
                        selected: false,
                        type: "bar",
                        service: "totalSalesMonth",
                        data: data,
                        visible: true
                    });
                    _this._service.getTop5SalesOrders(sessionId).then(function (data) {
                        _this.charts.push({
                            text: "Top 5 sales orders",
                            selected: false,
                            type: "list",
                            service: "top5SalesOrders",
                            data: data.data,
                            visible: true
                        });
                        _this._service.getTop5SalesMen(sessionId).then(function (data) {
                            _this.charts.push({
                                text: "Top 5 sales men",
                                selected: false,
                                type: "list",
                                service: "top5SalesMen",
                                data: data.data,
                                visible: true
                            });
                            _this._rootScope.menus = JSON.parse(JSON.stringify(_this.charts));
                            _this._rootScope.menus.unshift({
                                text: "Home",
                                selected: true,
                                visible: true,
                                url: "/#home"
                            });
                            _this._localStorageService.set("charts", _this.charts);
                        });
                    });
                });
            });
        }

        _createClass(HomeController, {
            showChart: {
                value: function showChart(menu) {
                    menu.visible = true;
                }
            }
        });

        return HomeController;
    })();

    HomeController.$inject = ["$location", "$rootScope", "localStorageService", "salesService"];

    app.controller("homeController", HomeController).service("salesService", SalesService);

    exports.HomeController = HomeController;
});