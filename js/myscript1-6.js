document.addEventListener('DOMContentLoaded', function(){
script();
},false);

var script = function () {
var today = new Date();
var month = today.getMonth()+1;
var date = document.getElementById("date")
date.textContent="今日は"+today.getFullYear()+"年"+month+"月"+today.getDate()+"日です。"
var isodate =document.getElementById("isodate")
modified = today.toISOString().slice(0,19)+"Z";
isodate.textContent=modified;
}