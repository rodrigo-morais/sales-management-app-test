import app from 'app';
import { LoginService } from "login/services/loginService";

class LoginController {
    constructor(loginService){
        this._service = loginService;
        this.userName = '';
        this.password = '';
    }

    _clean(){
        this.userName = '';
        this.password = '';
    }

    login(){
        this._service.post(this.userName, this.password);

        this._clean();
    }
}

LoginController.$inject = ['loginService'];

app
    .controller('loginController', LoginController)
    .service('loginService', LoginService);

export { LoginController };