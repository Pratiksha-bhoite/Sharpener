// Add the Edit Button:
//this code is for adding the fruits in list with the help of add btn
const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit',function(event){
  event.preventDefault();

  const fruitLists = document.querySelectorAll(".fruit");
  
  //select the input ele where fruit name is entered
  const fruitToAdd = document.getElementById('fruit-to-add');
  //created li ele
  const newLi = document.createElement('li');
  newLi.className = "fruit";
  //we can write below code in single line also like
  newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>'+
     '<button class="edit-btn">Edit</button>';
  // const newLiText = document.createTextNode(fruitToAdd.value);
  // newLi.appendChild(newLiText);
  // newLi.className = 'fruit';
  // //create dlt btn to be aded inside li
  // const deleteBtn = document.createElement('button');
  // const deleteBtnText = document.createTextNode('x');
  // deleteBtn.appendChild(deleteBtnText);
  // deleteBtn.className = 'delete-btn';
  // newLi.appendChild(deleteBtn);
  // //ading li as the last ele of unordered list
  fruits.appendChild(newLi);
  console.log(fruitLists.length);
  console.log(fruits);
  //console.log(newLi);
} );

//code to dlt the fruits
//i have fruits unordered list above
fruits.addEventListener('click',function(event)
                       {
                         if(event.target.classList.contains('delete-btn')){
                           console.log(event.target.parentElement);
                           const fruitToDelete=event.target.parentElement;
                           fruits.removeChild(fruitToDelete);
                         }
                       });
//to edit btn
const fruitLists = document.querySelectorAll(".fruit");

for (let i = 0; i < fruitLists.length; i++) {
  let editBtn = document.createElement("button");
  const editBtnText = document.createTextNode("Edit");
  editBtn.append(editBtnText);
  editBtn.className = "edit-btn";
  fruitLists[i].appendChild(editBtn);
}
