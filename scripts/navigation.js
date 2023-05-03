
/***----Navigation----****/

function openNavigation() {
  $("navigation").style.left = "0";
}
function closeNavigation() {
  $("navigation").style.left = "-300px";
}

/***----Gernal----****/

var genre = {
  genre_id: null,
  student_id: null,
  profile: null,
  name: "All",
  description: "Subjects",
};

const genres = [genre]; //list of genres

function renderGenres() {
  var new_element = "";
  var getElement = (genre) => {
    return `
        <div class="genre hoverable ${
          filter_genre == genre.genre_id ? "card primary" : ""
        }" 
        onclick="setFilterGenre(${genre.genre_id})" >
            <img src="${
              genre.profile || "assets/icon-default.png"
            }" >
            <span>
              <b>${genre.description}</b>
              <br>${genre.name}
            </span>
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
        <option value= "${genre.genre_id}"> ${genre.description}</option>`;
  };
  for (var i = 0; i < genres.length; ++i) {
    var genre = genres[i];
    new_element += getElement(genre);
  }
  document.getElementById("form-genre").innerHTML = new_element;
}

function searchGenre(genre_id) {
  for (const genre in genres) {
    if (genre.genre_id == genre_id) {
      return genre.name;
    }
  }
}
