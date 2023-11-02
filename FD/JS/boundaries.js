const RMF = [[[
    { lat: 40.846771, lng: -96.467208 },
    { lat: 40.846946, lng: -96.465921 },
    { lat: 40.846403, lng: -96.465780 },
    { lat: 40.846329, lng: -96.466414 },
    { lat: 40.845726, lng: -96.466269 },
    { lat: 40.845639, lng: -96.466934 },],
[{ color: "orange" },{ lat: 40.846329, lng: -96.466414 }],],

[[
    { lat: 40.848175, lng: -96.468021 },
    { lat: 40.848669, lng: -96.466902 },
    { lat: 40.848207, lng: -96.466533 },
    { lat: 40.847954, lng: -96.467083 },
    { lat: 40.847456, lng: -96.466702 },
    { lat: 40.847190, lng: -96.467264 },],
[{ color: 'pink' },{ lat: 40.847954, lng: -96.467083 }],],

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
[{ color: 'green' },{ lat: 40.847153, lng: -96.467996 }]]

];




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
    }
    //poly[0].addListener("click",showArrays);
}

function showArrays(event) {
    // Since this polygon has only one path, we can call getPath() to return the
    // MVCArray of LatLngs.
    // @ts-ignore
    const polygon = this;
    const vertices = polygon.getPath();
    let contentString =
        "<b>A small Field </b><br>" +
        "Clicked location: <br>" +
        event.latLng.lat() +
        "," +
        event.latLng.lng() +
        "<br>";
    infoWindow.setContent(contentString);
    infoWindow.setPosition(event.latLng);
    infoWindow.open(map);
}
