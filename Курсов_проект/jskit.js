
var randomImages = [
    "logos/honda-logo1.png",
    "logos/honda-logo2.png",
    "logos/honda-logo3.png"
];

function displayRandomImage() {
    // Generate a random index based on the number of images
    var randomIndex = Math.floor(Math.random() * randomImages.length);

    // Select the random image
    var randomImageElement = document.getElementById("random-image");
    randomImageElement.innerHTML = `<img src="${randomImages[randomIndex]}" alt="Honda Logo" style="max-width: 200px;">`;
}

// Run the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", displayRandomImage);