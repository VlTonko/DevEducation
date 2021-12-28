import axios from 'axios';
import { view } from './app';

const urlRequest = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

export class Model {
    constructor(view) {
        this.view = view;
    }
    getTodoForAPI() {
        async function getData() {
            try {
                const data = await axios.get(urlRequest);
                data.data.forEach(element => {
                    view.renderTask(element);
                });
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }

    addTask() {
        const inputText = document.querySelector('.formControl');
        if (inputText.value !== '' && inputText.value !== undefined) {
            let task = {};
            task.userId = '';
            task.id = '';
            task.title = inputText.value;
            task.completed = false;
            view.renderTask(task);
            inputText.value = '';
        }
    }

    deleteTask() {
        view.deleteTask();
    }

    checkedTask() {
        view.checkedTask();
    }
}
