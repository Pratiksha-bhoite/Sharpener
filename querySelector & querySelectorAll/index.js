// Write the code as shown in the video below:

// Write answer to the questions asked below:
//to write main heading to right
const mainHeading=document.querySelector('#main-heading')
mainHeading.style.textAlign='right';
//. is for append the cls(in case the ele in cls then use .)
const fruits=document.querySelector('.fruits');
//to change bg color
fruits.style.backgroundColor='gray';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px';
//to remove bullet points
fruits.style.listStyleType='none';

const basketHeading=document.querySelector('h2');
//to give little space in front(margin at left) of fruits in basket
basketHeading.style.marginLeft='30px';
//to change font color
basketHeading.style.color='brown';
//in above fruits and this fruit is different

//fruitItems.style.backgroundColor='white';
const fruitItems=document.querySelectorAll('.fruit');
for(let i=0;i<fruitItems.length;i++)
  {
    //change bg color of banana to kiwi to red
    fruitItems[i].style.backgroundColor='brown';
    //changing text color to whiite
    fruitItems[1].style.color='white';
    fruitItems[3].style.color='white';
    fruitItems[i].style.padding='10px';
    fruitItems[i].style.margin='10px';
    fruitItems[i].style.borderRadius='5px';
  }
//for taking bg color to odd items
const OddFruitItems=document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0;i<OddFruitItems.length;i++)
  {
    OddFruitItems[i].style.backgroundColor='white';
    }