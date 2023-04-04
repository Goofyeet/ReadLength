//counts the number of words in the visual text
function countWords(text){
    let count = 0;
    let newWord = true;

    //loop through every character of visual text
    for(i = 0; i < text.length; i++){
        //check if character is a whitespace character
        if(text[i].match("\\s")){
            newWord = true;
        }
        else if(newWord){
            count++;
            newWord = false;
        }
    }

    console.log(count);

    //send word count to background script
    browser.runtime.sendMessage(count);
}

let visualText = document.querySelector("body").innerText;

console.log(visualText.length);
countWords(visualText);