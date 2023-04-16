function optionsLoaded() {
    let setButton = document.getElementById("setOptions");
    let restore = document.getElementById("restore");

    //sets the default options to user's choices
    function setDefaultOptions(event) {
        event.preventDefault();

        //get each option element
        let defaultWpm = document.getElementById("speed");
        let defaultBackColor = document.getElementById("backColor");
        let defaultFontColor = document.getElementById("fontColor");

        browser.storage.sync.set({
            options: {
                wpm: defaultWpm.value,
                background: defaultBackColor.value,
                font: defaultFontColor.value
            }
        });

    }

    //restores all options to default values
    function restoreDefaults(event){
        event.preventDefault;

        browser.storage.sync.set({
            options: {
                wpm: 240,
                background: "#2780e3",
                font: "#ffffff"
            }
        });
    }

    setButton.addEventListener("click", setDefaultOptions);
    restore.addEventListener("click", restoreDefaults);
}

document.addEventListener("DOMContentLoaded", optionsLoaded);
