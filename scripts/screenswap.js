// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Some early variable initialization
const zotsMode = document.getElementById("zotsMode");
const zotsScreen = document.getElementById("zotsScreen");
const zotsText = document.getElementById("zotsScreenText");

const creditsMode = document.getElementById("creditsMode");
const creditsScreen = document.getElementById("creditsScreen");
const creditsText = document.getElementById("creditsScreenText");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Default screen (when user first loads page)
zotsScreen.style.display = "block";
creditsScreen.style.display = "none";

let currentScreen = zotsScreen;
let currentMode = zotsMode;
let currentText = zotsText;
changeScreens(currentScreen, currentMode, currentText);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// On tab click, switch screens
zotsMode.addEventListener("click", clickedZots => {
    changeScreens(zotsScreen, zotsMode, zotsText);
});

creditsMode.addEventListener("click", clickedCredits => {
    changeScreens(creditsScreen, creditsMode, creditsText);
});

function changeScreens(screen, mode, textBox){
    currentScreen.style.display = "none";
    screen.style.display = "block";

    currentMode.className = "tab";
    mode.className = "activeTab";

    currentText = textBox;
    currentScreen = screen;
    currentMode = mode;
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Let user choose the amount of zots
testChar1 = "A".charCodeAt();
testChar2 = "a".charCodeAt();
testCharDifference = testChar1 - testChar2;
let zotsArr = ["Zot", "Zot", "Zot"]; // Stores current zots

// Returns an array of zots with various cases
function makeZots(num){
    let arr = [];
    for ( i = 0; i < num; i++ ){
        arr.push( makeZot() );
    }
    return arr;
}

// Generates a zot of random cases
function makeZot(){
    let str = "";
    str += randCase("Z")
    str += randCase("O")
    str += randCase("T")
    if ( Math.floor(Math.random()*2) == 1 ){
        str += randCase("s");
    }
    return str;
}

// If capitalized letter is passed in, then 50/50 chance to return it as a lowercase letter.
function randCase(character){
    charCode = character.charCodeAt();

    // If the character is from A-Z
    if ( testChar1 < charCode && charCode < testChar1+26 ){
        // If the character code is the code of an upper case alphabetic character
        if ( testChar1 < charCode && charCode < testChar1+26 ){
            if ( Math.floor(Math.random()*2) == 0 ){
                // Return upper case
                return String.fromCharCode(charCode);
            }
            else{
                // Return lower case
                return String.fromCharCode(charCode - testCharDifference);
            }
        }
    }
    return character;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// On button click, create new prompt
const promptButton = document.getElementById("promptButton");
const numZotsField = document.getElementById("numZots");

//Global Variable for total Zot Completed
window.totalZotCompleted = 0;
var currentZot = 0;

promptButton.addEventListener("click", event => {
    switch (currentScreen) {
        case zotsScreen:
            // This is an array
            const numZots = parseInt(numZotsField.value);
            currentZot = numZots;
            numZotsField.value = "";
            if ( 1 <= numZots && numZots <= 100 ){
                zotsArr = makeZots(numZots);
                // Join function breaks array into string separated by spaces
                zotsText.textContent = zotsArr.join(' ');
                word_counter = 0;
                letter_counter = 0;

                wordsLeft = zotsArr.length;
                wordsTotal = zotsArr.length;
                correctCounter = 0;
                incorrectCounter = 0;
                wordsLeftAmount.textContent = wordsLeft;
                correctAmount.textContent = correctCounter;
                incorrectAmount.textContent = incorrectCounter;
                currentProg = 0;
                progressBar.style.height = 0 + "%";
            }
            break;
        case creditsScreen:
            break;
    };
});

function removeFirstZot(){
    if ( zotsArr.length != 0 ){
        zotsArr.shift()
        zotsText.textContent = zotsArr.join(' ');
    }
    if (zotsArr.length == 0) {
        window.totalZotCompleted = currentZot;
        currentZot = 0;
    }
    return zotsArr;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Counters
let correctCounter = 0;
let incorrectCounter = 0;
let wordsLeft = 3;
let wordsTotal = 3;

const correctAmount = document.getElementById("correctAmount")
const incorrectAmount = document.getElementById("incorrectAmount")
const wordsLeftAmount = document.getElementById("wordsLeftAmount")
wordsLeftAmount.textContent = wordsLeft;

let word_counter = 0;
let letter_counter = 0;

let text_typed = document.getElementById("text_typed");

let word = "";
let symbols = ['.', ',', '/', '-', '?', '!', '(', ')', ':', ';', '#', '@', '%'];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Key capture functionality
text_typed.addEventListener("keydown", (event) => {
    const key = event.key;
    const code = event.keyCode;

    //space and enter
    if ( code == 32 || code == 13)
    {
        if ( zotsArr.length != 0 ){

            if ( word == zotsArr[0] ){
                correctCounter += 1;
                correctAmount.textContent = correctCounter;
            }
            else{
                incorrectCounter += 1;
                incorrectAmount.textContent = incorrectCounter;
            }

            wordsLeft -= 1;
            wordsLeftAmount.textContent = wordsLeft;

            word_counter++;
            text_typed.innerHTML = "";
            word = "";
            removeFirstZot();
            changeProgress(1);
        }
        
        letter_counter = 0;
        text_typed.innerHTML = "";
        word = "";
    }

    //backspace
    else if (code == 8)
    {
        if (letter_counter > 0)
        {
            word = word.slice(0,-1);
            letter_counter--;
                if ( word == zotsArr[0].substring(0,letter_counter))
                {
                    text_typed.style.color = "green";
                }
                else
                {
                    text_typed.style.color = "red";
                }
            }
    }

    //alphanumeric or special symbol
    else if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (symbols.includes(key)))
    {
        letter_counter++;
        word += key;

        if ( zotsArr.length != 0 ){
            if ( word == zotsArr[0].substring(0,letter_counter))
            {
                text_typed.style.color = "green";
            }
            else
            {
                text_typed.style.color = "red";
            }
        }
    }
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Progress bar functionality
const progressBar = document.getElementById("progressFilled");

// Changes progress bar
let currentProg = 0;
function changeProgress(progress){
    currentProg += (progress / wordsTotal);
    progressBar.style.height = (currentProg*100 + '%');
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// scrolls to the top of the screen
function toTop() {
    window.scrollTo(0, 0);
}