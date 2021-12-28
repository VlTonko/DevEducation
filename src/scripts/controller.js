import { model } from './app';

export class Controller {
    constructor(model) {
        this.model = model;
    }

    addTask(ev) {
        ev.preventDefault();
        model.addTask();
    }

    deleteTask() {
        model.deleteTask();
    }

    checkedTask() {
        model.checkedTask();
    }
}
