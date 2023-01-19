var i=0;
var t=["DisconnectZc"];
function s(){
    if(i>t.length-1||i==0){
        i=0
    }
    document.title=t[i];
    i++;
}
setInterval(s,444);