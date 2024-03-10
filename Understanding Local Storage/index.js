// Write your code below:
function handleFormSubmit(event)
{
  event.preventDefault();//prevent the default form submision
  //get user input values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  //store data in local storage with specific keys
  localStorage.setItem("Username",username);
  localStorage.setItem("Email",email);
  localStorage.setItem("Phone",phone);
}
//add event listener to the form for submit event
document.getElementById("bookingForm").addEventListener("submit",handleFormSubmit);

