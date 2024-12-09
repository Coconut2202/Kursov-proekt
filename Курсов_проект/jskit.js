
var randomImages = [
    "logos/honda-logo1.png",
    "logos/honda-logo2.png",
    "logos/honda-logo3.png"
];

function displayRandomImage() {

    var randomIndex = Math.floor(Math.random() * randomImages.length);

    var randomImageElement = document.getElementById("random-image");
    randomImageElement.innerHTML = `<img src="${randomImages[randomIndex]}" alt="Honda Logo" style="max-width: 200px;">`;
}


document.addEventListener("DOMContentLoaded", displayRandomImage);