const API_ENDPOINT = "https://v1.appbackend.io/v1/rows/WcM1zBK4jOm4";
const searchInput = document.getElementById("searchInput");
const digimonContainer = document.getElementById("digimonContainer");

let dataDigimons = [];

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value;
  digimonContainer.innerHTML = "";

  const filteredDigimons = dataDigimons.filter((digimon) =>
    digimon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  filteredDigimons.forEach((digimon) => {
    const digimonCard = document.createElement("div");
    const digimonName = document.createElement("h3");
    const digimonImg = document.createElement("img");

    digimonName.textContent = digimon.name;
    digimonImg.src = digimon.img;
    digimonCard.classList.add("digimonCard");

    digimonCard.append(digimonName, digimonImg);
    digimonContainer.append(digimonCard);
  });
});

async function getDigimons() {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();
  return data;
}

async function buildApp() {
  const digimons = await getDigimons();
  dataDigimons = digimons;

  digimons.forEach((digimon) => {
    const digimonCard = document.createElement("div");
    const digimonName = document.createElement("h3");
    const digimonImg = document.createElement("img");

    digimonName.textContent = digimon.name;
    digimonImg.src = digimon.img;
    digimonCard.classList.add("digimonCard");

    digimonCard.append(digimonName, digimonImg);
    digimonContainer.append(digimonCard);
  });
}

buildApp();
