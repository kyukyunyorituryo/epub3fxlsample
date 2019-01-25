//画像ファイルの読みこみ
document.addEventListener('DOMContentLoaded', function(){
var imgfile = document.getElementById('imgfile');
imgfile.addEventListener('change', fileselect, false);
},false);

var reader = new FileReader();

function fileselect(ev) {
var file = ev.target.files[0];
reader.readAsDataURL(file);
}

var script = function () {
var sample= document.getElementById("textarea").value
var zip = new JSZip();
zip.file("sample.txt", sample);
zip.file("sample.png", reader.result.split('base64,')[1], {base64: true});
zip.generateAsync({type:"blob"})
.then(function(content) {
saveAs(content, "example.zip");
});
}

