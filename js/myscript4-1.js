const standardOPF= '<?xml version="1.0" encoding="utf-8"?>\n<package\n	xmlns="http://www.idpf.org/2007/opf" version="3.0" xml:lang="ja" unique-identifier="unique-id" prefix="rendition: http://www.idpf.org/vocab/rendition/# ebpaj: http://www.ebpaj.jp/">\n	<metadata\n		xmlns:dc="http://purl.org/dc/elements/1.1/">\n		<!-- 作品名 -->\n		<dc:title id="title">タイトル</dc:title>\n		<!-- 著者名 -->\n		<dc:creator id="creator01">著者</dc:creator>\n		<!-- 出版社名 -->\n		<!-- 言語 -->\n		<dc:language id="language">ja</dc:language>\n		<!-- ファイルid -->\n		<dc:identifier id="unique-id">urn:uuid:fca8cf18-b78b-4341-97a5-64a21550c818</dc:identifier>\n		<!-- 更新日 -->\n		<meta property="dcterms:modified">2018-02-07T11:13:32Z</meta>\n		<!-- Fixed-Layout Documents指定 -->\n		<meta property="rendition:layout">pre-paginated</meta>\n		<meta property="rendition:spread">landscape</meta>\n		<!-- etc. -->\n		<meta property="ebpaj:guide-version">1.1</meta>\n		<meta name="primary-writing-mode" content="horizontal-lr"/>\n	</metadata>\n</package>'


document.addEventListener('DOMContentLoaded', function(){
document.getElementById("textareaid").textContent=standardOPF;
document.getElementById("button").addEventListener('click',parse);
},false);

function parse(){
var xml=document.getElementById("textareaid").value;
var standardOPFxml = (new DOMParser()).parseFromString(xml, 'text/xml');
var title=standardOPFxml.getElementById('title').textContent;
document.getElementById("title").value=title;
var author=standardOPFxml.getElementById('creator01').textContent;
document.getElementById("author").value=author;
var date=standardOPFxml.querySelector("meta[property='dcterms:modified']").textContent;
document.getElementById("date").value=date;
}


