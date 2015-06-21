import app from 'app';

class TotalSalesManController {
    constructor($location, $rootScope, localStorageService){
        let sessionId = null;

        this._location = $location;
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
                this._rootScope.logged = true;

                this.chart = this._localStorageService.get('charts')[0];
            }
        }
    }

}

TotalSalesManController.$inject = ['$location', '$rootScope', 'localStorageService'];

app
    .controller('totalSalesManController', TotalSalesManController);

export { TotalSalesManController };