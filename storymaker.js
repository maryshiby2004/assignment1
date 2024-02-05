

const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");


const choosenNoun1Display = document.getElementById("choosenNoun1");
const choosenVerbDisplay = document.getElementById("choosenVerb");
const choosenAdjectiveDisplay = document.getElementById("choosenAdjective");
const choosenNoun2Display = document.getElementById("choosenNoun2");
const choosenSettingDisplay = document.getElementById("choosenSetting");


const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyDisplay = document.getElementById("story");


const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher" , "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like" , "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking" , "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug","worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass","in my shoes"];


let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions */

function chooseWord(category, outputId) {
    const randomIndex = Math.floor(Math.random() * 5);
    const chosenWord = getCategory(category)[randomIndex];
    document.getElementById(outputId).textContent = chosenWord;
}

function getCategory(category) {
    switch (category) {
        case 'noun1':
            return nouns1;
        case 'verb':
            return verbs;
        case 'adjective':
            return adjectives;
        case 'noun2':
            return nouns2;
        case 'setting':
            return settings;
        default:
            return [];
    }
}

function noun1_on_click() {
    chooseWord('noun1', 'choosenNoun1');

}

function verb_on_click() {
    chooseWord('verb', 'choosenVerb');

}

function adjective_on_click() {
    chooseWord('adjective', 'choosenAdjective');

}

function noun2_on_click() {
    chooseWord('noun2', 'choosenNoun2');

}

function setting_on_click() {
    chooseWord('setting', 'choosenSetting');

}

function addStudentId() {
    const studentId = prompt("Enter your student ID/name:");
    document.getElementById("studentId").textContent = `Student ID/Name:Alana Mary Shiby/200559969`;
}

function showStory() {
    const story = `${choosenNoun1Display.textContent} ${choosenVerbDisplay.textContent} ${choosenAdjectiveDisplay.textContent} ${choosenNoun2Display.textContent} ${choosenSettingDisplay.textContent}`;
    storyDisplay.textContent = story;
}

function randomStory() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    showStory();
}


noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", showStory);
randomButton.addEventListener("click", randomStory);
