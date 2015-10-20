var salamandraControllers = angular.module('salamandraControllers', []);

salamandraControllers.controller('MainPage', ['$scope', '$http',
    function ($scope, $http) {
        console.log('MainPage');
      /*  $http.get('data/phones.json').success(function(data) {
            $scope.phones = data;
        });

        $scope.orderProp = 'age';*/
    }]);

salamandraControllers.controller('InsuranceEventReport', ['$scope', '$routeParams',
    function($scope, $routeParams) {

        console.log('InsuranceEventReport', document.getElementById('reportEvent'));
        document.getElementById('reportEvent')
            .removeEventListener('click');
        document.getElementById('reportEvent')
            .addEventListener('click',reportOnSSEvent);
        //$scope.phoneId = $routeParams.phoneId;
    }]);
salamandraControllers.controller('eventsCalendar', ['$scope', '$routeParams',
    function($scope, $routeParams) {

        console.log('eventsCalendar');
        //$scope.phoneId = $routeParams.phoneId;
    }]);
salamandraControllers.controller('photosView', ['$scope', '$routeParams',
    function($scope, $routeParams) {

        console.log('photosView');
        //$scope.phoneId = $routeParams.phoneId;
    }]);