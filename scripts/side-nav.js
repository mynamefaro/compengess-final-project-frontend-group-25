function openSideNav(edit) {
  if (edit) {
    $("save-create").innerText = "save";
  } else {
    $("save-create").innerText = "create";
  }

  $("side-nav").style.right = "0";
}
function closeSideNav() {
  $("side-nav").style.right = "-300px";
}

function setFormData() {
  try {
    $("form-name").value = selected_todo.name;
    $("form-duedate").value = selected_todo.duedate;
    $("form-genre").value = selected_todo.genre;
    $("form-status").selectedIndex = selected_todo.status;
    $("form-description").value = selected_todo.description;
  } catch {
    console.log("setFormData Error!!");
    // console.log(selected_todo.name);
    // console.log(selected_todo.duedate);
    // console.log(selected_todo.genre);
    // console.log(todo_status[selected_todo.status]);
  }
}

function test() {
  //For debug
  alert($("form-duedate").value);
}
function saveForm() {
  //TODO: please fill code.\
  if (isInTodos()) {
    if(isAssignment(selected_todo)){
      alert("cannot edit assignment");
    }
    else{
      updateTodo();
    }
  } else {
    createTodos();
  }
  closeSideNav();

  renderPage();
}
function deleteForm() {
  //TODO: please fill code.\

  if (isInTodos()) {
    if (isAssignment(selected_todo)){
      alert("cannot delete assignment");
    }
    else{
      deleteTodo();
    }
  }
  closeSideNav();

  renderPage();
}

function isInTodos() {
  return $("save-create").innerText === "save";
}

function isAssignment(todo){
  return todo.type == "assignment";
}
