var ncx='<?xml version="1.0" encoding="utf-8" standalone="no"?>\n<!-- For compatibility with ePub2 Player -->\n<ncx:ncx xmlns:ncx="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">\n  <ncx:head>\n    <ncx:meta name="dtb:uid" content="urn:uuid:A649F639-6C1F-1014-8CC3-F813564D7508"/>\n    <ncx:meta name="dtb:depth" content="-1"/>\n    <ncx:meta name="dtb:totalPageCount" content="0"/>\n    <ncx:meta name="dtb:maxPageNumber" content="0"/>\n  </ncx:head>\n  <ncx:docTitle>\n    <ncx:text>title</ncx:text>\n  </ncx:docTitle>\n  <ncx:docAuthor>\n    <ncx:text>author</ncx:text>\n  </ncx:docAuthor>\n  <ncx:navMap>\n    <ncx:navPoint id="p01" playOrder="1">\n      <ncx:navLabel>\n        <ncx:text>navigation</ncx:text>\n      </ncx:navLabel>\n      <ncx:content src="xhtml/p-cover.xhtml"/>\n    </ncx:navPoint>\n  </ncx:navMap>\n</ncx:ncx>';


document.addEventListener('DOMContentLoaded', function(){
document.getElementById("textareaid").textContent=ncx;
document.getElementById("button").addEventListener('click',rewriteNCX);
document.getElementById("addmenu").addEventListener("click",addmenu);
document.getElementById("removeselect").addEventListener("click",removeselect);
},false);

function rewriteNCX(){
var ncxXml = (new DOMParser()).parseFromString(ncx, 'text/xml');
ncxXml.querySelector("docTitle").childNodes[1].textContent=$("#title").val();
ncxXml.querySelector("docAuthor").childNodes[1].textContent=$("#author1").val();
ncxXml.getElementById("p01").childNodes[1].childNodes[1].textContent=$("#covertext").val();

var df = ncxXml.createDocumentFragment();
var menu=$("*[name=formNav]");
var navtext= document.getElementsByName("selectNav")
for (j = 0; j < menu.length; j++){ 
var	reference = ncxXml.getElementById("p01");
var Nav = reference.cloneNode(true);
 var sele=navtext[j].selectedIndex;
 	Nav.setAttribute("playOrder",(j+2))
 	Nav.setAttribute("id","nav"+(j+1))
 	Nav.childNodes[1].childNodes[1].textContent=$("*[name=editNav]")[j].value;
	Nav.childNodes[3].setAttribute("src", "xhtml/"+ j +".xhtml");
	 df.appendChild(Nav);
}
var	parent =ncxXml.querySelector("navMap");
console.log(Nav)
	parent.insertBefore(df,reference.nextSibling);
	console.log(parent);

//navPointの取得
//ncxXml.querySelectorAll("navPoint")[1]
//
//XMLシリアライズ
ncxS = (new XMLSerializer()).serializeToString(ncxXml);
console.log(ncxXml);
ncxS=vkbeautify.xml(ncxS);
document.getElementById("textareaid").value=ncxS;
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