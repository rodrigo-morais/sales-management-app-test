import config from '../../config';

class LoginService {

    constructor($q, $resource){
        this.service = $resource(config.url + 'login');
        this.q = $q;
    }

    post(userName, password){
        var deferred = this.q.defer();

        this.service.get(
            {
                username: userName,
                password: password
            }
        )
            .$promise
            .then(function (data) {
                deferred.resolve(data);
            });

        return deferred.promise;
    }
}

LoginService.$inject = ['$q', '$resource'];

export { LoginService };