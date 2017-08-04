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
