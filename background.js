function messageReceiver(message){
    //send the word count to the popup script
    browser.runtime.sendMessage(message);
}

browser.runtime.onMessage.addListener(messageReceiver);