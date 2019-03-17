var ejs  = require('ejs');
var opftemplete = '		<!-- 作品名 -->\n		<dc:title id="title"><%= title %></dc:title>\n		<!-- 著者名 -->\n		<dc:creator id="creator01"><%= creator1 %></dc:creator>'

var opf = ejs.render(opftemplete, {
    title: "タイトル",
    creator1: "著者１"
})
console.log(opf)