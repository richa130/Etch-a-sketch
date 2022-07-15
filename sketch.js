const sketchpad = document.querySelector('.sketchpad');

// using slice() to get rid of the last two chars and the unary plus to convert from string to number (eg. 560px -> 560)
const sketchpadHeight = +(sketchpad.style.height.slice(0, -2));
const sketchpadWidth = +(sketchpad.style.width.slice(0, -2));

let divSide = sketchpadHeight / 30;
console.log(divSide);
let gridWidth = Math.floor(sketchpadWidth / divSide);
console.log(gridWidth);

// nested for loop to create the grid of divs
for(let i = 0; i < 30; i++) {
    for(let j = 0; j < gridWidth; j++) {
        let currDiv = document.createElement('div');
    
        // inline-block allows the divs to appear one after the other, and allows editing of height/width
        currDiv.style.display = 'inline-block';
    
        // made sure to convert num back to string and add the 'px' chars; -2 for the border t,b,l,r
        currDiv.style.width = `${divSide-2}px`;
        currDiv.style.height = `${divSide-2}px`;
    
        // makes the inline-block rows not have a gap
        currDiv.style.marginBottom = '-7px'; 
    
        currDiv.style.border = '1px solid black';
    
        sketchpad.appendChild(currDiv);
    }
}
