// Variables for mouseover/mouseout and dark mode toggle switch
let isDark = false;
let elliotImage = document.getElementById("elliot-image");
let checkbox = document.getElementById("checkbox");

// Mouseover event for Home image
elliotImage.addEventListener("mouseover", function(){
    if (isDark == false) {
        this.src="assets/images/mr-robot-home-light-mode-image.jpg";
    }
});

// Mouseout event for Home image
elliotImage.addEventListener("mouseout", function(){
    if (isDark == false) {
        this.src="assets/images/elliot-alderson-home-light-mode-image.png";
    }
});

// Dark mode toggle switch => Partial sources: Florin Pop & Paulina Surazynska
checkbox.addEventListener("change", function(){
    isDark = !isDark;
    document.body.classList.toggle("dark-mode"); {
        if (isDark == true) {
            elliotImage.src="assets/images/elliot-alderson-home-dark-mode-image.png";
        } else {
            elliotImage.src="assets/images/elliot-alderson-home-light-mode-image.png";
        }
    }
});

// Alert method for Final Test sub-section => Partial source: Stack Overflow
function isValid() {
    let password = document.getElementById("password").value;
    if (password == "whiterose") {
        alert("What I'm about to tell you is top secret. A conspiracy bigger than all of us. There's a powerful group of people out there that are secretly running the world. I'm talking about the guys no-one knows about, the ones that are invisible. The top 1% of the top 1%, the guys that play God without permission. You and I are going to save the world. Welcome to fsociety.");
    } else {
        alert("Goodbye, friend.");
    }
}
document.getElementById('sendTest').addEventListener('click', function(){
    isValid();
});

// To get the information from the form => Partial source: EmailJS
document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const serviceElement = document.getElementById('services');
    const service = serviceElement.options[serviceElement.selectedIndex].text;
    const budgetElement = document.getElementById('budget');
    const budget = budgetElement.options[budgetElement.selectedIndex].text;
    const timeframeElement = document.getElementById('timeframe');
    const timeframe = timeframeElement.options[timeframeElement.selectedIndex].text;
    const additionalInformation = document.getElementById('additionalInformation').value;
    const templateParams = {
        to_name: name,
        email: email,
        service: service,
        budget: budget,
        timeframe: timeframe,
        additionalInformation: additionalInformation
    };

    // To reset the form => Source: Borislav Hadzhiev
    document.getElementById('contactForm').reset();

    // To send the email => Partial source: EmailJS
    emailjs.send('service_yvo76ku', 'template_968r6ml', templateParams)
    .then(function(response){
        console.log('SUCCESS!', response.status, response.text);
        window.location.replace("contact-form-confirmation-message.html"); // Source: W3Schools
    }, function(error){
        console.log('FAILED...', error);
    });
    console.log('form info ' + name + ' ' + email + ' ' + service);
    return false;
});