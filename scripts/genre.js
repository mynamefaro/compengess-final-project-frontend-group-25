var genre = {
  genre_id: null,
  student_id: null,
  profile: null,
  name: null,
  description: null,
};

const genres = [
  {
    genre_id: 52000,
    student_id: 6531329321,
    profile: null,
    name: "Johan",
    description: "holy",
  },
  {
    genre_id: 55555,
    student_id: 6531329321,
    profile: null,
    name: "BrushBrushBrush",
    description: "3x a day",
  },
]; //list of genres
function renderGenres() {
  var new_element = "";
  var getElement = (genre) => {
    return `
        <div class="genre hoverable ${
          filter_genre == genre.name ? "card primary" : ""
        }" 
        onclick="setFilterGenre('${genre.name}')" >
            <img src="${
              genre.profile || "assets/icon-default.png"
            }" class="round-img">
            <span>${genre.name} (${genre.description})</span>
        </div>`;
  };
  for (var i = 0; i < genres.length; ++i) {
    var genre = genres[i];
    new_element += getElement(genre);
  }

  document.getElementById("genre-container").innerHTML = new_element;
}
function setGenres() {
  filter_genre = null;
  var new_element = "";
  var getElement = (genre) => {
    return `
        <option value= "${genre.name}"> ${genre.name}</option>`;
  };
  for (var i = 0; i < genres.length; ++i) {
    var genre = genres[i];
    new_element += getElement(genre);
  }
  document.getElementById("form-genre").innerHTML = new_element;
}

function searchGenreId(name) {
  for (const genre in genres) {
    if (genre.name == name) {
      return genre.genre_id;
    }
  }
}
