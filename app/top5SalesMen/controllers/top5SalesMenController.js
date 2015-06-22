import app from 'app';
import { SalesService } from "home/services/salesService";

class Top5SalesMen {
    constructor($location, $rootScope, $timeout, localStorageService, salesService){
        let sessionId = null,
            _this = this;

        this._location = $location;
        this._service = salesService;
        this._localStorageService = localStorageService;
        this._rootScope = $rootScope;
        if(!this._rootScope.logoff){
            this._rootScope.logoff = () => {
                if(this._localStorageService.isSupported) {
                    this._localStorageService.remove('userName', 'sessionId');
                    this._location.path('/');
                }
            };
        }

        this.pieConfig = {
            title: '',
            tooltips: true,
            labels: false,
            mouseover: function() {},
            mouseout: function() {},
            click: function() {},
            legend: {
                display: true,
                position: 'right'
            }
        };

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
                if(!this._rootScope.menus){
                    this._rootScope.menus = this._localStorageService.get('charts');
                    this._rootScope.menus.unshift({
                        "text": "Home",
                        "selected": false,
                        "visible": true,
                        "url": "/#home"
                    });
                }
                this._rootScope.logged = true;

                this.chart = this._localStorageService.get('charts')[3];
            }
        }

        this._rootScope.$on('addChartEffect', function(){
            $timeout(function(){
                $('.panel').draggable({
                    grid: [5,5],
                    handle: ".panel-heading"
                }).resizable({
                    grid: [5,5]
                });
            }, 1000);
        });

        this._rootScope.$watch(this.charts, function(newVal, oldVal){
            _this._rootScope.$broadcast('addChartEffect');
        }, true);
    }

    _refreshChart(data){
        let _this = this;
        this.chart.data = data;
        this._localStorageService.get('charts').filter(function(_chart){
            return _chart.service === _this.chart.service;
        })[0].data = data;
    }

    refresh(){
        let sessionId = '',
            _this = this;

        if(this._localStorageService.isSupported) {
            sessionId = this._localStorageService.get('sessionId');
        }

        this._service.getTop5SalesMen(sessionId).then(function(data){
            _this._refreshChart(data.data);
        });
    }

}

Top5SalesMen.$inject = ['$location', '$rootScope', '$timeout', 'localStorageService', 'salesService'];

app
    .controller('top5SalesMenController', Top5SalesMen)
    .service('salesService', SalesService);

export { Top5SalesMen };