function renderPage() {
  renderTodos();
  renderGenres();
}
function main() {
  //get User's info
  getUserProfile();
  //add User's courses in genres
  getUserCourses();

  //get Todos
  getTodosFromAPI((data) => {
    todos = data;
  });

  //set genres in
  setGenres();

  renderPage();
}
