export default class Tasks {
  constructor() {
    this.taskArray = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  populate = () => {
    const todoContainer = document.querySelector('[data-task-list]');
    todoContainer.innerHTML = '';
    this.taskArray.forEach((task) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.innerHTML = `
    <label class="container">
      <input type="checkbox" id="completed" name="checkbox" data-status>
      ${task.description}<span>&#8942;</span>
    </label>`;
      todoContainer.insertBefore(li, todoContainer.children[task.index]);
    });
  }

  add = (value) => {
    const newTask = {
      description: value,
      isComplete: false,
      index: this.taskArray.length,
    };
    this.taskArray.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));
    this.populate();
  }
}