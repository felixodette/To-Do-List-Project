const list = document.querySelector('[data-task-list]');
const tasks = [{
  description:'wash the dishes',
  completed: false,
  index: 1,
}, {
  description: 'complete To Do list project',
  completed: false,
  index: 2,
}];

tasks.forEach((task) => {
  const taskCard = document.createElement('li');
  taskCard.classList.add('list-group-item');
  taskCard.classList.add('task-detail');
  taskCard.innerHTML = `
      <label class="container">
        <input type="checkbox" id="completed" data-status>
        ${task.description}<span>&#8942;</span>
      </label>`;
  list.appendChild(taskCard);
  task.value = '';

});