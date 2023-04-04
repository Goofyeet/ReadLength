//counts the number of words in the visual text
function countWords(port) {
    let myPort = port;
    let visualText = document.querySelector("body").innerText;

    let count = 0;
    let newWord = true;

    //loop through every character of visual text
    for (i = 0; i < visualText.length; i++) {
        //check if character is a whitespace character
        if (visualText[i].match("\\s")) {
            newWord = true;
        }
        else if (newWord) {
            count++;
            newWord = false;
        }
    }

    //send word count to popup script
    myPort.postMessage(count);
}
browser.runtime.onConnect.addListener(countWords);
