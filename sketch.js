"use strict";

const sketchpad = document.querySelector('.sketchpad');

// using slice() to get rid of the last two chars and the unary plus to convert from string to number (eg. 560px -> 560)
const sketchpadHeight = +(sketchpad.style.height.slice(0, -2));
const sketchpadWidth = +(sketchpad.style.width.slice(0, -2));

let slider = document.querySelector('.slider');
let sliderValue = slider.value;

// draws initial grid (sliderValue is set to a default of 15)
drawGrid(sliderValue);

slider.oninput = function() {
    removeGrid();
    drawGrid(this.value);
}

// getting all the buttons + adding their events
const clearBtn = document.querySelector('.clear');
clearBtn.onclick = function() { clearGrid() }

const eraseBtn = document.querySelector('.erase');
eraseBtn.onclick = function() { erasePen() }

const bwBtn = document.querySelector('.bw');
bwBtn.onclick = function() { drawPen() }

const rainbowBtn = document.querySelector('.rainbow');
rainbowBtn.onclick = function() { drawRainbow() }

/****************************************** all the functions ******************************************/

function drawGrid(gridSize) {
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

            // default pen setting is black/white
            currDiv.addEventListener('mouseover', event => event.target.style.backgroundColor = 'black');
        }
    }
}

function removeGrid() {
    let sketchpadGrid = document.querySelectorAll('.sketchpad div');
    sketchpadGrid.forEach(element => sketchpad.removeChild(element));
}

function clearGrid() {
    let sketchpadGrid = document.querySelectorAll('.sketchpad div');
    sketchpadGrid.forEach(element => element.style.backgroundColor = 'transparent');
}

function erasePen() {
    let sketchpadGrid = document.querySelectorAll('.sketchpad div');
    sketchpadGrid.forEach(element => element.addEventListener('mouseover', event => event.target.style.backgroundColor = 'transparent'));
}

function drawPen() {
    let sketchpadGrid = document.querySelectorAll('.sketchpad div');
    sketchpadGrid.forEach(element => element.addEventListener('mouseover', event => event.target.style.backgroundColor = 'black'));
}

function drawRainbow() {
    let sketchpadGrid = document.querySelectorAll('.sketchpad div');
    sketchpadGrid.forEach(element => element.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    }));
}

function randomNum() {
    return Math.floor( Math.random() * 255 );
}
