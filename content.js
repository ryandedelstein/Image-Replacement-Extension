chrome.storage.sync.get({
    value : "Reset"
}, function(fields) {
    if (fields.value == "Replace Images") {
        //this is the code that will be run whenever 
        var imgs = document.getElementsByTagName("img");
        var url = "https://corporate.comcast.com/media/img/original/2019/02/corporate_Official-Comcast-Logo.png";
        window.setInterval(function() {
            for (img of imgs) {
                img.src = url;
            }
        }, 3000);
    } else {
        window.clearInterval();
    }
});