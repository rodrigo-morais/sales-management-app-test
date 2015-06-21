import app from 'app';
import { LoginService } from "login/services/loginService";

class LoginController {
    constructor($location, $rootScope, loginService, localStorageService){
        this._service = loginService;
        this._location = $location;
        this._localStorageService = localStorageService;
        this.userName = '';
        this.password = '';
        this._rootScope = $rootScope;

        this._rootScope.logged = false;
        this._rootScope.menus = [];
        this._rootScope.userName = '';
        this._rootScope.logoff = () => {
            if(this._localStorageService.isSupported) {
                this._localStorageService.remove('userName', 'sessionId');
                this._location.path('/');
            }
        };

        if(this._localStorageService.isSupported) {
            if(this._localStorageService.get('sessionId') !== null){
                this._rootScope.userName = this._localStorageService.get('userName');
                this._location.path('/home');
            }
        }
    }

    _clean(){
        this.userName = '';
        this.password = '';
    }

    login(){
        let _this = this;
        this._service.post(this.userName, this.password).then(function(data){
            if(data.loginSucceeded){
                if(_this._localStorageService.isSupported) {
                    _this._localStorageService.set('userName', _this.userName);
                    _this._localStorageService.set('sessionId', data.sessionId);
                    _this._rootScope.userName = _this.userName;
                    _this._rootScope.logged = true;
                    _this._location.path('/home');
                }
            }
            else{
                _this._clean();
            }
        });
    }
}

    LoginController.$inject = ['$location', '$rootScope', 'loginService', 'localStorageService'];

app
    .controller('loginController', LoginController)
    .service('loginService', LoginService);

export { LoginController };