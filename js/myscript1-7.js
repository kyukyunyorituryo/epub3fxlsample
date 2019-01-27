document.addEventListener('DOMContentLoaded', function(){
script();
},false);

var script = function () {
//UUID宣言
//uuid ver.4
var objV4 = UUID.genV4();
//ファイルID、uuid
uuid=objV4.urn;
var date = document.getElementById("uuid")
date.textContent=uuid;
}