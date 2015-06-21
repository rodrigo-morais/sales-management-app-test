var salesListDirective = () => {
    

    let html = 'app/components/graphs/templates/salesList.html';

    return {
        restrict: 'E',
        templateUrl: html,
        replace: true,
        scope:{
            item: '='
        },
        link: function (scope, element, attrs, controller) {

            scope.isArray = angular.isArray;
            scope.isObject = (register) =>{
                return typeof register === 'object' && !angular.isArray(register);
            };
        }
    };
};

salesListDirective.$inject = [];

export default salesListDirective;