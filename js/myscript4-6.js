var imgFO= [];

//ここからページ画像入力
//連続画像ファイル読み込み
  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();
      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', theFile.name, '" onclick="pop(this) "/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        imgFO.push({file_name:theFile.name,data:e.target.result,type:theFile.type});
//チェックコード
//        var image =new Image();
//          image.src = e.target.result;
//          image.onload = function() {
//          console.log(image.width);
//          console.log(image.height);
//};
//console.log(theFile.name);
//console.log(theFile.type);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('files').addEventListener('change', handleFileSelect, false);
  });
//sort　本文画像の整列
document.addEventListener("DOMContentLoaded", function(){
document.getElementById("sort").addEventListener("click",mySort);
  });
function mySort() {
var list = document.getElementById('list');
var Nlist=list.getElementsByTagName('span');
var myArray = Array.prototype.slice.call(Nlist);
   function compareText (a,b) {
        if (a.firstChild.title > b.firstChild.title)
            return 1;
        else if (a.firstChild.title < b.firstChild.title)
            return -1;
        return 0;
        }
    myArray.sort(compareText);
       for (var i=0; i<myArray.length; i++) {
        list.appendChild(list.removeChild(myArray[i]))
    }

//画像ファイル名で整列
//imgFO = [{file_id:"",file_name:'cover.jpg',data:'',type:'image/jpeg'}];
 imgFO.sort(function(a,b){
    if(a.file_name<b.file_name) return -1;
    if(a.file_name > b.file_name) return 1;
    return 0;
});
}
