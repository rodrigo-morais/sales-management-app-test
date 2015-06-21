define(["exports", "module"], function (exports, module) {
    "use strict";

    var salesListDirective = function () {

        var html = "app/components/graphs/templates/salesList.html";

        return {
            restrict: "E",
            templateUrl: html,
            replace: true,
            scope: {
                item: "="
            },
            link: function link(scope, element, attrs, controller) {

                scope.isArray = angular.isArray;
                scope.isObject = function (register) {
                    return typeof register === "object" && !angular.isArray(register);
                };
            }
        };
    };

    salesListDirective.$inject = [];

    module.exports = salesListDirective;
});