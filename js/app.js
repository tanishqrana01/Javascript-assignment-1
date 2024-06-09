// Arrays of words for generating sentences
const nouns1 = ["dog", "cat", "elephant", "giraffe", "zebra"];
const verbs = ["jumps", "runs", "flies", "swims", "walks"];
const adjectives = ["quick", "lazy", "happy", "sad", "angry"];
const nouns2 = ["fence", "river", "house", "car", "tree"];
const places = ["in the park", "on the moon", "under the sea", "in the forest", "in the city"];

let textToSpeak = ""; // Variable to hold the generated sentence

// Event listeners for each word category
document.getElementById('noun1').addEventListener('click', () => {
    let word = getRandomWord(nouns1);
    textToSpeak += word + " ";
    speakNow(word); // Speak the selected word
    updateStoryOutput(); // Update displayed sentence
});

document.getElementById('verb').addEventListener('click', () => {
    let word = getRandomWord(verbs);
    textToSpeak += word + " ";
    speakNow(word);
    updateStoryOutput();
});

document.getElementById('adjective').addEventListener('click', () => {
    let word = getRandomWord(adjectives);
    textToSpeak += word + " ";
    speakNow(word);
    updateStoryOutput();
});

document.getElementById('noun2').addEventListener('click', () => {
    let word = getRandomWord(nouns2);
    textToSpeak += word + " ";
    speakNow(word);
    updateStoryOutput();
});

document.getElementById('place').addEventListener('click', () => {
    let word = getRandomWord(places);
    textToSpeak += word + " ";
    speakNow(word);
    updateStoryOutput();
});

// Speak the generated sentence when the "Speak" button is clicked
document.getElementById('speak').addEventListener('click', () => {
    speakNow(textToSpeak);
});

// Generate a random sentence when the "Generate" button is clicked
document.getElementById('generate').addEventListener('click', () => {
    textToSpeak = getRandomWord(nouns1) + " " + getRandomWord(verbs) + " " + getRandomWord(adjectives) + " " + getRandomWord(nouns2) + " " + getRandomWord(places);
    updateStoryOutput();
    speakNow(textToSpeak);
});

// Reset the sentence when the "Reset" button is clicked
document.getElementById('reset').addEventListener('click', () => {
    textToSpeak = "";
    updateStoryOutput();
});

// Function to get a random word from an array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to update the displayed sentence
function updateStoryOutput() {
    document.getElementById('storyOutput').innerText = textToSpeak;
}

// Function to speak the provided text
function speakNow(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onstart = () => console.log('Speech started'); // Log when speech starts
        utterance.onend = () => console.log('Speech ended'); // Log when speech ends
        utterance.onerror = (event) => console.error('Speech error', event); // Log if there's an error in speech synthesis
        window.speechSynthesis.speak(utterance); // Speak the provided text
    } else {
        console.error('Speech Synthesis not supported in this browser.'); // Log if speech synthesis is not supported
    }
}
