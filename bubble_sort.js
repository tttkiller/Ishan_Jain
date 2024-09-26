function Bubble()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        // This line of code declares a for loop that will iterate from 0 to array_size - 1. The array_size variable is the number of elements in the divs array.
        for(var j=0;j<array_size-i-1;j++)
        {
            // this loop is like j=i;j<array_size-1 but in reverse manner like j start from 0 and ends at array_size-i-1
            div_update(divs[j],div_sizes[j],"yellow");//Color update
            // This line of code calls the div_update() function to update the color of the jth div to yellow. The div_update() function takes three parameters: the div element, the height of the div, and the color of the div.

            if(div_sizes[j]>div_sizes[j+1])
            {
                // This line of code checks if the height of the jth div is greater than the height of the j + 1th div. If it is, then the code will execute the next two lines.
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update
                // These two lines of code call the div_update() function to update the color of the jth and j + 1th div to red.

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;
                // These three lines of code swap the heights of the jth and j + 1th divs. 

                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
            }
            div_update(divs[j],div_sizes[j], "blue");//Color update
        }
        div_update(divs[j],div_sizes[j], "green");//Color update
    }
    div_update(divs[0],div_sizes[0], "green");//Color update

    enable_buttons();
}
