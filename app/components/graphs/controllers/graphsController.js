var graphsController = ($scope, localStorageService, salesService) => {
    
    let refreshChart = (chart, data) => {
        chart.data = data;
        localStorageService.get('charts').filter(function(_chart){
            return _chart.service === chart.service;
        })[0].data = data;
    };

    $scope.refresh = (chart) => {
        let sessionId = '';

        if(localStorageService.isSupported) {
            sessionId = localStorageService.get('sessionId');
        }

        if(chart.service==='totalSalesMan'){
                salesService.getTotalSalesMan(sessionId).then(function(data){
                    refreshChart(chart, data);
                });
        }
        else if(chart.service==='totalSalesMonth'){
            salesService.getTotalSalesMonth(sessionId).then(function(data){
                refreshChart(chart, data);
            });
        }
        else if(chart.service==='top5SalesOrders'){
            salesService.getTop5SalesOrders(sessionId).then(function(data){
                refreshChart(chart, data.data);
            });
        }
        else if(chart.service==='top5SalesMen'){
            salesService.getTop5SalesMen(sessionId).then(function(data){
                refreshChart(chart, data.data);
            });
        }
    };

    $scope.close = (chart) => {
        chart.visible = false;
    };
};

graphsController.$inject = ['$scope', 'localStorageService', 'salesService'];

export default graphsController;