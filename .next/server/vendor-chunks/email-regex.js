"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/email-regex";
exports.ids = ["vendor-chunks/email-regex"];
exports.modules = {

/***/ "(ssr)/./node_modules/email-regex/index.js":
/*!*******************************************!*\
  !*** ./node_modules/email-regex/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ emailRegex)\n/* harmony export */ });\nconst regex = '[^\\\\.\\\\s@:](?:[^\\\\s@:]*[^\\\\s@:\\\\.])?@[^\\\\.\\\\s@]+(?:\\\\.[^\\\\.\\\\s@]+)*';\n\nfunction emailRegex({exact} = {}) {\n\treturn exact ? new RegExp(`^${regex}$`) : new RegExp(regex, 'g');\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWwtcmVnZXgvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVlLHFCQUFxQixPQUFPLElBQUk7QUFDL0MsK0JBQStCLE1BQU07QUFDckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlc3RyZWFtLy4vbm9kZV9tb2R1bGVzL2VtYWlsLXJlZ2V4L2luZGV4LmpzP2U5YzciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVnZXggPSAnW15cXFxcLlxcXFxzQDpdKD86W15cXFxcc0A6XSpbXlxcXFxzQDpcXFxcLl0pP0BbXlxcXFwuXFxcXHNAXSsoPzpcXFxcLlteXFxcXC5cXFxcc0BdKykqJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW1haWxSZWdleCh7ZXhhY3R9ID0ge30pIHtcblx0cmV0dXJuIGV4YWN0ID8gbmV3IFJlZ0V4cChgXiR7cmVnZXh9JGApIDogbmV3IFJlZ0V4cChyZWdleCwgJ2cnKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/email-regex/index.js\n");

/***/ })

};
;