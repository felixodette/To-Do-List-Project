const list = document.querySelector('[data-task-list]');
const clear = document.querySelector('[data-clear-all]');
const tasks = [];
const task = document.querySelector('[data-input]');

localStorage.setItem('todo', JSON.stringify(tasks));

function populate() {
  list.innerHTML = '';

  for (let i = 0; i < tasks.length; i += 1) {
    const taskCard = document.createElement('li');
    taskCard.classList.add('list-group-item');
    taskCard.classList.add('task');
    taskCard.innerHTML = `
      <label class="container">
        <input type="checkbox" id="completed" data-status>
        ${tasks[i].description}<span>&#8942;</span>
      </label>`;
    list.appendChild(taskCard);
    task.value = '';
  }
}
function remove() {
  tasks.forEach((task) => {
    const status = document.querySelector('[data-status]');
    console.log(tasks);
    if (!status.checked) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  console.log(tasks);
}

task.addEventListener('keypress', (e) => {
  if ((e.key === 'Enter' || e.keyCode === 13) && task.value) {
    tasks.push({ description: task.value, completed: false, index: task.length + 1 });
    task.value = '';
    populate();
  }
});

clear.addEventListener('click', () => {
  remove();
  populate();
});