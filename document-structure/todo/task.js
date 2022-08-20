const taskInput = document.getElementById('task__input');
const taskAddButton = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

taskAddButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (taskInput.value.length !== 0) {
    const task = document.createElement('div');
    task.classList.add('task')

    task.innerHTML = `
      <div class="task__title">
        ${taskInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    `;

    taskList.appendChild(task);

    const removeButton = task.querySelector('.task__remove');
    removeButton.addEventListener('click', (event) => {
      event.target.closest('.task').remove()
    })

    taskInput.value = '';
  
  }
})