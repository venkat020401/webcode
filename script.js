var div = document.createElement("div");
div.setAttribute("class","center");
var h3 = document.createElement("h3");
h3.innerHTML="Cosmetics..!";
var h5 = document.createElement("h5");
h5.innerHTML="Select the type of products you would like to view below";
var div1 = document.createElement("div");
div1.setAttribute("class","dropdown");
var span = document.createElement("span");
span.innerHTML="Select Here";
var div2 = document.createElement("div");
div2.setAttribute("class","dropdown-content");
var b1 = document.createElement("button");
var a1 = create_a("a","href","https://deluxe-granita-624dfa.netlify.app/","Blush");
var br1 = document.createElement("br");
var b2 = document.createElement("button");
var a2 = create_a("a","href","https://animated-lebkuchen-f03c91.netlify.app/","Bronzer");
var br2 = document.createElement("br");
var b3 = document.createElement("button");
var a3 = create_a("a","href","https://peaceful-bombolone-7100d9.netlify.app/","Eye Brow");
var br3 = document.createElement("br");
var b4 = document.createElement("button");
var a4 = create_a("a","href","https://inspiring-llama-35a5ab.netlify.app/","Eye Liner");
var br4 = document.createElement("br");
var b5 = document.createElement("button");
var a5 = create_a("a","href","https://luxury-unicorn-4f9daa.netlify.app/","Eye Shadow");
var br5 = document.createElement("br");
var b6 = document.createElement("button");
var a6 = create_a("a","href","https://venerable-medovik-ddd2e6.netlify.app/","Foundation");
var br6 = document.createElement("br");
var b7 = document.createElement("button");
var a7 = create_a("a","href","https://taupe-unicorn-210781.netlify.app/","Lip Liner");
var br7 = document.createElement("br");
var b8 = document.createElement("button");
var a8 = create_a("a","href","https://cute-llama-a759b0.netlify.app/","Lip stick");
var br8 = document.createElement("br");
var b9 = document.createElement("button");
var a9 = create_a("a","href","https://beautiful-horse-c1807c.netlify.app/","Mascara");
var br9 = document.createElement("br");
var b10 = document.createElement("button");
var a10 = create_a("a","href","https://celadon-lolly-6c4ae8.netlify.app/","Nail Polish");

function create_a (tag,att,attvalue,content){
    var ele = document.createElement(tag);
    ele.setAttribute(att,attvalue)
    ele.innerHTML=content;
    return ele;
    }

div.append(h3,h5,div1);
div1.append(span,div2);
b1.append(a1);b2.append(a2);b3.append(a3);b4.append(a4);b5.append(a5);b6.append(a6);b7.append(a7);b8.append(a8);b9.append(a9);b10.append(a10);
div2.append(b1,br1,b2,br2,b3,br3,b4,br4,b5,br5,b6,br6,b7,br7,b8,br8,b9,br9,b10);
document.body.append(div);