// Mouseover event for Home image
let elliotImage = document.getElementById("elliot-image");
elliotImage.addEventListener("mouseover", function(){
    this.src="assets/images/mr-robot-home-light-mode-image.PNG";
});

// Mouseout event for Home image
elliotImage.addEventListener("mouseout", function(){
    this.src="assets/images/elliot-alderson-home-light-mode-image.PNG";
});