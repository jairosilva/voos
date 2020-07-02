(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aeroportos-mais-proximos-mais-distantes/aeroportos-mais-proximos-mais-distantes.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/aeroportos-mais-proximos-mais-distantes/aeroportos-mais-proximos-mais-distantes.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AeroportosMaisProximosMaisDistantesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeroportosMaisProximosMaisDistantesComponent", function() { return AeroportosMaisProximosMaisDistantesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _voos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../voos.service */ "./src/app/voos.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");







function AeroportosMaisProximosMaisDistantesComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 13);
} }
function AeroportosMaisProximosMaisDistantesComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r15 + 1, " ");
} }
function AeroportosMaisProximosMaisDistantesComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aeroporto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AeroportosMaisProximosMaisDistantesComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r16.sigla);
} }
function AeroportosMaisProximosMaisDistantesComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mais Pr\u00F3ximo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AeroportosMaisProximosMaisDistantesComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.aeroporto_mais_proximo, " ");
} }
function AeroportosMaisProximosMaisDistantesComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dist\u00E2ncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AeroportosMaisProximosMaisDistantesComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r18.menor_distancia, "1.2-2", "pt"), " ");
} }
function AeroportosMaisProximosMaisDistantesComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mais Distante");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AeroportosMaisProximosMaisDistantesComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.aeroporto_mais_distante, " ");
} }
function AeroportosMaisProximosMaisDistantesComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dist\u00E2ncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AeroportosMaisProximosMaisDistantesComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r20.maior_distancia, "1.2-2", "pt"), " ");
} }
function AeroportosMaisProximosMaisDistantesComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function AeroportosMaisProximosMaisDistantesComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_1___default.a, 'pt');
class AeroportosMaisProximosMaisDistantesComponent {
    constructor(voosService) {
        this.voosService = voosService;
        this.displayedColumns = [
            'linha',
            'sigla',
            'aeroporto_mais_proximo',
            'menor_distancia',
            'aeroporto_mais_distante',
            'maior_distancia',
        ];
    }
    ngOnInit() {
        this.atualizaTabela();
        this.voosService.routerInfo.subscribe((data) => {
            this.atualizaTabela();
        }, (error) => {
            console.log('Erro ao buscar os dados.!!!!!');
        });
    }
    atualizaTabela() {
        this.voosService.buscaDistanciasEntreAeroportos().subscribe((data) => {
            this.dataSource = data;
        }, (error) => {
            console.log('Erro ao buscar os dados.');
        });
    }
}
AeroportosMaisProximosMaisDistantesComponent.ɵfac = function AeroportosMaisProximosMaisDistantesComponent_Factory(t) { return new (t || AeroportosMaisProximosMaisDistantesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_voos_service__WEBPACK_IMPORTED_MODULE_3__["VoosService"])); };
AeroportosMaisProximosMaisDistantesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeroportosMaisProximosMaisDistantesComponent, selectors: [["app-aeroportos-mais-proximos-mais-distantes"]], decls: 24, vars: 3, consts: [[1, "d-flex", "justify-content-center"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "linha"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["id", "numeroColuna", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "sigla"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "aeroporto_mais_proximo"], ["matColumnDef", "menor_distancia"], ["matColumnDef", "aeroporto_mais_distante"], ["matColumnDef", "maior_distancia"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["id", "numeroColuna", "mat-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function AeroportosMaisProximosMaisDistantesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Maiores e Menores Dist\u00E2ncias entre Aeroportos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AeroportosMaisProximosMaisDistantesComponent_th_5_Template, 1, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AeroportosMaisProximosMaisDistantesComponent_td_6_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AeroportosMaisProximosMaisDistantesComponent_th_8_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AeroportosMaisProximosMaisDistantesComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AeroportosMaisProximosMaisDistantesComponent_th_11_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AeroportosMaisProximosMaisDistantesComponent_td_12_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AeroportosMaisProximosMaisDistantesComponent_th_14_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AeroportosMaisProximosMaisDistantesComponent_td_15_Template, 3, 5, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AeroportosMaisProximosMaisDistantesComponent_th_17_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AeroportosMaisProximosMaisDistantesComponent_td_18_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AeroportosMaisProximosMaisDistantesComponent_th_20_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AeroportosMaisProximosMaisDistantesComponent_td_21_Template, 3, 5, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AeroportosMaisProximosMaisDistantesComponent_tr_22_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AeroportosMaisProximosMaisDistantesComponent_tr_23_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: ["div {\r\n  background-color: #34649f;\r\n}\r\n\r\n[mat-table] {\r\n  background-color: #34649f;\r\n}\r\n\r\n[mat-cell], [mat-header-cell] {\r\n  background-color: #34649f;\r\n  color: white;\r\n}\r\n\r\nlabel {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWVyb3BvcnRvcy1tYWlzLXByb3hpbW9zLW1haXMtZGlzdGFudGVzL2Flcm9wb3J0b3MtbWFpcy1wcm94aW1vcy1tYWlzLWRpc3RhbnRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2Flcm9wb3J0b3MtbWFpcy1wcm94aW1vcy1tYWlzLWRpc3RhbnRlcy9hZXJvcG9ydG9zLW1haXMtcHJveGltb3MtbWFpcy1kaXN0YW50ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0NjQ5ZjtcclxufVxyXG5cclxuW21hdC10YWJsZV0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDY0OWY7XHJcbn1cclxuXHJcblttYXQtY2VsbF0sIFttYXQtaGVhZGVyLWNlbGxdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ2NDlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AeroportosMaisProximosMaisDistantesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'app-aeroportos-mais-proximos-mais-distantes',
                templateUrl: './aeroportos-mais-proximos-mais-distantes.component.html',
                styleUrls: ['./aeroportos-mais-proximos-mais-distantes.component.css'],
            }]
    }], function () { return [{ type: _voos_service__WEBPACK_IMPORTED_MODULE_3__["VoosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");










class AppMaterialModule {
}
AppMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppMaterialModule });
AppMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppMaterialModule_Factory(t) { return new (t || AppMaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        ],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"]], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                ],
                exports: [
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _voos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voos.service */ "./src/app/voos.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _estado_com_mais_aeroportos_estado_com_mais_aeroportos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./estado-com-mais-aeroportos/estado-com-mais-aeroportos.component */ "./src/app/estado-com-mais-aeroportos/estado-com-mais-aeroportos.component.ts");
/* harmony import */ var _lista_viagens_longas_lista_viagens_longas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista-viagens-longas/lista-viagens-longas.component */ "./src/app/lista-viagens-longas/lista-viagens-longas.component.ts");
/* harmony import */ var _aeroportos_mais_proximos_mais_distantes_aeroportos_mais_proximos_mais_distantes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aeroportos-mais-proximos-mais-distantes/aeroportos-mais-proximos-mais-distantes.component */ "./src/app/aeroportos-mais-proximos-mais-distantes/aeroportos-mais-proximos-mais-distantes.component.ts");








const _c0 = function (a0) { return { "spinner-border spinner-border-sm": a0 }; };
class AppComponent {
    constructor(voosService, http) {
        this.voosService = voosService;
        this.http = http;
        this.dataViagem = '';
        this.processando = false;
        this.textoBotao = 'Processar';
    }
    ngOnInit() {
        this.dataViagem = this.voosService.dataViagem;
        this.voosService.processamentoConcluido.subscribe((data) => {
            this.processando = false;
            this.textoBotao = 'Processar';
        });
    }
    processaVoos() {
        this.processando = true;
        this.textoBotao = 'Processando';
        this.voosService.atualizaDados();
    }
    apaga() {
        this.voosService.apagaDados();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_voos_service__WEBPACK_IMPORTED_MODULE_1__["VoosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 17, vars: 7, consts: [["id", "btnProcessa", "type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["role", "status", "aria-hidden", "true", 3, "ngClass"], ["id", "btnApagar", "type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "w-100", "row", "d-flex", "justify-content-center"], [1, "w-100", "h-100", "row"], [1, "w-50"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.processaVoos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.apaga(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Apagar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-estado-com-mais-aeroportos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-lista-viagens-longas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-aeroportos-mais-proximos-mais-distantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Viagens no dia ", ctx.dataViagem, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.processando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.processando));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.textoBotao, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.processando);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _estado_com_mais_aeroportos_estado_com_mais_aeroportos_component__WEBPACK_IMPORTED_MODULE_4__["EstadoComMaisAeroportosComponent"], _lista_viagens_longas_lista_viagens_longas_component__WEBPACK_IMPORTED_MODULE_5__["ListaViagensLongasComponent"], _aeroportos_mais_proximos_mais_distantes_aeroportos_mais_proximos_mais_distantes_component__WEBPACK_IMPORTED_MODULE_6__["AeroportosMaisProximosMaisDistantesComponent"]], styles: [".column[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], #data-viagem[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  background-color: #34649f;\r\n  color: white;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: #064088;\r\n  padding: 25px;\r\n  text-align: center;\r\n  font-size: 35px;\r\n  color: white;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   #btnProcessa[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 90px;\r\n  background-color: #d4792f;\r\n  color: white;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   #btnApagar[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 10px;\r\n  background-color: #d4792f;\r\n  color: white;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #ec7c1e;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbHVtbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuYnV0dG9uLFxyXG4jZGF0YS12aWFnZW0ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0NjQ5ZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjQwODg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaGVhZGVyICNidG5Qcm9jZXNzYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogOTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQ3OTJmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaGVhZGVyICNidG5BcGFnYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0NzkyZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmhlYWRlciBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzdjMWU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _voos_service__WEBPACK_IMPORTED_MODULE_1__["VoosService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _lista_viagens_longas_lista_viagens_longas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista-viagens-longas/lista-viagens-longas.component */ "./src/app/lista-viagens-longas/lista-viagens-longas.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _estado_com_mais_aeroportos_estado_com_mais_aeroportos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./estado-com-mais-aeroportos/estado-com-mais-aeroportos.component */ "./src/app/estado-com-mais-aeroportos/estado-com-mais-aeroportos.component.ts");
/* harmony import */ var _aeroportos_mais_proximos_mais_distantes_aeroportos_mais_proximos_mais_distantes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aeroportos-mais-proximos-mais-distantes/aeroportos-mais-proximos-mais-distantes.component */ "./src/app/aeroportos-mais-proximos-mais-distantes/aeroportos-mais-proximos-mais-distantes.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _lista_viagens_longas_lista_viagens_longas_component__WEBPACK_IMPORTED_MODULE_5__["ListaViagensLongasComponent"],
        _estado_com_mais_aeroportos_estado_com_mais_aeroportos_component__WEBPACK_IMPORTED_MODULE_7__["EstadoComMaisAeroportosComponent"],
        _aeroportos_mais_proximos_mais_distantes_aeroportos_mais_proximos_mais_distantes_component__WEBPACK_IMPORTED_MODULE_8__["AeroportosMaisProximosMaisDistantesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _lista_viagens_longas_lista_viagens_longas_component__WEBPACK_IMPORTED_MODULE_5__["ListaViagensLongasComponent"],
                    _estado_com_mais_aeroportos_estado_com_mais_aeroportos_component__WEBPACK_IMPORTED_MODULE_7__["EstadoComMaisAeroportosComponent"],
                    _aeroportos_mais_proximos_mais_distantes_aeroportos_mais_proximos_mais_distantes_component__WEBPACK_IMPORTED_MODULE_8__["AeroportosMaisProximosMaisDistantesComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/estado-com-mais-aeroportos/estado-com-mais-aeroportos.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/estado-com-mais-aeroportos/estado-com-mais-aeroportos.component.ts ***!
  \************************************************************************************/
/*! exports provided: EstadoComMaisAeroportosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoComMaisAeroportosComponent", function() { return EstadoComMaisAeroportosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _voos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../voos.service */ "./src/app/voos.service.ts");



class EstadoComMaisAeroportosComponent {
    constructor(voosService) {
        this.voosService = voosService;
        this.siglaUf = '';
        this.quantidadeAeroportos = 0;
    }
    ngOnInit() {
        this.voosService.routerInfo.subscribe((data) => {
            this.atualizaDados();
        }, (error) => {
            console.log('Erro ao buscar os dados.!!!!!');
        });
    }
    atualizaDados() {
        this.voosService.buscaEstadoComMaisAeroportos().subscribe((data) => {
            this.siglaUf = data[0].uf;
            this.quantidadeAeroportos = data[0].qtd;
        }, (error) => {
            console.log('Erro ao buscar os estagiários.');
        });
    }
}
EstadoComMaisAeroportosComponent.ɵfac = function EstadoComMaisAeroportosComponent_Factory(t) { return new (t || EstadoComMaisAeroportosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_voos_service__WEBPACK_IMPORTED_MODULE_1__["VoosService"])); };
EstadoComMaisAeroportosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EstadoComMaisAeroportosComponent, selectors: [["app-estado-com-mais-aeroportos"]], decls: 4, vars: 2, template: function EstadoComMaisAeroportosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Estado com maior n\u00FAmero de aeroportos: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.siglaUf, " (", ctx.quantidadeAeroportos, " aeroportos)");
    } }, styles: ["label[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: #34649f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXN0YWRvLWNvbS1tYWlzLWFlcm9wb3J0b3MvZXN0YWRvLWNvbS1tYWlzLWFlcm9wb3J0b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9lc3RhZG8tY29tLW1haXMtYWVyb3BvcnRvcy9lc3RhZG8tY29tLW1haXMtYWVyb3BvcnRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ2NDlmO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstadoComMaisAeroportosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-estado-com-mais-aeroportos',
                templateUrl: './estado-com-mais-aeroportos.component.html',
                styleUrls: ['./estado-com-mais-aeroportos.component.css'],
            }]
    }], function () { return [{ type: _voos_service__WEBPACK_IMPORTED_MODULE_1__["VoosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/lista-viagens-longas/lista-viagens-longas.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/lista-viagens-longas/lista-viagens-longas.component.ts ***!
  \************************************************************************/
/*! exports provided: ListaViagensLongasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaViagensLongasComponent", function() { return ListaViagensLongasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _voos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../voos.service */ "./src/app/voos.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");







function ListaViagensLongasComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 13);
} }
function ListaViagensLongasComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r15 + 1, " ");
} }
function ListaViagensLongasComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Origem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListaViagensLongasComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r16.origem);
} }
function ListaViagensLongasComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Destino");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListaViagensLongasComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.destino);
} }
function ListaViagensLongasComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dist\u00E2ncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListaViagensLongasComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r18.distancia, "1.2-2", "pt"), " ");
} }
function ListaViagensLongasComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dura\u00E7ao");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListaViagensLongasComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.duracao, " ");
} }
function ListaViagensLongasComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aeronave");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListaViagensLongasComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r20.aeronave);
} }
function ListaViagensLongasComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function ListaViagensLongasComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_1___default.a, 'pt');
class ListaViagensLongasComponent {
    constructor(voosService) {
        this.voosService = voosService;
        this.dataSource = [];
        this.displayedColumns = [
            'linha',
            'origem',
            'destino',
            'distancia',
            'duracao',
            'aeronave',
        ];
    }
    ngOnInit() {
        this.atualizaTabela();
        this.voosService.routerInfo.subscribe((data) => {
            this.atualizaTabela();
        }, (error) => {
            console.log('Erro ao buscar os dados.!!!!!');
        });
    }
    atualizaTabela() {
        this.voosService.buscaVoos().subscribe((data) => {
            this.dataSource = data;
        }, (error) => {
            console.log('Erro ao buscar os dados.');
        });
    }
}
ListaViagensLongasComponent.ɵfac = function ListaViagensLongasComponent_Factory(t) { return new (t || ListaViagensLongasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_voos_service__WEBPACK_IMPORTED_MODULE_3__["VoosService"])); };
ListaViagensLongasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaViagensLongasComponent, selectors: [["app-lista-viagens-longas"]], decls: 25, vars: 3, consts: [[1, "d-flex", "justify-content-center"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "linha"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["id", "numeroColuna", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "origem"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "destino"], ["matColumnDef", "distancia"], ["matColumnDef", "duracao"], ["matColumnDef", "aeronave"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["id", "numeroColuna", "mat-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ListaViagensLongasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Viagens mais Longas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListaViagensLongasComponent_th_6_Template, 1, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListaViagensLongasComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListaViagensLongasComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListaViagensLongasComponent_td_10_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListaViagensLongasComponent_th_12_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListaViagensLongasComponent_td_13_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListaViagensLongasComponent_th_15_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListaViagensLongasComponent_td_16_Template, 3, 5, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ListaViagensLongasComponent_th_18_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ListaViagensLongasComponent_td_19_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ListaViagensLongasComponent_th_21_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ListaViagensLongasComponent_td_22_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ListaViagensLongasComponent_tr_23_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ListaViagensLongasComponent_tr_24_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: ["div[_ngcontent-%COMP%], [mat-table][_ngcontent-%COMP%], [mat-cell][_ngcontent-%COMP%], [mat-header-cell][_ngcontent-%COMP%] {\r\n  background-color: #34649f;\r\n  color: white;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGEtdmlhZ2Vucy1sb25nYXMvbGlzdGEtdmlhZ2Vucy1sb25nYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9saXN0YS12aWFnZW5zLWxvbmdhcy9saXN0YS12aWFnZW5zLWxvbmdhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LFxyXG5bbWF0LXRhYmxlXSxcclxuW21hdC1jZWxsXSxcclxuW21hdC1oZWFkZXItY2VsbF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDY0OWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListaViagensLongasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lista-viagens-longas',
                templateUrl: './lista-viagens-longas.component.html',
                styleUrls: ['./lista-viagens-longas.component.css'],
            }]
    }], function () { return [{ type: _voos_service__WEBPACK_IMPORTED_MODULE_3__["VoosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/voos.service.ts":
/*!*********************************!*\
  !*** ./src/app/voos.service.ts ***!
  \*********************************/
/*! exports provided: VoosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoosService", function() { return VoosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






class VoosService {
    constructor(http) {
        this.http = http;
        this.routerInfo = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.processamentoConcluido = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dataViagem = '';
        this.dataViagemYyyymmdd = '';
        this.processando = false;
        this.calculaDataViagem();
    }
    calculaDataViagem() {
        var result = new Date();
        function pad(s) {
            return s < 10 ? '0' + s : s;
        }
        result.setDate(result.getDate() + 40);
        var d = new Date(result);
        this.dataViagem = [
            pad(d.getDate()),
            pad(d.getMonth() + 1),
            d.getFullYear(),
        ].join('/');
        const partesData = this.dataViagem.split('/');
        this.dataViagemYyyymmdd =
            partesData[2] + '-' + partesData[1] + '-' + partesData[0];
    }
    buscaVoos() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('dataViagem', this.dataViagemYyyymmdd);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlBase + '/api/busca_voos.php', { params: params });
    }
    buscaEstadoComMaisAeroportos() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlBase + '/api/busca_estado_com_mais_aeroportos.php');
    }
    buscaDistanciasEntreAeroportos() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlBase + '/api/busca_distancias_entre_aeroportos.php');
    }
    atualizaDados() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('dataViagem', this.dataViagemYyyymmdd);
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlBase + '/api/le.php', { params: params })
            .subscribe((data) => {
            this.routerInfo.next(true);
            if (data.processando) {
                this.atualizaDados();
            }
            else {
                this.processamentoConcluido.next();
                this.processando = false;
            }
        }, (error) => {
            this.processando = false;
            console.error('Erro ao buscar os dados.', error);
        });
    }
    apagaDados() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('dataViagem', this.dataViagemYyyymmdd);
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlBase + '/api/apaga.php', { params: params })
            .subscribe((data) => {
            this.routerInfo.next(true);
        });
    }
}
VoosService.ɵfac = function VoosService_Factory(t) { return new (t || VoosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
VoosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VoosService, factory: VoosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    urlBase: '',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\desafios\voos\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map