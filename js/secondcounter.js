var timeleft = 10;
var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
    }
    document.getElementById("progressBar").value = 10 - timeleft;
    timeleft -= 1;
}, 1000);
<progress value="0" max="10" id="progressBar"></progress>