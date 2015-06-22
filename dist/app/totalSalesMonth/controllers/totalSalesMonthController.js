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

    var TotalSalesMonthController = (function () {
        function TotalSalesMonthController($location, $rootScope, $timeout, localStorageService, salesService) {
            var _this2 = this;

            _classCallCheck(this, TotalSalesMonthController);

            var sessionId = null,
                _this = this;

            this._location = $location;
            this._service = salesService;
            this._localStorageService = localStorageService;
            this._rootScope = $rootScope;
            if (!this._rootScope.logoff) {
                this._rootScope.logoff = function () {
                    if (_this2._localStorageService.isSupported) {
                        _this2._localStorageService.remove("userName", "sessionId");
                        _this2._location.path("/");
                    }
                };
            }

            this.pieConfig = {
                title: "",
                tooltips: true,
                labels: false,
                mouseover: function mouseover() {},
                mouseout: function mouseout() {},
                click: function click() {},
                legend: {
                    display: true,
                    position: "right"
                }
            };

            if (this._localStorageService.isSupported) {
                if (this._localStorageService.get("sessionId") === null) {
                    this._rootScope.logged = false;
                    this._rootScope.menus = [];
                    this._location.path("/");
                } else {
                    this.userName = this._localStorageService.get("userName");
                    sessionId = this._localStorageService.get("sessionId");
                    this._rootScope.userName = this.userName;
                    if (!this._rootScope.menus) {
                        this._rootScope.menus = this._localStorageService.get("charts");
                        this._rootScope.menus.unshift({
                            text: "Home",
                            selected: false,
                            visible: true,
                            url: "/#home"
                        });
                    }
                    this._rootScope.logged = true;

                    this.chart = this._localStorageService.get("charts")[1];
                }
            }

            this._rootScope.$on("addChartEffect", function () {
                $timeout(function () {
                    $(".panel").draggable({
                        grid: [5, 5],
                        handle: ".panel-heading"
                    }).resizable({
                        grid: [5, 5]
                    });
                }, 1000);
            });

            this._rootScope.$watch(this.charts, function (newVal, oldVal) {
                _this._rootScope.$broadcast("addChartEffect");
            }, true);
        }

        _createClass(TotalSalesMonthController, {
            _refreshChart: {
                value: function _refreshChart(data) {
                    var _this = this;
                    this.chart.data = data;
                    this._localStorageService.get("charts").filter(function (_chart) {
                        return _chart.service === _this.chart.service;
                    })[0].data = data;
                }
            },
            refresh: {
                value: function refresh() {
                    var sessionId = "",
                        _this = this;

                    if (this._localStorageService.isSupported) {
                        sessionId = this._localStorageService.get("sessionId");
                    }

                    this._service.getTotalSalesMonth(sessionId).then(function (data) {
                        _this._refreshChart(data);
                    });
                }
            }
        });

        return TotalSalesMonthController;
    })();

    TotalSalesMonthController.$inject = ["$location", "$rootScope", "$timeout", "localStorageService", "salesService"];

    app.controller("totalSalesMonthController", TotalSalesMonthController).service("salesService", SalesService);

    exports.TotalSalesMonthController = TotalSalesMonthController;
});