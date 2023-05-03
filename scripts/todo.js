var todo = {
  todo_id: null,
  student_id: null,
  name: null,
  duedate: null,
  status: null,
  genre: null,
  description: null,
  type: 0,
};
var selected_todo = {
  todo_id: null,
  student_id: null,
  name: null,
  duedate: null,
  status: null,
  genre: null,
  description: null,
  type: 0,
};
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var filter_duedate = "";
var filter_genre = null;
var filter_student = null;

const todo_status = { Todo: 0, "In-Progress": 1, Finished: 2 };
const status_name = ["Todo","In-Progress","Finished"];
var oldTodos = [];
var todos = [];
var assignment = [];

function renderTodos() {
  // getTodosFromAPI((data) => {
  //   todos = data;
  // });

  // todos.concat(assignment);
  todos.sort(compareTodo);

  var new_element = "";
  var getElement = (todo) => {
    return `
        <div class="todo card hoverable ${todo.type == 0 ? '' : 'light-info'}" onclick="selectTodo(${i})">
            <div>
                <h2>${todo.name}
                <br>${new Date(todo.duedate).getDate()} ${
      monthNames[new Date(todo.duedate).getMonth()]
    } ${new Date(todo.duedate).getFullYear()} <br><span class="todo-${todo.status} card">${status_name[todo.status]}</span></h2> 
            </div>
            
            <p>
                ${todo.description}
            </p>
        </div>`;
  };

  filter_student = $("user-studentId").innerHTML;
  for (var i = 0; i < todos.length; ++i) {
    var todo = todos[i];
    // console.log(todo.genre);
    // console.log(filter_genre);
    // TODO: Please Filter data if it has a filter
    console.log(todo.student_id);
    console.log(filter_student+"  1")
    if (
      (filter_student == null || filter_student == todo.student_id) &&
      (filter_genre == null || filter_genre == todo.genre) &&
      (filter_duedate == "" || filter_duedate == todo.duedate)
    ) {
      new_element += getElement(todo);
    }
  }

  document.getElementById("todo-container").innerHTML = new_element;
}
function selectTodo(i) {
  setSelectedTodo(i);
  // alert(i);
  console.log(selected_todo.genre);
  if(!isAssignment(selected_todo)){
  setFormData();
  openSideNav(1);}
}
function setSelectedTodo(i) {
  todos.sort(compareTodo);
  selected_todo = todos[i];
}

function openForm() {
  try {
    $("form-name").value = null;
    $("form-duedate").value = null;
    $("form-genre").value = null;
    $("form-status").selectedIndex = null;
    $("form-description").value = null;
  } catch {
    console.log("setFormData Error!!");
  }
  openSideNav(0);
}

function addTodo() {
  //TODO: please fill code
  // return {
  //   // todo_id: "00000" + todos.length.toString(),
  //   student_id: $("user-studentId").value,
  //   name: $("form-name").value,
  //   duedate: (!$("form-duedate").value) ? "2999-12-31" : $("form-duedate").value,
  //   status: getStatus($("form-status").selectedIndex),
  //   genre: $("form-genre").value,
  //   description: $("form-description").value,
  // };
  console.log(todos.length);
  todo = createNewTodo();
  todos.push(todo);
  console.log(todos.length);
  addTodosToAPI(todo);
}

function updateTodo() {
  //TODO: please fill code.
  // return {
  //   todo_id: todo.todo_id,
  //       student_id: $("user-studentId").value,
  //       name: $("form-name").value,
  //       duedate: (!$("form-duedate").value) ? "2999-12-31" : $("form-duedate").value,
  //       status: getStatus($("form-status").selectedIndex),
  //       genre: $("form-genre").value,
  //       description: $("form-description").value,
  // };
  deleteTodosFromAPI(selected_todo);
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].todo_id === selected_todo.todo_id) {
      todos[i] = createNewTodo();
      addTodosToAPI(todos[i]);
    }
  }
}
function deleteTodo() {
  //
  deleteTodosFromAPI(selected_todo);
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].todo_id === selected_todo.todo_id) {
      todos.splice(i, 1);
    }
  }
  //
}
function setFilterDuedate() {
  filter_duedate = $("content-date").value;
  renderPage();
}
function setFilterGenre(genre) {
  filter_genre = genre;
  renderPage();
}


function compareTodo(a, b) {
  if (a.duedate.split("-") < b.duedate.split("-")) {
    return -1;
  }
  if (a.duedate.split("-") > b.duedate.split("-")) {
    return 1;
  }
  return 0;
}

function createNewTodo(){
  return {
    todo_id: Math.round((Math.random() * 1e8)) + "",
    student_id: $("user-studentId").innerHTML,
    name: $("form-name").value,
    duedate: !$("form-duedate").value ? "2999-12-31" : $("form-duedate").value,
    status: $("form-status").selectedIndex,
    genre: $("form-genre").value,
    description: $("form-description").value,
    type: 0,
  };
}
