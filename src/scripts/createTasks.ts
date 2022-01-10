import { dragStart, dragEnd } from './drag&drop';

export function createTaskTodo() {
    let taskTodo = document.querySelector('.choice_todo') as HTMLDivElement;
    let textTask = document.querySelector('.addTask_todo') as HTMLInputElement;
    createTask(taskTodo, textTask);
}

export function createTaskProgress() {
    let taskTodo = document.querySelector('.choice_progress') as HTMLDivElement;
    let textTask = document.querySelector('.addTask_progress') as HTMLInputElement;
    createTask(taskTodo, textTask);
}

export function createTaskDone() {
    let taskTodo = document.querySelector('.choice_done') as HTMLDivElement;
    let textTask = document.querySelector('.addTask_done') as HTMLInputElement;
    createTask(taskTodo, textTask);
}

function createTask(taskTodo: HTMLDivElement, textTask: HTMLInputElement) {
    let newTask = document.createElement('p');
    if (textTask.value) {
        newTask.setAttribute('draggable', 'true');
        newTask.classList.add('task');
        newTask.textContent = textTask.value;
        newTask.addEventListener('dragstart', dragStart);
        newTask.addEventListener('dragend', dragEnd);
        //localStorage.setItem(newTask.textContent, JSON.stringify(newTask.textContent));
        taskTodo.append(newTask);
        textTask.value = '';
    }
}
