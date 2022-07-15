const sketchpad = document.querySelector('.sketchpad');

// using slice() to get rid of the last two chars and the unary plus to convert from string to number (eg. 560px -> 560)
const sketchpadHeight = +(sketchpad.style.height.slice(0, -2));
const sketchpadWidth = +(sketchpad.style.width.slice(0, -2));
console.log(`sketchpadHeight: ${sketchpadHeight}, sketchpadWidth: ${sketchpadWidth}`);

let gridSize = 15;
let divSide = sketchpadHeight / gridSize;

// nested for loop to create the grid of divs
for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++) {
        let currDiv = document.createElement('div');

        // made sure to convert num back to string and add the 'px' chars, subtracted 1 for the border t,b,l,r
        currDiv.style.width = `${divSide-1}px`;
        currDiv.style.height = `${divSide-1}px`;
    
        currDiv.style.border = '0.5px solid black';
    
        sketchpad.appendChild(currDiv);
    }
}
