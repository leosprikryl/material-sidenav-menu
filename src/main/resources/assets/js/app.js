var module = angular.module('App', ['ngMaterial', 'ngMenuSidenav']);

module.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.index = 0;

    console.log('create controller');

    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.ola = function () {
        window.alert("ola");
    };

    $scope.create = function () {
        console.log($scope.index++);
    };
}]);