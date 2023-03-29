//counts the number of words in the visual text
function countWords(text){
    let count = 0;
    let newWord = true;

    //loop through every character of visual text
    for(i = 0; i < text.length; i++){
        if(text[i] === ' '){
            //console.log(i);
            newWord = true;
        }
        else if(newWord){
            count++;
            newWord = false;
        }
    }

    console.log(count);
    return count;
}

let visualText = document.querySelector("body").innerText;

console.log(visualText.length);
countWords(visualText);