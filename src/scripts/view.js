import { list } from './app';

export class View {
    constructor(controller) {
        this.controller = controller;
    }
    renderTask(task) {
        const item = document.createElement('li');
        const buttons = document.createElement('div');
        const remove = document.createElement('button');
        const complete = document.createElement('input');
        const textTask = document.createElement('span');
        buttons.appendChild(remove);
        buttons.classList.add('buttons');
        remove.innerHTML = 'Delete';
        remove.classList.add('btnDanger');
        complete.type = 'checkbox';
        complete.classList.add('check');
        if (task.complete === true) {
            item.classList.add('complete');
            complete.checked = true;
        }
        item.classList.add('todo');
        item.appendChild(buttons);
        item.appendChild(complete);
        textTask.textContent = task.title;
        item.appendChild(textTask);
        list.appendChild(item);
    }

    deleteTask() {
        list.addEventListener('click', function (e) {
            if (e.target.type === 'submit') {
                let item = e.target.parentNode.parentNode;
                console.log(list);
                console.log(item);
                list.removeChild(item);
            }
        });
    }

    checkedTask() {
        list.addEventListener('click', function (e) {
            if (e.target.type === 'checkbox') {
                let item = e.target.parentNode;
                item.classList.toggle('complete');
            }
        });
    }
}
