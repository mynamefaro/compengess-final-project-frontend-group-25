//TODO: Please write functions about API service provider in this file
function getTodosFromAPI(next_function){
    const options = {
        method: 'GET',  //GET หรือ POST หรือ DELETE
        headers: {
              'Content-Type': 'application/json',
          }
      };
      fetch('http://44.215.179.163:3000/todos', options) //host with endpoint
        .then((response) => response.json())
        .then((data) =>next_function(data) ) //next_function() คือหลังจากที่ fetch API แล้วให้ทำอะไรต่อ
        .catch(err => console.error(err));
}

function deleteTodosFromAPI(todo){
    const options = {
        method: 'DELETE',  //GET หรือ POST หรือ DELETE
        headers: {
              'Content-Type': 'application/json',
          }
      };
      fetch('http://44.215.179.163:3000/todos/'+todo.todo_id, options) //host with endpoint
        .then((response) => response.json())
        .then((data) =>{} ) //next_function() คือหลังจากที่ fetch API แล้วให้ทำอะไรต่อ
        .catch(err => console.error(err));
}

function addTodosToAPI(newTodo){
    const options = {
        method: 'POST',  //GET หรือ POST หรือ DELETE
        headers: {
              'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "todo_id" : newTodo.todo_id,
            "status" : newTodo.status,
            "name" : newTodo.name,
            "description" : newTodo.description,
            "genre" : newTodo.genre,
            "duedate" : newTodo.duedate,
            "student_id" : newTodo.student_id,
            "type": 0,
        })
    };
    
    fetch('http://44.215.179.163:3000/todos', options) //host with endpoint
        .then((response) => response.json())
        .then((data) =>{} ) //next_function() คือหลังจากที่ fetch API แล้วให้ทำอะไรต่อ
        .catch(err => console.error(err));
}
