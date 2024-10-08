/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");
// butts_algos is a collection of all the buttons with the class algos

var div_sizes=[];
// div_sizes is an empty array that will store the sizes of the buttons.
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

// Line 1: The function generate_array() line declares the generate_array() function. The function takes two parameters: the cont element and the array_size variable. The cont element is the HTML element that will contain the divs. The array_size variable is the number of divs that will be generated.
// Line 2: The cont.innerHTML="" line clears the cont element. This ensures that the divs will be generated from scratch each time the function is called.
// Line 3: The for loop iterates through the array_size variable and generates a random number for each iteration. The loop starts at 0 and increments by 1 until it reaches the value of array_size.
// Line 4: The Math.floor() function rounds the random number down to the nearest integer. This ensures that the random numbers will be whole numbers.
// Line 5: The div_sizes[i] array stores the random numbers generated. The i variable is the index of the array element.
// Line 6: The document.createElement("div") function creates a div element. The div element is then stored in the divs[i] array.
// Line 7: The cont.appendChild(divs[i]) line appends the div element to the cont element. This ensures that the div element will be displayed on the page.
// Line 8: The margin_size=0.1 line sets the margin of the div element to 0.1%. This ensures that there will be a small margin between each div element.
// Line 9: The divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;" line sets the style of the div element. The style of the div element is set to have a margin of 0.1%, a background color of blue, a width of (100/array_size) - (2 * 0.1)%, and a height of the random number generated.

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

// The code window.onload=update_array_size(); is a JavaScript code that will call the update_array_size() function when the page loads. The update_array_size() function is a JavaScript function that updates the size of the array that is generated by the generate_array() function.

// The window.onload event is an event that is triggered when the page loads. The window object is a global object that represents the window of the web browser. The onload property of the window object is a function that is called when the page loads.

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}
