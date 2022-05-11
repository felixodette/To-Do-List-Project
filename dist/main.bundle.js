"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tasks.js */ \"./src/modules/tasks.js\");\n/* harmony import */ var _modules_status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/status.js */ \"./src/modules/status.js\");\n\n\n\nconst status = new _modules_status_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst tasks = new _modules_tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\ntasks.populate();\n\nconst userInput = document.querySelector('[data-input]');\nuserInput.addEventListener('keypress', (e) => {\n  if ((e.key === 'Enter' || e.keyCode === 13) && userInput.value) {\n    tasks.add(userInput.value);\n    userInput.value = '';\n  }\n});\n\nconst btnRefresh = document.querySelector('[data-refresh]');\nbtnRefresh.addEventListener('click', () => {\n  document.location.reload();\n});\n\nstatus.clear(tasks.taskArray);\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/modules/status.js":
/*!*******************************!*\
  !*** ./src/modules/status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Status)\n/* harmony export */ });\nclass Status {\n  completeTask = (array) => {\n    const checkboxes = document.querySelectorAll('.check-task');\n    const todos = document.querySelectorAll('.todo-task');\n    checkboxes.forEach((checkbox, index) => {\n      checkbox.addEventListener('click', () => {\n        todos[index].classList.toggle('active');\n        array[index].isComplete = !array[index].isComplete;\n        localStorage.setItem('tasks', JSON.stringify(array));\n      });\n    });\n  }\n\n  clear = (array) => {\n    const btnClear = document.querySelector('[data-clear-all]');\n    btnClear.addEventListener('click', () => {\n      array = array.filter((item) => item.isComplete === false);\n      localStorage.setItem('tasks', JSON.stringify(array));\n      document.location.reload();\n    });\n  }\n}\n\n//# sourceURL=webpack://webpack-template/./src/modules/status.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status.js */ \"./src/modules/status.js\");\n\n\nconst status = new _status_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nclass Tasks {\n  constructor() {\n    this.taskArray = JSON.parse(localStorage.getItem('tasks')) || [];\n  }\n\n  populate = () => {\n    const todoContainer = document.querySelector('[data-task-list]');\n    todoContainer.innerHTML = '';\n    this.taskArray.forEach((task) => {\n      const li = document.createElement('li');\n      li.className = 'list-group-item todo-task';\n      li.innerHTML = `\n    <label class=\"container\">\n      <button class=\"check-task\" data-status><i class=\"fa-regular fa-square\"></i><i class=\"fa-solid fa-check\"></i></button>\n      <input class=\"todo-item\" type=\"text\" value=\"${task.description}\"><button class=\"btnDelete\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash3-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z\"/>\n</svg></button>\n    </label>`;\n      todoContainer.insertBefore(li, todoContainer.children[task.index]);\n\n      if (task.isComplete) {\n        li.classList.add('active');\n      }\n    });\n\n    const deleteBtn = document.querySelectorAll('.btnDelete');\n    deleteBtn.forEach((button, index) => {\n      button.addEventListener('click', () => {\n        this.remove(index);\n      });\n    });\n\n    const editInput = document.querySelectorAll('.todo-item');\n    editInput.forEach((input, index) => {\n      input.addEventListener('keypress', (e) => {\n        if ((e.key === 'Enter' || e.keyCode === 13) && input.value) {\n          this.update(input.value, index);\n        }\n      });\n      input.addEventListener('change', () => {\n        if (input.value) {\n          this.update(input.value, index);\n        }\n      });\n    });\n    status.completeTask(this.taskArray);\n  }\n\n  add = (value) => {\n    const newTask = {\n      description: value,\n      isComplete: false,\n      index: this.taskArray.length,\n    };\n    this.taskArray.push(newTask);\n    localStorage.setItem('tasks', JSON.stringify(this.taskArray));\n    this.populate();\n  }\n\n  remove = (index) => {\n    this.taskArray.splice(index, 1);\n    for (let i = 0; i < this.taskArray.length; i += 1) {\n      this.taskArray[i].index = i;\n    }\n    localStorage.setItem('tasks', JSON.stringify(this.taskArray));\n    this.populate();\n  }\n\n  update = (value, index) => {\n    this.taskArray[index].description = value;\n    localStorage.setItem('tasks', JSON.stringify(this.taskArray));\n    this.populate();\n  }\n}\n\n//# sourceURL=webpack://webpack-template/./src/modules/tasks.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);