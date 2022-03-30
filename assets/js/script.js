// Mouseover event for Home image
let elliotImage = document.getElementById("elliot-image");
elliotImage.addEventListener("mouseover", function(){
    this.src="assets/images/mr-robot-home-light-mode-image.PNG";
});

// Mouseout event for Home image
elliotImage.addEventListener("mouseout", function(){
    this.src="assets/images/elliot-alderson-home-light-mode-image.PNG";
});

function isValid() {
    let password = document.getElementById("password").value;
    if (password == "whiterose") {
        alert("What I'm about to tell you is top secret. A conspiracy bigger than all of us. There's a powerful group of people out there that are secretly running the world. I'm talking about the guys no-one knows about, the ones that are invisible. The top 1% of the top 1%, the guys that play God without permission. You and I are going to save the world. Welcome to fsociety.")
    } else {
        alert("Goodbye, friend.")
    }
}