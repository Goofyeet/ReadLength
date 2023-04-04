//event handler for DOMContentLoaded
function contentLoaded() {
    let wpm = document.getElementById("wpm");
    wpm.addEventListener("input", getWpmInput);

    browser.runtime.onMessage(receiveMessage);

    function receiveMessage(wordCount) {
        //displays the number of words on the page
        let numWords = document.getElementById("numWords");
        numWords.innerText = " " + wordCount;

        //calculates the time needed to read
        let speed = document.getElementById("wpmValue").value;
        let lengthMinutes = Math.floor(wordCount / speed);

        //displays the time to read the web page
        let time = document.getElementById("time");

        if (lengthMinutes >= 60) {
            //at least an hour to read
            let hours = Math.floor(lengthMinutes / 60);
            let minutes = lengthMinutes % 60;
            lengthMinutes = hours + "h " + minutes + "m";
        }
        else if (lengthMinutes < 0) {
            //lengthMinutes is negative, something is wrong
            lengthMinutes = "error";
            console.error("The length is negative");
        }
        else if (lengthMinutes == 0) {
            //takes less than a minute to read
            lengthMinutes = "< 1m";
        }
        else {
            lengthMinutes += "m";
        }

        time.innerText = " " + lengthMinutes;
    }

    function getWpmInput(event) {
        const value = event.target.value;
        console.log(value);
    }
}

document.addEventListener("DOMContentLoaded", contentLoaded);
