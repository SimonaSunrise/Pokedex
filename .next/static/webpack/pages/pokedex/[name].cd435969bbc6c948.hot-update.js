"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pokedex/[name]",{

/***/ "./src/pages/pokedex/[name].jsx":
/*!**************************************!*\
  !*** ./src/pages/pokedex/[name].jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pokedex; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Pokedex.module.scss */ \"./src/styles/Pokedex.module.scss\");\n/* harmony import */ var _styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Pokedex() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [pokemonData, setPokemonData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [pokemonSearch, setPokemonSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [notFound, setNotFound] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (router.query.name) {\n            fetch(\"https://pokeapi.co/api/v2/pokemon/\".concat(router.query.name)).then((res)=>{\n                if (!res.ok) {\n                    setNotFound(true);\n                    throw new Error(\"Pokemon not found\");\n                }\n                return res.json();\n            }).then((data)=>setPokemonData(data)).catch((error)=>console.error(error));\n        }\n    }, [\n        router.query.name\n    ]);\n    const onHandleSubmit = (e)=>{\n        router.push(pokemonSearch.toLowerCase());\n        e.preventDefault();\n        onHandleClear();\n    };\n    const onHandleChange = (e)=>{\n        setPokemonSearch(e.target.value);\n    };\n    const onHandleClear = ()=>{\n        setPokemonSearch(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: notFound ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().notfound),\n            children: [\n                router.query.name,\n                \" not found...\\uD83D\\uDCA2 \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                    lineNumber: 42,\n                    columnNumber: 46\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this),\n                \"try again! \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                    lineNumber: 44,\n                    columnNumber: 22\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, this),\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n            lineNumber: 41,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: pokemonData.sprites ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Pokedex),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Pokedex_Img_Container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://i.pinimg.com/736x/14/bd/68/14bd686faedccee521a84e293f50cbb6.jpg\",\n                                alt: pokemonData.name,\n                                className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Base_Img)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: pokemonData.sprites.other.dream_world.front_default,\n                                alt: pokemonData.name,\n                                className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Pokemon_Img)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: onHandleSubmit,\n                                className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Form_Dinamic),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        value: pokemonSearch,\n                                        onChange: onHandleChange,\n                                        type: \"text\",\n                                        placeholder: \"Search another Pok\\xe9mon here\\uD83D\\uDD0E\",\n                                        required: true,\n                                        className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Input)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"submit\",\n                                        value: \" \",\n                                        className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Submit_Dinamic)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"button\",\n                                        onClick: onHandleClear,\n                                        className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Clear_Dinamic)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                        lineNumber: 51,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Pokedex_Text),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Pokedex_Title),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: pokemonData.name.toUpperCase()\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: pokemonData.sprites.other.home.front_default,\n                                        alt: pokemonData.name,\n                                        className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Pokemon_Img)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                lineNumber: 85,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Pokedex_Text_Type_Exp),\n                                children: [\n                                    pokemonData.types.map((type, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \" type: \",\n                                                type.type.name\n                                            ]\n                                        }, i, true, {\n                                            fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 21\n                                        }, this)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"base experience: \",\n                                            pokemonData.base_experience\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                lineNumber: 93,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Weight: \",\n                                            pokemonData.weight\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Height: \",\n                                            pokemonData.height\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                lineNumber: 99,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Pokedex__Text),\n                                children: pokemonData.stats.map((stat, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                stat.stat.name,\n                                                \": \",\n                                                stat.base_stat\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 23\n                                        }, this)\n                                    }, i, false, {\n                                        fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 21\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                lineNumber: 103,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Pokedex_Id_Section),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Pokedex_Id_Section_Ball),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Pokedex_Id),\n                                        children: [\n                                            \"ID: #\",\n                                            pokemonData.id\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                                lineNumber: 112,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                        lineNumber: 84,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Pokedex_module_scss__WEBPACK_IMPORTED_MODULE_3___default().notfound),\n                        children: router.query.name + \" not found... \\uD83D\\uDCA2 or wait for 3, 2, 1 sec! ⌛ \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\GitHub\\\\Pokedex\\\\src\\\\pages\\\\pokedex\\\\[name].jsx\",\n                    lineNumber: 121,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false)\n        }, void 0, false)\n    }, void 0, false);\n}\n_s(Pokedex, \"6qlK7z49JQH5wQ9q5p5RMhH5Kt4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Pokedex;\nvar _c;\n$RefreshReg$(_c, \"Pokedex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb2tlZGV4L1tuYW1lXS5qc3g/NzQwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUG9rZWRleC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9rZWRleCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbcG9rZW1vbkRhdGEsIHNldFBva2Vtb25EYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbcG9rZW1vblNlYXJjaCwgc2V0UG9rZW1vblNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbm90Rm91bmQsIHNldE5vdEZvdW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5uYW1lKSB7XHJcbiAgICAgIGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtyb3V0ZXIucXVlcnkubmFtZX1gKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAgIHNldE5vdEZvdW5kKHRydWUpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQb2tlbW9uIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFBva2Vtb25EYXRhKGRhdGEpKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5Lm5hbWVdKTtcclxuXHJcbiAgY29uc3Qgb25IYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2gocG9rZW1vblNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIG9uSGFuZGxlQ2xlYXIoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRQb2tlbW9uU2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgc2V0UG9rZW1vblNlYXJjaChcIlwiKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bm90Rm91bmQgPyAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubm90Zm91bmR9PlxyXG4gICAgICAgICAge3JvdXRlci5xdWVyeS5uYW1lfSBub3QgZm91bmQuLi7wn5KiIDxiciAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICB0cnkgYWdhaW4hIDxiciAvPlxyXG4gICAgICAgICAgPGJyIC8+e1wiIFwifVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge3Bva2Vtb25EYXRhLnNwcml0ZXMgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUG9rZWRleH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Qb2tlZGV4X0ltZ19Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kucGluaW1nLmNvbS83MzZ4LzE0L2JkLzY4LzE0YmQ2ODZmYWVkY2NlZTUyMWE4NGUyOTNmNTBjYmI2LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cG9rZW1vbkRhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuQmFzZV9JbWd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e3Bva2Vtb25EYXRhLnNwcml0ZXMub3RoZXIuZHJlYW1fd29ybGQuZnJvbnRfZGVmYXVsdH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtwb2tlbW9uRGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5Qb2tlbW9uX0ltZ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25IYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLkZvcm1fRGluYW1pY30+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwb2tlbW9uU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYW5vdGhlciBQb2vDqW1vbiBoZXJl8J+UjlwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIgXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5TdWJtaXRfRGluYW1pY31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25IYW5kbGVDbGVhcn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5DbGVhcl9EaW5hbWljfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlBva2VkZXhfVGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlBva2VkZXhfVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8aDE+e3Bva2Vtb25EYXRhLm5hbWUudG9VcHBlckNhc2UoKX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwb2tlbW9uRGF0YS5zcHJpdGVzLm90aGVyLmhvbWUuZnJvbnRfZGVmYXVsdH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bva2Vtb25EYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuUG9rZW1vbl9JbWd9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUG9rZWRleF9UZXh0X1R5cGVfRXhwfT5cclxuICAgICAgICAgICAgICAgICAge3Bva2Vtb25EYXRhLnR5cGVzLm1hcCgodHlwZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGtleT17aX0+IHR5cGU6IHt0eXBlLnR5cGUubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8cD5iYXNlIGV4cGVyaWVuY2U6IHtwb2tlbW9uRGF0YS5iYXNlX2V4cGVyaWVuY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD5XZWlnaHQ6IHtwb2tlbW9uRGF0YS53ZWlnaHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5IZWlnaHQ6IHtwb2tlbW9uRGF0YS5oZWlnaHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlBva2VkZXhfX1RleHR9PlxyXG4gICAgICAgICAgICAgICAgICB7cG9rZW1vbkRhdGEuc3RhdHMubWFwKChzdGF0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LnN0YXQubmFtZX06IHtzdGF0LmJhc2Vfc3RhdH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUG9rZWRleF9JZF9TZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Qb2tlZGV4X0lkX1NlY3Rpb25fQmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuUG9rZWRleF9JZH0+SUQ6ICN7cG9rZW1vbkRhdGEuaWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vdGZvdW5kfT5cclxuICAgICAgICAgICAgICAgICAge3JvdXRlci5xdWVyeS5uYW1lICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBub3QgZm91bmQuLi4g8J+SoiBvciB3YWl0IGZvciAzLCAyLCAxIHNlYyEg4oybIFwifVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlBva2VkZXgiLCJyb3V0ZXIiLCJwb2tlbW9uRGF0YSIsInNldFBva2Vtb25EYXRhIiwicG9rZW1vblNlYXJjaCIsInNldFBva2Vtb25TZWFyY2giLCJub3RGb3VuZCIsInNldE5vdEZvdW5kIiwicXVlcnkiLCJuYW1lIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJvbkhhbmRsZVN1Ym1pdCIsImUiLCJwdXNoIiwidG9Mb3dlckNhc2UiLCJwcmV2ZW50RGVmYXVsdCIsIm9uSGFuZGxlQ2xlYXIiLCJvbkhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwicCIsImNsYXNzTmFtZSIsIm5vdGZvdW5kIiwiYnIiLCJzcHJpdGVzIiwiZGl2IiwiUG9rZWRleF9JbWdfQ29udGFpbmVyIiwiaW1nIiwic3JjIiwiYWx0IiwiQmFzZV9JbWciLCJvdGhlciIsImRyZWFtX3dvcmxkIiwiZnJvbnRfZGVmYXVsdCIsIlBva2Vtb25fSW1nIiwiZm9ybSIsIm9uU3VibWl0IiwiRm9ybV9EaW5hbWljIiwiaW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiSW5wdXQiLCJTdWJtaXRfRGluYW1pYyIsIm9uQ2xpY2siLCJDbGVhcl9EaW5hbWljIiwiUG9rZWRleF9UZXh0IiwiUG9rZWRleF9UaXRsZSIsImgxIiwidG9VcHBlckNhc2UiLCJob21lIiwiUG9rZWRleF9UZXh0X1R5cGVfRXhwIiwidHlwZXMiLCJtYXAiLCJpIiwiYmFzZV9leHBlcmllbmNlIiwid2VpZ2h0IiwiaGVpZ2h0IiwiUG9rZWRleF9fVGV4dCIsInN0YXRzIiwic3RhdCIsImJhc2Vfc3RhdCIsIlBva2VkZXhfSWRfU2VjdGlvbiIsIlBva2VkZXhfSWRfU2VjdGlvbl9CYWxsIiwiUG9rZWRleF9JZCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/pokedex/[name].jsx\n"));

/***/ })

});