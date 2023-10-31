
function toggleMachinaryBox() {
    const machinaryBox = document.getElementById("machinary_box");
    const gpsBox = document.getElementById("gps_box");

    machinaryBox.style.visibility = (machinaryBox.style.visibility === "visible") ? "hidden" : "visible";
    gpsBox.style.visibility = "hidden";
}

function toggleGpsBox() {
    const gpsBox = document.getElementById("gps_box");
    const machinaryBox = document.getElementById("machinary_box");

    gpsBox.style.visibility = (gpsBox.style.visibility === "visible") ? "hidden" : "visible";
    machinaryBox.style.visibility = "hidden";
}

function appear() {
    const left_side = document.getElementById("left_side");
    console.log("left_side width is: ", left_side.style.width);
    left_side.style.width = (left_side.style.width === "0%") ? "40%" : "0%";
}
