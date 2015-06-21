var rmMenuController = ($scope, $rootScope) => {

    $scope.select = (menu) => {
        $scope.menus.forEach(function(_menu){
            _menu.selected = false;
        });
        menu.selected = true;
        $scope.action(menu);
        $rootScope.$broadcast('addChartEffect');
    };
};

rmMenuController.$inject = ['$scope', '$rootScope'];

export default rmMenuController;