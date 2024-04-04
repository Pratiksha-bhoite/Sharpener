const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios
    .get("https://crudcrud.com/api/df17af98e0344893a1198f4eee054ec7/todo")
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function postTodo() {
  // Write your code here
   axios
    .post("https://crudcrud.com/api/df17af98e0344893a1198f4eee054ec7/todo", {
      title: "Learn Axios",
      completed: false,
    })
    .then((data) => {
      console.log(data);
    });
}

function putTodo() {
  // Write your code here
   axios
    .put(
      "https://crudcrud.com/api/df17af98e0344893a1198f4eee054ec7/todo/65f5c22f1492af03e8f0e4d9",
      {
        title: "Learn Axios",
        completed: true,
      }
    )
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

function deleteTodo() {
  // Write your code here
  axios
    .delete(
      "https://crudcrud.com/api/df17af98e0344893a1198f4eee054ec7/todo/65f5c22f1492af03e8f0e4d8"
    )
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}