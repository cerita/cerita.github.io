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

// console.log("working js");


//Make navbar solid on scroll
window.onscroll = function () {
  var navbar = document.getElementById("nav-bar");
  var winHeight = window.innerHeight;
  var scrollPos = window.scrollY;
  if(scrollPos > (winHeight - 48)) {
    navbar.classList.add("solid");
  } else {
    navbar.classList.remove("solid");
  }
};


window.onload = function() {

    // Typewriter JS
    var yoSoy = document.getElementById('yoSoy');

    var typewriter = new Typewriter(yoSoy, {
        loop: false
    });

    typewriter.typeString('Front End Developer')
        // .pauseFor(2500)
        // .deleteAll()
        // .typeString('')
        .start();
}
