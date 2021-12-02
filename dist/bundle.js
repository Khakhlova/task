/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n\n\n//# sourceURL=webpack://task/./src/app.js?");

/***/ }),

/***/ "./src/js/addElement.js":
/*!******************************!*\
  !*** ./src/js/addElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addElement)\n/* harmony export */ });\nfunction addElement(idDiv, prevEl, textDiv, cityValue) {\n  let newDiv = document.createElement(\"div\");\n  newDiv.id = idDiv;\n  newDiv.innerText = textDiv;\n  prevEl.after(newDiv);\n  cityValue.value = \"\";\n}\n\n//# sourceURL=webpack://task/./src/js/addElement.js?");

/***/ }),

/***/ "./src/js/getWeather.js":
/*!******************************!*\
  !*** ./src/js/getWeather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _addElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addElement */ \"./src/js/addElement.js\");\n\nconst orderDiv = document.getElementById(\"order\");\nasync function getWeather(divName) {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${divName.value.trim()}&lang=en&appid=db3aac137df7b67df636b858dd74c086&units=metric`;\n  const res = await fetch(url);\n  const data = await res.json();\n\n  if (data.cod == 404) {\n    (0,_addElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"msg\", orderDiv, \"City not found\", divName);\n  } else {\n    let result = `     ${divName.value.toUpperCase()}\n                    temperature: ${data.main.temp}°C\n                    humidity: ${data.main.humidity} %\n                    windSpeed: ${data.wind.speed} m/s`;\n    console.log(result);\n    (0,_addElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"msg\", orderDiv, result, divName);\n  }\n}\n;\n\n//# sourceURL=webpack://task/./src/js/getWeather.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addElement */ \"./src/js/addElement.js\");\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeather */ \"./src/js/getWeather.js\");\n\n\nconst city = document.getElementById(\"city\");\nconst submitBtn = document.getElementById(\"submit\");\nconst formEl = document.getElementById(\"form\");\n\nfunction deleteElement(idEl) {\n  if (document.getElementById(idEl)) {\n    document.getElementById(idEl).remove();\n  }\n}\n\n;\ncity.addEventListener(\"focus\", () => {\n  deleteElement(\"msg\");\n  deleteElement(\"msg_warn\");\n});\ncity.addEventListener(\"keydown\", e => {\n  if (e.key === 'Enter') {\n    e.preventDefault();\n  }\n});\nsubmitBtn.addEventListener('click', () => {\n  deleteElement(\"msg\");\n  deleteElement(\"msg_warn\");\n\n  if (!city.value) {\n    (0,_addElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"msg_warn\", form, \"Enter city!\", city);\n  } else {\n    (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(city);\n  }\n});\n\n//# sourceURL=webpack://task/./src/js/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://task/./src/scss/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;