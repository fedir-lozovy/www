function reportOnSSEvent() {
    navigator.geolocation.getCurrentPosition(function (position) {
            // just to show how to access latitute and longitude
            var location = [position.coords.latitude, position.coords.longitude];
            reportStatus.innerHTML = 'Ваше розташування :' + position.coords.latitude + ' ' + position.coords.longitude;

        },
        function (error) {
            // error getting GPS coordinates
            reportStatus.innerHTML =('code: ' + error.code + ' with message: ' + error.message + '\n');
        },
        {enableHighAccuracy: true, maximumAge: 3000, timeout: 5000});
}