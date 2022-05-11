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