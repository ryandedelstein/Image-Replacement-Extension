window.addEventListener("DOMContentLoaded", function() {
    chrome.storage.sync.get({
        value : "Reset"
    }, function(fields) {
        if (document.getElementById("replace")) {
            if(fields.value == "Replace Images") {
                document.getElementById("replace").value = "Reset";
            } else {
                document.getElementById("replace").value = "Replace Images";
            }
        }
    });
});
if (document.getElementById("replace")) {
    document.getElementById("replace").addEventListener("click", function() {
        chrome.storage.sync.set({
            value : document.getElementById("replace").value
        }, function(fields) {
            window.location.reload();
        });
    });
}