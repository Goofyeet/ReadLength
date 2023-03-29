//event handler for DOMContentLoaded
function contentLoaded(){
    //displays the number of words on the page
    function displayNumWords(words){
        let numWords = document.getElementById("numWords");
        numWords.innerText = " " + words;
    }
    
    //displays the time to read the web page
    //param: length is the time in minutes : number
    function displayTime(length){
        let time = document.getElementById("time");

        if(length >= 60){
            //at least an hour to read
            let hours = Math.floor(length / 60);
            let minutes = length % 60;
            length = hours +"h " + minutes + "m";
        }
        else if(length < 0){
            //length is negative, something is wrong
            length = "error";
            console.error("The length is negative");
        }
        else if(length == 0){
            //takes less than a minute to read
            length = "< 1m";
        }
        else{
            length += "m";
        }

        time.innerText = " " + length;
    }

    //calculates the time needed to read
    //params: numWords is number of words: number
    //return: the time in minutes : number
    function calculateTime(numWords){
        let speed = document.getElementById("wpmValue").value;
        let lengthMinutes = Math.floor(numWords / speed);
        
        displayTime(lengthMinutes);
    }
    
    function getWpmInput(event){
        const value = event.target.value;
        console.log(value);
    }
    
    let wpm = document.getElementById("wpm");
    wpm.addEventListener("input", getWpmInput);

    /*
    TODO:
    1. retrieve numWords from content/background script
    2. implement a better wpm input 
    */
}

document.addEventListener("DOMContentLoaded", contentLoaded);
