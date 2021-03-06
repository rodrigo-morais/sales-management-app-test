define(["exports", "module"], function (exports, module) {
    "use strict";

    var footerDirective = function () {

        var html = "app/components/footer/templates/footer.html";

        return {
            restrict: "E",
            templateUrl: html,
            css: "app/components/footer/css/footer.css",
            replace: true,
            link: function link(scope, element, attrs, controller) {

                $("[data-modal]").on("click", function () {
                    $("#warningModal .modal-title").text($(this).data("title"));
                    $("#warningModal .modal-body").text($(this).data("body"));
                    $("#warningModal").modal("show");
                });

                $(".support").on("click", function () {
                    $("#supportModal").modal("show");
                });
            }
        };
    };

    footerDirective.$inject = [];

    module.exports = footerDirective;
});