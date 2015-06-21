define(["exports", "module", "components/graphs/controllers/graphsController"], function (exports, module, _componentsGraphsControllersGraphsController) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var graphsController = _interopRequire(_componentsGraphsControllersGraphsController);

    var graphsDirective = function () {

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
            link: function link(scope, element, attrs, controller) {}
        };
    };

    graphsDirective.$inject = [];

    module.exports = graphsDirective;
});