async function renderPage() {
  renderTodos();
  renderGenres();
}
async function main() {
  //get User's info
  await getUserProfile();
  //add User's courses in genres
  await getUserCourses();

  //get Todos
  await getTodosFromAPI((data) => {
    todos = data;

    renderPage();
  });

  //set genres in
}
