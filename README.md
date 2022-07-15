This project is an Etch-a-sketch/sketchpad recreation. I am hoping that it will solidify my understanding of DOM manipulation with JavaScript. 

The process: 

I started off by making the UI using mainly HTML and CSS, but also a bit of JavaScript to create the grid of divs using a nested for loop.

I created two functions: drawGrid, which takes a gridSize as parameter and draws the corresponding grid, and removeGrid, which gets a nodelist of all the div grids, iterates through the list, and removes each div.

To create the range slider functionality, I used the oninput event and called both drawGrid (with the new input as a parameter), and removeGrid. The oninput event occurs anytime the input is changed at all (so even while the slider is moving), while the onchange event occurs only when the input changes from one value to another. I used oninput because I think it creates a more dynamic look as you can see the grid moving when you change the slider.