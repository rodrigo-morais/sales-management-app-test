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
        function LoginController(loginService) {
            _classCallCheck(this, LoginController);

            this._service = loginService;
            this.userName = "";
            this.password = "";
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
                    this._service.post(this.userName, this.password);

                    this._clean();
                }
            }
        });

        return LoginController;
    })();

    LoginController.$inject = ["loginService"];

    app.controller("loginController", LoginController).service("loginService", LoginService);

    exports.LoginController = LoginController;
});