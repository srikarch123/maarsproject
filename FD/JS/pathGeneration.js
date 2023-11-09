function generatePath() {
    const flightPlanCoordinates1 = [
        { lat: 40.837003, lng: -96.667364 },
        { lat: 40.836956, lng: -96.667360 },
        { lat: 40.836893, lng: -96.667359 },
        { lat: 40.836798, lng: -96.667356 },
        { lat: 40.836720, lng: -96.667353 },
        { lat: 40.836654, lng: -96.667350 },
        { lat: 40.836434, lng: -96.667340 },
        { lat: 40.836422, lng: -96.667342 },
        { lat: 40.836445, lng: -96.667353 },
        { lat: 40.836484, lng: -96.667354 },
        { lat: 40.836553, lng: -96.667356 },
        { lat: 40.836776, lng: -96.667366 },
        { lat: 40.836897, lng: -96.667368 },
        { lat: 40.836982, lng: -96.667369 },

    ];
    const RMF_tracotr_path = [
        { lat: 40.846908, lng: -96.465915 },
        { lat: 40.846450, lng: -96.465789 },
        { lat: 40.846422, lng: -96.465783 },
        { lat: 40.846415, lng: -96.465788 },
        { lat: 40.846417, lng: -96.465793 },
        { lat: 40.846904, lng: -96.465923 },
        { lat: 40.846918, lng: -96.465926 },
        { lat: 40.846922, lng: -96.465928 },
        { lat: 40.846925, lng: -96.465932 },
        { lat: 40.846924, lng: -96.465935 },
        { lat: 40.846916, lng: -96.465936 },
        { lat: 40.846430, lng: -96.465805 },
        { lat: 40.846418, lng: -96.465802 },
        { lat: 40.846413, lng: -96.465804 },
        { lat: 40.846415, lng: -96.465810 },
        {lat: 40.846915, lng: -96.465946}]


    const lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    };

    const flightPath = new google.maps.Polyline({
        path: RMF_tracotr_path,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 1,
        map: map,
        icons: [
            {
                icon: lineSymbol,
                offset: "100%"
            }

        ],
    });

}
