var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var current_position_of_mouse_x, current_position_of_mouse_y;
    var last_position_of_mouse_x, last_position_of_mouse_y;

    last_position_of_mouse_x = 0;
    last_position_of_mouse_y = 0;


    canvas.addEventListener("mousedown", my_mousedown);

  
    function my_mousedown(e)
    {
       
        color = document.getElementById("color").value;         
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        
        mouseEvent = "mouseDown";
    }

 
    canvas.addEventListener("mousemove", my_mousemove);

    function my_mousemove(e)
    {
       
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;
       
        if (mouseEvent == "mouseDown") {
           
            console.log("Current position of x and y coordinates = ");
            console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
            ctx.beginPath();    
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
            ctx.moveTo(last_position_of_mouse_x, last_position_of_mouse_y);
           ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            // ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
    
             ctx.stroke();
        }
        last_position_of_mouse_x = current_position_of_mouse_x;
        last_position_of_mouse_y = current_position_of_mouse_y;

        //mouseEvent = "mousemove";

    }


    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        /*current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clienty - canvas.offsetTop;
        if (mouseEvent == "mouseup") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        } */

        mouseEvent = "mouseup";
    }
    
   
    
    
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        /*current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clienty - canvas.offsetTop;
        if (mouseEvent == "mouseleave") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }*/

        mouseEvent = "mouseleave";

    }
    

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

}
