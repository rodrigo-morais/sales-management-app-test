define(["exports", "app"], function (exports, _app) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var app = _interopRequire(_app);

    //import { LoginService } from "login/services/loginService";

    var HomeController = (function () {
        function HomeController($location, localStorageService) {
            _classCallCheck(this, HomeController);

            this._location = $location;
            this._localStorageService = localStorageService;

            if (this._localStorageService.isSupported) {
                if (this._localStorageService.get("sessionId") === null) {
                    this._location.path("/");
                } else {
                    this.userName = this._localStorageService.get("userName");
                }
            }

            this.menuItems = [{
                text: "Total for sales man",
                selected: false,
                type: "pie"
            }, {
                text: "Total sales per month",
                selected: false,
                type: "bar"
            }, {
                text: "Top 5 sales orders",
                selected: false,
                type: "orders"
            }, {
                text: "Top 5 sales men",
                selected: false,
                type: "months"
            }];
        }

        _createClass(HomeController, {
            showChart: {
                value: function showChart(menu) {
                    alert("teste");
                    alert(menu);
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

    HomeController.$inject = ["$location", "localStorageService"];

    app.controller("homeController", HomeController);
    //.service('loginService', LoginService);

    exports.HomeController = HomeController;
});