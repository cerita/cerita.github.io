//Google Maps
function initMap() {
    var uluru = {
        lat: 30.267478,
        lng: -97.743733
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru,
        gestureHandling: 'cooperative',
        scrollwheel: false

    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: "Hello from Austin!"
    });
}

console.log("working js");


//TypeWriter

window.onload = function() {
    // Typewriter JS
    var yoSoy = document.getElementById('yoSoy');

    var typewriter = new Typewriter(yoSoy, {
        loop: true
    });

    typewriter.typeString('Web Developer')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Front End Web Developer')
        .pauseFor(2500)
        .deleteAll()
        .typeString('UI Developer')
        .start();
}