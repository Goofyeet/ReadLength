//event handler for DOMContentLoaded
function contentLoaded(){
    //displays the number of words on the page
    function displayNumWords(words){
        let numWords = document.getElementById("numWords");
        numWords.textContent += " " + words;
    }
    
    //displays the time to read the web page
    function displayTime(length){
        let time = document.getElementById("time");
        time.textContent += " " + length;
    }

    //calculates the time needed to read
    //return: 
    function calculateTime(speed, numWords){
        let lengthMinutes = numWords / speed;

        console.log("Time to read: " + lengthMinutes);
        
    }
    
    function getWpmInput(event){
        const value = event.target.value;
        console.log(value);
    }
    
    let wpm = document.getElementById("wpm");
    wpm.addEventListener("input", getWpmInput);

    displayNumWords(10);
    calculateTime(238, 409);
}

document.addEventListener("DOMContentLoaded", contentLoaded);
