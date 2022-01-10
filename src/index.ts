import { dragStart, dragEnd, Drop, dragOver, dragEnter, dragLeave } from './scripts/drag&drop';
import { createTaskTodo, createTaskProgress, createTaskDone } from './scripts/createTasks';
import './style.css';

const tasks = Array.from(document.getElementsByClassName('task'));
const statusBlock = Array.from(document.getElementsByClassName('choice'));

const btnAdd_todo = document.querySelector('.btnAddTask_todo') as HTMLButtonElement;
const btnAdd_progress = document.querySelector('.btnAddTask_progress') as HTMLButtonElement;
const btnAdd_done = document.querySelector('.btnAddTask_done') as HTMLButtonElement;

btnAdd_todo.addEventListener('click', createTaskTodo);
btnAdd_progress.addEventListener('click', createTaskProgress);
btnAdd_done.addEventListener('click', createTaskDone);

tasks.forEach(task => {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
});

statusBlock.forEach(block => {
    block.addEventListener('dragover', dragOver);
    block.addEventListener('dragenter', dragEnter);
    block.addEventListener('dragleave', dragLeave);
    block.addEventListener('drop', Drop);
});
