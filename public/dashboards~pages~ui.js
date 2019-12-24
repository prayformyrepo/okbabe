(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards~pages~ui"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/AreaShadow.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Charts/AreaShadow.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./resources/src/components/Charts/config.js");



chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.lineWithShadow = chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.line;
chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.lineWithShadow = chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.line.extend({
  draw: function draw(ease) {
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.line.prototype.draw.call(this, ease);
    var ctx = this.chart.ctx;
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.15)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 10;
    ctx.responsive = true;
    ctx.stroke();
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.line.prototype.draw.apply(this, arguments);
    ctx.restore();
  }
});
var AreaShadow = Object(vue_chartjs__WEBPACK_IMPORTED_MODULE_1__["generateChart"])('area-with-shadow', 'lineWithShadow');
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": AreaShadow,
  props: ['data'],
  data: function data() {
    return {
      options: _config__WEBPACK_IMPORTED_MODULE_2__["areaChartOptions"]
    };
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Common/Stars.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Common/Stars.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'Stars',
  props: ['value', 'disabled'],
  data: function data() {
    return {
      tempValue: null,
      ratings: [1, 2, 3, 4, 5],
      onMouseOver: false
    };
  },
  methods: {
    star_over: function star_over(rate) {
      if (!this.disabled) {
        this.tempValue = rate;
        this.onMouseOver = true;
      }
    },
    star_out: function star_out() {
      this.onMouseOver = false;
    },
    set: function set(value) {
      if (!this.disabled) {
        this.tempValue = value;
        this.$emit('input', this.tempValue);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Common/Stars.vue?vue&type=template&id=5abd973a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Common/Stars.vue?vue&type=template&id=5abd973a& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "div",
    { key: "1", staticClass: "piaf-rater" },
    _vm._l(_vm.ratings, function(r, index) {
      return _c("div", {
        key: index,
        staticClass: "piaf-rater-star ",
        class: {
          "is-active": _vm.value >= r && _vm.value != null,
          "is-disabled": _vm.disabled,
          "will-be-active": _vm.onMouseOver && _vm.tempValue >= r ? true : false
        },
        on: {
          click: function($event) {
            return _vm.set(r)
          },
          mouseover: function($event) {
            return _vm.star_over(r)
          },
          mouseout: _vm.star_out
        }
      })
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/components/Charts/AreaShadow.vue":
/*!********************************************************!*\
  !*** ./resources/src/components/Charts/AreaShadow.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AreaShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AreaShadow.vue?vue&type=script&lang=js& */ "./resources/src/components/Charts/AreaShadow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _AreaShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Charts/AreaShadow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Charts/AreaShadow.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/src/components/Charts/AreaShadow.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AreaShadow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/AreaShadow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Common/Stars.vue":
/*!***************************************************!*\
  !*** ./resources/src/components/Common/Stars.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stars_vue_vue_type_template_id_5abd973a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stars.vue?vue&type=template&id=5abd973a& */ "./resources/src/components/Common/Stars.vue?vue&type=template&id=5abd973a&");
/* harmony import */ var _Stars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stars.vue?vue&type=script&lang=js& */ "./resources/src/components/Common/Stars.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Stars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Stars_vue_vue_type_template_id_5abd973a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Stars_vue_vue_type_template_id_5abd973a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Common/Stars.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Common/Stars.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/src/components/Common/Stars.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Stars.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Common/Stars.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Common/Stars.vue?vue&type=template&id=5abd973a&":
/*!**********************************************************************************!*\
  !*** ./resources/src/components/Common/Stars.vue?vue&type=template&id=5abd973a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stars_vue_vue_type_template_id_5abd973a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Stars.vue?vue&type=template&id=5abd973a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Common/Stars.vue?vue&type=template&id=5abd973a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stars_vue_vue_type_template_id_5abd973a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stars_vue_vue_type_template_id_5abd973a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/data/charts.js":
/*!**************************************!*\
  !*** ./resources/src/data/charts.js ***!
  \**************************************/
/*! exports provided: lineChartData, polarAreaChartData, areaChartData, scatterChartData, barChartData, radarChartData, pieChartData, doughnutChartData, smallChartData1, smallChartData2, smallChartData3, smallChartData4, conversionChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartData", function() { return lineChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polarAreaChartData", function() { return polarAreaChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartData", function() { return areaChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scatterChartData", function() { return scatterChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartData", function() { return barChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radarChartData", function() { return radarChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartData", function() { return pieChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doughnutChartData", function() { return doughnutChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallChartData1", function() { return smallChartData1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallChartData2", function() { return smallChartData2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallChartData3", function() { return smallChartData3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallChartData4", function() { return smallChartData4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conversionChartData", function() { return conversionChartData; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./resources/src/utils/index.js");

var colors = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["ThemeColors"])();
var lineChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: '',
    data: [54, 63, 60, 65, 60, 68, 60],
    borderColor: colors.themeColor1,
    pointBackgroundColor: colors.foregroundColor,
    pointBorderColor: colors.themeColor1,
    pointHoverBackgroundColor: colors.themeColor1,
    pointHoverBorderColor: colors.foregroundColor,
    pointRadius: 6,
    pointBorderWidth: 2,
    pointHoverRadius: 8,
    fill: false
  }]
};
var polarAreaChartData = {
  labels: ['Cakes', 'Desserts', 'Cupcakes'],
  datasets: [{
    data: [80, 90, 70],
    borderWidth: 2,
    borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
    backgroundColor: [colors.themeColor1_10, colors.themeColor2_10, colors.themeColor3_10]
  }]
};
var areaChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: '',
    data: [54, 63, 60, 65, 60, 68, 60],
    borderColor: colors.themeColor1,
    pointBackgroundColor: colors.foregroundColor,
    pointBorderColor: colors.themeColor1,
    pointHoverBackgroundColor: colors.themeColor1,
    pointHoverBorderColor: colors.foregroundColor,
    pointRadius: 4,
    pointBorderWidth: 2,
    pointHoverRadius: 5,
    fill: true,
    borderWidth: 2,
    backgroundColor: colors.themeColor1_10
  }]
};
var scatterChartData = {
  datasets: [{
    borderWidth: 2,
    label: 'Cakes',
    borderColor: colors.themeColor1,
    backgroundColor: colors.themeColor1_10,
    data: [{
      x: 62,
      y: -78
    }, {
      x: -0,
      y: 74
    }, {
      x: -67,
      y: 45
    }, {
      x: -26,
      y: -43
    }, {
      x: -15,
      y: -30
    }, {
      x: 65,
      y: -68
    }, {
      x: -28,
      y: -61
    }]
  }, {
    borderWidth: 2,
    label: 'Desserts',
    borderColor: colors.themeColor2,
    backgroundColor: colors.themeColor2_10,
    data: [{
      x: 79,
      y: 62
    }, {
      x: 62,
      y: 0
    }, {
      x: -76,
      y: -81
    }, {
      x: -51,
      y: 41
    }, {
      x: -9,
      y: 9
    }, {
      x: 72,
      y: -37
    }, {
      x: 62,
      y: -26
    }]
  }]
};
var barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    label: 'Cakes',
    borderColor: colors.themeColor1,
    backgroundColor: colors.themeColor1_10,
    data: [456, 479, 324, 569, 702, 600],
    borderWidth: 2
  }, {
    label: 'Desserts',
    borderColor: colors.themeColor2,
    backgroundColor: colors.themeColor2_10,
    data: [364, 504, 605, 400, 345, 320],
    borderWidth: 2
  }]
};
var radarChartData = {
  datasets: [{
    label: 'Stock',
    borderWidth: 2,
    pointBackgroundColor: colors.themeColor1,
    borderColor: colors.themeColor1,
    backgroundColor: colors.themeColor1_10,
    data: [80, 90, 70]
  }, {
    label: 'Order',
    borderWidth: 2,
    pointBackgroundColor: colors.themeColor2,
    borderColor: colors.themeColor2,
    backgroundColor: colors.themeColor2_10,
    data: [68, 80, 95]
  }],
  labels: ['Cakes', 'Desserts', 'Cupcakes']
};
var pieChartData = {
  labels: ['Cakes', 'Cupcakes', 'Desserts'],
  datasets: [{
    label: '',
    borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
    backgroundColor: [colors.themeColor1_10, colors.themeColor2_10, colors.themeColor3_10],
    borderWidth: 2,
    data: [15, 25, 20]
  }]
};
var doughnutChartData = {
  labels: ['Cakes', 'Cupcakes', 'Desserts'],
  datasets: [{
    label: '',
    borderColor: [colors.themeColor3, colors.themeColor2, colors.themeColor1],
    backgroundColor: [colors.themeColor3_10, colors.themeColor2_10, colors.themeColor1_10],
    borderWidth: 2,
    data: [15, 25, 20]
  }]
};
var smallChartData1 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Total Orders',
    borderColor: colors.themeColor1,
    pointBorderColor: colors.themeColor1,
    pointHoverBackgroundColor: colors.themeColor1,
    pointHoverBorderColor: colors.themeColor1,
    pointRadius: 2,
    pointBorderWidth: 3,
    pointHoverRadius: 2,
    fill: false,
    borderWidth: 2,
    data: [1250, 1300, 1550, 921, 1810, 1106, 1610],
    datalabels: {
      align: 'end',
      anchor: 'end'
    }
  }]
};
var smallChartData2 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Pending Orders',
    borderColor: colors.themeColor1,
    pointBorderColor: colors.themeColor1,
    pointHoverBackgroundColor: colors.themeColor1,
    pointHoverBorderColor: colors.themeColor1,
    pointRadius: 2,
    pointBorderWidth: 3,
    pointHoverRadius: 2,
    fill: false,
    borderWidth: 2,
    data: [115, 120, 300, 222, 105, 85, 36],
    datalabels: {
      align: 'end',
      anchor: 'end'
    }
  }]
};
var smallChartData3 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Total Orders',
    borderColor: colors.themeColor1,
    pointBorderColor: colors.themeColor1,
    pointHoverBackgroundColor: colors.themeColor1,
    pointHoverBorderColor: colors.themeColor1,
    pointRadius: 2,
    pointBorderWidth: 3,
    pointHoverRadius: 2,
    fill: false,
    borderWidth: 2,
    data: [350, 452, 762, 952, 630, 85, 158],
    datalabels: {
      align: 'end',
      anchor: 'end'
    }
  }]
};
var smallChartData4 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Total Orders',
    borderColor: colors.themeColor1,
    pointBorderColor: colors.themeColor1,
    pointHoverBackgroundColor: colors.themeColor1,
    pointHoverBorderColor: colors.themeColor1,
    pointRadius: 2,
    pointBorderWidth: 3,
    pointHoverRadius: 2,
    fill: false,
    borderWidth: 2,
    data: [200, 452, 250, 630, 125, 85, 20],
    datalabels: {
      align: 'end',
      anchor: 'end'
    }
  }]
};
var conversionChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: '',
    data: [65, 60, 68, 60, 58, 63, 60],
    borderColor: colors.themeColor2,
    pointBackgroundColor: colors.foregroundColor,
    pointBorderColor: colors.themeColor2,
    pointHoverBackgroundColor: colors.themeColor2,
    pointHoverBorderColor: colors.foregroundColor,
    pointRadius: 4,
    pointBorderWidth: 2,
    pointHoverRadius: 5,
    fill: true,
    borderWidth: 2,
    backgroundColor: colors.themeColor2_10
  }]
};

/***/ })

}]);