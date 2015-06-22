define(["exports", "module", "components/graphs/controllers/graphsController"], function (exports, module, _componentsGraphsControllersGraphsController) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var graphsController = _interopRequire(_componentsGraphsControllersGraphsController);

    var graphsDirective = function ($timeout) {

        var html = "app/components/graphs/templates/graphs.html";

        return {
            restrict: "E",
            templateUrl: html,
            css: "app/components/graphs/css/graphs.css",
            replace: true,
            scope: {
                charts: "=",
                maxHeight: "@",
                maxWidth: "@"
            },
            controller: graphsController,
            link: function link(scope, element, attrs, controller) {
                scope.pieConfig = {
                    title: "",
                    tooltips: true,
                    labels: false,
                    mouseover: function mouseover() {},
                    mouseout: function mouseout() {},
                    click: function click() {},
                    legend: {
                        display: true,
                        position: "right"
                    }
                };

                scope.barConfig = {
                    title: "",
                    tooltips: true,
                    labels: false,
                    mouseover: function mouseover() {},
                    mouseout: function mouseout() {},
                    click: function click() {},
                    legend: {
                        display: false,
                        position: "right"
                    }
                };

                scope.$on("addChartEffect", function () {
                    $timeout(function () {
                        $(".panel").draggable({
                            grid: [5, 5],
                            handle: ".panel-heading"
                        }).resizable({
                            grid: [5, 5]
                        });
                    }, 1000);
                });

                scope.$watch(scope.charts, function (newVal, oldVal) {
                    scope.$broadcast("addChartEffect");
                }, true);
            }
        };
    };

    module.exports = graphsDirective;
});