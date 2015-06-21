var graphsController = ($scope) => {

    $scope.close = (chart) => {
        chart.visible = false;    
    };
};

graphsController.$inject = ['$scope'];

export default graphsController;