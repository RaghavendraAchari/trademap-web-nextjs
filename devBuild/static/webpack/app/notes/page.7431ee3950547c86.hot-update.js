"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/notes/page",{

/***/ "(app-pages-browser)/./src/app/notes/components/EditNote.tsx":
/*!***********************************************!*\
  !*** ./src/app/notes/components/EditNote.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditNote; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_commons_useCurrentTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/commons/useCurrentTime */ \"(app-pages-browser)/./src/components/commons/useCurrentTime.ts\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _hooks_useTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useTags */ \"(app-pages-browser)/./src/app/notes/hooks/useTags.ts\");\n/* harmony import */ var _hooks_useCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useCategories */ \"(app-pages-browser)/./src/app/notes/hooks/useCategories.ts\");\n/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tags */ \"(app-pages-browser)/./src/app/notes/components/Tags.tsx\");\n/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Categories */ \"(app-pages-browser)/./src/app/notes/components/Categories.tsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./src/components/ui/textarea.tsx\");\n/* harmony import */ var _lib_dateUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/dateUtils */ \"(app-pages-browser)/./src/lib/dateUtils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction EditNote(param) {\n    let { note, onSave } = param;\n    _s();\n    const { date } = (0,_components_commons_useCurrentTime__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { tags, setTags, removeTag, addNewTag } = (0,_hooks_useTags__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const { categories, addNewCategory, removeCategory, setCategories } = (0,_hooks_useCategories__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const handleOnSave = async ()=>{\n        console.log(note);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"note mx-auto flex min-h-64 flex-row bg-slate-50 p-2 py-0 min-w-full  backdrop-blur-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"timeline min-h-full w-4 border border-gray-200 bg-primary shadow-md\"\n            }, void 0, false, {\n                fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"connector z-10 -ml-4 flex min-h-full w-20 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"left-ball h-4 w-4 flex-none rounded-full border-4 border-white bg-primary shadow-md\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"line h-1 grow bg-primary\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"right-ball h-4 w-4 flex-none rounded-full border-4 border-white bg-primary shadow-md\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-2 w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card z-9 -ml-6 flex min-h-full w-full flex-col self-center rounded-lg bg-white p-2 pl-8 text-justify text-base font-medium shadow-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dateTime\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-end opacity-[75%]\",\n                                children: (0,_lib_dateUtils__WEBPACK_IMPORTED_MODULE_9__.getFullDateTime)(date)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 43\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header flex items-start justify-between gap-1 rounded-tl-md rounded-tr-md bg-slate-100 px-2 py-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    name: \"title\",\n                                    className: \"grow text-wrap h-8\",\n                                    placeholder: \"Add title\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-none flex items-center justify-start self-start  space-x-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tags__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        tags: tags,\n                                        setTags: setTags,\n                                        addNewTag: addNewTag,\n                                        removeTag: removeTag\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_8__.Textarea, {\n                            name: \"content\",\n                            className: \"body grow px-2 text-sm font-medium my-1\",\n                            placeholder: \"Add note details here...\",\n                            rows: 5\n                        }, void 0, false, {\n                            fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"footer flex min-h-10 w-full items-start justify-between gap-1 rounded-bl-md rounded-br-md bg-slate-200 px-2 py-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    name: \"footer\",\n                                    className: \"grow text-wrap h-8\",\n                                    placeholder: \"Add footer (optional)\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-none flex items-center justify-start self-start  space-x-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Categories__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        categories: categories,\n                                        addNewCategories: addNewCategory,\n                                        removeCategories: removeCategory,\n                                        setCategories: setCategories\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex min-h-10 w-full items-center justify-end gap-1 rounded-bl-md rounded-br-md bg-background px-2 py-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                className: \"button border border-slate-200 p-2 \",\n                                onClick: handleOnSave,\n                                children: \"Save\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\trademap-web\\\\src\\\\app\\\\notes\\\\components\\\\EditNote.tsx\",\n        lineNumber: 33,\n        columnNumber: 12\n    }, this);\n}\n_s(EditNote, \"oZs0ybASJe8VP/FW+1YBmt5jch8=\", false, function() {\n    return [\n        _components_commons_useCurrentTime__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        _hooks_useTags__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _hooks_useCategories__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = EditNote;\nvar _c;\n$RefreshReg$(_c, \"EditNote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbm90ZXMvY29tcG9uZW50cy9FZGl0Tm90ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNpRTtBQUNqQjtBQUdGO0FBR1A7QUFDWTtBQUN6QjtBQUNZO0FBQ2M7QUFDRjtBQVFuQyxTQUFTUyxTQUFTLEtBQXVCO1FBQXZCLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFTLEdBQXZCOztJQUM3QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHWiw4RUFBY0E7SUFDL0IsTUFBTSxFQUFFYSxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBR2IsMERBQU9BO0lBQ3ZELE1BQU0sRUFBRWMsVUFBVSxFQUFFQyxjQUFjLEVBQUVDLGNBQWMsRUFBRUMsYUFBYSxFQUFFLEdBQUdoQixnRUFBYUE7SUFHbkYsTUFBTWlCLGVBQWU7UUFDakJDLFFBQVFDLEdBQUcsQ0FBQ2I7SUFFaEI7SUFFQSxxQkFBTyw4REFBQ2M7UUFBSUMsV0FBVTs7MEJBQ2xCLDhEQUFDRDtnQkFBSUMsV0FBVTs7Ozs7OzBCQUVmLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7MEJBR25CLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FBVyw0RUFBQ0M7Z0NBQUVELFdBQVU7MENBQWtDakIsK0RBQWVBLENBQUNJOzs7Ozs7Ozs7OztzQ0FDekYsOERBQUNZOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ3ZCLHVEQUFLQTtvQ0FBQ3lCLE1BQUs7b0NBQVFGLFdBQVU7b0NBQXFCRyxhQUFZOzs7Ozs7OENBQy9ELDhEQUFDSjtvQ0FBSUMsV0FBVTs4Q0FDWCw0RUFBQ3BCLDZDQUFJQTt3Q0FBQ1EsTUFBTUE7d0NBQU1DLFNBQVNBO3dDQUFTRSxXQUFXQTt3Q0FBV0QsV0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUk3RSw4REFBQ1IsNkRBQVFBOzRCQUFDb0IsTUFBSzs0QkFBVUYsV0FBVTs0QkFBMENHLGFBQVk7NEJBQTJCQyxNQUFNOzs7Ozs7c0NBSTFILDhEQUFDTDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUN2Qix1REFBS0E7b0NBQUN5QixNQUFLO29DQUFTRixXQUFVO29DQUFxQkcsYUFBWTs7Ozs7OzhDQUNoRSw4REFBQ0o7b0NBQUlDLFdBQVU7OENBQ1gsNEVBQUNuQixtREFBVUE7d0NBQUNXLFlBQVlBO3dDQUFZYSxrQkFBa0JaO3dDQUFnQmEsa0JBQWtCWjt3Q0FBZ0JDLGVBQWVBOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHL0gsOERBQUNJOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDeEIseURBQU1BO2dDQUFDd0IsV0FBVTtnQ0FBc0NPLFNBQVNYOzBDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25HO0dBOUN3Qlo7O1FBQ0hULDBFQUFjQTtRQUNpQkcsc0RBQU9BO1FBQ2VDLDREQUFhQTs7O0tBSC9ESyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL25vdGVzL2NvbXBvbmVudHMvRWRpdE5vdGUudHN4PzZmNGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHVzZUN1cnJlbnREYXRlIGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9ucy91c2VDdXJyZW50VGltZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgTm90ZSBmcm9tIFwiQC9tb2RlbHMvTm90ZVwiO1xyXG5pbXBvcnQgeyBwb3N0Tm90ZSB9IGZyb20gXCJAL2FwcC9ub3Rlcy9ub3Rlc1NlcnZpY2VcIlxyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQmFuSWNvbiwgQ3Jvc3NJY29uLCBDcm9zc2hhaXJJY29uLCBQbHVzQ2lyY2xlSWNvbiwgWENpcmNsZUljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCB1c2VUYWdzIGZyb20gXCIuLi9ob29rcy91c2VUYWdzXCI7XHJcbmltcG9ydCB1c2VDYXRlZ29yaWVzIGZyb20gXCIuLi9ob29rcy91c2VDYXRlZ29yaWVzXCI7XHJcbmltcG9ydCBUYWdzIGZyb20gXCIuL1RhZ3NcIjtcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4vQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGV4dGFyZWFcIjtcclxuaW1wb3J0IHsgZ2V0RnVsbERhdGVUaW1lIH0gZnJvbSBcIkAvbGliL2RhdGVVdGlsc1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIG5vdGU6IE5vdGUsXHJcbiAgICBvblNhdmU6ICgpID0+IHZvaWRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXROb3RlKHsgbm90ZSwgb25TYXZlIH06IFByb3BzKSB7XHJcbiAgICBjb25zdCB7IGRhdGUgfSA9IHVzZUN1cnJlbnREYXRlKCk7XHJcbiAgICBjb25zdCB7IHRhZ3MsIHNldFRhZ3MsIHJlbW92ZVRhZywgYWRkTmV3VGFnIH0gPSB1c2VUYWdzKCk7XHJcbiAgICBjb25zdCB7IGNhdGVnb3JpZXMsIGFkZE5ld0NhdGVnb3J5LCByZW1vdmVDYXRlZ29yeSwgc2V0Q2F0ZWdvcmllcyB9ID0gdXNlQ2F0ZWdvcmllcygpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPblNhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobm90ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm5vdGUgbXgtYXV0byBmbGV4IG1pbi1oLTY0IGZsZXgtcm93IGJnLXNsYXRlLTUwIHAtMiBweS0wIG1pbi13LWZ1bGwgIGJhY2tkcm9wLWJsdXItbGdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lIG1pbi1oLWZ1bGwgdy00IGJvcmRlciBib3JkZXItZ3JheS0yMDAgYmctcHJpbWFyeSBzaGFkb3ctbWRcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25uZWN0b3Igei0xMCAtbWwtNCBmbGV4IG1pbi1oLWZ1bGwgdy0yMCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWJhbGwgaC00IHctNCBmbGV4LW5vbmUgcm91bmRlZC1mdWxsIGJvcmRlci00IGJvcmRlci13aGl0ZSBiZy1wcmltYXJ5IHNoYWRvdy1tZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUgaC0xIGdyb3cgYmctcHJpbWFyeVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWJhbGwgaC00IHctNCBmbGV4LW5vbmUgcm91bmRlZC1mdWxsIGJvcmRlci00IGJvcmRlci13aGl0ZSBiZy1wcmltYXJ5IHNoYWRvdy1tZFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB6LTkgLW1sLTYgZmxleCBtaW4taC1mdWxsIHctZnVsbCBmbGV4LWNvbCBzZWxmLWNlbnRlciByb3VuZGVkLWxnIGJnLXdoaXRlIHAtMiBwbC04IHRleHQtanVzdGlmeSB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVUaW1lXCI+PHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWVuZCBvcGFjaXR5LVs3NSVdXCI+e2dldEZ1bGxEYXRlVGltZShkYXRlKX08L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtMSByb3VuZGVkLXRsLW1kIHJvdW5kZWQtdHItbWQgYmctc2xhdGUtMTAwIHB4LTIgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidGl0bGVcIiBjbGFzc05hbWU9XCJncm93IHRleHQtd3JhcCBoLThcIiBwbGFjZWhvbGRlcj1cIkFkZCB0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LW5vbmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBzZWxmLXN0YXJ0ICBzcGFjZS14LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3MgdGFncz17dGFnc30gc2V0VGFncz17c2V0VGFnc30gYWRkTmV3VGFnPXthZGROZXdUYWd9IHJlbW92ZVRhZz17cmVtb3ZlVGFnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRhcmVhIG5hbWU9XCJjb250ZW50XCIgY2xhc3NOYW1lPVwiYm9keSBncm93IHB4LTIgdGV4dC1zbSBmb250LW1lZGl1bSBteS0xXCIgcGxhY2Vob2xkZXI9XCJBZGQgbm90ZSBkZXRhaWxzIGhlcmUuLi5cIiByb3dzPXs1fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1RleHRhcmVhPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyIGZsZXggbWluLWgtMTAgdy1mdWxsIGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtMSByb3VuZGVkLWJsLW1kIHJvdW5kZWQtYnItbWQgYmctc2xhdGUtMjAwIHB4LTIgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwiZm9vdGVyXCIgY2xhc3NOYW1lPVwiZ3JvdyB0ZXh0LXdyYXAgaC04XCIgcGxhY2Vob2xkZXI9XCJBZGQgZm9vdGVyIChvcHRpb25hbClcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgc2VsZi1zdGFydCAgc3BhY2UteC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWVzIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IGFkZE5ld0NhdGVnb3JpZXM9e2FkZE5ld0NhdGVnb3J5fSByZW1vdmVDYXRlZ29yaWVzPXtyZW1vdmVDYXRlZ29yeX0gc2V0Q2F0ZWdvcmllcz17c2V0Q2F0ZWdvcmllc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLTEwIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgZ2FwLTEgcm91bmRlZC1ibC1tZCByb3VuZGVkLWJyLW1kIGJnLWJhY2tncm91bmQgcHgtMiBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcC0yIFwiIG9uQ2xpY2s9e2hhbmRsZU9uU2F2ZX0+U2F2ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbInVzZUN1cnJlbnREYXRlIiwiQnV0dG9uIiwiSW5wdXQiLCJ1c2VUYWdzIiwidXNlQ2F0ZWdvcmllcyIsIlRhZ3MiLCJDYXRlZ29yaWVzIiwiVGV4dGFyZWEiLCJnZXRGdWxsRGF0ZVRpbWUiLCJFZGl0Tm90ZSIsIm5vdGUiLCJvblNhdmUiLCJkYXRlIiwidGFncyIsInNldFRhZ3MiLCJyZW1vdmVUYWciLCJhZGROZXdUYWciLCJjYXRlZ29yaWVzIiwiYWRkTmV3Q2F0ZWdvcnkiLCJyZW1vdmVDYXRlZ29yeSIsInNldENhdGVnb3JpZXMiLCJoYW5kbGVPblNhdmUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJvd3MiLCJhZGROZXdDYXRlZ29yaWVzIiwicmVtb3ZlQ2F0ZWdvcmllcyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/notes/components/EditNote.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/lib/dateUtils.ts":
/*!******************************!*\
  !*** ./src/lib/dateUtils.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDateInISOAsLocalDate: function() { return /* binding */ getDateInISOAsLocalDate; },\n/* harmony export */   getFullDateTime: function() { return /* binding */ getFullDateTime; },\n/* harmony export */   getTimeIn12HrFormat: function() { return /* binding */ getTimeIn12HrFormat; }\n/* harmony export */ });\nfunction getDateInISOAsLocalDate(date) {\n    return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 16);\n}\nfunction getTimeIn12HrFormat(date) {\n    if (date === null || date === undefined) return \"\";\n    return \"\" + date.getHours() + \" : \" + date.getMinutes() + \" \" + (date.getHours() >= 12 ? \"PM\" : \"AM\");\n}\nfunction getFullDateTime(date) {\n    if (date === null || date === undefined) return \"\";\n    return date.getDate() + \"-\" + date.getMonth() + \"-\" + date.getFullYear() + \" \" + date.getHours() + \" : \" + date.getMinutes() + \" \" + (date.getHours() >= 12 ? \"PM\" : \"AM\");\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZGF0ZVV0aWxzLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFNBQVNBLHdCQUF3QkMsSUFBVTtJQUM5QyxPQUFPLElBQUlDLEtBQUtELEtBQUtFLE9BQU8sS0FBS0YsS0FBS0csaUJBQWlCLEtBQUssS0FBSyxNQUFNQyxXQUFXLEdBQUdDLFNBQVMsQ0FBQyxHQUFHO0FBQ3RHO0FBRU8sU0FBU0Msb0JBQW9CTixJQUFVO0lBQzFDLElBQUlBLFNBQVMsUUFBUUEsU0FBU08sV0FDMUIsT0FBTztJQUVYLE9BQU8sS0FBS1AsS0FBS1EsUUFBUSxLQUFLLFFBQVFSLEtBQUtTLFVBQVUsS0FBSyxNQUFPVCxDQUFBQSxLQUFLUSxRQUFRLE1BQU0sS0FBSyxPQUFPLElBQUc7QUFDdkc7QUFFTyxTQUFTRSxnQkFBZ0JWLElBQVU7SUFDdEMsSUFBSUEsU0FBUyxRQUFRQSxTQUFTTyxXQUMxQixPQUFPO0lBR1gsT0FBT1AsS0FBS1csT0FBTyxLQUFLLE1BQU1YLEtBQUtZLFFBQVEsS0FBSyxNQUFNWixLQUFLYSxXQUFXLEtBQUssTUFBTWIsS0FBS1EsUUFBUSxLQUFLLFFBQVFSLEtBQUtTLFVBQVUsS0FBSyxNQUFPVCxDQUFBQSxLQUFLUSxRQUFRLE1BQU0sS0FBSyxPQUFPLElBQUc7QUFDNUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9kYXRlVXRpbHMudHM/YWY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZUluSVNPQXNMb2NhbERhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDE2KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZUluMTJIckZvcm1hdChkYXRlOiBEYXRlKSB7XHJcbiAgICBpZiAoZGF0ZSA9PT0gbnVsbCB8fCBkYXRlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuXHJcbiAgICByZXR1cm4gXCJcIiArIGRhdGUuZ2V0SG91cnMoKSArIFwiIDogXCIgKyBkYXRlLmdldE1pbnV0ZXMoKSArIFwiIFwiICsgKGRhdGUuZ2V0SG91cnMoKSA+PSAxMiA/IFwiUE1cIiA6IFwiQU1cIilcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bGxEYXRlVGltZShkYXRlOiBEYXRlKSB7XHJcbiAgICBpZiAoZGF0ZSA9PT0gbnVsbCB8fCBkYXRlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuXHJcblxyXG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpICsgXCItXCIgKyBkYXRlLmdldE1vbnRoKCkgKyBcIi1cIiArIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiIFwiICsgZGF0ZS5nZXRIb3VycygpICsgXCIgOiBcIiArIGRhdGUuZ2V0TWludXRlcygpICsgXCIgXCIgKyAoZGF0ZS5nZXRIb3VycygpID49IDEyID8gXCJQTVwiIDogXCJBTVwiKVxyXG59Il0sIm5hbWVzIjpbImdldERhdGVJbklTT0FzTG9jYWxEYXRlIiwiZGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJ0b0lTT1N0cmluZyIsInN1YnN0cmluZyIsImdldFRpbWVJbjEySHJGb3JtYXQiLCJ1bmRlZmluZWQiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRGdWxsRGF0ZVRpbWUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/dateUtils.ts\n"));

/***/ })

});