var speed=1000;

inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        //The parseInt() function is used to convert a string to an integer. The array_speed variable is a string that contains the value of the inp_aspeed input field. The parseInt() function converts the string to an integer and assigns the integer to the speed variable.

        // The parseInt() function takes one argument, the string to convert. The parseInt() function returns an integer if the string can be converted to an integer. If the string cannot be converted to an integer, the parseInt() function returns NaN.
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        // The function uses the window.setTimeout() function to schedule a call to itself after a delay of delay_time milliseconds. 
        // The delay_time variable is used to control the speed of the visualization. The higher the value of delay_time, the slower the visualization will be. the delay will be 2delay_time when the function is called for the second time.
        //the delay time is incremented by delay_time each time the function is called. This means that the visualization will be updated more slowly as the function is called more times.
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";

        // sets the style of the cont div. The code starts by setting the margin of the div to 0%. Then, it sets the width of the div to (100/array_size-(2*margin_size))%. This ensures that the div takes up the full width of its container.

        // The code then sets the height of the div to the specified height. Finally, the code sets the background color of the div to the specified color.
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time);
}
