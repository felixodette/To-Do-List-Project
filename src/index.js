import Tasks from './modules/tasks.js';
import Status from './modules/status.js';

const status = new Status();
const tasks = new Tasks();

tasks.populate();

const userInput = document.querySelector('[data-input]');
userInput.addEventListener('keypress', (e) => {
  if ((e.key === 'Enter' || e.keyCode === 13) && userInput.value) {
    tasks.add(userInput.value);
    userInput.value = '';
  }
});

const btnRefresh = document.querySelector('[data-refresh]');
btnRefresh.addEventListener('click', () => {
  document.location.reload();
});

status.clear(tasks.taskArray);