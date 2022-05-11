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
      ${task.description}<button class="btnDelete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg></button>
    </label>`;
      todoContainer.insertBefore(li, todoContainer.children[task.index]);
    });

    const deleteBtn = document.querySelectorAll('.btnDelete');
    deleteBtn.forEach((button, index) => {
      button.addEventListener('click', () => {
        this.remove(index);
      });
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

  remove = (index) => {
    this.taskArray.splice(index, 1);
    for (let i = 0; i < this.taskArray.length; i += 1) {
      this.taskArray[i].index = i;
    }
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));
    this.populate();
  }
}