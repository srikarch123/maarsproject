
let clickListener1;

function select_points() {

    //document.getElementById(map).style.cursor = pointer;
    if(clickListener1==null)
    {    clickListener1 = map.addListener('click', function (event) {
        const clickedLocation = event.latLng;
        var latitude = clickedLocation.lat();
        var longitude = clickedLocation.lng();
        const newLocationA = new google.maps.LatLng(latitude, longitude);

        if (!markerA) {
            markerA = new google.maps.Marker({
                position: newLocationA,
                map: map,
                title: "MarkerA",
                icon: {
                    scaledSize: new google.maps.Size(35, 25),
                }
            });
        } else {
            markerA.setPosition(newLocationA);
        }


        const confirmDialog = confirm(`Selected A coordinates are: \n\nLat: ${latitude}\tLong: ${longitude}`);
        if (confirmDialog) {
            final_A.lat = latitude;
            final_A.lon = longitude;
            const coordinatesLabel = document.getElementById('input_A');
            coordinatesLabel.value = `${final_A.lat}, ${final_A.lon}`;

            google.maps.event.removeListener(clickListener1);

            button2Click();

        }

        else {
            latitude = null;
            longitude = null;
        }


    });

}



}

function button2Click() {
    //alert('Do you want to select Point B')
    if (1) {
        clickListener2 = map.addListener('click', function (event) {
            const clickedLocation = event.latLng;
            var latitude = clickedLocation.lat();
            var longitude = clickedLocation.lng();

            const newLocationB = new google.maps.LatLng(latitude, longitude);

            if (!markerB) {
                markerB = new google.maps.Marker({
                    position: newLocationB,
                    map: map,
                    title: "MarkerB",
                    icon: {
                        scaledSize: new google.maps.Size(35, 25),
                    }
                });
            } else {
                markerA.setPosition(newLocationB);
            }


            const confirmDialog = confirm(`Selected B coordinates are: \n\nLat: ${latitude}\tLong: ${longitude}`);
            if (confirmDialog) {
                final_B.lat = latitude;
                final_B.lon = longitude;
                const coordinatesLabel = document.getElementById('input_B');
                coordinatesLabel.value = `${final_B.lat},  ${final_B.lon}`;

                google.maps.event.removeListener(clickListener2);

            }
            else {
                latitude = null;
                longitude = null;

            }
            //mapClickListenerEnabled = false;
        });
        isListening2 = true;

    }


}
function reset_points() {
    const coordinatesLabel = document.getElementById('input_A');
    coordinatesLabel.value = ''; // Clears the content of the label
    markerA.setMap(null);
    markerA = null;

    const coordinatesLabel2 = document.getElementById('input_B');
    coordinatesLabel2.value = ''; // Clears the content of the label
    markerB.setMap(null);
    markerB = null;
    clickListener1=null;

}

function select_region() {

    for (regionIndex = 0; regionIndex < points.length; regionIndex++) {
        const currentPoint = points[regionIndex];
        const selected_region = new google.maps.LatLng(currentPoint.lat, currentPoint.lon);
        console.log("selected region is: ", selected_region);
        if (!marker_region[regionIndex]) {
            marker_region[regionIndex] = new google.maps.Marker({
                position: selected_region,
                map: map,
                title: "Marker_region",
                icon: {
                    url: 'images/dot.png',
                    scaledSize: new google.maps.Size(35, 25),
                }
            });
        } else {
            marker[regionIndex].setPosition(selected_region);
        }
    }



}