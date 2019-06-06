
// Google Map
function initMap() {
    // Map options
    let options = {
        zoom: 8,
        center: {lat: 48.55, lng: -3.15}
    }

    // New map
    let map = new google.maps.Map(document.querySelector('.map'), options);

    // Add marker
    let marker = new google.maps.Marker({
        position: {lat: 48.55, lng: -3.15}
    });
}

