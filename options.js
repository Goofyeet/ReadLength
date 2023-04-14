function optionsLoaded(){
    let setButton = document.getElementById("setOptions");

    function setDefaultOptions(event){
        event.preventDefault();

        let defaultWpm = document.getElementById("speed");
        let defaultBackColor = document.getElementById("backColor");
        let defaultFontColor = document.getElementById("fontColor");
    }

    setButton.addEventListener("click", setDefaultOptions);
}

document.addEventListener("DOMContentLoaded", optionsLoaded);
