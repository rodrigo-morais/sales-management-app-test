import app from 'app';
import { LoginService } from "login/services/loginService";

class LoginController {
    constructor($location, loginService, localStorageService){
        this._service = loginService;
        this._location = $location;
        this._localStorageService = localStorageService;
        this.userName = '';
        this.password = '';

        if(this._localStorageService.isSupported) {
            if(this._localStorageService.get('sessionId') !== null){
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
                    _this._location.path('/home');
                }
            }
            else{
                _this._clean();
            }
        });
    }
}

LoginController.$inject = ['$location', 'loginService', 'localStorageService'];

app
    .controller('loginController', LoginController)
    .service('loginService', LoginService);

export { LoginController };