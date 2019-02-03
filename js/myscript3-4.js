document.addEventListener('DOMContentLoaded', function(){
document.getElementById("bt_add").addEventListener('click',add);
document.getElementById("bt_remove").addEventListener('click',remove);
},false);

function add(){
select=document.getElementById("InputSelect2")
menu=document.getElementById("InputSelect2").children[0].cloneNode(true)
select.appendChild(menu)
}
function remove(){
Node=document.getElementById("InputSelect2").children[0]
Node.parentNode.removeChild(Node);
}