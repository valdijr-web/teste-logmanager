/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_BASE_URL": () => (/* binding */ API_BASE_URL)
/* harmony export */ });
var API_BASE_URL = 'http://localhost/api/v1';

/***/ }),

/***/ "./resources/js/drivers/api/drivers-api.js":
/*!*************************************************!*\
  !*** ./resources/js/drivers/api/drivers-api.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchDriverOrdersFromAPI": () => (/* binding */ fetchDriverOrdersFromAPI),
/* harmony export */   "fetchDriversFromAPI": () => (/* binding */ fetchDriversFromAPI),
/* harmony export */   "updateOrderOnAPI": () => (/* binding */ updateOrderOnAPI)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.js */ "./resources/js/app.js");
/* harmony import */ var _utils_params_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/params-utils.js */ "./resources/js/drivers/utils/params-utils.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


function fetchDriversFromAPI(_x, _x2) {
  return _fetchDriversFromAPI.apply(this, arguments);
}
function _fetchDriversFromAPI() {
  _fetchDriversFromAPI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(page, filters) {
    var params, response;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          params = (0,_utils_params_utils_js__WEBPACK_IMPORTED_MODULE_1__.buildParams)(page, filters);
          _context.n = 1;
          return fetch("".concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, "/drivers?").concat(params.toString()), {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            }
          });
        case 1:
          response = _context.v;
          if (response.ok) {
            _context.n = 2;
            break;
          }
          throw new Error('Erro ao carregar motoristas.');
        case 2:
          return _context.a(2, response.json());
      }
    }, _callee);
  }));
  return _fetchDriversFromAPI.apply(this, arguments);
}
function fetchDriverOrdersFromAPI(_x3, _x4, _x5) {
  return _fetchDriverOrdersFromAPI.apply(this, arguments);
}
function _fetchDriverOrdersFromAPI() {
  _fetchDriverOrdersFromAPI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(driverId, page, filters) {
    var params, response;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          params = (0,_utils_params_utils_js__WEBPACK_IMPORTED_MODULE_1__.buildParams)(page, filters);
          _context2.n = 1;
          return fetch("".concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, "/orders/").concat(driverId, "?").concat(params.toString()), {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            }
          });
        case 1:
          response = _context2.v;
          if (response.ok) {
            _context2.n = 2;
            break;
          }
          throw new Error('Erro ao carregar pedidos do motorista.');
        case 2:
          return _context2.a(2, response.json());
      }
    }, _callee2);
  }));
  return _fetchDriverOrdersFromAPI.apply(this, arguments);
}
function updateOrderOnAPI(_x6, _x7) {
  return _updateOrderOnAPI.apply(this, arguments);
}
function _updateOrderOnAPI() {
  _updateOrderOnAPI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(orderId, payload) {
    var response, errorPayload, errorMessage;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return fetch("".concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, "/orders/").concat(orderId), {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify(payload)
          });
        case 1:
          response = _context3.v;
          if (response.ok) {
            _context3.n = 3;
            break;
          }
          _context3.n = 2;
          return response.json()["catch"](function () {
            return null;
          });
        case 2:
          errorPayload = _context3.v;
          errorMessage = (errorPayload === null || errorPayload === void 0 ? void 0 : errorPayload.message) || 'Erro ao salvar alterações do pedido.';
          throw new Error(errorMessage);
        case 3:
          return _context3.a(2, response.json());
      }
    }, _callee3);
  }));
  return _updateOrderOnAPI.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/drivers/orders-modal.js":
/*!**********************************************!*\
  !*** ./resources/js/drivers/orders-modal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initDriverOrdersModal": () => (/* binding */ initDriverOrdersModal),
/* harmony export */   "openDriverOrdersModal": () => (/* binding */ openDriverOrdersModal)
/* harmony export */ });
/* harmony import */ var _api_drivers_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/drivers-api.js */ "./resources/js/drivers/api/drivers-api.js");
/* harmony import */ var _renderers_orders_table_renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderers/orders-table-renderer.js */ "./resources/js/drivers/renderers/orders-table-renderer.js");
/* harmony import */ var _renderers_pagination_renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderers/pagination-renderer.js */ "./resources/js/drivers/renderers/pagination-renderer.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



var ordersModal = document.getElementById('driverOrdersModal');
var ordersModalTitle = document.getElementById('driverOrdersModalTitle');
var ordersTableHead = document.getElementById('driverOrdersTableHead');
var ordersTableBody = document.getElementById('driverOrdersTableBody');
var ordersPagination = document.getElementById('driverOrdersPagination');
var ordersPaginationInfo = document.getElementById('driverOrdersPaginationInfo');
var ordersPerPageSelect = document.getElementById('driverOrdersPerPage');
var ordersModalFooter = ordersModal === null || ordersModal === void 0 ? void 0 : ordersModal.querySelector('.modal-footer');
var currentDriverId = null;
var currentOrderType = 'orders';
var currentFilters = {};
var currentPage = 1;
var currentOrders = [];
var currentEditOrder = null;
var ORDERS_TABLE_COLUMN_COUNT = 3;
function initDriverOrdersModal() {
  if (!ordersModal) {
    return;
  }
  ordersPerPageSelect.addEventListener('change', function () {
    return fetchOrders(1);
  });
  ordersTableBody.addEventListener('click', handleOrdersTableClick);
  ordersTableBody.addEventListener('input', handleOrdersTableInput);
  ordersTableBody.addEventListener('change', handleOrdersTableChange);
  ordersModal.addEventListener('click', handleModalFooterClick);
  ordersModal.addEventListener('show.bs.modal', function () {
    if (currentDriverId) {
      fetchOrders(1);
    }
  });
  ordersModal.addEventListener('hidden.bs.modal', function () {
    currentEditOrder = null;
    renderModalFooter();
  });
}
function openDriverOrdersModal(driverId, driverName, orderType) {
  var filters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  currentDriverId = driverId;
  currentOrderType = orderType;
  currentFilters = filters;
  currentPage = 1;
  currentOrders = [];
  currentEditOrder = null;
  var isDeliveryMode = orderType === 'delivered';
  var columns = {
    showStatus: !isDeliveryMode,
    showDeliveredDate: isDeliveryMode
  };
  ordersModalTitle.textContent = isDeliveryMode ? "Entregas de ".concat(driverName) : "Pedidos de ".concat(driverName);
  setOrdersTableHeader(columns);
  renderModalFooter();
  var modal = new bootstrap.Modal(ordersModal);
  modal.show();
}
function setOrdersTableHeader(columns) {
  if (!ordersTableHead) {
    return;
  }
  ordersTableHead.innerHTML = "\n        <th scope=\"col\">C\xF3digo</th>\n        <th scope=\"col\">Endere\xE7o</th>\n        ".concat(columns.showStatus ? '<th scope="col">Status</th>' : '', "\n        ").concat(columns.showDeliveredDate ? '<th scope="col">Entregue em</th>' : '', "\n    ");
}
function handleOrdersTableClick(event) {
  var editButton = event.target.closest('.js-order-edit-button');
  var statusToggle = event.target.closest('.js-order-status-toggle');
  if (editButton) {
    event.preventDefault();
    startOrderEdit(editButton.dataset.orderId, {
      editAddress: true,
      editStatus: false
    });
    return;
  }
  if (statusToggle) {
    event.preventDefault();
    startOrderEdit(statusToggle.dataset.orderId, {
      editAddress: false,
      editStatus: true
    });
  }
}
function handleModalFooterClick(event) {
  var saveButton = event.target.closest('.js-order-save-button');
  var cancelButton = event.target.closest('.js-order-cancel-button');
  if (saveButton) {
    event.preventDefault();
    saveOrderChanges();
    return;
  }
  if (cancelButton) {
    event.preventDefault();
    cancelOrderEdit();
  }
}
function handleOrdersTableInput(event) {
  var input = event.target.closest('.js-order-address-input');
  if (!input || !currentEditOrder) {
    return;
  }
  currentEditOrder.delivery_address = input.value;
}
function handleOrdersTableChange(event) {
  var select = event.target.closest('.js-order-status-select');
  if (!select || !currentEditOrder) {
    return;
  }
  currentEditOrder.status = select.value;
}
function startOrderEdit(orderId) {
  var editOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    editAddress: true,
    editStatus: false
  };
  var order = currentOrders.find(function (item) {
    return String(item.id) === String(orderId);
  });
  if (!order) {
    return;
  }
  currentEditOrder = {
    id: order.id,
    delivery_address: order.delivery_address,
    status: order.status,
    editAddress: Boolean(editOptions.editAddress),
    editStatus: Boolean(editOptions.editStatus)
  };
  (0,_renderers_orders_table_renderer_js__WEBPACK_IMPORTED_MODULE_1__.renderOrdersTable)(ordersTableBody, currentOrders, getColumns(), currentEditOrder);
  renderModalFooter();
}
function cancelOrderEdit() {
  currentEditOrder = null;
  (0,_renderers_orders_table_renderer_js__WEBPACK_IMPORTED_MODULE_1__.renderOrdersTable)(ordersTableBody, currentOrders, getColumns(), null);
  renderModalFooter();
}
function saveOrderChanges() {
  return _saveOrderChanges.apply(this, arguments);
}
function _saveOrderChanges() {
  _saveOrderChanges = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          if (currentEditOrder) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          if (!(!currentEditOrder.delivery_address || !currentEditOrder.delivery_address.trim())) {
            _context.n = 2;
            break;
          }
          return _context.a(2);
        case 2:
          _context.p = 2;
          _context.n = 3;
          return (0,_api_drivers_api_js__WEBPACK_IMPORTED_MODULE_0__.updateOrderOnAPI)(currentEditOrder.id, {
            delivery_address: currentEditOrder.delivery_address,
            status: currentEditOrder.status
          });
        case 3:
          currentEditOrder = null;
          _context.n = 4;
          return fetchOrders(currentPage);
        case 4:
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
          (0,_renderers_orders_table_renderer_js__WEBPACK_IMPORTED_MODULE_1__.renderError)(ordersTableBody, _t.message, ORDERS_TABLE_COLUMN_COUNT);
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[2, 5]]);
  }));
  return _saveOrderChanges.apply(this, arguments);
}
function renderModalFooter() {
  if (!ordersModalFooter) {
    return;
  }
  if (!currentEditOrder) {
    ordersModalFooter.innerHTML = '';
    return;
  }
  ordersModalFooter.innerHTML = "\n        <div class=\"d-flex justify-content-between align-items-center w-100\">\n            <button type=\"button\" class=\"btn btn-light js-order-cancel-button border\">\n                Cancelar\n            </button>\n            <button type=\"button\" class=\"btn btn-primary js-order-save-button\">\n                Salvar Altera\xE7\xF5es\n            </button>\n        </div>\n    ";
}
function getColumns() {
  var isDeliveryMode = currentOrderType === 'delivered';
  return {
    showStatus: !isDeliveryMode,
    showDeliveredDate: isDeliveryMode
  };
}
function fetchOrders() {
  return _fetchOrders.apply(this, arguments);
}
function _fetchOrders() {
  _fetchOrders = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var page,
      columns,
      result,
      _args2 = arguments,
      _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          page = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 1;
          if (currentDriverId) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2);
        case 1:
          currentPage = page;
          columns = getColumns();
          (0,_renderers_orders_table_renderer_js__WEBPACK_IMPORTED_MODULE_1__.renderLoading)(ordersTableBody, ORDERS_TABLE_COLUMN_COUNT);
          _context2.p = 2;
          _context2.n = 3;
          return (0,_api_drivers_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchDriverOrdersFromAPI)(currentDriverId, page, {
            status: currentOrderType === 'delivered' ? 'delivered' : 'all',
            perPage: ordersPerPageSelect.value,
            datePeriod: currentFilters.datePeriod
          });
        case 3:
          result = _context2.v;
          currentOrders = result.data || [];
          currentEditOrder = currentEditOrder && currentOrders.some(function (item) {
            return item.id === currentEditOrder.id;
          }) ? currentEditOrder : null;
          (0,_renderers_orders_table_renderer_js__WEBPACK_IMPORTED_MODULE_1__.renderOrdersTable)(ordersTableBody, currentOrders, columns, currentEditOrder);
          (0,_renderers_pagination_renderer_js__WEBPACK_IMPORTED_MODULE_2__.renderPagination)(ordersPagination, result.links, fetchOrders);
          (0,_renderers_pagination_renderer_js__WEBPACK_IMPORTED_MODULE_2__.renderPaginationInfo)(ordersPaginationInfo, result);
          renderModalFooter();
          _context2.n = 5;
          break;
        case 4:
          _context2.p = 4;
          _t2 = _context2.v;
          (0,_renderers_orders_table_renderer_js__WEBPACK_IMPORTED_MODULE_1__.renderError)(ordersTableBody, _t2.message, ORDERS_TABLE_COLUMN_COUNT);
        case 5:
          return _context2.a(2);
      }
    }, _callee2, null, [[2, 4]]);
  }));
  return _fetchOrders.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/drivers/renderers/date-picker-renderer.js":
/*!****************************************************************!*\
  !*** ./resources/js/drivers/renderers/date-picker-renderer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initDateRangePicker": () => (/* binding */ initDateRangePicker)
/* harmony export */ });
/* harmony import */ var _utils_date_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date-utils.js */ "./resources/js/drivers/utils/date-utils.js");

function initDateRangePicker($datePeriodElement, onApply, onCancel) {
  $datePeriodElement.daterangepicker({
    showDropdowns: true,
    linkedCalendars: false,
    autoApply: false,
    autoUpdateInput: false,
    opens: 'right',
    drops: 'down',
    locale: (0,_utils_date_utils_js__WEBPACK_IMPORTED_MODULE_0__.getPortugueseLocale)()
  });
  $datePeriodElement.on('show.daterangepicker', function (ev, picker) {
    var applyButton = $(picker.container).find('.applyBtn');
    var cancelButton = $(picker.container).find('.cancelBtn');
    applyButton.removeClass('btn-primary').addClass('btn-link');
    cancelButton.removeClass('btn-default btn-sm').addClass('btn btn-link');
  });
  $datePeriodElement.on('apply.daterangepicker', function (event, picker) {
    var startDate = picker.startDate.format('DD/MM/YYYY');
    var endDate = picker.endDate.format('DD/MM/YYYY');
    this.value = "".concat(startDate, " - ").concat(endDate);
    if (onApply) {
      onApply();
    }
  });
  $datePeriodElement.on('cancel.daterangepicker', function () {
    this.value = '';
    if (onCancel) {
      onCancel();
    }
  });
}

/***/ }),

/***/ "./resources/js/drivers/renderers/orders-table-renderer.js":
/*!*****************************************************************!*\
  !*** ./resources/js/drivers/renderers/orders-table-renderer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderError": () => (/* binding */ renderError),
/* harmony export */   "renderLoading": () => (/* binding */ renderLoading),
/* harmony export */   "renderOrdersTable": () => (/* binding */ renderOrdersTable)
/* harmony export */ });
var ORDER_STATUS_OPTIONS = [{
  value: 'Pendente',
  label: 'Pendente'
}, {
  value: 'Entregue',
  label: 'Entregue'
}];
function renderOrdersTable(tableBody, orders) {
  var columns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    showStatus: true,
    showDeliveredDate: false
  };
  var editOrder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  tableBody.innerHTML = '';
  var showStatus = columns.showStatus;
  var showDeliveredDate = columns.showDeliveredDate;
  var columnCount = 2 + (showStatus ? 1 : 0) + (showDeliveredDate ? 1 : 0);
  if (!orders || orders.length === 0) {
    tableBody.innerHTML = "\n            <tr>\n                <td colspan=\"".concat(columnCount, "\" class=\"text-muted text-center\">\n                    Nenhum pedido encontrado.\n                </td>\n            </tr>\n        ");
    return;
  }
  orders.forEach(function (order) {
    var row = document.createElement('tr');
    var isEditing = editOrder && Number(editOrder.id) === Number(order.id);
    var codeCell = document.createElement('td');
    codeCell.textContent = order.code;
    row.appendChild(codeCell);
    var addressCell = document.createElement('td');
    var isEditingAddress = isEditing && (editOrder === null || editOrder === void 0 ? void 0 : editOrder.editAddress);
    if (isEditingAddress) {
      var input = document.createElement('input');
      input.type = 'text';
      input.className = 'form-control form-control js-order-address-input';
      input.dataset.orderId = order.id;
      input.value = editOrder.delivery_address || order.delivery_address;
      addressCell.appendChild(input);
    } else {
      var addressText = document.createElement('span');
      addressText.textContent = order.delivery_address;
      addressText.className = 'me-2';
      var editButton = document.createElement('button');
      editButton.type = 'button';
      editButton.className = 'btn btn-link btn-sm p-0 align-baseline js-order-edit-button';
      editButton.dataset.orderId = order.id;
      editButton.title = 'Editar endereço';
      editButton.innerHTML = "\n                <img src=\"/assets/img/icons/edit-3.svg\" width=\"16\" height=\"16\" alt=\"Editar\" />\n            ";
      addressCell.appendChild(addressText);
      addressCell.appendChild(editButton);
    }
    row.appendChild(addressCell);
    if (showStatus) {
      var statusCell = document.createElement('td');
      var isEditingStatus = isEditing && (editOrder === null || editOrder === void 0 ? void 0 : editOrder.editStatus);
      if (isEditingStatus) {
        var statusSelect = document.createElement('select');
        statusSelect.className = 'form-select form-select js-order-status-select';
        statusSelect.dataset.orderId = order.id;
        ORDER_STATUS_OPTIONS.forEach(function (statusOption) {
          var option = document.createElement('option');
          option.value = statusOption.value;
          option.textContent = statusOption.label;
          option.selected = ((editOrder === null || editOrder === void 0 ? void 0 : editOrder.status) || order.status) === statusOption.value;
          statusSelect.appendChild(option);
        });
        statusCell.appendChild(statusSelect);
      } else {
        var statusText = document.createElement('span');
        statusText.textContent = order.status;
        statusText.className = 'me-2';
        var statusToggle = document.createElement('button');
        statusToggle.type = 'button';
        statusToggle.className = 'btn btn-link btn-sm p-0 align-baseline js-order-status-toggle';
        statusToggle.dataset.orderId = order.id;
        statusToggle.title = 'Editar status';
        statusToggle.innerHTML = "\n                    <svg width=\"16\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M15 8l-4.03 6L7 8h8z\" fill=\"currentColor\"/></svg>\n                ";
        statusCell.appendChild(statusText);
        statusCell.appendChild(statusToggle);
      }
      row.appendChild(statusCell);
    }
    if (showDeliveredDate) {
      var deliveredAtCell = document.createElement('td');
      deliveredAtCell.textContent = order.delivered_at ? new Date(order.delivered_at).toLocaleString('pt-BR') : '-';
      row.appendChild(deliveredAtCell);
    }
    tableBody.appendChild(row);
  });
}
function renderLoading(tableBody) {
  var columnCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  tableBody.innerHTML = "\n        <tr>\n            <td colspan=\"".concat(columnCount, "\" class=\"text-muted text-center\">\n                Carregando...\n            </td>\n        </tr>\n    ");
}
function renderError(tableBody, message) {
  var columnCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  tableBody.innerHTML = "\n        <tr>\n            <td colspan=\"".concat(columnCount, "\" class=\"text-danger text-center\">\n                ").concat(message, "\n            </td>\n        </tr>\n    ");
}

/***/ }),

/***/ "./resources/js/drivers/renderers/pagination-renderer.js":
/*!***************************************************************!*\
  !*** ./resources/js/drivers/renderers/pagination-renderer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPagination": () => (/* binding */ renderPagination),
/* harmony export */   "renderPaginationInfo": () => (/* binding */ renderPaginationInfo)
/* harmony export */ });
/* harmony import */ var _utils_url_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/url-utils.js */ "./resources/js/drivers/utils/url-utils.js");

function renderPagination(paginationContainer, links, onPageClick) {
  paginationContainer.innerHTML = '';
  if (!links || links.length === 0) {
    return;
  }
  links.forEach(function (link) {
    var pageItem = document.createElement('li');
    pageItem.classList.add('page-item');
    if (link.active) {
      pageItem.classList.add('active');
    }
    if (!link.url) {
      pageItem.classList.add('disabled');
    }
    var pageLink = document.createElement('button');
    pageLink.type = 'button';
    pageLink.classList.add('page-link');
    pageLink.innerHTML = (0,_utils_url_utils_js__WEBPACK_IMPORTED_MODULE_0__.formatPaginationLabel)(link.label);
    if (link.url) {
      pageLink.addEventListener('click', function () {
        var page = (0,_utils_url_utils_js__WEBPACK_IMPORTED_MODULE_0__.getPageFromUrl)(link.url);
        if (page) {
          onPageClick(page);
        }
      });
    }
    pageItem.appendChild(pageLink);
    paginationContainer.appendChild(pageItem);
  });
}
function renderPaginationInfo(paginationInfoContainer, result) {
  var _result$from, _result$to, _result$total;
  var from = (_result$from = result.from) !== null && _result$from !== void 0 ? _result$from : 0;
  var to = (_result$to = result.to) !== null && _result$to !== void 0 ? _result$to : 0;
  var total = (_result$total = result.total) !== null && _result$total !== void 0 ? _result$total : 0;
  paginationInfoContainer.textContent = "".concat(from, "-").concat(to, " de ").concat(total);
}

/***/ }),

/***/ "./resources/js/drivers/renderers/table-renderer.js":
/*!**********************************************************!*\
  !*** ./resources/js/drivers/renderers/table-renderer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderError": () => (/* binding */ renderError),
/* harmony export */   "renderLoading": () => (/* binding */ renderLoading),
/* harmony export */   "renderTable": () => (/* binding */ renderTable)
/* harmony export */ });
function renderTable(tableBody, drivers) {
  tableBody.innerHTML = '';
  if (!drivers || drivers.length === 0) {
    tableBody.innerHTML = "\n            <tr>\n                <td colspan=\"3\" class=\"text-muted text-center\">\n                    Nenhum registro encontrado.\n                </td>\n            </tr>\n        ";
    return;
  }
  drivers.forEach(function (driver) {
    var row = document.createElement('tr');
    if (driver.row_color) {
      row.classList.add(driver.row_color);
    }
    var nameCell = document.createElement('td');
    nameCell.textContent = driver.name;
    var ordersCell = document.createElement('td');
    ordersCell.appendChild(createLink(driver, 'orders', driver.orders_count));
    var deliveredCell = document.createElement('td');
    deliveredCell.appendChild(createLink(driver, 'delivered', driver.delivered_orders_count));
    row.appendChild(nameCell);
    row.appendChild(ordersCell);
    row.appendChild(deliveredCell);
    tableBody.appendChild(row);
  });
}
function createLink(driver, orderType, text) {
  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn btn-link p-0 js-driver-orders-link';
  button.dataset.driverId = driver.id;
  button.dataset.driverName = driver.name;
  button.dataset.orderType = orderType;
  button.textContent = text;
  return button;
}
function renderLoading(tableBody) {
  tableBody.innerHTML = "\n        <tr>\n            <td colspan=\"3\" class=\"text-muted text-center\">\n                Carregando...\n            </td>\n        </tr>\n    ";
}
function renderError(tableBody, message) {
  tableBody.innerHTML = "\n        <tr>\n            <td colspan=\"3\" class=\"text-danger text-center\">\n                ".concat(message, "\n            </td>\n        </tr>\n    ");
}

/***/ }),

/***/ "./resources/js/drivers/utils/date-utils.js":
/*!**************************************************!*\
  !*** ./resources/js/drivers/utils/date-utils.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDateToApi": () => (/* binding */ formatDateToApi),
/* harmony export */   "getPortugueseLocale": () => (/* binding */ getPortugueseLocale),
/* harmony export */   "parseDatePeriod": () => (/* binding */ parseDatePeriod)
/* harmony export */ });
function parseDatePeriod(datePeriod) {
  if (!datePeriod) {
    return {
      startDate: null,
      endDate: null
    };
  }
  var parts = datePeriod.split('-');
  if (parts.length !== 2) {
    return {
      startDate: null,
      endDate: null
    };
  }
  return {
    startDate: formatDateToApi(parts[0].trim()),
    endDate: formatDateToApi(parts[1].trim())
  };
}
function formatDateToApi(date) {
  var parts = date.split('/');
  if (parts.length !== 3) {
    return null;
  }
  var day = parts[0];
  var month = parts[1];
  var year = parts[2];
  return "".concat(year, "-").concat(month, "-").concat(day);
}
function getPortugueseLocale() {
  return {
    format: 'DD/MM/YYYY',
    separator: ' - ',
    applyLabel: 'Aplicar',
    cancelLabel: 'Cancelar',
    customRangeLabel: 'Personalizado',
    weekLabel: 'S',
    daysOfWeek: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    firstDay: 0
  };
}

/***/ }),

/***/ "./resources/js/drivers/utils/params-utils.js":
/*!****************************************************!*\
  !*** ./resources/js/drivers/utils/params-utils.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildParams": () => (/* binding */ buildParams)
/* harmony export */ });
/* harmony import */ var _utils_date_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date-utils.js */ "./resources/js/drivers/utils/date-utils.js");

function buildParams(page, filters) {
  var params = new URLSearchParams();
  params.append('page', page);
  params.append('per_page', filters.perPage);
  if (filters.status && filters.status !== 'all') {
    params.append('status', filters.status);
  }
  var dates = (0,_utils_date_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseDatePeriod)(filters.datePeriod);
  if (dates.startDate) {
    params.append('start_date', dates.startDate);
  }
  if (dates.endDate) {
    params.append('end_date', dates.endDate);
  }
  return params;
}

/***/ }),

/***/ "./resources/js/drivers/utils/url-utils.js":
/*!*************************************************!*\
  !*** ./resources/js/drivers/utils/url-utils.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatPaginationLabel": () => (/* binding */ formatPaginationLabel),
/* harmony export */   "getPageFromUrl": () => (/* binding */ getPageFromUrl)
/* harmony export */ });
function getPageFromUrl(url) {
  var urlObject = new URL(url);
  return urlObject.searchParams.get('page');
}
function formatPaginationLabel(label) {
  if (label.includes('Previous')) {
    return '&lsaquo;';
  }
  if (label.includes('Next')) {
    return '&rsaquo;';
  }
  return label;
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************!*\
  !*** ./resources/js/drivers/drivers-list.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_drivers_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/drivers-api.js */ "./resources/js/drivers/api/drivers-api.js");
/* harmony import */ var _renderers_table_renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderers/table-renderer.js */ "./resources/js/drivers/renderers/table-renderer.js");
/* harmony import */ var _renderers_pagination_renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderers/pagination-renderer.js */ "./resources/js/drivers/renderers/pagination-renderer.js");
/* harmony import */ var _renderers_date_picker_renderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderers/date-picker-renderer.js */ "./resources/js/drivers/renderers/date-picker-renderer.js");
/* harmony import */ var _orders_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders-modal.js */ "./resources/js/drivers/orders-modal.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





document.addEventListener('DOMContentLoaded', function () {
  var elements = {
    tableBody: document.getElementById('driversTableBody'),
    pagination: document.getElementById('driversPagination'),
    paginationInfo: document.getElementById('driversPaginationInfo'),
    statusSelect: document.getElementById('status'),
    datePeriodInput: document.getElementById('date_period'),
    perPageSelect: document.getElementById('perPage'),
    refreshButton: document.getElementById('refreshDriversButton')
  };
  var currentPage = 1;
  (0,_renderers_date_picker_renderer_js__WEBPACK_IMPORTED_MODULE_3__.initDateRangePicker)($('#date_period'), function () {
    return handleFetchDrivers(1);
  }, function () {
    return handleFetchDrivers(1);
  });
  (0,_orders_modal_js__WEBPACK_IMPORTED_MODULE_4__.initDriverOrdersModal)();
  elements.tableBody.addEventListener('click', function (event) {
    var button = event.target.closest('.js-driver-orders-link');
    if (!button) {
      return;
    }
    event.preventDefault();
    (0,_orders_modal_js__WEBPACK_IMPORTED_MODULE_4__.openDriverOrdersModal)(button.dataset.driverId, button.dataset.driverName, button.dataset.orderType, {
      datePeriod: elements.datePeriodInput.value
    });
  });
  elements.refreshButton.addEventListener('click', function () {
    return handleFetchDrivers(1);
  });
  elements.statusSelect.addEventListener('change', function () {
    return handleFetchDrivers(1);
  });
  elements.perPageSelect.addEventListener('change', function () {
    return handleFetchDrivers(1);
  });
  function handleFetchDrivers() {
    return _handleFetchDrivers.apply(this, arguments);
  }
  function _handleFetchDrivers() {
    _handleFetchDrivers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var page,
        filters,
        result,
        _args = arguments,
        _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
            currentPage = page;
            (0,_renderers_table_renderer_js__WEBPACK_IMPORTED_MODULE_1__.renderLoading)(elements.tableBody);
            _context.p = 1;
            filters = getFilters();
            _context.n = 2;
            return (0,_api_drivers_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchDriversFromAPI)(page, filters);
          case 2:
            result = _context.v;
            (0,_renderers_table_renderer_js__WEBPACK_IMPORTED_MODULE_1__.renderTable)(elements.tableBody, result.data);
            (0,_renderers_pagination_renderer_js__WEBPACK_IMPORTED_MODULE_2__.renderPagination)(elements.pagination, result.links, handleFetchDrivers);
            (0,_renderers_pagination_renderer_js__WEBPACK_IMPORTED_MODULE_2__.renderPaginationInfo)(elements.paginationInfo, result);
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            (0,_renderers_table_renderer_js__WEBPACK_IMPORTED_MODULE_1__.renderError)(elements.tableBody, _t.message);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return _handleFetchDrivers.apply(this, arguments);
  }
  function getFilters() {
    return {
      status: elements.statusSelect.value,
      perPage: elements.perPageSelect.value,
      datePeriod: elements.datePeriodInput.value
    };
  }
  handleFetchDrivers();
});
})();

/******/ })()
;