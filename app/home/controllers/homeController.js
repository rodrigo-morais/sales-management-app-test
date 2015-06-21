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

        this.charts = [
            {
                "text": "Total for sales man",
                "selected": false,
                "type": 'pie',
                "data": [],
                "visible": true
            },
            {
                "text": "Total sales per month",
                "selected": false,
                "type": 'bar',
                "data": [],
                "visible": true
            },
            {
                "text": "Top 5 sales orders",
                "selected": false,
                "type": 'list',
                "data": [],
                "visible": true
            },
            {
                "text": "Top 5 sales men",
                "selected": false,
                "data": [],
                "visible": true
            }
        ];
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

HomeController.$inject = ['$location', 'localStorageService'];

app
    .controller('homeController', HomeController);
    //.service('loginService', LoginService);

export { HomeController };