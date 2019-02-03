var navigation= '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="ja" >\n<head>\n<meta charset="UTF-8"/>\n<title>Navigation</title>\n</head>\n<body>\n<nav epub:type="toc" id="toc">\n<h1>Navigation</h1>\n<ol>\n<li><a href="xhtml/p-cover.xhtml">表紙</a></li>\n</ol>\n</nav>\n</body>\n</html>';


document.addEventListener('DOMContentLoaded', function(){
document.getElementById("textareaid").textContent=navigation;
document.getElementById("button").addEventListener('click',rewriteNAV);
document.getElementById("addmenu").addEventListener("click",addmenu);
document.getElementById("removeselect").addEventListener("click",removeselect);
},false);

function rewriteNAV(){
//ナビゲーションファイル
var navigationXml = (new DOMParser()).parseFromString(navigation, 'text/xml');
navigationXml.querySelector("title").textContent=$("#title").val();
navigationXml.querySelectorAll("li")[0].childNodes[0].textContent=$("#covertext").val();

var df = navigationXml.createDocumentFragment();
var menu=$("*[name=formNav]");
var navtext= document.getElementsByName("selectNav")
for (j = 0; j < menu.length; j++){ 
var	reference = navigationXml.querySelectorAll("li")[0];
var Nav = reference.cloneNode(true);
 var sele=navtext[j].selectedIndex;
	Nav.firstChild.setAttribute("href", "xhtml/"+ j +".xhtml");
	Nav.firstChild.text=$("*[name=editNav]")[j].value;
	 df.appendChild(Nav);
}
var	parent =navigationXml.querySelector("ol");
console.log(Nav)
	parent.insertBefore(df,reference.nextSibling);
	console.log(parent);

//XMLシリアライズ
navigationS = (new XMLSerializer()).serializeToString(navigationXml);
console.log(navigationXml);
document.getElementById("textareaid").value=navigationS;
return navigationS;
}

//selectの削減

function removeselect(){
if ($("*[name=formNav]").length>1){
$("*[name=formNav]:last").remove()
}
};

//目次の追加

function addmenu(){
var menu = document.getElementsByTagName("form")[1];
var cmenu= menu.cloneNode(true);
cmenu.childNodes[1].childNodes[3].id=document.getElementsByTagName("form").length+1;

//par.insertBefore(cmenu,menu.nextSibling);
document.getElementById("menu-group").appendChild(cmenu);
}