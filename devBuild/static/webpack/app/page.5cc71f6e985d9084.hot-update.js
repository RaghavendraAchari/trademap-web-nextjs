"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_commons_TradeDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/commons/TradeDetails */ \"(app-pages-browser)/./src/components/commons/TradeDetails.tsx\");\n/* harmony import */ var _components_commons_PendingDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/commons/PendingDetails */ \"(app-pages-browser)/./src/components/commons/PendingDetails.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_commons_useCurrentTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/commons/useCurrentTime */ \"(app-pages-browser)/./src/components/commons/useCurrentTime.ts\");\n/* harmony import */ var _components_commons_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/commons/PageHeader */ \"(app-pages-browser)/./src/components/commons/PageHeader.tsx\");\n/* harmony import */ var _components_commons_useRefreshEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/commons/useRefreshEvent */ \"(app-pages-browser)/./src/components/commons/useRefreshEvent.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [forDate, setForDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Date());\n    const { date } = (0,_components_commons_useCurrentTime__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const { refreshComponents } = (0,_components_commons_useRefreshEvent__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const onDataSubmit = ()=>{\n        refreshComponents();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commons_PageHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                title: \"Dashboard\",\n                description: \"Date and Time: \" + date.toLocaleString()\n            }, void 0, false, {\n                fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:grow md:overflow-y-auto flex flex-col lg:flex-row pt-0 space-y-4 lg:space-y-0 lg:space-x-2 m-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commons_TradeDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        forDate: forDate,\n                        setForDate: setForDate,\n                        onDataSubmit: onDataSubmit\n                    }, void 0, false, {\n                        fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commons_PendingDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        setForDate: setForDate,\n                        forDate: forDate\n                    }, void 0, false, {\n                        fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"uZDxHY48/SckXSP10bk44iPAqY4=\", false, function() {\n    return [\n        _components_commons_useCurrentTime__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _components_commons_useRefreshEvent__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDRztBQUM3QjtBQUNnQztBQUNSO0FBQ1U7QUFHcEQsU0FBU007O0lBRXRCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBTyxJQUFJTztJQUNqRCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHUCw4RUFBY0E7SUFDL0IsTUFBTSxFQUFFUSxpQkFBaUIsRUFBRSxHQUFHTiwrRUFBZUE7SUFFN0MsTUFBTU8sZUFBZTtRQUNuQkQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1Ysc0VBQVVBO2dCQUFDVyxPQUFNO2dCQUFZQyxhQUFhLG9CQUFvQk4sS0FBS08sY0FBYzs7Ozs7OzBCQUVsRiw4REFBQ0o7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDZCx3RUFBVUE7d0JBQUNPLFNBQVNBO3dCQUFTQyxZQUFZQTt3QkFBWUksY0FBY0E7Ozs7OztrQ0FDcEUsOERBQUNYLDBFQUFXQTt3QkFBQ08sWUFBWUE7d0JBQVlELFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEQ7R0FwQndCRDs7UUFHTEgsMEVBQWNBO1FBQ0RFLDJFQUFlQTs7O0tBSnZCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgVHJhZGVzTGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbnMvVHJhZGVEZXRhaWxzXCI7XG5pbXBvcnQgUGVuZGluZ0RheXMgZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb25zL1BlbmRpbmdEZXRhaWxzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUN1cnJlbnREYXRlIGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9ucy91c2VDdXJyZW50VGltZVwiO1xuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb25zL1BhZ2VIZWFkZXJcIjtcbmltcG9ydCB1c2VSZWZyZXNoRXZlbnQgZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb25zL3VzZVJlZnJlc2hFdmVudFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2ZvckRhdGUsIHNldEZvckRhdGVdID0gdXNlU3RhdGU8RGF0ZT4obmV3IERhdGUoKSlcbiAgY29uc3QgeyBkYXRlIH0gPSB1c2VDdXJyZW50RGF0ZSgpO1xuICBjb25zdCB7IHJlZnJlc2hDb21wb25lbnRzIH0gPSB1c2VSZWZyZXNoRXZlbnQoKVxuXG4gIGNvbnN0IG9uRGF0YVN1Ym1pdCA9ICgpID0+IHtcbiAgICByZWZyZXNoQ29tcG9uZW50cygpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlJz5cbiAgICAgIDxQYWdlSGVhZGVyIHRpdGxlPVwiRGFzaGJvYXJkXCIgZGVzY3JpcHRpb249e1wiRGF0ZSBhbmQgVGltZTogXCIgKyBkYXRlLnRvTG9jYWxlU3RyaW5nKCl9IC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpncm93IG1kOm92ZXJmbG93LXktYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IHB0LTAgc3BhY2UteS00IGxnOnNwYWNlLXktMCBsZzpzcGFjZS14LTIgbS0yICcgPlxuICAgICAgICA8VHJhZGVzTGlzdCBmb3JEYXRlPXtmb3JEYXRlfSBzZXRGb3JEYXRlPXtzZXRGb3JEYXRlfSBvbkRhdGFTdWJtaXQ9e29uRGF0YVN1Ym1pdH0gLz5cbiAgICAgICAgPFBlbmRpbmdEYXlzIHNldEZvckRhdGU9e3NldEZvckRhdGV9IGZvckRhdGU9e2ZvckRhdGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRyYWRlc0xpc3QiLCJQZW5kaW5nRGF5cyIsInVzZVN0YXRlIiwidXNlQ3VycmVudERhdGUiLCJQYWdlSGVhZGVyIiwidXNlUmVmcmVzaEV2ZW50IiwiSG9tZSIsImZvckRhdGUiLCJzZXRGb3JEYXRlIiwiRGF0ZSIsImRhdGUiLCJyZWZyZXNoQ29tcG9uZW50cyIsIm9uRGF0YVN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0b0xvY2FsZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});