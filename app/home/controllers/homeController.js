import app from 'app';
import { SalesService } from "home/services/salesService";

class HomeController {
    constructor($location, localStorageService, salesService){
        let sessionId = null;

        this._location = $location;
        this._localStorageService = localStorageService;
        this._service = salesService;

        if(this._localStorageService.isSupported) {
            if(this._localStorageService.get('sessionId') === null){
                this._location.path('/');
            }
            else{
                this.userName = this._localStorageService.get('userName');
                sessionId = this._localStorageService.get('sessionId');
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
                    "data": data.data,
                    "visible": true
                }
            );
        });

        this._service.getTotalSalesMonth(sessionId).then(function(data){
            _this.charts.push(
                {
                    "text": "Total sales per month",
                    "selected": false,
                    "type": 'bar',
                    "service": 'totalSalesMonth',
                    "data": data.data,
                    "visible": true
                }
            );
        });

        this._service.getTop5SalesOrders(sessionId).then(function(data){
            _this.charts.push(
                {
                    "text": "Top 5 sales orders",
                    "selected": false,
                    "type": 'list',
                    "service": 'top5SalesOrders',
                    "data": data.data,
                    "visible": true
                }
            );
        });

        this._service.getTop5SalesMen(sessionId).then(function(data){
            _this.charts.push(
                {
                    "text": "Top 5 sales men",
                    "selected": false,
                    "type": 'list',
                    "service": 'top5SalesMen',
                    "data": data.data,
                    "visible": true
                }
            );
        });
    }

    showChart(menu){
        menu.visible = true;
    }

    logoff(){
        if(this._localStorageService.isSupported) {
            this._localStorageService.remove('userName', 'sessionId');
            this._location.path('/');
        }
    }

}

HomeController.$inject = ['$location', 'localStorageService', 'salesService'];

app
    .controller('homeController', HomeController)
    .service('salesService', SalesService);

export { HomeController };