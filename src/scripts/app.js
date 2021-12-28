import '../styles/style.css';
import { Model } from './model';
import { View } from './view';
import { Controller } from './controller';

require('babel-core/register');
require('babel-polyfill');

export const model = new Model();
export const view = new View();
export const controller = new Controller(model, view);

export const list = document.querySelector('.todolist');

(function () {
    document.querySelector('.btnPrimary').addEventListener('click', controller.addTask);
    model.getTodoForAPI();
    controller.deleteTask();
    controller.checkedTask();
})();
