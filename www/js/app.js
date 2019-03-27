var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');

        window.addEventListener("batterystatus", onBatteryStatus, false);

        function alertDismissed() {
            console.log('information submitted')
        }

        document.getElementById('button-submit-form').addEventListener('click', () => {
            navigator.notification.alert(
                'Thank you for submitting your information!', // message
                alertDismissed, // callback
                'Information Submitted', // title
                'Done' // buttonName
            );
        })

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:none;');

        //Event Called
        //console.log('Received Event: ' + id);

    }
};

function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    $('.battery-status').text("Battery Level: " + status.level + "%");
}