// Write your code below:
//1. Change the main heading 'Fruit Shop' to 'Fruit World'
const mainheading=document.getElementById('main-heading');
mainheading.textContent="Fruit World";
//2. Change the font color of 'Fruit World' from black to orange
const header=document.getElementById('header');
header.style.color="orange";
//3. Change background color of div with id = "header" to green color
header.style.backgroundColor="green";
//4. Add a bottom border of orange color to div with id = "header"
header.style.borderBottom="3px solid orange";
//5. Change the font color of 'Fruits In Basket' from black to green
const basketheading=document.getElementById('basket-heading');
basketheading.style.color="green";
//6. Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"
const thanks=document.getElementById('thanks');
thanks.innerHTML='<p>Please visit us again</p>'