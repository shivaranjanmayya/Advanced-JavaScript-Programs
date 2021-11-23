var div = document.createElement('div');
div.id = "result";
var div1 = document.createElement('div');
document.body.appendChild(div);
document.body.appendChild(div1);

var p = document.createElement('P');
p.id = "para1";
var h1 = document.createElement('H1');
p.id = "heading1";
h1.innerText = "First Paragraph";
document.body.appendChild(h1);
p.innerHTML = "This is my First Paragraph";
document.body.appendChild(p);
div1.appendChild(p);
div1.appendChild(h1);

var p = document.createElement('P');
p.id = "para2";
var h1 = document.createElement('H1');
p.id = "heading2";
h1.innerText = "Second Paragraph";
document.body.appendChild(h1);
p.innerHTML = "This is my Second Paragraph";
document.body.appendChild(p);
div1.appendChild(p);
div1.appendChild(h1);

div.appendChild(div1);
