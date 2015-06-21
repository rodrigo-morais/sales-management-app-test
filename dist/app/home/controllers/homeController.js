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
        function HomeController($location, localStorageService, salesService) {
            _classCallCheck(this, HomeController);

            var sessionId = null;

            this._location = $location;
            this._localStorageService = localStorageService;
            this._service = salesService;

            if (this._localStorageService.isSupported) {
                if (this._localStorageService.get("sessionId") === null) {
                    this._location.path("/");
                } else {
                    this.userName = this._localStorageService.get("userName");
                    sessionId = this._localStorageService.get("sessionId");
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
                    data: data.data,
                    visible: true
                });
            });

            this._service.getTotalSalesMonth(sessionId).then(function (data) {
                _this.charts.push({
                    text: "Total sales per month",
                    selected: false,
                    type: "bar",
                    service: "totalSalesMonth",
                    data: data.data,
                    visible: true
                });
            });

            this._service.getTop5SalesOrders(sessionId).then(function (data) {
                _this.charts.push({
                    text: "Top 5 sales orders",
                    selected: false,
                    type: "list",
                    service: "top5SalesOrders",
                    data: data.data,
                    visible: true
                });
            });

            this._service.getTop5SalesMen(sessionId).then(function (data) {
                _this.charts.push({
                    text: "Top 5 sales men",
                    selected: false,
                    type: "list",
                    service: "top5SalesMen",
                    data: data.data,
                    visible: true
                });
            });
        }

        _createClass(HomeController, {
            showChart: {
                value: function showChart(menu) {
                    menu.visible = true;
                }
            },
            logoff: {
                value: function logoff() {
                    if (this._localStorageService.isSupported) {
                        this._localStorageService.remove("userName", "sessionId");
                        this._location.path("/");
                    }
                }
            }
        });

        return HomeController;
    })();

    HomeController.$inject = ["$location", "localStorageService", "salesService"];

    app.controller("homeController", HomeController).service("salesService", SalesService);

    exports.HomeController = HomeController;
});