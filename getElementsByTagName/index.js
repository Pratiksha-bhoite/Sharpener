// Write your code below:
//1. Change the color of 5th "li" tag (one with "Mango" written inside it) to blue.
const listItems=document.getElementsByTagName('li');
listItems[4].style.color='blue'

//2. Make all the "li" tags italic.
for(let i=0;i<listItems.length;i++)
  {
    listItems[i].style.fontStyle="italic"
  }