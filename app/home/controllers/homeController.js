import app from 'app';
//import { LoginService } from "login/services/loginService";

class HomeController {
    constructor($location, localStorageService){
        this._location = $location;
        this._localStorageService = localStorageService;

        if(this._localStorageService.isSupported) {
            if(this._localStorageService.get('sessionId') === null){
                this._location.path('/');
            }
            else{
                this.userName = this._localStorageService.get('userName');
            }
        }

        this.menuItems = [
            {
                "text": "Total for sales man",
                "selected": false,
                "type": 'pie'
            },
            {
                "text": "Total sales per month",
                "selected": false,
                "type": 'bar'
            },
            {
                "text": "Top 5 sales orders",
                "selected": false,
                "type": 'orders'
            },
            {
                "text": "Top 5 sales men",
                "selected": false,
                "type": 'months'
            }
        ];
    }

    showChart(menu){
        alert('teste');
        alert(menu);
    }

    logoff(){
        if(this._localStorageService.isSupported) {
            this._localStorageService.remove('userName', 'sessionId');
            this._location.path('/');
        }
    }

}

HomeController.$inject = ['$location', 'localStorageService'];

app
    .controller('homeController', HomeController);
    //.service('loginService', LoginService);

export { HomeController };