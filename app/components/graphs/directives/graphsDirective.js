import graphsController from "components/graphs/controllers/graphsController";

var graphsDirective = () => {
    

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

            
        }
    };
};

graphsDirective.$inject = [];

export default graphsDirective;