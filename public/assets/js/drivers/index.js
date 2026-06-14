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
/*!***************************************!*\
  !*** ./resources/js/drivers/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ "./resources/js/app.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Elementos HTML

document.addEventListener('DOMContentLoaded', function () {
  var tableBody = document.getElementById('driversTableBody');
  var pagination = document.getElementById('driversPagination');
  var paginationInfo = document.getElementById('driversPaginationInfo');
  var statusSelect = document.getElementById('status');
  var datePeriodInput = document.getElementById('date_period');
  var perPageSelect = document.getElementById('perPage');
  var refreshButton = document.getElementById('refreshDriversButton');
  $('#date_period').daterangepicker({
    showDropdowns: true,
    linkedCalendars: false,
    autoApply: false,
    autoUpdateInput: false,
    opens: 'right',
    drops: 'down',
    locale: {
      format: 'DD/MM/YYYY',
      separator: ' - ',
      applyLabel: 'Aplicar',
      cancelLabel: 'Cancelar',
      customRangeLabel: 'Personalizado',
      weekLabel: 'S',
      daysOfWeek: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      firstDay: 0
    }
  });
  $('#date_period').on('show.daterangepicker', function (ev, picker) {
    var applyButton = $(picker.container).find('.applyBtn');
    var cancelButton = $(picker.container).find('.cancelBtn');
    applyButton.removeClass('btn-primary').addClass('btn-link');
    cancelButton.removeClass('btn-default btn-sm').addClass('btn btn-link');
  });
  $('#date_period').on('apply.daterangepicker', function (event, picker) {
    var startDate = picker.startDate.format('DD/MM/YYYY');
    var endDate = picker.endDate.format('DD/MM/YYYY');
    this.value = "".concat(startDate, " - ").concat(endDate);
    fetchDrivers(1);
  });
  $('#date_period').on('cancel.daterangepicker', function () {
    this.value = '';
    fetchDrivers(1);
  });
  var currentPage = 1;
  function fetchDrivers() {
    return _fetchDrivers.apply(this, arguments);
  }
  function _fetchDrivers() {
    _fetchDrivers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var page,
        params,
        response,
        result,
        _args = arguments,
        _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
            currentPage = page;
            renderLoading();
            params = buildParams(page);
            _context.p = 1;
            _context.n = 2;
            return fetch("".concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, "/drivers?").concat(params.toString()), {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
              }
            });
          case 2:
            response = _context.v;
            if (response.ok) {
              _context.n = 3;
              break;
            }
            throw new Error('Erro ao carregar motoristas.');
          case 3:
            _context.n = 4;
            return response.json();
          case 4:
            result = _context.v;
            renderTable(result.data);
            renderPagination(result);
            renderPaginationInfo(result);
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            renderError(_t.message);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[1, 5]]);
    }));
    return _fetchDrivers.apply(this, arguments);
  }
  function buildParams(page) {
    var params = new URLSearchParams();
    var status = statusSelect.value;
    var perPage = perPageSelect.value;
    var datePeriod = datePeriodInput.value;
    params.append('page', page);
    params.append('per_page', perPage);
    if (status && status !== 'all') {
      params.append('status', status);
    }
    var dates = parseDatePeriod(datePeriod);
    console.log(dates);
    if (dates.startDate) {
      params.append('start_date', dates.startDate);
    }
    if (dates.endDate) {
      params.append('end_date', dates.endDate);
    }
    return params;
  }
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
  function renderTable(drivers) {
    tableBody.innerHTML = '';
    if (!drivers || drivers.length === 0) {
      tableBody.innerHTML = "\n                <tr>\n                    <td colspan=\"3\" class=\"text-muted text-center\">\n                        Nenhum registro encontrado.\n                    </td>\n                </tr>\n            ";
      return;
    }
    drivers.forEach(function (driver) {
      var row = document.createElement('tr');
      if (driver.row_color) {
        row.classList.add(driver.row_color);
      }
      row.innerHTML = "\n                <td>".concat(driver.name, "</td>\n                <td>").concat(driver.orders_count, "</td>\n                <td>").concat(driver.delivered_orders_count, "</td>\n            ");
      tableBody.appendChild(row);
    });
  }
  function renderPagination(result) {
    pagination.innerHTML = '';
    if (!result.links || result.links.length === 0) {
      return;
    }
    result.links.forEach(function (link) {
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
      pageLink.innerHTML = formatPaginationLabel(link.label);
      if (link.url) {
        pageLink.addEventListener('click', function () {
          var page = getPageFromUrl(link.url);
          if (page) {
            fetchDrivers(page);
          }
        });
      }
      pageItem.appendChild(pageLink);
      pagination.appendChild(pageItem);
    });
  }
  function renderPaginationInfo(result) {
    var _result$from, _result$to, _result$total;
    var from = (_result$from = result.from) !== null && _result$from !== void 0 ? _result$from : 0;
    var to = (_result$to = result.to) !== null && _result$to !== void 0 ? _result$to : 0;
    var total = (_result$total = result.total) !== null && _result$total !== void 0 ? _result$total : 0;
    paginationInfo.textContent = "".concat(from, "-").concat(to, " de ").concat(total);
  }
  function renderLoading() {
    tableBody.innerHTML = "\n            <tr>\n                <td colspan=\"3\" class=\"text-muted text-center\">\n                    Carregando...\n                </td>\n            </tr>\n        ";
  }
  function renderError(message) {
    tableBody.innerHTML = "\n            <tr>\n                <td colspan=\"3\" class=\"text-danger text-center\">\n                    ".concat(message, "\n                </td>\n            </tr>\n        ");
  }
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
  refreshButton.addEventListener('click', function () {
    fetchDrivers(1);
  });
  statusSelect.addEventListener('change', function () {
    fetchDrivers(1);
  });
  perPageSelect.addEventListener('change', function () {
    fetchDrivers(1);
  });
  fetchDrivers();
});
})();

/******/ })()
;