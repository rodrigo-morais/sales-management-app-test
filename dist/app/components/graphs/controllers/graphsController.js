define(["exports", "module"], function (exports, module) {
    "use strict";

    var graphsController = function ($scope, localStorageService, salesService) {

        $scope.refresh = function (chart) {
            var sessionId = "";

            if (localStorageService.isSupported) {
                sessionId = localStorageService.get("sessionId");
            }

            if (chart.service === "totalSalesMan") {
                salesService.getTotalSalesMan(sessionId).then(function (data) {
                    chart.data = data.data;
                });
            } else if (chart.service === "totalSalesMonth") {
                salesService.getTotalSalesMonth(sessionId).then(function (data) {
                    chart.data = data.data;
                });
            } else if (chart.service === "top5SalesOrders") {
                salesService.getTop5SalesOrders(sessionId).then(function (data) {
                    chart.data = data.data;
                });
            } else if (chart.service === "top5SalesMen") {
                salesService.getTop5SalesMen(sessionId).then(function (data) {
                    chart.data = data.data;
                });
            }
        };

        $scope.close = function (chart) {
            chart.visible = false;
        };
    };

    graphsController.$inject = ["$scope", "localStorageService", "salesService"];

    module.exports = graphsController;
});