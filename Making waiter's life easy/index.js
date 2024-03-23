const form = document.getElementById("form");
const dishPrice = document.getElementById("price");
const dishNames = document.getElementById("dishNames");
const dishTable = document.getElementById("dishTable");
const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const table3 = document.getElementById("table3");

function hadleSubmit(event) {
  event.preventDefault();

  const billDetails = {
    dishPrice: dishPrice.value,
    dishTable: dishTable.value,
    dishNames: dishNames.value,
  };

  axios
    .post(
      "https://crudcrud.com/api/09f265b141614cf9af2770d7a507460f/bookmarkLinks",
      billDetails
    )
    .then((response) => {
      console.log("posted");
      getDataFromServer();
    })
    .catch((error) => console.log(error));

  console.log(dishPrice.value, dishNames.value, dishTable.value);
}

function dishTableCheck(billDetails) {
  table1.innerHTML = "";
  table2.innerHTML = "";
  table3.innerHTML = "";
  billDetails.forEach((bills) => {
    console.log(bills);
    if (bills.dishTable == "Table1") {
      showOnScreen(table1, bills);
    } else if (bills.dishTable === "Table2") {
      showOnScreen(table2, bills);
    } else if (bills.dishTable === "Table3") {
      showOnScreen(table3, bills);
    } else {
      console.log("Dish table not exist");
    }
  });
}

function showOnScreen(table, billDetail) {
  const listItem = document.createElement("li");

  listItem.innerHTML = `${billDetail.dishPrice} - ${billDetail.dishTable} - ${billDetail.dishNames} <button class="deleteBtn" data-id = "${billDetail._id}">delete dish</button>`;
  console.log(listItem);

  table.append(listItem);

  const deleteBtn = listItem.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", () => {
    const billId = deleteBtn.getAttribute("data-id");
    deleteData(billId);
    console.log(billId);
  });
}

function getDataFromServer() {
  axios
    .get(
      "https://crudcrud.com/api/09f265b141614cf9af2770d7a507460f/bookmarkLinks"
    )
    .then((response) => {
      dishTableCheck(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteData(billId) {
  axios
    .delete(
      `https://crudcrud.com/api/09f265b141614cf9af2770d7a507460f/bookmarkLinks/${billId}`
    )
    .then((res) => {
      console.log("deleted");
      getDataFromServer();
    })
    .catch((err) => {
      console.log(err);
    });
}

window.addEventListener("DOMContentLoaded", getDataFromServer);
form.addEventListener("submit", hadleSubmit);
