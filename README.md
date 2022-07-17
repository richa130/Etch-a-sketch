This project solidified my understanding of DOM manipulation and event listeners in JavaScript. 

Link to project: [https://richa130.github.io/etch-a-sketch/](https://richa130.github.io/etch-a-sketch/)

The process: 

I started off by making the UI using mainly HTML and CSS, but also a bit of JavaScript to create the grid of divs using a nested for loop.

I created two functions: drawGrid, which takes a gridSize as parameter and draws the corresponding grid, and removeGrid, which gets a nodelist of all the div grids, iterates through the list, and removes each div.

To create the range slider functionality, I used the oninput event and called both drawGrid (with the new input as a parameter), and removeGrid. The oninput event occurs anytime the input is changed at all (so even while the slider is moving), while the onchange event occurs only when the input changes from one value to another. I used oninput because I think it creates a more dynamic look.

The erase, draw, and rainbow buttons all had the same idea, which was to get a nodelist of all the divs, and then iterate through them and add an onmouse eventListener that changed the background color of the div to either transparent, black, or a random rgb value. The clear button just changed the background color for every div to transparent w/out any eventListener.


