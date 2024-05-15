"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["react-app"],{

/***/ "./assets/Home.jsx":
/*!*************************!*\
  !*** ./assets/Home.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_pages_First_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/pages/First.jsx */ "./assets/src/pages/First.jsx");
/* harmony import */ var _src_pages_Second_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/pages/Second.jsx */ "./assets/src/pages/Second.jsx");
/* harmony import */ var _src_pages_Content_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pages/Content.jsx */ "./assets/src/pages/Content.jsx");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");





//TODO Mirar el tailwind en archivos que no sean este
var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-home home montserrat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lateral"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_pages_First_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_pages_Second_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "divisor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "derecha"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_pages_Content_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./assets/MainRouter.jsx":
/*!*******************************!*\
  !*** ./assets/MainRouter.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./assets/Home.jsx");
/* harmony import */ var _src_pages_InicioSesion_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/pages/InicioSesion.jsx */ "./assets/src/pages/InicioSesion.jsx");
/* harmony import */ var _src_pages_Register_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pages/Register.jsx */ "./assets/src/pages/Register.jsx");





var MainRouter = function MainRouter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    exact: true,
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_pages_InicioSesion_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    exact: true,
    path: "/register",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_pages_Register_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainRouter);

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _MainRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainRouter */ "./assets/MainRouter.jsx");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");





function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainRouter__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

// Monta el componente App en el elemento con el ID 'root'
// document.getElementById('root').render(<App />);
var root = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ "./assets/src/pages/Cantante.jsx":
/*!***************************************!*\
  !*** ./assets/src/pages/Cantante.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_cantante_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/cantante.css */ "./assets/src/styles/cantante.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _raperos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./raperos */ "./assets/src/pages/raperos.js");
/* harmony import */ var _img_logo192_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/logo192.png */ "./assets/src/img/logo192.png");




 // Importa el array de cantantes de rap

var Cantante = function Cantante() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "cantante"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "titulo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", null, "Artistas populares")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Mostrar todos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "singer"
  }, _raperos__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (cantante, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "prueba",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "card-hover",
      sx: {
        minWidth: 178,
        maxWidth: 178,
        minHeight: 236,
        maxHeight: 236,
        background: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        height: 140,
        padding: '10px',
        borderRadius: '50%'
      },
      image: _img_logo192_png__WEBPACK_IMPORTED_MODULE_4__ // Si la imagen no está disponible, usa una imagen predeterminada
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      gutterBottom: true,
      variant: "h6",
      component: "div",
      sx: {
        color: 'white',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, cantante.nombre), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "body2",
      color: "text.secondary",
      sx: {
        color: '#B3B3B3'
      }
    }, "Artista"))));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cantante);

/***/ }),

/***/ "./assets/src/pages/Content.jsx":
/*!**************************************!*\
  !*** ./assets/src/pages/Content.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Cantante_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cantante.jsx */ "./assets/src/pages/Cantante.jsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowRight */ "./node_modules/@mui/icons-material/KeyboardArrowRight.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowLeft */ "./node_modules/@mui/icons-material/KeyboardArrowLeft.js");
/* harmony import */ var _styles_content_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/content.css */ "./assets/src/styles/content.css");







var Content = function Content() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "small",
    sx: {
      backgroundColor: '#0a0a0a',
      marginRight: '10px',
      marginLeft: '10px',
      '&:hover': {
        background: '#0a0a0a'
      }
    },
    "aria-label": "previous"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      color: '#B3B3B3'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "small",
    sx: {
      backgroundColor: '#0a0a0a',
      '&:hover': {
        background: '#0a0a0a'
      }
    },
    "aria-label": "next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      color: '#B3B3B3'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "text",
    sx: {
      textTransform: 'none',
      color: '#B3B3B3',
      fontWeight: '700',
      '&:hover': {
        color: '#fff'
      }
    },
    onClick: function onClick() {
      return navigate('/register');
    }
  }, "Registrarse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    sx: {
      textTransform: 'none',
      color: 'black',
      background: 'white',
      borderRadius: '20px',
      fontWeight: '700',
      marginRight: '20px',
      marginLeft: '10px',
      '&:hover': {
        background: '#B3B3B3'
      }
    },
    onClick: function onClick() {
      return navigate('/login');
    }
  }, "Iniciar sesi\xF3n"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "with-scroll"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Cantante_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./assets/src/pages/First.jsx":
/*!************************************!*\
  !*** ./assets/src/pages/First.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_spotify_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/spotify.png */ "./assets/src/img/spotify.png");
/* harmony import */ var _mui_icons_material_CottageOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/CottageOutlined */ "./node_modules/@mui/icons-material/CottageOutlined.js");
/* harmony import */ var _mui_icons_material_SearchOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/SearchOutlined */ "./node_modules/@mui/icons-material/SearchOutlined.js");
/* harmony import */ var _styles_first_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/first.css */ "./assets/src/styles/first.css");





var First = function First() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "first"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CottageOutlined__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    title: "Spotify"
  }, " Spotify ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "inicio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CottageOutlined__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Inicio ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "buscar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_SearchOutlined__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Buscar ")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (First);

/***/ }),

/***/ "./assets/src/pages/InicioSesion.jsx":
/*!*******************************************!*\
  !*** ./assets/src/pages/InicioSesion.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../styles/login.css */ "./assets/src/styles/login.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Switch/Switch.js");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material/VisibilityOff */ "./node_modules/@mui/icons-material/VisibilityOff.js");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../img/logo.png */ "./assets/src/img/logo.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






























function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Login = function Login() {
  var emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\\|\[\]{};:\'",.<>/?]).{8,}$/;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPassword = _useState2[0],
    setShowPassword = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var handleClickShowPassword = function handleClickShowPassword() {
    setShowPassword(!showPassword);
  };
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)({
      email: "",
      password: ""
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    formValues = _useState6[0],
    setFormValues = _useState6[1];
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    if (name === "email") {
      setFormValues(_objectSpread(_objectSpread({}, formValues), {}, {
        email: value
      }));
    } else if (name === "password") {
      setFormValues(_objectSpread(_objectSpread({}, formValues), {}, {
        password: value
      }));
    }
  };
  var handleErrors = function handleErrors(e) {
    e.preventDefault();
    var totalErrors = [];
    var hasError = false;
    if (!emailRegex.test(formValues.email)) {
      totalErrors.push({
        type: 'email',
        message: 'El correo electrónico no es válido'
      });
      hasError = true;
    }
    if (!passwordRegex.test(formValues.password)) {
      totalErrors.push({
        type: 'password',
        message: 'La contraseña debe contener todo'
      });
      hasError = true;
    }
    if (!hasError) {
      handleSubmit();
    }
    setErrors(totalErrors);
  };
  var handleSubmit = function handleSubmit() {
    console.log(formValues);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_31__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("title", null, "Iniciar sesi\xF3n - Spotify")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("form", {
    onSubmit: handleErrors
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "navbarLogin flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "imagen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("a", {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("img", {
    src: _img_logo_png__WEBPACK_IMPORTED_MODULE_33__
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "containerLogin flex justify-center "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "formularioLogin rounded-xl my-8 px-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "header font-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("h1", null, "Inicia sesi\xF3n en Spotify")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "continueSocial flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("li", {
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    sx: {
      width: '324px',
      height: '48px',
      border: '1px solid white',
      color: 'white',
      borderRadius: '25px',
      backgroundColor: 'transparent',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: 'transparent',
        border: '2px solid white'
      }
    }
  }, "Continuar con Google")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("li", {
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    sx: {
      width: '324px',
      height: '48px',
      border: '1px solid white',
      color: 'white',
      borderRadius: '25px',
      backgroundColor: 'transparent',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: 'transparent',
        border: '2px solid white'
      }
    }
  }, "Continuar con Facebook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("li", {
    className: "mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    sx: {
      width: '324px',
      height: '48px',
      border: '1px solid white',
      color: 'white',
      borderRadius: '25px',
      backgroundColor: 'transparent',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: 'transparent',
        border: '2px solid white'
      }
    }
  }, "Continuar con Apple")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    sx: {
      borderColor: 'gray'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "textfields mt-8 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "container-email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "email mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("p", {
    className: "text-white"
  }, "Correo electr\xF3nico o nombre de usuario"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
    id: "email",
    name: "email",
    type: "text",
    value: formValues.email,
    onChange: handleChange,
    placeholder: "Correo electr\xF3nico o nombre de usuario",
    variant: "outlined",
    InputProps: {
      style: {
        color: 'white',
        borderColor: 'white'
      },
      classes: {
        notchedOutline: 'white-border'
      }
    },
    InputLabelProps: {
      style: {
        color: 'gray'
      }
    },
    sx: {
      width: '324px',
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white'
        },
        '&:hover fieldset': {
          borderColor: 'white',
          border: '2px solid white'
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white'
        }
      },
      input: {
        color: 'white'
      },
      '& .MuiInputBase-input::placeholder': {
        color: 'gray'
      }
    }
  }), errors.length > 0 && errors.find(function (error) {
    return error.type === "email";
  }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "text-red-700 text-xs text-left"
  }, errors.find(function (error) {
    return error.type === "email";
  }).message))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "container-password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "password mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("p", {
    className: "text-white"
  }, "Contrase\xF1a"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
    id: "password",
    name: "password",
    placeholder: "Contrase\xF1a",
    variant: "outlined",
    value: formValues.password,
    onChange: handleChange,
    type: showPassword ? 'text' : 'password',
    InputProps: {
      style: {
        color: 'white',
        borderColor: 'white'
      },
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
        position: "end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
        "aria-label": "toggle password visibility",
        onClick: handleClickShowPassword,
        style: {
          color: 'white'
        }
      }, showPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_39__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_40__["default"], null))),
      classes: {
        notchedOutline: 'white-border'
      }
    },
    InputLabelProps: {
      style: {
        color: 'gray'
      }
    },
    sx: {
      width: '324px',
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white'
        },
        '&:hover fieldset': {
          borderColor: 'white',
          border: '2px solid white'
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white'
        }
      },
      input: {
        color: 'white'
      },
      '& .MuiInputBase-input::placeholder': {
        color: 'gray'
      }
    }
  }), errors.length > 0 && errors.find(function (error) {
    return error.type === "password";
  }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "text-red-700 text-xs text-left"
  }, errors.find(function (error) {
    return error.type === "password";
  }).message)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_41__["default"], {
    defaultChecked: true,
    sx: {
      '& .MuiSwitch-switchBase.Mui-checked': {
        color: 'black',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }
      },
      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: 'rgba(30,215,96,255)'
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("p", {
    className: "flex items-center text-white"
  }, "Recu\xE9rdame")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "flex justify-center mt-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    type: "submit",
    sx: {
      width: '324px',
      height: '48px',
      color: 'black',
      borderRadius: '25px',
      backgroundColor: '#1ed760',
      textTransform: 'none',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: '#1ed760',
        transform: 'scale(1.02)' // Hacer el botón un poco más grande en hover
      }
    }
  }, "Iniciar Sesi\xF3n")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("a", {
    href: "#",
    className: "inline-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("p", {
    className: "mt-8 mb-8 underline text-white hover:text-custom-text"
  }, "\xBFSe te ha olvidado la contrase\xF1a?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    sx: {
      borderColor: 'gray'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "count mt-8 mb-8 flex justify-evenly"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("p", {
    className: "text-color-text"
  }, "\xBFNo tienes cuenta?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("a", {
    href: "/register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("p", {
    className: "text-white underline hover:text-custom-text"
  }, "Subscr\xEDbete a Spotify"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "footerLogin flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("p", null, "Este sitio est\xE1 protegido por reCAPTCHA. Se aplican los ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("a", {
    className: "cursor-pointer underline",
    target: "_blank",
    href: "https://policies.google.com/privacy"
  }, "T\xE9rminos del servicio"), " y la ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("a", {
    className: "cursor-pointer underline",
    target: "_blank",
    href: "https://policies.google.com/terms"
  }, "Pol\xEDtica de privacidad"), " de Google."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./assets/src/pages/Register.jsx":
/*!***************************************!*\
  !*** ./assets/src/pages/Register.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");


var Register = function Register() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Reg\xEDstrate - Spotify")), "P\xE1gina de registro");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ }),

/***/ "./assets/src/pages/Second.jsx":
/*!*************************************!*\
  !*** ./assets/src/pages/Second.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_icons_material_TurnedIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/TurnedIn */ "./node_modules/@mui/icons-material/TurnedIn.js");
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Add */ "./node_modules/@mui/icons-material/Add.js");
/* harmony import */ var _mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Language */ "./node_modules/@mui/icons-material/Language.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");
/* harmony import */ var _styles_second_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/second.css */ "./assets/src/styles/second.css");







var Second = function Second() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "second"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.Toaster, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "biblioteca"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Contraer Tu Biblioteca",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "prueba"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_TurnedIn__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Tu biblioteca"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Crear una lista o carpeta",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "warning",
    className: "bg-icon",
    "aria-label": "delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "color-icon"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "button-global-spain"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    size: "small",
    className: "button-spain",
    style: {
      backgroundColor: 'transparent',
      borderRadius: '15px',
      border: '0.5px solid #b3b3b3'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "global-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fontSize: "small"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Espa\xF1ol de Espa\xF1a"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].success('Mensaje de prueba!');
    }
  }, "Saluda"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Second);

/***/ }),

/***/ "./assets/src/pages/raperos.js":
/*!*************************************!*\
  !*** ./assets/src/pages/raperos.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var cantantesDeRap = [{
  nombre: "Eminem",
  foto: "url_de_la_imagen"
}, {
  nombre: "Kendrick Lamar",
  foto: "url_de_la_imagen"
}, {
  nombre: "J. Cole",
  foto: "url_de_la_imagen"
}, {
  nombre: "Cardi B",
  foto: "url_de_la_imagen"
}, {
  nombre: "Travis Scott",
  foto: "url_de_la_imagen"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cantantesDeRap);

/***/ }),

/***/ "./assets/src/styles/cantante.css":
/*!****************************************!*\
  !*** ./assets/src/styles/cantante.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/styles/content.css":
/*!***************************************!*\
  !*** ./assets/src/styles/content.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/styles/first.css":
/*!*************************************!*\
  !*** ./assets/src/styles/first.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/styles/login.css":
/*!*************************************!*\
  !*** ./assets/src/styles/login.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/styles/second.css":
/*!**************************************!*\
  !*** ./assets/src/styles/second.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/img/logo.png":
/*!*********************************!*\
  !*** ./assets/src/img/logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo.a4abf7fc.png";

/***/ }),

/***/ "./assets/src/img/logo192.png":
/*!************************************!*\
  !*** ./assets/src/img/logo192.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo192.64b6abdb.png";

/***/ }),

/***/ "./assets/src/img/spotify.png":
/*!************************************!*\
  !*** ./assets/src/img/spotify.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/spotify.eb08e09d.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_mui_icons-material_Add_js-node_modules_mui_icons-material_CottageOutline-53115f"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDZ0I7QUFDRTtBQUNFO0FBQ3BCO0FBQzFCO0FBQ0EsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBUztFQUNqQixvQkFDRUosMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQXlCLGdCQUN0Q04sMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQVMsZ0JBQ3RCTiwwREFBQSxDQUFDQyw0REFBSyxNQUFFLENBQUMsZUFDVEQsMERBQUEsQ0FBQ0UsNkRBQU0sTUFBRSxDQUNOLENBQUMsZUFDTkYsMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQVMsQ0FBTSxDQUFDLGVBQy9CTiwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBUyxnQkFDdEJOLDBEQUFBLENBQUNHLDhEQUFPLE1BQUUsQ0FDUCxDQUNGLENBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWVDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJPO0FBQ3VCO0FBQ3ZCO0FBQ3NCO0FBQ0Q7QUFFL0MsSUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztFQUN2QixvQkFDRVgsMERBQUEsQ0FBQ08sb0RBQU0scUJBQ0xQLDBEQUFBLENBQUNRLG1EQUFLO0lBQUNJLEtBQUs7SUFBQ0MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFZCwwREFBQSxDQUFDSSw2Q0FBSSxNQUFFO0VBQUUsQ0FBRSxDQUFDLGVBQzNDSiwwREFBQSxDQUFDUSxtREFBSztJQUFDSSxLQUFLO0lBQUNDLElBQUksRUFBQyxRQUFRO0lBQUNDLE9BQU8sZUFBRWQsMERBQUEsQ0FBQ1MsbUVBQUssTUFBRTtFQUFFLENBQUUsQ0FBQyxlQUNqRFQsMERBQUEsQ0FBQ1EsbURBQUs7SUFBQ0ksS0FBSztJQUFDQyxJQUFJLEVBQUMsV0FBVztJQUFDQyxPQUFPLGVBQUVkLDBEQUFBLENBQUNVLCtEQUFRLE1BQUU7RUFBRSxDQUFFLENBQ2hELENBQUM7QUFFYixDQUFDO0FBRUQsaUVBQWVDLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJDO0FBQ2E7QUFDVTtBQUNmO0FBQ1I7QUFFMUIsU0FBU08sR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQ0lsQiwwREFBQSwyQkFDSUEsMERBQUEsQ0FBQ2dCLDJEQUFhLHFCQUNWaEIsMERBQUEsQ0FBQ2lCLG1EQUFNLE1BQUUsQ0FDRSxDQUNkLENBQUM7QUFFZDs7QUFFQTtBQUNBO0FBQ0EsSUFBTUUsSUFBSSxHQUFHSixxREFBVSxDQUFDSyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4REYsSUFBSSxDQUFDRyxNQUFNLGVBQUN0QiwwREFBQSxDQUFDa0IsR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQk07QUFDTTtBQUN5QztBQUNsQyxDQUFDO0FBQ0Y7QUFFdEMsSUFBTVcsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztFQUNuQixvQkFDSTdCLDBEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFVLGdCQUNyQk4sMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQVEsZ0JBQ25CTiwwREFBQSwwQkFDSUEsMERBQUEsWUFBRyxvQkFBcUIsQ0FDeEIsQ0FBQyxlQUNMQSwwREFBQSxZQUFHLGVBQWdCLENBQ2xCLENBQUMsZUFDTkEsMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQVEsR0FDbEJxQixnREFBYyxDQUFDRyxHQUFHLENBQUMsVUFBQ0MsUUFBUSxFQUFFQyxLQUFLO0lBQUEsb0JBQ2hDaEMsMERBQUE7TUFBS00sU0FBUyxFQUFDLFFBQVE7TUFBQzJCLEdBQUcsRUFBRUQ7SUFBTSxnQkFDL0JoQywwREFBQSxDQUFDdUIscURBQUk7TUFBQ2pCLFNBQVMsRUFBQyxZQUFZO01BQUM0QixFQUFFLEVBQUU7UUFBRUMsUUFBUSxFQUFFLEdBQUc7UUFBRUMsUUFBUSxFQUFFLEdBQUc7UUFBRUMsU0FBUyxFQUFFLEdBQUc7UUFBRUMsU0FBUyxFQUFFLEdBQUc7UUFBRUMsVUFBVSxFQUFFO01BQU87SUFBRSxnQkFDbEh2QywwREFBQSxDQUFDeUIscURBQVM7TUFDTlMsRUFBRSxFQUFFO1FBQUVNLE1BQU0sRUFBRSxHQUFHO1FBQUVDLE9BQU8sRUFBRSxNQUFNO1FBQUVDLFlBQVksRUFBRTtNQUFNLENBQUU7TUFDMURDLEtBQUssRUFBRWYsNkNBQUssQ0FBQztJQUFBLENBQ2hCLENBQUMsZUFDRjVCLDBEQUFBLENBQUN3QixxREFBVyxxQkFDUnhCLDBEQUFBLENBQUMwQixxREFBVTtNQUFDa0IsWUFBWTtNQUFDQyxPQUFPLEVBQUMsSUFBSTtNQUFDQyxTQUFTLEVBQUMsS0FBSztNQUFDWixFQUFFLEVBQUU7UUFBRWEsS0FBSyxFQUFFLE9BQU87UUFBRUMsUUFBUSxFQUFFLFFBQVE7UUFBRUMsWUFBWSxFQUFFLFVBQVU7UUFBRUMsVUFBVSxFQUFFO01BQVM7SUFBRSxHQUM1SW5CLFFBQVEsQ0FBQ29CLE1BQ0YsQ0FBQyxlQUNibkQsMERBQUEsQ0FBQzBCLHFEQUFVO01BQUNtQixPQUFPLEVBQUMsT0FBTztNQUFDRSxLQUFLLEVBQUMsZ0JBQWdCO01BQUNiLEVBQUUsRUFBRTtRQUFFYSxLQUFLLEVBQUU7TUFBVTtJQUFFLEdBQUMsU0FFakUsQ0FDSCxDQUNYLENBQ0wsQ0FBQztFQUFBLENBQ1QsQ0FDQSxDQUNKLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVsQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDRztBQUNxQjtBQUNUO0FBQ2E7QUFDeUI7QUFDRjtBQUMzQztBQUUvQixJQUFNMUIsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztFQUNwQixJQUFNc0QsUUFBUSxHQUFHTCw2REFBVyxDQUFDLENBQUM7RUFFOUIsb0JBQ0VwRCwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBVyxnQkFDeEJOLDBEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFRLGdCQUNyQk4sMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQU8sZ0JBQ3BCTiwwREFBQSxDQUFDcUQscURBQVU7SUFBQ0ssSUFBSSxFQUFDLE9BQU87SUFBQ3hCLEVBQUUsRUFBRTtNQUFFeUIsZUFBZSxFQUFFLFNBQVM7TUFBRUMsV0FBVyxFQUFFLE1BQU07TUFBRUMsVUFBVSxFQUFFLE1BQU07TUFBRSxTQUFTLEVBQUU7UUFBRXRCLFVBQVUsRUFBRTtNQUFVO0lBQUUsQ0FBRTtJQUFDLGNBQVc7RUFBVSxnQkFDL0p2QywwREFBQSxDQUFDd0QsNkVBQXFCO0lBQUN0QixFQUFFLEVBQUU7TUFBRWEsS0FBSyxFQUFFO0lBQVU7RUFBRSxDQUFFLENBQ3hDLENBQUMsZUFDYi9DLDBEQUFBLENBQUNxRCxxREFBVTtJQUFDSyxJQUFJLEVBQUMsT0FBTztJQUFDeEIsRUFBRSxFQUFFO01BQUV5QixlQUFlLEVBQUUsU0FBUztNQUFFLFNBQVMsRUFBRTtRQUFFcEIsVUFBVSxFQUFFO01BQVU7SUFBRSxDQUFFO0lBQUMsY0FBVztFQUFNLGdCQUNsSHZDLDBEQUFBLENBQUN1RCw4RUFBc0I7SUFBQ3JCLEVBQUUsRUFBRTtNQUFFYSxLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDekMsQ0FDVCxDQUFDLGVBQ04vQywwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBTyxnQkFDcEJOLDBEQUFBLENBQUNzRCxxREFBTTtJQUNMVCxPQUFPLEVBQUMsTUFBTTtJQUNkWCxFQUFFLEVBQUU7TUFDRjRCLGFBQWEsRUFBRSxNQUFNO01BQ3JCZixLQUFLLEVBQUUsU0FBUztNQUNoQmdCLFVBQVUsRUFBRSxLQUFLO01BQ2pCLFNBQVMsRUFBRTtRQUNUaEIsS0FBSyxFQUFFO01BQ1Q7SUFDRixDQUFFO0lBQ0ZpQixPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1QLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFBQTtFQUFDLEdBQ3RDLGFBRU8sQ0FBQyxlQUNUekQsMERBQUEsQ0FBQ3NELHFEQUFNO0lBQ0xULE9BQU8sRUFBQyxXQUFXO0lBQ25CWCxFQUFFLEVBQUU7TUFDRjRCLGFBQWEsRUFBRSxNQUFNO01BQ3JCZixLQUFLLEVBQUUsT0FBTztNQUNkUixVQUFVLEVBQUUsT0FBTztNQUNuQkcsWUFBWSxFQUFFLE1BQU07TUFDcEJxQixVQUFVLEVBQUUsS0FBSztNQUNqQkgsV0FBVyxFQUFFLE1BQU07TUFDbkJDLFVBQVUsRUFBRSxNQUFNO01BQ2xCLFNBQVMsRUFBRTtRQUNUdEIsVUFBVSxFQUFFO01BQ2Q7SUFDRixDQUFFO0lBQ0Z5QixPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1QLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFBQTtFQUFDLEdBQ25DLG1CQUVPLENBQ0wsQ0FDRixDQUFDLGVBQ056RCwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBUyxnQkFDdEJOLDBEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFhLGdCQUMxQk4sMERBQUEsQ0FBQzZCLHFEQUFRLE1BQUUsQ0FDUixDQUNGLENBQ0YsQ0FBQztBQUVWLENBQUM7QUFFRCxpRUFBZTFCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVHO0FBQ1k7QUFDaUM7QUFDRjtBQUN2QztBQUU3QixJQUFNRixLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQSxFQUFTO0VBQ2hCLG9CQUNJRCwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBTyxnQkFDbEJOLDBEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFNLGdCQUNqQk4sMERBQUEsQ0FBQ2tFLDJFQUFtQixNQUFFLENBQUMsZUFDdkJsRSwwREFBQTtJQUFNb0UsS0FBSyxFQUFDO0VBQVMsR0FBQyxXQUFlLENBQ3BDLENBQUMsZUFDTnBFLDBEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFRLGdCQUNuQk4sMERBQUEsQ0FBQ2tFLDJFQUFtQixNQUFFLENBQUMsZUFDdkJsRSwwREFBQSxlQUFNLFVBQWMsQ0FDbkIsQ0FBQyxlQUNOQSwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBUSxnQkFDbkJOLDBEQUFBLENBQUNtRSwwRUFBa0IsTUFBRSxDQUFDLGVBQ3RCbkUsMERBQUEsZUFBTSxVQUFjLENBQ25CLENBQ0osQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJtQjtBQUNEO0FBQ1Y7QUFDbUU7QUFDdkM7QUFDTTtBQUNWO0FBQ2pCO0FBRW5DLElBQU1RLEtBQUssR0FBRyxTQUFSQSxLQUFLQSxDQUFBLEVBQVM7RUFFaEIsSUFBTXFFLFVBQVUsR0FBRyxpREFBaUQ7RUFDcEUsSUFBTUMsYUFBYSxHQUFHLG1GQUFtRjtFQUV6RyxJQUFBQyxTQUFBLEdBQXdDWCxnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBWSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFoREcsWUFBWSxHQUFBRixVQUFBO0lBQUVHLGVBQWUsR0FBQUgsVUFBQTtFQUNwQyxJQUFBSSxVQUFBLEdBQTRCaEIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWlCLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQWpDRSxNQUFNLEdBQUFELFVBQUE7SUFBRUUsU0FBUyxHQUFBRixVQUFBO0VBRXhCLElBQU1HLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBdUJBLENBQUEsRUFBUztJQUNsQ0wsZUFBZSxDQUFDLENBQUNELFlBQVksQ0FBQztFQUNsQyxDQUFDO0VBRUQsSUFBQU8sVUFBQSxHQUFvQ3JCLGdEQUFRLENBQUM7TUFDekNzQixLQUFLLEVBQUUsRUFBRTtNQUNUQyxRQUFRLEVBQUU7SUFDZCxDQUFDLENBQUM7SUFBQUMsVUFBQSxHQUFBWCxjQUFBLENBQUFRLFVBQUE7SUFIS0ksVUFBVSxHQUFBRCxVQUFBO0lBQUVFLGFBQWEsR0FBQUYsVUFBQTtFQUtoQyxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCLElBQUFDLFNBQUEsR0FBd0JELENBQUMsQ0FBQ0UsTUFBTTtNQUF4QkMsSUFBSSxHQUFBRixTQUFBLENBQUpFLElBQUk7TUFBRUMsS0FBSyxHQUFBSCxTQUFBLENBQUxHLEtBQUs7SUFDbkIsSUFBSUQsSUFBSSxLQUFLLE9BQU8sRUFBRTtNQUNsQkwsYUFBYSxDQUFBTyxhQUFBLENBQUFBLGFBQUEsS0FBTVIsVUFBVTtRQUFFSCxLQUFLLEVBQUVVO01BQUssRUFBRSxDQUFDO0lBQ2xELENBQUMsTUFBTSxJQUFJRCxJQUFJLEtBQUssVUFBVSxFQUFFO01BQzVCTCxhQUFhLENBQUFPLGFBQUEsQ0FBQUEsYUFBQSxLQUFNUixVQUFVO1FBQUVGLFFBQVEsRUFBRVM7TUFBSyxFQUFFLENBQUM7SUFDckQ7RUFDSixDQUFDO0VBRUQsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlOLENBQUMsRUFBSztJQUN4QkEsQ0FBQyxDQUFDTyxjQUFjLENBQUMsQ0FBQztJQUNsQixJQUFJQyxXQUFXLEdBQUcsRUFBRTtJQUNwQixJQUFJQyxRQUFRLEdBQUcsS0FBSztJQUVwQixJQUFJLENBQUM1QixVQUFVLENBQUM2QixJQUFJLENBQUNiLFVBQVUsQ0FBQ0gsS0FBSyxDQUFDLEVBQUU7TUFDcENjLFdBQVcsQ0FBQ0csSUFBSSxDQUFDO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLE9BQU8sRUFBRTtNQUFxQyxDQUFDLENBQUM7TUFDbEZKLFFBQVEsR0FBRyxJQUFJO0lBQ25CO0lBRUEsSUFBSSxDQUFDM0IsYUFBYSxDQUFDNEIsSUFBSSxDQUFDYixVQUFVLENBQUNGLFFBQVEsQ0FBQyxFQUFFO01BQzFDYSxXQUFXLENBQUNHLElBQUksQ0FBQztRQUFFQyxJQUFJLEVBQUUsVUFBVTtRQUFFQyxPQUFPLEVBQUU7TUFBbUMsQ0FBQyxDQUFDO01BQ25GSixRQUFRLEdBQUcsSUFBSTtJQUNuQjtJQUVBLElBQUksQ0FBQ0EsUUFBUSxFQUFFO01BQ1hLLFlBQVksQ0FBQyxDQUFDO0lBQ2xCO0lBQ0F2QixTQUFTLENBQUNpQixXQUFXLENBQUM7RUFDMUIsQ0FBQztFQUVELElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7SUFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbkIsVUFBVSxDQUFDO0VBQzNCLENBQUM7RUFFRCxvQkFDSTlGLDJEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFPLGdCQUNsQk4sMkRBQUEsQ0FBQ3NFLGlEQUFNLHFCQUNIdEUsMkRBQUEsZ0JBQU8sNkJBQStCLENBQ2xDLENBQUMsZUFDVEEsMkRBQUE7SUFBTWtILFFBQVEsRUFBRVg7RUFBYSxnQkFDekJ2RywyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBK0IsZ0JBQzFDTiwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBUSxnQkFDbkJOLDJEQUFBO0lBQUdtSCxJQUFJLEVBQUM7RUFBRyxnQkFDUG5ILDJEQUFBO0lBQUtvSCxHQUFHLEVBQUVuRCwyQ0FBSUE7RUFBQyxDQUFFLENBQ2xCLENBQ0YsQ0FDSixDQUFDLGVBQ05qRSwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBcUMsZ0JBQ2hETiwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBdUMsZ0JBQ2xETiwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBa0IsZ0JBQzdCTiwyREFBQSxhQUFJLDZCQUE0QixDQUMvQixDQUFDLGVBQ05BLDJEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFvQyxnQkFDL0NOLDJEQUFBLDBCQUNJQSwyREFBQTtJQUFJTSxTQUFTLEVBQUM7RUFBTSxnQkFDaEJOLDJEQUFBLENBQUNzRCxzREFBTTtJQUNIcEIsRUFBRSxFQUFFO01BQ0FtRixLQUFLLEVBQUUsT0FBTztNQUNkN0UsTUFBTSxFQUFFLE1BQU07TUFDZDhFLE1BQU0sRUFBRSxpQkFBaUI7TUFDekJ2RSxLQUFLLEVBQUUsT0FBTztNQUNkTCxZQUFZLEVBQUUsTUFBTTtNQUNwQmlCLGVBQWUsRUFBRSxhQUFhO01BQzlCRyxhQUFhLEVBQUUsTUFBTTtNQUNyQixTQUFTLEVBQUU7UUFDUEgsZUFBZSxFQUFFLGFBQWE7UUFDOUIyRCxNQUFNLEVBQUU7TUFDWjtJQUNKO0VBQUUsR0FFb0Isc0JBRWxCLENBQ1IsQ0FBQyxlQUNMdEgsMkRBQUE7SUFBSU0sU0FBUyxFQUFDO0VBQU0sZ0JBQ2hCTiwyREFBQSxDQUFDc0Qsc0RBQU07SUFDSHBCLEVBQUUsRUFBRTtNQUNBbUYsS0FBSyxFQUFFLE9BQU87TUFDZDdFLE1BQU0sRUFBRSxNQUFNO01BQ2Q4RSxNQUFNLEVBQUUsaUJBQWlCO01BQ3pCdkUsS0FBSyxFQUFFLE9BQU87TUFDZEwsWUFBWSxFQUFFLE1BQU07TUFDcEJpQixlQUFlLEVBQUUsYUFBYTtNQUM5QkcsYUFBYSxFQUFFLE1BQU07TUFDckIsU0FBUyxFQUFFO1FBQ1BILGVBQWUsRUFBRSxhQUFhO1FBQzlCMkQsTUFBTSxFQUFFO01BQ1o7SUFDSjtFQUFFLEdBQ0wsd0JBRU8sQ0FDUixDQUFDLGVBQ0x0SCwyREFBQTtJQUFJTSxTQUFTLEVBQUM7RUFBTSxnQkFDaEJOLDJEQUFBLENBQUNzRCxzREFBTTtJQUNIcEIsRUFBRSxFQUFFO01BQ0FtRixLQUFLLEVBQUUsT0FBTztNQUNkN0UsTUFBTSxFQUFFLE1BQU07TUFDZDhFLE1BQU0sRUFBRSxpQkFBaUI7TUFDekJ2RSxLQUFLLEVBQUUsT0FBTztNQUNkTCxZQUFZLEVBQUUsTUFBTTtNQUNwQmlCLGVBQWUsRUFBRSxhQUFhO01BQzlCRyxhQUFhLEVBQUUsTUFBTTtNQUNyQixTQUFTLEVBQUU7UUFDUEgsZUFBZSxFQUFFLGFBQWE7UUFDOUIyRCxNQUFNLEVBQUU7TUFDWjtJQUNKO0VBQUUsR0FDTCxxQkFFTyxDQUNSLENBQ0osQ0FDSCxDQUFDLGVBQ050SCwyREFBQSxDQUFDdUUsc0RBQU87SUFBQ3JDLEVBQUUsRUFBRTtNQUFFcUYsV0FBVyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQUMsZUFDeEN2SCwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBNkIsZ0JBQ3hDTiwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBaUIsZ0JBQzVCTiwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBWSxnQkFDdkJOLDJEQUFBO0lBQUdNLFNBQVMsRUFBQztFQUFZLEdBQUMsMkNBQXlDLENBQUMsZUFDcEVOLDJEQUFBLENBQUN3RSxzREFBUztJQUNOZ0QsRUFBRSxFQUFDLE9BQU87SUFDVnBCLElBQUksRUFBQyxPQUFPO0lBQ1pTLElBQUksRUFBQyxNQUFNO0lBQ1hSLEtBQUssRUFBRVAsVUFBVSxDQUFDSCxLQUFNO0lBQ3hCOEIsUUFBUSxFQUFFekIsWUFBYTtJQUN2QjBCLFdBQVcsRUFBQywyQ0FBd0M7SUFDcEQ3RSxPQUFPLEVBQUMsVUFBVTtJQUNsQjhFLFVBQVUsRUFBRTtNQUNSQyxLQUFLLEVBQUU7UUFBRTdFLEtBQUssRUFBRSxPQUFPO1FBQUV3RSxXQUFXLEVBQUU7TUFBUSxDQUFDO01BQy9DTSxPQUFPLEVBQUU7UUFDTEMsY0FBYyxFQUFFO01BQ3BCO0lBQ0osQ0FBRTtJQUNGQyxlQUFlLEVBQUU7TUFDYkgsS0FBSyxFQUFFO1FBQUU3RSxLQUFLLEVBQUU7TUFBTztJQUMzQixDQUFFO0lBQ0ZiLEVBQUUsRUFBRTtNQUNBbUYsS0FBSyxFQUFFLE9BQU87TUFDZCwwQkFBMEIsRUFBRTtRQUN4QixZQUFZLEVBQUU7VUFDVkUsV0FBVyxFQUFFO1FBQ2pCLENBQUM7UUFDRCxrQkFBa0IsRUFBRTtVQUNoQkEsV0FBVyxFQUFFLE9BQU87VUFDcEJELE1BQU0sRUFBRTtRQUNaLENBQUM7UUFDRCx3QkFBd0IsRUFBRTtVQUN0QkMsV0FBVyxFQUFFO1FBQ2pCO01BQ0osQ0FBQztNQUNEUyxLQUFLLEVBQUU7UUFDSGpGLEtBQUssRUFBRTtNQUNYLENBQUM7TUFDRCxvQ0FBb0MsRUFBRTtRQUNsQ0EsS0FBSyxFQUFFO01BQ1g7SUFDSjtFQUFFLENBQ0wsQ0FBQyxFQUNBd0MsTUFBTSxDQUFDMEMsTUFBTSxHQUFHLENBQUMsSUFBSTFDLE1BQU0sQ0FBQzJDLElBQUksQ0FBQyxVQUFBQyxLQUFLO0lBQUEsT0FBSUEsS0FBSyxDQUFDdEIsSUFBSSxLQUFLLE9BQU87RUFBQSxFQUFDLGlCQUMvRDdHLDJEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFnQyxHQUMxQ2lGLE1BQU0sQ0FBQzJDLElBQUksQ0FBQyxVQUFBQyxLQUFLO0lBQUEsT0FBSUEsS0FBSyxDQUFDdEIsSUFBSSxLQUFLLE9BQU87RUFBQSxFQUFDLENBQUNDLE9BQzdDLENBRVIsQ0FDSixDQUFDLGVBQ045RywyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBb0IsZ0JBQy9CTiwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBZSxnQkFDMUJOLDJEQUFBO0lBQUdNLFNBQVMsRUFBQztFQUFZLEdBQUMsZUFBYSxDQUFDLGVBQ3hDTiwyREFBQSxDQUFDd0Usc0RBQVM7SUFDTmdELEVBQUUsRUFBQyxVQUFVO0lBQ2JwQixJQUFJLEVBQUMsVUFBVTtJQUNmc0IsV0FBVyxFQUFDLGVBQVk7SUFDeEI3RSxPQUFPLEVBQUMsVUFBVTtJQUNsQndELEtBQUssRUFBRVAsVUFBVSxDQUFDRixRQUFTO0lBQzNCNkIsUUFBUSxFQUFFekIsWUFBYTtJQUN2QmEsSUFBSSxFQUFFMUIsWUFBWSxHQUFHLE1BQU0sR0FBRyxVQUFXO0lBQ3pDd0MsVUFBVSxFQUFFO01BQ1JDLEtBQUssRUFBRTtRQUFFN0UsS0FBSyxFQUFFLE9BQU87UUFBRXdFLFdBQVcsRUFBRTtNQUFRLENBQUM7TUFDL0NhLFlBQVksZUFDUnBJLDJEQUFBLENBQUMwRSxzREFBYztRQUFDMkQsUUFBUSxFQUFDO01BQUssZ0JBQzFCckksMkRBQUEsQ0FBQ3FELHNEQUFVO1FBQ1AsY0FBVyw0QkFBNEI7UUFDdkNXLE9BQU8sRUFBRXlCLHVCQUF3QjtRQUNqQ21DLEtBQUssRUFBRTtVQUFFN0UsS0FBSyxFQUFFO1FBQVE7TUFBRSxHQUV6Qm9DLFlBQVksZ0JBQUduRiwyREFBQSxDQUFDNEUsMEVBQWEsTUFBRSxDQUFDLGdCQUFHNUUsMkRBQUEsQ0FBQzJFLHVFQUFVLE1BQUUsQ0FDekMsQ0FDQSxDQUNuQjtNQUNEa0QsT0FBTyxFQUFFO1FBQ0xDLGNBQWMsRUFBRTtNQUNwQjtJQUNKLENBQUU7SUFDRkMsZUFBZSxFQUFFO01BQ2JILEtBQUssRUFBRTtRQUFFN0UsS0FBSyxFQUFFO01BQU87SUFDM0IsQ0FBRTtJQUNGYixFQUFFLEVBQUU7TUFDQW1GLEtBQUssRUFBRSxPQUFPO01BQ2QsMEJBQTBCLEVBQUU7UUFDeEIsWUFBWSxFQUFFO1VBQ1ZFLFdBQVcsRUFBRTtRQUNqQixDQUFDO1FBQ0Qsa0JBQWtCLEVBQUU7VUFDaEJBLFdBQVcsRUFBRSxPQUFPO1VBQ3BCRCxNQUFNLEVBQUU7UUFDWixDQUFDO1FBQ0Qsd0JBQXdCLEVBQUU7VUFDdEJDLFdBQVcsRUFBRTtRQUNqQjtNQUNKLENBQUM7TUFDRFMsS0FBSyxFQUFFO1FBQ0hqRixLQUFLLEVBQUU7TUFDWCxDQUFDO01BQ0Qsb0NBQW9DLEVBQUU7UUFDbENBLEtBQUssRUFBRTtNQUNYO0lBQ0o7RUFBRSxDQUNMLENBQUMsRUFDQXdDLE1BQU0sQ0FBQzBDLE1BQU0sR0FBRyxDQUFDLElBQUkxQyxNQUFNLENBQUMyQyxJQUFJLENBQUMsVUFBQUMsS0FBSztJQUFBLE9BQUlBLEtBQUssQ0FBQ3RCLElBQUksS0FBSyxVQUFVO0VBQUEsRUFBQyxpQkFDbEU3RywyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBZ0MsR0FDMUNpRixNQUFNLENBQUMyQyxJQUFJLENBQUMsVUFBQUMsS0FBSztJQUFBLE9BQUlBLEtBQUssQ0FBQ3RCLElBQUksS0FBSyxVQUFVO0VBQUEsRUFBQyxDQUFDQyxPQUNoRCxDQUVSLENBQ0osQ0FDSixDQUFDLGVBQ045RywyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBcUIsZ0JBRWhDTiwyREFBQSxDQUFDeUUsc0RBQU07SUFDSDZELGNBQWM7SUFDZHBHLEVBQUUsRUFBRTtNQUNBLHFDQUFxQyxFQUFFO1FBQ25DYSxLQUFLLEVBQUUsT0FBTztRQUNkLFNBQVMsRUFBRTtVQUNQWSxlQUFlLEVBQUU7UUFDckI7TUFDSixDQUFDO01BQ0Qsd0RBQXdELEVBQUU7UUFDdERBLGVBQWUsRUFBRTtNQUNyQjtJQUNKO0VBQUUsQ0FDTCxDQUFDLGVBQ0YzRCwyREFBQTtJQUFHTSxTQUFTLEVBQUM7RUFBOEIsR0FBQyxlQUFhLENBQ3hELENBQUMsZUFDTk4sMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQTBCLGdCQUNyQ04sMkRBQUEsQ0FBQ3NELHNEQUFNO0lBQUN1RCxJQUFJLEVBQUMsUUFBUTtJQUNqQjNFLEVBQUUsRUFBRTtNQUNBbUYsS0FBSyxFQUFFLE9BQU87TUFDZDdFLE1BQU0sRUFBRSxNQUFNO01BQ2RPLEtBQUssRUFBRSxPQUFPO01BQ2RMLFlBQVksRUFBRSxNQUFNO01BQ3BCaUIsZUFBZSxFQUFFLFNBQVM7TUFDMUJHLGFBQWEsRUFBRSxNQUFNO01BQ3JCQyxVQUFVLEVBQUUsTUFBTTtNQUNsQixTQUFTLEVBQUU7UUFDUEosZUFBZSxFQUFFLFNBQVM7UUFDMUI0RSxTQUFTLEVBQUUsYUFBYSxDQUFFO01BQzlCO0lBQ0o7RUFBRSxHQUNMLG1CQUVPLENBQ1AsQ0FBQyxlQUNOdkksMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCTiwyREFBQTtJQUFHbUgsSUFBSSxFQUFDLEdBQUc7SUFBQzdHLFNBQVMsRUFBQztFQUFjLGdCQUNoQ04sMkRBQUE7SUFBR00sU0FBUyxFQUFDO0VBQXVELEdBQUMseUNBRWxFLENBQ0osQ0FDRixDQUFDLGVBQ05OLDJEQUFBLENBQUN1RSxzREFBTztJQUFDckMsRUFBRSxFQUFFO01BQUVxRixXQUFXLEVBQUU7SUFBTztFQUFFLENBQUUsQ0FBQyxlQUN4Q3ZILDJEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFxQyxnQkFDaEROLDJEQUFBO0lBQUdNLFNBQVMsRUFBQztFQUFpQixHQUFDLHVCQUFxQixDQUFDLGVBQ3JETiwyREFBQTtJQUFHbUgsSUFBSSxFQUFDO0VBQVcsZ0JBQ2ZuSCwyREFBQTtJQUFHTSxTQUFTLEVBQUM7RUFBNkMsR0FBQywwQkFBd0IsQ0FDcEYsQ0FDRixDQUNKLENBQ0osQ0FBQyxlQUNOTiwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBOEMsZ0JBQ3pETiwyREFBQSxZQUFHLDZEQUF3RCxlQUFBQSwyREFBQTtJQUFHTSxTQUFTLEVBQUMsMEJBQTBCO0lBQUM2RixNQUFNLEVBQUMsUUFBUTtJQUFDZ0IsSUFBSSxFQUFDO0VBQXFDLEdBQUMsMEJBQXdCLENBQUMsVUFBTSxlQUFBbkgsMkRBQUE7SUFBR00sU0FBUyxFQUFDLDBCQUEwQjtJQUFDNkYsTUFBTSxFQUFDLFFBQVE7SUFBQ2dCLElBQUksRUFBQztFQUFtQyxHQUFDLDJCQUF5QixDQUFDLGVBQWMsQ0FDclUsQ0FDSCxDQUNKLENBQUM7QUFFZixDQUFDO0FBRUQsaUVBQWUxRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pUTTtBQUNZO0FBRXRDLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7RUFDbkIsb0JBQ0lWLDBEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFZLGdCQUN2Qk4sMERBQUEsQ0FBQ3NFLGdEQUFNLHFCQUNIdEUsMERBQUEsZ0JBQU8seUJBQTJCLENBQzlCLENBQUMseUJBRVIsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZVUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEU7QUFDbUM7QUFDSjtBQUNWO0FBQ1U7QUFDUDtBQUVwQjtBQUU3QixJQUFNUixNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBQSxFQUFTO0VBRWpCLG9CQUNJRiwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBUSxnQkFDbkJOLDBEQUFBLENBQUM2SSxvREFBTyxNQUFFLENBQUMsZUFDWDdJLDBEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFZLGdCQUN2Qk4sMERBQUEsQ0FBQ3dJLHFEQUFPO0lBQUNwRSxLQUFLLEVBQUMsd0JBQXdCO0lBQUMwRSxTQUFTLEVBQUM7RUFBSyxnQkFDbkQ5SSwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBUSxnQkFDbkJOLDBEQUFBLENBQUN5SSxvRUFBWSxNQUFFLENBQUMsZUFDaEJ6SSwwREFBQSxlQUFNLGVBQW1CLENBQ3hCLENBQ0EsQ0FBQyxlQUNWQSwwREFBQSxDQUFDd0kscURBQU87SUFBQ3BFLEtBQUssRUFBQywyQkFBMkI7SUFBQzBFLFNBQVMsRUFBQztFQUFLLGdCQUV0RDlJLDBEQUFBLENBQUNxRCxxREFBVTtJQUFDTixLQUFLLEVBQUMsU0FBUztJQUFDekMsU0FBUyxFQUFDLFNBQVM7SUFBQyxjQUFXO0VBQVEsZ0JBQy9ETiwwREFBQSxDQUFDMEksK0RBQU87SUFBQ3BJLFNBQVMsRUFBQztFQUFZLENBQUUsQ0FDekIsQ0FDUCxDQUNSLENBQUMsZUFDTk4sMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQXFCLGdCQUNoQ04sMERBQUEsQ0FBQ3NELHFEQUFNO0lBQUNULE9BQU8sRUFBQyxXQUFXO0lBQUNhLElBQUksRUFBQyxPQUFPO0lBQUNwRCxTQUFTLEVBQUMsY0FBYztJQUFDc0gsS0FBSyxFQUFFO01BQUVqRSxlQUFlLEVBQUUsYUFBYTtNQUFFakIsWUFBWSxFQUFFLE1BQU07TUFBRTRFLE1BQU0sRUFBRTtJQUFzQjtFQUFFLGdCQUM3SnRILDBEQUFBO0lBQU1NLFNBQVMsRUFBQztFQUFhLGdCQUFDTiwwREFBQSxDQUFDMkksb0VBQVk7SUFBQ0ksUUFBUSxFQUFDO0VBQU8sQ0FBRSxDQUFDLEtBQU8sQ0FBQyxlQUFBL0ksMERBQUEsWUFBRyx5QkFBb0IsQ0FDMUYsQ0FDUCxDQUFDLGVBRU5BLDBEQUFBO0lBQVFnRSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU00RSx1REFBSyxDQUFDSSxPQUFPLENBQUMsb0JBQW9CLENBQUM7SUFBQTtFQUFDLEdBQUMsUUFBYyxDQUN6RSxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlOUksTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUN2Q3JCLElBQU15QixjQUFjLEdBQUcsQ0FDbkI7RUFDSXdCLE1BQU0sRUFBRSxRQUFRO0VBQ2hCdkIsSUFBSSxFQUFFO0FBQ1YsQ0FBQyxFQUNEO0VBQ0l1QixNQUFNLEVBQUUsZ0JBQWdCO0VBQ3hCdkIsSUFBSSxFQUFFO0FBQ1YsQ0FBQyxFQUNEO0VBQ0l1QixNQUFNLEVBQUUsU0FBUztFQUNqQnZCLElBQUksRUFBRTtBQUNWLENBQUMsRUFDRDtFQUNJdUIsTUFBTSxFQUFFLFNBQVM7RUFDakJ2QixJQUFJLEVBQUU7QUFDVixDQUFDLEVBQ0Q7RUFDSXVCLE1BQU0sRUFBRSxjQUFjO0VBQ3RCdkIsSUFBSSxFQUFFO0FBQ1YsQ0FBQyxDQUNKO0FBRUQsaUVBQWVELGNBQWM7Ozs7Ozs7Ozs7O0FDdkI3Qjs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0hvbWUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9NYWluUm91dGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvcGFnZXMvQ2FudGFudGUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvcGFnZXMvQ29udGVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9wYWdlcy9GaXJzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9wYWdlcy9JbmljaW9TZXNpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvcGFnZXMvUmVnaXN0ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvcGFnZXMvU2Vjb25kLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL3BhZ2VzL3JhcGVyb3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9zdHlsZXMvY2FudGFudGUuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvc3R5bGVzL2NvbnRlbnQuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvc3R5bGVzL2ZpcnN0LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL3N0eWxlcy9sb2dpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9zdHlsZXMvc2Vjb25kLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaXJzdCBmcm9tICcuL3NyYy9wYWdlcy9GaXJzdC5qc3gnO1xuaW1wb3J0IFNlY29uZCBmcm9tICcuL3NyYy9wYWdlcy9TZWNvbmQuanN4JztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vc3JjL3BhZ2VzL0NvbnRlbnQuanN4JztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG4vL1RPRE8gTWlyYXIgZWwgdGFpbHdpbmQgZW4gYXJjaGl2b3MgcXVlIG5vIHNlYW4gZXN0ZVxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctaG9tZSBob21lIG1vbnRzZXJyYXQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXRlcmFsXCI+XG4gICAgICAgIDxGaXJzdCAvPlxuICAgICAgICA8U2Vjb25kIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aXNvclwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXJlY2hhXCI+XG4gICAgICAgIDxDb250ZW50IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlcywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9zcmMvcGFnZXMvSW5pY2lvU2VzaW9uLmpzeCdcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL3NyYy9wYWdlcy9SZWdpc3Rlci5qc3gnXG5cbmNvbnN0IE1haW5Sb3V0ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlcz5cbiAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbG9naW5cIiBlbGVtZW50PXs8TG9naW4gLz59IC8+XG4gICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9yZWdpc3RlclwiIGVsZW1lbnQ9ezxSZWdpc3RlciAvPn0gLz5cbiAgICA8L1JvdXRlcz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Sb3V0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4vTWFpblJvdXRlcic7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXIgLz5cbiAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuLy8gTW9udGEgZWwgY29tcG9uZW50ZSBBcHAgZW4gZWwgZWxlbWVudG8gY29uIGVsIElEICdyb290J1xuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKS5yZW5kZXIoPEFwcCAvPik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGVzL2NhbnRhbnRlLmNzcyc7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZE1lZGlhLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgY2FudGFudGVzRGVSYXAgZnJvbSAnLi9yYXBlcm9zJzsgLy8gSW1wb3J0YSBlbCBhcnJheSBkZSBjYW50YW50ZXMgZGUgcmFwXG5pbXBvcnQgZm90byBmcm9tICcuLi9pbWcvbG9nbzE5Mi5wbmcnO1xuXG5jb25zdCBDYW50YW50ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FudGFudGUnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdHVsbyc+XG4gICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICA8YT5BcnRpc3RhcyBwb3B1bGFyZXM8L2E+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5Nb3N0cmFyIHRvZG9zPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdlclwiPlxuICAgICAgICAgICAgICAgIHtjYW50YW50ZXNEZVJhcC5tYXAoKGNhbnRhbnRlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBydWViYVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdjYXJkLWhvdmVyJyBzeD17eyBtaW5XaWR0aDogMTc4LCBtYXhXaWR0aDogMTc4LCBtaW5IZWlnaHQ6IDIzNiwgbWF4SGVpZ2h0OiAyMzYsIGJhY2tncm91bmQ6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGhlaWdodDogMTQwLCBwYWRkaW5nOiAnMTBweCcsIGJvcmRlclJhZGl1czogJzUwJScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ZvdG99IC8vIFNpIGxhIGltYWdlbiBubyBlc3TDoSBkaXNwb25pYmxlLCB1c2EgdW5hIGltYWdlbiBwcmVkZXRlcm1pbmFkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYW50YW50ZS5ub21icmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGNvbG9yOiAnI0IzQjNCMycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnRpc3RhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbnRhbnRlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IENhbnRhbnRlIGZyb20gJy4vQ2FudGFudGUuanN4JztcbmltcG9ydCB7IEljb25CdXR0b24sIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dSaWdodEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93UmlnaHQnO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dMZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dMZWZ0JztcbmltcG9ydCAnLi4vc3R5bGVzL2NvbnRlbnQuY3NzJztcblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XG4gICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCIgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzBhMGEwYScsIG1hcmdpblJpZ2h0OiAnMTBweCcsIG1hcmdpbkxlZnQ6ICcxMHB4JywgJyY6aG92ZXInOiB7IGJhY2tncm91bmQ6ICcjMGEwYTBhJyB9IH19IGFyaWEtbGFiZWw9XCJwcmV2aW91c1wiPlxuICAgICAgICAgICAgPEtleWJvYXJkQXJyb3dMZWZ0SWNvbiBzeD17eyBjb2xvcjogJyNCM0IzQjMnIH19IC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMwYTBhMGEnLCAnJjpob3Zlcic6IHsgYmFja2dyb3VuZDogJyMwYTBhMGEnIH0gfX0gYXJpYS1sYWJlbD1cIm5leHRcIj5cbiAgICAgICAgICAgIDxLZXlib2FyZEFycm93UmlnaHRJY29uIHN4PXt7IGNvbG9yOiAnI0IzQjNCMycgfX0gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgICAgICBjb2xvcjogJyNCM0IzQjMnLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9yZWdpc3RlcicpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlZ2lzdHJhcnNlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNCM0IzQjMnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL2xvZ2luJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSW5pY2lhciBzZXNpw7NuXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXRoLXNjcm9sbFwiPlxuICAgICAgICAgIDxDYW50YW50ZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBsb2dvIGZyb20gJy4uL2ltZy9zcG90aWZ5LnBuZydcbmltcG9ydCBDb3R0YWdlT3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ290dGFnZU91dGxpbmVkJztcbmltcG9ydCBTZWFyY2hPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2hPdXRsaW5lZCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9maXJzdC5jc3MnO1xuXG5jb25zdCBGaXJzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3QnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28nPlxuICAgICAgICAgICAgICAgIDxDb3R0YWdlT3V0bGluZWRJY29uIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9J1Nwb3RpZnknPiBTcG90aWZ5IDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmljaW9cIj5cbiAgICAgICAgICAgICAgICA8Q290dGFnZU91dGxpbmVkSWNvbiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPiBJbmljaW8gPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1c2NhclwiPlxuICAgICAgICAgICAgICAgIDxTZWFyY2hPdXRsaW5lZEljb24gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj4gQnVzY2FyIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpcnN0IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0ICcuLi9zdHlsZXMvbG9naW4uY3NzJ1xuaW1wb3J0IHsgRGl2aWRlciwgQnV0dG9uLCBUZXh0RmllbGQsIFN3aXRjaCwgSW5wdXRBZG9ybm1lbnQsIEljb25CdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBWaXNpYmlsaXR5IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVmlzaWJpbGl0eSc7XG5pbXBvcnQgVmlzaWJpbGl0eU9mZiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHlPZmYnO1xuaW1wb3J0IEdvb2dsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Hb29nbGUnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1nL2xvZ28ucG5nJztcblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL1thLXpBLVowLTkuXyUrLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Mix9L2c7XG4gICAgY29uc3QgcGFzc3dvcmRSZWdleCA9IC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qXFxkKSg/PS4qWyFAIyQlXiYqKClcXC1fPStcXFxcXFx8XFxbXFxde307OlxcJ1wiLC48Pi8/XSkuezgsfSQvO1xuXG4gICAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tTaG93UGFzc3dvcmQgPSAoKSA9PiB7XG4gICAgICAgIHNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKTtcbiAgICB9O1xuXG4gICAgY29uc3QgW2Zvcm1WYWx1ZXMsIHNldEZvcm1WYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiZW1haWxcIikge1xuICAgICAgICAgICAgc2V0Rm9ybVZhbHVlcyh7IC4uLmZvcm1WYWx1ZXMsIGVtYWlsOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIHNldEZvcm1WYWx1ZXMoeyAuLi5mb3JtVmFsdWVzLCBwYXNzd29yZDogdmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRXJyb3JzID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdG90YWxFcnJvcnMgPSBbXTtcbiAgICAgICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoZm9ybVZhbHVlcy5lbWFpbCkpIHtcbiAgICAgICAgICAgIHRvdGFsRXJyb3JzLnB1c2goeyB0eXBlOiAnZW1haWwnLCBtZXNzYWdlOiAnRWwgY29ycmVvIGVsZWN0csOzbmljbyBubyBlcyB2w6FsaWRvJyB9KTtcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFzc3dvcmRSZWdleC50ZXN0KGZvcm1WYWx1ZXMucGFzc3dvcmQpKSB7XG4gICAgICAgICAgICB0b3RhbEVycm9ycy5wdXNoKHsgdHlwZTogJ3Bhc3N3b3JkJywgbWVzc2FnZTogJ0xhIGNvbnRyYXNlw7FhIGRlYmUgY29udGVuZXIgdG9kbycgfSk7XG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc0Vycm9yKSB7XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRFcnJvcnModG90YWxFcnJvcnMpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1WYWx1ZXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XG4gICAgICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgICAgICAgIDx0aXRsZT5JbmljaWFyIHNlc2nDs24gLSBTcG90aWZ5PC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVsbWV0PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUVycm9yc30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhckxvZ2luIGZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyTG9naW4gZmxleCBqdXN0aWZ5LWNlbnRlciAnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm11bGFyaW9Mb2dpbiByb3VuZGVkLXhsIG15LTggcHgtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5JbmljaWEgc2VzacOzbiBlbiBTcG90aWZ5PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250aW51ZVNvY2lhbCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtYi0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzMyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkIHdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEdvb2dsZUljb24gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGludWFyIGNvbiBHb29nbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtYi0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzMyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkIHdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250aW51YXIgY29uIEZhY2Vib29rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbWItOCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMjRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQ4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCB3aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGludWFyIGNvbiBBcHBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgc3g9e3sgYm9yZGVyQ29sb3I6ICdncmF5JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0ZmllbGRzIG10LTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1lbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYWlsIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5Db3JyZW8gZWxlY3Ryw7NuaWNvIG8gbm9tYnJlIGRlIHVzdWFyaW88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdDb3JyZW8gZWxlY3Ryw7NuaWNvIG8gbm9tYnJlIGRlIHVzdWFyaW8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiAnd2hpdGUnLCBib3JkZXJDb2xvcjogJ3doaXRlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RjaGVkT3V0bGluZTogJ3doaXRlLWJvcmRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiAnZ3JheScgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMjRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmIC5NdWlPdXRsaW5lZElucHV0LXJvb3QnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3ZlciBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLWZvY3VzZWQgZmllbGRzZXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd3aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpSW5wdXRCYXNlLWlucHV0OjpwbGFjZWhvbGRlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGVycm9ycy5sZW5ndGggPiAwICYmIGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IFwiZW1haWxcIikpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yZWQtNzAwIHRleHQteHMgdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IFwiZW1haWxcIikubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFzc3dvcmQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkNvbnRyYXNlw7FhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdDb250cmFzZcOxYSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiAnd2hpdGUnLCBib3JkZXJDb2xvcjogJ3doaXRlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ0b2dnbGUgcGFzc3dvcmQgdmlzaWJpbGl0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU2hvd1Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dQYXNzd29yZCA/IDxWaXNpYmlsaXR5T2ZmIC8+IDogPFZpc2liaWxpdHkgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Y2hlZE91dGxpbmU6ICd3aGl0ZS1ib3JkZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogJ2dyYXknIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMzI0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1yb290Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgZmllbGRzZXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXIgZmllbGRzZXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkIHdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1mb2N1c2VkIGZpZWxkc2V0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmIC5NdWlJbnB1dEJhc2UtaW5wdXQ6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZXJyb3JzLmxlbmd0aCA+IDAgJiYgZXJyb3JzLmZpbmQoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gXCJwYXNzd29yZFwiKSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJlZC03MDAgdGV4dC14cyB0ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmZpbmQoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gXCJwYXNzd29yZFwiKS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAvL1RPRE8gQ2FtYmlhciBlbCB0YW1hw7FvIGRlIGxhIGJvbGEgZGVsIHN3aXRjaCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpU3dpdGNoLXN3aXRjaEJhc2UuTXVpLWNoZWNrZWQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVN3aXRjaC1zd2l0Y2hCYXNlLk11aS1jaGVja2VkICsgLk11aVN3aXRjaC10cmFjayc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDMwLDIxNSw5NiwyNTUpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSc+UmVjdcOpcmRhbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMzI0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzI1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFlZDc2MCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMWVkNzYwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjAyKScsIC8vIEhhY2VyIGVsIGJvdMOzbiB1biBwb2NvIG3DoXMgZ3JhbmRlIGVuIGhvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmljaWFyIFNlc2nDs25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtdC04IG1iLTggdW5kZXJsaW5lIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1jdXN0b20tdGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDCv1NlIHRlIGhhIG9sdmlkYWRvIGxhIGNvbnRyYXNlw7FhP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBzeD17eyBib3JkZXJDb2xvcjogJ2dyYXknIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50IG10LTggbWItOCBmbGV4IGp1c3RpZnktZXZlbmx5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNvbG9yLXRleHQnPsK/Tm8gdGllbmVzIGN1ZW50YT88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nL3JlZ2lzdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHVuZGVybGluZSBob3Zlcjp0ZXh0LWN1c3RvbS10ZXh0Jz5TdWJzY3LDrWJldGUgYSBTcG90aWZ5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlckxvZ2luIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkVzdGUgc2l0aW8gZXN0w6EgcHJvdGVnaWRvIHBvciByZUNBUFRDSEEuIFNlIGFwbGljYW4gbG9zIDxhIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgdW5kZXJsaW5lJyB0YXJnZXQ9J19ibGFuaycgaHJlZj0naHR0cHM6Ly9wb2xpY2llcy5nb29nbGUuY29tL3ByaXZhY3knPlTDqXJtaW5vcyBkZWwgc2VydmljaW88L2E+IHkgbGEgPGEgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciB1bmRlcmxpbmUnIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL3BvbGljaWVzLmdvb2dsZS5jb20vdGVybXMnPlBvbMOtdGljYSBkZSBwcml2YWNpZGFkPC9hPiBkZSBHb29nbGUuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2RpdiA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtd2hpdGUnPlxuICAgICAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+UmVnw61zdHJhdGUgLSBTcG90aWZ5PC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVsbWV0PlxuICAgICAgICAgICAgUMOhZ2luYSBkZSByZWdpc3Ryb1xuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVG9vbHRpcCwgSWNvbkJ1dHRvbiwgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgVHVybmVkSW5JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVHVybmVkSW4nO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BZGQnO1xuaW1wb3J0IExhbmd1YWdlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xhbmd1YWdlJztcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcblxuaW1wb3J0ICcuLi9zdHlsZXMvc2Vjb25kLmNzcydcblxuY29uc3QgU2Vjb25kID0gKCkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZCc+XG4gICAgICAgICAgICA8VG9hc3RlciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWJsaW90ZWNhXCI+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJDb250cmFlciBUdSBCaWJsaW90ZWNhXCIgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJ1ZWJhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHVybmVkSW5JY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UdSBiaWJsaW90ZWNhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJDcmVhciB1bmEgbGlzdGEgbyBjYXJwZXRhXCIgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiAvL1RPRE8gQXJyZWdsYXIgZWwgYmcgZGVsIGljb25vIGFsIGhhY2VyIGhvdmVyICovfVxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj0nd2FybmluZycgY2xhc3NOYW1lPSdiZy1pY29uJyBhcmlhLWxhYmVsPVwiZGVsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiBjbGFzc05hbWU9J2NvbG9yLWljb24nIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdsb2JhbC1zcGFpblwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHNpemU9XCJzbWFsbFwiIGNsYXNzTmFtZT0nYnV0dG9uLXNwYWluJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIGJvcmRlclJhZGl1czogJzE1cHgnLCBib3JkZXI6ICcwLjVweCBzb2xpZCAjYjNiM2IzJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbG9iYWwtaWNvbic+PExhbmd1YWdlSWNvbiBmb250U2l6ZT0nc21hbGwnIC8+IDwvc3Bhbj48cD5Fc3Bhw7FvbCBkZSBFc3Bhw7FhPC9wPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9hc3Quc3VjY2VzcygnTWVuc2FqZSBkZSBwcnVlYmEhJyl9PlNhbHVkYTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY29uZCIsImNvbnN0IGNhbnRhbnRlc0RlUmFwID0gW1xuICAgIHtcbiAgICAgICAgbm9tYnJlOiBcIkVtaW5lbVwiLFxuICAgICAgICBmb3RvOiBcInVybF9kZV9sYV9pbWFnZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbm9tYnJlOiBcIktlbmRyaWNrIExhbWFyXCIsXG4gICAgICAgIGZvdG86IFwidXJsX2RlX2xhX2ltYWdlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBub21icmU6IFwiSi4gQ29sZVwiLFxuICAgICAgICBmb3RvOiBcInVybF9kZV9sYV9pbWFnZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbm9tYnJlOiBcIkNhcmRpIEJcIixcbiAgICAgICAgZm90bzogXCJ1cmxfZGVfbGFfaW1hZ2VuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5vbWJyZTogXCJUcmF2aXMgU2NvdHRcIixcbiAgICAgICAgZm90bzogXCJ1cmxfZGVfbGFfaW1hZ2VuXCIsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNhbnRhbnRlc0RlUmFwOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZpcnN0IiwiU2Vjb25kIiwiQ29udGVudCIsIkhvbWUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiUm91dGVzIiwiUm91dGUiLCJMb2dpbiIsIlJlZ2lzdGVyIiwiTWFpblJvdXRlciIsImV4YWN0IiwicGF0aCIsImVsZW1lbnQiLCJjcmVhdGVSb290IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIkFwcCIsInJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZE1lZGlhIiwiVHlwb2dyYXBoeSIsImNhbnRhbnRlc0RlUmFwIiwiZm90byIsIkNhbnRhbnRlIiwibWFwIiwiY2FudGFudGUiLCJpbmRleCIsImtleSIsInN4IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiaW1hZ2UiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwiY29tcG9uZW50IiwiY29sb3IiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJub21icmUiLCJ1c2VOYXZpZ2F0ZSIsIkljb25CdXR0b24iLCJCdXR0b24iLCJLZXlib2FyZEFycm93UmlnaHRJY29uIiwiS2V5Ym9hcmRBcnJvd0xlZnRJY29uIiwibmF2aWdhdGUiLCJzaXplIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJvbkNsaWNrIiwibG9nbyIsIkNvdHRhZ2VPdXRsaW5lZEljb24iLCJTZWFyY2hPdXRsaW5lZEljb24iLCJ0aXRsZSIsInVzZVN0YXRlIiwiSGVsbWV0IiwiRGl2aWRlciIsIlRleHRGaWVsZCIsIlN3aXRjaCIsIklucHV0QWRvcm5tZW50IiwiVmlzaWJpbGl0eSIsIlZpc2liaWxpdHlPZmYiLCJHb29nbGVJY29uIiwiZW1haWxSZWdleCIsInBhc3N3b3JkUmVnZXgiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZUNsaWNrU2hvd1Bhc3N3b3JkIiwiX3VzZVN0YXRlNSIsImVtYWlsIiwicGFzc3dvcmQiLCJfdXNlU3RhdGU2IiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiX2UkdGFyZ2V0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiX29iamVjdFNwcmVhZCIsImhhbmRsZUVycm9ycyIsInByZXZlbnREZWZhdWx0IiwidG90YWxFcnJvcnMiLCJoYXNFcnJvciIsInRlc3QiLCJwdXNoIiwidHlwZSIsIm1lc3NhZ2UiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJocmVmIiwic3JjIiwid2lkdGgiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImlkIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsIklucHV0UHJvcHMiLCJzdHlsZSIsImNsYXNzZXMiLCJub3RjaGVkT3V0bGluZSIsIklucHV0TGFiZWxQcm9wcyIsImlucHV0IiwibGVuZ3RoIiwiZmluZCIsImVycm9yIiwiZW5kQWRvcm5tZW50IiwicG9zaXRpb24iLCJkZWZhdWx0Q2hlY2tlZCIsInRyYW5zZm9ybSIsIlRvb2x0aXAiLCJUdXJuZWRJbkljb24iLCJBZGRJY29uIiwiTGFuZ3VhZ2VJY29uIiwidG9hc3QiLCJUb2FzdGVyIiwicGxhY2VtZW50IiwiZm9udFNpemUiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==