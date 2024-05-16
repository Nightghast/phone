document.addEventListener("DOMContentLoaded", function() {
    // const icon1Button = document.getElementById("icon1");
    const homeButton = document.getElementById("homeButton");

    const icon1 = document.getElementById("icon1");
    const icon2 = document.getElementById("icon2");
    const icon3 = document.getElementById("icon3");
    const icon4 = document.getElementById("icon4");
    const icon5 = document.getElementById("icon5");
    const icon6 = document.getElementById("icon6");
    const icon7 = document.getElementById("icon7");
    const icon8 = document.getElementById("icon8");
    const icon9 = document.getElementById("icon9");

    var containerDiv = document.getElementById("container");

    const homeDiv = document.querySelector(".home");
    const iconsDiv = document.querySelector(".icons");
    const cameraDiv = document.querySelector(".camera");
    const contactsDiv = document.querySelector(".contacts");
    const mesDiv = document.querySelector(".messages");
    const notepadDiv = document.querySelector(".notepad");
    const spotifyDiv = document.querySelector(".spotify");
    const galleryDiv = document.querySelector(".gallery");
    const youtubeDiv = document.querySelector(".youtube");
    const googleDiv = document.querySelector(".google");
    const flappyDiv = document.querySelector(".flappy");


    // Update time and date every second
    updateTimeAndDate();
    setInterval(updateTimeAndDate, 1000);

    homeButton.addEventListener("click", function() {
        homeDiv.style.display = "none";
        iconsDiv.style.display = "block";
        contactsDiv.style.display = "none";
        mesDiv.style.display = "none";
        cameraDiv.style.display = "none";
        spotifyDiv.style.display = "none";
        galleryDiv.style.display = "none";
        notepadDiv.style.display = "none";
        youtubeDiv.style.display = "none";
        googleDiv.style.display = "none";
        flappyDiv.style.display = "none";
        containerDiv.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.pinimg.com/originals/28/56/c7/2856c73f9a6709b0563b59a9706881f8.gif')";
    });
    icon1.addEventListener("click", function() {
        iconsDiv.style.display = "none";
        contactsDiv.style.display = "block";
    });
    icon2.addEventListener("click", function() {
        iconsDiv.style.display = "none";
        mesDiv.style.display = "block";
    });
    icon3.addEventListener("click", function() {
        iconsDiv.style.display = "none";
        cameraDiv.style.display = "block";
    });
    icon4.addEventListener("click", function() {
        iconsDiv.style.display = "none";
        spotifyDiv.style.display = "block";
    });
    icon5.addEventListener("click", function() {
        iconsDiv.style.display = "none";
        galleryDiv.style.display = "block";
    });
    icon6.addEventListener("click", function() {
        iconsDiv.style.display = "none";
        notepadDiv.style.display = "block";
    });
    icon7.addEventListener("click", function() {
        iconsDiv.style.display = "none";
        youtubeDiv.style.display = "block";
    });
    icon8.addEventListener("click", function() {
        iconsDiv.style.display = "none";
        googleDiv.style.display = "block";
    });
    icon9.addEventListener("click", function() {
        iconsDiv.style.display = "none";
        flappyDiv.style.display = "block";
    });
    
});

//CLOCK UI @ HOME SCREEN
function updateTimeAndDate() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0"); // Add leading zero if needed
    const minutes = now.getMinutes().toString().padStart(2, "0"); // Add leading zero if needed
    const seconds = now.getSeconds().toString().padStart(2, "0"); // Add leading zero if needed
    const timeString = `${hours}:${minutes}:${seconds}`;

    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Add leading zero if needed
    const day = now.getDate().toString().padStart(2, "0"); // Add leading zero if needed
    const dateString = `${year}-${month}-${day}`;

    document.getElementById("currentTime").textContent = timeString;
    document.getElementById("currentDate").textContent = dateString;
}

//FUNCTIONS FOR YOUTUBE AND GOOGLE
const googleQuery = document.querySelector(".google .query");
const searchBtn = document.querySelector(".searchButton");
const youtubeQuery = document.querySelector(".youtube .query");
const searchBtnYT = document.querySelector(".searchButtonYT");

searchBtn.onclick = function(event) {
    event.preventDefault();
    let url = 'https://www.google.com/search?q=' + googleQuery.value;
    window.open(url);
};
searchBtnYT.onclick = function(event) {
    event.preventDefault();
    let url = 'https://www.youtube.com/results?search_query=' + youtubeQuery.value;
    window.open(url);
};

// Select the button elements
const brunoButton = document.getElementById("playBruno");
const closerButton = document.getElementById("playCloser");
const ILYSBButton = document.getElementById("playILYSB");
const summerButton = document.getElementById("playSummer");
const despacitoButton = document.getElementById("playDespacito");

// Create audio objects
const audioBruno = new Audio("sounds/TREASURE.mp3");
const audioCloser = new Audio("sounds/CLOSER.mp3");
const audioILYSB = new Audio("sounds/ILYSB.mp3");
const audioSummer = new Audio("sounds/SUMMER.mp3");
const audioDespacito = new Audio("sounds/DESPACITO.mp3");

let currentAudio = null;
let currentButton = null;

// Define the function that plays/pauses the audio
function toggleMusic(audio, button, trackName) {
    return function() {
        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            currentButton.textContent = `Play`;
            currentAudio.currentTime = 0;
        }

        if (audio.paused) {
            audio.play();
            button.textContent = `Pause`;
            currentAudio = audio;
            currentButton = button;
        } else {
            audio.pause();
            button.textContent = `Play`;
            currentAudio = null;
            currentButton = null;
        }
    };
}

// Attach event listeners to the buttons
brunoButton.addEventListener("click", toggleMusic(audioBruno, brunoButton, "Bruno Mars"));
closerButton.addEventListener("click", toggleMusic(audioCloser, closerButton, "Chainsmoker"));
ILYSBButton.addEventListener("click", toggleMusic(audioILYSB, ILYSBButton, "LANY"));
summerButton.addEventListener("click", toggleMusic(audioSummer, summerButton, "Keshi"));
despacitoButton.addEventListener("click", toggleMusic(audioDespacito, despacitoButton, "J. Bieber"));

const previewImage = document.getElementById('galleryDiv');
const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', () => {
    const reader = new FileReader();
    const file = fileInput.files[0];

    reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        previewImage.appendChild(img);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

//NOTEPAD FEATURE

function saveText() {
    // Get the text from the textarea
    var text = document.getElementById("writeTextarea").value;

    // Create a new div
    var newDiv = document.createElement("div");

    // Create a new paragraph element
    var newParagraph = document.createElement("p");

    // Set the text content of the paragraph to the textarea value
    newParagraph.textContent = text;

    // Append the paragraph to the new div
    newDiv.appendChild(newParagraph);

    // Append the new div to the div with id "saveWrite"
    document.getElementById("saveWrite").appendChild(newDiv);
}