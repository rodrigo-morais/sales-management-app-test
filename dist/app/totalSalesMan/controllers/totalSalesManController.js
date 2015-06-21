define(["exports", "app"], function (exports, _app) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var app = _interopRequire(_app);

    var TotalSalesManController = function TotalSalesManController($location, $rootScope, localStorageService) {
        var _this = this;

        _classCallCheck(this, TotalSalesManController);

        var sessionId = null;

        this._location = $location;
        this._localStorageService = localStorageService;
        this._rootScope = $rootScope;
        if (!this._rootScope.logoff) {
            this._rootScope.logoff = function () {
                if (_this._localStorageService.isSupported) {
                    _this._localStorageService.remove("userName", "sessionId");
                    _this._location.path("/");
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
                this._rootScope.logged = true;

                this.chart = this._localStorageService.get("charts")[0];
            }
        }
    };

    TotalSalesManController.$inject = ["$location", "$rootScope", "localStorageService"];

    app.controller("totalSalesManController", TotalSalesManController);

    exports.TotalSalesManController = TotalSalesManController;
});