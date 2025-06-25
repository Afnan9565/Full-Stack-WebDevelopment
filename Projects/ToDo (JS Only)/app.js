let todo = [];
function startTodo() {
  while (true) {
    let req = prompt("Enter your request");
    if (req == "list") {
      console.log(todo);
      break;
    } else if (req == "add") {
      let add = prompt("Enter the tasks you want to add");
      todo.push(add);
      break;
    } else if (req == "quit") {
      break;
    } else if (req == "delete") {
      idx = prompt("Enter the position of tasks you want to delete");
      todo.splice(idx, 1);
    }
  }
}
