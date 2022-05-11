import Tasks from './modules/tasks.js';

const tasks = new Tasks();

tasks.populate();

const userInput = document.querySelector('[data-input]');
userInput.addEventListener('keypress', (e) => {
  if ((e.key === 'Enter' || e.keyCode === 13) && userInput.value) {
    tasks.add(userInput.value);
    userInput.value = '';
  }
});

const deleteInput = document.querySelector('[data-btn-delete]');

// const list = document.querySelector('[data-task-list]');
// const clear = document.querySelector('[data-clear-all]');
// const tasks = [];
// const task = document.querySelector('[data-input]');
//
// localStorage.setItem('todo', JSON.stringify(tasks));

// const populate = () => {
//   list.innerHTML = '';
//
//   for (let i = 0; i < tasks.length; i += 1) {
//     const taskCard = document.createElement('li');
//     taskCard.classList.add('list-group-item');
//     taskCard.classList.add('task');
//     taskCard.innerHTML = `
//       <label class="container">
//         <input type="checkbox" id="completed" name="checkbox" data-status>
//         ${tasks[i].description}<span>&#8942;</span>
//       </label>`;
//     list.appendChild(taskCard);
//     task.value = '';
//   }
// }
//
// function remove(tasks) {
//   tasks.forEach((task) => {
//     if (status.checked) {
//       tasks[task].completed = true;
//     }
//     tasks = tasks.filter((task) => task.completed === false);
//   });
// }
//
// task.addEventListener('keypress', (e) => {
//   if ((e.key === 'Enter' || e.keyCode === 13) && task.value) {
//     tasks.push({ description: task.value, completed: false, index: task.length + 1 });
//     task.value = '';
//     populate();
//   }
// });
//
// const checkbox = document.querySelectorAll('#completed');
//
// checkbox.addEventListener('change', (e) => {
//
//   if (e.target.checked) {
//     checkbox.parentElement.classList.add('done');
//   }
// });
//
// clear.addEventListener('click', () => {
//   $(':checkbox').each(() => {
//     const that = $(this);
//     if (that.is(':checked')) {
//       const obj = that.closest('label');
//       const idx = obj.index();
//       obj.remove();
//       tasks.splice(idx, 1);
//     }
//   });
//   console.log(tasks);
// });