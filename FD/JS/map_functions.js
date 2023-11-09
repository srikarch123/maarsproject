let map, marker, markerA, markerB;
let marker_region = [];
let points = [];
let currentIndex = 0;
let regionIndex = 0;
let i = 0;
let lastCoordinate;

var final_A = { lat: null, lon: null };
var final_B = { lat: null, lon: null };

const locations = [
    { lat: 40.83271126258302, lng: -96.66937850445322 },
    { lat: 40.83142826689134, lng: -96.66883800212149 },
];


async function fetchCoordinates() {
    try {
        const response = await fetch('http://127.0.0.1:4756/get_coordinates');
        const data = await response.json();
        console.log("Recieved data coordinates is: ", data.coordinates);
        console.log("Recieved data is: ", data);
        points = data.coordinates;
        console.log("points 1 is: ", points);
        initMap();

        return data.coordinates;

    } catch (error) {
        console.error('Error fetching JSON:', error);
        return null;
    }
}

fetchCoordinates();

async function initMap() {


    const mapOptions = {
        zoom: 19,
        center: { lat: 40.832066028334324, lng: -96.66884663548176 },
        mapTypeId: "satellite",
        disableDefaultUI: true,
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
    });

    const spl_contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Splinter Laboratory</br></h1>' +
        '<div id="bodyContent">' +
        "<p><b>2000N 35th St</b></br>East Campus, UNL</p>" +
        '<p>Lincoln, NE </p>' +
        "</div>" +
        "</div>";

    const chase_contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Chase Hall</br></h1>' +
        '<div id="bodyContent">' +
        "<p><b>3605 Fair St</b></br>East Campus, UNL</p>" +
        '<p>Lincoln, NE </p>' +
        "</div>" +
        "</div>";

    const spl_infowindow = new google.maps.InfoWindow({
        content: spl_contentString,
        ariaLabel: "Splinter",
    });

    const chase_infowindow = new google.maps.InfoWindow({
        content: chase_contentString,
        ariaLabel: "Splinter",
    });

    const splinter = new google.maps.Marker({
        position: { lat: 40.83271126258302, lng: -96.66937850445322 },
        //icon: icons[features[i].type].icon,
        map: map,
    });
    
    const chase = new google.maps.Marker({
        position: { lat: 40.83142826689134, lng: -96.66883800212149 },
        //icon: icons[features[i].type].icon,
        map: map,
    });

    splinter.addListener("click", () => {
        spl_infowindow.open({
          anchor: splinter,
          map,
        });
    });

    chase.addListener("click", () => {
        chase_infowindow.open({
          anchor: chase,
          map,
        });
    });
/*
    const labels = "SC";
    const markers = locations.map((position, i) => {
        const label = labels[i % labels.length];
        const pinGlyph = new google.maps.marker.PinElement({
            glyph: label,
            glyphColor: "white",
        });
        const marker = new google.maps.marker.AdvancedMarkerElement({
            position,
            content: pinGlyph.element,
        });

        // markers can only be keyboard focusable when they have click listeners
        // open info window when marker is clicked
        marker.addListener("click", () => {
            infoWindow.setContent(position.lat + ", " + position.lng);
            infoWindow.open(map, marker);
        });
        return marker;
    });


    // Add a marker clusterer to manage the markers.
    new MarkerClusterer({ markers, map });
*/
    fieldboundary();
    generatePath();
    updateMarker();
}

async function updateMarker() {


    const response = await fetch('http://127.0.0.1:4756/get_single_coordinate');
    const data = await response.json();
    console.log("Recieved data coordinates is: ", data.coordinates);
    console.log("Recieved data is: ", data);
    if (response.ok) {
        points = data.coordinates;
    }
    else {
        points = lastCoordinate;
    }

    console.log("points 1 is: ", points);
    const currentPoint = points[0];
    // console.log("CurrentPoint is:",i,": ",currentPoint);
    const newLocation = new google.maps.LatLng(currentPoint.lat, currentPoint.lon);
    console.log("newLocation is: ", newLocation);

    if (!marker) {
        marker = new google.maps.Marker({
            position: newLocation,
            map: map,
            title: "Marker",
            icon: {
                url: 'images/tractor.png',
                scaledSize: new google.maps.Size(35, 25),
            }
        });
    } else {
        marker.setPosition(newLocation);
    }
    //map.setCenter(newLocation);
    infoWindow = new google.maps.InfoWindow({
        content: '<div style="color: blue;">Details</div> <h4>Velocity: </h4> <h4>Altitude:' + currentPoint.height,
        //content:'height : '+ currentPoint.height+ '\n velocity : ' , // You can customize the content here
    });

    // Event listeners for hovering over the marker
    marker.addListener('mouseover', () => {
        infoWindow.open(map, marker);
    });

    marker.addListener('mouseout', () => {
        infoWindow.close();
    });
    setTimeout(updateMarker, 100);
    lastCoordinate = points
}

function get_region(RMF) {
    console.log("inside get_region: ");
    console.log("RMF value is: ", RMF);

    map.setCenter(RMF);
    map.setZoom(18);
}

