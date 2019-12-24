(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards~pages"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Cards/RadialProgressCard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Cards/RadialProgressCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_radial_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-radial-progress */ "./node_modules/vue-radial-progress/src/main.js");
/* harmony import */ var vue_radial_progress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_radial_progress__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['title', 'percent', 'noSuffle'],
  components: {
    RadialProgressBar: vue_radial_progress__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Cards/SmallLineChartCard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Cards/SmallLineChartCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Charts_SmallLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Charts/SmallLine */ "./resources/src/components/Charts/SmallLine.vue");
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['labelPrefix', 'data'],
  components: {
    SmallLineChart: _components_Charts_SmallLine__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      labelx: '',
      labely: ''
    };
  },
  methods: {
    onChartMouseOver: function onChartMouseOver(_ref) {
      var labelx = _ref.labelx,
          labely = _ref.labely;
      this.labelx = labelx;
      this.labely = labely;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/SmallLine.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Charts/SmallLine.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
/* harmony import */ var core_js_modules_es6_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config */ "./resources/src/components/Charts/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils */ "./resources/src/utils/index.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





chart_js__WEBPACK_IMPORTED_MODULE_9___default.a.defaults.lineWithLine = chart_js__WEBPACK_IMPORTED_MODULE_9___default.a.defaults.line;
chart_js__WEBPACK_IMPORTED_MODULE_9___default.a.controllers.lineWithLine = chart_js__WEBPACK_IMPORTED_MODULE_9___default.a.controllers.line.extend({
  draw: function draw(ease) {
    chart_js__WEBPACK_IMPORTED_MODULE_9___default.a.controllers.line.prototype.draw.call(this, ease);

    if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
      var activePoint = this.chart.tooltip._active[0];
      var ctx = this.chart.ctx;
      var x = activePoint.tooltipPosition().x;
      var topY = this.chart.scales['y-axis-0'].top;
      var bottomY = this.chart.scales['y-axis-0'].bottom;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(0,0,0,0.1)';
      ctx.stroke();
      ctx.restore();
    }
  }
});
var SmallLine = Object(vue_chartjs__WEBPACK_IMPORTED_MODULE_10__["generateChart"])('small-line', 'lineWithLine');
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": SmallLine,
  props: ['data'],
  data: function data() {
    return {
      options: _config__WEBPACK_IMPORTED_MODULE_11__["smallLineChartOptions"]
    };
  },
  mounted: function mounted() {
    var $that = this;
    var tooltips = {
      intersect: false,
      enabled: false,
      custom: function custom(tooltipModel, data) {
        if (tooltipModel && tooltipModel.dataPoints) {
          var yLabel = tooltipModel.dataPoints[0].yLabel;
          var xLabel = tooltipModel.dataPoints[0].xLabel;
          var label = tooltipModel.body[0].lines[0].split(':')[0];
          $that.$emit('on-chart-mouse-over', {
            labelx: label + '-' + xLabel,
            labely: Object(_utils__WEBPACK_IMPORTED_MODULE_12__["addCommas"])(yLabel)
          });
        }
      }
    };
    this.addPlugin({
      afterInit: function afterInit(chart, options) {
        var yLabel = chart.data.datasets[0].data[0];
        var xLabel = chart.data.labels[0];
        var label = chart.data.datasets[0].label;
        $that.$emit('on-chart-mouse-over', {
          labelx: label + '-' + xLabel,
          labely: Object(_utils__WEBPACK_IMPORTED_MODULE_12__["addCommas"])(yLabel)
        });
      }
    });
    this.renderChart(this.data, Object.assign(_objectSpread({}, this.options), {
      tooltips: tooltips
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Cards/RadialProgressCard.vue?vue&type=template&id=1db643ae&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Cards/RadialProgressCard.vue?vue&type=template&id=1db643ae& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _vm.noSuffle != false
        ? _c("b-card-header", { staticClass: "p-0 position-relative" }, [
            _c("div", { staticClass: "position-absolute handle card-icon" }, [
              _c("i", { staticClass: "simple-icon-shuffle" })
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-card-body",
        { staticClass: "d-flex justify-content-between align-items-center" },
        [
          _c("h5", { staticClass: "mb-0 card-title" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "progress-bar-circle" },
            [
              _c(
                "radial-progress-bar",
                {
                  attrs: {
                    diameter: 54,
                    strokeWidth: 2,
                    "completed-steps": _vm.percent,
                    "total-steps": 100
                  }
                },
                [_vm._v(_vm._s(_vm.percent) + "%")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Cards/SmallLineChartCard.vue?vue&type=template&id=e687e376&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Cards/SmallLineChartCard.vue?vue&type=template&id=e687e376& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c("b-card-body", [
        _c("p", { staticClass: "lead color-theme-1 mb-1 value" }, [
          _vm._v(_vm._s(_vm.labelPrefix) + _vm._s(_vm.labely))
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "mb-0 label text-small" }, [
          _vm._v(_vm._s(_vm.labelx))
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "chart" },
          [
            _c("small-line-chart", {
              attrs: { data: _vm.data, height: 60 },
              on: { "on-chart-mouse-over": _vm.onChartMouseOver }
            })
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/components/Cards/RadialProgressCard.vue":
/*!***************************************************************!*\
  !*** ./resources/src/components/Cards/RadialProgressCard.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RadialProgressCard_vue_vue_type_template_id_1db643ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadialProgressCard.vue?vue&type=template&id=1db643ae& */ "./resources/src/components/Cards/RadialProgressCard.vue?vue&type=template&id=1db643ae&");
/* harmony import */ var _RadialProgressCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadialProgressCard.vue?vue&type=script&lang=js& */ "./resources/src/components/Cards/RadialProgressCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RadialProgressCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RadialProgressCard_vue_vue_type_template_id_1db643ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RadialProgressCard_vue_vue_type_template_id_1db643ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Cards/RadialProgressCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Cards/RadialProgressCard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/src/components/Cards/RadialProgressCard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialProgressCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RadialProgressCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Cards/RadialProgressCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialProgressCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Cards/RadialProgressCard.vue?vue&type=template&id=1db643ae&":
/*!**********************************************************************************************!*\
  !*** ./resources/src/components/Cards/RadialProgressCard.vue?vue&type=template&id=1db643ae& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialProgressCard_vue_vue_type_template_id_1db643ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RadialProgressCard.vue?vue&type=template&id=1db643ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Cards/RadialProgressCard.vue?vue&type=template&id=1db643ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialProgressCard_vue_vue_type_template_id_1db643ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialProgressCard_vue_vue_type_template_id_1db643ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/Cards/SmallLineChartCard.vue":
/*!***************************************************************!*\
  !*** ./resources/src/components/Cards/SmallLineChartCard.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SmallLineChartCard_vue_vue_type_template_id_e687e376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmallLineChartCard.vue?vue&type=template&id=e687e376& */ "./resources/src/components/Cards/SmallLineChartCard.vue?vue&type=template&id=e687e376&");
/* harmony import */ var _SmallLineChartCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SmallLineChartCard.vue?vue&type=script&lang=js& */ "./resources/src/components/Cards/SmallLineChartCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SmallLineChartCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SmallLineChartCard_vue_vue_type_template_id_e687e376___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SmallLineChartCard_vue_vue_type_template_id_e687e376___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Cards/SmallLineChartCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Cards/SmallLineChartCard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/src/components/Cards/SmallLineChartCard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallLineChartCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SmallLineChartCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Cards/SmallLineChartCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallLineChartCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Cards/SmallLineChartCard.vue?vue&type=template&id=e687e376&":
/*!**********************************************************************************************!*\
  !*** ./resources/src/components/Cards/SmallLineChartCard.vue?vue&type=template&id=e687e376& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallLineChartCard_vue_vue_type_template_id_e687e376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SmallLineChartCard.vue?vue&type=template&id=e687e376& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Cards/SmallLineChartCard.vue?vue&type=template&id=e687e376&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallLineChartCard_vue_vue_type_template_id_e687e376___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallLineChartCard_vue_vue_type_template_id_e687e376___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/Charts/SmallLine.vue":
/*!*******************************************************!*\
  !*** ./resources/src/components/Charts/SmallLine.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SmallLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmallLine.vue?vue&type=script&lang=js& */ "./resources/src/components/Charts/SmallLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _SmallLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Charts/SmallLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Charts/SmallLine.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/src/components/Charts/SmallLine.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SmallLine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/SmallLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/data/comments.js":
/*!****************************************!*\
  !*** ./resources/src/data/comments.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var data = [{
  title: 'Very informative content, thank you. ',
  detail: 'Mayra Sibley | Tea Loaf with Fresh Oranges | 17.09.2018 - 04:45',
  thumb: '/assets/img/profile-pic-l.jpg',
  rate: 5,
  key: 0
}, {
  title: 'This article was delightful to read. Please keep them coming.',
  detail: 'Barbera Castiglia | Cheesecake with Chocolate Cookies | 15.08.2018 - 01:18',
  thumb: '/assets/img/profile-pic-l-2.jpg',
  rate: 4,
  key: 1
}, {
  title: 'Your post is bad and you should feel bad.',
  detail: 'Bao Hathaway | Homemade Cheesecake | 26.07.2018 - 11:14',
  thumb: '/assets/img/profile-pic-l-3.jpg',
  rate: 5,
  key: 2
}, {
  title: 'Very original idea!',
  detail: 'Lenna Majeed | Tea Loaf with Fresh Oranges | 17.06.2018 - 09:20',
  thumb: '/assets/img/profile-pic-l-4.jpg',
  rate: 3,
  key: 3
}, {
  title: 'This article was delightful to read. Please keep them coming.',
  detail: 'Esperanza Lodge | Cheesecake with Fresh Berries | 16.06.2018 - 16:45',
  thumb: '/assets/img/profile-pic-l-5.jpg',
  rate: 2,
  key: 4
}, {
  title: 'Nah, did not like it.',
  detail: '24.07.2018 - 15:00',
  thumb: '/assets/img/profile-pic-l-2.jpg',
  rate: 5,
  key: 5
}, {
  title: 'Laree Munsch',
  detail: 'Brynn Bragg | Wedding Cake with Flowers | 12.04.2018 - 12:45',
  thumb: '/assets/img/profile-pic-l.jpg',
  rate: 4,
  key: 6
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./resources/src/data/products.js":
/*!****************************************!*\
  !*** ./resources/src/data/products.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var produtcs = [{
  id: 1,
  title: 'Marble Cake',
  img: '/assets/img/marble-cake-thumb.jpg',
  category: 'Cakes',
  createDate: '02.04.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Wedding cake with flowers Macarons and blueberries',
  sales: 1647,
  stock: 62
}, {
  id: 2,
  title: 'Fat Rascal',
  category: 'Cupcakes',
  img: '/assets/img/fat-rascal-thumb.jpg',
  createDate: '01.04.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Cheesecake with chocolate cookies and Cream biscuits',
  sales: 1240,
  stock: 48
}, {
  id: 3,
  title: 'Chocolate Cake',
  img: '/assets/img/chocolate-cake-thumb.jpg',
  category: 'Cakes',
  createDate: '25.03.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Homemade cheesecake with fresh berries and mint',
  sales: 1080,
  stock: 57
}, {
  id: 4,
  title: 'Goose Breast',
  img: '/assets/img/goose-breast-thumb.jpg',
  category: 'Cakes',
  createDate: '21.03.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Chocolate cake with berries',
  sales: 1014,
  stock: 41
}, {
  id: 5,
  title: 'Petit Gâteau',
  category: 'Cupcakes',
  img: '/assets/img/petit-gateau-thumb.jpg',
  createDate: '02.06.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Chocolate cake with mascarpone',
  sales: 985,
  stock: 23
}, {
  id: 6,
  title: 'Salzburger Nockerl',
  img: '/assets/img/salzburger-nockerl-thumb.jpg',
  category: 'Desserts',
  createDate: '14.07.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Wedding cake decorated with donuts and wild berries',
  sales: 962,
  stock: 34
}, {
  id: 7,
  title: 'Napoleonshat',
  img: '/assets/img/napoleonshat-thumb.jpg',
  category: 'Desserts',
  createDate: '05.02.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Cheesecake with fresh berries and mint for dessert',
  sales: 921,
  stock: 31
}, {
  id: 8,
  title: 'Cheesecake',
  img: '/assets/img/cheesecake-thumb.jpg',
  category: 'Cakes',
  createDate: '18.08.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Delicious vegan chocolate cake',
  sales: 887,
  stock: 21
}, {
  id: 9,
  title: 'Financier',
  img: '/assets/img/financier-thumb.jpg',
  category: 'Cakes',
  createDate: '15.03.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
  sales: 865,
  stock: 53
}, {
  id: 10,
  title: 'Genoise',
  img: '/assets/img/genoise-thumb.jpg',
  category: 'Cupcakes',
  createDate: '11.06.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Christmas fruit cake, pudding on top',
  sales: 824,
  stock: 55
}, {
  id: 11,
  title: 'Gingerbread',
  img: '/assets/img/gingerbread-thumb.jpg',
  category: 'Cakes',
  createDate: '10.04.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Wedding cake decorated with donuts and wild berries',
  sales: 714,
  stock: 12
}, {
  id: 12,
  title: 'Magdalena',
  img: '/assets/img/magdalena-thumb.jpg',
  category: 'Cakes',
  createDate: '22.07.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Christmas fruit cake, pudding on top',
  sales: 702,
  stock: 14
}, {
  id: 13,
  title: 'Parkin',
  img: '/assets/img/parkin-thumb.jpg',
  category: 'Cakes',
  createDate: '22.08.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
  sales: 689,
  stock: 78
}, {
  id: 14,
  title: 'Streuselkuchen',
  img: '/assets/img/streuselkuchen-thumb.jpg',
  category: 'Cakes',
  createDate: '22.07.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Delicious vegan chocolate cake',
  sales: 645,
  stock: 55
}, {
  id: 15,
  title: 'Tea loaf',
  img: '/assets/img/tea-loaf-thumb.jpg',
  category: 'Cakes',
  createDate: '10.09.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Cheesecake with fresh berries and mint for dessert',
  sales: 632,
  stock: 20
}, {
  id: 16,
  title: 'Merveilleux',
  img: '/assets/img/merveilleux-thumb.jpg',
  category: 'Cakes',
  createDate: '18.02.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Chocolate cake with mascarpone',
  sales: 621,
  stock: 6
}, {
  id: 17,
  title: 'Fruitcake',
  img: '/assets/img/fruitcake-thumb.jpg',
  category: 'Cakes',
  createDate: '12.01.2019',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Chocolate cake with berries',
  sales: 595,
  stock: 17
}, {
  id: 18,
  title: 'Bebinca',
  img: '/assets/img/bebinca-thumb.jpg',
  category: 'Cakes',
  createDate: '04.02.2019',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Homemade cheesecake with fresh berries and mint',
  sales: 574,
  stock: 16
}, {
  id: 19,
  title: 'Cremeschnitte',
  img: '/assets/img/cremeschnitte-thumb.jpg',
  category: 'Desserts',
  createDate: '04.03.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Cheesecake with chocolate cookies and Cream biscuits',
  sales: 562,
  stock: 9
}, {
  id: 20,
  title: 'Soufflé',
  img: '/assets/img/souffle-thumb.jpg',
  category: 'Cupcakes',
  createDate: '16.01.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Wedding cake with flowers Macarons and blueberries',
  sales: 524,
  stock: 14
}];
/* harmony default export */ __webpack_exports__["default"] = (produtcs);

/***/ })

}]);