var map;

var infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: {
            lat: -33.86882,
            lng: 151.209296
        }
    });
    infoWindow = new google.maps.InfoWindow();
}

/* Active markers variable */

var activeMarkers = [];

/* Active markers function */

function addMarker(property) {
    var marker = new google.maps.Marker({
        position: property.location,
        map: map,
    });

    activeMarkers.push(marker);

    marker.addListener("click", function () {
        infoWindow.close();
        infoWindow.setContent(property.content);
        infoWindow.open(map, marker);
    });
}
/* Clear markers function */

function clearMarkers() {
    for (let i = 0; i < activeMarkers.length; i++) {
        activeMarkers[i].setMap(null);
    }
    activeMarkers = [];
}

/* Explore buttons function */

$(document).ready(function () {
    $("#attractions").on("click", function () {
        clearMarkers();
        showMarkers(attractionsMarkers);
    });
});

$(document).ready(function () {
    $("#barsclubs").on("click", function () {
        clearMarkers();
        showMarkers(barsclubsMarkers);
    });
});

$(document).ready(function () {
    $("#hotels").on("click", function () {
        clearMarkers();
        showMarkers(hotelsMarkers);
    });
});

$(document).ready(function () {
    $("#restaurants").on("click", function () {
        clearMarkers();
        showMarkers(restaurantsMarkers);
    });
});

/* Show markers loop */

function showMarkers(markers) {
    for (i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }
    map.setCenter({ lat: -33.86882, lng: 151.209296 });
}

/* Map markers */

var attractionsMarkers = [
    {
        location: { lat: -33.856543821752794, lng: 151.21527524045297 },
        content: "<h6>Sydney Opera House</h6>"
    },
    {
        location: { lat: -33.8520746192094, lng: 151.2107870981232 },
        content: "<h6>Sydney Harbour Bridge</h6>"
    },
    {
        location: { lat: -33.87084698630033, lng: 151.20909379812386 },
        content: "<h6>Sydney Tower Eye</h6>"
    }
];

var barsclubsMarkers = [
    {
        location: { lat: -33.87003959244973, lng: 151.2051437269588 },
        content: "<h6>Catina OK</h6>"
    },
    {
        location: { lat: -33.86832748834104, lng: 151.2048179134643 },
        content: "<h6>PS40</h6>"
    },
    {
        location: { lat: -33.86710113454278, lng: 151.19558052695868 },
        content: "<h6>Marquee Sydney</h6>"
    }
];

var hotelsMarkers = [
    {
        location: { lat: -33.868516113790704, lng: 151.22040862695886 },
        content: "<h6>Ovolo Woolloomooloo</h6>"
    },
    {
        location: { lat: -33.86532426380766, lng: 151.2051743711346 },
        content: "<h6>Little National Hotel Sydney</h6>"
    },
    {
        location: { lat: -33.872457090332645, lng: 151.19710524229967 },
        content: "<h6>Ovolo 1888 Darling Harbour</h6>"
    }
];

var restaurantsMarkers = [
    {
        location: { lat: -33.85722877121859, lng: 151.21035336928813 },
        content: "<h6>Quay</h6>"
    },
    {
        location: { lat: -33.886254831374224, lng: 151.22991487113518 },
        content: "<h6>Saint Peter</h6>"
    },
    {
        location: { lat: -33.88908454294458, lng: 151.1654055435762 },
        content: "<h6>Sixpenny</h6>"
    }
];