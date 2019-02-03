document.addEventListener('DOMContentLoaded', function(){
document.getElementById("button").addEventListener('click',script);
},false);

function script() {
title=document.getElementById("title").value
text=document.getElementById("text");
text.textContent=title;

}