coverfile = document.getElementById('coverfile');
coverfile.addEventListener('change', function (e) {
    var f = e.target.files[0]
    var reader = new FileReader();
    
    reader.onload = function (evt) {
    var image = document.getElementById('cover')
    image.src = evt.target.result;
    }
reader.readAsDataURL(f);
});