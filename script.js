
const containerSize = 480;

const container = document.querySelector("#container");
    container.style.display = "grid";
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;
    container.style.border = "3px solid black";

const pixels = [];

const clear = document.querySelector("#clear");
    clear.addEventListener("click", e => {
        pixels.forEach(p => p.style.backgroundColor = "#fff");
        createGrid(prompt("Enter new grid size"));
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

        console.log(pixels[i].dataset.darkness);

        pixels[i].addEventListener("mouseenter", function (event){
    
            let hue = Math.ceil(Math.random()*360);
            let saturation = Math.ceil(Math.random()*100);
            let light = 99 - event.target.dataset.darkness;
            
            console.log(event.target.dataset.darkness);
            event.target.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${light}%)`;
            event.target.dataset.darkness = Number(event.target.dataset.darkness) + 10;
        });
    
        container.appendChild(pixels[i]);
    }

}

createGrid(16);


