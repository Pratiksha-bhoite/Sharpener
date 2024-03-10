//1. Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".
const divs=document.getElementsByTagName("div");
let firstDiv=divs[0];
let secondDivs=divs[1];
const heading3=document.createElement("h3");
let headingText=document.createTextNode("Buy high quality organic fruits online");
heading3.appendChild(headingText);
firstDiv.append(heading3);
//2. Make the sub-heading text italic.
heading3.style.fontStyle="italic";

//2. Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".
//create element
//this will create paragraph tag
const para=document.createElement('p');
//create textNode
//this is for text we want inside paragraph ele
const paraText=document.createTextNode('Total fruits: 4');
//appendChild
//we make this text to child of para p
para.appendChild(paraText);
//console.log(para);
//insertBefore
//we decide where u want to insert i.e in html file insert after ul list inside 2nd div
//const divs=document.getElementsByTagName('div');
//const secondDiv=divs[1];
//secondDiv.appendChild(para);//para is child name of secondDiv for inserting at the end
const fruits=document.querySelector('.fruits');
secondDiv.insertBefore(para,fruits);

//set the method
//3. On this paragraph tag set an id of "fruits-total"
paraText.id="fruits-total";
