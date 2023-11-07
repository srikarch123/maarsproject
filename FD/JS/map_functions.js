let map, marker, markerA, markerB;
let marker_region = [];
let points = [];
let currentIndex = 0;
let regionIndex = 0;
let i = 0;
let lastCoordinate;

var final_A = { lat: null, lon: null };
var final_B = { lat: null, lon: null };



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
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
        "marker",);

    const mapOptions = {
        zoom: 18,
        center: { lat: 40.832260, lng: -96.672110 },
        mapTypeId: "satellite",
        disableDefaultUI: true,
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    i = points.length;
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
        points = data.coordinates;}
    else {
        points = lastCoordinate;}

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

