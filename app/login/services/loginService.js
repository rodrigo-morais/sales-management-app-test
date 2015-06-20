import config from '../../config';

class LoginService {

    constructor($resource){
        this._config = config;
    }

    post(userName, password){
        
    }
}

LoginService.$inject = ['$resource'];

export { LoginService };