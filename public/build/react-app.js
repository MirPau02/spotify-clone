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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "montserrat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainRouter__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
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
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../styles/login.css */ "./assets/src/styles/login.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Switch/Switch.js");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material/VisibilityOff */ "./node_modules/@mui/icons-material/VisibilityOff.js");
/* harmony import */ var _mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/ErrorOutline */ "./node_modules/@mui/icons-material/ErrorOutline.js");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../img/logo.png */ "./assets/src/img/logo.png");
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
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\\|\[\]{};:\'",.<>/?]).{5,}$/;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPassword = _useState2[0],
    setShowPassword = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var handleClickShowPassword = function handleClickShowPassword() {
    setShowPassword(!showPassword);
  };
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)({
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
        message: 'La contraseña debe tener minúscula, mayúscula, número y un carácter o más de 5 carácteres'
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_32__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("title", null, "Iniciar sesi\xF3n - Spotify")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("form", {
    onSubmit: handleErrors
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "navbarLogin flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "imagen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("a", {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("img", {
    src: _img_logo_png__WEBPACK_IMPORTED_MODULE_34__
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "containerLogin flex justify-center "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "formularioLogin rounded-xl my-8 px-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "header font-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("h1", null, "Inicia sesi\xF3n en Spotify")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "continueSocial flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("li", {
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
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
  }, "Continuar con Google")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("li", {
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
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
  }, "Continuar con Facebook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("li", {
    className: "mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
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
  }, "Continuar con Apple")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
    sx: {
      borderColor: 'gray'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "textfields mt-8 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "container-email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "email mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
    className: "text-white"
  }, "Correo electr\xF3nico o nombre de usuario"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
    id: "email",
    name: "email",
    type: "text",
    value: formValues.email,
    onChange: handleChange,
    placeholder: "Correo electr\xF3nico o nombre de usuario",
    variant: "outlined",
    InputProps: {
      style: {
        color: 'white'
      },
      classes: {
        notchedOutline: errors.some(function (error) {
          return error.type === "email";
        }) ? 'error-border' : 'white-border'
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
          borderColor: errors.some(function (error) {
            return error.type === "email";
          }) ? 'red' : 'white'
        },
        '&:hover fieldset': {
          borderColor: errors.some(function (error) {
            return error.type === "email";
          }) ? 'red' : 'white',
          border: errors.some(function (error) {
            return error.type === "email";
          }) ? '1px solid red' : '2px solid white'
        },
        '&.Mui-focused fieldset': {
          borderColor: errors.some(function (error) {
            return error.type === "email";
          }) ? 'red' : 'white'
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
  }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "text-red-700 text-xs text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      fontSize: '12px',
      marginRight: '5px'
    }
  }), errors.find(function (error) {
    return error.type === "email";
  }).message))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "container-password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "password mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
    className: "text-white"
  }, "Contrase\xF1a"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
    id: "password",
    name: "password",
    placeholder: "Contrase\xF1a",
    variant: "outlined",
    value: formValues.password,
    onChange: handleChange,
    type: showPassword ? 'text' : 'password',
    InputProps: {
      style: {
        color: 'white'
      },
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
        position: "end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_40__["default"], {
        "aria-label": "toggle password visibility",
        onClick: handleClickShowPassword,
        style: {
          color: 'white'
        }
      }, showPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_41__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_42__["default"], null))),
      classes: {
        notchedOutline: errors.some(function (error) {
          return error.type === "password";
        }) ? 'error-border' : 'white-border'
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
          borderColor: errors.some(function (error) {
            return error.type === "password";
          }) ? 'red' : 'white'
        },
        '&:hover fieldset': {
          borderColor: errors.some(function (error) {
            return error.type === "password";
          }) ? 'red' : 'white',
          border: errors.some(function (error) {
            return error.type === "password";
          }) ? '1px solid red' : '2px solid white'
        },
        '&.Mui-focused fieldset': {
          borderColor: errors.some(function (error) {
            return error.type === "password";
          }) ? 'red' : 'white'
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
  }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "text-red-700 text-xs text-left flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      fontSize: '12px',
      marginRight: '5px'
    }
  }), errors.find(function (error) {
    return error.type === "password";
  }).message)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_43__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
    className: "flex items-center text-white"
  }, "Recu\xE9rdame")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "flex justify-center mt-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
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
  }, "Iniciar Sesi\xF3n")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("a", {
    href: "#",
    className: "inline-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
    className: "mt-8 mb-8 underline text-white hover:text-custom-text"
  }, "\xBFSe te ha olvidado la contrase\xF1a?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
    sx: {
      borderColor: 'gray'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "count mt-8 mb-8 flex justify-evenly"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
    className: "text-color-text"
  }, "\xBFNo tienes cuenta?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("a", {
    href: "/register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
    className: "text-white underline hover:text-custom-text"
  }, "Subscr\xEDbete a Spotify"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "footerLogin flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", null, "Este sitio est\xE1 protegido por reCAPTCHA. Se aplican los ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("a", {
    className: "cursor-pointer underline",
    target: "_blank",
    href: "https://policies.google.com/privacy"
  }, "T\xE9rminos del servicio"), " y la ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("a", {
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
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../styles/login.css */ "./assets/src/styles/login.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/ErrorOutline */ "./node_modules/@mui/icons-material/ErrorOutline.js");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../img/logo.png */ "./assets/src/img/logo.png");
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
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\\|\[\]{};:\'",.<>/?]).{5,}$/;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPassword = _useState2[0],
    setShowPassword = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var handleClickShowPassword = function handleClickShowPassword() {
    setShowPassword(!showPassword);
  };
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)({
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
        message: 'Este correo electrónico no es válido. Asegúrate de que tenga un formato como este: ejemplo@email.com'
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_32__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("title", null, "Reg\xEDstrate - Spotify")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("form", {
    onSubmit: handleErrors
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "navbarLogin flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "imagen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("a", {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("img", {
    src: _img_logo_png__WEBPACK_IMPORTED_MODULE_34__
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "containerLogin flex justify-center "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "formularioLogin rounded-xl my-8 px-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "header font-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("h1", null, "Reg\xEDstrate para empezar a escuchar contenido")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "textfields mt-8 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "container-email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "email mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
    className: "text-white"
  }, "Direcci\xF3n de correo electr\xF3nico"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    id: "email",
    name: "email",
    type: "text",
    value: formValues.email,
    onChange: handleChange,
    placeholder: "nombre@dominio.com",
    variant: "outlined",
    InputProps: {
      style: {
        color: 'white'
      },
      classes: {
        notchedOutline: errors.some(function (error) {
          return error.type === "email";
        }) ? 'error-border' : 'white-border'
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
          borderColor: errors.some(function (error) {
            return error.type === "email";
          }) ? 'red' : 'white'
        },
        '&:hover fieldset': {
          borderColor: errors.some(function (error) {
            return error.type === "email";
          }) ? 'red' : 'white',
          border: errors.some(function (error) {
            return error.type === "email";
          }) ? '1px solid red' : '2px solid white'
        },
        '&.Mui-focused fieldset': {
          borderColor: errors.some(function (error) {
            return error.type === "email";
          }) ? 'red' : 'white'
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
  }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "text-red-700 text-xs text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_36__["default"], {
    style: {
      fontSize: '12px',
      marginRight: '5px'
    }
  }), errors.find(function (error) {
    return error.type === "email";
  }).message)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "flex justify-center mt-6 mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
  }, "Siguiente")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
    sx: {
      '&::before, &::after': {
        borderColor: 'gray'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
    style: {
      color: '#808080'
    }
  }, " o ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "continueSocial flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("li", {
    className: "mt-6 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
  }, "Continuar con Google")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("li", {
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
  }, "Continuar con Facebook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
  }, "Continuar con Apple")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "count mt-8 mb-8 flex justify-evenly"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
    className: "text-color-text"
  }, "\xBFYa tienes cuenta?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("a", {
    href: "/login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", {
    className: "text-white underline hover:text-custom-text"
  }, "Inicia sesi\xF3n aqu\xED."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "footerLogin flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", null, "Este sitio est\xE1 protegido por reCAPTCHA. Se aplican los ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("a", {
    className: "cursor-pointer underline",
    target: "_blank",
    href: "https://policies.google.com/privacy"
  }, "T\xE9rminos del servicio"), " y la ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("a", {
    className: "cursor-pointer underline",
    target: "_blank",
    href: "https://policies.google.com/terms"
  }, "Pol\xEDtica de privacidad"), " de Google."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_mui_icons-material_Add_js-node_modules_mui_icons-material_CottageOutline-fd2180"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDZ0I7QUFDRTtBQUNFO0FBQ3BCO0FBQzFCO0FBQ0EsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBUztFQUNqQixvQkFDRUosMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQXlCLGdCQUN0Q04sMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQVMsZ0JBQ3RCTiwwREFBQSxDQUFDQyw0REFBSyxNQUFFLENBQUMsZUFDVEQsMERBQUEsQ0FBQ0UsNkRBQU0sTUFBRSxDQUNOLENBQUMsZUFDTkYsMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQVMsQ0FBTSxDQUFDLGVBQy9CTiwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBUyxnQkFDdEJOLDBEQUFBLENBQUNHLDhEQUFPLE1BQUUsQ0FDUCxDQUNGLENBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWVDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJPO0FBQ3VCO0FBQ3ZCO0FBQ3NCO0FBQ0Q7QUFFL0MsSUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztFQUN2QixvQkFDRVgsMERBQUEsQ0FBQ08sb0RBQU0scUJBQ0xQLDBEQUFBLENBQUNRLG1EQUFLO0lBQUNJLEtBQUs7SUFBQ0MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFZCwwREFBQSxDQUFDSSw2Q0FBSSxNQUFFO0VBQUUsQ0FBRSxDQUFDLGVBQzNDSiwwREFBQSxDQUFDUSxtREFBSztJQUFDSSxLQUFLO0lBQUNDLElBQUksRUFBQyxRQUFRO0lBQUNDLE9BQU8sZUFBRWQsMERBQUEsQ0FBQ1MsbUVBQUssTUFBRTtFQUFFLENBQUUsQ0FBQyxlQUNqRFQsMERBQUEsQ0FBQ1EsbURBQUs7SUFBQ0ksS0FBSztJQUFDQyxJQUFJLEVBQUMsV0FBVztJQUFDQyxPQUFPLGVBQUVkLDBEQUFBLENBQUNVLCtEQUFRLE1BQUU7RUFBRSxDQUFFLENBQ2hELENBQUM7QUFFYixDQUFDO0FBRUQsaUVBQWVDLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJDO0FBQ2E7QUFDVTtBQUNmO0FBQ1I7QUFFMUIsU0FBU08sR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQ0lsQiwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBWSxnQkFDdkJOLDBEQUFBLENBQUNnQiwyREFBYSxxQkFDVmhCLDBEQUFBLENBQUNpQixtREFBTSxNQUFFLENBQ0UsQ0FDZCxDQUFDO0FBRWQ7O0FBRUE7QUFDQTtBQUNBLElBQU1FLElBQUksR0FBR0oscURBQVUsQ0FBQ0ssUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeERGLElBQUksQ0FBQ0csTUFBTSxlQUFDdEIsMERBQUEsQ0FBQ2tCLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJNO0FBQ007QUFDeUM7QUFDbEMsQ0FBQztBQUNGO0FBRXRDLElBQU1XLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7RUFDbkIsb0JBQ0k3QiwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBVSxnQkFDckJOLDBEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFRLGdCQUNuQk4sMERBQUEsMEJBQ0lBLDBEQUFBLFlBQUcsb0JBQXFCLENBQ3hCLENBQUMsZUFDTEEsMERBQUEsWUFBRyxlQUFnQixDQUNsQixDQUFDLGVBQ05BLDBEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFRLEdBQ2xCcUIsZ0RBQWMsQ0FBQ0csR0FBRyxDQUFDLFVBQUNDLFFBQVEsRUFBRUMsS0FBSztJQUFBLG9CQUNoQ2hDLDBEQUFBO01BQUtNLFNBQVMsRUFBQyxRQUFRO01BQUMyQixHQUFHLEVBQUVEO0lBQU0sZ0JBQy9CaEMsMERBQUEsQ0FBQ3VCLHFEQUFJO01BQUNqQixTQUFTLEVBQUMsWUFBWTtNQUFDNEIsRUFBRSxFQUFFO1FBQUVDLFFBQVEsRUFBRSxHQUFHO1FBQUVDLFFBQVEsRUFBRSxHQUFHO1FBQUVDLFNBQVMsRUFBRSxHQUFHO1FBQUVDLFNBQVMsRUFBRSxHQUFHO1FBQUVDLFVBQVUsRUFBRTtNQUFPO0lBQUUsZ0JBQ2xIdkMsMERBQUEsQ0FBQ3lCLHFEQUFTO01BQ05TLEVBQUUsRUFBRTtRQUFFTSxNQUFNLEVBQUUsR0FBRztRQUFFQyxPQUFPLEVBQUUsTUFBTTtRQUFFQyxZQUFZLEVBQUU7TUFBTSxDQUFFO01BQzFEQyxLQUFLLEVBQUVmLDZDQUFLLENBQUM7SUFBQSxDQUNoQixDQUFDLGVBQ0Y1QiwwREFBQSxDQUFDd0IscURBQVcscUJBQ1J4QiwwREFBQSxDQUFDMEIscURBQVU7TUFBQ2tCLFlBQVk7TUFBQ0MsT0FBTyxFQUFDLElBQUk7TUFBQ0MsU0FBUyxFQUFDLEtBQUs7TUFBQ1osRUFBRSxFQUFFO1FBQUVhLEtBQUssRUFBRSxPQUFPO1FBQUVDLFFBQVEsRUFBRSxRQUFRO1FBQUVDLFlBQVksRUFBRSxVQUFVO1FBQUVDLFVBQVUsRUFBRTtNQUFTO0lBQUUsR0FDNUluQixRQUFRLENBQUNvQixNQUNGLENBQUMsZUFDYm5ELDBEQUFBLENBQUMwQixxREFBVTtNQUFDbUIsT0FBTyxFQUFDLE9BQU87TUFBQ0UsS0FBSyxFQUFDLGdCQUFnQjtNQUFDYixFQUFFLEVBQUU7UUFBRWEsS0FBSyxFQUFFO01BQVU7SUFBRSxHQUFDLFNBRWpFLENBQ0gsQ0FDWCxDQUNMLENBQUM7RUFBQSxDQUNULENBQ0EsQ0FDSixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlbEIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0c7QUFDcUI7QUFDVDtBQUNhO0FBQ3lCO0FBQ0Y7QUFDM0M7QUFFL0IsSUFBTTFCLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQVM7RUFDcEIsSUFBTXNELFFBQVEsR0FBR0wsNkRBQVcsQ0FBQyxDQUFDO0VBRTlCLG9CQUNFcEQsMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCTiwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBUSxnQkFDckJOLDBEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFPLGdCQUNwQk4sMERBQUEsQ0FBQ3FELHFEQUFVO0lBQUNLLElBQUksRUFBQyxPQUFPO0lBQUN4QixFQUFFLEVBQUU7TUFBRXlCLGVBQWUsRUFBRSxTQUFTO01BQUVDLFdBQVcsRUFBRSxNQUFNO01BQUVDLFVBQVUsRUFBRSxNQUFNO01BQUUsU0FBUyxFQUFFO1FBQUV0QixVQUFVLEVBQUU7TUFBVTtJQUFFLENBQUU7SUFBQyxjQUFXO0VBQVUsZ0JBQy9KdkMsMERBQUEsQ0FBQ3dELDZFQUFxQjtJQUFDdEIsRUFBRSxFQUFFO01BQUVhLEtBQUssRUFBRTtJQUFVO0VBQUUsQ0FBRSxDQUN4QyxDQUFDLGVBQ2IvQywwREFBQSxDQUFDcUQscURBQVU7SUFBQ0ssSUFBSSxFQUFDLE9BQU87SUFBQ3hCLEVBQUUsRUFBRTtNQUFFeUIsZUFBZSxFQUFFLFNBQVM7TUFBRSxTQUFTLEVBQUU7UUFBRXBCLFVBQVUsRUFBRTtNQUFVO0lBQUUsQ0FBRTtJQUFDLGNBQVc7RUFBTSxnQkFDbEh2QywwREFBQSxDQUFDdUQsOEVBQXNCO0lBQUNyQixFQUFFLEVBQUU7TUFBRWEsS0FBSyxFQUFFO0lBQVU7RUFBRSxDQUFFLENBQ3pDLENBQ1QsQ0FBQyxlQUNOL0MsMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQU8sZ0JBQ3BCTiwwREFBQSxDQUFDc0QscURBQU07SUFDTFQsT0FBTyxFQUFDLE1BQU07SUFDZFgsRUFBRSxFQUFFO01BQ0Y0QixhQUFhLEVBQUUsTUFBTTtNQUNyQmYsS0FBSyxFQUFFLFNBQVM7TUFDaEJnQixVQUFVLEVBQUUsS0FBSztNQUNqQixTQUFTLEVBQUU7UUFDVGhCLEtBQUssRUFBRTtNQUNUO0lBQ0YsQ0FBRTtJQUNGaUIsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNUCxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQUE7RUFBQyxHQUN0QyxhQUVPLENBQUMsZUFDVHpELDBEQUFBLENBQUNzRCxxREFBTTtJQUNMVCxPQUFPLEVBQUMsV0FBVztJQUNuQlgsRUFBRSxFQUFFO01BQ0Y0QixhQUFhLEVBQUUsTUFBTTtNQUNyQmYsS0FBSyxFQUFFLE9BQU87TUFDZFIsVUFBVSxFQUFFLE9BQU87TUFDbkJHLFlBQVksRUFBRSxNQUFNO01BQ3BCcUIsVUFBVSxFQUFFLEtBQUs7TUFDakJILFdBQVcsRUFBRSxNQUFNO01BQ25CQyxVQUFVLEVBQUUsTUFBTTtNQUNsQixTQUFTLEVBQUU7UUFDVHRCLFVBQVUsRUFBRTtNQUNkO0lBQ0YsQ0FBRTtJQUNGeUIsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNUCxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQUE7RUFBQyxHQUNuQyxtQkFFTyxDQUNMLENBQ0YsQ0FBQyxlQUNOekQsMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQVMsZ0JBQ3RCTiwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBYSxnQkFDMUJOLDBEQUFBLENBQUM2QixxREFBUSxNQUFFLENBQ1IsQ0FDRixDQUNGLENBQUM7QUFFVixDQUFDO0FBRUQsaUVBQWUxQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFRztBQUNZO0FBQ2lDO0FBQ0Y7QUFDdkM7QUFFN0IsSUFBTUYsS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUEsRUFBUztFQUNoQixvQkFDSUQsMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQU8sZ0JBQ2xCTiwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBTSxnQkFDakJOLDBEQUFBLENBQUNrRSwyRUFBbUIsTUFBRSxDQUFDLGVBQ3ZCbEUsMERBQUE7SUFBTW9FLEtBQUssRUFBQztFQUFTLEdBQUMsV0FBZSxDQUNwQyxDQUFDLGVBQ05wRSwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBUSxnQkFDbkJOLDBEQUFBLENBQUNrRSwyRUFBbUIsTUFBRSxDQUFDLGVBQ3ZCbEUsMERBQUEsZUFBTSxVQUFjLENBQ25CLENBQUMsZUFDTkEsMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQVEsZ0JBQ25CTiwwREFBQSxDQUFDbUUsMEVBQWtCLE1BQUUsQ0FBQyxlQUN0Qm5FLDBEQUFBLGVBQU0sVUFBYyxDQUNuQixDQUNKLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qm1CO0FBQ0Q7QUFDVjtBQUNtRTtBQUN2QztBQUNNO0FBQ1Y7QUFDWTtBQUM3QjtBQUVuQyxJQUFNUSxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQSxFQUFTO0VBRWhCLElBQU1zRSxVQUFVLEdBQUcsaURBQWlEO0VBQ3BFLElBQU1DLGFBQWEsR0FBRyxtRkFBbUY7RUFFekcsSUFBQUMsU0FBQSxHQUF3Q1osZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWEsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBaERHLFlBQVksR0FBQUYsVUFBQTtJQUFFRyxlQUFlLEdBQUFILFVBQUE7RUFDcEMsSUFBQUksVUFBQSxHQUE0QmpCLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFrQixVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUFqQ0UsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUV4QixJQUFNRyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQXVCQSxDQUFBLEVBQVM7SUFDbENMLGVBQWUsQ0FBQyxDQUFDRCxZQUFZLENBQUM7RUFDbEMsQ0FBQztFQUVELElBQUFPLFVBQUEsR0FBb0N0QixnREFBUSxDQUFDO01BQ3pDdUIsS0FBSyxFQUFFLEVBQUU7TUFDVEMsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxDQUFDO0lBQUFDLFVBQUEsR0FBQVgsY0FBQSxDQUFBUSxVQUFBO0lBSEtJLFVBQVUsR0FBQUQsVUFBQTtJQUFFRSxhQUFhLEdBQUFGLFVBQUE7RUFLaEMsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUN4QixJQUFBQyxTQUFBLEdBQXdCRCxDQUFDLENBQUNFLE1BQU07TUFBeEJDLElBQUksR0FBQUYsU0FBQSxDQUFKRSxJQUFJO01BQUVDLEtBQUssR0FBQUgsU0FBQSxDQUFMRyxLQUFLO0lBQ25CLElBQUlELElBQUksS0FBSyxPQUFPLEVBQUU7TUFDbEJMLGFBQWEsQ0FBQU8sYUFBQSxDQUFBQSxhQUFBLEtBQU1SLFVBQVU7UUFBRUgsS0FBSyxFQUFFVTtNQUFLLEVBQUUsQ0FBQztJQUNsRCxDQUFDLE1BQU0sSUFBSUQsSUFBSSxLQUFLLFVBQVUsRUFBRTtNQUM1QkwsYUFBYSxDQUFBTyxhQUFBLENBQUFBLGFBQUEsS0FBTVIsVUFBVTtRQUFFRixRQUFRLEVBQUVTO01BQUssRUFBRSxDQUFDO0lBQ3JEO0VBQ0osQ0FBQztFQUVELElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJTixDQUFDLEVBQUs7SUFDeEJBLENBQUMsQ0FBQ08sY0FBYyxDQUFDLENBQUM7SUFDbEIsSUFBSUMsV0FBVyxHQUFHLEVBQUU7SUFDcEIsSUFBSUMsUUFBUSxHQUFHLEtBQUs7SUFFcEIsSUFBSSxDQUFDNUIsVUFBVSxDQUFDNkIsSUFBSSxDQUFDYixVQUFVLENBQUNILEtBQUssQ0FBQyxFQUFFO01BQ3BDYyxXQUFXLENBQUNHLElBQUksQ0FBQztRQUFFQyxJQUFJLEVBQUUsT0FBTztRQUFFQyxPQUFPLEVBQUU7TUFBcUMsQ0FBQyxDQUFDO01BQ2xGSixRQUFRLEdBQUcsSUFBSTtJQUNuQjtJQUVBLElBQUksQ0FBQzNCLGFBQWEsQ0FBQzRCLElBQUksQ0FBQ2IsVUFBVSxDQUFDRixRQUFRLENBQUMsRUFBRTtNQUMxQ2EsV0FBVyxDQUFDRyxJQUFJLENBQUM7UUFBRUMsSUFBSSxFQUFFLFVBQVU7UUFBRUMsT0FBTyxFQUFFO01BQTRGLENBQUMsQ0FBQztNQUM1SUosUUFBUSxHQUFHLElBQUk7SUFDbkI7SUFFQSxJQUFJLENBQUNBLFFBQVEsRUFBRTtNQUNYSyxZQUFZLENBQUMsQ0FBQztJQUNsQjtJQUNBdkIsU0FBUyxDQUFDaUIsV0FBVyxDQUFDO0VBQzFCLENBQUM7RUFFRCxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0lBQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ25CLFVBQVUsQ0FBQztFQUMzQixDQUFDO0VBRUQsb0JBQ0kvRiwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBTyxnQkFDbEJOLDJEQUFBLENBQUNzRSxpREFBTSxxQkFDSHRFLDJEQUFBLGdCQUFPLDZCQUErQixDQUNsQyxDQUFDLGVBQ1RBLDJEQUFBO0lBQU1tSCxRQUFRLEVBQUVYO0VBQWEsZ0JBQ3pCeEcsMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQStCLGdCQUMxQ04sMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQVEsZ0JBQ25CTiwyREFBQTtJQUFHb0gsSUFBSSxFQUFDO0VBQUcsZ0JBQ1BwSCwyREFBQTtJQUFLcUgsR0FBRyxFQUFFcEQsMkNBQUlBO0VBQUMsQ0FBRSxDQUNsQixDQUNGLENBQ0osQ0FBQyxlQUNOakUsMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQXFDLGdCQUNoRE4sMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQXVDLGdCQUNsRE4sMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQWtCLGdCQUM3Qk4sMkRBQUEsYUFBSSw2QkFBNEIsQ0FDL0IsQ0FBQyxlQUNOQSwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBb0MsZ0JBQy9DTiwyREFBQSwwQkFDSUEsMkRBQUE7SUFBSU0sU0FBUyxFQUFDO0VBQU0sZ0JBQ2hCTiwyREFBQSxDQUFDc0Qsc0RBQU07SUFDSHBCLEVBQUUsRUFBRTtNQUNBb0YsS0FBSyxFQUFFLE9BQU87TUFDZDlFLE1BQU0sRUFBRSxNQUFNO01BQ2QrRSxNQUFNLEVBQUUsaUJBQWlCO01BQ3pCeEUsS0FBSyxFQUFFLE9BQU87TUFDZEwsWUFBWSxFQUFFLE1BQU07TUFDcEJpQixlQUFlLEVBQUUsYUFBYTtNQUM5QkcsYUFBYSxFQUFFLE1BQU07TUFDckIsU0FBUyxFQUFFO1FBQ1BILGVBQWUsRUFBRSxhQUFhO1FBQzlCNEQsTUFBTSxFQUFFO01BQ1o7SUFDSjtFQUFFLEdBRW9CLHNCQUVsQixDQUNSLENBQUMsZUFDTHZILDJEQUFBO0lBQUlNLFNBQVMsRUFBQztFQUFNLGdCQUNoQk4sMkRBQUEsQ0FBQ3NELHNEQUFNO0lBQ0hwQixFQUFFLEVBQUU7TUFDQW9GLEtBQUssRUFBRSxPQUFPO01BQ2Q5RSxNQUFNLEVBQUUsTUFBTTtNQUNkK0UsTUFBTSxFQUFFLGlCQUFpQjtNQUN6QnhFLEtBQUssRUFBRSxPQUFPO01BQ2RMLFlBQVksRUFBRSxNQUFNO01BQ3BCaUIsZUFBZSxFQUFFLGFBQWE7TUFDOUJHLGFBQWEsRUFBRSxNQUFNO01BQ3JCLFNBQVMsRUFBRTtRQUNQSCxlQUFlLEVBQUUsYUFBYTtRQUM5QjRELE1BQU0sRUFBRTtNQUNaO0lBQ0o7RUFBRSxHQUNMLHdCQUVPLENBQ1IsQ0FBQyxlQUNMdkgsMkRBQUE7SUFBSU0sU0FBUyxFQUFDO0VBQU0sZ0JBQ2hCTiwyREFBQSxDQUFDc0Qsc0RBQU07SUFDSHBCLEVBQUUsRUFBRTtNQUNBb0YsS0FBSyxFQUFFLE9BQU87TUFDZDlFLE1BQU0sRUFBRSxNQUFNO01BQ2QrRSxNQUFNLEVBQUUsaUJBQWlCO01BQ3pCeEUsS0FBSyxFQUFFLE9BQU87TUFDZEwsWUFBWSxFQUFFLE1BQU07TUFDcEJpQixlQUFlLEVBQUUsYUFBYTtNQUM5QkcsYUFBYSxFQUFFLE1BQU07TUFDckIsU0FBUyxFQUFFO1FBQ1BILGVBQWUsRUFBRSxhQUFhO1FBQzlCNEQsTUFBTSxFQUFFO01BQ1o7SUFDSjtFQUFFLEdBQ0wscUJBRU8sQ0FDUixDQUNKLENBQ0gsQ0FBQyxlQUNOdkgsMkRBQUEsQ0FBQ3VFLHNEQUFPO0lBQUNyQyxFQUFFLEVBQUU7TUFBRXNGLFdBQVcsRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUFDLGVBQ3hDeEgsMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQTZCLGdCQUN4Q04sMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQWlCLGdCQUM1Qk4sMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQVksZ0JBQ3ZCTiwyREFBQTtJQUFHTSxTQUFTLEVBQUM7RUFBWSxHQUFDLDJDQUF5QyxDQUFDLGVBQ3BFTiwyREFBQSxDQUFDd0Usc0RBQVM7SUFDTmlELEVBQUUsRUFBQyxPQUFPO0lBQ1ZwQixJQUFJLEVBQUMsT0FBTztJQUNaUyxJQUFJLEVBQUMsTUFBTTtJQUNYUixLQUFLLEVBQUVQLFVBQVUsQ0FBQ0gsS0FBTTtJQUN4QjhCLFFBQVEsRUFBRXpCLFlBQWE7SUFDdkIwQixXQUFXLEVBQUMsMkNBQXdDO0lBQ3BEOUUsT0FBTyxFQUFDLFVBQVU7SUFDbEIrRSxVQUFVLEVBQUU7TUFDUkMsS0FBSyxFQUFFO1FBQUU5RSxLQUFLLEVBQUU7TUFBUSxDQUFDO01BQ3pCK0UsT0FBTyxFQUFFO1FBQ0xDLGNBQWMsRUFBRXZDLE1BQU0sQ0FBQ3dDLElBQUksQ0FBQyxVQUFBQyxLQUFLO1VBQUEsT0FBSUEsS0FBSyxDQUFDbkIsSUFBSSxLQUFLLE9BQU87UUFBQSxFQUFDLEdBQUcsY0FBYyxHQUFHO01BQ3BGO0lBQ0osQ0FBRTtJQUNGb0IsZUFBZSxFQUFFO01BQ2JMLEtBQUssRUFBRTtRQUFFOUUsS0FBSyxFQUFFO01BQU87SUFDM0IsQ0FBRTtJQUNGYixFQUFFLEVBQUU7TUFDQW9GLEtBQUssRUFBRSxPQUFPO01BQ2QsMEJBQTBCLEVBQUU7UUFDeEIsWUFBWSxFQUFFO1VBQ1ZFLFdBQVcsRUFBRWhDLE1BQU0sQ0FBQ3dDLElBQUksQ0FBQyxVQUFBQyxLQUFLO1lBQUEsT0FBSUEsS0FBSyxDQUFDbkIsSUFBSSxLQUFLLE9BQU87VUFBQSxFQUFDLEdBQUcsS0FBSyxHQUFHO1FBQ3hFLENBQUM7UUFDRCxrQkFBa0IsRUFBRTtVQUNoQlUsV0FBVyxFQUFFaEMsTUFBTSxDQUFDd0MsSUFBSSxDQUFDLFVBQUFDLEtBQUs7WUFBQSxPQUFJQSxLQUFLLENBQUNuQixJQUFJLEtBQUssT0FBTztVQUFBLEVBQUMsR0FBRyxLQUFLLEdBQUcsT0FBTztVQUMzRVMsTUFBTSxFQUFFL0IsTUFBTSxDQUFDd0MsSUFBSSxDQUFDLFVBQUFDLEtBQUs7WUFBQSxPQUFJQSxLQUFLLENBQUNuQixJQUFJLEtBQUssT0FBTztVQUFBLEVBQUMsR0FBRyxlQUFlLEdBQUc7UUFDN0UsQ0FBQztRQUNELHdCQUF3QixFQUFFO1VBQ3RCVSxXQUFXLEVBQUVoQyxNQUFNLENBQUN3QyxJQUFJLENBQUMsVUFBQUMsS0FBSztZQUFBLE9BQUlBLEtBQUssQ0FBQ25CLElBQUksS0FBSyxPQUFPO1VBQUEsRUFBQyxHQUFHLEtBQUssR0FBRztRQUN4RTtNQUNKLENBQUM7TUFDRHFCLEtBQUssRUFBRTtRQUNIcEYsS0FBSyxFQUFFO01BQ1gsQ0FBQztNQUNELG9DQUFvQyxFQUFFO1FBQ2xDQSxLQUFLLEVBQUU7TUFDWDtJQUNKO0VBQUUsQ0FDTCxDQUFDLEVBQ0F5QyxNQUFNLENBQUM0QyxNQUFNLEdBQUcsQ0FBQyxJQUFJNUMsTUFBTSxDQUFDNkMsSUFBSSxDQUFDLFVBQUFKLEtBQUs7SUFBQSxPQUFJQSxLQUFLLENBQUNuQixJQUFJLEtBQUssT0FBTztFQUFBLEVBQUMsaUJBQy9EOUcsMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQWdDLGdCQUMzQ04sMkRBQUEsQ0FBQzhFLHlFQUFnQjtJQUFDK0MsS0FBSyxFQUFFO01BQUVTLFFBQVEsRUFBRSxNQUFNO01BQUUxRSxXQUFXLEVBQUU7SUFBTTtFQUFFLENBQUUsQ0FBQyxFQUNwRTRCLE1BQU0sQ0FBQzZDLElBQUksQ0FBQyxVQUFBSixLQUFLO0lBQUEsT0FBSUEsS0FBSyxDQUFDbkIsSUFBSSxLQUFLLE9BQU87RUFBQSxFQUFDLENBQUNDLE9BQzdDLENBRVIsQ0FDSixDQUFDLGVBQ04vRywyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBb0IsZ0JBQy9CTiwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBZSxnQkFDMUJOLDJEQUFBO0lBQUdNLFNBQVMsRUFBQztFQUFZLEdBQUMsZUFBYSxDQUFDLGVBQ3hDTiwyREFBQSxDQUFDd0Usc0RBQVM7SUFDTmlELEVBQUUsRUFBQyxVQUFVO0lBQ2JwQixJQUFJLEVBQUMsVUFBVTtJQUNmc0IsV0FBVyxFQUFDLGVBQVk7SUFDeEI5RSxPQUFPLEVBQUMsVUFBVTtJQUNsQnlELEtBQUssRUFBRVAsVUFBVSxDQUFDRixRQUFTO0lBQzNCNkIsUUFBUSxFQUFFekIsWUFBYTtJQUN2QmEsSUFBSSxFQUFFMUIsWUFBWSxHQUFHLE1BQU0sR0FBRyxVQUFXO0lBQ3pDd0MsVUFBVSxFQUFFO01BQ1JDLEtBQUssRUFBRTtRQUFFOUUsS0FBSyxFQUFFO01BQVEsQ0FBQztNQUN6QndGLFlBQVksZUFDUnZJLDJEQUFBLENBQUMwRSxzREFBYztRQUFDOEQsUUFBUSxFQUFDO01BQUssZ0JBQzFCeEksMkRBQUEsQ0FBQ3FELHNEQUFVO1FBQ1AsY0FBVyw0QkFBNEI7UUFDdkNXLE9BQU8sRUFBRTBCLHVCQUF3QjtRQUNqQ21DLEtBQUssRUFBRTtVQUFFOUUsS0FBSyxFQUFFO1FBQVE7TUFBRSxHQUV6QnFDLFlBQVksZ0JBQUdwRiwyREFBQSxDQUFDNEUsMEVBQWEsTUFBRSxDQUFDLGdCQUFHNUUsMkRBQUEsQ0FBQzJFLHVFQUFVLE1BQUUsQ0FDekMsQ0FDQSxDQUNuQjtNQUNEbUQsT0FBTyxFQUFFO1FBQ0xDLGNBQWMsRUFBRXZDLE1BQU0sQ0FBQ3dDLElBQUksQ0FBQyxVQUFBQyxLQUFLO1VBQUEsT0FBSUEsS0FBSyxDQUFDbkIsSUFBSSxLQUFLLFVBQVU7UUFBQSxFQUFDLEdBQUcsY0FBYyxHQUFHO01BQ3ZGO0lBQ0osQ0FBRTtJQUNGb0IsZUFBZSxFQUFFO01BQ2JMLEtBQUssRUFBRTtRQUFFOUUsS0FBSyxFQUFFO01BQU87SUFDM0IsQ0FBRTtJQUNGYixFQUFFLEVBQUU7TUFDQW9GLEtBQUssRUFBRSxPQUFPO01BQ2QsMEJBQTBCLEVBQUU7UUFDeEIsWUFBWSxFQUFFO1VBQ1ZFLFdBQVcsRUFBRWhDLE1BQU0sQ0FBQ3dDLElBQUksQ0FBQyxVQUFBQyxLQUFLO1lBQUEsT0FBSUEsS0FBSyxDQUFDbkIsSUFBSSxLQUFLLFVBQVU7VUFBQSxFQUFDLEdBQUcsS0FBSyxHQUFHO1FBQzNFLENBQUM7UUFDRCxrQkFBa0IsRUFBRTtVQUNoQlUsV0FBVyxFQUFFaEMsTUFBTSxDQUFDd0MsSUFBSSxDQUFDLFVBQUFDLEtBQUs7WUFBQSxPQUFJQSxLQUFLLENBQUNuQixJQUFJLEtBQUssVUFBVTtVQUFBLEVBQUMsR0FBRyxLQUFLLEdBQUcsT0FBTztVQUM5RVMsTUFBTSxFQUFFL0IsTUFBTSxDQUFDd0MsSUFBSSxDQUFDLFVBQUFDLEtBQUs7WUFBQSxPQUFJQSxLQUFLLENBQUNuQixJQUFJLEtBQUssVUFBVTtVQUFBLEVBQUMsR0FBRyxlQUFlLEdBQUc7UUFDaEYsQ0FBQztRQUNELHdCQUF3QixFQUFFO1VBQ3RCVSxXQUFXLEVBQUVoQyxNQUFNLENBQUN3QyxJQUFJLENBQUMsVUFBQUMsS0FBSztZQUFBLE9BQUlBLEtBQUssQ0FBQ25CLElBQUksS0FBSyxVQUFVO1VBQUEsRUFBQyxHQUFHLEtBQUssR0FBRztRQUMzRTtNQUNKLENBQUM7TUFDRHFCLEtBQUssRUFBRTtRQUNIcEYsS0FBSyxFQUFFO01BQ1gsQ0FBQztNQUNELG9DQUFvQyxFQUFFO1FBQ2xDQSxLQUFLLEVBQUU7TUFDWDtJQUNKO0VBQUUsQ0FDTCxDQUFDLEVBQ0F5QyxNQUFNLENBQUM0QyxNQUFNLEdBQUcsQ0FBQyxJQUFJNUMsTUFBTSxDQUFDNkMsSUFBSSxDQUFDLFVBQUFKLEtBQUs7SUFBQSxPQUFJQSxLQUFLLENBQUNuQixJQUFJLEtBQUssVUFBVTtFQUFBLEVBQUMsaUJBQ2xFOUcsMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQWtELGdCQUM3RE4sMkRBQUEsQ0FBQzhFLHlFQUFnQjtJQUFDK0MsS0FBSyxFQUFFO01BQUVTLFFBQVEsRUFBRSxNQUFNO01BQUUxRSxXQUFXLEVBQUU7SUFBTTtFQUFFLENBQUUsQ0FBQyxFQUNwRTRCLE1BQU0sQ0FBQzZDLElBQUksQ0FBQyxVQUFBSixLQUFLO0lBQUEsT0FBSUEsS0FBSyxDQUFDbkIsSUFBSSxLQUFLLFVBQVU7RUFBQSxFQUFDLENBQUNDLE9BQ2hELENBRVIsQ0FDSixDQUNKLENBQUMsZUFDTi9HLDJEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFxQixnQkFFaENOLDJEQUFBLENBQUN5RSxzREFBTTtJQUNIZ0UsY0FBYztJQUNkdkcsRUFBRSxFQUFFO01BQ0EscUNBQXFDLEVBQUU7UUFDbkNhLEtBQUssRUFBRSxPQUFPO1FBQ2QsU0FBUyxFQUFFO1VBQ1BZLGVBQWUsRUFBRTtRQUNyQjtNQUNKLENBQUM7TUFDRCx3REFBd0QsRUFBRTtRQUN0REEsZUFBZSxFQUFFO01BQ3JCO0lBQ0o7RUFBRSxDQUNMLENBQUMsZUFDRjNELDJEQUFBO0lBQUdNLFNBQVMsRUFBQztFQUE4QixHQUFDLGVBQWEsQ0FDeEQsQ0FBQyxlQUNOTiwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBMEIsZ0JBQ3JDTiwyREFBQSxDQUFDc0Qsc0RBQU07SUFBQ3dELElBQUksRUFBQyxRQUFRO0lBQ2pCNUUsRUFBRSxFQUFFO01BQ0FvRixLQUFLLEVBQUUsT0FBTztNQUNkOUUsTUFBTSxFQUFFLE1BQU07TUFDZE8sS0FBSyxFQUFFLE9BQU87TUFDZEwsWUFBWSxFQUFFLE1BQU07TUFDcEJpQixlQUFlLEVBQUUsU0FBUztNQUMxQkcsYUFBYSxFQUFFLE1BQU07TUFDckJDLFVBQVUsRUFBRSxNQUFNO01BQ2xCLFNBQVMsRUFBRTtRQUNQSixlQUFlLEVBQUUsU0FBUztRQUMxQitFLFNBQVMsRUFBRSxhQUFhLENBQUU7TUFDOUI7SUFDSjtFQUFFLEdBQ0wsbUJBRU8sQ0FDUCxDQUFDLGVBQ04xSSwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBYSxnQkFDeEJOLDJEQUFBO0lBQUdvSCxJQUFJLEVBQUMsR0FBRztJQUFDOUcsU0FBUyxFQUFDO0VBQWMsZ0JBQ2hDTiwyREFBQTtJQUFHTSxTQUFTLEVBQUM7RUFBdUQsR0FBQyx5Q0FFbEUsQ0FDSixDQUNGLENBQUMsZUFDTk4sMkRBQUEsQ0FBQ3VFLHNEQUFPO0lBQUNyQyxFQUFFLEVBQUU7TUFBRXNGLFdBQVcsRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUFDLGVBQ3hDeEgsMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQXFDLGdCQUNoRE4sMkRBQUE7SUFBR00sU0FBUyxFQUFDO0VBQWlCLEdBQUMsdUJBQXFCLENBQUMsZUFDckROLDJEQUFBO0lBQUdvSCxJQUFJLEVBQUM7RUFBVyxnQkFDZnBILDJEQUFBO0lBQUdNLFNBQVMsRUFBQztFQUE2QyxHQUFDLDBCQUF3QixDQUNwRixDQUNGLENBQ0osQ0FDSixDQUFDLGVBQ05OLDJEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUE4QyxnQkFDekROLDJEQUFBLFlBQUcsNkRBQXdELGVBQUFBLDJEQUFBO0lBQUdNLFNBQVMsRUFBQywwQkFBMEI7SUFBQzhGLE1BQU0sRUFBQyxRQUFRO0lBQUNnQixJQUFJLEVBQUM7RUFBcUMsR0FBQywwQkFBd0IsQ0FBQyxVQUFNLGVBQUFwSCwyREFBQTtJQUFHTSxTQUFTLEVBQUMsMEJBQTBCO0lBQUM4RixNQUFNLEVBQUMsUUFBUTtJQUFDZ0IsSUFBSSxFQUFDO0VBQW1DLEdBQUMsMkJBQXlCLENBQUMsZUFBYyxDQUNyVSxDQUNILENBQ0osQ0FBQztBQUVmLENBQUM7QUFFRCxpRUFBZTNHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVRtQjtBQUNEO0FBQ1Y7QUFDbUU7QUFDL0I7QUFDN0I7QUFFbkMsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUEsRUFBUztFQUVoQixJQUFNc0UsVUFBVSxHQUFHLGlEQUFpRDtFQUNwRSxJQUFNQyxhQUFhLEdBQUcsbUZBQW1GO0VBRXpHLElBQUFDLFNBQUEsR0FBd0NaLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFhLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQWhERyxZQUFZLEdBQUFGLFVBQUE7SUFBRUcsZUFBZSxHQUFBSCxVQUFBO0VBQ3BDLElBQUFJLFVBQUEsR0FBNEJqQixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBa0IsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBakNFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFFeEIsSUFBTUcsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUF1QkEsQ0FBQSxFQUFTO0lBQ2xDTCxlQUFlLENBQUMsQ0FBQ0QsWUFBWSxDQUFDO0VBQ2xDLENBQUM7RUFFRCxJQUFBTyxVQUFBLEdBQW9DdEIsZ0RBQVEsQ0FBQztNQUN6Q3VCLEtBQUssRUFBRSxFQUFFO01BQ1RDLFFBQVEsRUFBRTtJQUNkLENBQUMsQ0FBQztJQUFBQyxVQUFBLEdBQUFYLGNBQUEsQ0FBQVEsVUFBQTtJQUhLSSxVQUFVLEdBQUFELFVBQUE7SUFBRUUsYUFBYSxHQUFBRixVQUFBO0VBS2hDLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxDQUFDLEVBQUs7SUFDeEIsSUFBQUMsU0FBQSxHQUF3QkQsQ0FBQyxDQUFDRSxNQUFNO01BQXhCQyxJQUFJLEdBQUFGLFNBQUEsQ0FBSkUsSUFBSTtNQUFFQyxLQUFLLEdBQUFILFNBQUEsQ0FBTEcsS0FBSztJQUNuQixJQUFJRCxJQUFJLEtBQUssT0FBTyxFQUFFO01BQ2xCTCxhQUFhLENBQUFPLGFBQUEsQ0FBQUEsYUFBQSxLQUFNUixVQUFVO1FBQUVILEtBQUssRUFBRVU7TUFBSyxFQUFFLENBQUM7SUFDbEQsQ0FBQyxNQUFNLElBQUlELElBQUksS0FBSyxVQUFVLEVBQUU7TUFDNUJMLGFBQWEsQ0FBQU8sYUFBQSxDQUFBQSxhQUFBLEtBQU1SLFVBQVU7UUFBRUYsUUFBUSxFQUFFUztNQUFLLEVBQUUsQ0FBQztJQUNyRDtFQUNKLENBQUM7RUFFRCxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSU4sQ0FBQyxFQUFLO0lBQ3hCQSxDQUFDLENBQUNPLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCLElBQUlDLFdBQVcsR0FBRyxFQUFFO0lBQ3BCLElBQUlDLFFBQVEsR0FBRyxLQUFLO0lBRXBCLElBQUksQ0FBQzVCLFVBQVUsQ0FBQzZCLElBQUksQ0FBQ2IsVUFBVSxDQUFDSCxLQUFLLENBQUMsRUFBRTtNQUNwQ2MsV0FBVyxDQUFDRyxJQUFJLENBQUM7UUFBRUMsSUFBSSxFQUFFLE9BQU87UUFBRUMsT0FBTyxFQUFFO01BQXVHLENBQUMsQ0FBQztNQUNwSkosUUFBUSxHQUFHLElBQUk7SUFDbkI7SUFFQSxJQUFJLENBQUNBLFFBQVEsRUFBRTtNQUNYSyxZQUFZLENBQUMsQ0FBQztJQUNsQjtJQUNBdkIsU0FBUyxDQUFDaUIsV0FBVyxDQUFDO0VBQzFCLENBQUM7RUFFRCxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0lBQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ25CLFVBQVUsQ0FBQztFQUMzQixDQUFDO0VBRUQsb0JBQ0kvRiwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBTyxnQkFDbEJOLDJEQUFBLENBQUNzRSxpREFBTSxxQkFDSHRFLDJEQUFBLGdCQUFPLHlCQUEyQixDQUM5QixDQUFDLGVBQ1RBLDJEQUFBO0lBQU1tSCxRQUFRLEVBQUVYO0VBQWEsZ0JBQ3pCeEcsMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQStCLGdCQUMxQ04sMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQVEsZ0JBQ25CTiwyREFBQTtJQUFHb0gsSUFBSSxFQUFDO0VBQUcsZ0JBQ1BwSCwyREFBQTtJQUFLcUgsR0FBRyxFQUFFcEQsMkNBQUlBO0VBQUMsQ0FBRSxDQUNsQixDQUNGLENBQ0osQ0FBQyxlQUNOakUsMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQXFDLGdCQUNoRE4sMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQXVDLGdCQUNsRE4sMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQWtCLGdCQUM3Qk4sMkRBQUEsYUFBSSxpREFBZ0QsQ0FDbkQsQ0FBQyxlQUNOQSwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBNkIsZ0JBQ3hDTiwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBaUIsZ0JBQzVCTiwyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBWSxnQkFDdkJOLDJEQUFBO0lBQUdNLFNBQVMsRUFBQztFQUFZLEdBQUMsdUNBQWtDLENBQUMsZUFDN0ROLDJEQUFBLENBQUN3RSxzREFBUztJQUNOaUQsRUFBRSxFQUFDLE9BQU87SUFDVnBCLElBQUksRUFBQyxPQUFPO0lBQ1pTLElBQUksRUFBQyxNQUFNO0lBQ1hSLEtBQUssRUFBRVAsVUFBVSxDQUFDSCxLQUFNO0lBQ3hCOEIsUUFBUSxFQUFFekIsWUFBYTtJQUN2QjBCLFdBQVcsRUFBQyxvQkFBb0I7SUFDaEM5RSxPQUFPLEVBQUMsVUFBVTtJQUNsQitFLFVBQVUsRUFBRTtNQUNSQyxLQUFLLEVBQUU7UUFBRTlFLEtBQUssRUFBRTtNQUFRLENBQUM7TUFDekIrRSxPQUFPLEVBQUU7UUFDTEMsY0FBYyxFQUFFdkMsTUFBTSxDQUFDd0MsSUFBSSxDQUFDLFVBQUFDLEtBQUs7VUFBQSxPQUFJQSxLQUFLLENBQUNuQixJQUFJLEtBQUssT0FBTztRQUFBLEVBQUMsR0FBRyxjQUFjLEdBQUc7TUFDcEY7SUFDSixDQUFFO0lBQ0ZvQixlQUFlLEVBQUU7TUFDYkwsS0FBSyxFQUFFO1FBQUU5RSxLQUFLLEVBQUU7TUFBTztJQUMzQixDQUFFO0lBQ0ZiLEVBQUUsRUFBRTtNQUNBb0YsS0FBSyxFQUFFLE9BQU87TUFDZCwwQkFBMEIsRUFBRTtRQUN4QixZQUFZLEVBQUU7VUFDVkUsV0FBVyxFQUFFaEMsTUFBTSxDQUFDd0MsSUFBSSxDQUFDLFVBQUFDLEtBQUs7WUFBQSxPQUFJQSxLQUFLLENBQUNuQixJQUFJLEtBQUssT0FBTztVQUFBLEVBQUMsR0FBRyxLQUFLLEdBQUc7UUFDeEUsQ0FBQztRQUNELGtCQUFrQixFQUFFO1VBQ2hCVSxXQUFXLEVBQUVoQyxNQUFNLENBQUN3QyxJQUFJLENBQUMsVUFBQUMsS0FBSztZQUFBLE9BQUlBLEtBQUssQ0FBQ25CLElBQUksS0FBSyxPQUFPO1VBQUEsRUFBQyxHQUFHLEtBQUssR0FBRyxPQUFPO1VBQzNFUyxNQUFNLEVBQUUvQixNQUFNLENBQUN3QyxJQUFJLENBQUMsVUFBQUMsS0FBSztZQUFBLE9BQUlBLEtBQUssQ0FBQ25CLElBQUksS0FBSyxPQUFPO1VBQUEsRUFBQyxHQUFHLGVBQWUsR0FBRztRQUM3RSxDQUFDO1FBQ0Qsd0JBQXdCLEVBQUU7VUFDdEJVLFdBQVcsRUFBRWhDLE1BQU0sQ0FBQ3dDLElBQUksQ0FBQyxVQUFBQyxLQUFLO1lBQUEsT0FBSUEsS0FBSyxDQUFDbkIsSUFBSSxLQUFLLE9BQU87VUFBQSxFQUFDLEdBQUcsS0FBSyxHQUFHO1FBQ3hFO01BQ0osQ0FBQztNQUNEcUIsS0FBSyxFQUFFO1FBQ0hwRixLQUFLLEVBQUU7TUFDWCxDQUFDO01BQ0Qsb0NBQW9DLEVBQUU7UUFDbENBLEtBQUssRUFBRTtNQUNYO0lBQ0o7RUFBRSxDQUNMLENBQUMsRUFDQXlDLE1BQU0sQ0FBQzRDLE1BQU0sR0FBRyxDQUFDLElBQUk1QyxNQUFNLENBQUM2QyxJQUFJLENBQUMsVUFBQUosS0FBSztJQUFBLE9BQUlBLEtBQUssQ0FBQ25CLElBQUksS0FBSyxPQUFPO0VBQUEsRUFBQyxpQkFDL0Q5RywyREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBZ0MsZ0JBQzNDTiwyREFBQSxDQUFDOEUseUVBQWdCO0lBQUMrQyxLQUFLLEVBQUU7TUFBRVMsUUFBUSxFQUFFLE1BQU07TUFBRTFFLFdBQVcsRUFBRTtJQUFNO0VBQUUsQ0FBRSxDQUFDLEVBQ3BFNEIsTUFBTSxDQUFDNkMsSUFBSSxDQUFDLFVBQUFKLEtBQUs7SUFBQSxPQUFJQSxLQUFLLENBQUNuQixJQUFJLEtBQUssT0FBTztFQUFBLEVBQUMsQ0FBQ0MsT0FDN0MsQ0FFUixDQUNKLENBQ0osQ0FBQyxlQUNOL0csMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQStCLGdCQUMxQ04sMkRBQUEsQ0FBQ3NELHNEQUFNO0lBQUN3RCxJQUFJLEVBQUMsUUFBUTtJQUNqQjVFLEVBQUUsRUFBRTtNQUNBb0YsS0FBSyxFQUFFLE9BQU87TUFDZDlFLE1BQU0sRUFBRSxNQUFNO01BQ2RPLEtBQUssRUFBRSxPQUFPO01BQ2RMLFlBQVksRUFBRSxNQUFNO01BQ3BCaUIsZUFBZSxFQUFFLFNBQVM7TUFDMUJHLGFBQWEsRUFBRSxNQUFNO01BQ3JCQyxVQUFVLEVBQUUsTUFBTTtNQUNsQixTQUFTLEVBQUU7UUFDUEosZUFBZSxFQUFFLFNBQVM7UUFDMUIrRSxTQUFTLEVBQUUsYUFBYSxDQUFFO01BQzlCO0lBQ0o7RUFBRSxHQUNMLFdBRU8sQ0FDUCxDQUFDLGVBRU4xSSwyREFBQSxDQUFDdUUsc0RBQU87SUFBQ3JDLEVBQUUsRUFBRTtNQUFFLHFCQUFxQixFQUFFO1FBQUVzRixXQUFXLEVBQUU7TUFBTztJQUFFO0VBQUUsZ0JBQzVEeEgsMkRBQUE7SUFBRzZILEtBQUssRUFBRTtNQUFDOUUsS0FBSyxFQUFFO0lBQVM7RUFBRSxHQUFDLEtBQU0sQ0FDL0IsQ0FBQyxlQUVWL0MsMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQW9DLGdCQUMvQ04sMkRBQUEsMEJBQ0lBLDJEQUFBO0lBQUlNLFNBQVMsRUFBQztFQUFXLGdCQUNyQk4sMkRBQUEsQ0FBQ3NELHNEQUFNO0lBQ0hwQixFQUFFLEVBQUU7TUFDQW9GLEtBQUssRUFBRSxPQUFPO01BQ2Q5RSxNQUFNLEVBQUUsTUFBTTtNQUNkK0UsTUFBTSxFQUFFLGlCQUFpQjtNQUN6QnhFLEtBQUssRUFBRSxPQUFPO01BQ2RMLFlBQVksRUFBRSxNQUFNO01BQ3BCaUIsZUFBZSxFQUFFLGFBQWE7TUFDOUJHLGFBQWEsRUFBRSxNQUFNO01BQ3JCLFNBQVMsRUFBRTtRQUNQSCxlQUFlLEVBQUUsYUFBYTtRQUM5QjRELE1BQU0sRUFBRTtNQUNaO0lBQ0o7RUFBRSxHQUVvQixzQkFFbEIsQ0FDUixDQUFDLGVBQ0x2SCwyREFBQTtJQUFJTSxTQUFTLEVBQUM7RUFBTSxnQkFDaEJOLDJEQUFBLENBQUNzRCxzREFBTTtJQUNIcEIsRUFBRSxFQUFFO01BQ0FvRixLQUFLLEVBQUUsT0FBTztNQUNkOUUsTUFBTSxFQUFFLE1BQU07TUFDZCtFLE1BQU0sRUFBRSxpQkFBaUI7TUFDekJ4RSxLQUFLLEVBQUUsT0FBTztNQUNkTCxZQUFZLEVBQUUsTUFBTTtNQUNwQmlCLGVBQWUsRUFBRSxhQUFhO01BQzlCRyxhQUFhLEVBQUUsTUFBTTtNQUNyQixTQUFTLEVBQUU7UUFDUEgsZUFBZSxFQUFFLGFBQWE7UUFDOUI0RCxNQUFNLEVBQUU7TUFDWjtJQUNKO0VBQUUsR0FDTCx3QkFFTyxDQUNSLENBQUMsZUFDTHZILDJEQUFBLDBCQUNJQSwyREFBQSxDQUFDc0Qsc0RBQU07SUFDSHBCLEVBQUUsRUFBRTtNQUNBb0YsS0FBSyxFQUFFLE9BQU87TUFDZDlFLE1BQU0sRUFBRSxNQUFNO01BQ2QrRSxNQUFNLEVBQUUsaUJBQWlCO01BQ3pCeEUsS0FBSyxFQUFFLE9BQU87TUFDZEwsWUFBWSxFQUFFLE1BQU07TUFDcEJpQixlQUFlLEVBQUUsYUFBYTtNQUM5QkcsYUFBYSxFQUFFLE1BQU07TUFDckIsU0FBUyxFQUFFO1FBQ1BILGVBQWUsRUFBRSxhQUFhO1FBQzlCNEQsTUFBTSxFQUFFO01BQ1o7SUFDSjtFQUFFLEdBQ0wscUJBRU8sQ0FDUixDQUNKLENBQ0gsQ0FBQyxlQUNOdkgsMkRBQUE7SUFBS00sU0FBUyxFQUFDO0VBQXFDLGdCQUNoRE4sMkRBQUE7SUFBR00sU0FBUyxFQUFDO0VBQWlCLEdBQUMsdUJBQXFCLENBQUMsZUFDckROLDJEQUFBO0lBQUdvSCxJQUFJLEVBQUM7RUFBUSxnQkFDWnBILDJEQUFBO0lBQUdNLFNBQVMsRUFBQztFQUE2QyxHQUFDLDJCQUFzQixDQUNsRixDQUNGLENBQ0osQ0FDSixDQUFDLGVBQ05OLDJEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUE4QyxnQkFDekROLDJEQUFBLFlBQUcsNkRBQXdELGVBQUFBLDJEQUFBO0lBQUdNLFNBQVMsRUFBQywwQkFBMEI7SUFBQzhGLE1BQU0sRUFBQyxRQUFRO0lBQUNnQixJQUFJLEVBQUM7RUFBcUMsR0FBQywwQkFBd0IsQ0FBQyxVQUFNLGVBQUFwSCwyREFBQTtJQUFHTSxTQUFTLEVBQUMsMEJBQTBCO0lBQUM4RixNQUFNLEVBQUMsUUFBUTtJQUFDZ0IsSUFBSSxFQUFDO0VBQW1DLEdBQUMsMkJBQXlCLENBQUMsZUFBYyxDQUNyVSxDQUNILENBQ0osQ0FBQztBQUVmLENBQUM7QUFFRCxpRUFBZTNHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pPSztBQUNtQztBQUNKO0FBQ1Y7QUFDVTtBQUNQO0FBRXBCO0FBRTdCLElBQU1QLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFBLEVBQVM7RUFFakIsb0JBQ0lGLDBEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFRLGdCQUNuQk4sMERBQUEsQ0FBQ2dKLG9EQUFPLE1BQUUsQ0FBQyxlQUNYaEosMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQVksZ0JBQ3ZCTiwwREFBQSxDQUFDMkkscURBQU87SUFBQ3ZFLEtBQUssRUFBQyx3QkFBd0I7SUFBQzZFLFNBQVMsRUFBQztFQUFLLGdCQUNuRGpKLDBEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFRLGdCQUNuQk4sMERBQUEsQ0FBQzRJLG9FQUFZLE1BQUUsQ0FBQyxlQUNoQjVJLDBEQUFBLGVBQU0sZUFBbUIsQ0FDeEIsQ0FDQSxDQUFDLGVBQ1ZBLDBEQUFBLENBQUMySSxxREFBTztJQUFDdkUsS0FBSyxFQUFDLDJCQUEyQjtJQUFDNkUsU0FBUyxFQUFDO0VBQUssZ0JBRXREakosMERBQUEsQ0FBQ3FELHFEQUFVO0lBQUNOLEtBQUssRUFBQyxTQUFTO0lBQUN6QyxTQUFTLEVBQUMsU0FBUztJQUFDLGNBQVc7RUFBUSxnQkFDL0ROLDBEQUFBLENBQUM2SSwrREFBTztJQUFDdkksU0FBUyxFQUFDO0VBQVksQ0FBRSxDQUN6QixDQUNQLENBQ1IsQ0FBQyxlQUNOTiwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBcUIsZ0JBQ2hDTiwwREFBQSxDQUFDc0QscURBQU07SUFBQ1QsT0FBTyxFQUFDLFdBQVc7SUFBQ2EsSUFBSSxFQUFDLE9BQU87SUFBQ3BELFNBQVMsRUFBQyxjQUFjO0lBQUN1SCxLQUFLLEVBQUU7TUFBRWxFLGVBQWUsRUFBRSxhQUFhO01BQUVqQixZQUFZLEVBQUUsTUFBTTtNQUFFNkUsTUFBTSxFQUFFO0lBQXNCO0VBQUUsZ0JBQzdKdkgsMERBQUE7SUFBTU0sU0FBUyxFQUFDO0VBQWEsZ0JBQUNOLDBEQUFBLENBQUM4SSxvRUFBWTtJQUFDUixRQUFRLEVBQUM7RUFBTyxDQUFFLENBQUMsS0FBTyxDQUFDLGVBQUF0SSwwREFBQSxZQUFHLHlCQUFvQixDQUMxRixDQUNQLENBQUMsZUFFTkEsMERBQUE7SUFBUWdFLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTStFLHVEQUFLLENBQUNHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztJQUFBO0VBQUMsR0FBQyxRQUFjLENBQ3pFLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVoSixNQUFNOzs7Ozs7Ozs7Ozs7OztBQ3ZDckIsSUFBTXlCLGNBQWMsR0FBRyxDQUNuQjtFQUNJd0IsTUFBTSxFQUFFLFFBQVE7RUFDaEJ2QixJQUFJLEVBQUU7QUFDVixDQUFDLEVBQ0Q7RUFDSXVCLE1BQU0sRUFBRSxnQkFBZ0I7RUFDeEJ2QixJQUFJLEVBQUU7QUFDVixDQUFDLEVBQ0Q7RUFDSXVCLE1BQU0sRUFBRSxTQUFTO0VBQ2pCdkIsSUFBSSxFQUFFO0FBQ1YsQ0FBQyxFQUNEO0VBQ0l1QixNQUFNLEVBQUUsU0FBUztFQUNqQnZCLElBQUksRUFBRTtBQUNWLENBQUMsRUFDRDtFQUNJdUIsTUFBTSxFQUFFLGNBQWM7RUFDdEJ2QixJQUFJLEVBQUU7QUFDVixDQUFDLENBQ0o7QUFFRCxpRUFBZUQsY0FBYzs7Ozs7Ozs7Ozs7QUN2QjdCOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01haW5Sb3V0ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9wYWdlcy9DYW50YW50ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9wYWdlcy9Db250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL3BhZ2VzL0ZpcnN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL3BhZ2VzL0luaWNpb1Nlc2lvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9wYWdlcy9SZWdpc3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9wYWdlcy9TZWNvbmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvcGFnZXMvcmFwZXJvcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL3N0eWxlcy9jYW50YW50ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9zdHlsZXMvY29udGVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9zdHlsZXMvZmlyc3QuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvc3R5bGVzL2xvZ2luLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL3N0eWxlcy9zZWNvbmQuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpcnN0IGZyb20gJy4vc3JjL3BhZ2VzL0ZpcnN0LmpzeCc7XG5pbXBvcnQgU2Vjb25kIGZyb20gJy4vc3JjL3BhZ2VzL1NlY29uZC5qc3gnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9zcmMvcGFnZXMvQ29udGVudC5qc3gnO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbi8vVE9ETyBNaXJhciBlbCB0YWlsd2luZCBlbiBhcmNoaXZvcyBxdWUgbm8gc2VhbiBlc3RlXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ob21lIGhvbWUgbW9udHNlcnJhdCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhdGVyYWxcIj5cbiAgICAgICAgPEZpcnN0IC8+XG4gICAgICAgIDxTZWNvbmQgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpc29yXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlcmVjaGFcIj5cbiAgICAgICAgPENvbnRlbnQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL3NyYy9wYWdlcy9JbmljaW9TZXNpb24uanN4J1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vc3JjL3BhZ2VzL1JlZ2lzdGVyLmpzeCdcblxuY29uc3QgTWFpblJvdXRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVzPlxuICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpbiAvPn0gLz5cbiAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3JlZ2lzdGVyXCIgZWxlbWVudD17PFJlZ2lzdGVyIC8+fSAvPlxuICAgIDwvUm91dGVzPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpblJvdXRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9NYWluUm91dGVyJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9udHNlcnJhdCc+XG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICA8Um91dGVyIC8+XG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbi8vIE1vbnRhIGVsIGNvbXBvbmVudGUgQXBwIGVuIGVsIGVsZW1lbnRvIGNvbiBlbCBJRCAncm9vdCdcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykucmVuZGVyKDxBcHAgLz4pO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9jYW50YW50ZS5jc3MnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRNZWRpYSwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IGNhbnRhbnRlc0RlUmFwIGZyb20gJy4vcmFwZXJvcyc7IC8vIEltcG9ydGEgZWwgYXJyYXkgZGUgY2FudGFudGVzIGRlIHJhcFxuaW1wb3J0IGZvdG8gZnJvbSAnLi4vaW1nL2xvZ28xOTIucG5nJztcblxuY29uc3QgQ2FudGFudGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhbnRhbnRlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXR1bG8nPlxuICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgPGE+QXJ0aXN0YXMgcG9wdWxhcmVzPC9hPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+TW9zdHJhciB0b2RvczwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nZXJcIj5cbiAgICAgICAgICAgICAgICB7Y2FudGFudGVzRGVSYXAubWFwKChjYW50YW50ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcnVlYmFcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nY2FyZC1ob3Zlcicgc3g9e3sgbWluV2lkdGg6IDE3OCwgbWF4V2lkdGg6IDE3OCwgbWluSGVpZ2h0OiAyMzYsIG1heEhlaWdodDogMjM2LCBiYWNrZ3JvdW5kOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBoZWlnaHQ6IDE0MCwgcGFkZGluZzogJzEwcHgnLCBib3JkZXJSYWRpdXM6ICc1MCUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtmb3RvfSAvLyBTaSBsYSBpbWFnZW4gbm8gZXN0w6EgZGlzcG9uaWJsZSwgdXNhIHVuYSBpbWFnZW4gcHJlZGV0ZXJtaW5hZGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FudGFudGUubm9tYnJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBzeD17eyBjb2xvcjogJyNCM0IzQjMnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJ0aXN0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW50YW50ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBDYW50YW50ZSBmcm9tICcuL0NhbnRhbnRlLmpzeCc7XG5pbXBvcnQgeyBJY29uQnV0dG9uLCBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBLZXlib2FyZEFycm93UmlnaHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1JpZ2h0JztcbmltcG9ydCBLZXlib2FyZEFycm93TGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93TGVmdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9jb250ZW50LmNzcyc7XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPlxuICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMwYTBhMGEnLCBtYXJnaW5SaWdodDogJzEwcHgnLCBtYXJnaW5MZWZ0OiAnMTBweCcsICcmOmhvdmVyJzogeyBiYWNrZ3JvdW5kOiAnIzBhMGEwYScgfSB9fSBhcmlhLWxhYmVsPVwicHJldmlvdXNcIj5cbiAgICAgICAgICAgIDxLZXlib2FyZEFycm93TGVmdEljb24gc3g9e3sgY29sb3I6ICcjQjNCM0IzJyB9fSAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwic21hbGxcIiBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMGEwYTBhJywgJyY6aG92ZXInOiB7IGJhY2tncm91bmQ6ICcjMGEwYTBhJyB9IH19IGFyaWEtbGFiZWw9XCJuZXh0XCI+XG4gICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1JpZ2h0SWNvbiBzeD17eyBjb2xvcjogJyNCM0IzQjMnIH19IC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICAgICAgY29sb3I6ICcjQjNCM0IzJyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvcmVnaXN0ZXInKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZWdpc3RyYXJzZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjQjNCM0IzJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9sb2dpbicpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEluaWNpYXIgc2VzacOzblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2l0aC1zY3JvbGxcIj5cbiAgICAgICAgICA8Q2FudGFudGUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbG9nbyBmcm9tICcuLi9pbWcvc3BvdGlmeS5wbmcnXG5pbXBvcnQgQ290dGFnZU91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NvdHRhZ2VPdXRsaW5lZCc7XG5pbXBvcnQgU2VhcmNoT3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoT3V0bGluZWQnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZmlyc3QuY3NzJztcblxuY29uc3QgRmlyc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvJz5cbiAgICAgICAgICAgICAgICA8Q290dGFnZU91dGxpbmVkSWNvbiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIHRpdGxlPSdTcG90aWZ5Jz4gU3BvdGlmeSA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5pY2lvXCI+XG4gICAgICAgICAgICAgICAgPENvdHRhZ2VPdXRsaW5lZEljb24gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj4gSW5pY2lvIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXNjYXJcIj5cbiAgICAgICAgICAgICAgICA8U2VhcmNoT3V0bGluZWRJY29uIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+IEJ1c2NhciA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaXJzdCIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCAnLi4vc3R5bGVzL2xvZ2luLmNzcydcbmltcG9ydCB7IERpdmlkZXIsIEJ1dHRvbiwgVGV4dEZpZWxkLCBTd2l0Y2gsIElucHV0QWRvcm5tZW50LCBJY29uQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgVmlzaWJpbGl0eSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHknO1xuaW1wb3J0IFZpc2liaWxpdHlPZmYgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5T2ZmJztcbmltcG9ydCBHb29nbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvR29vZ2xlJztcbmltcG9ydCBFcnJvck91dGxpbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRXJyb3JPdXRsaW5lJztcbmltcG9ydCBsb2dvIGZyb20gJy4uL2ltZy9sb2dvLnBuZyc7XG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZW1haWxSZWdleCA9IC9bYS16QS1aMC05Ll8lKy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsfS9nO1xuICAgIGNvbnN0IHBhc3N3b3JkUmVnZXggPSAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlxcZCkoPz0uKlshQCMkJV4mKigpXFwtXz0rXFxcXFxcfFxcW1xcXXt9OzpcXCdcIiwuPD4vP10pLns1LH0kLztcblxuICAgIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrU2hvd1Bhc3N3b3JkID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IFtmb3JtVmFsdWVzLCBzZXRGb3JtVmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmIChuYW1lID09PSBcImVtYWlsXCIpIHtcbiAgICAgICAgICAgIHNldEZvcm1WYWx1ZXMoeyAuLi5mb3JtVmFsdWVzLCBlbWFpbDogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBzZXRGb3JtVmFsdWVzKHsgLi4uZm9ybVZhbHVlcywgcGFzc3dvcmQ6IHZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUVycm9ycyA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHRvdGFsRXJyb3JzID0gW107XG4gICAgICAgIGxldCBoYXNFcnJvciA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KGZvcm1WYWx1ZXMuZW1haWwpKSB7XG4gICAgICAgICAgICB0b3RhbEVycm9ycy5wdXNoKHsgdHlwZTogJ2VtYWlsJywgbWVzc2FnZTogJ0VsIGNvcnJlbyBlbGVjdHLDs25pY28gbm8gZXMgdsOhbGlkbycgfSk7XG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBhc3N3b3JkUmVnZXgudGVzdChmb3JtVmFsdWVzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgdG90YWxFcnJvcnMucHVzaCh7IHR5cGU6ICdwYXNzd29yZCcsIG1lc3NhZ2U6ICdMYSBjb250cmFzZcOxYSBkZWJlIHRlbmVyIG1pbsO6c2N1bGEsIG1hecO6c2N1bGEsIG7Dum1lcm8geSB1biBjYXLDoWN0ZXIgbyBtw6FzIGRlIDUgY2Fyw6FjdGVyZXMnIH0pO1xuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNFcnJvcikge1xuICAgICAgICAgICAgaGFuZGxlU3VibWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0RXJyb3JzKHRvdGFsRXJyb3JzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JtVmFsdWVzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxuICAgICAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+SW5pY2lhciBzZXNpw7NuIC0gU3BvdGlmeTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlbG1ldD5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVFcnJvcnN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXJMb2dpbiBmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lckxvZ2luIGZsZXgganVzdGlmeS1jZW50ZXIgJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtdWxhcmlvTG9naW4gcm91bmRlZC14bCBteS04IHB4LTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SW5pY2lhIHNlc2nDs24gZW4gU3BvdGlmeTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGludWVTb2NpYWwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbWItMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMjRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQ4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCB3aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxHb29nbGVJY29uIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRpbnVhciBjb24gR29vZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbWItMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMjRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQ4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCB3aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGludWFyIGNvbiBGYWNlYm9va1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J21iLTgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMzI0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHdoaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzI1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRpbnVhciBjb24gQXBwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHN4PXt7IGJvcmRlckNvbG9yOiAnZ3JheScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dGZpZWxkcyBtdC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Q29ycmVvIGVsZWN0csOzbmljbyBvIG5vbWJyZSBkZSB1c3VhcmlvPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQ29ycmVvIGVsZWN0csOzbmljbyBvIG5vbWJyZSBkZSB1c3VhcmlvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogJ3doaXRlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RjaGVkT3V0bGluZTogZXJyb3JzLnNvbWUoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gXCJlbWFpbFwiKSA/ICdlcnJvci1ib3JkZXInIDogJ3doaXRlLWJvcmRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogJ2dyYXknIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMzI0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1yb290Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgZmllbGRzZXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGVycm9ycy5zb21lKGVycm9yID0+IGVycm9yLnR5cGUgPT09IFwiZW1haWxcIikgPyAncmVkJyA6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXIgZmllbGRzZXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGVycm9ycy5zb21lKGVycm9yID0+IGVycm9yLnR5cGUgPT09IFwiZW1haWxcIikgPyAncmVkJyA6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBlcnJvcnMuc29tZShlcnJvciA9PiBlcnJvci50eXBlID09PSBcImVtYWlsXCIpID8gJzFweCBzb2xpZCByZWQnIDogJzJweCBzb2xpZCB3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLWZvY3VzZWQgZmllbGRzZXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGVycm9ycy5zb21lKGVycm9yID0+IGVycm9yLnR5cGUgPT09IFwiZW1haWxcIikgPyAncmVkJyA6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aUlucHV0QmFzZS1pbnB1dDo6cGxhY2Vob2xkZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhlcnJvcnMubGVuZ3RoID4gMCAmJiBlcnJvcnMuZmluZChlcnJvciA9PiBlcnJvci50eXBlID09PSBcImVtYWlsXCIpKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtcmVkLTcwMCB0ZXh0LXhzIHRleHQtbGVmdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvck91dGxpbmVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIG1hcmdpblJpZ2h0OiAnNXB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmZpbmQoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gXCJlbWFpbFwiKS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXNzd29yZCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Q29udHJhc2XDsWE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0NvbnRyYXNlw7FhJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6ICd3aGl0ZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwidG9nZ2xlIHBhc3N3b3JkIHZpc2liaWxpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja1Nob3dQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93UGFzc3dvcmQgPyA8VmlzaWJpbGl0eU9mZiAvPiA6IDxWaXNpYmlsaXR5IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGNoZWRPdXRsaW5lOiBlcnJvcnMuc29tZShlcnJvciA9PiBlcnJvci50eXBlID09PSBcInBhc3N3b3JkXCIpID8gJ2Vycm9yLWJvcmRlcicgOiAnd2hpdGUtYm9yZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiAnZ3JheScgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMjRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmIC5NdWlPdXRsaW5lZElucHV0LXJvb3QnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZXJyb3JzLnNvbWUoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gXCJwYXNzd29yZFwiKSA/ICdyZWQnIDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3ZlciBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZXJyb3JzLnNvbWUoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gXCJwYXNzd29yZFwiKSA/ICdyZWQnIDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGVycm9ycy5zb21lKGVycm9yID0+IGVycm9yLnR5cGUgPT09IFwicGFzc3dvcmRcIikgPyAnMXB4IHNvbGlkIHJlZCcgOiAnMnB4IHNvbGlkIHdoaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktZm9jdXNlZCBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZXJyb3JzLnNvbWUoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gXCJwYXNzd29yZFwiKSA/ICdyZWQnIDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpSW5wdXRCYXNlLWlucHV0OjpwbGFjZWhvbGRlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGVycm9ycy5sZW5ndGggPiAwICYmIGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IFwicGFzc3dvcmRcIikpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yZWQtNzAwIHRleHQteHMgdGV4dC1sZWZ0IGZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9yT3V0bGluZUljb24gc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgbWFyZ2luUmlnaHQ6ICc1cHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZmluZChlcnJvciA9PiBlcnJvci50eXBlID09PSBcInBhc3N3b3JkXCIpLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIC8vVE9ETyBDYW1iaWFyIGVsIHRhbWHDsW8gZGUgbGEgYm9sYSBkZWwgc3dpdGNoICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmIC5NdWlTd2l0Y2gtc3dpdGNoQmFzZS5NdWktY2hlY2tlZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpU3dpdGNoLXN3aXRjaEJhc2UuTXVpLWNoZWNrZWQgKyAuTXVpU3dpdGNoLXRyYWNrJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMzAsMjE1LDk2LDI1NSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlJz5SZWN1w6lyZGFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMjRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMWVkNzYwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxZWQ3NjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMDIpJywgLy8gSGFjZXIgZWwgYm90w7NuIHVuIHBvY28gbcOhcyBncmFuZGUgZW4gaG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluaWNpYXIgU2VzacOzblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J210LTggbWItOCB1bmRlcmxpbmUgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWN1c3RvbS10ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMK/U2UgdGUgaGEgb2x2aWRhZG8gbGEgY29udHJhc2XDsWE/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHN4PXt7IGJvcmRlckNvbG9yOiAnZ3JheScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnQgbXQtOCBtYi04IGZsZXgganVzdGlmeS1ldmVubHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY29sb3ItdGV4dCc+wr9ObyB0aWVuZXMgY3VlbnRhPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvcmVnaXN0ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtd2hpdGUgdW5kZXJsaW5lIGhvdmVyOnRleHQtY3VzdG9tLXRleHQnPlN1YnNjcsOtYmV0ZSBhIFNwb3RpZnk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyTG9naW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+RXN0ZSBzaXRpbyBlc3TDoSBwcm90ZWdpZG8gcG9yIHJlQ0FQVENIQS4gU2UgYXBsaWNhbiBsb3MgPGEgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciB1bmRlcmxpbmUnIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL3BvbGljaWVzLmdvb2dsZS5jb20vcHJpdmFjeSc+VMOpcm1pbm9zIGRlbCBzZXJ2aWNpbzwvYT4geSBsYSA8YSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIHVuZGVybGluZScgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9J2h0dHBzOi8vcG9saWNpZXMuZ29vZ2xlLmNvbS90ZXJtcyc+UG9sw610aWNhIGRlIHByaXZhY2lkYWQ8L2E+IGRlIEdvb2dsZS48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2ID5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCAnLi4vc3R5bGVzL2xvZ2luLmNzcydcbmltcG9ydCB7IERpdmlkZXIsIEJ1dHRvbiwgVGV4dEZpZWxkLCBTd2l0Y2gsIElucHV0QWRvcm5tZW50LCBJY29uQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgRXJyb3JPdXRsaW5lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Vycm9yT3V0bGluZSc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi9pbWcvbG9nby5wbmcnO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvW2EtekEtWjAtOS5fJSstXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLH0vZztcbiAgICBjb25zdCBwYXNzd29yZFJlZ2V4ID0gL14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipcXGQpKD89LipbIUAjJCVeJiooKVxcLV89K1xcXFxcXHxcXFtcXF17fTs6XFwnXCIsLjw+Lz9dKS57NSx9JC87XG5cbiAgICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGlja1Nob3dQYXNzd29yZCA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpO1xuICAgIH07XG5cbiAgICBjb25zdCBbZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICBzZXRGb3JtVmFsdWVzKHsgLi4uZm9ybVZhbHVlcywgZW1haWw6IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgc2V0Rm9ybVZhbHVlcyh7IC4uLmZvcm1WYWx1ZXMsIHBhc3N3b3JkOiB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvcnMgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB0b3RhbEVycm9ycyA9IFtdO1xuICAgICAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdChmb3JtVmFsdWVzLmVtYWlsKSkge1xuICAgICAgICAgICAgdG90YWxFcnJvcnMucHVzaCh7IHR5cGU6ICdlbWFpbCcsIG1lc3NhZ2U6ICdFc3RlIGNvcnJlbyBlbGVjdHLDs25pY28gbm8gZXMgdsOhbGlkby4gQXNlZ8O6cmF0ZSBkZSBxdWUgdGVuZ2EgdW4gZm9ybWF0byBjb21vIGVzdGU6IGVqZW1wbG9AZW1haWwuY29tJyB9KTtcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHNldEVycm9ycyh0b3RhbEVycm9ycyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZm9ybVZhbHVlcyk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cbiAgICAgICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlJlZ8Otc3RyYXRlIC0gU3BvdGlmeTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlbG1ldD5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVFcnJvcnN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXJMb2dpbiBmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lckxvZ2luIGZsZXgganVzdGlmeS1jZW50ZXIgJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtdWxhcmlvTG9naW4gcm91bmRlZC14bCBteS04IHB4LTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UmVnw61zdHJhdGUgcGFyYSBlbXBlemFyIGEgZXNjdWNoYXIgY29udGVuaWRvPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0ZmllbGRzIG10LTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1lbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYWlsIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5EaXJlY2Npw7NuIGRlIGNvcnJlbyBlbGVjdHLDs25pY288L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdub21icmVAZG9taW5pby5jb20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiAnd2hpdGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGNoZWRPdXRsaW5lOiBlcnJvcnMuc29tZShlcnJvciA9PiBlcnJvci50eXBlID09PSBcImVtYWlsXCIpID8gJ2Vycm9yLWJvcmRlcicgOiAnd2hpdGUtYm9yZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiAnZ3JheScgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMjRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmIC5NdWlPdXRsaW5lZElucHV0LXJvb3QnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZXJyb3JzLnNvbWUoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gXCJlbWFpbFwiKSA/ICdyZWQnIDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3ZlciBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZXJyb3JzLnNvbWUoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gXCJlbWFpbFwiKSA/ICdyZWQnIDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGVycm9ycy5zb21lKGVycm9yID0+IGVycm9yLnR5cGUgPT09IFwiZW1haWxcIikgPyAnMXB4IHNvbGlkIHJlZCcgOiAnMnB4IHNvbGlkIHdoaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktZm9jdXNlZCBmaWVsZHNldCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZXJyb3JzLnNvbWUoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gXCJlbWFpbFwiKSA/ICdyZWQnIDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpSW5wdXRCYXNlLWlucHV0OjpwbGFjZWhvbGRlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGVycm9ycy5sZW5ndGggPiAwICYmIGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IFwiZW1haWxcIikpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yZWQtNzAwIHRleHQteHMgdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9yT3V0bGluZUljb24gc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgbWFyZ2luUmlnaHQ6ICc1cHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZmluZChlcnJvciA9PiBlcnJvci50eXBlID09PSBcImVtYWlsXCIpLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTYgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzMyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQ4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxZWQ3NjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFlZDc2MCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4wMiknLCAvLyBIYWNlciBlbCBib3TDs24gdW4gcG9jbyBtw6FzIGdyYW5kZSBlbiBob3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lndWllbnRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgc3g9e3sgJyY6OmJlZm9yZSwgJjo6YWZ0ZXInOiB7IGJvcmRlckNvbG9yOiAnZ3JheScgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnIzgwODA4MCd9fT4gbyA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGludWVTb2NpYWwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbXQtNiBtYi0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzMyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkIHdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEdvb2dsZUljb24gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGludWFyIGNvbiBHb29nbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtYi0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzMyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkIHdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250aW51YXIgY29uIEZhY2Vib29rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMzI0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHdoaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzI1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRpbnVhciBjb24gQXBwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnQgbXQtOCBtYi04IGZsZXgganVzdGlmeS1ldmVubHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY29sb3ItdGV4dCc+wr9ZYSB0aWVuZXMgY3VlbnRhPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvbG9naW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtd2hpdGUgdW5kZXJsaW5lIGhvdmVyOnRleHQtY3VzdG9tLXRleHQnPkluaWNpYSBzZXNpw7NuIGFxdcOtLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJMb2dpbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Fc3RlIHNpdGlvIGVzdMOhIHByb3RlZ2lkbyBwb3IgcmVDQVBUQ0hBLiBTZSBhcGxpY2FuIGxvcyA8YSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIHVuZGVybGluZScgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9J2h0dHBzOi8vcG9saWNpZXMuZ29vZ2xlLmNvbS9wcml2YWN5Jz5Uw6lybWlub3MgZGVsIHNlcnZpY2lvPC9hPiB5IGxhIDxhIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgdW5kZXJsaW5lJyB0YXJnZXQ9J19ibGFuaycgaHJlZj0naHR0cHM6Ly9wb2xpY2llcy5nb29nbGUuY29tL3Rlcm1zJz5Qb2zDrXRpY2EgZGUgcHJpdmFjaWRhZDwvYT4gZGUgR29vZ2xlLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXYgPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVG9vbHRpcCwgSWNvbkJ1dHRvbiwgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgVHVybmVkSW5JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVHVybmVkSW4nO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BZGQnO1xuaW1wb3J0IExhbmd1YWdlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xhbmd1YWdlJztcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcblxuaW1wb3J0ICcuLi9zdHlsZXMvc2Vjb25kLmNzcydcblxuY29uc3QgU2Vjb25kID0gKCkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZCc+XG4gICAgICAgICAgICA8VG9hc3RlciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWJsaW90ZWNhXCI+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJDb250cmFlciBUdSBCaWJsaW90ZWNhXCIgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJ1ZWJhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHVybmVkSW5JY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UdSBiaWJsaW90ZWNhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJDcmVhciB1bmEgbGlzdGEgbyBjYXJwZXRhXCIgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiAvL1RPRE8gQXJyZWdsYXIgZWwgYmcgZGVsIGljb25vIGFsIGhhY2VyIGhvdmVyICovfVxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj0nd2FybmluZycgY2xhc3NOYW1lPSdiZy1pY29uJyBhcmlhLWxhYmVsPVwiZGVsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiBjbGFzc05hbWU9J2NvbG9yLWljb24nIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdsb2JhbC1zcGFpblwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHNpemU9XCJzbWFsbFwiIGNsYXNzTmFtZT0nYnV0dG9uLXNwYWluJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIGJvcmRlclJhZGl1czogJzE1cHgnLCBib3JkZXI6ICcwLjVweCBzb2xpZCAjYjNiM2IzJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbG9iYWwtaWNvbic+PExhbmd1YWdlSWNvbiBmb250U2l6ZT0nc21hbGwnIC8+IDwvc3Bhbj48cD5Fc3Bhw7FvbCBkZSBFc3Bhw7FhPC9wPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9hc3Quc3VjY2VzcygnTWVuc2FqZSBkZSBwcnVlYmEhJyl9PlNhbHVkYTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY29uZCIsImNvbnN0IGNhbnRhbnRlc0RlUmFwID0gW1xuICAgIHtcbiAgICAgICAgbm9tYnJlOiBcIkVtaW5lbVwiLFxuICAgICAgICBmb3RvOiBcInVybF9kZV9sYV9pbWFnZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbm9tYnJlOiBcIktlbmRyaWNrIExhbWFyXCIsXG4gICAgICAgIGZvdG86IFwidXJsX2RlX2xhX2ltYWdlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBub21icmU6IFwiSi4gQ29sZVwiLFxuICAgICAgICBmb3RvOiBcInVybF9kZV9sYV9pbWFnZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbm9tYnJlOiBcIkNhcmRpIEJcIixcbiAgICAgICAgZm90bzogXCJ1cmxfZGVfbGFfaW1hZ2VuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5vbWJyZTogXCJUcmF2aXMgU2NvdHRcIixcbiAgICAgICAgZm90bzogXCJ1cmxfZGVfbGFfaW1hZ2VuXCIsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNhbnRhbnRlc0RlUmFwOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZpcnN0IiwiU2Vjb25kIiwiQ29udGVudCIsIkhvbWUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiUm91dGVzIiwiUm91dGUiLCJMb2dpbiIsIlJlZ2lzdGVyIiwiTWFpblJvdXRlciIsImV4YWN0IiwicGF0aCIsImVsZW1lbnQiLCJjcmVhdGVSb290IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIkFwcCIsInJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZE1lZGlhIiwiVHlwb2dyYXBoeSIsImNhbnRhbnRlc0RlUmFwIiwiZm90byIsIkNhbnRhbnRlIiwibWFwIiwiY2FudGFudGUiLCJpbmRleCIsImtleSIsInN4IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiaW1hZ2UiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwiY29tcG9uZW50IiwiY29sb3IiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJub21icmUiLCJ1c2VOYXZpZ2F0ZSIsIkljb25CdXR0b24iLCJCdXR0b24iLCJLZXlib2FyZEFycm93UmlnaHRJY29uIiwiS2V5Ym9hcmRBcnJvd0xlZnRJY29uIiwibmF2aWdhdGUiLCJzaXplIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJvbkNsaWNrIiwibG9nbyIsIkNvdHRhZ2VPdXRsaW5lZEljb24iLCJTZWFyY2hPdXRsaW5lZEljb24iLCJ0aXRsZSIsInVzZVN0YXRlIiwiSGVsbWV0IiwiRGl2aWRlciIsIlRleHRGaWVsZCIsIlN3aXRjaCIsIklucHV0QWRvcm5tZW50IiwiVmlzaWJpbGl0eSIsIlZpc2liaWxpdHlPZmYiLCJHb29nbGVJY29uIiwiRXJyb3JPdXRsaW5lSWNvbiIsImVtYWlsUmVnZXgiLCJwYXNzd29yZFJlZ2V4IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJoYW5kbGVDbGlja1Nob3dQYXNzd29yZCIsIl91c2VTdGF0ZTUiLCJlbWFpbCIsInBhc3N3b3JkIiwiX3VzZVN0YXRlNiIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIl9lJHRhcmdldCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIl9vYmplY3RTcHJlYWQiLCJoYW5kbGVFcnJvcnMiLCJwcmV2ZW50RGVmYXVsdCIsInRvdGFsRXJyb3JzIiwiaGFzRXJyb3IiLCJ0ZXN0IiwicHVzaCIsInR5cGUiLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiaHJlZiIsInNyYyIsIndpZHRoIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJpZCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJJbnB1dFByb3BzIiwic3R5bGUiLCJjbGFzc2VzIiwibm90Y2hlZE91dGxpbmUiLCJzb21lIiwiZXJyb3IiLCJJbnB1dExhYmVsUHJvcHMiLCJpbnB1dCIsImxlbmd0aCIsImZpbmQiLCJmb250U2l6ZSIsImVuZEFkb3JubWVudCIsInBvc2l0aW9uIiwiZGVmYXVsdENoZWNrZWQiLCJ0cmFuc2Zvcm0iLCJUb29sdGlwIiwiVHVybmVkSW5JY29uIiwiQWRkSWNvbiIsIkxhbmd1YWdlSWNvbiIsInRvYXN0IiwiVG9hc3RlciIsInBsYWNlbWVudCIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9