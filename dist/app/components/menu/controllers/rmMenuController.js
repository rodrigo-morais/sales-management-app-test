define(["exports", "module"], function (exports, module) {
    "use strict";

    var rmMenuController = function ($scope, $rootScope) {

        $scope.select = function (menu) {
            $scope.menus.forEach(function (_menu) {
                _menu.selected = false;
            });
            menu.selected = true;
            $scope.action(menu);
            $rootScope.$broadcast("addChartEffect");
        };
    };

    rmMenuController.$inject = ["$scope", "$rootScope"];

    module.exports = rmMenuController;
});