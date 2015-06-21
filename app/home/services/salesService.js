import config from '../../config';

class SalesService {

    constructor($q, $resource){
        this.resource = $resource;
        this.q = $q;
    }

    getTotalSalesMan(sessionId){
        return this._get(sessionId, 'salesmandata');
    }

    getTotalSalesMonth(sessionId){
        return this._get(sessionId, 'lastyeardata');
    }

    getTop5SalesOrders(sessionId){
        return this._get(sessionId, 'topsalesorders');
    }

    getTop5SalesMen(sessionId){
        return this._get(sessionId, 'topsalesmen');
    }

    _get(sessionId, serviceName){
        var service = this.resource(config.url + serviceName),
            deferred = this.q.defer();

        service.get(
            {
                sessionid: sessionId
            }
        )
            .$promise
            .then(function (data) {
                deferred.resolve(data);
            });

        return deferred.promise;
    }
}

SalesService.$inject = ['$q', '$resource'];

export { SalesService };