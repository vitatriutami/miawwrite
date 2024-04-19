const API_ENDPOINT = "https://v1.appbackend.io/v1/rows/WcM1zBK4jOm4";
const searchInput = document.getElementById("searchInput");
const noteContainer = document.getElementById("noteContainer");

let dataNotes = [];

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value;
  noteContainer.innerHTML = "";

  const filteredNotes = dataNotes.filter((note) =>
    note.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  filteredNotes.forEach((note) => {
    const noteCard = document.createElement("div");
    const noteTitle = document.createElement("h3");
    const noteContent = document.createElement("p");

    noteTitle.textContent = note.title;
    noteContent.textContent = note.content;

    noteCard.classList.add("digimonCard");

    noteCard.append(noteTitle, noteContent);
    noteContainer.append(noteCard);
  });
});

async function getDigimons() {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();
  return data;
}

async function buildApp() {
  const notes = await getDigimons();
  dataNotes = notes;

  notes.forEach((note) => {
    const noteCard = document.createElement("div");
    const noteTitle = document.createElement("h3");
    const noteContent = document.createElement("p");

    noteTitle.textContent = note.title;
    noteContent.textContent = note.content;
    digimonCard.classList.add("digimonCard");

    noteCard.classList.add("digimonCard");

    noteCard.append(noteTitle, noteContent);
    noteContainer.append(noteCard);
  });
}

buildApp();
