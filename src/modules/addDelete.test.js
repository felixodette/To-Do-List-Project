import Tasks from './tasks.js';

describe('Tasks', () => {
  const task = new Tasks();
  task.add('Smile');
  task.add('Frown');
  task.add('Laugh');
  task.add('Cry');
  task.add('Brood');
  it('Add test', () => {
    expect(task.taskArray[0].description).toBe('Smile');
    expect(task.taskArray.length).toBe(5);
  });
  it('Remove test', () => {
    task.remove(1);
    expect(task.taskArray[1].description).toBe('Laugh');
  });
  // it('Edit test', () => {
  //   task.update(1, 'Frown');
  //   expect(task.taskArray[1].description).toBe('Frown');
  //   expect(task.taskArray.length).toBe(4);
  // });
});