var script = function () {
var zip = new JSZip();
zip.file("sample.txt", "sample");
zip.generateAsync({type:"blob"})
.then(function(content) {
    saveAs(content, "example.zip");
});
}