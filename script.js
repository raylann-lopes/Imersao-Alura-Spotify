const searchInput = document.getElementById("search-input");
const resultsArtist = document.getElementById("results-artist");
const playlistContainer = document.getElementById("results-playlist");

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultsArtist.classList.remove("hidden");
}

document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultsArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }

  requestApi(searchTerm);
});
