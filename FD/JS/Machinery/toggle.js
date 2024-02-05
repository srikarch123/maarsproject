
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
    const analytics_box = document.querySelector(".analytics_box");

    field_boundaries.style.display = "block";
    machinary_box.style.display = "none";
    analytics_box.style.display="none";

}

function m_appear() {
    const left_side = document.getElementById("left_side");
    console.log("left_side width is: ", left_side.style.width);
    left_side.style.width = "40%";

    const field_boundaries = document.querySelector(".field_boundaries");
    const machinary_box = document.querySelector(".machinary_box");
    const analytics_box = document.querySelector(".analytics_box");

    field_boundaries.style.display = "none";
    machinary_box.style.display = "block";
    analytics_box.style.display="none";
}

function one_appear() {
    const one = document.querySelector(".one");
    const two = document.querySelector(".two");

    const head1 = document.querySelector(".head1");
    const head2 = document.querySelector(".head2");


    one.style.display = "block";
    two.style.display = "none";

    

}

function two_appear() {
    const one = document.querySelector(".one");
    const two = document.querySelector(".two");

    const head1 = document.querySelector(".head1");
    const head2 = document.querySelector(".head2");

    one.style.display = "none";
    two.style.display = "block";

   
}

function close_left(){
    const left_side = document.getElementById("left_side");
    left_side.style.width = "0%";
}

function close_right(){
    const right_side = document.getElementById("right_side");
    right_side.style.width = "0%";
}

function machine_right(){
    const right_side = document.getElementById("right_side");
    right_side.style.width = "40%";
}

function show_hamburger(){
    const mainMenu = document.querySelector(".mainMenu");
    mainMenu.style.visibility = (mainMenu.style.visibility === "visible") ? "hidden" : "visible";
}

function analytics_appear(){
    const left_side = document.getElementById("left_side");
    console.log("left_side width is: ", left_side.style.width);
    left_side.style.width = "200%";

    const field_boundaries = document.querySelector(".field_boundaries");
    const machinary_box = document.querySelector(".machinary_box");
    const analytics_box = document.querySelector(".analytics_box");

    field_boundaries.style.display = "none";
    machinary_box.style.display = "none";
    analytics_box.style.display="block";

}