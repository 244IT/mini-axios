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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/axios */ \"./lib/axios.js\");\n\n\n//# sourceURL=webpack://mork/./index.js?");

/***/ }),

/***/ "./lib/axios.js":
/*!**********************!*\
  !*** ./lib/axios.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios */ \"./lib/core/Axios.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./lib/utils.js\");\n\n\n\nfunction createInstance(defaultConfig) {\n  var context = new _core_Axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"](defaultConfig);\n  var instance = _core_Axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.request.bind(context);\n  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(instance, _core_Axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(instance, context);\n  return instance;\n}\n\nvar axios = createInstance(\"默认配置\");\n\naxios.create = function create(instanceConfig) {\n  return createInstance(\"默认配置\" + instanceConfig);\n};\n\nwindow.axios = axios;\n\n//# sourceURL=webpack://mork/./lib/axios.js?");

/***/ }),

/***/ "./lib/core/Axios.js":
/*!***************************!*\
  !*** ./lib/core/Axios.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./lib/utils.js\");\n\n\nfunction Axios(defaults) {\n  this.defaults = defaults;\n  this.interceptors = {\n    request: \"请求拦截器\",\n    response: \"响应拦截器\"\n  };\n}\n\nAxios.prototype.request = function () {\n  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    method: \"get\"\n  };\n  console.log(\"\\u53D1\\u9001\".concat(config.method, \"\\u8BF7\\u6C42\"));\n};\n\n(0,_utils__WEBPACK_IMPORTED_MODULE_0__.forEach)([\"delete\", \"get\", \"head\", \"options\"], function forEachMethodNoData(method) {\n  Axios.prototype[method] = function () {\n    return this.request({\n      method: method\n    });\n  };\n});\n(0,_utils__WEBPACK_IMPORTED_MODULE_0__.forEach)([\"post\", \"put\", \"patch\"], function forEachMethodWithData(method) {\n  Axios.prototype[method] = function () {\n    return this.request({\n      method: method\n    });\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);\n\n//# sourceURL=webpack://mork/./lib/core/Axios.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"extend\": () => (/* binding */ extend),\n/* harmony export */   \"forEach\": () => (/* binding */ forEach),\n/* harmony export */   \"isArray\": () => (/* binding */ isArray)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction isArray(val) {\n  return Object.prototype.toString.call(val) === \"[object Array]\";\n}\n\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === \"function\") {\n      a[key] = val.bind(thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\nfunction forEach(obj, fn) {\n  // 不处理null和undefined\n  if (obj === null || typeof obj === \"undefined\") {\n    return;\n  } // 基本类型强制转为数组\n\n\n  if (_typeof(obj) !== \"object\") {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // 遍历数组\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // 遍历对象\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack://mork/./lib/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;