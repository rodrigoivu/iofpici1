(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/app/dashboards/dashboard1/dashboard1.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboards/dashboard1/dashboard1.component.ts ***!
  \***************************************************************/
/*! exports provided: Dashboard1Component, ModalsopladorComponent, ModaljaulaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard1Component", function() { return Dashboard1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsopladorComponent", function() { return ModalsopladorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModaljaulaComponent", function() { return ModaljaulaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_service_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/service.index */ "./src/app/services/service.index.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
// VISTA GENERAL





















const _c0 = ["canvas"];
function Dashboard1Component_mat_card_subtitle_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Conectado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function Dashboard1Component_mat_card_subtitle_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Desconectado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0( recargar )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function Dashboard1Component_div_19_i_44_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard1Component_div_19_i_44_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const linea_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.accionPlay(linea_r4._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function Dashboard1Component_div_19_i_45_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard1Component_div_19_i_45_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const linea_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.accionPause(linea_r4._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function Dashboard1Component_div_19_h6_49_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const linea_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](linea_r4.estado);
    }
}
function Dashboard1Component_div_19_h6_50_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ALARMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function Dashboard1Component_div_19_div_51_div_1_h6_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const jaula_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", jaula_r17.visita_actual, "\u00A0/\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, jaula_r17.visitas, "1.0-0"), "");
    }
}
function Dashboard1Component_div_19_div_51_div_1_h6_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
const _c1 = function (a0, a1, a2, a3, a4) { return { leftbaralim: a0, leftbarCat0: a1, leftbarCat1: a2, leftbarCat2: a3, leftbarCat3: a4 }; };
function Dashboard1Component_div_19_div_51_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard1Component_div_19_div_51_div_1_Template_div_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.toggleClass($event, "flipped"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Dashboard1Component_div_19_div_51_div_1_h6_8_Template, 4, 5, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Dashboard1Component_div_19_div_51_div_1_h6_9_Template, 3, 0, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-progress-bar", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-checkbox", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Dashboard1Component_div_19_div_51_div_1_Template_mat_checkbox_change_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const jaula_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.selecciona_en_ciclo(jaula_r17._id, $event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard1Component_div_19_div_51_div_1_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const jaula_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.editarPPM(jaula_r17._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "PPM:\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard1Component_div_19_div_51_div_1_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const jaula_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.editarPPV(jaula_r17._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "PPV:\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard1Component_div_19_div_51_div_1_Template_div_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const jaula_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.openDialogJau(jaula_r17); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const jaula_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](40, _c1, jaula_r17.estado, jaula_r17.categoria == 0, jaula_r17.categoria == 1, jaula_r17.categoria == 2, jaula_r17.categoria == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jaula_r17.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jaula_r17.manual);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jaula_r17.manual);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100 * jaula_r17.dado / (jaula_r17.kg_tot + 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 16, jaula_r17.dado, "1.0-1"), "\u00A0kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PPM:\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 19, jaula_r17.ppm, "1.0-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PPV:\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 22, jaula_r17.ppv, "1.0-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", jaula_r17.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](46, _c1, jaula_r17.estado, jaula_r17.categoria == 0, jaula_r17.categoria == 1, jaula_r17.categoria == 2, jaula_r17.categoria == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jaula_r17.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("kg tot:\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 25, jaula_r17.kg_tot, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("g/v:\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](41, 28, jaula_r17.kg_visita * 1000, "1.0-1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("g/m:\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 31, jaula_r17.kg_min * 1000, "1.0-1"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](53, 34, jaula_r17.ppm, "1.0-2"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](59, 37, jaula_r17.ppv, "1.0-2"), "\u00A0");
    }
}
function Dashboard1Component_div_19_div_51_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dashboard1Component_div_19_div_51_div_1_Template, 65, 52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const jaula_r17 = ctx.$implicit;
        const linea_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", linea_r4._id == jaula_r17.linea);
    }
}
function Dashboard1Component_div_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00BAC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "pos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, Dashboard1Component_div_19_i_44_Template, 1, 0, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, Dashboard1Component_div_19_i_45_Template, 1, 0, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Estado:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, Dashboard1Component_div_19_h6_49_Template, 3, 1, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, Dashboard1Component_div_19_h6_50_Template, 3, 0, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, Dashboard1Component_div_19_div_51_Template, 2, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const linea_r4 = ctx.$implicit;
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", linea_r4.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](linea_r4.linea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](linea_r4.hz_blower);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 12, linea_r4.presion, "1.0-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 15, linea_r4.temp, "1.0-1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](linea_r4.pos_selec);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !linea_r4.accion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", linea_r4.accion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !linea_r4.alarma);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", linea_r4.alarma);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.jaulas);
    }
}
let Dashboard1Component = /*@__PURE__*/ (() => {
    class Dashboard1Component {
        //AUDIO
        // public blocks: { color, state, note }[] = [];
        // private blockSize = 13; // sequencer will use 13 notes
        // private noteLength = 1; // duration of the note (1 second)
        constructor(_websocketService, _jaulaService, _lineaService, _doserService, _siloService, _planService, _modelosfrService, _canvasdrawService, _alimentoService, _usuarioService, _selectorService, _alimentacionService, _tasasService, _ngZone, dialog) {
            this._websocketService = _websocketService;
            this._jaulaService = _jaulaService;
            this._lineaService = _lineaService;
            this._doserService = _doserService;
            this._siloService = _siloService;
            this._planService = _planService;
            this._modelosfrService = _modelosfrService;
            this._canvasdrawService = _canvasdrawService;
            this._alimentoService = _alimentoService;
            this._usuarioService = _usuarioService;
            this._selectorService = _selectorService;
            this._alimentacionService = _alimentacionService;
            this._tasasService = _tasasService;
            this._ngZone = _ngZone;
            this.dialog = dialog;
            this.classFlip = 'card';
            this.estado_A = false;
            this.punteroSop = 'linkModalSop';
            this.punteroJau = 'linkModalJau';
            this.puntero = 'puntero';
            // leftBarClass = 'leftbar';
            // leftBarAlimClass = 'leftbaralim';
            this.jaulas = [];
            this.lineas = [];
            this.dosers = [];
            this.silos = [];
            this.alimentos = [];
            this.selectores = [];
            this.lineaEstado = [];
            this.ListaAlimentacion = [];
            this.myModel = true;
            this.tabla_generada = false;
            this.wCanvas = '960px';
            this.estadoPLC = false;
            //DETECTA INFORMACION DE ESTADO CICLO DESDE SOCKET
            this._ngZone.runOutsideAngular(() => {
                this.suscribirMuestreoCiclo = this._websocketService.estadoCiclo().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])())
                    .subscribe(data => {
                    this._ngZone.run(() => {
                        // this._usuarioService.setUltimaConexion();
                        this.ultimaConexion = new Date();
                        this.estadoPLC = true;
                        this.recibeCiclo(data.data);
                        //console.log(data.data);
                    });
                });
            });
            this._ngZone.runOutsideAngular(() => {
                this.suscribirMuestreoSaldoSilo = this._websocketService.estadoSaldoSilo().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])())
                    .subscribe(data => {
                    this._ngZone.run(() => {
                        let siloSel;
                        siloSel = this.silos.filter(x => x._id == data.data.ID)[0];
                        siloSel.saldo = data.data.SS;
                    });
                });
            });
            //DETECTA INFORMACION DE ESTADO LINEA DESDE SOCKET
            this._ngZone.runOutsideAngular(() => {
                this.suscribirMuestreoLinea = this._websocketService.estadoLinea().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])())
                    .subscribe(data => {
                    this._ngZone.run(() => {
                        this._usuarioService.setUltimaConexion();
                        this.recibeLinea(data.data);
                    });
                });
            });
        }
        //AUDIO
        // *
        // * change the color of the div, and switch its state (on/off)
        // * @param index
        // public changeState(index: number) {
        //   this.blocks[index] = (this.blocks[index].color === 'limegreen') ? {
        //     color: 'tomato',
        //     state: false,
        //     note: this.blocks[index].note
        //   } : {
        //       color: 'limegreen',
        //       state: true,
        //       note: this.blocks[index].note
        //     };
        // }
        // /**
        //  * play the notes that have a true state
        //  */
        // public play() {
        //   this.blocks.forEach((element, index) => {
        //     if (element.state) {
        //       const note = this.soundService.notes[index];
        //       this.soundService.play(note.frequency,
        //         this.noteLength, index * this.noteLength);
        //     }
        //     // this is to emulate the progress
        //     setTimeout(() => {
        //       element.color = 'lightpink';
        //       if (index + 1 === this.blocks.length) {
        //         setTimeout(() => {
        //           this.resetColor();
        //         }, this.noteLength * 1000);
        //       }
        //     }, this.noteLength * 1000 * index);
        //   });
        // }
        // /**
        //  * when sequence ends this returns the colors but to limegreen
        //  */
        // private resetColor() {
        //   this.blocks.forEach(element => {
        //     element.color = 'limegreen';
        //     element.state = true;
        //   });
        // }
        // playMqtt(){
        //   const note = this.soundService.notes[4];
        //       this.soundService.play(note.frequency, this.noteLength, 4 * this.noteLength);
        // }
        comparaHora() {
            let hrnow = new Date;
            let seg1 = hrnow.getSeconds();
            let seg2;
            if (this.ultimaConexion) {
                seg2 = this.ultimaConexion.getSeconds();
                let diffSeg = seg1 - seg2;
                if (diffSeg > 5) {
                    this.estadoPLC = false;
                }
            }
            else {
                this.estadoPLC = false;
            }
        }
        ngAfterViewInit() {
            //AUDIO
            // add default values to the blocks array
            // for (let index = 0; index < this.blockSize; index++) {
            //   this.blocks.push({
            //     color: 'limegreen',
            //     state: true,
            //     note: this.soundService.notes[index]
            //   });
            // }
            //Inicia el contexto de canvas
            this.inicializaCanvas();
            this.cargaModelosfr();
            setInterval(() => { this.comparaHora(); }, 5000);
        }
        ngOnDestroy() {
            //this.suscribirMuestreoCiclo.unsubscribe();
            //this.suscribirMuestreoLinea.unsubscribe();
            //this.suscribirMuestreoSaldoSilo.unsubscribe();
        }
        inicializaCanvas() {
            let silos;
            this._siloService.itemsTodos()
                .subscribe((resp) => {
                silos = resp.items;
                this.wCanvas = 180 * silos.length + 'px';
                this._canvasdrawService.creaContexto(this.canvas.nativeElement, silos.length);
            });
        }
        //Indica el silo de cada jaula
        getSilo(idDoser) {
            let doserSel;
            let siloSel;
            doserSel = this.dosers.filter(x => x._id == idDoser)[0];
            siloSel = this.silos.filter(x => x._id == doserSel.silo)[0];
            return siloSel;
        }
        ;
        cargaModelosfr() {
            this._modelosfrService.itemsTodos()
                .subscribe((resp) => {
                this.modelosfr = resp.items;
                this.cargaPlan();
            }, (err) => {
                if (!err.error.ok) {
                    this.cargaPlan();
                }
            });
        }
        cargaPlan() {
            this._planService.itemUltimo()
                .subscribe((resp) => {
                if (resp.items) {
                    this.plan = resp.items;
                    //  this.seleccionaModelo();//SOLO BLUFEEDER
                    this.cargaJaulas();
                }
            });
        }
        seleccionaModelo() {
            this.modelo = this.modelosfr.filter(x => x.especie == this.plan.especie)[0];
        }
        cargaJaulas() {
            this._jaulaService.itemsTodos()
                .subscribe((resp) => {
                this.jaulas = resp.items;
                // this.jaulas.map(function(jau){
                //     //jau.dado =Math.round((jau.dado/1000)*10)/10;
                //     return jau; 
                //   });
                this.cargaLineasCompleto();
            });
        }
        // cargaLineas(){
        //   this._lineaService.itemsTodos()
        //       .subscribe( (resp: any) =>{
        //         this.lineas = resp.items;
        //         this.cargaDosers();
        //       });
        // }
        cargaLineasCompleto() {
            this._lineaService.itemsTodosCompleto()
                .subscribe((resp) => {
                this.lineas = resp.items;
                this.cargaDosers();
            });
        }
        cargaDosers() {
            this._doserService.itemsTodos()
                .subscribe((resp) => {
                this.dosers = resp.items;
                this.cargaAlimentos();
            });
        }
        cargaAlimentos() {
            this._alimentoService.itemsTodos()
                .subscribe((resp) => {
                this.alimentos = resp.items;
                this.cargaSelectores();
            });
        }
        cargaSelectores() {
            this._selectorService.itemsTodos()
                .subscribe((resp) => {
                this.selectores = resp.items;
                this.cargaAlimentacionDia();
            });
        }
        cargaAlimentacionDia() {
            var dia_consulta = new Date();
            dia_consulta.setHours(0, 0, 0, 0);
            var dia = new Date(dia_consulta);
            this._alimentacionService.itemsTodosDia(dia)
                .subscribe((resp) => {
                this.ListaAlimentacion = resp.items;
                this.cargaSilos();
            }, (err) => {
                if (!err.error.ok) {
                    this.ListaAlimentacion = [];
                    this.cargaSilos();
                }
            });
        }
        cargaSilos() {
            this._siloService.itemsTodos()
                .subscribe((resp) => {
                this.silos = resp.items;
                this.generaTabla(); //Lineas
                this.recalculaTabla('null'); //Datos modelo
                this.DibujaObjetoCanvas([]);
                this.jaulasDadoDia();
            });
        }
        generaTabla() {
            let itemE;
            for (let l of this.lineas) {
                if (l.blower.estado == null) {
                    l.blower.estado = false;
                }
                itemE = {
                    linea: l.nombre,
                    accion: l.blower.estado,
                    estado: '',
                    // presion: l.blower.presion.valor,
                    presion: 0,
                    speed: l.blower.hz,
                    silo: l.jaula.doser.silo.nombre,
                    alimento: l.jaula.doser.silo.alimentos[0].alimento.nombre,
                    jaula: l.jaula.nombre,
                    //dosis: l.jaula.obj_ciclo,
                    //intensidad: l.jaula.intensidad,
                    //fact: l.jaula.f_act,
                    entregado: l.jaula.dado,
                    color: l.color,
                    tpo_disp: 0,
                    pos_selec: 0,
                    hz_blower: 0,
                    temp: 0,
                    alarma: false,
                    _id: l._id
                };
                this.lineaEstado.push(itemE);
            }
            this.tabla_generada = true;
        }
        jaulasDadoDia() {
            var agruppporjaula = [];
            if (this.ListaAlimentacion.length > 0) {
                for (let j of this.jaulas) {
                    agruppporjaula = this.ListaAlimentacion.filter(x => x.jaula._id == j._id);
                    var grsVals = agruppporjaula.map(x => x.grs); //Esto crea un arreglo solo con los items unicos
                    var grsSuma = 0;
                    var visitas = 0;
                    if (grsVals.length > 0) {
                        grsSuma = grsVals.reduce(function (a, b) { return a + b; });
                        visitas = grsVals.length;
                    }
                    var entregado = grsSuma / 1000;
                    j.dado = entregado;
                    j.visita_actual = visitas;
                }
            }
        }
        selecciona_en_ciclo(idjaula, estado) {
            var jaulaSel;
            jaulaSel = this.jaulas.filter(x => x._id == idjaula)[0];
            jaulaSel.en_ciclo = estado;
            if (!estado) {
                jaulaSel.estado = estado;
            }
            //this._jaulaService.actualizarItem
            this._jaulaService.actualizarItem(jaulaSel)
                .subscribe((resp) => {
                //this.enviaJaulasLinea_PLC(jaulaSel.linea);  
                this.enviaSetJaula(jaulaSel);
            });
        }
        enviaJaulasLinea_PLC(idLinea) {
            let jaulas_por_linea;
            jaulas_por_linea = this.jaulas.filter(x => x.linea == idLinea);
            jaulas_por_linea.forEach((jaula, i) => {
                setTimeout(() => {
                    this.enviaSetJaula(jaula);
                }, i * 250);
            });
        }
        cambio_de_doser_pos_hz(idjaula, idDoser, pos, hz, obj_med, manual, categoria) {
            var jaulaSel;
            jaulaSel = this.jaulas.filter(x => x._id == idjaula)[0];
            jaulaSel.doser = idDoser;
            jaulaSel.pos_selector = pos;
            jaulaSel.hz_blower = hz;
            jaulaSel.obj_med = obj_med;
            jaulaSel.manual = manual;
            jaulaSel.categoria = categoria;
            this._jaulaService.actualizarItem(jaulaSel)
                .subscribe((resp) => {
                this.enviaSetJaula(jaulaSel);
            });
        }
        enviaSetJaula(item) {
            //Tiempo extra no se considera en Piscicultura
            var tpo_extra;
            tpo_extra = this.calculaTpoExtra(item);
            var dataSJ;
            //Indice de linea
            var li = this.lineas.map(x => x._id).indexOf(item.linea) + 1;
            //Indice de doser por linea
            var dos = this.dosers.filter(x => x.linea == item.linea).map(x => x._id).indexOf(item.doser) + 1;
            //Indice de doser por linea
            var dos_med = this.dosers.filter(x => x.linea == item.linea).map(x => x._id).indexOf(item.doser_med) + 1;
            // var dos = this.dosers.filter(function (itemD) {
            //     return itemD.linea == item.linea;
            // }).map(x => x._id).indexOf(item.doser) + 1;
            var tpo_soplado = item.tpo_sop;
            //let TEV = item.ppv/item.ppm 
            dataSJ = {
                LI: li,
                JA: item.orden,
                EC: item.en_ciclo,
                TA: Math.round(item.kg_min * 1000),
                OC: item.kg_visita * 1000,
                OT: item.kg_tot * 1000,
                OM: item.obj_med * 1000,
                DS: dos,
                DM: dos_med,
                PS: item.pos_selector,
                HZ: item.hz_blower,
                SA: item.manual,
                TS: tpo_soplado + tpo_extra
            };
            var dataS = JSON.stringify(dataSJ);
            this._websocketService.sendSetJaula(dataS);
        }
        calculaTpoExtra(itemJaula) {
            let jaulas_por_linea;
            let jaulas_activas_linea;
            jaulas_por_linea = this.jaulas.filter(x => x.linea == itemJaula.linea);
            jaulas_activas_linea = jaulas_por_linea.filter(x => x.en_ciclo == true);
            //Cantidad de jaulas
            let tj = jaulas_por_linea.length;
            let tja = jaulas_activas_linea.length;
            let tpo_extra = 0;
            // Busca la última jaula para asignarle tiempo extra
            if ((tja > 0) && (jaulas_activas_linea[tja - 1]._id == itemJaula._id)) {
                let TEV; //Tiempo de entrega visita
                let TS; //Tiempo soplado
                if (tj == 1) {
                    let jau;
                    jau = jaulas_por_linea[0];
                    TEV = jau.ppv / jau.ppm;
                    TS = jau.tpo_sop;
                    tpo_extra = TEV * 60 + TS;
                }
                else {
                    tpo_extra = jaulas_por_linea.reduce((tpo_ex, jaula) => {
                        if (!jaula.en_ciclo) {
                            TEV = jaula.ppv / jaula.ppm;
                            TS = jaula.tpo_sop;
                            tpo_ex = tpo_ex + TEV * 60 + TS;
                        }
                        return tpo_ex;
                    }, 0);
                }
            }
            return tpo_extra;
        }
        delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        recibeCiclo(data) {
            var item;
            var jau_x_li;
            var jau_m;
            var linea_m;
            var id_li;
            item = data;
            if ((item.A > 0) && (this.lineas.length > 0) && this.tabla_generada) {
                //ALARMAS LINEA
                let AL_array = [
                    item.T & 1, item.T & 2, item.T & 4, item.T & 8,
                    item.T & 16, item.T & 32, item.T & 64, item.T & 128,
                ];
                //ALARMAS 0:BLOWER 1:SELECTORA 2:ESCLUSA 3:TOLVA 4:ROTO_SENSOR_1 5:ROTO_SENSOR_2 6:ROTO_SENSOR_3 7:ROTO_SENSOR_4 
                let AD_array = [item.U & 1, item.U & 2, item.U & 4, item.U & 8]; //Alarmas Doser de Byte a bit
                //this.jaulas.map(x => x.estado = false);
                id_li = this.lineas[item.A - 1]._id;
                jau_x_li = this.jaulas.filter(x => x.linea == id_li);
                jau_x_li.map(x => x.estado = false); // deselecciona borde de selección
                linea_m = this.lineaEstado.filter(x => x._id == id_li)[0];
                jau_m = jau_x_li.filter(x => x.orden == item.B)[0];
                if (jau_m) {
                    //Al momento de terminar el ciclo, DA tiene el valor de la cantidad entregada total del ciclo, pero aun no se resetea el valor de DC
                    if (item.I == 0) {
                        //jau_m.dado = Math.round((item.DC/1000 + item.DA/1000)*10)/10;
                        jau_m.dado = item.C / 1000 + item.F / 1000;
                    }
                    else {
                        //jau_m.dado = Math.round((item.DA/1000)*10)/10;
                        jau_m.dado = item.F / 1000;
                    }
                    jau_m.visita_actual = item.G;
                    jau_m.estado = true;
                    if (item.J == 1) {
                        jau_m.med_sel = true;
                    }
                    else {
                        jau_m.med_sel = false;
                    }
                }
                linea_m.pos_selec = item.L;
                linea_m.presion = item.R / 1000;
                linea_m.temp = item.S / 10;
                //AlARMAs 
                if (item.T > 0 || item.U > 0) {
                    linea_m.alarma = true;
                }
                else {
                    linea_m.alarma = false;
                }
                switch (item.M) {
                    case 0:
                        linea_m.estado = 'Detenido';
                        linea_m.accion = false;
                        break;
                    case 1:
                        linea_m.estado = 'Alimentando';
                        linea_m.accion = true;
                        break;
                    case 2:
                        linea_m.estado = 'Soplado ini';
                        linea_m.accion = true;
                        break;
                    case 3:
                        linea_m.estado = 'Soplado final';
                        linea_m.accion = true;
                        break;
                    case 4:
                        linea_m.estado = 'Mov. Selectora';
                        linea_m.accion = true;
                        break;
                }
                linea_m.hz_blower = item.N;
                var itemds; // al inicio no hay doser seleccionado
                if (item.H < 1) {
                    itemds = 1;
                }
                else {
                    if (item.J) {
                        itemds = item.K;
                    }
                    else {
                        itemds = item.H;
                    }
                }
                var doserSel = this.dosers.filter(x => x.linea == id_li)[itemds - 1];
                if (doserSel == null) {
                    doserSel = this.dosers.filter(x => x.linea == id_li)[0];
                }
                var siloSel = this.silos.filter(x => x._id == doserSel.silo)[0];
                linea_m.silo = siloSel.nombre;
                this.DibujaObjetoCanvas(AL_array);
            }
        }
        // recibeCiclo(data: any){
        //   var item: dataCiclo;
        //   var jau_x_li: Jaula [];
        //   var jau_m: Jaula;
        //   var linea_m: itemLinea;
        //   var id_li: string;
        //   item = data;
        //   if((item.LI > 0) && (this.lineas.length > 0) && this.tabla_generada){
        //     //this.jaulas.map(x => x.estado = false);
        //     id_li = this.lineas[item.LI-1]._id;
        //     jau_x_li = this.jaulas.filter(x => x.linea == id_li);
        //     jau_x_li.map(x => x.estado = false); // deselecciona borde de selección
        //     linea_m = this.lineaEstado.filter(x => x._id == id_li)[0];
        //     jau_m = jau_x_li.filter(x => x.orden == item.JA)[0];
        //     if (jau_m ){
        //       //Al momento de terminar el ciclo, DA tiene el valor de la cantidad entregada total del ciclo, pero aun no se resetea el valor de DC
        //       if(item.BD == 0){
        //         //jau_m.dado = Math.round((item.DC/1000 + item.DA/1000)*10)/10;
        //         jau_m.dado = item.DC/1000 + item.DA/1000;
        //       }else{
        //         //jau_m.dado = Math.round((item.DA/1000)*10)/10;
        //         jau_m.dado = item.DA/1000;
        //       }
        //       jau_m.visita_actual = item.CD;
        //       jau_m.estado = true;
        //       if (item.MS==1){
        //         jau_m.med_sel=true;
        //       }else{
        //         jau_m.med_sel=false;
        //       }
        //     }
        //     linea_m.pos_selec = item.PS;
        //     linea_m.presion = item.SP/1000;
        //     linea_m.temp    = item.SC/10;
        //     //AlARMA
        //     if(item.AB >0 || item.AD>0 || item.AS>0){
        //       linea_m.alarma = true;
        //     }else{
        //       linea_m.alarma = false;
        //     }
        //     switch (item.SO) {
        //       case 0:
        //         linea_m.estado = 'Detenido';
        //         linea_m.accion = false;
        //         break;
        //       case 1:
        //         linea_m.estado = 'Alimentando';
        //         linea_m.accion = true;
        //         break;
        //       case 2:
        //         linea_m.estado = 'Soplado ini';
        //         linea_m.accion = true;
        //         break;
        //       case 3:
        //         linea_m.estado = 'Soplado final';
        //         linea_m.accion = true;
        //         break; 
        //       case 4:
        //         linea_m.estado = 'Mov. Selectora';
        //         linea_m.accion = true;
        //         break;   
        //     }
        //     linea_m.hz_blower = item.HZ;
        //     var itemds; // al inicio no hay doser seleccionado
        //     if (item.DS < 1) {
        //       itemds=1;
        //     }else{
        //       if(item.MS){
        //         itemds = item.DM;
        //       }else{
        //         itemds = item.DS;
        //       }
        //     }
        //     var doserSel = this.dosers.filter(x => x.linea == id_li)[itemds-1];
        //     if(doserSel==null){
        //       doserSel = this.dosers.filter(x => x.linea == id_li)[0];
        //     }
        //     var  siloSel = this.silos.filter(x => x._id == doserSel.silo)[0];
        //     linea_m.silo=siloSel.nombre;
        //     this.DibujaObjetoCanvas();
        //   }
        // }
        recibeLinea(data) {
            var item;
            var id_li;
            var linea_m;
            item = data;
            if ((item.LI > 0) && (this.lineaEstado)) {
                id_li = this.lineas[item.LI - 1]._id;
                linea_m = this.lineaEstado.filter(x => x._id == id_li)[0];
                switch (item.SO) {
                    case 0:
                        linea_m.estado = 'Detenido';
                        linea_m.accion = false;
                        break;
                    case 1:
                        linea_m.estado = 'Alimentando';
                        linea_m.accion = true;
                        break;
                    case 2:
                        linea_m.estado = 'Soplado inicial';
                        linea_m.accion = true;
                        break;
                    case 3:
                        linea_m.estado = 'Soplado final';
                        linea_m.accion = true;
                        break;
                    case 4:
                        linea_m.estado = 'Mov. Selectora';
                        linea_m.accion = true;
                        break;
                }
            }
        }
        toggleClass(event, class_1) {
            const hasClass = event.currentTarget.classList.contains(class_1);
            if (event.target.id == "flip") {
                if (hasClass) {
                    event.currentTarget.classList.remove(class_1);
                }
                else {
                    event.currentTarget.classList.add(class_1);
                }
            }
            //console.log(event.target.id)
        }
        accionPlay(idLinea) {
            var lineaSelect = this.lineaEstado.filter(obj => {
                return obj._id == idLinea;
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Desea comenzar alimentación?',
                text: 'Línea seleccionada: ' + lineaSelect[0].linea,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, comenzar!'
            }).then((result) => {
                if (result.value) {
                    lineaSelect[0].accion = true;
                    //enviar datos jaulas
                    let jaulas_por_linea;
                    jaulas_por_linea = this.jaulas.filter(x => x.linea == idLinea);
                    //Cantidad de jaulas
                    let tj = jaulas_por_linea.length;
                    this.enviaJaulasLinea_PLC(idLinea);
                    // jaulas_por_linea.forEach((jaula, i) => {
                    //   setTimeout(() => {
                    //     this.enviaSetJaula(jaula);
                    //   }, i * 300);
                    // });
                    //envía orden Alimentar
                    setTimeout(() => {
                        this.enviaOrdenAlimentar(idLinea, true, tj);
                    }, 300);
                }
            });
        }
        accionPause(idLinea) {
            var lineaSelect = this.lineaEstado.filter(obj => {
                return obj._id == idLinea;
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Desea detener alimentación?',
                text: 'Línea seleccionada: ' + lineaSelect[0].linea,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, detener!'
            }).then((result) => {
                if (result.value) {
                    lineaSelect[0].accion = false;
                    //Solo para enviar total de jaulas
                    let jaulas_por_linea;
                    jaulas_por_linea = this.jaulas.filter(x => x.linea == idLinea);
                    let tj = jaulas_por_linea.length;
                    this.enviaOrdenAlimentar(idLinea, false, tj);
                }
            });
        }
        enviaOrdenAlimentar(idLinea, orden, tot_jaulas) {
            var dataA;
            //Indice de linea
            var li = this.lineas.map(x => x._id).indexOf(idLinea) + 1;
            dataA = {
                LI: li,
                OA: orden,
                TJ: tot_jaulas //Total de jaulas por linea
            };
            var dataS = JSON.stringify(dataA);
            // console.log(dataS);
            this._websocketService.sendAlimentar(dataS);
        }
        openDialogSop(nombre, hz, id_linea) {
            const dialogRef = this.dialog.open(ModalsopladorComponent, {
                width: '220px',
                data: {
                    nombre: nombre,
                    hz: hz,
                    id_linea: id_linea
                }
            });
            dialogRef.afterClosed().subscribe(result => {
                // console.log('The dialog was closed');
                // this.animal = result;
            });
        }
        openDialogJau(jaulaSel) {
            var dia_consulta = new Date();
            dia_consulta.setHours(0, 0, 0, 0);
            var dia = new Date(dia_consulta);
            var ListaAlimentacion = [];
            var ListaAlimenMed = [];
            var ListaAlimenNormal = [];
            this._alimentacionService.itemDia(dia, jaulaSel._id)
                .subscribe((resp) => {
                ListaAlimentacion = resp.items;
                ListaAlimenNormal = ListaAlimentacion.filter(x => x.alimento.medicado == false);
                ListaAlimenMed = ListaAlimentacion.filter(x => x.alimento.medicado == true);
                var grsVals = ListaAlimenNormal.map(x => x.grs);
                var grsValsMed = ListaAlimenMed.map(x => x.grs);
                var grsSuma = 0;
                var grsSumaMed = 0;
                if (grsVals.length > 0) {
                    grsSuma = grsVals.reduce(function (a, b) { return a + b; });
                }
                if (grsValsMed.length > 0) {
                    grsSumaMed = grsValsMed.reduce(function (a, b) { return a + b; });
                }
                var entregado = grsSuma / 1000;
                var entregadoMed = grsSumaMed / 1000;
                var entregadototal = entregado + entregadoMed;
                this.abrirDialogoJaula(jaulaSel, entregado, entregadoMed, entregadototal);
            }, (err) => {
                if (!err.error.ok) {
                    this.abrirDialogoJaula(jaulaSel, 0, 0, 0);
                }
            });
        }
        abrirDialogoJaula(jaulaSel, entregado, entregadomed, entregadototal) {
            let dosers;
            let idSilos;
            let silos;
            var alimentos = [];
            let siloSel = this.getSilo(jaulaSel.doser)._id;
            let pos_max;
            let pos_max_array;
            idSilos = this.dosers.filter(x => x.linea == jaulaSel.linea).map(x => x.silo);
            silos = this.silos.filter(x => idSilos.includes(x._id));
            for (let item of silos) {
                var alimentoSel = this.alimentos.filter(x => x._id == item.alimentos[0].alimento)[0];
                alimentos.push(alimentoSel);
            }
            pos_max = this.lineas.filter(x => x._id == jaulaSel.linea)[0].selector.pos_max;
            pos_max_array = new Array(pos_max);
            for (var i = 0; i < pos_max_array.length; i++) {
                pos_max_array[i] = i + 1;
            }
            const dialogRef = this.dialog.open(ModaljaulaComponent, {
                width: '325px',
                height: '325px',
                data: {
                    jaula: jaulaSel,
                    silos: silos,
                    alimentos: alimentos,
                    siloSel: siloSel,
                    hz: String(jaulaSel.hz_blower),
                    pos: jaulaSel.pos_selector,
                    pos_max: pos_max_array,
                    entregado: entregado,
                    entregadomed: entregadomed,
                    entregadototal: entregadototal,
                    categoria: String(jaulaSel.categoria)
                }
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    let datoDoser = result;
                    let dosersLinea;
                    let id_siloSel = datoDoser.siloSel;
                    let posSel = Number(datoDoser.pos);
                    let hz = Number(datoDoser.hz);
                    let id_jaula = datoDoser.jaula._id;
                    let lineaJaula = datoDoser.jaula.linea;
                    let obj_med = datoDoser.jaula.obj_med;
                    let manual = datoDoser.jaula.manual;
                    let categoria = datoDoser.categoria;
                    let doserSel;
                    dosersLinea = this.dosers.filter(x => x.linea == lineaJaula);
                    doserSel = dosersLinea.filter(x => x.silo == id_siloSel)[0];
                    this.cambio_de_doser_pos_hz(id_jaula, doserSel._id, posSel, hz, obj_med, manual, categoria);
                }
            });
        }
        DibujaObjetoCanvas(alarma) {
            let i = 0;
            if (this._canvasdrawService.canvasOk == true) {
                for (let item of this.silos) {
                    let nombre = item.nombre;
                    // let posX = 70;
                    // let posY = 90+i*180;
                    let posX = 90 + i * 180;
                    let posY = 90;
                    let unidad = '%';
                    //let colornormal = "#64DD17";
                    let colornormal = "#1eacbe";
                    //let coloralarma = "#F44336";
                    let coloralarma = "#e6294b";
                    // let colortitulo = "#424949";
                    let colortitulo = "#a6adad";
                    // let colorvalor = "#424949";
                    let colorvalor = "#d7dfe3";
                    let colorfondo = "#FFFFFF";
                    let limite = item.lim_noti;
                    let indicaalarma = 'bajo';
                    let min = 0;
                    let max = 0;
                    max = item.capacidad;
                    let valor = item.saldo;
                    let visible = true;
                    let propiedad = 'lectura';
                    var lineas_silo = [];
                    var color_linea = [];
                    var alimentoSel = this.alimentos.filter(x => x._id == item.alimentos[0].alimento)[0];
                    var alimento = alimentoSel.nombre;
                    var medicado = alimentoSel.medicado;
                    let alarm = 0;
                    //ALARMAS 0:BLOWER 1:SELECTORA 2:ESCLUSA 3:TOLVA 4:ROTO_SENSOR_1 5:ROTO_SENSOR_2 6:ROTO_SENSOR_3 7:ROTO_SENSOR_4 
                    if (alarma.length > 0) {
                        let siloAlarm = alarma[i + 4];
                        if (siloAlarm > 0) {
                            alarm = 1;
                        }
                    }
                    for (let li of this.lineaEstado) {
                        if (li.silo == nombre) {
                            lineas_silo.push(li.linea);
                            color_linea.push(li.color);
                        }
                    }
                    if (visible && (propiedad == 'lectura' || propiedad == 'ambos')) {
                        this._canvasdrawService.siloCanvas(posX, posY, min, max, valor, limite, indicaalarma, nombre, unidad, colornormal, coloralarma, colortitulo, colorvalor, colorfondo, lineas_silo, color_linea, alimento, medicado, alarm);
                    }
                    i++;
                }
            }
        }
        editarPPM(id) {
            let itemE;
            itemE = this.jaulas.filter(x => x._id == id)[0];
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Ajustar tasa PPM',
                text: '' + itemE.nombre,
                width: 350,
                input: 'number',
                inputAttributes: {
                    min: "0.01",
                    max: "4",
                    step: "0.01"
                },
                inputValue: '' + itemE.ppm.toFixed(2),
                showCancelButton: true,
                confirmButtonText: `Save`,
                validationMessage: 'Valor entre 0.01 y 4'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    itemE.ppm = parseFloat(result.value);
                    this.guardaCambioTasa(itemE);
                }
            });
        }
        editarPPV(id) {
            let itemE;
            itemE = this.jaulas.filter(x => x._id == id)[0];
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Ajustar tasa PPV',
                text: '' + itemE.nombre,
                width: 350,
                input: 'number',
                inputAttributes: {
                    min: "0.01",
                    max: "4",
                    step: "0.01"
                },
                inputValue: '' + itemE.ppv.toFixed(2),
                showCancelButton: true,
                confirmButtonText: `Save`,
                validationMessage: 'Valor entre 0.01 y 4'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    itemE.ppv = parseFloat(result.value);
                    this.guardaCambioTasa(itemE);
                }
            });
        }
        // MODELO
        masPPV(id) {
            let itemE;
            itemE = this.jaulas.filter(x => x._id == id)[0];
            //itemE.ppv = parseFloat((itemE.ppv + 0.01).toFixed(4));
            itemE.ppv = itemE.ppv + 0.01;
            if (itemE.ppv >= 2) {
                itemE.ppv = 2;
            }
            this.guardaCambioTasa(itemE);
            //this.recalculaTabla(id);
        }
        menosPPV(id) {
            let itemE;
            itemE = this.jaulas.filter(x => x._id == id)[0];
            //itemE.ppv = parseFloat((itemE.ppv - 0.01).toFixed(4));
            itemE.ppv = itemE.ppv - 0.01;
            if (itemE.ppv <= 0.01) {
                itemE.ppv = 0.01;
            }
            this.guardaCambioTasa(itemE);
            //this.recalculaTabla(id);
        }
        masPPM(id) {
            let itemE;
            itemE = this.jaulas.filter(x => x._id == id)[0];
            itemE.ppm = itemE.ppm + 0.01;
            if (itemE.ppm >= 2) {
                itemE.ppm = 2;
            }
            this.guardaCambioTasa(itemE);
            //this.recalculaTabla(id);
        }
        menosPPM(id) {
            let itemE;
            itemE = this.jaulas.filter(x => x._id == id)[0];
            itemE.ppm = itemE.ppm - 0.01;
            if (itemE.ppm <= 0.01) {
                itemE.ppm = 0.01;
            }
            this.guardaCambioTasa(itemE);
            //this.recalculaTabla(id);
        }
        guardaCambioTasa(jaula) {
            var itemTasas;
            //Consultar si esta aliemntando
            var linea_m;
            var doser_sel;
            var silo_sel;
            var id_li = jaula.linea;
            linea_m = this.lineaEstado.filter(x => x._id == id_li)[0];
            if (jaula.estado && linea_m.estado == 'Alimentando') {
                if (jaula.med_sel) {
                    doser_sel = this.dosers.filter(x => x._id == jaula.doser_med)[0];
                }
                else {
                    doser_sel = this.dosers.filter(x => x._id == jaula.doser)[0];
                }
                silo_sel = this.silos.filter(x => x._id == doser_sel.silo)[0];
                let ts = new Date();
                itemTasas = {
                    jaula: jaula._id,
                    alimento: silo_sel.alimentos[0].alimento,
                    silo: silo_sel._id,
                    ts: ts,
                    kg_min: jaula.kg_min,
                    ppm: jaula.ppm,
                    ppv: jaula.ppv,
                };
                this._tasasService.registraItem(itemTasas)
                    .subscribe((resp) => {
                    this.recalculaTabla(jaula._id);
                });
            }
            else {
                this.recalculaTabla(jaula._id);
            }
        }
        // la siguiente funcion al parecer no se ocupa
        cambia_tasa(idjaula) {
            var jaulaSel;
            var ppk;
            jaulaSel = this.jaulas.filter(x => x._id == idjaula)[0];
            ppk = this.getAlimento(jaulaSel.doser).ppk; // Falta determinar si está entregando medicado
            jaulaSel.kg_min = jaulaSel.ppm * jaulaSel.peces / ppk;
            this._jaulaService.actualizarItem(jaulaSel)
                .subscribe((resp) => {
                this.enviaSetJaula(jaulaSel);
                //console.log('cambio tasa');
            });
        }
        //Obtener Pellet por kilo
        getAlimento(idDoser) {
            let siloSel;
            let alimentoSel;
            siloSel = this.getSilo(idDoser);
            alimentoSel = this.alimentos.filter(x => x._id == siloSel.alimentos[0].alimento)[0];
            return alimentoSel;
        }
        recalculaTabla(idjaula) {
            var LT = [];
            //numeroJaulas la clave es el _id. Diferente a funciones similares en Importar plan
            var numeroJaulas = this.jaulas.reduce((contadorJaula, n_linea) => {
                //if (n_linea.en_ciclo){
                contadorJaula[n_linea.linea] = (contadorJaula[n_linea.linea] || 0) + 1;
                //}
                return contadorJaula;
            }, {});
            for (let j of this.jaulas) {
                var PPK;
                if (j.med_sel) {
                    PPK = this.getAlimento(j.doser_med).ppk;
                }
                else {
                    PPK = this.getAlimento(j.doser).ppk;
                }
                var linea = j.linea;
                let P = j.peces;
                let KT = j.kg_tot;
                let TS = (j.tpo_sop) / 60; //Tiempo de soplado [min]
                let PPM = j.ppm;
                let PPV = j.ppv;
                let TEV = PPV / PPM;
                let min_visita = TEV + TS;
                let T = (P * PPM) / PPK; //Tasa[Kg/min]
                let TAj = KT / T; // Tiempo total[min] de alimentación por jaula
                let V = TAj / TEV;
                let KPV = (P * PPV) / PPK; // Kilos por visita por jaula
                var mintot = min_visita * V;
                j.min_visita = min_visita;
                j.kg_min = T;
                j.visitas = V;
                j.kg_visita = KPV;
                if ((idjaula != 'null') && (idjaula == j._id)) {
                    this._jaulaService.actualizarItem(j)
                        .subscribe((resp) => {
                        this.enviaSetJaula(j);
                    });
                }
                //ESTO ES PARA LA JAULA VIRTUAL CUANDO HAY SOLO UNA JAULA
                let numJau = numeroJaulas[linea];
                if (numJau == 1) {
                    mintot = 2 * mintot;
                }
                //Crear array lineas
                let iLT = LT.map(x => x.linea).indexOf(linea);
                if (iLT == -1) {
                    var lt;
                    lt = {
                        linea: linea,
                        tpo: mintot
                    };
                    LT.push(lt);
                }
                else {
                    LT[iLT].tpo += mintot;
                }
            }
            for (let li of this.lineaEstado) {
                let lts;
                // let tpoLinea;
                lts = LT.filter(x => x.linea == li._id)[0];
                let minEfectivos = this.plan.hrsefectivas * 60;
                li.tpo_disp = minEfectivos - lts.tpo;
            }
        }
        getClassTpoDisp(diffTpo) {
            let clase = "";
            let limite = 9; // 0.15 hrs en minutos
            if (Math.abs(diffTpo) <= limite) {
                clase = "text-success";
            }
            if (diffTpo < -limite) {
                clase = "text-danger";
            }
            if (diffTpo > limite) {
                clase = "text-warning";
            }
            return clase;
        }
    }
    Dashboard1Component.ɵfac = function Dashboard1Component_Factory(t) { return new (t || Dashboard1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_4__["JaulaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_4__["LineaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_4__["DoserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_4__["SiloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_4__["PlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_4__["ModelosfrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_4__["CanvasdrawService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_4__["AlimentoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_4__["SelectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_4__["AlimentacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_4__["TasasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
    Dashboard1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Dashboard1Component, selectors: [["app-dashboard"]], viewQuery: function Dashboard1Component_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
            }
        }, decls: 20, vars: 10, consts: [["fxLayout", "row wrap", "fxLayoutGap", "0.5%"], ["fxLayout", "row wrap"], ["fxFlex", "initial"], [3, "fxFlex"], ["width", "180", "height", "600", "id", "plano", 3, "ngClass"], ["canvas", ""], ["fxFlex", "auto"], ["fxFlex", "320px"], [1, "text-white", 3, "ngClass"], [4, "ngIf"], ["fxFlex", "100", "fxFlex.gt-xs", "50", "fxFlex.gt-sm", "75", "fxFlex.gt-md", "80"], ["fxLayout", "row wrap", "fxLayoutGap", "1px", 4, "ngFor", "ngForOf"], ["href", "javascript:location.reload()", 1, ""], ["fxLayout", "row wrap", "fxLayoutGap", "1px"], [1, "bg-inverse", "text-white", "m-t-10"], ["fxLayout", "row wrap", "fxLayoutGap", "5px", 1, "p-0"], ["fxFlex", "45px", "fxLayoutAlign", "center center", 1, "p-10", "b-r", "text-center"], [1, "m-0"], ["fxFlex", "100px", 1, "p-10", "0", "b-r"], ["fxFlex", "50%"], ["fxFlex", "100px", 1, "p-10"], ["matRipple", "", "matRippleCentered", "true", "class", "ti-control-play text-info puntero", "matTooltip", "Iniciar Alimentaci\u00F3n", 3, "click", 4, "ngIf"], ["matRipple", "", "matRippleCentered", "true", "class", "ti-control-stop text-danger puntero", "matTooltip", "Detener Alimentaci\u00F3n", 3, "click", 4, "ngIf"], ["class", "m-0 text-muted", 4, "ngIf"], ["class", "m-0 text-danger", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["matRipple", "", "matRippleCentered", "true", "matTooltip", "Iniciar Alimentaci\u00F3n", 1, "ti-control-play", "text-info", "puntero", 3, "click"], ["matRipple", "", "matRippleCentered", "true", "matTooltip", "Detener Alimentaci\u00F3n", 1, "ti-control-stop", "text-danger", "puntero", 3, "click"], [1, "m-0", "text-muted"], [1, "m-0", "text-danger"], ["fxFlex", "220px", "class", "p-10", 4, "ngIf"], ["fxFlex", "220px", 1, "p-10"], [1, "flip-card"], [1, "flip-card-inner", 3, "click"], [1, "flip-card-front", "bg-inverse", "text-white", 3, "ngClass"], ["fxFlex", "80px", 1, "p-10", "b-r", "text-center"], ["color", "primary", "mode", "determinate", 1, "m-t-10", 3, "value"], ["fxFlex", "80px", 1, "p-10", "p-l-0", "text-left"], [1, "m-0", "m-b-9"], ["fxLayout", "column", "fxFlex", "10px", "fxLayoutAlign", "center center", 1, "p-l-5"], [1, "p-10", 3, "checked", "change"], [1, "puntero"], ["id", "flip", "matRipple", "", "matRippleCentered", "true", 1, "ti-back-right"], [1, "flip-card-back", "bg-inverse", "text-muted", 3, "ngClass"], ["fxLayout", "row wrap", "fxLayoutGap", "1px", "fxLayoutAlign", "start"], ["fxFlex", "80px", 1, "p-l-5", "p-t-2", "text-left", "b-r"], [1, "m-0", "m-b-5"], ["fxFlex", "80px"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["mat-icon-button", "", 3, "click"], ["fxFlex", "20px", 1, "p-l-5", "m-t-5", "text-center"], [1, "puntero", 3, "click"], ["id", "config_jaula", "matRipple", "", "matRippleCentered", "true", 1, "ti-settings"], [1, "p-t-20", "puntero"]], template: function Dashboard1Component_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 4, 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-header", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Estado PLC");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Dashboard1Component_mat_card_subtitle_12_Template, 2, 0, "mat-card-subtitle", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Dashboard1Component_mat_card_subtitle_13_Template, 4, 0, "mat-card-subtitle", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Dashboard1Component_div_19_Template, 52, 18, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", ctx.wCanvas);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.puntero);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.estadoPLC ? "bg-info" : "bg-warning");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estadoPLC);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.estadoPLC);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00DAltima conexi\u00F3n:\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 7, ctx.ultimaConexion, "shortTime"), " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lineaEstado);
            }
        }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRipple"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: ["#plano[_ngcontent-%COMP%] {\n  \n  \n  background-color: rgba(0, 0, 0, 0);\n  background-size: 100% 100%;\n  \n  width: 100%;\n  margin: 0 auto;\n  display: block;\n  \n}\n\n.linkModalSop[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.linkModalJau[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.puntero[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.leftbar[_ngcontent-%COMP%] {\n  \n  \n}\n\n.leftbarCat0[_ngcontent-%COMP%] {\n  border-right: 5px solid #03a5b299;\n}\n\n.leftbarCat1[_ngcontent-%COMP%] {\n  border-right: 5px solid #8bb92599;\n}\n\n.leftbarCat2[_ngcontent-%COMP%] {\n  border-right: 5px solid #ec7b2d99;\n}\n\n.leftbarCat3[_ngcontent-%COMP%] {\n  border-right: 5px solid #cf2f3199;\n}\n\n.leftbarpos[_ngcontent-%COMP%] {\n  \n  border: 3px solid #FF9800 !important;\n}\n\n.leftbaralim[_ngcontent-%COMP%] {\n  border-left: 3px solid #64DD17 !important;\n  border-top: 3px solid #64DD17 !important;\n  border-bottom: 3px solid #64DD17 !important;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.flip-card[_ngcontent-%COMP%] {\n  \n  \n  background-color: transparent;\n  width: 200px;\n  height: 90px;\n  \n  perspective: 1000px;\n  \n}\n\n\n\n.flip-card-inner[_ngcontent-%COMP%] {\n  \n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n\n\n\n.flip-card-inner.flipped[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n\n\n\n.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%] {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  box-shadow: 3px 5px 20px 2px rgba(0, 0, 0, 0.25);\n}\n\n\n\n.flip-card-front[_ngcontent-%COMP%] {\n  \n  \n  transform: rotateY(0deg);\n}\n\n\n\n.flip-card-back[_ngcontent-%COMP%] {\n  \n  \n  transform: rotateY(180deg);\n}\n\n.p-t-1[_ngcontent-%COMP%] {\n  padding-top: 0.1em;\n}\n\n.p-t-2[_ngcontent-%COMP%] {\n  padding-top: 0.2em;\n}\n\n.p-t-5[_ngcontent-%COMP%] {\n  padding-top: 0.5em;\n}\n\n.p-t-6[_ngcontent-%COMP%] {\n  padding-top: 0.6em;\n}\n\n.p-t-7[_ngcontent-%COMP%] {\n  padding-top: 0.7em;\n}\n\n.p-l-5[_ngcontent-%COMP%] {\n  padding-left: 0.5em;\n}\n\n.m-b-9[_ngcontent-%COMP%] {\n  margin-bottom: 0.9em;\n}\n\n\n\n.pad[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n}\n\n.single-block[_ngcontent-%COMP%] {\n  flex: auto;\n  min-height: 40px;\n  min-width: 40px;\n  display: inline-block;\n  border: none;\n  margin-right: 5px;\n  cursor: pointer;\n  border-radius: 5px;\n  text-align: center;\n  border-color: green;\n  border-style: solid;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  color: black;\n  background: #ffffff;\n  text-transform: uppercase;\n  padding: 20px;\n  border: 5px solid black;\n  border-radius: 6px;\n  display: inline-block;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  background: green;\n  transition: all 0.4s ease 0s;\n}"] });
    return Dashboard1Component;
})();
// MODALES
let ModalsopladorComponent = /*@__PURE__*/ (() => {
    class ModalsopladorComponent {
        constructor(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        onNoClick() {
            this.dialogRef.close();
        }
    }
    ModalsopladorComponent.ɵfac = function ModalsopladorComponent_Factory(t) { return new (t || ModalsopladorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    ModalsopladorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalsopladorComponent, selectors: [["app-modalsoplador"]], decls: 16, vars: 3, consts: [["mat-dialog-title", ""], ["fxLayout", "row wrap", 2, "font-size", "12px"], ["fxFlexAlign", "start ", "fxFlex", "90%", 1, "m-r-20", "m-b-20"], ["fxLayout", "row wrap", "fxLayoutGap", "1px", "fxLayoutAlign", "start center"], [1, "m-b-15", "m-t-0"], ["max", "56", "min", "0", "step", "1", 3, "thumbLabel", "ngModel", "ngModelChange"], ["mat-dialog-actions", "", 1, "m-t-20"], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function ModalsopladorComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-slide-toggle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Control x Jaula ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Frecuencia");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-slider", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModalsopladorComponent_Template_mat_slider_ngModelChange_9_listener($event) { return ctx.data.hz = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Hz ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalsopladorComponent_Template_button_click_12_listener() { return ctx.onNoClick(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancelar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ok");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Blower L\u00EDnea:\u00A0", ctx.data.nombre, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("thumbLabel", true)("ngModel", ctx.data.hz);
            }
        }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });
    return ModalsopladorComponent;
})();
let ModaljaulaComponent = /*@__PURE__*/ (() => {
    class ModaljaulaComponent {
        constructor(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        onNoClick() {
            this.dialogRef.close();
        }
        arrayOne(n) {
            return Array(n);
        }
    }
    ModaljaulaComponent.ɵfac = function ModaljaulaComponent_Factory(t) { return new (t || ModaljaulaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    ModaljaulaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModaljaulaComponent, selectors: [["app-modaljaula"]], decls: 47, vars: 29, consts: [["mat-dialog-title", ""], ["fxLayout", "row wrap", "fxLayoutGap", "1px", "fxLayoutAlign", "center center"], [2, "width", "100%", "font-size", "12px"], ["placeholder", "Grupo", 3, "ngModel", "ngModelChange"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["fxLayout", "row wrap", 2, "font-size", "12px"], ["fxFlexAlign", "start ", "fxFlex", "70%", 1, "m-r-20", "m-b-20"], [3, "ngModel", "ngModelChange"], ["fxLayout", "row wrap", 2, "width", "100%", "font-size", "12px"], ["fxFlex", "50%"], [1, "m-0"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "m-t-40"], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function ModaljaulaComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModaljaulaComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.data.categoria = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Grupo 1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Grupo 2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Grupo 3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Grupo 4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-slide-toggle", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModaljaulaComponent_Template_mat_slide_toggle_ngModelChange_15_listener($event) { return ctx.data.jaula.manual = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Dado Normal:\u00A0\u00A0\u00A0");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Dado Medicado:\u00A0\u00A0\u00A0");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Dado Total:\u00A0\u00A0\u00A0");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "number");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModaljaulaComponent_Template_button_click_43_listener() { return ctx.onNoClick(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cancelar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Ok");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Jaula:\u00A0", ctx.data.jaula.nombre, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.categoria);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.jaula.manual);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.jaula.manual ? "Monoraci\u00F3n" : "Micro/Miniraci\u00F3n", " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 11, ctx.data.entregado, "1.1-1"), "\u00A0Kg\u00A0/\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 14, ctx.data.jaula.kg_tot - ctx.data.jaula.obj_med, "1.1-1"), "\u00A0Kg");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 17, ctx.data.entregadomed, "1.1-1"), "\u00A0Kg\u00A0/\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 20, ctx.data.jaula.obj_med, "1.1-1"), "\u00A0Kg");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](40, 23, ctx.data.entregadototal, "1.1-1"), "\u00A0Kg\u00A0/\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](41, 26, ctx.data.jaula.kg_tot, "1.1-1"), "\u00A0Kg");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
            }
        }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], encapsulation: 2 });
    return ModaljaulaComponent;
})();


/***/ }),

/***/ "./src/app/dashboards/dashboards.module.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboards/dashboards.module.ts ***!
  \*************************************************/
/*! exports provided: DashboardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsModule", function() { return DashboardsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _dashboards_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboards.routing */ "./src/app/dashboards/dashboards.routing.ts");
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboards/dashboard1/dashboard1.component.ts");
/* harmony import */ var _importar_importar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./importar/importar.component */ "./src/app/dashboards/importar/importar.component.ts");
// import 'hammerjs';







// import { ChartistModule } from 'ng-chartist';
// import { ChartsModule } from 'ng2-charts';






let DashboardsModule = /*@__PURE__*/ (() => {
    class DashboardsModule {
    }
    DashboardsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardsModule });
    DashboardsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardsModule_Factory(t) { return new (t || DashboardsModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _demo_material_module__WEBPACK_IMPORTED_MODULE_4__["DemoMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                // ChartistModule,
                // ChartsModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboards_routing__WEBPACK_IMPORTED_MODULE_6__["DashboardsRoutes"])
            ]] });
    return DashboardsModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardsModule, { declarations: [_dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_7__["Dashboard1Component"],
            _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_7__["ModalsopladorComponent"],
            _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_7__["ModaljaulaComponent"],
            _importar_importar_component__WEBPACK_IMPORTED_MODULE_8__["ImportarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _demo_material_module__WEBPACK_IMPORTED_MODULE_4__["DemoMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
})();


/***/ }),

/***/ "./src/app/dashboards/dashboards.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboards/dashboards.routing.ts ***!
  \**************************************************/
/*! exports provided: DashboardsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsRoutes", function() { return DashboardsRoutes; });
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboards/dashboard1/dashboard1.component.ts");
/* harmony import */ var _importar_importar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./importar/importar.component */ "./src/app/dashboards/importar/importar.component.ts");


const DashboardsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard1',
                component: _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_0__["Dashboard1Component"]
                // ,canActivate: [ VerificaTokenGuard ]
            },
            {
                path: 'importar',
                component: _importar_importar_component__WEBPACK_IMPORTED_MODULE_1__["ImportarComponent"]
                // ,canActivate: [ VerificaTokenGuard ]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/dashboards/importar/importar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboards/importar/importar.component.ts ***!
  \***********************************************************/
/*! exports provided: ImportarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportarComponent", function() { return ImportarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_es_CL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/es-CL */ "./node_modules/@angular/common/locales/es-CL.js");
/* harmony import */ var _angular_common_locales_es_CL__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_CL__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_locales_extra_es_CL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/extra/es-CL */ "./node_modules/@angular/common/locales/extra/es-CL.js");
/* harmony import */ var _angular_common_locales_extra_es_CL__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_es_CL__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_service_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/service.index */ "./src/app/services/service.index.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");




























const _c0 = ["paginatorObjeto"];
function ImportarComponent_small_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este campo es requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_small_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este campo es requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_small_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este campo es requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_small_28_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este campo es requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_small_35_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este campo es requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_small_39_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este campo es requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_small_40_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ajustar para tener horas disponibles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_small_44_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este campo es requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_small_45_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ajustar para tener horas disponibles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_small_49_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este campo es requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_small_53_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este campo es requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_small_57_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este campo es requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_div_93_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_th_96_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "En\u00A0Ciclo\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_97_Template(rf, ctx) {
    if (rf & 1) {
        const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ImportarComponent_td_97_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const row_r74 = ctx.$implicit; return row_r74.en_ciclo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r74 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", row_r74.en_ciclo);
    }
}
function ImportarComponent_th_99_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "L\u00EDnea\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_100_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r77 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r77.linea);
    }
}
function ImportarComponent_th_102_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Jaula\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_103_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r78 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r78.jaula, "");
    }
}
function ImportarComponent_th_105_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Alias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_106_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r79 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r79.aliasJaula, "");
    }
}
function ImportarComponent_th_108_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0N\u00BA\u00A0Peces\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_109_Template(rf, ctx) {
    if (rf & 1) {
        const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportarComponent_td_109_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const row_r80 = ctx.$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.editarPeces(row_r80._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r80 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !row_r80.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, row_r80.peces, "1.0-0"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    }
}
function ImportarComponent_th_111_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0Peso(gr)\u00A0\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_112_Template(rf, ctx) {
    if (rf & 1) {
        const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportarComponent_td_112_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const row_r83 = ctx.$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.editarPeso(row_r83._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r83 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !row_r83.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, row_r83.peso, "1.0-2"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    }
}
function ImportarComponent_th_114_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Biomasa\u00A0(Tons)\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_115_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r86 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r86.biomasa, "1.0-3"), "");
    }
}
function ImportarComponent_th_117_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tasa\u00A0PPV\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_118_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportarComponent_td_118_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const row_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.clonarPPV(row_r87._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "content_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !row_r87.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    }
}
function ImportarComponent_td_118_Template(rf, ctx) {
    if (rf & 1) {
        const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportarComponent_td_118_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const row_r87 = ctx.$implicit; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.editarPPV(row_r87._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImportarComponent_td_118_button_8_Template, 3, 2, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r87 = ctx.$implicit;
        const iData_r88 = ctx.index;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !row_r87.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", row_r87.txtClassPPV);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, row_r87.ppv, "1.0-2"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", iData_r88 == 0);
    }
}
function ImportarComponent_th_120_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tasa\u00A0PPM\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_121_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportarComponent_td_121_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const row_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.clonarPPM(row_r96._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "content_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !row_r96.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    }
}
function ImportarComponent_td_121_Template(rf, ctx) {
    if (rf & 1) {
        const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportarComponent_td_121_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const row_r96 = ctx.$implicit; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.editarPPM(row_r96._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImportarComponent_td_121_button_8_Template, 3, 2, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r96 = ctx.$implicit;
        const iData_r97 = ctx.index;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !row_r96.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", row_r96.txtClassPPM);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, row_r96.ppm, "1.0-2"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", iData_r97 == 0);
    }
}
function ImportarComponent_th_123_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "grs/min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_124_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r105 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r105.kgm * 1000, "1.0-1"), "");
    }
}
function ImportarComponent_th_126_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Ajuste\u00A0SGR\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_127_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportarComponent_td_127_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const row_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r109.clonarSFR(row_r106._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "content_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !row_r106.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    }
}
function ImportarComponent_td_127_Template(rf, ctx) {
    if (rf & 1) {
        const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportarComponent_td_127_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114); const row_r106 = ctx.$implicit; const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.editarSFR(row_r106._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImportarComponent_td_127_button_8_Template, 3, 2, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r106 = ctx.$implicit;
        const iData_r107 = ctx.index;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !row_r106.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, row_r106.fasfr, "1.0-2"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", iData_r107 == 0);
    }
}
function ImportarComponent_th_129_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0SGR\u00A0Modelo\u00A0\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_130_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r115 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r115.sfrmod, "1.0-2"), "");
    }
}
function ImportarComponent_th_132_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0SGR\u00A0Real\u00A0\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_133_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r116 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r116.realsfr, "1.0-2"), "");
    }
}
function ImportarComponent_th_135_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Visitas\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_136_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportarComponent_td_136_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const row_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r120.clonarVisitas(row_r117._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "content_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !row_r117.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    }
}
function ImportarComponent_td_136_Template(rf, ctx) {
    if (rf & 1) {
        const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportarComponent_td_136_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125); const row_r117 = ctx.$implicit; const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r124.editarVisitas(row_r117._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImportarComponent_td_136_button_8_Template, 3, 2, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r117 = ctx.$implicit;
        const iData_r118 = ctx.index;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !row_r117.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, row_r117.visitas, "1.0-0"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", iData_r118 == 0);
    }
}
function ImportarComponent_th_138_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "grs/Visita\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_139_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r126 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r126.kgvisita * 1000, "1.0-1"), "");
    }
}
function ImportarComponent_th_141_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0Kg\u00A0Tot\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_142_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r127 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r127.kgtot, "1.0-2"));
    }
}
function ImportarComponent_th_144_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0Kg\u00A0primario\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_145_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r128 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r128.kgprim, "1.0-2"), "");
    }
}
function ImportarComponent_th_147_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0Kg\u00A0secundario\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_148_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportarComponent_td_148_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const row_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r132.clonarKgsecu(row_r129._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "content_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !row_r129.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    }
}
function ImportarComponent_td_148_Template(rf, ctx) {
    if (rf & 1) {
        const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportarComponent_td_148_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r137); const row_r129 = ctx.$implicit; const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r136.editarKgsecu(row_r129._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImportarComponent_td_148_button_8_Template, 3, 2, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r129 = ctx.$implicit;
        const iData_r130 = ctx.index;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !row_r129.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, row_r129.kgsecu, "1.0-2"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", iData_r130 == 0);
    }
}
function ImportarComponent_th_150_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Silo\u00A0primario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_151_mat_option_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const silo_r140 = ctx.$implicit;
        const i_r141 = ctx.index;
        const row_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", silo_r140._id)("disabled", !row_r138.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", silo_r140.nombre, "\u00A0[ ", row_r138.alimentos[i_r141].nombre, " ]\u00A0\u00A0", row_r138.alimentos[i_r141].medicado ? "[ Medicado ]" : "", "");
    }
}
function ImportarComponent_td_151_Template(rf, ctx) {
    if (rf & 1) {
        const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ImportarComponent_td_151_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144); const row_r138 = ctx.$implicit; return row_r138.silo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImportarComponent_td_151_mat_option_3_Template, 2, 5, "mat-option", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r138 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", row_r138.silo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r138.silos);
    }
}
function ImportarComponent_th_153_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Silo\u00A0Secundario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_154_mat_option_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const silo_r147 = ctx.$implicit;
        const i_r148 = ctx.index;
        const row_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", silo_r147._id)("disabled", !row_r145.en_ciclo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", silo_r147.nombre, "\u00A0[ ", row_r145.alimentos[i_r148].nombre, " ]\u00A0\u00A0", row_r145.alimentos[i_r148].medicado ? "[ Medicado ]" : "", "");
    }
}
function ImportarComponent_td_154_Template(rf, ctx) {
    if (rf & 1) {
        const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ImportarComponent_td_154_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151); const row_r145 = ctx.$implicit; return row_r145.silomed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImportarComponent_td_154_mat_option_3_Template, 2, 5, "mat-option", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r145 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", row_r145.silomed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r145.silos);
    }
}
function ImportarComponent_th_156_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PPK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_157_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r152 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r152.ppk, "1.0-1"));
    }
}
function ImportarComponent_th_159_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Segundos Entrega Visita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_160_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r153 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r153.tpoalim, "1.0-0"));
    }
}
function ImportarComponent_th_162_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tpo soplado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_163_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r154 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r154.tposop, "1.0-1"));
    }
}
function ImportarComponent_th_165_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minutos Visita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_166_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r155 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", row_r155.txtClassPPV);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, row_r155.minvisita, "1.0-2"));
    }
}
function ImportarComponent_th_168_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minutos Total Jaula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_169_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r156 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r156.mintot, "1.0-1"));
    }
}
function ImportarComponent_th_171_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hrs Total L\u00EDnea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_172_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r157 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", row_r157.txtClassPPM);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, row_r157.tpoLinea, "1.0-2"));
    }
}
function ImportarComponent_th_174_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "N\u00BA Peces por Ton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_175_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r158 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r158.peceston, "1.0-0"));
    }
}
function ImportarComponent_th_177_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "N\u00BA Pellet x Visita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_178_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r159 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r159.pporv, "1.0-0"));
    }
}
function ImportarComponent_th_180_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ImportarComponent_td_181_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const row_r160 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r160._id);
    }
}
function ImportarComponent_tr_182_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 90);
    }
}
function ImportarComponent_tr_183_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 91);
    }
}
const _c1 = function () { return [25, 50, 75]; };
Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_es_CL__WEBPACK_IMPORTED_MODULE_4___default.a, 'es-CL', _angular_common_locales_extra_es_CL__WEBPACK_IMPORTED_MODULE_5___default.a);
let ImportarComponent = /*@__PURE__*/ (() => {
    class ImportarComponent {
        constructor(_blucontrolService, _jaulaService, _planService, _modelosfrService, _doserService, _siloService, _alimentoService, datePipe, fb) {
            //MUESTREO STOCK OBJETOS
            // this.suscribirConsultaConexion = this.observableConsultaConexion().pipe( retry() )
            //   .subscribe ( () =>{
            //        if(navigator.onLine) {
            //         this.conexion=true;
            //       } else {
            //         this.conexion=false;
            //       }
            // });
            this._blucontrolService = _blucontrolService;
            this._jaulaService = _jaulaService;
            this._planService = _planService;
            this._modelosfrService = _modelosfrService;
            this._doserService = _doserService;
            this._siloService = _siloService;
            this._alimentoService = _alimentoService;
            this.datePipe = datePipe;
            this.fb = fb;
            this.estadoAceptar = "";
            this.verdetalles = false;
            this.flgError = false;
            //lastImportDate: Date= new Date();
            this.conexion = false;
            this.token_valido = false;
            this.isLoadingResultsObjeto = true;
            this.displayedColumnsObjeto = [];
            this.displayedColumnsObjetoDetalle = [
                'en_ciclo',
                'linea',
                'jaula',
                // 'aliasJaula',   
                'peces',
                'peso',
                'biomasa',
                'sfrmod',
                'fasfr',
                'realsfr',
                'ppm',
                'ppv',
                'kgm',
                'visitas',
                'kgvisita',
                'kgtot',
                'kgprim',
                'kgsecu',
                'silo',
                'silomed',
                'tpoalim',
                'tposop',
                // 'tposisel',   
                // 'tposeljau',  
                'minvisita',
                'mintot',
                'tpoLinea',
                'ppk',
                'peceston',
                'pporv'
            ];
            this.displayedColumnsObjetoSinDetalle = [
                'en_ciclo',
                'linea',
                'jaula',
                // 'aliasJaula',
                'fasfr',
                'ppm',
                'ppv',
                'kgm',
                'visitas',
                'kgvisita',
                'kgtot',
                'kgprim',
                'kgsecu',
                'silo',
                'silomed',
                'minvisita',
                'mintot',
                'tpoLinea'
            ];
            this.jaulasEstado = [];
            this.dosers = [];
            this.silos = [];
            this.alimentos = [];
            this.inicializaFormConfigObjeto();
            //Obtiene los cambios en formulario
            this.formConfigObjeto.get('especie').valueChanges.subscribe((val) => {
                this.plan.especie = val;
                this.seleccionaModelo();
            });
            this.formConfigObjeto.get('inialim').valueChanges.subscribe((val) => {
                this.plan.inialim = val;
                this.calculaHrsDisponbles();
            });
            this.formConfigObjeto.get('finalim').valueChanges.subscribe((val) => {
                this.plan.finalim = val;
                this.calculaHrsDisponbles();
            });
            this.formConfigObjeto.get('hrsnoalim').valueChanges.subscribe((val) => {
                this.plan.hrsnoalim = val;
                this.calculaHrsDisponbles();
            });
            this.displayedColumnsObjeto = this.displayedColumnsObjetoSinDetalle;
        }
        ngOnInit() {
            // if(navigator.onLine) {
            //   this.conexion=true;
            // } else {
            //   this.conexion=false;
            // }
            this.cargaModelosfr();
        }
        ngOnDestroy() {
            // this.suscribirConsultaConexion.unsubscribe();
        }
        // observableConsultaConexion(): Observable<any>{
        //   return new Observable( observer =>{
        //     let intervalo = setInterval(() =>{
        //         observer.next();
        //     }, 1000);
        //   });
        // }
        applyFilterObjeto(filterValue) {
            this.dataSourceObjeto.filter = filterValue.trim().toLowerCase();
            if (this.dataSourceObjeto.paginator) {
                this.dataSourceObjeto.paginator.firstPage();
            }
        }
        inicializaFormConfigObjeto() {
            this.formConfigObjeto = this.fb.group({
                especie: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: null, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                temperatura: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: null, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: null, disabled: false }),
                inialim: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: null, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                finalim: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: null, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                hrsnoalim: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: null, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                hrsdisponible: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: null, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                hrsefectivas: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: null, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                centro: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: null, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                idcentro: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: null, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                minutosVisita: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: null, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            });
        }
        setFormConfigObjeto(item) {
            this.formConfigObjeto.setValue({
                especie: item.especie,
                temperatura: item.temperatura,
                fecha: this.datePipe.transform(item.fecha, 'yyyy-MM-dd'),
                inialim: item.inialim,
                finalim: item.finalim,
                hrsnoalim: item.hrsnoalim.toFixed(2),
                hrsdisponible: item.hrsdisponible.toFixed(2),
                hrsefectivas: item.hrsefectivas.toFixed(2),
                centro: item.centro,
                idcentro: item.idcentro,
                minutosVisita: item.minutosVisita
            });
        }
        //IMPORTAR
        importarDatos() {
            let hoy = new Date();
            let fecha = this.datePipe.transform(hoy, 'yyyy-MM-dd');
            //borrar
            //fecha = '2020-05-08'  //borrar
            //console.log('Borrar linea 305')
            this._blucontrolService.get_plan(this.plan.idcentro, fecha)
                .subscribe((val) => {
                this.planificacion = val;
            }, err => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: 'No se pudo realizar la importación',
                    text: 'Es posible que no existan datos cargados',
                    icon: 'error',
                });
            }, () => {
                //despues de una buena respuesta
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: '¿Desea importar planificación?',
                    text: 'Fecha: ' + hoy,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirmar '
                }).then((result) => {
                    if (result.value) {
                        this.copiaBC_to_JaulasEstado();
                    }
                });
            });
        }
        //importar datos de plan a JaulaS
        copiaBC_to_JaulasEstado() {
            let jauE_bf; //Jaula estado en blufeeder
            //Colocar todas las jaulas en en_ciclo = false
            this.jaulasEstado.map(x => x.en_ciclo = false);
            for (let jau_bc of this.planificacion.planes) {
                //consultar si exixte la jaula en blufeeder
                jauE_bf = this.jaulasEstado.filter((jauE) => jauE.jaula == jau_bc.jaulaAlias.numeroJaula.toString());
                if (jauE_bf.length != 0) {
                    jauE_bf[0].peces = jau_bc.numeroInicialPeces;
                    jauE_bf[0].peso = jau_bc.pesoInicial;
                    jauE_bf[0].fasfr = jau_bc.factorAjusteSfr;
                    jauE_bf[0].realsfr = jau_bc.sfr;
                    jauE_bf[0].visitas = jau_bc.numeroVisitas;
                    jauE_bf[0].kgtot = jau_bc.kgTotal;
                    jauE_bf[0].kgprim = jau_bc.kgTotal - jau_bc.kgTotalMedicado;
                    jauE_bf[0].kgsecu = jau_bc.kgTotalMedicado;
                    jauE_bf[0].kgvisita = jau_bc.kgVisita;
                    jauE_bf[0].en_ciclo = true;
                    jauE_bf[0].ppv = jau_bc.pelletsPezVisita;
                    jauE_bf[0].ppm = jau_bc.tasaPpm;
                    jauE_bf[0].kgm = jau_bc.velocidad;
                    jauE_bf[0].tpoalim = jau_bc.minTotalVisita * 60; //Tiempo [seg] de entrega de alimento por visita por jaula
                    jauE_bf[0].tposop = jau_bc.minSoplado * 60;
                    ;
                    jauE_bf[0].minvisita = jau_bc.minTotalVisita + jau_bc.minSoplado; // min alimentando mas soplado por jaula por visita
                    jauE_bf[0].mintot = jau_bc.hrsTotalEntrega * 60; //Cambia hrs a min
                    jauE_bf[0].tpoLinea = jau_bc.hrsTotalEntregaLinea; //tpo [hr] que demora la linea alimentacion mas soplado total
                    jauE_bf[0].sfrmod = jau_bc.sfrModelo;
                }
            }
            this.copiaBC_to_Plan(); //Recalcula todo
        }
        copiaBC_to_Plan() {
            let hoy = new Date();
            this.plan.inialim = this.planificacion.horaInicioAlimentacion;
            this.plan.finalim = this.planificacion.horaFinAlimentacion;
            this.plan.hrsnoalim = this.timeToDecimal(this.planificacion.horasSinAlimentar);
            this.plan.fecha = hoy;
            this.plan.temperatura = this.planificacion.temperatura;
            this.plan.minutosVisita = this.planificacion.minutosVisita;
            this.setFormConfigObjeto(this.plan);
            this.calculaHrsDisponbles();
            this.actualizarObjeto(); // Guardar datos del plan
        }
        timeToDecimal(hora) {
            let a = hora.split(':');
            let hrs = 0;
            if (a.length == 1) {
                hrs = parseInt(a[0]);
            }
            if (a.length == 2) {
                hrs = parseInt(a[0]) + parseInt(a[1]) / 60;
            }
            if (a.length == 3) {
                hrs = parseInt(a[0]) + parseInt(a[1]) / 60 + parseInt(a[2]) / (60 * 60);
            }
            return hrs;
        }
        //ACTUALIZA
        onSubmitObjeto() {
            this.actualizarObjeto();
        }
        //ACTUALIZA DATOS DE PLAN
        actualizarObjeto() {
            let objetoActualizar = this.formConfigObjeto.value; // obtiene solo los habilitados
            objetoActualizar._id = this.plan._id; //Se agrega el _id
            //Lo siguiente es para guardar con los decimales no directo del formulario
            objetoActualizar.hrsefectivas = this.plan.hrsefectivas;
            objetoActualizar.hrsdisponible = this.plan.hrsdisponible;
            objetoActualizar.hrsnoalim = this.plan.hrsnoalim;
            this._planService.actualizarItem(objetoActualizar)
                .subscribe((resp) => {
                this.plan = resp;
                //PARA MULTI
                this.cargaJaulas();
                //PARA BLUFEEDER
                //  this.recalculaTabla();
            });
        }
        cargaModelosfr() {
            this._modelosfrService.itemsTodos()
                .subscribe((resp) => {
                this.modelosfr = resp.items;
                // this.cargaUserBlucontrol();
                this.cargaPlan();
            }, (err) => {
                if (!err.error.ok) {
                    this.cargaPlan();
                }
            });
        }
        cargaUserBlucontrol() {
            this._blucontrolService.itemUltimo()
                .subscribe((resp) => {
                if (resp.items) {
                    this.datosConexionBlucontrol = resp.items;
                    this._blucontrolService.url_blucontrol = this.datosConexionBlucontrol.url_blucontrol;
                    this._blucontrolService.username_blucontrol = this.datosConexionBlucontrol.username;
                    this._blucontrolService.password_blucontrol = this.datosConexionBlucontrol.password;
                    this.cargaPlan();
                }
            });
        }
        cargaPlan() {
            this._planService.itemUltimo()
                .subscribe((resp) => {
                if (resp.items) {
                    this.plan = resp.items;
                    this.setFormConfigObjeto(this.plan);
                    this.cargaDosers();
                }
            });
        }
        cargaDosers() {
            this._doserService.itemsTodos()
                .subscribe((resp) => {
                this.dosers = resp.items;
                this.cargaAlimentos();
            });
        }
        cargaAlimentos() {
            this._alimentoService.itemsTodos()
                .subscribe((resp) => {
                this.alimentos = resp.items;
                this.cargaSilos();
            });
        }
        cargaSilos() {
            this._siloService.itemsTodos()
                .subscribe((resp) => {
                this.silos = resp.items;
                this.cargaJaulas();
            });
        }
        //PARA MULTI
        cargaJaulas() {
            let temp = this.plan.temperatura;
            this._jaulaService.itemsTodosCompletoSGR(temp)
                .subscribe((resp) => {
                this.jaulas = resp.items;
                this.planificacionGuardada();
                // this.autenticar_blucontrol();
            });
        }
        //PARA BLUFEEDER
        // cargaJaulas(){
        //   this._jaulaService.itemsTodosCompleto()
        //       .subscribe( (resp: any) =>{
        //         this.jaulas = resp.items;
        //         this.planificacionGuardada();
        //         this.autenticar_blucontrol();
        //       });
        // }
        autenticar_blucontrol() {
            this.token_valido = false;
            this._blucontrolService.autenticar_blucontrol()
                .subscribe((val) => {
                this.datosConexionBlucontrol.token = val;
                this._blucontrolService.token_blucontrol = val;
            }, err => {
                console.log("Error al conectar con Blucontrol", err);
            }, () => {
                this.token_valido = true;
            });
        }
        seleccionaModelo() {
            this.modelo = this.modelosfr.filter(x => x.especie == this.plan.especie)[0];
        }
        // calculaHrsDisponbles1(){
        //   var hI: number;
        //   var mI: number;
        //   var hF: number;
        //   var mF: number;
        //   var 
        //   hI = parseInt(this.plan.inialim.slice(0,2)) + parseInt(this.plan.inialim.slice( -2))/60;
        //   hF = parseInt(this.plan.finalim.slice(0,2)) + parseInt(this.plan.finalim.slice( -2))/60;
        //   if (hF - hI - this.plan.hrsnoalim >= 0){
        //     this.flgError = false;
        //     this.plan.hrsdisponible=hF-hI;
        //     this.plan.hrsefectivas = this.plan.hrsdisponible - this.plan.hrsnoalim;
        //     this.formConfigObjeto.controls['hrsdisponible'].setValue(this.plan.hrsdisponible.toFixed(2));
        //     this.formConfigObjeto.controls['hrsefectivas'].setValue(this.plan.hrsefectivas.toFixed(2));
        //   } else{
        //     this.flgError = true;
        //   }
        // }
        calculaHrsDisponbles() {
            var hI;
            var mI;
            var hF;
            var mF;
            var hI = this.timeToDecimal(this.plan.inialim);
            hF = this.timeToDecimal(this.plan.finalim);
            // console.log(this.plan.inialim);
            // console.log(hI);
            // console.log(this.plan.hrsnoalim);
            if (hF - hI - this.plan.hrsnoalim >= 0) {
                this.flgError = false;
                this.plan.hrsdisponible = hF - hI;
                this.plan.hrsefectivas = this.plan.hrsdisponible - this.plan.hrsnoalim;
                this.formConfigObjeto.controls['hrsdisponible'].setValue(this.plan.hrsdisponible.toFixed(2));
                this.formConfigObjeto.controls['hrsefectivas'].setValue(this.plan.hrsefectivas.toFixed(2));
            }
            else {
                this.flgError = true;
            }
        }
        planificacionGuardada() {
            let itemE;
            var LT = [];
            this.jaulasEstado = [];
            //Numero de Jaulas por linea
            var numeroJaulas = this.jaulas.reduce((contadorJaula, n_linea) => {
                //if (n_linea.en_ciclo){
                contadorJaula[n_linea.linea.nombre] = (contadorJaula[n_linea.linea.nombre] || 0) + 1;
                //}
                return contadorJaula;
            }, {});
            for (let j of this.jaulas) {
                let alimentos = [];
                let idSilos;
                let silos;
                let linea = j.linea.nombre;
                let peso = j.peso;
                let P = j.peces; //Cantidad de peces por jaula
                let Biomasa = P * peso / 1000; //[Kg]
                //CALCULO DE SFR Y SFR_MOD EN BLUFEEDER
                // let SFR     = this.getSFR(peso,j.fa_sfr)[0]/100;//[SFR] Real para ocupar en formula como decimal
                // let SFR_MOD = this.getSFR(peso,j.fa_sfr)[1];//[%SFR Modelo]
                let SFR = (j.sgr * j.fa_sfr) / 100; //[SFR] Real para ocupar en formula como decimal
                let SFR_MOD = j.sgr; //[%SFR Modelo]
                let siloSel = this.getSilo(j.doser._id);
                let siloSelMed = this.getSilo(j.doser_med._id);
                let PPK = this.getAlimento(siloSel.alimentos[0].alimento).ppk; //Pellet Por Kilo
                let V = j.visitas;
                let KT = Biomasa * SFR; // Kilos Totale [Kg]
                let TEV = j.ppv / j.ppm;
                let TS = (j.tpo_sop) / 60; //Tiempo soplado en min
                let min_visita = TEV + TS;
                let mintot = min_visita * V; // minutos totales alimentacion y soplado
                var peceston = 1000000 / peso; // peso [gr]  cuantos peces hay en una tonelada
                let KPV = j.kg_visita;
                let pporv = PPK * KPV;
                var txtClassPPV = "text-success";
                var txtClassPPM = "text-success";
                if (min_visita > this.plan.minutosVisita + 0.005) {
                    txtClassPPV = "text-danger";
                }
                //Incluir lista de alimentos correspondiente a la jaula y linea
                idSilos = this.dosers.filter(x => x.linea == j.linea._id).map(x => x.silo);
                silos = this.silos.filter(x => idSilos.includes(x._id));
                for (let item of silos) {
                    var alimentoSel = this.alimentos.filter(x => x._id == item.alimentos[0].alimento)[0];
                    alimentos.push(alimentoSel);
                }
                // console.log(j.nombre)
                // console.log(j.peso)
                // console.log(SFR_MOD)
                itemE = {
                    linea: linea,
                    idlinea: j.linea._id,
                    jaula: j.nombre,
                    aliasJaula: j.aliasJaula,
                    peces: j.peces,
                    peso: j.peso,
                    biomasa: Biomasa / 1000,
                    fasfr: j.fa_sfr,
                    realsfr: SFR * 100,
                    ppk: PPK,
                    visitas: V,
                    kgtot: KT,
                    kgprim: KT - j.obj_med,
                    kgsecu: j.obj_med,
                    silo: siloSel._id,
                    silomed: siloSelMed._id,
                    silos: silos,
                    alimentos: alimentos,
                    kgvisita: j.kg_visita,
                    en_ciclo: j.en_ciclo,
                    ppv: j.ppv,
                    ppm: j.ppm,
                    kgm: j.kg_min,
                    tpoalim: TEV * 60,
                    tposop: j.tpo_sop,
                    minvisita: min_visita,
                    mintot: mintot,
                    peceston: peceston,
                    pporv: pporv,
                    sfrmod: SFR_MOD,
                    tpoLinea: 0,
                    txtClassPPV: txtClassPPV,
                    txtClassPPM: txtClassPPM,
                    sgr: j.sgr,
                    _id: j._id
                };
                //Crear array lineas
                //ESTO ES PARA LA JAULA VIRTUAL CUANDO HAY SOLO UNA JAULA
                let numJau = numeroJaulas[linea];
                if (numJau == 1) {
                    mintot = 2 * mintot;
                }
                let iLT = LT.map(x => x.linea).indexOf(linea);
                if (iLT == -1) {
                    var lt;
                    lt = {
                        linea: linea,
                        tpo: mintot
                    };
                    LT.push(lt);
                }
                else {
                    LT[iLT].tpo += mintot;
                }
                this.jaulasEstado.push(itemE);
            }
            for (let j of this.jaulasEstado) {
                let lts;
                lts = LT.filter(x => x.linea == j.linea)[0];
                j.tpoLinea = lts.tpo / 60; // lts.tpo esta en [min] se cambia a [hr]
                let diffTpo = this.plan.hrsefectivas - j.tpoLinea;
                if (Math.abs(diffTpo) <= 0.15) {
                    j.txtClassPPM = "text-success";
                }
                if (diffTpo < -0.15) {
                    j.txtClassPPM = "text-danger";
                }
                if (diffTpo > 0.15) {
                    j.txtClassPPM = "text-warning";
                }
            }
            this.dataSourceObjeto = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.jaulasEstado);
            this.dataSourceObjeto.paginator = this.paginatorObjeto;
            this.dataSourceObjeto.sort = this.sortVI;
            this.isLoadingResultsObjeto = false;
        }
        aplicaFormulaCriterioExacto() {
            //esta funcion se ajusta a los minutos visita configurados y al tiempo disponible / numero maxiomo de jaulas por linea
            //let itemE: itemJaula;
            var LT = [];
            //Numero de Jaulas por linea
            var numeroJaulas = this.jaulas.reduce((contadorJaula, n_linea) => {
                //if (n_linea.en_ciclo){
                contadorJaula[n_linea.linea.nombre] = (contadorJaula[n_linea.linea.nombre] || 0) + 1;
                //}
                return contadorJaula;
            }, {});
            for (let j of this.jaulasEstado) {
                //for (let j of this.jaulas) {
                //var alimentos :Alimento[]=[];
                //let idSilos: String[];
                //let silos : Silo [];
                let linea = j.linea;
                let peso = j.peso;
                //let siloSel    = this.getSilo(j.doser._id);
                //let siloSelMed = this.getSilo(j.doser_med._id);
                var siloSel = this.silos.filter(x => x._id == j.silo)[0];
                var siloSelMed = this.silos.filter(x => x._id == j.silomed)[0];
                let min_visita = this.plan.minutosVisita; // Minutos visita 1.5
                let HD = this.plan.hrsefectivas; // en [Hr], en la formula se multiplica por 60 para trabajar en [min]
                let PPK = this.getAlimento(siloSel.alimentos[0].alimento).ppk; //Pellet Por Kilo
                //CALCULO DE SFR Y SFR_MOD EN BLUFEEDER
                // let SFR     = this.getSFR(peso,j.fasfr)[0]/100;//[SFR] Real para ocupar en formula como decimal
                // let SFR_MOD = this.getSFR(peso,j.fasfr)[1];//[%SFR Modelo]
                let SFR = (j.sgr * j.fasfr) / 100; //[SFR] Real para ocupar en formula como decimal
                let SFR_MOD = j.sgr; //[%SFR Modelo]
                let P = j.peces; //Cantidad de peces por jaula
                let Biomasa = P * peso / 1000; //[Kg]
                let KT = Biomasa * SFR; // Kilos Totale [Kg]
                let J = numeroJaulas[linea]; //Numero de jaulas por linea
                //Jaula virtual cuando hay solo uno
                if (J == 1) {
                    J = 2;
                }
                let TS = (j.tposop) / 60; //Tiempo de soplado [min]
                let TEV = min_visita - TS; //Tempo de entrega de alimento por visita por jaula
                let PPM = (KT * PPK * J * (1 + TS / TEV)) / (P * HD * 60); //Pellet Pez Minuto
                let T = (P * PPM) / PPK; //Tasa[Kg/min]
                let TAj = KT / T; // Tiempo total[min] de alimentación por jaula
                let V = TAj / TEV; // cantidad de Visitas
                let PPV = TEV * PPM; // Pellet Pez Visita
                let KPV = (P * PPV) / PPK; // Kilos por visita por jaula
                let mintot = min_visita * V; // minutos totales alimentacion y soplado
                let pporv = PPK * KPV;
                var txtClassPPV = "text-success";
                var txtClassPPM = "text-success";
                if (min_visita > this.plan.minutosVisita + 0.005) {
                    txtClassPPV = "text-danger";
                }
                j.ppk = PPK;
                j.sfrmod = SFR_MOD;
                j.realsfr = SFR * 100;
                j.visitas = V;
                j.kgtot = KT;
                j.kgvisita = KPV;
                j.ppv = PPV,
                    j.ppm = PPM,
                    j.kgm = T;
                j.tpoalim = TEV * 60; // mostrar en [seg] Tpo entregado por visita; 
                j.minvisita = min_visita;
                j.mintot = mintot;
                j.pporv = pporv;
                j.txtClassPPV = txtClassPPV;
                j.txtClassPPM = txtClassPPM;
                //prueba 
                // if(j.jaula == '09'){
                //   console.log('Número:' + P);
                //   console.log('Biomasa:' + Biomasa);
                //   console.log('Peso:' + peso);
                //   console.log('SFR Modelo:' + SFR_MOD);
                //   console.log('Tiempo soplado:' + TS);
                //   console.log('Kilos Totales:' + KT)
                //   console.log('SFR Ocupado (Modelo*Factor Ajuste):' + SFR*100);
                //   console.log('TEV:' + TEV);
                //   console.log('PPM:' + PPM);
                //   console.log('Velocidad:'+ T)
                //   console.log('Tiempo total[min] de alimentación (TAj):' + TAj);
                //   console.log('Visitas(TAj/TEV):' + V);
                //   console.log('PPV:' + PPV);
                //   console.log('Kilos por Visita:' + KPV);
                //   console.log('Tiempo Total (Alimentacion mas soplado X Visitas):' + mintot);
                // }
                // itemE = {
                //   linea     : linea,
                //   idlinea   : j.linea._id,
                //   jaula     : j.nombre,
                //   aliasJaula: j.aliasJaula, 
                //   peces     : P,
                //   peso      : peso,
                //   biomasa   : Biomasa / 1000, //de [Kg] ->[Ton]
                //   fasfr     : j.fa_sfr, 
                //   realsfr   : SFR * 100,  //*100 para mostrar en % 
                //   ppk       : PPK, 
                //   visitas   : V,
                //   kgtot     : KT,
                //   objmed    : j.obj_med,
                //   silo      : siloSel._id,
                //   silomed   : siloSelMed._id,
                //   silos     : silos,
                //   alimentos : alimentos,
                //   kgvisita  : KPV,
                //   ppv       : PPV, 
                //   ppm       : PPM, 
                //   kgm       : T, 
                //   tpoalim   : TEV * 60, // mostrar en [seg] Tpo entregado por visita
                //   tposop   : j.tpo_bw_silo, 
                //   tposisel  : j.tpo_silo_sel, 
                //   tposeljau : j.tpo_sel_jaula, 
                //   minvisita : min_visita, 
                //   mintot    : mintot, 
                //   peceston  : peceston,
                //   pporv     : pporv,  
                //   sfrmod    : SFR_MOD, 
                //   tpoLinea  : 0,
                //   txtClassPPV  : txtClassPPV,
                //   txtClassPPM  : txtClassPPM,
                //   _id       : j._id
                // }
                //Crear array lineas
                let numJau = numeroJaulas[linea];
                if (numJau == 1) {
                    mintot = 2 * mintot;
                }
                let iLT = LT.map(x => x.linea).indexOf(linea);
                if (iLT == -1) {
                    var lt;
                    lt = {
                        linea: linea,
                        tpo: mintot
                    };
                    LT.push(lt);
                }
                else {
                    LT[iLT].tpo += mintot;
                }
            }
            for (let j of this.jaulasEstado) {
                let lts;
                lts = LT.filter(x => x.linea == j.linea)[0];
                j.tpoLinea = lts.tpo / 60; // lts.tpo esta en [min] se cambia a [hr]
                let diffTpo = this.plan.hrsefectivas - j.tpoLinea;
                if (Math.abs(diffTpo) <= 0.15) {
                    j.txtClassPPM = "text-success";
                }
                if (diffTpo < -0.15) {
                    j.txtClassPPM = "text-danger";
                }
                if (diffTpo > 0.15) {
                    j.txtClassPPM = "text-warning";
                }
            }
        }
        getSFR(p, fa_sfr) {
            let mo;
            var tp;
            mo = this.modelo;
            tp = this.plan.temperatura;
            let sfr_mod = (mo.c1 + mo.a0 * p + mo.a1 * Math.pow(p, 2) + mo.a2 * Math.pow(p, 3) + mo.a3 * Math.pow(p, 4) + mo.a4 * Math.pow(p, 5) + mo.a5 * Math.pow(p, 6) + mo.a6 * Math.pow(p, 7) + mo.a7 * Math.pow(p, 8)) *
                (mo.c2 + mo.b0 * p + mo.b1 * Math.pow(p, 2) + mo.b2 * Math.pow(p, 3) + mo.b3 * Math.pow(p, 4) + mo.b4 * Math.pow(p, 5) + mo.b5 * Math.pow(p, 6) + mo.b6 * Math.pow(p, 7) + mo.b7 * Math.pow(p, 8)) * tp;
            let real_sfr = sfr_mod * fa_sfr;
            fa_sfr == null ? real_sfr = sfr_mod : real_sfr = sfr_mod * fa_sfr;
            return [real_sfr, sfr_mod];
        }
        visitasPlan() {
            //esta funcion encuentra los valores según el cambio de visitas realizado
            //let itemE: itemJaula;
            var LT = [];
            //Numero de Jaula
            const numeroJaulas = this.jaulas.reduce((contadorJaula, n_linea) => {
                contadorJaula[n_linea.linea.nombre] = (contadorJaula[n_linea.linea.nombre] || 0) + 1;
                return contadorJaula;
            }, {});
            for (let j of this.jaulasEstado) {
                //for (let j of this.jaulas) {
                //var alimentos :Alimento[]=[];
                //let idSilos: String[];
                //let silos : Silo [];
                let linea = j.linea;
                let peso = j.peso;
                //let siloSel    = this.getSilo(j.doser._id);
                //let siloSelMed = this.getSilo(j.doser_med._id);
                var siloSel = this.silos.filter(x => x._id == j.silo)[0];
                var siloSelMed = this.silos.filter(x => x._id == j.silomed)[0];
                let V = j.visitas; // cantidad de Visitas
                let HD = this.plan.hrsefectivas; // en [Hr], en la formula se multiplica por 60 para trabajar en [min]
                let PPK = this.getAlimento(siloSel.alimentos[0].alimento).ppk; //Pellet Por Kilo
                //CALCULO DE SFR Y SFR_MOD EN BLUFEEDER
                // let SFR     = this.getSFR(peso,j.fasfr)[0]/100;//[SFR] Real para ocupar en formula como decimal
                // let SFR_MOD = this.getSFR(peso,j.fasfr)[1];//[%SFR Modelo]
                let SFR = (j.sgr * j.fasfr) / 100; //[SFR] Real para ocupar en formula como decimal
                let SFR_MOD = j.sgr; //[%SFR Modelo]
                let P = j.peces; //Cantidad de peces por jaula
                let Biomasa = P * peso / 1000; //[Kg]
                let KT = Biomasa * SFR; // Kilos Totale [Kg]
                let J = numeroJaulas[linea]; //Numero de jaulas por linea
                //Jaula virtual cuando hay solo uno
                if (J == 1) {
                    J = 2;
                }
                let TS = (j.tposop) / 60; //Tiempo de soplado [min]
                let KPV = KT / V; // Kilos por visita por jaula
                let PPV = (KPV * PPK) / P; // Pellet Pez Visita
                let PPM = (KT * PPK) / (P * ((HD * 60) / J - (V * TS))); //Pellet Pez Minuto
                let TEV = PPV / PPM;
                let min_visita = TEV + TS; //Tempo de entrega de alimento por visita por jaula
                let T = (P * PPM) / PPK; //Tasa[Kg/min]
                let mintot = min_visita * V; // minutos totales alimentacion y soplado
                let pporv = PPK * KPV;
                var txtClassPPV = "text-success";
                var txtClassPPM = "text-success";
                if (min_visita > this.plan.minutosVisita + 0.005) {
                    txtClassPPV = "text-danger";
                }
                j.ppk = PPK;
                j.sfrmod = SFR_MOD;
                j.realsfr = SFR * 100;
                //j.visitas   = V;
                j.kgtot = KT;
                j.kgvisita = KPV;
                j.ppv = PPV,
                    j.ppm = PPM,
                    j.kgm = T;
                j.tpoalim = TEV * 60; // mostrar en [seg] Tpo entregado por visita; 
                j.minvisita = min_visita;
                j.mintot = mintot;
                j.pporv = pporv;
                j.txtClassPPV = txtClassPPV;
                j.txtClassPPM = txtClassPPM;
                //Crear array lineas
                //Crear array lineas
                let numJau = numeroJaulas[linea];
                if (numJau == 1) {
                    mintot = 2 * mintot;
                }
                let iLT = LT.map(x => x.linea).indexOf(linea);
                if (iLT == -1) {
                    var lt;
                    lt = {
                        linea: linea,
                        tpo: mintot
                    };
                    LT.push(lt);
                }
                else {
                    LT[iLT].tpo += mintot;
                }
            }
            for (let j of this.jaulasEstado) {
                let lts;
                lts = LT.filter(x => x.linea == j.linea)[0];
                j.tpoLinea = lts.tpo / 60; // lts.tpo esta en [min] se cambia a [hr]
                let diffTpo = this.plan.hrsefectivas - j.tpoLinea;
                if (Math.abs(diffTpo) <= 0.15) {
                    j.txtClassPPM = "text-success";
                }
                if (diffTpo < -0.15) {
                    j.txtClassPPM = "text-danger";
                }
                if (diffTpo > 0.15) {
                    j.txtClassPPM = "text-warning";
                }
            }
            // this.editarVisitas = false;
        }
        //Indica el silo de cada jaula
        getSilo(idDoser) {
            let doserSel;
            let siloSel;
            doserSel = this.dosers.filter(x => x._id == idDoser)[0];
            siloSel = this.silos.filter(x => x._id == doserSel.silo)[0];
            return siloSel;
        }
        ;
        // masPPV(id: string){
        //   let itemE: itemJaula;
        //   itemE = this.jaulasEstado.filter( x => x._id == id)[0];
        //   itemE.ppv = parseFloat((itemE.ppv + 0.01).toFixed(4));
        //   if(itemE.ppv >= 2){
        //     itemE.ppv = 2;
        //   }
        //   this.recalculaTabla();
        // }
        // menosPPV(id: string){
        //   let itemE: itemJaula;
        //   itemE = this.jaulasEstado.filter( x => x._id == id)[0];
        //   itemE.ppv = parseFloat((itemE.ppv - 0.01).toFixed(4));
        //   if(itemE.ppv <= 0.01){
        //     itemE.ppv = 0.01;
        //   }
        //   this.recalculaTabla();
        // }
        // masPPM(id: string){
        //   let itemE: itemJaula;
        //   itemE = this.jaulasEstado.filter( x => x._id == id)[0];
        //   itemE.ppm = parseFloat((itemE.ppm + 0.01).toFixed(4));
        //   if(itemE.ppm >= 2){
        //     itemE.ppm = 2;
        //   }
        //   this.recalculaTabla();
        // }
        // menosPPM(id: string){
        //   let itemE: itemJaula;
        //   itemE = this.jaulasEstado.filter( x => x._id == id)[0];
        //   itemE.ppm = parseFloat((itemE.ppm - 0.01).toFixed(4));
        //   if(itemE.ppm <= 0.01){
        //     itemE.ppm = 0.01;
        //   }
        //   this.recalculaTabla();
        // }
        clonarSFR(id) {
            let itemE;
            itemE = this.jaulasEstado.filter(x => x._id == id)[0];
            let valorSFR = itemE.fasfr;
            this.jaulasEstado.map(x => x.fasfr = valorSFR);
            this.aplicaFormulaCriterioExacto();
        }
        clonarPPM(id) {
            let itemE;
            itemE = this.jaulasEstado.filter(x => x._id == id)[0];
            let valorPPM = itemE.ppm;
            this.jaulasEstado.map(x => x.ppm = valorPPM);
            this.recalculaTabla();
        }
        clonarPPV(id) {
            let itemE;
            itemE = this.jaulasEstado.filter(x => x._id == id)[0];
            let valorPPV = itemE.ppv;
            this.jaulasEstado.map(x => x.ppv = valorPPV);
            this.recalculaTabla();
        }
        clonarVisitas(id) {
            let itemE;
            itemE = this.jaulasEstado.filter(x => x._id == id)[0];
            let valorVisitas = itemE.visitas;
            this.jaulasEstado.map(x => x.visitas = valorVisitas);
            this.visitasPlan();
        }
        clonarKgsecu(id) {
            let itemE;
            itemE = this.jaulasEstado.filter(x => x._id == id)[0];
            let valorKgsecu = itemE.kgsecu;
            this.jaulasEstado.map((x) => {
                x.kgsecu = valorKgsecu;
                x.kgprim = x.kgtot - valorKgsecu;
            });
            this.recalculaTabla();
        }
        editarPeces(id) {
            let itemE;
            itemE = this.jaulasEstado.filter(x => x._id == id)[0];
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Editar Nº de peces',
                text: '' + itemE.jaula,
                width: 400,
                input: 'number',
                inputAttributes: {
                    min: "0",
                    max: "1000000",
                    step: "1"
                },
                inputValue: '' + itemE.peces,
                showCancelButton: true,
                confirmButtonText: `Save`,
                validationMessage: 'Valor entre 0 y 1000000'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    itemE.peces = parseFloat(result.value);
                    this._jaulaService.actualizarItem({ '_id': itemE._id, 'peces': itemE.peces })
                        .subscribe((resp) => {
                        this.recalculaTabla();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Saved!', '', 'success');
                    });
                }
            });
        }
        editarPeso(id) {
            let itemE;
            itemE = this.jaulasEstado.filter(x => x._id == id)[0];
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Editar Peso en grs',
                text: '' + itemE.jaula,
                width: 400,
                input: 'number',
                inputAttributes: {
                    min: "0",
                    max: "10000",
                    step: "0.01"
                },
                inputValue: '' + itemE.peso,
                showCancelButton: true,
                confirmButtonText: `Save`,
                validationMessage: 'Valor entre 0 y 10000'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    itemE.peso = parseFloat(result.value);
                    this._jaulaService.actualizarItemPeso({ '_id': itemE._id, 'peso': itemE.peso }, this.plan.temperatura)
                        .subscribe((resp) => {
                        itemE.sgr = resp.sgr;
                        this.recalculaTabla();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Saved!', '', 'success');
                    });
                    // this.aplicaFormulaCriterioExacto();
                }
            });
        }
        editarSFR(id) {
            let itemE;
            itemE = this.jaulasEstado.filter(x => x._id == id)[0];
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Ajustar factor SFR',
                text: '' + itemE.jaula,
                input: 'number',
                inputAttributes: {
                    min: "0.01",
                    max: "4",
                    step: "0.01"
                },
                inputValue: '' + itemE.fasfr,
                showCancelButton: true,
                confirmButtonText: `Save`,
                validationMessage: 'Valor entre 0.01 y 4'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    itemE.fasfr = parseFloat(result.value);
                    this.aplicaFormulaCriterioExacto();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Saved!', '', 'success');
                }
            });
        }
        editarPPV(id) {
            let itemE;
            itemE = this.jaulasEstado.filter(x => x._id == id)[0];
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Ajustar tasa PPV',
                text: '' + itemE.jaula,
                input: 'number',
                inputAttributes: {
                    min: "0.01",
                    max: "4",
                    step: "0.01"
                },
                inputValue: '' + itemE.ppv.toFixed(2),
                showCancelButton: true,
                confirmButtonText: `Save`,
                validationMessage: 'Valor entre 0.01 y 4'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    itemE.ppv = parseFloat(result.value);
                    this.recalculaTabla();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Saved!', '', 'success');
                }
            });
        }
        editarPPM(id) {
            let itemE;
            itemE = this.jaulasEstado.filter(x => x._id == id)[0];
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Ajustar tasa PPM',
                text: '' + itemE.jaula,
                input: 'number',
                inputAttributes: {
                    min: "0.01",
                    max: "4",
                    step: "0.01"
                },
                inputValue: '' + itemE.ppm.toFixed(2),
                showCancelButton: true,
                confirmButtonText: `Save`,
                validationMessage: 'Valor entre 0.01 y 4'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    itemE.ppm = parseFloat(result.value);
                    this.recalculaTabla();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Saved!', '', 'success');
                }
            });
        }
        editarVisitas(id) {
            let itemE;
            itemE = this.jaulasEstado.filter(x => x._id == id)[0];
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Editar cantidad de visitas',
                text: '' + itemE.jaula,
                input: 'number',
                inputAttributes: {
                    min: "0",
                    max: "1000",
                    step: "1"
                },
                inputValue: '' + itemE.visitas.toFixed(0),
                showCancelButton: true,
                confirmButtonText: `Save`,
                validationMessage: 'Valor entre 0 y 1000'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    itemE.visitas = parseFloat(result.value);
                    this.visitasPlan();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Saved!', '', 'success');
                }
            });
        }
        editarKgsecu(id) {
            let itemE;
            itemE = this.jaulasEstado.filter(x => x._id == id)[0];
            let maxKg = itemE.kgtot;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Ajustar Kg en Silo secundario',
                text: '' + itemE.jaula + ' ( Kg Tot: ' + itemE.kgtot.toFixed(2) + ' )',
                input: 'number',
                inputAttributes: {
                    min: "0",
                    max: `${maxKg}`,
                    step: "0.01"
                },
                inputValue: '' + itemE.kgsecu,
                showCancelButton: true,
                confirmButtonText: `Save`,
                validationMessage: `Valor entre 0 y ${maxKg.toFixed(2)}`
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    itemE.kgsecu = parseFloat(result.value);
                    itemE.kgprim = itemE.kgtot - itemE.kgsecu;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Saved!', '', 'success');
                }
            });
        }
        // masSFR(id: string){
        //   let itemE: itemJaula;
        //   itemE = this.jaulasEstado.filter( x => x._id == id)[0];
        //   itemE.fasfr = parseFloat((itemE.fasfr + 0.1).toFixed(1));
        //   if(itemE.fasfr >= 2.5){
        //     itemE.fasfr = 2.5;
        //   }
        //   //this.recalculaTabla();
        //   this.aplicaFormulaCriterioExacto();
        // }
        // menosSFR(id: string){
        //   let itemE: itemJaula;
        //   itemE = this.jaulasEstado.filter( x => x._id == id)[0];
        //   itemE.fasfr = parseFloat((itemE.fasfr - 0.1).toFixed(1));
        //   if(itemE.fasfr <= 0.5){
        //     itemE.fasfr = 0.5;
        //   }
        //   //this.recalculaTabla();
        //   this.aplicaFormulaCriterioExacto();
        // }
        recalculaTabla() {
            //esta funcion se ajusta a los minutos visita configurados y al tiempo disponible / numero maxiomo de jaulas por linea
            //let itemE: itemJaula;
            var LT = [];
            //Numero de Jaula
            const numeroJaulas = this.jaulas.reduce((contadorJaula, n_linea) => {
                //if (n_linea.en_ciclo){
                contadorJaula[n_linea.linea.nombre] = (contadorJaula[n_linea.linea.nombre] || 0) + 1;
                //}
                return contadorJaula;
            }, {});
            for (let j of this.jaulasEstado) {
                let linea = j.linea;
                let peso = j.peso;
                var siloSel = this.silos.filter(x => x._id == j.silo)[0];
                var siloSelMed = this.silos.filter(x => x._id == j.silomed)[0];
                let PPK = this.getAlimento(siloSel.alimentos[0].alimento).ppk; //Pellet Por Kilo
                //CALCULO DE SFR Y SFR_MOD EN BLUFEEDER
                // let SFR     = this.getSFR(peso,j.fasfr)[0]/100;//[SFR] Real para ocupar en formula como decimal
                // let SFR_MOD = this.getSFR(peso,j.fasfr)[1];//[%SFR Modelo]
                let SFR = (j.sgr * j.fasfr) / 100; //[SFR] Real para ocupar en formula como decimal
                let SFR_MOD = j.sgr; //[%SFR Modelo]
                let P = j.peces; //Cantidad de peces por jaula
                let Biomasa = P * peso / 1000; //[Kg]
                let KT = Biomasa * SFR; // Kilos Totale [Kg]
                let J = numeroJaulas[linea]; //Numero de jaulas por linea
                let TS = (j.tposop) / 60; //Tiempo de soplado [min]
                let PPM = j.ppm;
                let PPV = j.ppv;
                let TEV = PPV / PPM;
                let min_visita = TEV + TS;
                let T = (P * PPM) / PPK; //Tasa[Kg/min]
                let TAj = KT / T; // Tiempo total[min] de alimentación por jaula
                let V = TAj / TEV; // cantidad de Visitas
                let KPV = (P * PPV) / PPK; // Kilos por visita por jaula
                let mintot = min_visita * V; // minutos totales alimentacion y soplado
                let pporv = PPK * KPV;
                var txtClassPPV = "text-success";
                var txtClassPPM = "text-success";
                if (min_visita > this.plan.minutosVisita + 0.005) {
                    txtClassPPV = "text-danger";
                }
                j.ppk = PPK;
                j.sfrmod = SFR_MOD;
                j.realsfr = SFR * 100;
                j.visitas = V;
                j.kgtot = KT;
                j.kgvisita = KPV;
                j.kgm = T;
                j.tpoalim = TEV * 60; // mostrar en [seg] Tpo entregado por visita; 
                j.minvisita = min_visita;
                j.mintot = mintot;
                j.pporv = pporv;
                j.txtClassPPV = txtClassPPV;
                j.txtClassPPM = txtClassPPM;
                j.biomasa = Biomasa;
                //prueba 
                // if(j.jaula == '09'){
                //   console.log('Número:' + P);
                //   console.log('Biomasa:' + Biomasa);
                //   console.log('Peso:' + peso);
                //   console.log('SFR Modelo:' + SFR_MOD);
                //   console.log('Tiempo soplado:' + TS);
                //   console.log('Kilos Totales:' + KT)
                //   console.log('SFR Ocupado (Modelo*Factor Ajuste):' + SFR);
                //   console.log('TEV (PPV/PPM):' + TEV);
                //   console.log('PPM:' + PPM);
                //   console.log('Velocidad:'+ T)
                //   console.log('Tiempo total[min] de alimentación (TAj):' + TAj);
                //   console.log('Visitas(TAj/TEV):' + V);
                //   console.log('PPV:' + PPV);
                //   console.log('Kilos por Visita:' + KPV);
                //   console.log('Tiempo Total (Alimentacion mas soplado X Visitas):' + mintot);
                // }
                //Crear array lineas
                let numJau = numeroJaulas[linea];
                if (numJau == 1) {
                    mintot = 2 * mintot;
                }
                let iLT = LT.map(x => x.linea).indexOf(linea);
                if (iLT == -1) {
                    var lt;
                    lt = {
                        linea: linea,
                        tpo: mintot
                    };
                    LT.push(lt);
                }
                else {
                    LT[iLT].tpo += mintot;
                }
            }
            for (let j of this.jaulasEstado) {
                let lts;
                lts = LT.filter(x => x.linea == j.linea)[0];
                j.tpoLinea = lts.tpo / 60; // lts.tpo esta en [min] se cambia a [hr]
                let diffTpo = this.plan.hrsefectivas - j.tpoLinea;
                if (Math.abs(diffTpo) <= 0.15) {
                    j.txtClassPPM = "text-success";
                }
                if (diffTpo < -0.15) {
                    j.txtClassPPM = "text-danger";
                }
                if (diffTpo > 0.15) {
                    j.txtClassPPM = "text-warning";
                }
            }
        }
        getAlimento(idAlimento) {
            let alimentoSel;
            alimentoSel = this.alimentos.filter(x => x._id == idAlimento)[0];
            return alimentoSel;
        }
        checkDetalles(estado) {
            estado ?
                this.displayedColumnsObjeto = this.displayedColumnsObjetoDetalle :
                this.displayedColumnsObjeto = this.displayedColumnsObjetoSinDetalle;
            this.verdetalles = estado;
        }
        aceptarPlan() {
            let objetoActualizar;
            let listo = false;
            this.estadoAceptar = "Guardando: . . .";
            let totJau = this.jaulasEstado.length;
            let countJau = 0;
            let dosersLinea;
            let doserSel;
            let doserSelMed;
            let verifica = true;
            //VERIFICAR OBJ  MED < OBJ TOT
            for (let j of this.jaulasEstado) {
                if ((j.kgsecu > j.kgtot) && (j.en_ciclo)) {
                    verifica = false;
                    this.estadoAceptar = "No se pudo guardar... ";
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        title: 'Error en objetivo medicado',
                        text: 'Corregir en jaula: ' + j.jaula,
                        icon: 'error',
                    });
                    break;
                }
            }
            if (verifica) {
                for (let j of this.jaulasEstado) {
                    dosersLinea = this.dosers.filter(x => x.linea == j.idlinea);
                    doserSel = dosersLinea.filter(x => x.silo == j.silo)[0];
                    doserSelMed = dosersLinea.filter(x => x.silo == j.silomed)[0];
                    objetoActualizar = {
                        _id: j._id,
                        kg_tot: j.kgtot,
                        obj_med: j.kgsecu,
                        kg_visita: j.kgvisita,
                        en_ciclo: j.en_ciclo,
                        visitas: j.visitas,
                        kg_min: j.kgm,
                        ppm: j.ppm,
                        ppv: j.ppv,
                        fa_sfr: j.fasfr,
                        min_visita: j.minvisita,
                        doser: doserSel._id,
                        doser_med: doserSelMed._id,
                        peces: j.peces,
                        peso: j.peso,
                        tpo_sop: j.tposop,
                    };
                    this._jaulaService.actualizarItem(objetoActualizar)
                        .subscribe((resp) => {
                        this.estadoAceptar = "Guardando Jaula: " + resp.nombre;
                        countJau += 1;
                        if (countJau == totJau) {
                            this.estadoAceptar = "Listo ! ";
                        }
                    });
                }
            }
        }
    }
    ImportarComponent.ɵfac = function ImportarComponent_Factory(t) { return new (t || ImportarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_8__["BlucontrolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_8__["JaulaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_8__["PlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_8__["ModelosfrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_8__["DoserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_8__["SiloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_index__WEBPACK_IMPORTED_MODULE_8__["AlimentoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"])); };
    ImportarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImportarComponent, selectors: [["app-importar"]], viewQuery: function ImportarComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginatorObjeto = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sortVI = _t.first);
            }
        }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'es-CL' }, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
            ])], decls: 186, vars: 34, consts: [["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutGap", "1%", "fxLayoutAlign", "start"], ["fxFlex.gt-sm", "30", "fxFlex.gt-xs", "100", "fxFlex", "100"], [2, "width", "100%"], ["matInput", "", "placeholder", "Nombre Centro", "type", "string", 3, "formControl"], ["class", "text-danger support-text", 4, "ngIf"], ["matInput", "", "placeholder", "ID Centro", "type", "string", 3, "formControl"], ["placeholder", "Especie", 3, "formControl"], ["value", "salar"], ["value", "coho"], ["matInput", "", "placeholder", "Temperatura \u00BAC", "type", "number", 3, "formControl"], ["matInput", "", "placeholder", "Fecha", "type", "string", 3, "formControl"], ["matInput", "", "placeholder", "Hora inicio Alimentaci\u00F3n", "type", "time", "min", "00:00:00", "max", "24:00:00", 3, "formControl"], ["matInput", "", "placeholder", "Hora t\u00E9rmino Alimentaci\u00F3n", "type", "time", "min", "00:00:00", "max", "24:00:00", 3, "formControl"], ["matInput", "", "placeholder", "Horas al d\u00EDa sin alimentar", "type", "number", 3, "formControl"], ["matInput", "", "placeholder", "Horas disponibles para alimentar", "type", "number", 3, "formControl"], ["matInput", "", "placeholder", "Horas efectivas para alimentaci\u00F3n", "type", "number", 3, "formControl"], ["matInput", "", "placeholder", "Minutos por visita", "type", "number", 3, "formControl"], ["fxLayout", "row wrap", "fxLayoutGap", "1%", "fxLayoutAlign", "center"], ["fxFlex.gt-sm", "48", "fxFlex", "100"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "btn-block", "btn-lg", "m-t-20", "m-b-20", 3, "disabled"], [1, "m-r-10"], [1, "p-b-20"], ["mat-raised-button", "", "color", "primary", 1, "m-l-20", "m-t-15", 3, "click"], [1, "m-r-5"], [1, "text-success", "support-text", "p-l-20", "m-t-15"], ["fxFlex", "300"], [3, "checked", "change"], ["matInput", "", "placeholder", "Buscar Jaula", 3, "keyup"], [1, "mat-elevation-z8"], [4, "ngIf"], ["mat-table", "", 1, "text-center", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "en_ciclo"], ["mat-header-cell", "", "class", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "linea"], ["mat-cell", "", "class", "", 4, "matCellDef"], ["matColumnDef", "jaula"], ["matColumnDef", "aliasJaula"], ["matColumnDef", "peces"], ["matColumnDef", "peso"], ["matColumnDef", "biomasa"], ["matColumnDef", "ppv"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "ppm"], ["matColumnDef", "kgm"], ["matColumnDef", "fasfr"], ["matColumnDef", "sfrmod"], ["matColumnDef", "realsfr"], ["matColumnDef", "visitas"], ["matColumnDef", "kgvisita"], ["matColumnDef", "kgtot"], ["matColumnDef", "kgprim"], ["matColumnDef", "kgsecu"], ["matColumnDef", "silo"], ["matColumnDef", "silomed"], ["matColumnDef", "ppk"], ["matColumnDef", "tpoalim"], ["matColumnDef", "tposop"], ["matColumnDef", "minvisita"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "mintot"], ["matColumnDef", "tpoLinea"], ["matColumnDef", "peceston"], ["matColumnDef", "pporv"], ["matColumnDef", "_id"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["paginatorObjeto", ""], [1, "text-danger", "support-text"], ["mat-header-cell", "", 1, ""], ["mat-cell", ""], [1, "", 3, "ngModel", "ngModelChange"], ["mat-cell", "", 1, ""], ["matTooltip", "Editar", "mat-icon-button", "", 3, "disabled", "click"], [3, "inline"], ["mat-header-cell", ""], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayoutAlign", "end center", "matTooltip", "Editar", "mat-icon-button", "", 3, "disabled", "click"], [3, "ngClass"], ["class", "m-l-5", "fxLayoutAlign", "start center", "matTooltip", "Clonar", "mat-icon-button", "", 3, "disabled", "click", 4, "ngIf"], ["fxLayoutAlign", "start center", "matTooltip", "Clonar", "mat-icon-button", "", 1, "m-l-5", 3, "disabled", "click"], [1, "m-r-10", 2, "width", "70%", "font-size", "14px"], ["placeholder", "", 3, "ngModel", "ngModelChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"], ["mat-cell", "", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", ""]], template: function ImportarComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Informaci\u00F3n general");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-card-subtitle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ImportarComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmitObjeto(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ImportarComponent_small_12_Template, 2, 0, "small", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ImportarComponent_small_16_Template, 2, 0, "small", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Salar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Coho");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ImportarComponent_small_24_Template, 2, 0, "small", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ImportarComponent_small_28_Template, 2, 0, "small", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ImportarComponent_small_35_Template, 2, 0, "small", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ImportarComponent_small_39_Template, 2, 0, "small", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ImportarComponent_small_40_Template, 2, 0, "small", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ImportarComponent_small_44_Template, 2, 0, "small", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ImportarComponent_small_45_Template, 2, 0, "small", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ImportarComponent_small_49_Template, 2, 0, "small", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ImportarComponent_small_53_Template, 2, 0, "small", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ImportarComponent_small_57_Template, 2, 0, "small", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-icon", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "save");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Actualizar DATOS ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Acciones");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportarComponent_Template_button_click_72_listener() { return ctx.aplicaFormulaCriterioExacto(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-icon", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "play_for_work");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Calcular Plan ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportarComponent_Template_button_click_76_listener() { return ctx.aceptarPlan(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-icon", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "save");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Aceptar Plan ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "small", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Lista de Jaulas");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-checkbox", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImportarComponent_Template_mat_checkbox_change_88_listener($event) { return ctx.checkDetalles($event.checked); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Ver detalles");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ImportarComponent_Template_input_keyup_91_listener($event) { return ctx.applyFilterObjeto($event.target.value); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, ImportarComponent_div_93_Template, 2, 0, "div", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "table", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](95, 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, ImportarComponent_th_96_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, ImportarComponent_td_97_Template, 2, 1, "td", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](98, 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, ImportarComponent_th_99_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, ImportarComponent_td_100_Template, 2, 1, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](101, 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, ImportarComponent_th_102_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, ImportarComponent_td_103_Template, 2, 1, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](104, 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, ImportarComponent_th_105_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, ImportarComponent_td_106_Template, 2, 1, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](107, 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, ImportarComponent_th_108_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, ImportarComponent_td_109_Template, 7, 6, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](110, 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, ImportarComponent_th_111_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, ImportarComponent_td_112_Template, 7, 6, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](113, 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, ImportarComponent_th_114_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, ImportarComponent_td_115_Template, 3, 4, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](116, 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, ImportarComponent_th_117_Template, 2, 0, "th", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, ImportarComponent_td_118_Template, 9, 8, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](119, 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, ImportarComponent_th_120_Template, 2, 0, "th", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, ImportarComponent_td_121_Template, 9, 8, "td", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](122, 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, ImportarComponent_th_123_Template, 2, 0, "th", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, ImportarComponent_td_124_Template, 3, 4, "td", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](125, 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, ImportarComponent_th_126_Template, 2, 0, "th", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, ImportarComponent_td_127_Template, 9, 7, "td", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](128, 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, ImportarComponent_th_129_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, ImportarComponent_td_130_Template, 3, 4, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](131, 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, ImportarComponent_th_132_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, ImportarComponent_td_133_Template, 3, 4, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](134, 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, ImportarComponent_th_135_Template, 2, 0, "th", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, ImportarComponent_td_136_Template, 9, 7, "td", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](137, 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, ImportarComponent_th_138_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, ImportarComponent_td_139_Template, 3, 4, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](140, 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, ImportarComponent_th_141_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, ImportarComponent_td_142_Template, 3, 4, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](143, 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, ImportarComponent_th_144_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, ImportarComponent_td_145_Template, 3, 4, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](146, 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, ImportarComponent_th_147_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, ImportarComponent_td_148_Template, 9, 7, "td", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](149, 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, ImportarComponent_th_150_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](151, ImportarComponent_td_151_Template, 4, 2, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](152, 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, ImportarComponent_th_153_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](154, ImportarComponent_td_154_Template, 4, 2, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](155, 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, ImportarComponent_th_156_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, ImportarComponent_td_157_Template, 3, 4, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](158, 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](159, ImportarComponent_th_159_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](160, ImportarComponent_td_160_Template, 3, 4, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](161, 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](162, ImportarComponent_th_162_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](163, ImportarComponent_td_163_Template, 3, 4, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](164, 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](165, ImportarComponent_th_165_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](166, ImportarComponent_td_166_Template, 3, 5, "td", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](167, 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](168, ImportarComponent_th_168_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](169, ImportarComponent_td_169_Template, 3, 4, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](170, 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](171, ImportarComponent_th_171_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, ImportarComponent_td_172_Template, 3, 5, "td", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](173, 65);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](174, ImportarComponent_th_174_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](175, ImportarComponent_td_175_Template, 3, 4, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](176, 66);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](177, ImportarComponent_th_177_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](178, ImportarComponent_td_178_Template, 3, 4, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](179, 67);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](180, ImportarComponent_th_180_Template, 2, 0, "th", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](181, ImportarComponent_td_181_Template, 2, 1, "td", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](182, ImportarComponent_tr_182_Template, 1, 0, "tr", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](183, ImportarComponent_tr_183_Template, 1, 0, "tr", 69);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "mat-paginator", 70, 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formConfigObjeto);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formConfigObjeto.controls["centro"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formConfigObjeto.controls["centro"].hasError("required") && ctx.formConfigObjeto.controls["centro"].touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formConfigObjeto.controls["idcentro"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formConfigObjeto.controls["idcentro"].hasError("required") && ctx.formConfigObjeto.controls["idcentro"].touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formConfigObjeto.controls["especie"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formConfigObjeto.controls["especie"].hasError("required") && ctx.formConfigObjeto.controls["especie"].touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formConfigObjeto.controls["temperatura"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formConfigObjeto.controls["temperatura"].hasError("required") && ctx.formConfigObjeto.controls["temperatura"].touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formConfigObjeto.controls["fecha"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formConfigObjeto.controls["inialim"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formConfigObjeto.controls["inialim"].hasError("required") && ctx.formConfigObjeto.controls["inialim"].touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formConfigObjeto.controls["finalim"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formConfigObjeto.controls["finalim"].hasError("required") && ctx.formConfigObjeto.controls["finalim"].touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flgError);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formConfigObjeto.controls["hrsnoalim"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formConfigObjeto.controls["hrsnoalim"].hasError("required") && ctx.formConfigObjeto.controls["hrsnoalim"].touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flgError);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formConfigObjeto.controls["hrsdisponible"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formConfigObjeto.controls["hrsdisponible"].hasError("required") && ctx.formConfigObjeto.controls["hrsdisponible"].touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formConfigObjeto.controls["hrsefectivas"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formConfigObjeto.controls["hrsefectivas"].hasError("required") && ctx.formConfigObjeto.controls["hrsefectivas"].touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formConfigObjeto.controls["minutosVisita"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formConfigObjeto.controls["minutosVisita"].hasError("required") && ctx.formConfigObjeto.controls["minutosVisita"].touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formConfigObjeto.valid || ctx.flgError);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.estadoAceptar);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.verdetalles);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoadingResultsObjeto);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSourceObjeto);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](88);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsObjeto)("matHeaderRowDefSticky", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsObjeto);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c1));
            }
        }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardSubtitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], encapsulation: 2 });
    return ImportarComponent;
})();


/***/ })

}]);