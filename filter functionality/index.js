const filter = document.getElementById("filter");

filter.addEventListener("keyup", function (event) {
  let textEntered = event.target.value.toLowerCase();

  const fruitItems = document.getElementsByClassName("fruit");

  for (let i = 0; i < fruitItems.length; i++) {
    let currentFruitText =
      fruitItems[i].firstChild.textContent.toLocaleLowerCase();
    let currentDescText = fruitItems[i]
      .querySelector(".description")
      .textContent.toLowerCase();

    if (
      currentDescText.indexOf(textEntered) === -1 &&
      currentFruitText.indexOf(textEntered) === -1
    ) {
      fruitItems[i].style.display = "none";
    } else {
      fruitItems[i].style.display = "flex";
    }
  }
});

const form = document.querySelector("form");

const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fruitLists = document.querySelectorAll(".fruit");

  //selected Input
  const fruitsToAdd = document.getElementById("fruit-to-add");

  const descToAdd = document.getElementById("desc-to-add");

  //created li element

  const descPara = document.createElement("p");

  const newLi = document.createElement("li");
  newLi.className = "fruit";
  newLi.innerHTML =
    fruitsToAdd.value +
    `<p class="description">${descToAdd.value}</p>` +
    '<button class="delete-btn">x</button>' +
    '<button class="edit-btn">Edit</button>';
  fruits.appendChild(newLi);
  console.log(fruits);
});
fruits.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    console.log(event.target.parentElement);
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
});
const fruitLists = document.querySelectorAll(".fruit");

for (let i = 0; i < fruitLists.length; i++) {
  const dlt = document.getElementsByClassName("delete-btn");
  let editBtn = document.createElement("button");
  let descPara = document.createElement("p");

  const editBtnText = document.createTextNode("Edit");
  const descParaText = document.createTextNode("None");
  descPara.className = "description";
  descPara.appendChild(descParaText);
  fruitLists[i].appendChild(descPara, dlt);
  editBtn.append(editBtnText);
  editBtn.className = "edit-btn";
  fruitLists[i].appendChild(editBtn);
  console.log(fruitLists[i]);
}