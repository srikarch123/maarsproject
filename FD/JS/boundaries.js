const field1 = [
    {lat: 40.83698738719271, lng: -96.66739830746856},
    {lat: 40.83646507327339, lng: -96.6673875786325},
    {lat: 40.83641915536942, lng: -96.66932413354125},
    {lat: 40.83700460626282, lng: -96.67015025391784}
];

const field2 = [
    {lat: 40.837017503410685, lng: -96.67264612675416},
    {lat: 40.83703472247295, lng: -96.6711226320337},
    {lat: 40.8364613297263, lng: -96.67037668650302},
    {lat: 40.83641784864843, lng: -96.67262891886656}
];

function fieldboundary() {
    // Define the coordinates for field 1 (rectangle for simplicity)
    
    // Create a polygon for field 1
    var poly1=new google.maps.Polygon({
        
        paths: field1,
        strokeColor: 'blue',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: 'blue',
        fillOpacity: 0.35,
        map: map
    });

    infoWindow = new google.maps.InfoWindow({
        content: 'velocity: ', // You can customize the content here
    });

    // Event listeners for hovering over the marker
    poly1.addListener('mouseover', () => {
        infoWindow.open(map, poly1);
    });
    
    /*
    setTimeout(() =>{
        infoWindow.close();
    },3000);

    */
    poly1.addListener('mouseout', () => {
       infoWindow.close();
    });
    
                 

       // Define the coordinates for field 1 (rectangle for simplicity)
       
    // Create a polygon for field 1
    new google.maps.Polygon({
        paths: field2,
        strokeColor: 'yellow',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: 'yellow',
        fillOpacity: 0.35,
        map: map
    });

}
