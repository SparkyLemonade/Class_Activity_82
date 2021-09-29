//variables

var current_mouse_x_pos, current_mouse_y_pos;
var last_mouse_x_pos, last_mouse_y_pos;
var mouseEvent = "empty";

//canvas settings

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="blue";
width=10;

//mousedown

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
color = document.getElementById("color").value;
width=document.getElementById("width").value;

mouseEvent="mouseDown";


}

//mouseleave

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseleave";
}

//mouseup

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseUP";
}

//mousemove

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_mouse_x_pos = e.clientX - canvas.offsetLeft;
    current_mouse_y_pos = e.clientY - canvas.offsetTop;

    if (mouseEvent = "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("last position of x and y coordinates =");
        console.log("x = " + last_mouse_x_pos +  "y = " + last_mouse_y_pos);
        ctx.moveTo(last_mouse_x_pos, last_mouse_y_pos);

        console.log("current position of x and y coordinates =");
        console.log("x = " + current_mouse_x_pos +  "y = " + current_mouse_y_pos);
        ctx.lineTo(current_mouse_x_pos, current_mouse_y_pos);
        ctx.stroke();

    }

    last_mouse_x_pos = current_mouse_x_pos;
    last_mouse_y_pos = current_mouse_y_pos;
}