

google.charts.load('current', { 'packages': ['calendar'] });
google.charts.setOnLoadCallback(drawChart);
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

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
        '<div class="info_container">'+
        '<div class="content_info">' +
            '<h1 id="firstHeading" class="firstHeading">Splinter Laboratory</br></h1>' +
            '<div id="bodyContent">' +
                "<p></br><b>2000N 35th St</b></br>East Campus, UNL</p>" +
                '<p></br>Lincoln, NE </p>' +
                '<a href="https://cehs.unl.edu/tmfd/facilities/splinter-laboratory/">visit Splinter Lab</a>'+
            "</div>" +
        "</div>"+
        '<div class="images">'+
            '<img src="images/splinter-1.jpg"/>'+
        "</div>"+
        "</div>";
    const chase_contentString =
        '<div class="info_container">'+
        '<div class="content_info">' +
            '<h1 id="firstHeading" class="firstHeading">Chase Hall</br></h1>' +
            '<div id="bodyContent">' +
                "<p></br><b>3605 Fair St</b></br>East Campus, UNL</p>" +
                '<p></br>Lincoln, NE </p>' +
                '<a href="https://bse.unl.edu/contact-us">visit Chase Hall</a>'+
            "</div>" +
        "</div>"+
        '<div class="images">'+
            '<img src="images/Chase-1.jpeg"/>'+
        "</div>"+
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

function drawChart() {
       var dataTable = new google.visualization.DataTable();
       dataTable.addColumn({ type: 'date', id: 'Date' });
       dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
       dataTable.addRows([
        [ new Date(	2023, 	0	,	1	),	61	],
        [ new Date(	2023, 	0	,	2	),	78	],
        [ new Date(	2023, 	0	,	3	),	64	],
        [ new Date(	2023, 	0	,	4	),	2	],
        [ new Date(	2023, 	0	,	5	),	90	],
        [ new Date(	2023, 	0	,	6	),	26	],
        [ new Date(	2023, 	0	,	7	),	19	],
        [ new Date(	2023, 	0	,	8	),	87	],
        [ new Date(	2023, 	0	,	9	),	49	],
        [ new Date(	2023, 	0	,	10	),	77	],
        [ new Date(	2023, 	0	,	11	),	79	],
        [ new Date(	2023, 	0	,	12	),	24	],
        [ new Date(	2023, 	0	,	13	),	95	],
        [ new Date(	2023, 	0	,	14	),	73	],
        [ new Date(	2023, 	0	,	15	),	12	],
        [ new Date(	2023, 	0	,	16	),	33	],
        [ new Date(	2023, 	0	,	17	),	25	],
        [ new Date(	2023, 	0	,	18	),	4	],
        [ new Date(	2023, 	0	,	19	),	64	],
        [ new Date(	2023, 	0	,	20	),	72	],
        [ new Date(	2023, 	0	,	21	),	15	],
        [ new Date(	2023, 	0	,	22	),	4	],
        [ new Date(	2023, 	0	,	23	),	1	],
        [ new Date(	2023, 	0	,	24	),	29	],
        [ new Date(	2023, 	0	,	25	),	73	],
        [ new Date(	2023, 	0	,	26	),	95	],
        [ new Date(	2023, 	0	,	27	),	6	],
        [ new Date(	2023, 	0	,	28	),	91	],
        [ new Date(	2023, 	0	,	29	),	11	],
        [ new Date(	2023, 	0	,	30	),	19	],
        [ new Date(	2023, 	0	,	31	),	40	],     
        [ new Date(	2023, 	1	,	1	),	72	],
        [ new Date(	2023, 	1	,	2	),	53	],
        [ new Date(	2023, 	1	,	3	),	64	],
        [ new Date(	2023, 	1	,	4	),	79	],
        [ new Date(	2023, 	1	,	5	),	85	],
        [ new Date(	2023, 	1	,	6	),	95	],
        [ new Date(	2023, 	1	,	7	),	49	],
        [ new Date(	2023, 	1	,	8	),	17	],
        [ new Date(	2023, 	1	,	9	),	58	],
        [ new Date(	2023, 	1	,	10	),	90	],
        [ new Date(	2023, 	1	,	11	),	74	],
        [ new Date(	2023, 	1	,	12	),	70	],
        [ new Date(	2023, 	1	,	13	),	25	],
        [ new Date(	2023, 	1	,	14	),	74	],
        [ new Date(	2023, 	1	,	15	),	93	],
        [ new Date(	2023, 	1	,	16	),	75	],
        [ new Date(	2023, 	1	,	17	),	54	],
        [ new Date(	2023, 	1	,	18	),	13	],
        [ new Date(	2023, 	1	,	19	),	71	],
        [ new Date(	2023, 	1	,	20	),	32	],
        [ new Date(	2023, 	1	,	21	),	16	],
        [ new Date(	2023, 	1	,	22	),	8	],
        [ new Date(	2023, 	1	,	23	),	81	],
        [ new Date(	2023, 	1	,	24	),	8	],
        [ new Date(	2023, 	1	,	25	),	22	],
        [ new Date(	2023, 	1	,	26	),	92	],
        [ new Date(	2023, 	1	,	27	),	32	],
        [ new Date(	2023, 	1	,	28	),	60	],
        [ new Date(	2023, 	1	,	29	),	88	],
        [ new Date(	2023, 	2	,	1	),	31	],
        [ new Date(	2023, 	2	,	2	),	1	],
        [ new Date(	2023, 	2	,	3	),	55	],
        [ new Date(	2023, 	2	,	4	),	77	],
        [ new Date(	2023, 	2	,	5	),	20	],
        [ new Date(	2023, 	2	,	6	),	57	],
        [ new Date(	2023, 	2	,	7	),	59	],
        [ new Date(	2023, 	2	,	8	),	72	],
        [ new Date(	2023, 	2	,	9	),	63	],
        [ new Date(	2023, 	2	,	10	),	24	],
        [ new Date(	2023, 	2	,	11	),	19	],
        [ new Date(	2023, 	2	,	12	),	58	],
        [ new Date(	2023, 	2	,	13	),	80	],
        [ new Date(	2023, 	2	,	14	),	15	],
        [ new Date(	2023, 	2	,	15	),	48	],
        [ new Date(	2023, 	2	,	16	),	91	],
        [ new Date(	2023, 	2	,	17	),	13	],
        [ new Date(	2023, 	2	,	18	),	90	],
        [ new Date(	2023, 	2	,	19	),	33	],
        [ new Date(	2023, 	2	,	20	),	87	],
        [ new Date(	2023, 	2	,	21	),	17	],
        [ new Date(	2023, 	2	,	22	),	67	],
        [ new Date(	2023, 	2	,	23	),	95	],
        [ new Date(	2023, 	2	,	24	),	27	],
        [ new Date(	2023, 	2	,	25	),	98	],
        [ new Date(	2023, 	2	,	26	),	64	],
        [ new Date(	2023, 	2	,	27	),	51	],
        [ new Date(	2023, 	2	,	28	),	100	],
        [ new Date(	2023, 	2	,	29	),	25	],
        [ new Date(	2023, 	3	,	1	),	48	],
        [ new Date(	2023, 	3	,	2	),	77	],
        [ new Date(	2023, 	3	,	3	),	10	],
        [ new Date(	2023, 	3	,	4	),	88	],
        [ new Date(	2023, 	3	,	5	),	92	],
        [ new Date(	2023, 	3	,	6	),	95	],
        [ new Date(	2023, 	3	,	7	),	93	],
        [ new Date(	2023, 	3	,	8	),	41	],
        [ new Date(	2023, 	3	,	9	),	71	],
        [ new Date(	2023, 	3	,	10	),	97	],
        [ new Date(	2023, 	3	,	11	),	63	],
        [ new Date(	2023, 	3	,	12	),	74	],
        [ new Date(	2023, 	3	,	13	),	77	],
        [ new Date(	2023, 	3	,	14	),	92	],
        [ new Date(	2023, 	3	,	15	),	6	],
        [ new Date(	2023, 	3	,	16	),	95	],
        [ new Date(	2023, 	3	,	17	),	43	],
        [ new Date(	2023, 	3	,	18	),	14	],
        [ new Date(	2023, 	3	,	19	),	13	],
        [ new Date(	2023, 	3	,	20	),	5	],
        [ new Date(	2023, 	3	,	21	),	56	],
        [ new Date(	2023, 	3	,	22	),	8	],
        [ new Date(	2023, 	3	,	23	),	42	],
        [ new Date(	2023, 	3	,	24	),	79	],
        [ new Date(	2023, 	3	,	25	),	57	],
        [ new Date(	2023, 	3	,	26	),	2	],
        [ new Date(	2023, 	3	,	27	),	26	],
        [ new Date(	2023, 	3	,	28	),	96	],
        [ new Date(	2023, 	3	,	29	),	67	],
        [ new Date(	2023, 	4	,	1	),	85	],
        [ new Date(	2023, 	4	,	2	),	35	],
        [ new Date(	2023, 	4	,	3	),	87	],
        [ new Date(	2023, 	4	,	4	),	26	],
        [ new Date(	2023, 	4	,	5	),	9	],
        [ new Date(	2023, 	4	,	6	),	19	],
        [ new Date(	2023, 	4	,	7	),	39	],
        [ new Date(	2023, 	4	,	8	),	81	],
        [ new Date(	2023, 	4	,	9	),	32	],
        [ new Date(	2023, 	4	,	10	),	89	],
        [ new Date(	2023, 	4	,	11	),	16	],
        [ new Date(	2023, 	4	,	12	),	51	],
        [ new Date(	2023, 	4	,	13	),	81	],
        [ new Date(	2023, 	4	,	14	),	93	],
        [ new Date(	2023, 	4	,	15	),	51	],
        [ new Date(	2023, 	4	,	16	),	99	],
        [ new Date(	2023, 	4	,	17	),	66	],
        [ new Date(	2023, 	4	,	18	),	19	],
        [ new Date(	2023, 	4	,	19	),	69	],
        [ new Date(	2023, 	4	,	20	),	1	],
        [ new Date(	2023, 	4	,	21	),	83	],
        [ new Date(	2023, 	4	,	22	),	31	],
        [ new Date(	2023, 	4	,	23	),	43	],
        [ new Date(	2023, 	4	,	24	),	27	],
        [ new Date(	2023, 	4	,	25	),	66	],
        [ new Date(	2023, 	4	,	26	),	42	],
        [ new Date(	2023, 	4	,	27	),	62	],
        [ new Date(	2023, 	4	,	28	),	69	],
        [ new Date(	2023, 	4	,	29	),	5	],
        [ new Date(	2023, 	5	,	1	),	24	],
        [ new Date(	2023, 	5	,	2	),	69	],
        [ new Date(	2023, 	5	,	3	),	46	],
        [ new Date(	2023, 	5	,	4	),	68	],
        [ new Date(	2023, 	5	,	5	),	33	],
        [ new Date(	2023, 	5	,	6	),	39	],
        [ new Date(	2023, 	5	,	7	),	89	],
        [ new Date(	2023, 	5	,	8	),	67	],
        [ new Date(	2023, 	5	,	9	),	68	],
        [ new Date(	2023, 	5	,	10	),	36	],
        [ new Date(	2023, 	5	,	11	),	32	],
        [ new Date(	2023, 	5	,	12	),	72	],
        [ new Date(	2023, 	5	,	13	),	52	],
        [ new Date(	2023, 	5	,	14	),	2	],
        [ new Date(	2023, 	5	,	15	),	8	],
        [ new Date(	2023, 	5	,	16	),	76	],
        [ new Date(	2023, 	5	,	17	),	32	],
        [ new Date(	2023, 	5	,	18	),	58	],
        [ new Date(	2023, 	5	,	19	),	93	],
        [ new Date(	2023, 	5	,	20	),	11	],
        [ new Date(	2023, 	5	,	21	),	1	],
        [ new Date(	2023, 	5	,	22	),	97	],
        [ new Date(	2023, 	5	,	23	),	81	],
        [ new Date(	2023, 	5	,	24	),	45	],
        [ new Date(	2023, 	5	,	25	),	53	],
        [ new Date(	2023, 	5	,	26	),	45	],
        [ new Date(	2023, 	5	,	27	),	28	],
        [ new Date(	2023, 	5	,	28	),	81	],
        [ new Date(	2023, 	5	,	29	),	95	],
        [ new Date(	2023, 	5	,	1	),	11	],
        [ new Date(	2023, 	5	,	2	),	88	],
        [ new Date(	2023, 	5	,	3	),	56	],
        [ new Date(	2023, 	5	,	4	),	96	],
        [ new Date(	2023, 	5	,	5	),	31	],
        [ new Date(	2023, 	5	,	6	),	31	],
        [ new Date(	2023, 	5	,	7	),	74	],
        [ new Date(	2023, 	5	,	8	),	40	],
        [ new Date(	2023, 	5	,	9	),	22	],
        [ new Date(	2023, 	5	,	10	),	56	],
        [ new Date(	2023, 	5	,	11	),	68	],
        [ new Date(	2023, 	5	,	12	),	68	],
        [ new Date(	2023, 	5	,	13	),	83	],
        [ new Date(	2023, 	5	,	14	),	33	],
        [ new Date(	2023, 	5	,	15	),	56	],
        [ new Date(	2023, 	5	,	16	),	86	],
        [ new Date(	2023, 	5	,	17	),	8	],
        [ new Date(	2023, 	5	,	18	),	49	],
        [ new Date(	2023, 	5	,	19	),	10	],
        [ new Date(	2023, 	5	,	20	),	94	],
        [ new Date(	2023, 	5	,	21	),	42	],
        [ new Date(	2023, 	5	,	22	),	87	],
        [ new Date(	2023, 	5	,	23	),	73	],
        [ new Date(	2023, 	5	,	24	),	82	],
        [ new Date(	2023, 	5	,	25	),	57	],
        [ new Date(	2023, 	5	,	26	),	6	],
        [ new Date(	2023, 	5	,	27	),	33	],
        [ new Date(	2023, 	5	,	28	),	98	],
        [ new Date(	2023, 	5	,	29	),	61	],
        [ new Date(	2023, 	5	,	1	),	41	],
        [ new Date(	2023, 	5	,	2	),	10	],
        [ new Date(	2023, 	5	,	3	),	84	],
        [ new Date(	2023, 	5	,	4	),	67	],
        [ new Date(	2023, 	5	,	5	),	17	],
        [ new Date(	2023, 	5	,	6	),	93	],
        [ new Date(	2023, 	5	,	7	),	64	],
        [ new Date(	2023, 	5	,	8	),	28	],
        [ new Date(	2023, 	5	,	9	),	4	],
        [ new Date(	2023, 	5	,	10	),	46	],
        [ new Date(	2023, 	5	,	11	),	66	],
        [ new Date(	2023, 	5	,	12	),	86	],
        [ new Date(	2023, 	5	,	13	),	76	],
        [ new Date(	2023, 	5	,	14	),	77	],
        [ new Date(	2023, 	5	,	15	),	39	],
        [ new Date(	2023, 	5	,	16	),	73	],
        [ new Date(	2023, 	5	,	17	),	63	],
        [ new Date(	2023, 	5	,	18	),	94	],
        [ new Date(	2023, 	5	,	19	),	6	],
        [ new Date(	2023, 	5	,	20	),	46	],
        [ new Date(	2023, 	5	,	21	),	87	],
        [ new Date(	2023, 	5	,	22	),	29	],
        [ new Date(	2023, 	5	,	23	),	6	],
        [ new Date(	2023, 	5	,	24	),	27	],
        [ new Date(	2023, 	5	,	25	),	86	],
        [ new Date(	2023, 	5	,	26	),	17	],
        [ new Date(	2023, 	5	,	27	),	99	],
        [ new Date(	2023, 	5	,	28	),	37	],
        [ new Date(	2023, 	5	,	29	),	11	],
        [ new Date(	2023, 	6	,	1	),	38	],
        [ new Date(	2023, 	6	,	2	),	52	],
        [ new Date(	2023, 	6	,	3	),	52	],
        [ new Date(	2023, 	6	,	4	),	14	],
        [ new Date(	2023, 	6	,	5	),	3	],
        [ new Date(	2023, 	6	,	6	),	67	],
        [ new Date(	2023, 	6	,	7	),	80	],
        [ new Date(	2023, 	6	,	8	),	94	],
        [ new Date(	2023, 	6	,	9	),	63	],
        [ new Date(	2023, 	6	,	10	),	48	],
        [ new Date(	2023, 	6	,	11	),	86	],
        [ new Date(	2023, 	6	,	12	),	61	],
        [ new Date(	2023, 	6	,	13	),	36	],
        [ new Date(	2023, 	6	,	14	),	5	],
        [ new Date(	2023, 	6	,	15	),	74	],
        [ new Date(	2023, 	6	,	16	),	99	],
        [ new Date(	2023, 	6	,	17	),	87	],
        [ new Date(	2023, 	6	,	18	),	82	],
        [ new Date(	2023, 	6	,	19	),	14	],
        [ new Date(	2023, 	6	,	20	),	49	],
        [ new Date(	2023, 	6	,	21	),	88	],
        [ new Date(	2023, 	6	,	22	),	38	],
        [ new Date(	2023, 	6	,	23	),	73	],
        [ new Date(	2023, 	6	,	24	),	56	],
        [ new Date(	2023, 	6	,	25	),	70	],
        [ new Date(	2023, 	6	,	26	),	68	],
        [ new Date(	2023, 	6	,	27	),	77	],
        [ new Date(	2023, 	6	,	28	),	88	],
        [ new Date(	2023, 	6	,	29	),	13	],
        [ new Date(	2023, 	7	,	1	),	72	],
        [ new Date(	2023, 	7	,	2	),	87	],
        [ new Date(	2023, 	7	,	3	),	29	],
        [ new Date(	2023, 	7	,	4	),	5	],
        [ new Date(	2023, 	7	,	5	),	73	],
        [ new Date(	2023, 	7	,	6	),	88	],
        [ new Date(	2023, 	7	,	7	),	19	],
        [ new Date(	2023, 	7	,	8	),	24	],
        [ new Date(	2023, 	7	,	9	),	21	],
        [ new Date(	2023, 	7	,	10	),	66	],
        [ new Date(	2023, 	7	,	11	),	54	],
        [ new Date(	2023, 	7	,	12	),	96	],
        [ new Date(	2023, 	7	,	13	),	84	],
        [ new Date(	2023, 	7	,	14	),	22	],
        [ new Date(	2023, 	7	,	15	),	64	],
        [ new Date(	2023, 	7	,	16	),	83	],
        [ new Date(	2023, 	7	,	17	),	59	],
        [ new Date(	2023, 	7	,	18	),	89	],
        [ new Date(	2023, 	7	,	19	),	21	],
        [ new Date(	2023, 	7	,	20	),	40	],
        [ new Date(	2023, 	7	,	21	),	33	],
        [ new Date(	2023, 	7	,	22	),	67	],
        [ new Date(	2023, 	7	,	23	),	1	],
        [ new Date(	2023, 	7	,	24	),	39	],
        [ new Date(	2023, 	7	,	25	),	31	],
        [ new Date(	2023, 	7	,	26	),	85	],
        [ new Date(	2023, 	7	,	27	),	28	],
        [ new Date(	2023, 	7	,	28	),	7	],
        [ new Date(	2023, 	7	,	29	),	42	],
        [ new Date(	2023, 	8	,	1	),	5	],
        [ new Date(	2023, 	8	,	2	),	23	],
        [ new Date(	2023, 	8	,	3	),	47	],
        [ new Date(	2023, 	8	,	4	),	79	],
        [ new Date(	2023, 	8	,	5	),	68	],
        [ new Date(	2023, 	8	,	6	),	84	],
        [ new Date(	2023, 	8	,	7	),	46	],
        [ new Date(	2023, 	8	,	8	),	96	],
        [ new Date(	2023, 	8	,	9	),	53	],
        [ new Date(	2023, 	8	,	10	),	93	],
        [ new Date(	2023, 	8	,	11	),	34	],
        [ new Date(	2023, 	8	,	12	),	29	],
        [ new Date(	2023, 	8	,	13	),	99	],
        [ new Date(	2023, 	8	,	14	),	76	],
        [ new Date(	2023, 	8	,	15	),	96	],
        [ new Date(	2023, 	8	,	16	),	74	],
        [ new Date(	2023, 	8	,	17	),	90	],
        [ new Date(	2023, 	8	,	18	),	27	],
        [ new Date(	2023, 	8	,	19	),	16	],
        [ new Date(	2023, 	8	,	20	),	81	],
        [ new Date(	2023, 	8	,	21	),	47	],
        [ new Date(	2023, 	8	,	22	),	46	],
        [ new Date(	2023, 	8	,	23	),	85	],
        [ new Date(	2023, 	8	,	24	),	97	],
        [ new Date(	2023, 	8	,	25	),	69	],
        [ new Date(	2023, 	8	,	26	),	6	],
        [ new Date(	2023, 	8	,	27	),	13	],
        [ new Date(	2023, 	8	,	28	),	77	],
        [ new Date(	2023, 	8	,	29	),	10	],
        [ new Date(	2023, 	9	,	1	),	19	],
        [ new Date(	2023, 	9	,	2	),	74	],
        [ new Date(	2023, 	9	,	3	),	19	],
        [ new Date(	2023, 	9	,	4	),	44	],
        [ new Date(	2023, 	9	,	5	),	92	],
        [ new Date(	2023, 	9	,	6	),	92	],
        [ new Date(	2023, 	9	,	7	),	73	],
        [ new Date(	2023, 	9	,	8	),	38	],
        [ new Date(	2023, 	9	,	9	),	62	],
        [ new Date(	2023, 	9	,	10	),	90	],
        [ new Date(	2023, 	9	,	11	),	84	],
        [ new Date(	2023, 	9	,	12	),	22	],
        [ new Date(	2023, 	9	,	13	),	56	],
        [ new Date(	2023, 	9	,	14	),	7	],
        [ new Date(	2023, 	9	,	15	),	36	],
        [ new Date(	2023, 	9	,	16	),	91	],
        [ new Date(	2023, 	9	,	17	),	52	],
        [ new Date(	2023, 	9	,	18	),	56	],
        [ new Date(	2023, 	9	,	19	),	40	],
        [ new Date(	2023, 	9	,	20	),	33	],
        [ new Date(	2023, 	9	,	21	),	10	],
        [ new Date(	2023, 	9	,	22	),	45	],
        [ new Date(	2023, 	9	,	23	),	45	],
        [ new Date(	2023, 	9	,	24	),	69	],
        [ new Date(	2023, 	9	,	25	),	15	],
        [ new Date(	2023, 	9	,	26	),	99	],
        [ new Date(	2023, 	9	,	27	),	69	],
        [ new Date(	2023, 	9	,	28	),	36	],
        [ new Date(	2023, 	9	,	29	),	12	],
        [ new Date(	2023, 	10	,	1	),	80	],
        [ new Date(	2023, 	10	,	2	),	64	],
        [ new Date(	2023, 	10	,	3	),	31	],
        [ new Date(	2023, 	10	,	4	),	31	],
        [ new Date(	2023, 	10	,	5	),	100	],
        [ new Date(	2023, 	10	,	6	),	47	],
        [ new Date(	2023, 	10	,	7	),	51	],
        [ new Date(	2023, 	10	,	8	),	14	],
        [ new Date(	2023, 	10	,	9	),	48	],
        [ new Date(	2023, 	10	,	10	),	78	],
        [ new Date(	2023, 	10	,	11	),	68	],
        [ new Date(	2023, 	10	,	12	),	10	],
        [ new Date(	2023, 	10	,	13	),	63	],
        [ new Date(	2023, 	10	,	14	),	6	],
        [ new Date(	2023, 	10	,	15	),	3	],
        [ new Date(	2023, 	10	,	16	),	67	],
        [ new Date(	2023, 	10	,	17	),	87	],
        [ new Date(	2023, 	10	,	18	),	77	],
        [ new Date(	2023, 	10	,	19	),	91	],
        [ new Date(	2023, 	10	,	20	),	74	],
        [ new Date(	2023, 	10	,	21	),	87	],
        [ new Date(	2023, 	10	,	22	),	56	],
        [ new Date(	2023, 	10	,	23	),	65	],
        [ new Date(	2023, 	10	,	24	),	31	],
        [ new Date(	2023, 	10	,	25	),	29	],
        [ new Date(	2023, 	10	,	26	),	55	],
        [ new Date(	2023, 	10	,	27	),	9	],
        [ new Date(	2023, 	10	,	28	),	83	],
        [ new Date(	2023, 	10	,	29	),	76	],
        [ new Date(	2023, 	11	,	1	),	8	],
        [ new Date(	2023, 	11	,	2	),	22	],
        [ new Date(	2023, 	11	,	3	),	97	],
        [ new Date(	2023, 	11	,	4	),	75	],
        [ new Date(	2023, 	11	,	5	),	23	],
        [ new Date(	2023, 	11	,	6	),	56	],
        [ new Date(	2023, 	11	,	7	),	14	],
        [ new Date(	2023, 	11	,	8	),	87	],
        [ new Date(	2023, 	11	,	9	),	31	],
        [ new Date(	2023, 	11	,	10	),	45	],
        [ new Date(	2023, 	11	,	11	),	29	],
        [ new Date(	2023, 	11	,	12	),	13	],
        [ new Date(	2023, 	11	,	13	),	31	],
        [ new Date(	2023, 	11	,	14	),	19	],
        [ new Date(	2023, 	11	,	15	),	42	],
        [ new Date(	2023, 	11	,	16	),	55	],
        [ new Date(	2023, 	11	,	17	),	69	],
        [ new Date(	2023, 	11	,	18	),	17	],
        [ new Date(	2023, 	11	,	19	),	90	],
        [ new Date(	2023, 	11	,	20	),	59	],
        [ new Date(	2023, 	11	,	21	),	38	],
        [ new Date(	2023, 	11	,	22	),	39	],
        [ new Date(	2023, 	11	,	23	),	72	],
        [ new Date(	2023, 	11	,	24	),	43	],
        [ new Date(	2023, 	11	,	25	),	80	],
        [ new Date(	2023, 	11	,	26	),	13	],
        [ new Date(	2023, 	11	,	27	),	65	],
        [ new Date(	2023, 	11	,	28	),	52	],
        [ new Date(	2023, 	11	,	29	),	83	],
        [ new Date(	2023, 	11	,	30	),	85	],
        [ new Date(	2023, 	11	,	31	),	47	],

        
                ]);
        

       var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

       var options = {
         title: "RMF Field Yield Over - Year 2023",
         height: 400,
       };

       chart.draw(dataTable, options);
   }

function handleSelection() {
    var selectedChart = document.getElementById("options").value;
    var chartContainer = document.getElementById("chartContainer");

    switch(selectedChart) {
        case "pieChart":
            chartContainer.innerHTML = `
               
                <div class="pie_basic" id="pie_basic" style="width: 800px; height: 350px;"></div>
            `;
            drawPieChart();
            break;
        case "barChart":
            chartContainer.innerHTML = `
               
                <div id="barchart_material" style="width: 900px; height: 300px;"></div>
            `;
            drawBarChart();
            // Add your functionality for drawing bar chart here
            break;
        default:
            // Handle other cases or set a default content
            break;
    }
}

function drawPieChart(){
    console.log('In Draw Pie');
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Field-1',  40],
      ['Field-2',   10],
      ['Field-3',  20],
      ['Field-4', 10],
      ['Field-5',  20]
    ]);

    var options = {
      title: 'Percentage of Yields from Different fields',
      height: 300,
      backgroundColor: '#7D694D',
      is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie_basic'));

    chart.draw(data, options);
  }

  function drawBarChart() {
    console.log('In Bar Pie');
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Field-1', 'Field-2', 'Field-3'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350]
    ]);

    var options = {
        title: 'RMF Yield - Particular Fields',
        subtitle: 'Between 2014-2017',
        //textcolor: 'black',
      
      backgroundColor: '#7D694D',
      
      bars: 'vertical' // Required for Material Bar Charts.
      
    };

    var chart = new google.charts.Bar(document.getElementById('barchart_material'));

    chart.draw(data,options);
  }