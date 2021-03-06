define(["exports", "app", "login/services/loginService"], function (exports, _app, _loginServicesLoginService) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var app = _interopRequire(_app);

    var LoginService = _loginServicesLoginService.LoginService;

    var LoginController = (function () {
        function LoginController($location, $rootScope, loginService, localStorageService) {
            var _this = this;

            _classCallCheck(this, LoginController);

            this._service = loginService;
            this._location = $location;
            this._localStorageService = localStorageService;
            this.userName = "";
            this.password = "";
            this._rootScope = $rootScope;

            this._rootScope.logged = false;
            this._rootScope.menus = [];
            this._rootScope.userName = "";
            this._rootScope.logoff = function () {
                if (_this._localStorageService.isSupported) {
                    _this._localStorageService.remove("userName", "sessionId");
                    _this._location.path("/");
                }
            };

            if (this._localStorageService.isSupported) {
                if (this._localStorageService.get("sessionId") !== null) {
                    this._rootScope.userName = this._localStorageService.get("userName");
                    this._location.path("/home");
                }
            }
        }

        _createClass(LoginController, {
            _clean: {
                value: function _clean() {
                    this.userName = "";
                    this.password = "";
                }
            },
            login: {
                value: function login() {
                    var _this = this;
                    this._service.post(this.userName, this.password).then(function (data) {
                        if (data.loginSucceeded) {
                            if (_this._localStorageService.isSupported) {
                                _this._localStorageService.set("userName", _this.userName);
                                _this._localStorageService.set("sessionId", data.sessionId);
                                _this._rootScope.userName = _this.userName;
                                _this._rootScope.logged = true;
                                _this._location.path("/home");
                            }
                        } else {
                            _this._clean();
                        }
                    });
                }
            }
        });

        return LoginController;
    })();

    LoginController.$inject = ["$location", "$rootScope", "loginService", "localStorageService"];

    app.controller("loginController", LoginController).service("loginService", LoginService);

    exports.LoginController = LoginController;
});