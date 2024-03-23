const form = document.getElementById("form");
const searchInput = document.getElementById("searchInput");
const noteTitle = document.getElementById("noteTitle");
const noteDes = document.getElementById("noteDes");
const detilsDiv = document.getElementById("detilsDiv");
const totalNotes = document.getElementById("totalNotes");
const showingNotes = document.getElementById("showingNotes");
let allNotesData = [];

function hadleSubmit(event) {
  event.preventDefault();

  const noteDetails = {
    noteTitle: noteTitle.value,
    noteDes: noteDes.value,
  };

  axios
    .post(
      "https://crudcrud.com/api/ac6ca0afab494ed2aaeaa9a858068158/NoteData",
      noteDetails
    )
    .then((response) => {
      console.log("posted");
      getDataFromServer();
    })
    .catch((error) => console.log(error));

  console.log(noteDetails);
}

function showOnScreen(notesDetails) {
  detilsDiv.innerHTML = "";
  showingNotes.innerHTML = `Showing Notes: ${notesDetails.length}`;
  notesDetails.forEach((note) => {
    const newDiv = document.createElement("div");

    newDiv.innerHTML = `${note.noteTitle} - ${note.noteDes}  <button class="deleteBtn" data-id = "${note._id}">delete Note</button>`;
    console.log(newDiv);

    detilsDiv.append(newDiv);

    const deleteBtn = newDiv.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
      const noteId = deleteBtn.getAttribute("data-id");
      deleteData(noteId);
      console.log(noteId);
    });
  });
}

function getDataFromServer() {
  axios
    .get("https://crudcrud.com/api/ac6ca0afab494ed2aaeaa9a858068158/NoteData")
    .then((response) => {
      allNotesData = response.data;
      showOnScreen(response.data);
      totalNotes.innerHTML = `Total Notes : ${allNotesData.length}`;
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteData(noteId) {
  axios
    .delete(
      `https://crudcrud.com/api/ac6ca0afab494ed2aaeaa9a858068158/NoteData/${noteId}`
    )
    .then((res) => {
      console.log("deleted");
      getDataFromServer();
    })
    .catch((err) => {
      console.log(err);
    });
}
function filterData() {
  const searchText = searchInput.value.toLowerCase();
  console.log(searchText);
  const filteredNotes = allNotesData.filter((note) => {
    return (
      note.noteTitle.toLowerCase().includes(searchText) ||
      note.noteDes.toLowerCase().includes(searchText)
    );
  });
  console.log(filteredNotes);
  showOnScreen(filteredNotes);
}

searchInput.addEventListener("keyup", filterData);
window.addEventListener("DOMContentLoaded", getDataFromServer);
form.addEventListener("submit", hadleSubmit);
