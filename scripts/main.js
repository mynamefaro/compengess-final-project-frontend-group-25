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
    for (var i = 0; i < data.length; ++i) {
      todo = data[i];
      todos.push(todo);
      
    }
    // todos.concat(data);

    renderPage();
  });

  //set genres in
}
