const standardOPF= '<?xml version="1.0" encoding="utf-8"?>\n<package\n	xmlns="http://www.idpf.org/2007/opf" version="3.0" xml:lang="ja" unique-identifier="unique-id" prefix="rendition: http://www.idpf.org/vocab/rendition/# ebpaj: http://www.ebpaj.jp/">\n	<manifest>\n		<!-- navigation -->\n		<item media-type="application/xhtml+xml" id="toc" href="nav.xhtml" properties="nav"/>\n		<item media-type="application/x-dtbncx+xml" id="ncxtoc" href="toc.ncx"/>\n		<!-- style -->\n		<item media-type="text/css" id="fixed-layout-jp" href="style/fixed-layout-jp.css"/>\n		<!-- image -->\n		<item media-type="image/jpeg" id="cover" href="image/cover.jpg" properties="cover-image"/>\n		<item media-type="image/jpeg" id="i-001" href="image/i-001.jpg"/>\n		<item media-type="image/jpeg" id="i-002" href="image/i-002.jpg"/>\n		<item media-type="image/jpeg" id="i-003" href="image/i-003.jpg"/>\n		<item media-type="application/xhtml+xml" id="p-cover" href="xhtml/p-cover.xhtml" properties="svg" fallback="cover"/>\n		<item media-type="application/xhtml+xml" id="p-001" href="xhtml/p-001.xhtml" properties="svg" fallback="i-001"/>\n		<item media-type="application/xhtml+xml" id="p-002" href="xhtml/p-002.xhtml" properties="svg" fallback="i-002"/>\n		<item media-type="application/xhtml+xml" id="p-003" href="xhtml/p-003.xhtml" properties="svg" fallback="i-003"/>\n			</manifest>\n	<spine toc="ncxtoc" page-progression-direction="ltr">\n		<itemref linear="yes" idref="p-cover" properties="rendition:page-spread-center"/>\n		<itemref linear="yes" idref="p-001" properties="page-spread-left"/>\n		<itemref linear="yes" idref="p-002" properties="page-spread-right"/>\n		<itemref linear="yes" idref="p-003" properties="page-spread-left"/>\n	</spine>\n</package>'


document.addEventListener('DOMContentLoaded', function(){
document.getElementById("textareaid").textContent=standardOPF;
document.getElementById("button").addEventListener('click',parse);
},false);

function parse(){
var standardOPFxml = (new DOMParser()).parseFromString(standardOPF, 'text/xml');
id=document.querySelector('input[name="radio"]:checked').id
switch( id ) {
case 'binding-rtl':standardOPFxml.querySelector("spine").setAttribute("page-progression-direction","rtl");
break;
case 'binding-ltr':standardOPFxml.querySelector("spine").setAttribute("page-progression-direction","ltr");
break;

}
standardOPFS = (new XMLSerializer()).serializeToString(standardOPFxml);
document.getElementById("textareaid").value=standardOPFS;
}