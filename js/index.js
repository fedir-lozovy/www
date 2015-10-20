
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent();
    },
    // Update DOM on a Received Event
    receivedEvent: init
};

app.initialize();

var Salamandra = angular.module('Salamandra', [
    'ngRoute',
    'salamandraControllers'
]);
Salamandra.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/main', {
                templateUrl: 'templates/MainPage.html',
                controller: 'MainPage'
            }).
            when('/InsuranceEventReport', {
                templateUrl: 'templates/InsuranceEventReport.html',
                controller: 'InsuranceEventReport'
            }).
            when('/eventsCalendar', {
                templateUrl: 'templates/eventsCalendar.html',
                controller: 'eventsCalendar'
            }).
            when('/photosView', {
                templateUrl: 'templates/photosView.html',
                controller: 'photosView'
            }).
            otherwise({
                redirectTo: '/main'
            });
    }]);
function init(){

}