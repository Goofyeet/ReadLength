//event handler for DOMContentLoaded
function contentLoaded() {
    function receiveMessage(wordCount) {
        //displays the number of words on the page
        let numWords = document.getElementById("numWords");
        numWords.innerText = " " + wordCount;

        //calculates the time needed to read
        let speed = document.getElementById("wpmValue").innerText;
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

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    function connectToContent(activeTab) {
        //connect to the content.js script for that tab
        let myPort = browser.tabs.connect(activeTab[0].id, { name: "popup" });

        myPort.onMessage.addListener(receiveMessage);
    }

    //get the tab id of the active tab
    browser.tabs.query({ currentWindow: true, active: true }).then(connectToContent, onError);
}

document.addEventListener("DOMContentLoaded", contentLoaded);
