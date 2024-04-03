const addButton = document.querySelector('.button-add');
const taskInput = document.querySelector('.task-input');
toDoList = [];

function addTask() {
   taskList = {
      text: taskInput.value,
      id: Date.now(),
      isCompleted: false,
   };
   toDoList.push(taskList);
   taskInput.value = '';
   render();
}

function render() {
   result = '';
   for (let i = 0; i < toDoList.length; i++) {
      result += `<div class="task" id="${toDoList[i].id}">
            <span>${toDoList[i].text}</span>
            <div class="button-box">
            <button onclick="toggleDone('${toDoList[i].id}')"><i class="fas fa-undo-alt"></i></button>
            <button onclick="deleteTask('${toDoList[i].id}')"><i class="fa fa-trash"></i></button>
            </div>
        </div>`;
   }
   document.getElementById('task-board').innerHTML = result;
}

function deleteTask(id) {
   toDoList = toDoList.filter(item => {
      return item.id != id;
   });
   console.log(toDoList);
   //    for (let i = 0; i < toDoList.length; i++) {
   //       if (toDoList[i].id == id) {
   //          toDoList.splice(i, 1);
   //       }
   //    }
   render();
}

addButton.addEventListener('click', addTask);
