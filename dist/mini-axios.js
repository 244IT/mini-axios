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

/***/ "./lib/adapters/xhr.js":
/*!*****************************!*\
  !*** ./lib/adapters/xhr.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction xhrAdapter(config) {\n  var requestData = config.data;\n  return new Promise(function (resolve, reject) {\n    var xhr = new XMLHttpRequest();\n    xhr.open(config.method, config.url);\n\n    xhr.onreadystatechange = function () {\n      if (xhr.readyState === 4) {\n        if (xhr.status >= 200 && xhr.status < 300) {\n          resolve(JSON.parse(xhr.responseText)[0]);\n          xhr = null;\n        } else {\n          reject(\"请求失败\");\n          xhr = null;\n        }\n      }\n    };\n\n    xhr.send(requestData);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (xhrAdapter);\n\n//# sourceURL=webpack://mork/./lib/adapters/xhr.js?");

/***/ }),

/***/ "./lib/axios.js":
/*!**********************!*\
  !*** ./lib/axios.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios */ \"./lib/core/Axios.js\");\n/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaults */ \"./lib/defaults.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./lib/utils.js\");\n\n\n\n\nfunction createInstance(defaultConfig) {\n  var context = new _core_Axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"](defaultConfig);\n  var instance = _core_Axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.request.bind(context);\n  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.extend)(instance, _core_Axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.extend)(instance, context);\n  return instance;\n}\n\nvar axios = createInstance(_defaults__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\naxios.create = function create(instanceConfig) {\n  return createInstance(\"默认配置\" + instanceConfig);\n};\n\nwindow.axios = axios;\n\n//# sourceURL=webpack://mork/./lib/axios.js?");

/***/ }),

/***/ "./lib/core/Axios.js":
/*!***************************!*\
  !*** ./lib/core/Axios.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./lib/utils.js\");\n/* harmony import */ var _dispatchRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dispatchRequest */ \"./lib/core/dispatchRequest.js\");\n\n\n\nfunction Axios(defaults) {\n  this.defaults = defaults;\n  this.interceptors = {\n    request: \"请求拦截器\",\n    response: \"响应拦截器\"\n  };\n}\n\nAxios.prototype.request = function () {\n  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    method: \"get\"\n  };\n  var chain = [_dispatchRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"], undefined];\n  var promise = Promise.resolve(config);\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n\n(0,_utils__WEBPACK_IMPORTED_MODULE_0__.forEach)([\"delete\", \"get\", \"head\", \"options\"], function forEachMethodNoData(method) {\n  Axios.prototype[method] = function (url, config) {\n    return this.request((0,_utils__WEBPACK_IMPORTED_MODULE_0__.merge)(config || {}, {\n      method: method,\n      url: url\n    }));\n  };\n});\n(0,_utils__WEBPACK_IMPORTED_MODULE_0__.forEach)([\"post\", \"put\", \"patch\"], function forEachMethodWithData(method) {\n  Axios.prototype[method] = function (url, data, config) {\n    return this.request((0,_utils__WEBPACK_IMPORTED_MODULE_0__.merge)(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);\n\n//# sourceURL=webpack://mork/./lib/core/Axios.js?");

/***/ }),

/***/ "./lib/core/dispatchRequest.js":
/*!*************************************!*\
  !*** ./lib/core/dispatchRequest.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults */ \"./lib/defaults.js\");\n\n\nfunction dispatchRequest(config) {\n  var adapter = config.adapter || _defaults__WEBPACK_IMPORTED_MODULE_0__[\"default\"].adapter;\n  return adapter(config).then(function (res) {\n    return res;\n  }, function (err) {\n    return err;\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatchRequest);\n\n//# sourceURL=webpack://mork/./lib/core/dispatchRequest.js?");

/***/ }),

/***/ "./lib/defaults.js":
/*!*************************!*\
  !*** ./lib/defaults.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _adapters_xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapters/xhr */ \"./lib/adapters/xhr.js\");\n\n\nfunction getDefaultAdapter() {\n  var adapter;\n\n  if (typeof XMLHttpRequest !== \"undefined\") {\n    // For browsers use XHR adapter\n    //引入用于发送 AJAX 请求的适配器\n    adapter = _adapters_xhr__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  } else if (typeof process !== \"undefined\" && Object.prototype.toString.call(process) === \"[object process]\") {\n    // For node use HTTP adapter\n    adapter = Promise.resolve(\"node的http请求\");\n  }\n\n  return adapter;\n}\n\nvar defaults = {\n  //适配器\n  adapter: getDefaultAdapter() // ...\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);\n\n//# sourceURL=webpack://mork/./lib/defaults.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"extend\": () => (/* binding */ extend),\n/* harmony export */   \"forEach\": () => (/* binding */ forEach),\n/* harmony export */   \"isArray\": () => (/* binding */ isArray),\n/* harmony export */   \"merge\": () => (/* binding */ merge)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction isArray(val) {\n  return Object.prototype.toString.call(val) === \"[object Array]\";\n}\n\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === \"function\") {\n      a[key] = val.bind(thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\nfunction forEach(obj, fn) {\n  // 不处理null和undefined\n  if (obj === null || typeof obj === \"undefined\") {\n    return;\n  } // 基本类型强制转为数组\n\n\n  if (_typeof(obj) !== \"object\") {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // 遍历数组\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // 遍历对象\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\nfunction\n  /* obj1, obj2, obj3, ... */\nmerge() {\n  var result = {};\n\n  function assignValue(val, key) {\n    if (_typeof(result[key]) === \"object\" && _typeof(val) === \"object\") {\n      result[key] = merge(result[key], val);\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n\n  return result;\n}\n\n\n\n//# sourceURL=webpack://mork/./lib/utils.js?");

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