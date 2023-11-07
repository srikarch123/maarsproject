let path;
let newPolygon;
let listen = false;
const RMF = [[[
    { lat: 40.846771, lng: -96.467208 },
    { lat: 40.846946, lng: -96.465921 },
    { lat: 40.846403, lng: -96.465780 },
    { lat: 40.846329, lng: -96.466414 },
    { lat: 40.845726, lng: -96.466269 },
    { lat: 40.845639, lng: -96.466934 },],
[{ color: "orange" }, { lat: 40.846329, lng: -96.466414 }],],

[[
    { lat: 40.848175, lng: -96.468021 },
    { lat: 40.848669, lng: -96.466902 },
    { lat: 40.848207, lng: -96.466533 },
    { lat: 40.847954, lng: -96.467083 },
    { lat: 40.847456, lng: -96.466702 },
    { lat: 40.847190, lng: -96.467264 },],
[{ color: 'pink' }, { lat: 40.847954, lng: -96.467083 }],],

[[
    { lat: 40.847933, lng: -96.469118 },
    { lat: 40.847984, lng: -96.469029 },
    { lat: 40.848014, lng: -96.468960 },
    { lat: 40.848046, lng: -96.468857 },
    { lat: 40.848075, lng: -96.468756 },
    { lat: 40.848111, lng: -96.468621 },
    { lat: 40.848145, lng: -96.468468 },
    { lat: 40.848180, lng: -96.468328 },
    { lat: 40.848101, lng: -96.468241 },
    { lat: 40.848012, lng: -96.468152 },
    { lat: 40.847971, lng: -96.468118 },
    { lat: 40.847897, lng: -96.468042 },
    { lat: 40.847767, lng: -96.467928 },
    { lat: 40.847641, lng: -96.467827 },
    { lat: 40.847517, lng: -96.467742 },
    { lat: 40.847441, lng: -96.467681 },
    { lat: 40.847305, lng: -96.467607 },
    { lat: 40.847070, lng: -96.467485 },
    { lat: 40.846799, lng: -96.467371 },
    { lat: 40.846439, lng: -96.467277 },
    { lat: 40.846129, lng: -96.467218 },
    { lat: 40.846062, lng: -96.468025 },
    { lat: 40.846243, lng: -96.468057 },
    { lat: 40.846468, lng: -96.468110 },
    { lat: 40.846723, lng: -96.468199 },
    { lat: 40.846972, lng: -96.468315 },
    { lat: 40.847189, lng: -96.468442 },
    { lat: 40.847518, lng: -96.468687 },
    { lat: 40.847769, lng: -96.468941 },],
[{ color: 'green' }, { lat: 40.847153, lng: -96.467996 }]],

[[
    { lat: 40.850851, lng: - 96.469501 },
    { lat: 40.850965, lng: -96.467543 },
    { lat: 40.851019, lng: -96.467447 },
    { lat: 40.851070, lng: -96.467396 },
    { lat: 40.851124, lng: -96.467401 },
    { lat: 40.851238, lng: -96.467464 },
    { lat: 40.851527, lng: -96.467669 },
    { lat: 40.851815, lng: -96.467795 },
    { lat: 40.851929, lng: -96.467858 },
    { lat: 40.852014, lng: -96.467930 },
    { lat: 40.852244, lng: -96.468140 },
    { lat: 40.852402, lng: -96.468301 },
    { lat: 40.852787, lng: -96.468537 },
    { lat: 40.852858, lng: -96.468609 },
    { lat: 40.852990, lng: -96.468966 },
    { lat: 40.853074, lng: -96.469270 },
    { lat: 40.853132, lng: -96.469346 },
    { lat: 40.853175, lng: -96.470281 },
    { lat: 40.853088, lng: -96.471456 },
    { lat: 40.853026, lng: -96.471727 },
    { lat: 40.852873, lng: -96.471593 },
    { lat: 40.852826, lng: -96.471528 },
    { lat: 40.852768, lng: -96.471409 },
    { lat: 40.852687, lng: -96.471079 },
    { lat: 40.852626, lng: -96.470650 },
    { lat: 40.852538, lng: -96.470019 },
    { lat: 40.852465, lng: -96.469778 },
    { lat: 40.852465, lng: -96.469778 },
    { lat: 40.852333, lng: -96.469597 },
    { lat: 40.852049, lng: -96.469361 },
    { lat: 40.851733, lng: -96.469257 },
    { lat: 40.851336, lng: -96.469280 },
    { lat: 40.851026, lng: -96.469403 },
    { lat: 40.850902, lng: -96.469476 },],
[{ color: 'violet' }, { lat: 40.852134, lng: -96.468769 }],],

    [[
 
        { lat: 40.850749, lng: -96.469421 },
        { lat: 40.850860, lng: -96.468012 },
        { lat: 40.850880, lng: -96.467721 },
        { lat: 40.850896, lng: -96.467536 },
        { lat: 40.850904, lng: -96.467239 },
        { lat: 40.850906, lng: -96.467175 },
        { lat: 40.850907, lng: -96.466984 },
        { lat: 40.850934, lng: -96.466758 },
        { lat: 40.850967, lng: -96.466537 },
        { lat: 40.850865, lng: -96.466528 },
        { lat: 40.850781, lng: -96.466543 },
        { lat: 40.850694, lng: -96.466567 },
        { lat: 40.850583, lng: -96.466613 },
        { lat: 40.850521, lng: -96.466652 },
        { lat: 40.850425, lng: -96.466718 },
        { lat: 40.850302, lng: -96.466819 },
        { lat: 40.850182, lng: -96.466925 },
        { lat: 40.850080, lng: -96.467017 },
        { lat: 40.849971, lng: -96.467096 },
        { lat: 40.849903, lng: -96.467131 },
        { lat: 40.849826, lng: -96.467151 },
        { lat: 40.849741, lng: -96.467151 },
        { lat: 40.849680, lng: -96.467134 },
        { lat: 40.849607, lng: -96.467099 },
        { lat: 40.849545, lng: -96.467057 },
        { lat: 40.849468, lng: -96.466993 },
        { lat: 40.849340, lng: -96.466878 },
        { lat: 40.849278, lng: -96.466830 },
        { lat: 40.849230, lng: -96.466809 },
        { lat: 40.849174, lng: -96.466798 },
        { lat: 40.849112, lng: -96.466804 },
        { lat: 40.849058, lng: -96.466826 },
        { lat: 40.848996, lng: -96.466868 },
        { lat: 40.848929, lng: -96.466935 },
        { lat: 40.848899, lng: -96.466971 },
        { lat: 40.848788, lng: -96.467146 },
        { lat: 40.848687, lng: -96.467328 },
        { lat: 40.848578, lng: -96.467566 },
        { lat: 40.848332, lng: -96.468326 },
        { lat: 40.848278, lng: -96.468768 },
        { lat: 40.848253, lng: -96.469012 },
        { lat: 40.848214, lng: -96.469164 },
        { lat: 40.848178, lng: -96.469236 },
        { lat: 40.848113, lng: -96.469322 },
        { lat: 40.848168, lng: -96.469420 },
        { lat: 40.848607, lng: -96.469061 },
        { lat: 40.848850, lng: -96.468916 },
        { lat: 40.849200, lng: -96.468825 },
        { lat: 40.849735, lng: -96.468827 },
        { lat: 40.849958, lng: -96.468883 },
        { lat: 40.850169, lng: -96.468982 },
        { lat: 40.850319, lng: -96.469089 },
        { lat: 40.850503, lng: -96.469250 },
        { lat: 40.850643, lng: -96.469371 },
        { lat: 40.850697, lng: -96.469420 },
        { lat: 40.850733, lng: -96.469425 },],
        [{ color: 'blue' }, { lat:40.849769, lng:-96.468096 } ]],


    
[[
    {lat:	40.856288,lng: -96.466271	},
    {lat:	40.855850,lng: -96.466335	},
    {lat:	40.855436,lng: -96.466356	},
    {lat:	40.855241,lng: -96.466303	},
    {lat:	40.855047,lng: -96.466185	},
    {lat:	40.854682,lng: -96.466045	},
    {lat:	40.854272,lng: -96.465911	},
    {lat:	40.853663,lng: -96.465799	},
    {lat:	40.853476,lng: -96.465784	},
    {lat:	40.853363,lng: -96.465790	},
    {lat:	40.853274,lng: -96.466616	},
    {lat:	40.853255,lng: -96.467621	},
    {lat:	40.853236,lng: -96.468012	},
    {lat:	40.853208,lng: -96.468130	},
    {lat:	40.853147,lng: -96.468216	},
    {lat:	40.853025,lng: -96.468266	},
    {lat:	40.852856,lng: -96.468279	},
    {lat:	40.852668,lng: -96.468204	},
    {lat:	40.852462,lng: -96.468043	},
    {lat:	40.852279,lng: -96.467863	},
    {lat:	40.852082,lng: -96.467695	},
    {lat:	40.851838,lng: -96.467559	},
    {lat:	40.851608,lng: -96.467435	},
    {lat:	40.851394,lng: -96.467295	},
    {lat:	40.851261,lng: -96.467180	},
    {lat:	40.851158,lng: -96.467037	},
    {lat:	40.851158,lng: -96.466929	},
    {lat:	40.851199,lng: -96.466623	},
    {lat:	40.851189,lng: -96.466453	},
    {lat:	40.851102,lng: -96.466297	},
    {lat:	40.850912,lng: -96.466263	},
    {lat:	40.850737,lng: -96.466290	},
    {lat:	40.850568,lng: -96.466365	},
    {lat:	40.850378,lng: -96.466487	},
    {lat:	40.850280,lng: -96.466555	},
    {lat:	40.850126,lng: -96.466698	},
    {lat:	40.850023,lng: -96.466800	},
    {lat:	40.849884,lng: -96.466861	},
    {lat:	40.849870,lng: -96.466853	},
    {lat:	40.849681,lng: -96.466853	},
    {lat:	40.849515,lng: -96.466753	},
    {lat:	40.849379,lng: -96.466653	},
    {lat:	40.849447,lng: -96.466463	},
    {lat:	40.849530,lng: -96.466294	},
    {lat:	40.849659,lng: -96.466014	},
    {lat:	40.849870,lng: -96.465694	},
    {lat:	40.850097,lng: -96.465394	},
    {lat:	40.850173,lng: -96.465334	},
    {lat:	40.856295,lng: -96.465294	},
    {lat:	40.856318,lng: -96.465724	},
    {lat:	40.856303,lng: -96.466214	},],
    [{ color: 'yellow' },{lat:	40.85172047209272,lng: -96.4660498175412 }]],



];


//const infoWindow =[];
let j = 0;

function fieldboundary() {
    let poly = [];

    for (let i = 0; i < RMF.length; i++) {
        console.log("RMF[0][0] is: ", RMF[0][0][0].color);
        poly[i] = new google.maps.Polygon({
            paths: RMF[i][0],
            strokeColor: RMF[i][1][0].color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: RMF[i][1][0].color,
            fillOpacity: 0.35,
            map: map
        });
        j = 0;
        //listen = true;
        poly[i].addListener("click", showArrays);

    }
}

function showArrays(event) {
    const polygon = this;
    const vertices = polygon.getPath();

    console.log("inside showArray");

    console.log("inside if");
    const infoWindow = new google.maps.InfoWindow();


    let contentString =
        "<b>A Small Field </b><br><br>" +
        "Location: " +
        event.latLng.lat() +
        "," +
        event.latLng.lng() +
        "<br>" + "AREA: <br>SOIL: <br>CROP: ";
    infoWindow.setContent(contentString);
    infoWindow.setPosition(event.latLng);
    infoWindow.open(map);
    //infoWindow.close(map);

    console.log("updated j is: ", j);

}

function generateUserPath() {
     poly = new google.maps.Polyline({
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 3,
    });
    poly.setMap(map);


    listen=true;
    // Add a listener for the click event
    map.addListener("click", addLatLng);

}

function stopListening() {
    //map.removeListener();
    listen = false;

}

function cancelBoundary()
{
   newPolygon.setMap(null);
    //poly.setMap(null);
    //newPolygon=null;
   // poly=null;
}

function addLatLng(event) {
    if (listen) {
         path = poly.getPath();

        // Because path is an MVCArray, we can simply append a new coordinate
        // and it will automatically appear.
        path.push(event.latLng);
        // Add a new marker at the new plotted point on the polyline.
       /* new google.maps.Marker({
            position: event.latLng,
            title: "#" + path.getLength(),
            map: map,

            icon: {
                url: 'images/dot.png',
                scaledSize: new google.maps.Size(35, 25),
            }
        });
        */

        
         newPolygon=new google.maps.Polygon({
            paths: path,
            strokeColor: RMF[i][1][0].color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: RMF[i][1][0].color,
            fillOpacity: 0.35,
            map: map
        });
        

    }
    else {
        event.stop();
    }

}


