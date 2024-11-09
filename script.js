let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load', () => {
    wishMe();
});

// Check if Speech Recognition is supported
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (speechRecognition) {
    let recognition = new speechRecognition();

    // Event listener for recognition results
    recognition.onresult = (event) => {
        let currentIndex = event.resultIndex;
        let transcript = event.results[currentIndex][0].transcript;
        content.innerText = transcript;
        takeCommand(transcript.toLowerCase());
    };

    // Error handling for speech recognition
    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        content.innerText = "Error: " + event.error;
    };

    // Start recognition when the button is clicked
    btn.addEventListener("click", () => {
        recognition.start();
        btn.style.display = "none";
        voice.style.display = "block";
    });
} else {
    // Display an error if Speech Recognition is not supported
    content.innerText = "Speech Recognition not supported in this browser.";
    console.error("Speech Recognition not supported in this browser.");
}

function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";

    if (message.includes("hello")) {
        speak("Hello Sir, what can I help you with?");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com/", "_blank");
    } else if (message.includes("open gpt")) {
        speak("Opening ChatGPT...");
        window.open("https://chat.openai.com/", "_blank");
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://www.facebook.com/", "_blank");
    } else if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://www.instagram.com/", "_blank");
    } else if (message.includes("who are you")) {
        speak("I am AI Assistant, created by Abhinandan Saikia.");
    } else if (message.includes("your gf name")) {
        speak("Mera to koi girlfriend nahi hai...");
    } else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://www.google.com/", "_blank");
    } else if (message.includes("open gmail")) {
        speak("Opening Gmail...");
        window.open("https://mail.google.com/", "_blank");
    } else if (message.includes("open twitter")) {
        speak("Opening Twitter...");
        window.open("https://twitter.com/", "_blank");
    } else if (message.includes("open amazon")) {
        speak("Opening Amazon...");
        window.open("https://www.amazon.com/", "_blank");
    } else if (message.includes("open netflix")) {
        speak("Opening Netflix...");
        window.open("https://www.netflix.com/", "_blank");
    } else if (message.includes("open linkedin")) {
        speak("Opening LinkedIn...");
        window.open("https://www.linkedin.com/", "_blank");
    } else if (message.includes("open wikipedia")) {
        speak("Opening Wikipedia...");
        window.open("https://www.wikipedia.org/", "_blank");
    } else if (message.includes("open spotify")) {
        speak("Opening Spotify...");
        window.open("https://open.spotify.com/", "_blank");
    } else if (message.includes("open github")) {
        speak("Opening GitHub...");
        window.open("https://github.com/", "_blank");
    } else if (message.includes("open stack overflow")) {
        speak("Opening Stack Overflow...");
        window.open("https://stackoverflow.com/", "_blank");
    } else if (message.includes("open drive") || message.includes("open google drive")) {
        speak("Opening Google Drive...");
        window.open("https://drive.google.com/", "_blank");
    } else if (message.includes("open calendar")) {
        speak("Opening Google Calendar...");
        window.open("https://calendar.google.com/", "_blank");
    } else if (message.includes("open maps") || message.includes("open google maps")) {
        speak("Opening Google Maps...");
        window.open("https://www.google.com/maps", "_blank");
    } else if (message.includes("what is your name")) {
        speak("I'm your virtual assistant, here to help you with anything you need.");
    } else if (message.includes("thank you")) {
        speak("You're very welcome! I'm happy to help.");
    } else if (message.includes("good morning")) {
        speak("Good morning! Hope you have a fantastic day ahead.");
    } else if (message.includes("good afternoon")) {
        speak("Good afternoon! How can I assist you?");
    } else if (message.includes("good evening")) {
        speak("Good evening! What would you like to do tonight?");
    } else if (message.includes("good night")) {
        speak("Good night! Sweet dreams and see you soon.");
    } else if (message.includes("what's the time")) {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        speak(`The current time is ${hours}:${minutes}`);
    } else if (message.includes("what's the date today") || message.includes("what is today's date")) {
        let today = new Date();
        let date = today.toDateString();
        speak(`Today's date is ${date}`);
    } else if (message.includes("tell me a joke")) {
        speak("Why did the computer go to the doctor? Because it had a virus! Haha!");
    } else if (message.includes("inspire me") || message.includes("motivate me")) {
        speak("Remember, every day is a fresh start. Believe in yourself and keep pushing forward!");
    } else if (message.includes("tell me a fact")) {
        speak("Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.");
    } else if (message.includes("repeat after me")) {
        let repeatText = message.replace("repeat after me", "").trim();
        if (repeatText) {
            speak(repeatText);
        } else {
            speak("What would you like me to repeat?");
        }
    }  else {
        speak(`This is what i found on internet regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`) 
    }
}
