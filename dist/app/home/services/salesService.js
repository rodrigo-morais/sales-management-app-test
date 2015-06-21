define(["exports", "../../config"], function (exports, _config) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var config = _interopRequire(_config);

    var SalesService = (function () {
        function SalesService($q, $resource) {
            _classCallCheck(this, SalesService);

            this.resource = $resource;
            this.q = $q;
        }

        _createClass(SalesService, {
            getTotalSalesMan: {
                value: function getTotalSalesMan(sessionId) {
                    return this._get(sessionId, "salesmandata");
                }
            },
            getTotalSalesMonth: {
                value: function getTotalSalesMonth(sessionId) {
                    return this._get(sessionId, "lastyeardata");
                }
            },
            getTop5SalesOrders: {
                value: function getTop5SalesOrders(sessionId) {
                    return this._get(sessionId, "topsalesorders");
                }
            },
            getTop5SalesMen: {
                value: function getTop5SalesMen(sessionId) {
                    return this._get(sessionId, "topsalesmen");
                }
            },
            _get: {
                value: function _get(sessionId, serviceName) {
                    var service = this.resource(config.url + serviceName),
                        deferred = this.q.defer();

                    service.get({
                        sessionid: sessionId
                    }).$promise.then(function (data) {
                        deferred.resolve(data);
                    });

                    return deferred.promise;
                }
            }
        });

        return SalesService;
    })();

    SalesService.$inject = ["$q", "$resource"];

    exports.SalesService = SalesService;
});