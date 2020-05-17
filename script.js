
const containerSize = 480;

const container = document.querySelector("#container");
    container.style.display = "grid";
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

const pixels = [];

const clear = document.querySelector("#clear");
    clear.addEventListener("click", e => {
        pixels.forEach(p => p.style.backgroundColor = "#fff");
    });

const resize = document.querySelector("#resize");
    resize.addEventListener("click", e => {
        pixels.forEach(p => p.style.backgroundColor = "#fff");
        createGrid(document.querySelector("#number").value);
    });

function createGrid (gridSize) {

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    let pixelAmount = gridSize * gridSize;

    //If new size is smaller, removes unnecessary pixels
    while (pixels.length > pixelAmount) {
        pixels.pop().remove();
    }

    //First time it's called pixels.length is 0, if new size is bigger it adds necessary pixels
    for (let i = pixels.length; i < pixelAmount; i++){

        pixels[i] = document.createElement("div");
        pixels[i].style.backgroundColor = "#fff";
        pixels[i].dataset.darkness = "0";
        pixels[i].dataset.saturation = "0";

        pixels[i].addEventListener("mouseenter", function (event){
    
            let hue = Math.ceil(Math.random()*360);
            let saturation = Math.ceil(Math.random()*10) + event.target.dataset.saturation;
            let light = 90 - event.target.dataset.darkness;
            
            event.target.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${light}%)`;
            event.target.dataset.darkness = Number(event.target.dataset.darkness) + 10;
            event.target.dataset.saturation = Number(event.target.dataset.saturation) + 10;
        });
    
        container.appendChild(pixels[i]);
    }

}

createGrid(16);


