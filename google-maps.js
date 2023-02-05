function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -1.475289, lng: 36.96201};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Kitengela, Kenya' // Title Location
    });
}