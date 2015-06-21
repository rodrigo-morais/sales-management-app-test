var rmMenuController = ($scope) => {

    $scope.select = (menu) => {
        $scope.menus.forEach(function(_menu){
            _menu.selected = false;
        });
        menu.selected = true;
        $scope.action(menu);
    };
};

rmMenuController.$inject = ['$scope'];

export default rmMenuController;