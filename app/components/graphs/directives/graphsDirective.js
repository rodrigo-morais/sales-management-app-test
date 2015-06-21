import graphsController from "components/graphs/controllers/graphsController";

var graphsDirective = ($timeout) => {
    

    let html = 'app/components/graphs/templates/graphs.html';

    return {
        restrict: 'E',
        templateUrl: html,
        css: 'app/components/graphs/css/graphs.css',
        replace: true,
        scope:{
            charts: '=',
            maxHeight: '@',
            maxWidth: '@'
        },
        controller: graphsController,
        link: function (scope, element, attrs, controller) {

            scope.$on('addChartEffect', function(){
                $timeout(function(){
                    $('.panel').draggable({
                        grid: [5,5],
                        handle: ".panel-heading"
                    }).resizable({
                        grid: [5,5]
                    });
                }, 1000);
            });

            scope.$watch(scope.charts, function(newVal, oldVal){
                scope.$broadcast('addChartEffect');
            }, true);
            
        }
    };
};

export default graphsDirective;