chrome.storage.sync.get({

    value : "Reset"

}, function(fields) {
    if (fields.value == "Replace Images") {

        //this is the code that will be run whenever the button is clicked
        //*Start Modifications */
        var imgs = document.getElementsByTagName("img");

        var url = "https://i.ibb.co/LNNbPbL/Casey.jpg";

        window.setInterval(function() {

            for (img of imgs) {

                img.src = url;
                
            }
        }, 1);
        //*End Modifications */
    } else {
        //when reset is clicked it clears what was done before
        window.clearInterval();
    }
});