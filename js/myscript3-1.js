document.addEventListener('DOMContentLoaded', function(){
document.getElementById("button").addEventListener('click',script);
},false);

function script() {
id=document.querySelector('input[name="radio"]:checked').id;
text=document.getElementById("radio_text");
text.textContent=id;
switch( id ) {
case 'binding-rtl':console.log('rtl')
break;
case 'binding-ltr':console.log('ltr')
break;
}
}