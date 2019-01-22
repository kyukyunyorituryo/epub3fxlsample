//画像ファイルの読みこみ
document.addEventListener('DOMContentLoaded', function(){
var imgfile = document.getElementById('imgfile');
imgfile.addEventListener('change', fileselect, false);
},false);

 var files
  var reader = new FileReader();
function fileselect(ev) {

  var target = ev.target;
files = target.files;
 var file = target.files[0];
reader.readAsDataURL(file);
}
function fileLoad() {
  console.log(reader.result);
}

var script = function () {
var sample= document.getElementById("textarea").value
var zip = new JSZip();
zip.file("sample.txt", sample);
zip.file("sample.jpg", reader.result.split('base64,')[1], {base64: true});
reader.addEventListener('load', fileLoad, false);
zip.generateAsync({type:"blob"})
.then(function(content) {
    saveAs(content, "example.zip");
});
}

