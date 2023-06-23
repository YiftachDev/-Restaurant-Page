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

/***/ "./src/ContactUs.js":
/*!**************************!*\
  !*** ./src/ContactUs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactUs)\n/* harmony export */ });\nfunction contactUs() {\r\n  content.innerHTML += `<h1>contactUs</h1>`;\r\n}\r\n\n\n//# sourceURL=webpack://restorant/./src/ContactUs.js?");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home(content) {\r\n  content.innerHTML += `<div class=\"container\">\r\n    <h1>Pizza de la Kizza</h1>\r\n    <div class=\"section\">\r\n        <h2>About Us</h2>\r\n        <p>\r\n        Pizza de la Kizza is a vibrant pizzeria in [City/Town] offering\r\n        handcrafted pizzas with quality ingredients, diverse menu options,\r\n        and exceptional service. Whether dining in or ordering online, they\r\n        provide a delightful pizza experience that satisfies all tastes.\r\n        </p>\r\n    </div>\r\n    <div class=\"section\">\r\n        <h2>Hours</h2>\r\n        <ul>\r\n        <li>Monday: 11:00 AM - 9:00 PM</li>\r\n        <li>Tuesday: 11:00 AM - 9:00 PM</li>\r\n        <li>Wednesday: 11:00 AM - 9:00 PM</li>\r\n        <li>Thursday: 11:00 AM - 9:00 PM</li>\r\n        <li>Friday: 11:00 AM - 10:00 PM</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"section\">\r\n        <h2>Location</h2>\r\n        <p>located in the charming town of Portofino, Italy.</p>\r\n    </div>\r\n    </div>`;\r\n}\r\n\n\n//# sourceURL=webpack://restorant/./src/Home.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(content) {\r\n  content.innerHTML += `<h1>Menu</h1>`;\r\n}\r\n\n\n//# sourceURL=webpack://restorant/./src/Menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _ContactUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactUs */ \"./src/ContactUs.js\");\n\r\n\r\n\r\n\r\nconst flow = (() => {\r\n  const defaultContent = `<div class=\"navbar\">\r\n    <a href=\"#\" class=\"hover-underline-animation\" id=\"home\">Home</a>\r\n    <a href=\"#\" class=\"hover-underline-animation\" id=\"menu\">Menu</a>\r\n    <a href=\"#\" class=\"hover-underline-animation\" id=\"contact-us\">Contact Us</a>\r\n  </div>`;\r\n  const content = document.querySelector(\"#content\");\r\n\r\n  function init() {\r\n    content.innerHTML = defaultContent;\r\n    (0,_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\r\n  }\r\n\r\n  function resetContent() {\r\n    content.innerHTML = defaultContent;\r\n  }\r\n\r\n  init();\r\n\r\n  content.addEventListener(\"click\", event => {\r\n    event.preventDefault();\r\n    const target = event.target;\r\n    if (target.id === \"home\") {\r\n      resetContent();\r\n      (0,_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\r\n    } else if (target.id === \"menu\") {\r\n      resetContent();\r\n      (0,_Menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\r\n    } else if (target.id === \"contact-us\") {\r\n      resetContent();\r\n      (0,_ContactUs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\r\n    }\r\n  });\r\n})();\r\n\n\n//# sourceURL=webpack://restorant/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;