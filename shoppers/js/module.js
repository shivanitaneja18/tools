var app = angular.module("myapp",[]);
app.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
           });
        }
    }
}]);
//app.directive("fileread1", [function () {
//    return {
//        scope: {
//            fileread: "="
//        },
//        link: function (scope, element, attributes) {
//            element.bind("change", function (changeEvent) {
//                var reader = new FileReader();
//                reader.onload = function (loadEvent) {
//                    scope.$apply(function () {
//                        scope.fileread = loadEvent.target.result;
//                    });
//                }
//                reader.readAsDataURL(changeEvent.target.files[0]);
//           });
//        }
//    }
//}]);