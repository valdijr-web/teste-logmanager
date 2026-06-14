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
/*!********************************************!*\
  !*** ./resources/js/drivers/monitoring.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ "./resources/js/app.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Elementos HTML

var antennasTableBody = document.getElementById('driversTableBody');
var antennasPaginationContainer = document.getElementById('antennasPagination');
var perPageSelect = document.getElementById('perPageSelect');
var applyFiltersButton = document.getElementById('applyFiltersButton');
var clearFiltersButton = document.getElementById('clearFiltersButton');

// Variável para verificar se o usuário está autenticado
// const isAuthenticated = !!localStorage.getItem('authToken');

// --- Renderizar Lista de Antenas na Tabela ---
function renderAntennas(antennas) {
  antennasTableBody.innerHTML = '';
  if (antennas.length === 0) {
    antennasTableBody.innerHTML = '<tr><td colspan="7" class="text-center">Nenhuma motorista encontrado com os filtros aplicados.</td></tr>';
    return;
  }
  antennas.forEach(function (antenna) {
    var implementationDate = antenna.implementation_date ? new Date(antenna.implementation_date).toLocaleDateString() : 'N/A';
    var actionButtonsHtml = "\n                    <a href=\"/antennas/show/".concat(antenna.id, "\" class=\"btn btn-info btn-sm me-1\" title=\"Ver Detalhes\"><i class=\"fas fa-eye\"></i></a>\n                ");

    // Ações de editar e excluir aparecem apenas se o usuário estiver autenticado
    // if (isAuthenticated) {
    //     actionButtonsHtml += `
    //             <a href="/antennas/edit/${antenna.id}" class="btn btn-warning btn-sm me-1" title="Editar"><i class="fas fa-edit"></i></a>
    //             <button type="button" class="btn btn-danger btn-sm" title="Excluir" data-description="${antenna.description}" data-id="${antenna.id}"><i class="fas fa-trash"></i></button>
    //         `;
    // }

    var row = "\n                    <tr>\n                        <td>".concat(antenna.name, "</td>\n                        <td>").concat(antenna.orders_count, "</td>\n                        <td>").concat(antenna.delivered_orders_count, "</td>\n                    </tr>\n                ");
    antennasTableBody.innerHTML += row;
  });
}

// --- Carregar Lista de Antenas (com Paginação e Filtros) ---
function fetchAntennas() {
  return _fetchAntennas.apply(this, arguments);
} // --- Renderizar Links de Paginação ---
function _fetchAntennas() {
  _fetchAntennas = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var page,
      perPage,
      url,
      response,
      paginatedAntennas,
      errorData,
      _args2 = arguments,
      _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          page = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 1;
          antennasTableBody.innerHTML = '<tr><td colspan="7" class="text-center"><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Carregando...</td></tr>';
          antennasPaginationContainer.innerHTML = ''; // Limpa paginação anterior
          perPage = perPageSelect.value; // Constrói a URL com os parâmetros de paginação e filtro
          url = "".concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, "/drivers-monitoring?page=").concat(page, "&per_page=").concat(perPage);
          _context2.p = 1;
          _context2.n = 2;
          return fetch(url, {
            method: 'GET',
            headers: {
              'Accept': 'application/json'
            }
          });
        case 2:
          response = _context2.v;
          if (!response.ok) {
            _context2.n = 4;
            break;
          }
          _context2.n = 3;
          return response.json();
        case 3:
          paginatedAntennas = _context2.v;
          // Data from LengthAwarePaginator
          renderAntennas(paginatedAntennas.data);
          renderPagination(paginatedAntennas);
          _context2.n = 6;
          break;
        case 4:
          _context2.n = 5;
          return response.json();
        case 5:
          errorData = _context2.v;
          console.error('Erro ao buscar antenas:', errorData.message || response.statusText);
          antennasTableBody.innerHTML = "<tr><td colspan=\"7\" class=\"text-center text-danger\">Erro ao carregar rgistros.</td></tr>";
        case 6:
          _context2.n = 8;
          break;
        case 7:
          _context2.p = 7;
          _t2 = _context2.v;
          console.error('Erro de rede ao buscar antenas:', _t2);
          antennasTableBody.innerHTML = '<tr><td colspan="7" class="text-center text-danger">Erro de conexão. Verifique sua rede.</td></tr>';
        case 8:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 7]]);
  }));
  return _fetchAntennas.apply(this, arguments);
}
function renderPagination(paginationData) {
  antennasPaginationContainer.innerHTML = ''; // Limpa os links de paginação

  var current_page = paginationData.current_page,
    last_page = paginationData.last_page,
    links = paginationData.links,
    prev_page_url = paginationData.prev_page_url,
    next_page_url = paginationData.next_page_url;

  // Botão "Anterior"
  var prevLinkClass = prev_page_url ? 'page-item' : 'page-item disabled';
  var prevLink = "<li class=\"".concat(prevLinkClass, "\">\n                                <a class=\"page-link\" href=\"#\" data-page=\"").concat(current_page - 1, "\" aria-label=\"Anterior\">\n                                    <span aria-hidden=\"true\">&laquo;</span>\n                                </a>\n                              </li>");
  antennasPaginationContainer.innerHTML += prevLink;

  // Links numéricos (usando o array 'links' dentro de paginationData)
  links.forEach(function (link) {
    // Filtra os links "previous" e "next" que já são tratados
    if (link.url === null || link.label.includes('Previous') || link.label.includes('Next')) {
      return;
    }
    var pageNumber = parseInt(link.label);
    var liClass = link.active ? 'page-item active' : 'page-item';
    var aContent = link.label;
    var pageLink = "<li class=\"".concat(liClass, "\">\n                                    <a class=\"page-link\" href=\"#\" data-page=\"").concat(pageNumber, "\">").concat(aContent, "</a>\n                                  </li>");
    antennasPaginationContainer.innerHTML += pageLink;
  });

  // Botão "Próximo"
  var nextLinkClass = next_page_url ? 'page-item' : 'page-item disabled';
  var nextLink = "<li class=\"".concat(nextLinkClass, "\">\n                                <a class=\"page-link\" href=\"#\" data-page=\"").concat(current_page + 1, "\" aria-label=\"Pr\xF3ximo\">\n                                    <span aria-hidden=\"true\">&raquo;</span>\n                                </a>\n                              </li>");
  antennasPaginationContainer.innerHTML += nextLink;

  // Adiciona event listeners para os links de paginação
  antennasPaginationContainer.querySelectorAll('.page-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var page = parseInt(e.currentTarget.dataset.page);
      if (!isNaN(page) && page > 0 && page <= last_page) {
        fetchAntennas(page);
      }
    });
  });
}

// --- Event Listener para Deletar Antena ---
document.body.addEventListener('click', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
    var deleteButton, antennaId, antenna_description, headers, response, errorData, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          // checkAuthStatus();
          deleteButton = e.target.closest('.btn-danger');
          if (!deleteButton) {
            _context.n = 8;
            break;
          }
          antennaId = deleteButton.dataset.id;
          antenna_description = deleteButton.dataset.description;
          if (!confirm("Tem certeza que deseja excluir a antena ".concat(antenna_description, " - UUID ").concat(antennaId, "?"))) {
            _context.n = 8;
            break;
          }
          headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer ".concat(token)
          };
          _context.p = 1;
          _context.n = 2;
          return fetch("".concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, "/antennas/").concat(antennaId), {
            method: 'DELETE',
            headers: headers
          });
        case 2:
          response = _context.v;
          if (!response.ok) {
            _context.n = 3;
            break;
          }
          showAlert('Antena excluída com sucesso!', 'success');
          fetchAntennas(); // Recarregar lista (voltar para a página 1 para simplicidade)
          _context.n = 6;
          break;
        case 3:
          if (!(response.status === 401 || response.status === 403)) {
            _context.n = 4;
            break;
          }
          showAlert(response.message + 'Você não tem permissão para realizar esta ação. Faça login ou sua sessão expirou.', 'warning');
          // Opcional: redirecionar para a página de login
          _context.n = 6;
          break;
        case 4:
          _context.n = 5;
          return response.json();
        case 5:
          errorData = _context.v;
          showAlert("Erro ao excluir antena: ".concat(errorData.message || 'Erro desconhecido'), 'danger');
        case 6:
          _context.n = 8;
          break;
        case 7:
          _context.p = 7;
          _t = _context.v;
          console.error('Erro de rede ao excluir antena:', _t);
          showAlert('Erro de conexão ao excluir antena.', 'danger');
        case 8:
          return _context.a(2);
      }
    }, _callee, null, [[1, 7]]);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

// --- Mostrar/Esconder botão 'Cadastrar Nova Antena' e outras ações autenticadas ---
function setupAuthenticatedElements() {
  // if (isAuthenticated) {
  //     document.querySelectorAll('.authenticated-only-element').forEach(el => {
  //         el.style.display = 'block'; // Ou 'flex', 'inline-block' dependendo do elemento
  //     });
  // } else {
  //     document.querySelectorAll('.authenticated-only-element').forEach(el => {
  //         el.style.display = 'none';
  //     });
  // }
}

// --- Event Listeners para Filtros e Paginação Inicial ---
document.addEventListener('DOMContentLoaded', function () {
  setupAuthenticatedElements();
  fetchAntennas();

  // Event listener para o botão de aplicar filtros
  applyFiltersButton.addEventListener('click', function () {
    fetchAntennas(1); // Reinicia para a primeira página ao aplicar filtros
  });

  // Event listener para o botão de limpar filtros
  clearFiltersButton.addEventListener('click', function () {
    filterDescriptionInput.value = ''; // Limpa o campo de descrição
    filterStateSelect.value = ''; // Reseta o seletor de estado para "Todos"
    fetchAntennas(1); // Recarrega a lista com filtros limpos
  });

  // Event listeners para inputs de filtro (apertar Enter)
  filterDescriptionInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') fetchAntennas(1);
  });
  filterStateSelect.addEventListener('change', function () {
    fetchAntennas(1); // Reinicia para a primeira página ao mudar o estado
  });

  // Event listener para o seletor de itens por página
  perPageSelect.addEventListener('change', function () {
    fetchAntennas(1); // Reinicia para a primeira página ao mudar o 'per_page'
  });
});
})();

/******/ })()
;