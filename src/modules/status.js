export default class Status {
  completeTask = (array) => {
    const checkboxes = document.querySelectorAll('.check-task');
    const todos = document.querySelectorAll('.todo-task');
    checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener('click', () => {
        todos[index].classList.toggle('active');
        array[index].isComplete = !array[index].isComplete;
        localStorage.setItem('tasks', JSON.stringify(array));
      });
    });
  }

  clear = (array) => {
    const btnClear = document.querySelector('[data-clear-all]');
    btnClear.addEventListener('click', () => {
      array = array.filter((item) => item.isComplete === false);
      localStorage.setItem('tasks', JSON.stringify(array));
      document.location.reload();
    });
  }
}