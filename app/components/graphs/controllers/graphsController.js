var graphsController = ($scope, localStorageService, salesService) => {

    $scope.refresh = (chart) => {
        let sessionId = '';

        if(localStorageService.isSupported) {
            sessionId = localStorageService.get('sessionId');
        }

        if(chart.service==='totalSalesMan'){
                salesService.getTotalSalesMan(sessionId).then(function(data){
                    chart.data = data;
                });
        }
        else if(chart.service==='totalSalesMonth'){
            salesService.getTotalSalesMonth(sessionId).then(function(data){
                chart.data = data;
            });
        }
        else if(chart.service==='top5SalesOrders'){
            salesService.getTop5SalesOrders(sessionId).then(function(data){
                chart.data = data.data;
            });
        }
        else if(chart.service==='top5SalesMen'){
            salesService.getTop5SalesMen(sessionId).then(function(data){
                chart.data = data.data;
            });
        }
    };

    $scope.close = (chart) => {
        chart.visible = false;
    };
};

graphsController.$inject = ['$scope', 'localStorageService', 'salesService'];

export default graphsController;