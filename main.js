var mouseEvent = "empty";
var last_position_of_x,last_position_of_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 2;
canvas.addEventListeners("mousedown" , my_mousedown);

{
mouseEvent = "mouseDown";
}
canvas.addEventListeners("mousemove" , my_mousemove);
function my_mousedown(e)
{
    current_position_of_mouse_x = e.clientX -  canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY -  canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
     ctx.beginPath(); 
     ctx.strokeStyle = color;
     ctx.lineWidth = width_of_line;
     console.log("last position of x and y coordinate = ");
     console.log("x = " + last_position_of_mouse_x + "y = " last_position_of_mouse_y);
     
     console.log("current position of x and y coordinate = ");
     console.log("x = " + current_position_of_mouse_x + "y = " current_position_of_mouse_y);
ctx.lineTo(current_position_of_x,current_position_of_y);
ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(e)
  { mouseEvent = "mouseUP";
 } 
 canvas.addEventListener("mouseleave", my_mouseleave);
  function my_mouseleave(e) 
  {
       mouseEvent = "mouseleave"; 
    }