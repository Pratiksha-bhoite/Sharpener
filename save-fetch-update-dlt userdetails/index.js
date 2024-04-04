function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
  
    axios
      .post(
        "https://crudcrud.com/api/43fa0c790e4946a6b24f64d7455d53e4/appointmentData",
        userDetails
      )
      .then((response) => displayUserOnScreen(response.data))
      .catch((error) => console.log(error));
  
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  getData();
  function getData() {
    axios
      .get(
        "https://crudcrud.com/api/43fa0c790e4946a6b24f64d7455d53e4/appointmentData"
      )
      .then((response) => {
        console.log(response);
        const userDetails = response.data;
        userDetails.map((user) => {
          const userItem = document.createElement("li");
          userItem.appendChild(
            document.createTextNode(
              `${user.username} - ${user.email} - ${user.phone}`
            )
          );
  
          const deleteBtn = document.createElement("button");
          deleteBtn.appendChild(document.createTextNode("Delete"));
          userItem.appendChild(deleteBtn);
  
          const editBtn = document.createElement("button");
          editBtn.appendChild(document.createTextNode("Edit"));
          userItem.appendChild(editBtn);
  
          const userList = document.querySelector("ul");
          userList.appendChild(userItem);
  
          deleteBtn.addEventListener("click", function (event) {
            userList.removeChild(event.target.parentElement);
            axios
              .delete(
                `https://crudcrud.com/api/43fa0c790e4946a6b24f64d7455d53e4/appointmentData/${user._id}`
              )
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          });
          editBtn.addEventListener("click", function (event) {
            userList.removeChild(event.target.parentElement);
            // localStorage.removeItem(userDetails.email);
            document.getElementById("username").value = userDetails.username;
            document.getElementById("email").value = userDetails.email;
            document.getElementById("phone").value = userDetails.phone;
          });
        });
      })
      .catch((err) => console.log(err));
  }
  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
    deleteBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      axios
        .delete(
          `https://crudcrud.com/api/43fa0c790e4946a6b24f64d7455d53e4/appointmentData/${user._id}`
        )
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    });
    editBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      // localStorage.removeItem(userDetails.email);
      document.getElementById("username").value = userDetails.username;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;
    });
  }
  
  // Do not touch the code below
  module.exports = handleFormSubmit;