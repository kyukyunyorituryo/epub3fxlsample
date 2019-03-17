var pagexhtml='<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="ja" >\n<head>\n<meta charset="UTF-8"/>\n<title>作品名</title>\n<link rel="stylesheet" type="text/css" href="../style/fixed-layout-jp.css"/>\n<meta name="viewport" content="width=848, height=1200"/>\n</head>\n<body>\n<div class="main">\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 848 1200">\n<image width="848" height="1200" xlink:href="../image/i-002.jpg"/>\n</svg>\n</div>\n</body>\n</html>';
var coverFO=[];

document.addEventListener('DOMContentLoaded', function(){
document.getElementById("textareaid").textContent=pagexhtml;
imageOption();
document.getElementById("button").addEventListener('click',rewritePage);
},false);

function rewritePage(){
//ページXHTML　pagexhtml
//pagexhtmlの初期設定
//繰り返し page1~imgFO.lengthまで
var pagexhtmlXml = (new DOMParser()).parseFromString(pagexhtml, 'text/xml');
pagexhtmlXml.querySelector('title').textContent=$("#title").val();
var viewport = pagexhtmlXml.querySelector("meta[content]");
var svg = pagexhtmlXml.querySelector("svg[viewBox]");
var imagesize = pagexhtmlXml.querySelector("image");
viewport.setAttribute("content", 'width='+$("#imgwidth").val() +' ,'+'height='+$("#imgheight").val());
svg.setAttribute("viewBox", '0 0 '+$("#imgwidth").val() +' '+$("#imgheight").val());
imagesize.setAttribute("width",$("#imgwidth").val());
imagesize.setAttribute("height",$("#imgheight").val());

for (i = 0; i < 1; i++){
var imagesize = pagexhtmlXml.querySelector("image");
imagesize.setAttributeNS("http://www.w3.org/1999/xlink","href","../image/i-00"+ i +"."+coverFO.ext);
pages = (new XMLSerializer()).serializeToString(pagexhtmlXml);
	}
console.log(pages);


document.getElementById("textareaid").value=pages;
}
function imageOption(){
coverfile = document.getElementById('coverfile');
coverfile.addEventListener('change', function (e) {
    var f = e.target.files[0]
    var reader = new FileReader();
    reader.onload = function (evt) {
    var image =new Image();
    image.src = evt.target.result;
    image.onload = function() {
console.log(image.width);
console.log(image.height);
console.log(f.type)
coverFO.type=f.type

if(coverFO.type=="image/jpeg"){coverFO.ext="jpg"};
if(coverFO.type=="image/png"){coverFO.ext="png"};
document.getElementById("imgwidth").value=image.width;
document.getElementById("imgheight").value=image.height;
  var image2 = document.getElementById('cover')
    image2.src = evt.target.result;
};
    }
reader.readAsDataURL(f);
},false);
}