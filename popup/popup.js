//event handler for DOMContentLoaded
function contentLoaded() {


    function receiveMessage(wordCount) {
        //displays the number of words on the page
        let numWords = document.getElementById("numWords");
        numWords.innerText = " " + wordCount;

        //calculates the time needed to read
        let speed = document.getElementById("speed");
        displayTime(Math.floor(wordCount / speed.value));

        function calculateTime(event) {
            let wpm = event.target.value;

            lengthMinutes = Math.floor(wordCount / wpm);

            displayTime(lengthMinutes);
        }

        function displayTime(lengthMinutes) {
            //displays the time to read the web page
            let time = document.getElementById("time");

            if (lengthMinutes == "Infinity") {
                lengthMinutes = "";
            }
            else if (lengthMinutes >= 60) {
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

        speed.addEventListener("input", calculateTime);
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    function connectToContent(activeTab) {
        //connect to the content.js script for that tab
        let myPort = browser.tabs.connect(activeTab[0].id, { name: "popup" });

        myPort.onMessage.addListener(receiveMessage);
    }

    //set the popup options
    function setPopupOptions() {
        let options = browser.storage.sync.get("options");

        options.then(setOptions, setDefault);

        function setOptions(values) {
            let wpm = values.options.wpm;
            let backColor = values.options.background;
            let fontColor = values.options.font;

            document.getElementById("speed").value = wpm;
            let body = document.getElementsByTagName("body")[0];

            body.style.backgroundColor = backColor;
            body.style.color = fontColor;
        }

        //error getting options, set default options
        function setDefault() {
            document.getElementById("speed").value = 240;
            let body = document.getElementsByTagName("body")[0];

            body.style.backgroundColor = "#2780e3";
            body.style.color = "#ffffff";
        }
    }

    setPopupOptions();

    //get the tab id of the active tab
    browser.tabs.query({ currentWindow: true, active: true }).then(connectToContent, onError);
}


document.addEventListener("DOMContentLoaded", contentLoaded);
