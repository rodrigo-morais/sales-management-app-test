import app from 'app';
import { SalesService } from "home/services/salesService";

class HomeController {
    constructor($location, $rootScope, localStorageService, salesService){
        let sessionId = null;

        this._location = $location;
        this._localStorageService = localStorageService;
        this._service = salesService;
        this._rootScope = $rootScope;
        if(!this._rootScope.logoff){
            this._rootScope.logoff = () => {
                if(this._localStorageService.isSupported) {
                    this._localStorageService.remove('userName', 'sessionId');
                    this._location.path('/');
                }
            };
        }

        if(this._localStorageService.isSupported) {
            if(this._localStorageService.get('sessionId') === null){
                this._rootScope.logged = false;
                this._rootScope.menus = [];
                this._location.path('/');
            }
            else{
                this.userName = this._localStorageService.get('userName');
                sessionId = this._localStorageService.get('sessionId');
                this._rootScope.userName = this.userName;
                this._rootScope.logged = true;
            }
        }

        this.charts = [];
        var _this = this;
        this._service.getTotalSalesMan(sessionId).then(function(data){
            _this.charts.push(
                {
                    "text": "Total for sales man",
                    "selected": false,
                    "type": 'pie',
                    "service": 'totalSalesMan',
                    "data": data,
                    "visible": true,
                    "url": "/#totalSalesMan"
                }
            );
            _this._service.getTotalSalesMonth(sessionId).then(function(data){
                _this.charts.push(
                    {
                        "text": "Total sales per month",
                        "selected": false,
                        "type": 'bar',
                        "service": 'totalSalesMonth',
                        "data": data,
                        "visible": true,
                        "url": "/#totalSalesMonth"
                    }
                );
                _this._service.getTop5SalesOrders(sessionId).then(function(data){
                    _this.charts.push(
                        {
                            "text": "Top 5 sales orders",
                            "selected": false,
                            "type": 'list',
                            "service": 'top5SalesOrders',
                            "data": data.data,
                            "visible": true,
                            "url": "/#total5SalesOrders"
                        }
                    );
                    _this._service.getTop5SalesMen(sessionId).then(function(data){
                        _this.charts.push(
                            {
                                "text": "Top 5 sales men",
                                "selected": false,
                                "type": 'list',
                                "service": 'top5SalesMen',
                                "data": data.data,
                                "visible": true,
                                "url": "/#top5SalesMen"
                            }
                        );
                        _this._rootScope.menus = JSON.parse(JSON.stringify(_this.charts));
                        _this._rootScope.menus.unshift({
                            "text": "Home",
                            "selected": true,
                            "visible": true,
                            "url": "/#home"
                        });
                        _this._localStorageService.set('charts', _this.charts);
                    });
                });
            });
        });
    }

    showChart(menu){
        menu.visible = true;
    }

}

HomeController.$inject = ['$location', '$rootScope', 'localStorageService', 'salesService'];

app
    .controller('homeController', HomeController)
    .service('salesService', SalesService);

export { HomeController };