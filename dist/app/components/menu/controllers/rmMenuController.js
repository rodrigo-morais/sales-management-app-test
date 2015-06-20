define(["exports", "module"], function (exports, module) {
    "use strict";

    var rmMenuController = function ($scope) {
        //$scope.menus = $scope.vm.menuItems;

        $scope.select = function (menu) {
            $scope.menus.forEach(function (_menu) {
                _menu.selected = false;
            });
            menu.selected = true;
            $scope.action(menu);
        };
    };

    rmMenuController.$inject = ["$scope"];

    module.exports = rmMenuController;
});