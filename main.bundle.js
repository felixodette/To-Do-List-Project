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
/***/ (() => {

eval("const list = document.querySelector('[data-task-list]');\nconst tasks = [{\n  description:'wash the dishes',\n  completed: false,\n  index: 1,\n}, {\n  description: 'complete To Do list project',\n  completed: false,\n  index: 2,\n}];\n\ntasks.forEach((task) => {\n  const taskCard = document.createElement('li');\n  taskCard.classList.add('list-group-item');\n  taskCard.classList.add('task-detail');\n  taskCard.innerHTML = `\n      <label class=\"container\">\n        <input type=\"checkbox\" id=\"completed\" data-status>\n        ${task.description}<span>&#8942;</span>\n      </label>`;\n  list.appendChild(taskCard);\n  task.value = '';\n\n});\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);