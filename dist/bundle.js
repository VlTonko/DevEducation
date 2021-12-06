/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ (() => {

eval("model = { items: [] };\r\n\r\nview = {\r\n  clearList: function () {\r\n    let range = document.createRange();\r\n    range.selectNodeContents(document.getElementById('list'));\r\n    range.deleteContents();\r\n  },\r\n\r\n  render: function () {\r\n    this.clearList();\r\n\r\n    if (model.items.length != 0) {\r\n      list = document.getElementById('list');\r\n\r\n      for (let i = model.items.length - 1; i >= 0; i--) {\r\n        console.log(model.items[i]);\r\n\r\n        item = document.createElement('li');\r\n        span = document.createElement('span');\r\n        check = document.createElement('a');\r\n        cross = document.createElement('a');\r\n        iconCheck = document.createElement('i');\r\n        iconCross = document.createElement('i');\r\n\r\n        item.className = 'item';\r\n        span.className = 'item-text';\r\n        check.className = 'item-complete';\r\n        cross.className = 'item-delete';\r\n\r\n        span.textContent = model.items[i].text;\r\n\r\n        // Put a line through any items we've 'ticked' off\r\n        if (model.items[i].completed) {\r\n          span.setAttribute('style', 'text-decoration: line-through; color: #bbb');\r\n        }\r\n\r\n        // Add our icons\r\n        iconCheck.setAttribute('class', 'icon ion-md-checkmark');\r\n        iconCheck.setAttribute('data-id', i);\r\n        iconCross.setAttribute('class', 'icon ion-md-trash');\r\n        iconCross.setAttribute('data-id', i);\r\n\r\n        // Add our onclick functions for complete/delete actions\r\n        check.setAttribute('onclick', \"controller.completeItem('\" + i + \"')\");\r\n        cross.setAttribute('onclick', \"controller.deleteItem('\" + i + \"')\");\r\n\r\n        // Append all our elements and add to DOM\r\n        check.appendChild(iconCheck);\r\n        cross.appendChild(iconCross);\r\n        item.appendChild(span);\r\n        item.appendChild(check);\r\n        item.appendChild(cross);\r\n        list.appendChild(item);\r\n      }\r\n    }\r\n  },\r\n\r\n  addItem: function (e) {\r\n    if (e.code === 'Enter' || e.code === 'NumpadEnter') {\r\n      if (document.getElementById('add-item').value !== '' && document.getElementById('add-item').value !== ' ') {\r\n        item = document.getElementById('add-item').value;\r\n        controller.addItem(item);\r\n        return false;\r\n      }\r\n    }\r\n  },\r\n};\r\n\r\ncontroller = {\r\n  init: function () {\r\n    view.render();\r\n  },\r\n\r\n  addItem: function (item) {\r\n    list_item = { text: item, completed: false };\r\n    model.items.push(list_item);\r\n    document.getElementById('add-item').value = '';\r\n    view.render();\r\n  },\r\n\r\n  completeItem: function (item_index) {\r\n    model.items[item_index].completed = !model.items[item_index].completed;\r\n    console.log(model.items[item_index].completed);\r\n    view.render();\r\n  },\r\n\r\n  deleteItem: function (item_index) {\r\n    model.items.splice(item_index, 1);\r\n    view.render();\r\n  },\r\n};\r\n\r\ncontroller.addItem('First todo.');\r\ncontroller.addItem('Second todo.');\r\n\r\ncontroller.init();\r\n\n\n//# sourceURL=webpack://ToDo/./src/scripts/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/app.js"]();
/******/ 	
/******/ })()
;