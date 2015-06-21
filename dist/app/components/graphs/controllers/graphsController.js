define(["exports", "module"], function (exports, module) {
    "use strict";

    var graphsController = function ($scope) {

        $scope.close = function (chart) {
            chart.visible = false;
        };
    };

    graphsController.$inject = ["$scope"];

    module.exports = graphsController;
});