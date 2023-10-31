
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

function f_appear() {
    const left_side = document.getElementById("left_side");
    console.log("left_side width is: ", left_side.style.width);
    left_side.style.width = "40%";

    const field_boundaries = document.querySelector(".field_boundaries");
    const machinary_box = document.querySelector(".machinary_box");

        field_boundaries.style.display = "block";
        machinary_box.style.display = "none";
   
}

function m_appear() {
    const left_side = document.getElementById("left_side");
    console.log("left_side width is: ", left_side.style.width);
    left_side.style.width = "40%";

    const field_boundaries = document.querySelector(".field_boundaries");
    const machinary_box = document.querySelector(".machinary_box");

  
        field_boundaries.style.display = "none";
        machinary_box.style.display = "block";
    
}