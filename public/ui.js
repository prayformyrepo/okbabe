(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/Area.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Charts/Area.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./resources/src/components/Charts/config.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: ['data'],
  data: function data() {
    return {
      options: _config__WEBPACK_IMPORTED_MODULE_1__["areaChartOptions"]
    };
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/Bar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Charts/Bar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./resources/src/components/Charts/config.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  props: ['data'],
  data: function data() {
    return {
      options: _config__WEBPACK_IMPORTED_MODULE_1__["barChartOptions"]
    };
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/BarShadow.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Charts/BarShadow.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./resources/src/components/Charts/config.js");



chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.barWithShadow = chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.bar;
chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.barWithShadow = chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.bar.extend({
  draw: function draw(ease) {
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.bar.prototype.draw.call(this, ease);
    var ctx = this.chart.ctx;
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.2)';
    ctx.shadowBlur = 7;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 7;
    ctx.responsive = true;
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.bar.prototype.draw.apply(this, arguments);
    ctx.restore();
  }
});
var BarShadow = Object(vue_chartjs__WEBPACK_IMPORTED_MODULE_1__["generateChart"])('bar-with-shadow', 'barWithShadow');
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": BarShadow,
  props: ['data'],
  data: function data() {
    return {
      options: _config__WEBPACK_IMPORTED_MODULE_2__["barChartOptions"]
    };
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/Doughnut.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Charts/Doughnut.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./resources/src/components/Charts/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./resources/src/utils/index.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Doughnut"],
  props: ['data'],
  data: function data() {
    return {
      options: _config__WEBPACK_IMPORTED_MODULE_1__["doughnutChartOptions"]
    };
  },
  mounted: function mounted() {
    this.addPlugin(_utils__WEBPACK_IMPORTED_MODULE_2__["centerTextPlugin"]);
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/Line.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Charts/Line.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./resources/src/components/Charts/config.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: ['data'],
  data: function data() {
    return {
      options: _config__WEBPACK_IMPORTED_MODULE_1__["lineChartOptions"]
    };
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/Pie.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Charts/Pie.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./resources/src/components/Charts/config.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Pie"],
  props: ['data'],
  data: function data() {
    return {
      options: _config__WEBPACK_IMPORTED_MODULE_1__["pieChartOptions"]
    };
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/PieShadow.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Charts/PieShadow.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./resources/src/components/Charts/config.js");



chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.pieWithShadow = chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.pie;
chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.pieWithShadow = chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.pie.extend({
  draw: function draw(ease) {
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.pie.prototype.draw.call(this, ease);
    var ctx = this.chart.chart.ctx;
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.15)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 10;
    ctx.responsive = true;
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.pie.prototype.draw.apply(this, arguments);
    ctx.restore();
  }
});
var PieShadow = Object(vue_chartjs__WEBPACK_IMPORTED_MODULE_1__["generateChart"])('pie-with-shadow', 'pieWithShadow');
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": PieShadow,
  props: ['data'],
  data: function data() {
    return {
      options: _config__WEBPACK_IMPORTED_MODULE_2__["pieChartOptions"]
    };
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/PolarArea.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Charts/PolarArea.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./resources/src/components/Charts/config.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["PolarArea"],
  props: ['data'],
  data: function data() {
    return {
      options: _config__WEBPACK_IMPORTED_MODULE_1__["polarAreaChartOptions"]
    };
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/Radar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Charts/Radar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./resources/src/components/Charts/config.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Radar"],
  props: ['data'],
  data: function data() {
    return {
      options: _config__WEBPACK_IMPORTED_MODULE_1__["radarChartOptions"]
    };
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/Scatter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Charts/Scatter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./resources/src/components/Charts/config.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Scatter"],
  props: ['data'],
  data: function data() {
    return {
      options: _config__WEBPACK_IMPORTED_MODULE_1__["scatterChartOptions"]
    };
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/ScatterShadow.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Charts/ScatterShadow.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./resources/src/components/Charts/config.js");



chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.scatterWithShadow = chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.scatter;
chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.scatterWithShadow = chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.scatter.extend({
  draw: function draw(ease) {
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.scatter.prototype.draw.call(this, ease);
    var ctx = this.chart.chart.ctx;
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.2)';
    ctx.shadowBlur = 7;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 7;
    ctx.responsive = true;
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.scatter.prototype.draw.apply(this, arguments);
    ctx.restore();
  }
});
var ScatterShadow = Object(vue_chartjs__WEBPACK_IMPORTED_MODULE_1__["generateChart"])('scatter-with-shadow', 'scatterWithShadow');
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": ScatterShadow,
  props: ['data'],
  data: function data() {
    return {
      options: _config__WEBPACK_IMPORTED_MODULE_2__["scatterChartOptions"]
    };
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Common/StateButton.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Common/StateButton.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
  props: ['id', 'variant', 'click'],
  data: function data() {
    return {
      status: 'default',
      message: '',
      messageShow: false
    };
  },
  methods: {
    handleClick: function handleClick() {
      var _this = this;

      this.status = 'processing';
      this.click().then(function (res) {
        _this.status = 'success';
        _this.message = res;
      })["catch"](function (err) {
        _this.status = 'fail';
        _this.message = err;
      })["finally"](function () {
        _this.messageShow = true;

        _this.$refs.statusTooltip.$emit('enable');

        setTimeout(function () {
          _this.messageShow = false;
          _this.status = 'default';

          _this.$refs.statusTooltip.$emit('disable');
        }, 3000);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Form/InputTag.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Form/InputTag.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_6__);








/* eslint-disable */
var validators = {
  email: new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
  url: new RegExp(/^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i),
  text: new RegExp(/^[a-zA-Z]+$/),
  digits: new RegExp(/^[\d() \.\:\-\+#]+$/),
  isodate: new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/)
};
/* eslint-enable */

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InputTag',
  props: {
    value: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    placeholder: {
      type: String,
      "default": ''
    },
    readOnly: {
      type: Boolean,
      "default": false
    },
    validate: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: String | Function | Object,
      "default": ''
    },
    addTagOnKeys: {
      type: Array,
      "default": function _default() {
        return [13, // Return
        188, // Comma ','
        9 // Tab
        ];
      }
    },
    addTagOnBlur: {
      type: Boolean,
      "default": false
    },
    limit: {
      type: Number,
      "default": -1
    },
    allowDuplicates: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      newTag: '',
      innerTags: Object(_Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(this.value),
      isInputActive: false
    };
  },
  computed: {
    isLimit: function isLimit() {
      return this.limit > 0 && Number(this.limit) === this.innerTags.length;
    }
  },
  methods: {
    focusNewTag: function focusNewTag() {
      if (this.readOnly || !this.$el.querySelector('.vue-tagsinput-input')) {
        return;
      }

      this.$el.querySelector('.vue-tagsinput-input').focus();
    },
    handleInputFocus: function handleInputFocus() {
      this.isInputActive = true;
    },
    handleInputBlur: function handleInputBlur(e) {
      this.isInputActive = false;
      this.addNew(e);
    },
    addNew: function addNew(e) {
      var keyShouldAddTag = e ? this.addTagOnKeys.indexOf(e.keyCode) !== -1 : true;
      var typeIsNotBlur = e && e.type !== 'blur';

      if (!keyShouldAddTag && (typeIsNotBlur || !this.addTagOnBlur) || this.isLimit) {
        return;
      }

      if (this.newTag && (this.allowDuplicates || this.innerTags.indexOf(this.newTag) === -1) && this.validateIfNeeded(this.newTag)) {
        this.innerTags.push(this.newTag);
        this.newTag = '';
        this.tagChange();
        e && e.preventDefault();
      }
    },
    validateIfNeeded: function validateIfNeeded(tagValue) {
      if (this.validate === '' || this.validate === undefined) {
        return true;
      }

      if (typeof this.validate === 'function') {
        return this.validate(tagValue);
      }

      if (typeof this.validate === 'string' && Object.keys(validators).indexOf(this.validate) > -1) {
        return validators[this.validate].test(tagValue);
      }

      if (Object(_Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(this.validate) === 'object' && this.validate.test !== undefined) {
        return this.validate.test(tagValue);
      }

      return true;
    },
    remove: function remove(index) {
      this.innerTags.splice(index, 1);
      this.tagChange();
    },
    removeLastTag: function removeLastTag() {
      if (this.newTag) {
        return;
      }

      this.innerTags.pop();
      this.tagChange();
    },
    tagChange: function tagChange() {
      this.$emit('update:tags', this.innerTags);
      this.$emit('input', this.innerTags);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Alerts.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Alerts.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  methods: {
    addNotification: function addNotification() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'This is Notify Title';
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'This is Notify Message,<br>with html.';
      this.$notify(type, title, message, {
        duration: 3000,
        permanent: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Buttons.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Buttons.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Common_StateButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Common/StateButton */ "./resources/src/components/Common/StateButton.vue");

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
  components: {
    StateButton: _components_Common_StateButton__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      checkedCheckboxes: [],
      selectedRadio: 0
    };
  },
  methods: {
    successButtonClick: function successButtonClick() {
      // eslint-disable-next-line promise/param-names
      return new Promise(function (success, fail) {
        setTimeout(function () {
          success('Everything went right!');
        }, 2000);
      });
    },
    failButtonClick: function failButtonClick() {
      // eslint-disable-next-line promise/param-names
      return new Promise(function (success, fail) {
        setTimeout(function () {
          // eslint-disable-next-line prefer-promise-reject-errors
          fail('Something is wrong!');
        }, 2000);
      });
    },
    checkButtonCheck: function checkButtonCheck(i) {
      var index = this.checkedCheckboxes.indexOf(i);

      if (index === -1) {
        this.checkedCheckboxes.push(i);
      } else {
        this.checkedCheckboxes.splice(index, 1);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Cards.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Cards.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Cards_IconCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Cards/IconCard */ "./resources/src/components/Cards/IconCard.vue");
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
  components: {
    IconCard: _components_Cards_IconCard__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Carousel.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Carousel.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/dist/css/swiper.css */ "./node_modules/swiper/dist/css/swiper.css");
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-resize */ "./node_modules/vue-resize/dist/vue-resize.esm.js");
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
  components: {
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiperSlide"],
    ResizeObserver: vue_resize__WEBPACK_IMPORTED_MODULE_2__["ResizeObserver"]
  },
  data: function data() {
    return {
      swiperBasicOption: {
        slidesPerView: 3,
        pagination: {
          el: '.swiper-basic-nav',
          clickable: true,
          bulletClass: 'slider-dot',
          bulletActiveClass: 'active',
          dynamicBullets: true,
          renderBullet: function renderBullet(index, className) {
            return "<button class=\"".concat(className, "\"></button>");
          }
        },
        navigation: {
          nextEl: '.swiper-basic-next',
          prevEl: '.swiper-basic-prev'
        },
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          1000: {
            slidesPerView: 1
          },
          1400: {
            slidesPerView: 2
          }
        }
      },
      swiperSingleOption: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-single-nav',
          clickable: true,
          bulletClass: 'slider-dot',
          bulletActiveClass: 'active',
          dynamicBullets: true,
          renderBullet: function renderBullet(index, className) {
            return "<button class=\"".concat(className, "\"></button>");
          }
        },
        navigation: {
          nextEl: '.swiper-single-next',
          prevEl: '.swiper-single-prev'
        }
      },
      swiperInfiniteOption: {
        slidesPerView: 4,
        loop: true,
        pagination: {
          el: '.swiper-infinite-nav',
          clickable: true,
          bulletClass: 'slider-dot',
          bulletActiveClass: 'active',
          dynamicBullets: true,
          renderBullet: function renderBullet(index, className) {
            return "<button class=\"".concat(className, "\"></button>");
          }
        },
        navigation: {
          nextEl: '.swiper-infinite-next',
          prevEl: '.swiper-infinite-prev'
        },
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 1
          },
          800: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        }
      }
    };
  },
  methods: {
    handleSwiperSingleResize: function handleSwiperSingleResize() {
      this.$refs.swiperSingle.update();
    },
    handleSwiperBasicResize: function handleSwiperBasicResize() {
      this.$refs.swiperBasic.update();
    },
    handleSwiperInfiniteResize: function handleSwiperInfiniteResize() {
      this.$refs.swiperInfinite.update();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Charts.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Charts.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/charts */ "./resources/src/data/charts.js");
/* harmony import */ var _components_Charts_LineShadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Charts/LineShadow */ "./resources/src/components/Charts/LineShadow.vue");
/* harmony import */ var _components_Charts_Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Charts/Line */ "./resources/src/components/Charts/Line.vue");
/* harmony import */ var _components_Charts_PolarAreaShadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Charts/PolarAreaShadow */ "./resources/src/components/Charts/PolarAreaShadow.vue");
/* harmony import */ var _components_Charts_PolarArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Charts/PolarArea */ "./resources/src/components/Charts/PolarArea.vue");
/* harmony import */ var _components_Charts_AreaShadow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Charts/AreaShadow */ "./resources/src/components/Charts/AreaShadow.vue");
/* harmony import */ var _components_Charts_Area__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Charts/Area */ "./resources/src/components/Charts/Area.vue");
/* harmony import */ var _components_Charts_ScatterShadow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Charts/ScatterShadow */ "./resources/src/components/Charts/ScatterShadow.vue");
/* harmony import */ var _components_Charts_Scatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Charts/Scatter */ "./resources/src/components/Charts/Scatter.vue");
/* harmony import */ var _components_Charts_BarShadow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Charts/BarShadow */ "./resources/src/components/Charts/BarShadow.vue");
/* harmony import */ var _components_Charts_Bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Charts/Bar */ "./resources/src/components/Charts/Bar.vue");
/* harmony import */ var _components_Charts_RadarShadow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Charts/RadarShadow */ "./resources/src/components/Charts/RadarShadow.vue");
/* harmony import */ var _components_Charts_Radar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Charts/Radar */ "./resources/src/components/Charts/Radar.vue");
/* harmony import */ var _components_Charts_PieShadow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Charts/PieShadow */ "./resources/src/components/Charts/PieShadow.vue");
/* harmony import */ var _components_Charts_Pie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/Charts/Pie */ "./resources/src/components/Charts/Pie.vue");
/* harmony import */ var _components_Charts_DoughnutShadow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/Charts/DoughnutShadow */ "./resources/src/components/Charts/DoughnutShadow.vue");
/* harmony import */ var _components_Charts_Doughnut__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/Charts/Doughnut */ "./resources/src/components/Charts/Doughnut.vue");
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
//
//
//
//
//

















/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LineChart: _components_Charts_Line__WEBPACK_IMPORTED_MODULE_2__["default"],
    LineShadowChart: _components_Charts_LineShadow__WEBPACK_IMPORTED_MODULE_1__["default"],
    PolarAreaChart: _components_Charts_PolarArea__WEBPACK_IMPORTED_MODULE_4__["default"],
    PolarAreaShadowChart: _components_Charts_PolarAreaShadow__WEBPACK_IMPORTED_MODULE_3__["default"],
    AreaShadowChart: _components_Charts_AreaShadow__WEBPACK_IMPORTED_MODULE_5__["default"],
    AreaChart: _components_Charts_Area__WEBPACK_IMPORTED_MODULE_6__["default"],
    ScatterShadowChart: _components_Charts_ScatterShadow__WEBPACK_IMPORTED_MODULE_7__["default"],
    ScatterChart: _components_Charts_Scatter__WEBPACK_IMPORTED_MODULE_8__["default"],
    BarShadowChart: _components_Charts_BarShadow__WEBPACK_IMPORTED_MODULE_9__["default"],
    BarChart: _components_Charts_Bar__WEBPACK_IMPORTED_MODULE_10__["default"],
    RadarShadowChart: _components_Charts_RadarShadow__WEBPACK_IMPORTED_MODULE_11__["default"],
    RadarChart: _components_Charts_Radar__WEBPACK_IMPORTED_MODULE_12__["default"],
    PieShadowChart: _components_Charts_PieShadow__WEBPACK_IMPORTED_MODULE_13__["default"],
    PieChart: _components_Charts_Pie__WEBPACK_IMPORTED_MODULE_14__["default"],
    DoughnutShadowChart: _components_Charts_DoughnutShadow__WEBPACK_IMPORTED_MODULE_15__["default"],
    DoughnutChart: _components_Charts_Doughnut__WEBPACK_IMPORTED_MODULE_16__["default"]
  },
  data: function data() {
    return {
      lineChartData: _data_charts__WEBPACK_IMPORTED_MODULE_0__["lineChartData"],
      polarAreaChartData: _data_charts__WEBPACK_IMPORTED_MODULE_0__["polarAreaChartData"],
      areaChartData: _data_charts__WEBPACK_IMPORTED_MODULE_0__["areaChartData"],
      scatterChartData: _data_charts__WEBPACK_IMPORTED_MODULE_0__["scatterChartData"],
      barChartData: _data_charts__WEBPACK_IMPORTED_MODULE_0__["barChartData"],
      radarChartData: _data_charts__WEBPACK_IMPORTED_MODULE_0__["radarChartData"],
      pieChartData: _data_charts__WEBPACK_IMPORTED_MODULE_0__["pieChartData"],
      doughnutChartData: _data_charts__WEBPACK_IMPORTED_MODULE_0__["doughnutChartData"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Editors.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Editors.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css");
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__);
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
  components: {
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__["quillEditor"]
  },
  data: function data() {
    return {
      content: '',
      editorOption: {
        placeholder: '',
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike', 'blockquote'], [{
            list: 'ordered'
          }, {
            list: 'bullet'
          }, {
            indent: '-1'
          }, {
            indent: '+1'
          }], ['link', 'image'], ['clean']]
        }
      },
      contentBubble: '',
      editorOptionBubble: {
        theme: 'bubble',
        placeholder: '',
        modules: {
          toolbar: [['bold', 'italic', 'link', {
            header: 1
          }, {
            header: 2
          }, 'blockquote']]
        }
      }
    };
  },
  methods: {
    onEditorBlur: function onEditorBlur(editor) {
      console.log('editor blur!', editor);
    },
    onEditorFocus: function onEditorFocus(editor) {
      console.log('editor focus!', editor);
    },
    onEditorReady: function onEditorReady(editor) {
      console.log('editor ready!', editor);
    },
    onEditorChange: function onEditorChange(_ref) {
      var editor = _ref.editor,
          html = _ref.html,
          text = _ref.text;
      // console.log('editor change!', editor, html, text)
      this.contentBubble = html;
    }
  },
  computed: {
    editor: function editor() {
      return this.$refs.myTextEditor.quill;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/FormComponents.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/FormComponents.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_autosuggest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-autosuggest */ "./node_modules/vue-autosuggest/dist/vue-autosuggest.esm.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Form_InputTag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Form/InputTag */ "./resources/src/components/Form/InputTag.vue");
/* harmony import */ var vue_switches__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-switches */ "./node_modules/vue-switches/src/switches.vue");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-slider-component */ "./node_modules/vue-slider-component/dist/index.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Common_Stars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Common/Stars */ "./resources/src/components/Common/Stars.vue");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_11__);



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
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_3___default.a,
    VueAutosuggest: vue_autosuggest__WEBPACK_IMPORTED_MODULE_5__["VueAutosuggest"],
    VueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_6___default.a,
    InputTag: _components_Form_InputTag__WEBPACK_IMPORTED_MODULE_7__["default"],
    Switches: vue_switches__WEBPACK_IMPORTED_MODULE_8__["default"],
    VueSlider: vue_slider_component__WEBPACK_IMPORTED_MODULE_9___default.a,
    Stars: _components_Common_Stars__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      rate: 3,
      disabledRate: 4,
      sliderValue: 65,
      sliderDoubleValue: [100, 400],
      sliderData: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      selectedValueSingle: new Date(),
      selectedValueDisabled: new Date(),
      selectedValueSingleInline: new Date(),
      selectedValueRange: {
        start: new Date(2018, 12, 9),
        end: new Date(2018, 12, 18)
      },
      vueSelectForm: {
        single: '',
        multiple: []
      },
      vueSelectOptions: [],
      selectData: ['Chocolate', 'Vanilla', 'Strawberry', 'Caramel', 'Cookies and Cream', 'Peppermint'],
      vueAutosuggestForm: {
        selected: {}
      },
      filteredOptions: [],
      suggestions: [{
        data: [{
          id: 1,
          name: 'Marble Cake'
        }, {
          id: 2,
          name: 'Fruitcake'
        }, {
          id: 3,
          name: 'Chocolate Cake'
        }, {
          id: 4,
          name: 'Fat Rascal'
        }, {
          id: 5,
          name: 'Financier'
        }, {
          id: 6,
          name: 'Genoise'
        }, {
          id: 7,
          name: 'Gingerbread'
        }, {
          id: 8,
          name: 'Goose Breast'
        }, {
          id: 9,
          name: 'Parkin'
        }, {
          id: 10,
          name: 'Petit Gâteau'
        }, {
          id: 11,
          name: 'Salzburger Nockerl'
        }, {
          id: 12,
          name: 'Soufflé'
        }, {
          id: 13,
          name: 'Streuselkuchen'
        }, {
          id: 14,
          name: 'Tea Loaf'
        }, {
          id: 15,
          name: 'Napoleonshat'
        }, {
          id: 16,
          name: 'Merveilleux'
        }, {
          id: 17,
          name: 'Magdalena'
        }, {
          id: 18,
          name: 'Cremeschnitte'
        }, {
          id: 19,
          name: 'Cheesecake'
        }, {
          id: 20,
          name: 'Bebinca'
        }]
      }],
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailHeight: 160,
        maxFilesize: 2,
        previewTemplate: this.dropzoneTemplate(),
        headers: {
          'My-Awesome-Header': 'header value'
        }
      },
      tags: [],
      switches: {
        primary: true,
        secondary: false,
        primaryInverse: false,
        secondaryInverse: true
      }
    };
  },
  mounted: function mounted() {
    var that = this;
    Object(timers__WEBPACK_IMPORTED_MODULE_11__["setTimeout"])(function () {
      that.$refs.slider.refresh();
      that.$refs.sliderSingle.refresh();
    }, 500);
  },
  methods: {
    onAutoSuggestInputChange: function onAutoSuggestInputChange(text, oldText) {
      if (text === null) {
        /* Maybe the text is null but you wanna do
         *  something else, but don't filter by null.
         */
        return;
      }

      var filteredData = this.suggestions[0].data.filter(function (option) {
        return option.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      }); // Store data in one property, and filtered in another

      this.filteredOptions = [{
        data: filteredData
      }];
    },
    onAutosuggestSelected: function onAutosuggestSelected(item) {
      this.vueAutosuggestForm.selected = item;
    },
    renderSuggestion: function renderSuggestion(suggestion) {
      var character = suggestion.item;
      return character.name;
      /* renderSuggestion will override the default suggestion template slot. */
    },
    getSuggestionValue: function getSuggestionValue(suggestion) {
      return suggestion.item.name;
    },
    dropzoneTemplate: function dropzoneTemplate() {
      return "<div class=\"dz-preview dz-file-preview mb-3\">\n                  <div class=\"d-flex flex-row \"> <div class=\"p-0 w-30 position-relative\">\n                      <div class=\"dz-error-mark\"><span><i></i>  </span></div>\n                      <div class=\"dz-success-mark\"><span><i></i></span></div>\n                      <div class=\"preview-container\">\n                        <img data-dz-thumbnail class=\"img-thumbnail border-0\" />\n                        <i class=\"simple-icon-doc preview-icon\"></i>\n                      </div>\n                  </div>\n                  <div class=\"pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative\">\n                    <div> <span data-dz-name /> </div>\n                    <div class=\"text-primary text-extra-small\" data-dz-size /> </div>\n                    <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n                    <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n                  </div>\n                  <a href=\"#\" class=\"remove\" data-dz-remove> <i class=\"glyph-icon simple-icon-trash\"></i> </a>\n                </div>\n        ";
    },
    fetchOptions: function fetchOptions(search, loading) {
      var _this = this;

      loading(true);
      Object(timers__WEBPACK_IMPORTED_MODULE_11__["setTimeout"])(function () {
        fetch("https://api.github.com/search/repositories?q=".concat(escape(search))).then(function (res) {
          res.json().then(function (json) {
            return _this.vueSelectOptions = json.items;
          });
          loading(false);
        });
      }, 1000);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Forms.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Forms.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Form_InputTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Form/InputTag */ "./resources/src/components/Form/InputTag.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_3__);
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





var _require = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js"),
    required = _require.required;

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    InputTag: _components_Form_InputTag__WEBPACK_IMPORTED_MODULE_0__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      name: '',
      age: 0,
      basicForm: {
        email: '',
        password: '',
        checked: false
      },
      horizontalForm: {
        email: '',
        password: '',
        radio: '',
        checked: false
      },
      topLabelsOverLineForm: {
        email: '',
        password: '',
        tags: [],
        date: null,
        select: '',
        checked: false
      },
      topLabelsInInputForm: {
        email: '',
        password: '',
        tags: [],
        date: null,
        select: '',
        checked: false
      },
      gridForm: {
        email: '',
        password: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      },
      inlineForm: {
        fullname: '',
        lastname: '',
        checked: false
      },
      validateForm: {
        firstname: 'John',
        lastname: 'Doe',
        state: '',
        city: ''
      },
      horizontalFormRadios: [this.$t('forms.first-radio'), this.$t('forms.second-radio'), {
        text: this.$t('forms.third-radio-disabled'),
        disabled: true
      }],
      selectData: [{
        label: 'Chocolate',
        value: 'chocolate'
      }, {
        label: 'Vanilla',
        value: 'vanilla'
      }, {
        label: 'Strawberry',
        value: 'strawberry'
      }, {
        label: 'Caramel',
        value: 'caramel'
      }, {
        label: 'Cookies and Cream',
        value: 'cookiescream'
      }, {
        label: 'Peppermint',
        value: 'peppermint'
      }],
      stateOptions: ['', 'Option1', 'Option2', 'Option3', 'Option4', 'Option5']
    };
  },
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_3__["validationMixin"]],
  validations: {
    validateForm: {
      firstname: {
        required: required
      },
      lastname: {
        required: required
      },
      city: {
        required: required
      },
      state: {
        required: required
      }
    }
  },
  methods: {
    onBasicSubmit: function onBasicSubmit() {
      console.log(JSON.stringify(this.basicForm));
    },
    onHorizontalSubmit: function onHorizontalSubmit() {
      console.log(JSON.stringify(this.horizontalForm));
    },
    onTopLabelsOverLineFormSubmit: function onTopLabelsOverLineFormSubmit() {
      console.log(JSON.stringify(this.topLabelsOverLineForm));
    },
    onTopLabelsInInputFormSubmit: function onTopLabelsInInputFormSubmit() {
      console.log(JSON.stringify(this.topLabelsInInputForm));
    },
    onGridFormSubmit: function onGridFormSubmit() {
      console.log(JSON.stringify(this.gridForm));
    },
    onInlineSubmit: function onInlineSubmit() {
      console.log(JSON.stringify(this.inlineForm));
    },
    onValitadeFormSubmit: function onValitadeFormSubmit() {
      console.log(JSON.stringify(this.validateForm));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Icons.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Icons.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/icons */ "./resources/src/data/icons.js");
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
  data: function data() {
    return {
      simplelineicons: _data_icons__WEBPACK_IMPORTED_MODULE_0__["simplelineicons"],
      iconsmind: _data_icons__WEBPACK_IMPORTED_MODULE_0__["iconsmind"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/InputGroups.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/InputGroups.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      textarea: '',
      file: ''
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Maps.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Maps.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-google-maps */ "./node_modules/vue2-google-maps/dist/main.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_yandex_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-yandex-maps */ "./node_modules/vue-yandex-maps/dist/vue-yandex-maps.js");
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
//
//



var yandexOptions = {
  apiKey: '',
  // '' by default
  lang: 'en-US',
  // 'ru_RU' by default
  version: '2.1' // '2.1' by default

};
var googleOptions = {
  load: {
    key: 'AIzaSyCO8MfadmlotuuHC8wmjwL_46I5QAMIiRU',
    libraries: 'geometry,drawing,places',
    v: '3.exp'
  }
};
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_yandex_maps__WEBPACK_IMPORTED_MODULE_2__["default"], yandexOptions);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue2_google_maps__WEBPACK_IMPORTED_MODULE_1__, googleOptions);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      markers: [{
        position: {
          lat: -34.397,
          lng: 150.644
        }
      }],
      yandexCoords: [-34.397, 150.644],
      placemarks: [{
        coords: [-34.397, 150.644],
        properties: {},
        // define properties here
        options: {},
        // define options here
        clusterName: '1',
        balloonTemplate: '<div>"Your custom template"</div>',
        callbacks: {
          click: function click() {}
        }
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Modal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Modal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      selectedBackdrop: 'true',
      backdropOptions: ['true', 'false', 'static']
    };
  },
  methods: {
    hideModal: function hideModal(refname) {
      this.$refs[refname].hide();
      console.log('hide modal:: ' + refname);

      if (refname === 'modalnestedinline') {
        this.$refs['modalnested'].show();
      }
    },
    somethingModal: function somethingModal(refname) {
      this.$refs[refname].hide();
      console.log('something modal:: ' + refname);

      if (refname === 'modalnestedinline') {
        this.$refs['modalnested'].show();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Navigation.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Navigation.vue?vue&type=script&lang=js& ***!
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
  data: function data() {
    return {
      currentPage: 1,
      breadcrumbItems: [{
        text: 'Home',
        href: '#'
      }, {
        text: 'Library',
        href: '#'
      }, {
        text: 'Data',
        href: '#'
      }]
    };
  },
  methods: {
    linkGen: function linkGen(pageNum) {
      return '#page/' + pageNum + '/foobar';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/PopoverTooltip.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/PopoverTooltip.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__);

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
  data: function data() {
    return {
      popovers: [{
        placement: 'top',
        text: 'Popover on top',
        body: 'Augue laoreet rutrum faucibus vivamus sagittis lacus vel .'
      }, {
        placement: 'bottom',
        text: 'Popover on bottom',
        body: 'Vel augue laoreet rutrum Vivamus sagittis lacus faucibus.'
      }, {
        placement: 'left',
        text: 'Popover on left',
        body: 'Lacus vel augue Vivamus sagittis laoreet rutrum faucibus.'
      }, {
        placement: 'right',
        text: 'Popover on right',
        body: 'Laoreet rutrum faucibus vivamus sagittis lacus vel augue.'
      }],
      tooltips: [{
        placement: 'top',
        text: 'Tooltip on top',
        body: 'Vivamus sagittis lacus'
      }, {
        placement: 'bottom',
        text: 'Tooltip on bottom',
        body: 'Lacus vel augue'
      }, {
        placement: 'left',
        text: 'Tooltip on left',
        body: 'Laoreet rutrum faucibus'
      }, {
        placement: 'right',
        text: 'Tooltip on right',
        body: 'Augue rutrum vel'
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    /* popover manuel close */
    this.$root.$on('bv::popover::show', function () {
      _this.$root.$emit('bv::hide::popover');
    });
    document.addEventListener('click', function (e) {
      if (e.target.id.indexOf('pop') === -1) {
        _this.$root.$emit('bv::hide::popover');
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Sortable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Sortable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Cards_IconCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Cards/IconCard */ "./resources/src/components/Cards/IconCard.vue");
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
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_0___default.a,
    IconCard: _components_Cards_IconCard__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Tables.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Tables.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/config */ "./resources/src/constants/config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuetable_2_src_components_Vuetable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetable-2/src/components/Vuetable */ "./node_modules/vuetable-2/src/components/Vuetable.vue");
/* harmony import */ var _components_Common_VuetablePaginationBootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Common/VuetablePaginationBootstrap */ "./resources/src/components/Common/VuetablePaginationBootstrap.vue");

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
  components: {
    Vuetable: vuetable_2_src_components_Vuetable__WEBPACK_IMPORTED_MODULE_3__["default"],
    VuetablePaginationBootstrap: _components_Common_VuetablePaginationBootstrap__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      items: [{
        id: 1,
        first_name: 'Mark',
        last_name: 'Otto',
        username: '@mdo'
      }, {
        id: 2,
        first_name: 'Jacob',
        last_name: 'Thornton',
        username: '@fat'
      }, {
        id: 3,
        first_name: 'Lary',
        last_name: 'the Bird',
        username: '@twitter'
      }],
      vuetableItems: {
        apiUrl: _constants_config__WEBPACK_IMPORTED_MODULE_1__["apiUrl"] + '/cakes/fordatatable',
        fields: [{
          name: 'title',
          sortField: 'title',
          title: 'Name',
          titleClass: '',
          dataClass: 'list-item-heading'
        }, {
          name: 'sales',
          sortField: 'sales',
          title: 'Sales',
          titleClass: '',
          dataClass: 'text-muted'
        }, {
          name: 'stock',
          sortField: 'stock',
          title: 'Stock',
          titleClass: '',
          dataClass: 'text-muted'
        }, {
          name: 'category',
          sortField: 'category',
          title: 'Category',
          titleClass: '',
          dataClass: 'text-muted'
        }]
      },
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      bootstrapTable: {
        selected: [],
        selectMode: 'multi',
        fields: [{
          key: 'title',
          label: 'Title',
          sortable: true,
          sortDirection: 'desc',
          tdClass: 'list-item-heading'
        }, {
          key: 'sales',
          label: 'Sales',
          sortable: true,
          tdClass: 'text-muted'
        }, {
          key: 'stock',
          label: 'Stock',
          sortable: true,
          tdClass: 'text-muted'
        }, {
          key: 'category',
          label: 'Category',
          sortable: true,
          tdClass: 'text-muted'
        }, {
          key: 'status',
          label: 'Status',
          sortable: true,
          tdClass: 'text-muted'
        }]
      }
    };
  },
  methods: {
    onPaginationData: function onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage: function onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    rowSelected: function rowSelected(items) {
      this.bootstrapTable.selected = items;
    },
    dataProvider: function dataProvider(ctx) {
      var _this = this;

      var params = this.apiParamsConverter(ctx);
      var promise = axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_constants_config__WEBPACK_IMPORTED_MODULE_1__["apiUrl"] + '/cakes/fordatatable', {
        params: params
      });
      return promise.then(function (result) {
        return result.data;
      }).then(function (data) {
        _this.currentPage = data.current_page;
        _this.perPage = data.per_page;
        _this.totalRows = data.total;
        var items = data.data;
        return items;
      })["catch"](function (_error) {
        return [];
      });
    },
    apiParamsConverter: function apiParamsConverter(params) {
      var apiParams = {};

      if (params.perPage !== 0) {
        apiParams.per_page = params.perPage;
      }

      if (params.currentPage >= 1) {
        apiParams.page = params.currentPage;
      }

      if (params.sortBy.length > 0) {
        apiParams.sort = "".concat(params.sortBy, "|").concat(params.sortDesc ? 'desc' : 'asc');
      }

      if (params.filter.length > 0) {// Optional
      }

      return apiParams;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Form/InputTag.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Form/InputTag.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vue-tagsinput {\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  overflow: hidden;\r\n  padding-left: 5px;\r\n  padding-top: 5px;\n}\n.vue-tagsinput--focused {\r\n  border-color: #a5d24a;\n}\n.vue-tagsinput-tag {\r\n  background-color: #cde69c;\r\n  border-radius: 2px;\r\n  border: 1px solid #a5d24a;\r\n  color: #638421;\r\n  display: inline-block;\r\n  font-family: sans-serif;\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n  margin-bottom: 5px;\r\n  margin-right: 5px;\r\n  padding: 5px;\n}\n.vue-tagsinput-remove {\r\n  cursor: pointer;\r\n  font-weight: bold;\n}\n.vue-tagsinput-tag a::before {\r\n  content: \" \\D7\";\n}\n.vue-tagsinput-input {\r\n  background: transparent;\r\n  border: 0;\r\n  color: #777;\r\n  font-family: sans-serif;\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n  margin-bottom: 6px;\r\n  margin-top: 1px;\r\n  outline: none;\r\n  padding: 5px;\r\n  width: 80px;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Form/InputTag.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Form/InputTag.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputTag.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Form/InputTag.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Common/StateButton.vue?vue&type=template&id=9f0fe2b6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Common/StateButton.vue?vue&type=template&id=9f0fe2b6& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "span",
    [
      _c(
        "b-button",
        {
          class: {
            "btn-multiple-state": true,
            "show-spinner": _vm.status === "processing",
            "show-success": _vm.status === "success",
            "show-fail": _vm.status === "fail"
          },
          attrs: {
            id: _vm.id,
            variant: _vm.variant,
            disabled: _vm.status != "default"
          },
          on: { click: _vm.handleClick }
        },
        [
          _c(
            "b-tooltip",
            {
              ref: "statusTooltip",
              attrs: { show: _vm.messageShow, target: _vm.id, placement: "top" }
            },
            [_vm._v(_vm._s(_vm.message))]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "spinner d-inline-block" }, [
            _c("span", { staticClass: "bounce1" }),
            _vm._v(" "),
            _c("span", { staticClass: "bounce2" }),
            _vm._v(" "),
            _c("span", { staticClass: "bounce3" })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "icon success" }, [
            _c("i", { staticClass: "simple-icon-check" })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "icon fail" }, [
            _c("i", { staticClass: "simple-icon-exclamation" })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "label" }, [_vm._t("default")], 2)
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Form/InputTag.vue?vue&type=template&id=797b2bb6&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Form/InputTag.vue?vue&type=template&id=797b2bb6& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "vue-tagsinput",
      class: {
        "read-only": _vm.readOnly,
        "vue-tagsinput--focused": _vm.isInputActive
      },
      on: {
        click: function($event) {
          return _vm.focusNewTag()
        }
      }
    },
    [
      _vm._l(_vm.innerTags, function(tag, index) {
        return _c("span", { key: index, staticClass: "vue-tagsinput-tag" }, [
          _c("span", [_vm._v(_vm._s(tag))]),
          _vm._v(" "),
          !_vm.readOnly
            ? _c("a", {
                staticClass: "vue-tagsinput-remove",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    $event.stopPropagation()
                    return _vm.remove(index)
                  }
                }
              })
            : _vm._e()
        ])
      }),
      _vm._v(" "),
      !_vm.readOnly && !_vm.isLimit
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newTag,
                expression: "newTag"
              }
            ],
            ref: "inputtag",
            staticClass: "vue-tagsinput-input",
            attrs: { placeholder: _vm.placeholder, type: "text" },
            domProps: { value: _vm.newTag },
            on: {
              keydown: [
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                      "Backspace",
                      "Delete",
                      "Del"
                    ])
                  ) {
                    return null
                  }
                  $event.stopPropagation()
                  return _vm.removeLastTag($event)
                },
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.addNew($event)
                }
              ],
              blur: _vm.handleInputBlur,
              focus: _vm.handleInputFocus,
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.newTag = $event.target.value
              }
            }
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Alerts.vue?vue&type=template&id=d70a05e0&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Alerts.vue?vue&type=template&id=d70a05e0& ***!
  \************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.alerts") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("alert.react-notifications") }
                },
                [
                  _c("h6", { staticClass: "card-subtitle" }, [
                    _vm._v(_vm._s(_vm.$t("alert.outline")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-3",
                      attrs: { variant: "outline-primary" },
                      on: {
                        click: function($event) {
                          return _vm.addNotification("primary")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.primary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-3",
                      attrs: { variant: "outline-secondary" },
                      on: {
                        click: function($event) {
                          return _vm.addNotification("secondary")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.secondary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-3",
                      attrs: { variant: "outline-info" },
                      on: {
                        click: function($event) {
                          return _vm.addNotification("info")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.info")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-3",
                      attrs: { variant: "outline-success" },
                      on: {
                        click: function($event) {
                          return _vm.addNotification("success")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.success")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-3",
                      attrs: { variant: "outline-warning" },
                      on: {
                        click: function($event) {
                          return _vm.addNotification("warning")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.warning")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-3",
                      attrs: { variant: "outline-danger" },
                      on: {
                        click: function($event) {
                          return _vm.addNotification("error")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.error")))]
                  ),
                  _vm._v(" "),
                  _c("h6", { staticClass: "card-subtitle" }, [
                    _vm._v(_vm._s(_vm.$t("alert.filled")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-3",
                      attrs: { variant: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.addNotification("primary filled")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.primary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-3",
                      attrs: { variant: "secondary" },
                      on: {
                        click: function($event) {
                          return _vm.addNotification("secondary filled")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.secondary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-3",
                      attrs: { variant: "info" },
                      on: {
                        click: function($event) {
                          return _vm.addNotification("info filled")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.info")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-3",
                      attrs: { variant: "success" },
                      on: {
                        click: function($event) {
                          return _vm.addNotification("success filled")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.success")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-3",
                      attrs: { variant: "warning" },
                      on: {
                        click: function($event) {
                          return _vm.addNotification("warning filled")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.warning")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-3",
                      attrs: { variant: "danger" },
                      on: {
                        click: function($event) {
                          return _vm.addNotification("error filled")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.error")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("alert.rounded") }
                },
                [
                  _c(
                    "b-alert",
                    {
                      staticClass: "rounded",
                      attrs: { show: "", variant: "primary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.primary-text")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      staticClass: "rounded",
                      attrs: { show: "", variant: "secondary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.secondary-text")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      staticClass: "rounded",
                      attrs: { show: "", variant: "success" }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.success-text")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      staticClass: "rounded",
                      attrs: { show: "", variant: "danger" }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.danger-text")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      staticClass: "rounded",
                      attrs: { show: "", variant: "warning" }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.warning-text")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      staticClass: "rounded",
                      attrs: { show: "", variant: "info" }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.info-text")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      staticClass: "rounded",
                      attrs: { show: "", variant: "light" }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.light-text")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      staticClass: "rounded",
                      attrs: { show: "", variant: "dark" }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.dark-text")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("alert.default") }
                },
                [
                  _c("b-alert", { attrs: { show: "", variant: "primary" } }, [
                    _vm._v(_vm._s(_vm.$t("alert.primary-text")))
                  ]),
                  _vm._v(" "),
                  _c("b-alert", { attrs: { show: "", variant: "secondary" } }, [
                    _vm._v(_vm._s(_vm.$t("alert.secondary-text")))
                  ]),
                  _vm._v(" "),
                  _c("b-alert", { attrs: { show: "", variant: "success" } }, [
                    _vm._v(_vm._s(_vm.$t("alert.success-text")))
                  ]),
                  _vm._v(" "),
                  _c("b-alert", { attrs: { show: "", variant: "danger" } }, [
                    _vm._v(_vm._s(_vm.$t("alert.danger-text")))
                  ]),
                  _vm._v(" "),
                  _c("b-alert", { attrs: { show: "", variant: "warning" } }, [
                    _vm._v(_vm._s(_vm.$t("alert.warning-text")))
                  ]),
                  _vm._v(" "),
                  _c("b-alert", { attrs: { show: "", variant: "info" } }, [
                    _vm._v(_vm._s(_vm.$t("alert.info-text")))
                  ]),
                  _vm._v(" "),
                  _c("b-alert", { attrs: { show: "", variant: "light" } }, [
                    _vm._v(_vm._s(_vm.$t("alert.light-text")))
                  ]),
                  _vm._v(" "),
                  _c("b-alert", { attrs: { show: "", variant: "dark" } }, [
                    _vm._v(_vm._s(_vm.$t("alert.dark-text")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("alert.default") }
                },
                [
                  _c(
                    "b-alert",
                    {
                      staticClass: "rounded",
                      attrs: {
                        variant: "warning",
                        fade: "",
                        show: "",
                        dismissible: ""
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("alert.dismissing-text")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      attrs: { variant: "warning", show: "", dismissible: "" }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("alert.dismissing-without-animate-text"))
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Badges.vue?vue&type=template&id=62753f29&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Badges.vue?vue&type=template&id=62753f29& ***!
  \************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.badges") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("badge.sizes") }
                },
                [
                  _c(
                    "h1",
                    [
                      _vm._v("Example Heading "),
                      _c("b-badge", { attrs: { variant: "secondary" } }, [
                        _vm._v("New")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "h2",
                    [
                      _vm._v("Example Heading "),
                      _c("b-badge", { attrs: { variant: "secondary" } }, [
                        _vm._v("New")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "h3",
                    [
                      _vm._v("Example Heading "),
                      _c("b-badge", { attrs: { variant: "secondary" } }, [
                        _vm._v("New")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "h4",
                    [
                      _vm._v("Example Heading "),
                      _c("b-badge", { attrs: { variant: "secondary" } }, [
                        _vm._v("New")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "h5",
                    [
                      _vm._v("Example Heading "),
                      _c("b-badge", { attrs: { variant: "secondary" } }, [
                        _vm._v("New")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "h6",
                    [
                      _vm._v("Example Heading "),
                      _c("b-badge", { attrs: { variant: "secondary" } }, [
                        _vm._v("New")
                      ])
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("badge.colors") }
                },
                [
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "primary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.primary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "secondary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.secondary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "success" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.success")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "danger" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.danger")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "warning" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.warning")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "info" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.info")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "light" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.light")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "dark" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.dark")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("badge.outline") }
                },
                [
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "outline-primary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.primary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "outline-secondary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.secondary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "outline-success" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.success")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "outline-danger" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.danger")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "outline-warning" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.warning")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "outline-info" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.info")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "outline-light" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.light")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { pill: "", variant: "outline-dark" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.dark")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("badge.links") }
                },
                [
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { href: "#", variant: "primary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.primary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { href: "#", variant: "secondary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.secondary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { href: "#", variant: "success" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.success")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { href: "#", variant: "danger" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.danger")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { href: "#", variant: "warning" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.warning")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { href: "#", variant: "info" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.info")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { href: "#", variant: "light" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.light")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    {
                      staticClass: "mb-1",
                      attrs: { href: "#", variant: "dark" }
                    },
                    [_vm._v(_vm._s(_vm.$t("badge.dark")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("badge.counter-badges") }
                },
                [
                  _c(
                    "b-button",
                    { attrs: { variant: "primary" } },
                    [
                      _vm._v("\r\n            Notifications "),
                      _c("b-badge", { attrs: { variant: "light" } }, [
                        _vm._v("4")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { attrs: { variant: "outline-primary" } },
                    [
                      _vm._v("\r\n            Notifications "),
                      _c("b-badge", { attrs: { variant: "secondary" } }, [
                        _vm._v("4")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("badge.bootstrap-default") }
                },
                [
                  _c(
                    "b-badge",
                    { staticClass: "mb-1", attrs: { variant: "primary" } },
                    [_vm._v(_vm._s(_vm.$t("badge.primary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    { staticClass: "mb-1", attrs: { variant: "secondary" } },
                    [_vm._v(_vm._s(_vm.$t("badge.secondary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    { staticClass: "mb-1", attrs: { variant: "success" } },
                    [_vm._v(_vm._s(_vm.$t("badge.success")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    { staticClass: "mb-1", attrs: { variant: "danger" } },
                    [_vm._v(_vm._s(_vm.$t("badge.danger")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    { staticClass: "mb-1", attrs: { variant: "warning" } },
                    [_vm._v(_vm._s(_vm.$t("badge.warning")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    { staticClass: "mb-1", attrs: { variant: "info" } },
                    [_vm._v(_vm._s(_vm.$t("badge.info")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    { staticClass: "mb-1", attrs: { variant: "light" } },
                    [_vm._v(_vm._s(_vm.$t("badge.light")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-badge",
                    { staticClass: "mb-1", attrs: { variant: "dark" } },
                    [_vm._v(_vm._s(_vm.$t("badge.dark")))]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Buttons.vue?vue&type=template&id=ce712b50&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Buttons.vue?vue&type=template&id=ce712b50& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.buttons") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("button.rounded") }
                },
                [
                  _c(
                    "b-button",
                    { staticClass: "mb-1", attrs: { variant: "primary" } },
                    [_vm._v(_vm._s(_vm.$t("button.primary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { staticClass: "mb-1", attrs: { variant: "secondary" } },
                    [_vm._v(_vm._s(_vm.$t("button.secondary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { staticClass: "mb-1", attrs: { variant: "success" } },
                    [_vm._v(_vm._s(_vm.$t("button.success")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { staticClass: "mb-1", attrs: { variant: "danger" } },
                    [_vm._v(_vm._s(_vm.$t("button.danger")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { staticClass: "mb-1", attrs: { variant: "warning" } },
                    [_vm._v(_vm._s(_vm.$t("button.warning")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { staticClass: "mb-1", attrs: { variant: "info" } },
                    [_vm._v(_vm._s(_vm.$t("button.info")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { staticClass: "mb-1", attrs: { variant: "light" } },
                    [_vm._v(_vm._s(_vm.$t("button.light")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { staticClass: "mb-1", attrs: { variant: "dark" } },
                    [_vm._v(_vm._s(_vm.$t("button.dark")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("button.outline") }
                },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-1",
                      attrs: { variant: "outline-primary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("button.primary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-1",
                      attrs: { variant: "outline-secondary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("button.secondary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-1",
                      attrs: { variant: "outline-success" }
                    },
                    [_vm._v(_vm._s(_vm.$t("button.success")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-1",
                      attrs: { variant: "outline-danger" }
                    },
                    [_vm._v(_vm._s(_vm.$t("button.danger")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-1",
                      attrs: { variant: "outline-warning" }
                    },
                    [_vm._v(_vm._s(_vm.$t("button.warning")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { staticClass: "mb-1", attrs: { variant: "outline-info" } },
                    [_vm._v(_vm._s(_vm.$t("button.info")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-1",
                      attrs: { variant: "outline-light" }
                    },
                    [_vm._v(_vm._s(_vm.$t("button.light")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { staticClass: "mb-1", attrs: { variant: "outline-dark" } },
                    [_vm._v(_vm._s(_vm.$t("button.dark")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("button.states") }
                },
                [
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c("p", { staticClass: "mb-1" }, [
                        _vm._v(_vm._s(_vm.$t("button.states-text")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "state-button",
                        {
                          staticClass: "mb-3",
                          attrs: {
                            id: "successButton",
                            variant: "primary",
                            click: _vm.successButtonClick
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.click-here")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c("p", { staticClass: "mb-1" }, [
                        _vm._v(_vm._s(_vm.$t("button.states-text-alternate")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "state-button",
                        {
                          staticClass: "mb-3",
                          attrs: {
                            id: "failButton",
                            variant: "secondary",
                            click: _vm.failButtonClick
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.click-here")))]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("button.sizes") }
                },
                [
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c("h6", { staticClass: "mb-2" }, [
                        _vm._v(_vm._s(_vm.$t("button.large-button")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-2",
                          attrs: { size: "lg", variant: "primary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.large-button")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-2",
                          attrs: { size: "lg", variant: "secondary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.large-button")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c("h6", { staticClass: "mb-2" }, [
                        _vm._v(_vm._s(_vm.$t("button.small-button")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-2",
                          attrs: { size: "sm", variant: "primary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.small-button")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-2",
                          attrs: { size: "sm", variant: "secondary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.small-button")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c("h6", { staticClass: "mb-2" }, [
                        _vm._v(_vm._s(_vm.$t("button.extra-small-button")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-2",
                          attrs: { size: "xs", variant: "primary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.extra-small-button")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-2",
                          attrs: { size: "xs", variant: "secondary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.extra-small-button")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c("h6", { staticClass: "mb-2" }, [
                        _vm._v(_vm._s(_vm.$t("button.block-button")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-2",
                          attrs: { block: "", variant: "primary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.block-button")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-2",
                          attrs: { block: "", variant: "secondary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.block-button")))]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("button.states") }
                },
                [
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c("h6", { staticClass: "mb-2" }, [
                        _vm._v(_vm._s(_vm.$t("button.active")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-2",
                          attrs: { href: "#", variant: "primary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.primary-link")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-2",
                          attrs: { href: "#", variant: "secondary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.link")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c("h6", { staticClass: "mb-2" }, [
                        _vm._v(_vm._s(_vm.$t("button.disabled")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-2",
                          attrs: { disabled: "", variant: "primary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.primary-button")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-2",
                          attrs: { disabled: "", variant: "secondary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.button")))]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("button.button-groups") }
                },
                [
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c("h6", { staticClass: "mb-2" }, [
                        _vm._v(_vm._s(_vm.$t("button.basic")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "mb-2" },
                        [
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v(_vm._s(_vm.$t("button.left")))
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v(_vm._s(_vm.$t("button.middle")))
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v(_vm._s(_vm.$t("button.right")))
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c("h6", { staticClass: "mb-2 mr-1" }, [
                        _vm._v(_vm._s(_vm.$t("button.toolbar")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "mb-2" },
                        [
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("1")
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("2")
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("3")
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("4")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "mb-2" },
                        [
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("5")
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("6")
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("7")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "mb-2" },
                        [
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("8")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c("h6", { staticClass: "mb-2 mr-1" }, [
                        _vm._v(_vm._s(_vm.$t("button.sizes")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "mb-2", attrs: { size: "lg" } },
                        [
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("1")
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("2")
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("3")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "mb-2" },
                        [
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("1")
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("2")
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("3")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "mb-2", attrs: { size: "sm" } },
                        [
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("1")
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("2")
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("3")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("button.nesting") }
                },
                [
                  _c("h6", { staticClass: "mb-2" }, [
                    _vm._v(_vm._s(_vm.$t("button.basic")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mb-2" },
                    [
                      _c("b-button", { attrs: { variant: "secondary" } }, [
                        _vm._v("1")
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "secondary" } }, [
                        _vm._v("2")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            variant: "secondary",
                            right: "",
                            text: _vm.$t("button.dropdown")
                          }
                        },
                        [
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("button.dropdown-link")))
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("button.dropdown-link")))
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("button.vertical-variation") }
                },
                [
                  _c("h6", { staticClass: "mb-2" }, [
                    _vm._v(_vm._s(_vm.$t("button.basic")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mb-2", attrs: { vertical: "" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "secondary default" } },
                        [_vm._v("1")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { variant: "secondary default" } },
                        [_vm._v("2")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            variant: "secondary default",
                            right: "",
                            text: _vm.$t("button.dropdown")
                          }
                        },
                        [
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("button.dropdown-link")))
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("button.dropdown-link")))
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("button.checkbox-radio-button") }
                },
                [
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c("h6", { staticClass: "mb-2" }, [
                        _vm._v(_vm._s(_vm.$t("button.checkbox")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            variant: "primary",
                            pressed: _vm.checkedCheckboxes.indexOf(1) !== -1
                          },
                          on: {
                            click: function($event) {
                              return _vm.checkButtonCheck(1)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.checkbox")))]
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            variant: "outline-primary",
                            pressed: _vm.checkedCheckboxes.indexOf(2) !== -1
                          },
                          on: {
                            click: function($event) {
                              return _vm.checkButtonCheck(2)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("button.checkbox")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c("h6", { staticClass: "mb-2 mr-1" }, [
                        _vm._v(_vm._s(_vm.$t("button.radio-button")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "mb-2" },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "primary",
                                pressed: _vm.selectedRadio == 1
                              },
                              on: {
                                click: function($event) {
                                  _vm.selectedRadio = 1
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("button.radio")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "primary",
                                pressed: _vm.selectedRadio == 2
                              },
                              on: {
                                click: function($event) {
                                  _vm.selectedRadio = 2
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("button.radio")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "primary",
                                pressed: _vm.selectedRadio == 3
                              },
                              on: {
                                click: function($event) {
                                  _vm.selectedRadio = 3
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("button.radio")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("button.outline") }
                },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-1",
                      attrs: { variant: "primary default" }
                    },
                    [_vm._v(_vm._s(_vm.$t("button.primary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-1",
                      attrs: { variant: "secondary default" }
                    },
                    [_vm._v(_vm._s(_vm.$t("button.secondary")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-1",
                      attrs: { variant: "success default" }
                    },
                    [_vm._v(_vm._s(_vm.$t("button.success")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-1",
                      attrs: { variant: "danger default" }
                    },
                    [_vm._v(_vm._s(_vm.$t("button.danger")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-1",
                      attrs: { variant: "warning default" }
                    },
                    [_vm._v(_vm._s(_vm.$t("button.warning")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { staticClass: "mb-1", attrs: { variant: "info default" } },
                    [_vm._v(_vm._s(_vm.$t("button.info")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-1",
                      attrs: { variant: "light default" }
                    },
                    [_vm._v(_vm._s(_vm.$t("button.light")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { staticClass: "mb-1", attrs: { variant: "dark default" } },
                    [_vm._v(_vm._s(_vm.$t("button.dark")))]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Cards.vue?vue&type=template&id=4aac160c&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Cards.vue?vue&type=template&id=4aac160c& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.cards") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("h5", { staticClass: "mb-4 card-title" }, [
                _vm._v(_vm._s(_vm.$t("cards.icon-card")))
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "icon-cards-row mb-3" },
                [
                  _c(
                    "b-colxx",
                    { attrs: { xxs: "6", sm: "4", md: "3", lg: "2" } },
                    [
                      _c("icon-card", {
                        attrs: {
                          title: _vm.$t("dashboards.pending-orders"),
                          icon: "iconsminds-clock",
                          value: 14
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { attrs: { xxs: "6", sm: "4", md: "3", lg: "2" } },
                    [
                      _c("icon-card", {
                        attrs: {
                          title: _vm.$t("dashboards.completed-orders"),
                          icon: "iconsminds-basket-coins",
                          value: 32
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { attrs: { xxs: "6", sm: "4", md: "3", lg: "2" } },
                    [
                      _c("icon-card", {
                        attrs: {
                          title: _vm.$t("dashboards.refund-requests"),
                          icon: "iconsminds-arrow-refresh",
                          value: 74
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { attrs: { xxs: "6", sm: "4", md: "3", lg: "2" } },
                    [
                      _c("icon-card", {
                        attrs: {
                          title: _vm.$t("dashboards.new-comments"),
                          icon: "iconsminds-mail-read",
                          value: 25
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("h5", { staticClass: "mb-4 card-title" }, [
                _vm._v(_vm._s(_vm.$t("cards.image-card")))
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-colxx",
                    { attrs: { xxs: "12", xs: "6", lg: "4" } },
                    [
                      _c(
                        "b-card",
                        { staticClass: "mb-4", attrs: { "no-body": "" } },
                        [
                          _c(
                            "div",
                            { staticClass: "position-relative" },
                            [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: { src: "/assets/img/card-thumb-1.jpg" }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-badge",
                                {
                                  staticClass:
                                    "position-absolute badge-top-left",
                                  attrs: { variant: "primary", pill: "" }
                                },
                                [_vm._v("NEW")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-badge",
                                {
                                  staticClass:
                                    "position-absolute badge-top-left-2",
                                  attrs: { variant: "secondary", pill: "" }
                                },
                                [_vm._v("TRENDING")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-card-body", [
                            _c("h6", { staticClass: "mb-4 card-subtitle" }, [
                              _vm._v(
                                "Homemade Cheesecake with Fresh Berries and Mint"
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass:
                                  "card-text text-muted text-small mb-0 font-weight-light"
                              },
                              [_vm._v("09.04.2018")]
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    {
                      staticClass: "mb-3",
                      attrs: { xxs: "12", xs: "6", lg: "4" }
                    },
                    [
                      _c(
                        "b-card",
                        { staticClass: "mb-4", attrs: { "no-body": "" } },
                        [
                          _c("b-card-body", [
                            _c("h6", { staticClass: "mb-4 card-subtitle" }, [
                              _vm._v(
                                "Homemade Cheesecake with Fresh Berries and Mint"
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass:
                                  "card-text text-muted text-small mb-0 font-weight-light"
                              },
                              [_vm._v("09.04.2018")]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "position-relative" },
                            [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: { src: "/assets/img/card-thumb-1.jpg" }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-badge",
                                {
                                  staticClass:
                                    "position-absolute badge-top-left",
                                  attrs: { variant: "primary", pill: "" }
                                },
                                [_vm._v("NEW")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-badge",
                                {
                                  staticClass:
                                    "position-absolute badge-top-left-2",
                                  attrs: { variant: "secondary", pill: "" }
                                },
                                [_vm._v("TRENDING")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("h5", { staticClass: "mb-4 card-title" }, [
                _vm._v(_vm._s(_vm.$t("cards.image-overlay-card")))
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-colxx",
                    {
                      staticClass: "mb-3",
                      attrs: { xxs: "12", xs: "6", lg: "3" }
                    },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-4 text-white",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c("img", {
                            staticClass: "card-img",
                            attrs: { src: "/assets/img/card-thumb-1.jpg" }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-img-overlay" }, [
                            _c("h5", { staticClass: "card-title" }, [
                              _vm._v("Fruitcake")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "card-text" }, [
                              _vm._v(
                                "This is a wider card with supporting text below as a natural lead-in to additional content."
                              )
                            ])
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("h5", { staticClass: "mb-4 card-title" }, [
                _vm._v(_vm._s(_vm.$t("cards.image-card-list")))
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-colxx",
                    { attrs: { xxs: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "d-flex flex-row mb-3",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "router-link",
                            { staticClass: "d-flex", attrs: { to: "?" } },
                            [
                              _c("img", {
                                staticClass:
                                  "list-thumbnail responsive border-0",
                                attrs: {
                                  alt: "Thumbnail",
                                  src: "/assets/img/chocolate-cake-thumb.jpg"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "pl-2 d-flex flex-grow-1 min-width-zero"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
                                },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "w-40 w-sm-100",
                                      attrs: { to: "?" }
                                    },
                                    [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "list-item-heading mb-1 truncate"
                                        },
                                        [_vm._v("Chocolate Cake")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "mb-1 text-muted text-small w-15 w-sm-100"
                                    },
                                    [_vm._v("Cakes")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "mb-1 text-muted text-small w-15 w-sm-100"
                                    },
                                    [_vm._v("09.04.2018")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "w-15 w-sm-100" },
                                    [
                                      _c(
                                        "b-badge",
                                        {
                                          attrs: {
                                            variant: "primary",
                                            pill: ""
                                          }
                                        },
                                        [_vm._v("PROCESSED")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "custom-control custom-checkbox pl-1 align-self-center pr-4"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-control custom-checkbox mb-0"
                                    },
                                    [
                                      _c(
                                        "b-form-checkbox-group",
                                        {
                                          attrs: {
                                            id: "checkboxes2",
                                            name: "flavour2",
                                            stacked: ""
                                          }
                                        },
                                        [
                                          _c("b-form-checkbox", {
                                            attrs: { value: "orange" }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { staticClass: "mb-3", attrs: { xxs: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "d-flex flex-row mb-4",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "router-link",
                            { staticClass: "d-flex", attrs: { to: "?" } },
                            [
                              _c("img", {
                                staticClass:
                                  "list-thumbnail responsive border-0",
                                attrs: {
                                  alt: "Thumbnail",
                                  src: "/assets/img/cheesecake-thumb.jpg"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "pl-2 d-flex flex-grow-1 min-width-zero"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
                                },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "w-40 w-sm-100",
                                      attrs: { to: "?" }
                                    },
                                    [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "list-item-heading mb-1 truncate"
                                        },
                                        [_vm._v("Cheesecake")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "mb-1 text-muted text-small w-15 w-sm-100"
                                    },
                                    [_vm._v("Cupcakes")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "mb-1 text-muted text-small w-15 w-sm-100"
                                    },
                                    [_vm._v("09.04.2018")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "w-15 w-sm-100" },
                                    [
                                      _c(
                                        "b-badge",
                                        {
                                          attrs: {
                                            variant: "secondary",
                                            pill: ""
                                          }
                                        },
                                        [_vm._v("ON HOLD")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "custom-control custom-checkbox pl-1 align-self-center pr-4"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-control custom-checkbox mb-0"
                                    },
                                    [
                                      _c(
                                        "b-form-checkbox-group",
                                        {
                                          attrs: {
                                            id: "checkboxes2",
                                            name: "flavour2",
                                            stacked: ""
                                          }
                                        },
                                        [
                                          _c("b-form-checkbox", {
                                            attrs: { value: "orange" }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("h5", { staticClass: "mb-4 card-title" }, [
                _vm._v(_vm._s(_vm.$t("cards.tab-card")))
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-colxx",
                    { attrs: { xxs: "12", xs: "6", lg: "6" } },
                    [
                      _c(
                        "b-card",
                        { staticClass: "mb-4", attrs: { "no-body": "" } },
                        [
                          _c(
                            "b-tabs",
                            { attrs: { card: "", "no-fade": "" } },
                            [
                              _c(
                                "b-tab",
                                { attrs: { title: "Tab 1", active: "" } },
                                [
                                  _c("h5", { staticClass: "mb-4 card-title" }, [
                                    _vm._v(
                                      "Homemade Cheesecake with Fresh Berries and Mint"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        variant: "outline-primary"
                                      }
                                    },
                                    [_vm._v("Edit")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tab",
                                { attrs: { title: "Tab 2" } },
                                [
                                  _c("h5", { staticClass: "mb-4 card-title" }, [
                                    _vm._v(
                                      "Wedding Cake with Flowers Macarons and Blueberries"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        variant: "outline-primary"
                                      }
                                    },
                                    [_vm._v("Edit")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tab",
                                { attrs: { title: "Tab 3" } },
                                [
                                  _c("h5", { staticClass: "mb-4 card-title" }, [
                                    _vm._v(
                                      "Cheesecake with Chocolate Cookies and Cream Biscuits"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        variant: "outline-primary"
                                      }
                                    },
                                    [_vm._v("Edit")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    {
                      staticClass: "mb-3",
                      attrs: { xxs: "12", xs: "6", lg: "6" }
                    },
                    [
                      _c(
                        "b-card",
                        { staticClass: "mb-4", attrs: { "no-body": "" } },
                        [
                          _c(
                            "b-tabs",
                            { attrs: { card: "", "no-fade": "" } },
                            [
                              _c(
                                "b-tab",
                                {
                                  attrs: {
                                    title: "Tab 1",
                                    active: "",
                                    "title-item-class": "w-50 text-center"
                                  }
                                },
                                [
                                  _c("h5", { staticClass: "mb-4 card-title" }, [
                                    _vm._v(
                                      "Homemade Cheesecake with Fresh Berries and Mint"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        variant: "outline-primary"
                                      }
                                    },
                                    [_vm._v("Edit")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tab",
                                {
                                  attrs: {
                                    title: "Tab 2",
                                    "title-item-class": "w-50 text-center"
                                  }
                                },
                                [
                                  _c("h5", { staticClass: "mb-4 card-title" }, [
                                    _vm._v(
                                      "Wedding Cake with Flowers Macarons and Blueberries"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        variant: "outline-primary"
                                      }
                                    },
                                    [_vm._v("Edit")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("h5", { staticClass: "mb-4 card-title" }, [
                _vm._v(_vm._s(_vm.$t("cards.user-card")))
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-colxx",
                    { attrs: { md: "6", sm: "6", lg: "4", xxs: "12" } },
                    [
                      _c(
                        "b-card",
                        { staticClass: "mb-4 text-center" },
                        [
                          _c("router-link", { attrs: { to: "?" } }, [
                            _c("img", {
                              staticClass:
                                "img-thumbnail list-thumbnail rounded-circle border-0 mb-4",
                              attrs: {
                                src: "/assets/img/profile-pic-l.jpg",
                                alt: "Card image cap"
                              }
                            }),
                            _vm._v(" "),
                            _c("h6", { staticClass: "mb-1 card-subtitle" }, [
                              _vm._v("Sarah Kortney")
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              { staticClass: "text-muted text-small mb-4" },
                              [_vm._v("Executive Director")]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { size: "sm", variant: "outline-primary" }
                            },
                            [_vm._v("Edit")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { attrs: { md: "6", sm: "6", lg: "4", xxs: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-4 d-flex flex-row",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "router-link",
                            { staticClass: "d-flex", attrs: { to: "?" } },
                            [
                              _c("img", {
                                staticClass:
                                  "img-thumbnail list-thumbnail  rounded-circle align-self-center m-4",
                                attrs: {
                                  src: "/assets/img/profile-pic-l.jpg",
                                  alt: "Card image cap"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: " d-flex flex-grow-1 min-width-zero"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    " pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "min-width-zero" },
                                    [
                                      _c(
                                        "router-link",
                                        { attrs: { to: "?" } },
                                        [
                                          _c(
                                            "h6",
                                            {
                                              staticClass:
                                                "mb-1 card-subtitle truncate"
                                            },
                                            [_vm._v("Sarah Kortney")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "text-muted text-small mb-2"
                                        },
                                        [_vm._v("Executive Director")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            size: "xs",
                                            variant: "outline-primary"
                                          }
                                        },
                                        [_vm._v("Edit")]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-4 d-flex flex-row",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "router-link",
                            { staticClass: "d-flex", attrs: { to: "?" } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "align-self-center list-thumbnail-letters rounded-circle m-4",
                                  attrs: {
                                    src: "/assets/img/profile-pic-l.jpg",
                                    alt: "Card image cap"
                                  }
                                },
                                [_vm._v("SK")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: " d-flex flex-grow-1 min-width-zero"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    " pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "min-width-zero" },
                                    [
                                      _c(
                                        "router-link",
                                        { attrs: { to: "?" } },
                                        [
                                          _c(
                                            "h6",
                                            {
                                              staticClass:
                                                "mb-1 card-subtitle truncate"
                                            },
                                            [_vm._v("Sarah Kortney")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "text-muted text-small mb-2"
                                        },
                                        [_vm._v("Executive Director")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            size: "xs",
                                            variant: "outline-primary"
                                          }
                                        },
                                        [_vm._v("Edit")]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { attrs: { md: "6", sm: "6", lg: "4", xxs: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-4 d-flex flex-row",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "router-link",
                            { staticClass: "d-flex", attrs: { to: "?" } },
                            [
                              _c("img", {
                                staticClass:
                                  "img-thumbnail list-thumbnail  rounded-circle align-self-center m-4 small",
                                attrs: {
                                  src: "/assets/img/profile-pic-l.jpg",
                                  alt: "Card image cap"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: " d-flex flex-grow-1 min-width-zero"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    " pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "min-width-zero" },
                                    [
                                      _c(
                                        "router-link",
                                        { attrs: { to: "?" } },
                                        [
                                          _c(
                                            "h6",
                                            {
                                              staticClass:
                                                "mb-1 card-subtitle truncate"
                                            },
                                            [_vm._v("Sarah Kortney")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "text-muted text-small mb-2"
                                        },
                                        [_vm._v("Executive Director")]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-4 d-flex flex-row",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "router-link",
                            { staticClass: "d-flex", attrs: { to: "?" } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "align-self-center list-thumbnail-letters rounded-circle m-4 small",
                                  attrs: {
                                    src: "/assets/img/profile-pic-l.jpg",
                                    alt: "Card image cap"
                                  }
                                },
                                [_vm._v("SK")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: " d-flex flex-grow-1 min-width-zero"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    " pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "min-width-zero" },
                                    [
                                      _c(
                                        "router-link",
                                        { attrs: { to: "?" } },
                                        [
                                          _c(
                                            "h6",
                                            {
                                              staticClass:
                                                "mb-1 card-subtitle truncate"
                                            },
                                            [_vm._v("Sarah Kortney")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "text-muted text-small mb-2"
                                        },
                                        [_vm._v("Executive Director")]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Carousel.vue?vue&type=template&id=7b3bdb19&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Carousel.vue?vue&type=template&id=7b3bdb19& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.carousel") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-colxx", { attrs: { xxs: "12" } }, [
            _c("h5", { staticClass: "mb-4 card-title" }, [
              _vm._v(_vm._s(_vm.$t("carousel.basic")))
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4 pl-0 pr-0", attrs: { xxs: "12" } },
            [
              _c(
                "swiper",
                {
                  ref: "swiperBasic",
                  attrs: { options: _vm.swiperBasicOption }
                },
                [
                  _c("swiper-slide", [
                    _c(
                      "div",
                      { staticClass: "pr-3 pl-3" },
                      [
                        _c(
                          "b-card",
                          { staticClass: "flex-row", attrs: { "no-body": "" } },
                          [
                            _c(
                              "div",
                              { staticClass: "w-50 position-relative" },
                              [
                                _c("img", {
                                  staticClass: "card-img-left",
                                  attrs: {
                                    src: "/assets/img/card-thumb-1.jpg",
                                    alt: "Card cap"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left",
                                    attrs: { variant: "primary", pill: "" }
                                  },
                                  [_vm._v("NEW")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "w-50" },
                              [
                                _c("b-card-body", [
                                  _c(
                                    "h6",
                                    { staticClass: "mb-4 card-subtitle" },
                                    [
                                      _vm._v(
                                        "Cheesecake with Fresh Berries and Mint"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "card-text text-muted text-small mb-0 font-weight-light"
                                    },
                                    [_vm._v("09.04.2018")]
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c(
                      "div",
                      { staticClass: "pr-3 pl-3" },
                      [
                        _c(
                          "b-card",
                          { staticClass: "flex-row", attrs: { "no-body": "" } },
                          [
                            _c(
                              "div",
                              { staticClass: "w-50 position-relative" },
                              [
                                _c("img", {
                                  staticClass: "card-img-left",
                                  attrs: {
                                    src: "/assets/img/card-thumb-2.jpg",
                                    alt: "Card cap"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left",
                                    attrs: { variant: "primary", pill: "" }
                                  },
                                  [_vm._v("DONE")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "w-50" },
                              [
                                _c("b-card-body", [
                                  _c(
                                    "h6",
                                    { staticClass: "mb-4 card-subtitle" },
                                    [
                                      _vm._v(
                                        "Wedding Cake with Flowers Macarons and Blueberries"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "card-text text-muted text-small mb-0 font-weight-light"
                                    },
                                    [_vm._v("01.06.2018")]
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c(
                      "div",
                      { staticClass: "pr-3 pl-3" },
                      [
                        _c(
                          "b-card",
                          { staticClass: "flex-row", attrs: { "no-body": "" } },
                          [
                            _c(
                              "div",
                              { staticClass: "w-50 position-relative" },
                              [
                                _c("img", {
                                  staticClass: "card-img-left",
                                  attrs: {
                                    src: "/assets/img/card-thumb-3.jpg",
                                    alt: "Card cap"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left",
                                    attrs: { variant: "secondary", pill: "" }
                                  },
                                  [_vm._v("PROCESSED")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "w-50" },
                              [
                                _c("b-card-body", [
                                  _c(
                                    "h6",
                                    { staticClass: "mb-4 card-subtitle" },
                                    [
                                      _vm._v(
                                        "Cheesecake with Chocolate Cookies and Cream Biscuits"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "card-text text-muted text-small mb-0 font-weight-light"
                                    },
                                    [_vm._v("27.05.2018")]
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c(
                      "div",
                      { staticClass: "pr-3 pl-3" },
                      [
                        _c(
                          "b-card",
                          { staticClass: "flex-row", attrs: { "no-body": "" } },
                          [
                            _c(
                              "div",
                              { staticClass: "w-50 position-relative" },
                              [
                                _c("img", {
                                  staticClass: "card-img-left",
                                  attrs: {
                                    src: "/assets/img/card-thumb-1.jpg",
                                    alt: "Card cap"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left",
                                    attrs: { variant: "primary", pill: "" }
                                  },
                                  [_vm._v("NEW")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "w-50" },
                              [
                                _c("b-card-body", [
                                  _c(
                                    "h6",
                                    { staticClass: "mb-4 card-subtitle" },
                                    [
                                      _vm._v(
                                        "Cheesecake with Chocolate Cookies and Cream Biscuits"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "card-text text-muted text-small mb-0 font-weight-light"
                                    },
                                    [_vm._v("19.10.2018")]
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c(
                      "div",
                      { staticClass: "pr-3 pl-3" },
                      [
                        _c(
                          "b-card",
                          { staticClass: "flex-row", attrs: { "no-body": "" } },
                          [
                            _c(
                              "div",
                              { staticClass: "w-50 position-relative" },
                              [
                                _c("img", {
                                  staticClass: "card-img-left",
                                  attrs: {
                                    src: "/assets/img/card-thumb-3.jpg",
                                    alt: "Card cap"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left",
                                    attrs: { variant: "primary", pill: "" }
                                  },
                                  [_vm._v("NEW")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "w-50" },
                              [
                                _c("b-card-body", [
                                  _c(
                                    "h6",
                                    { staticClass: "mb-4 card-subtitle" },
                                    [
                                      _vm._v(
                                        "Cheesecake with Fresh Berries and Mint"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "card-text text-muted text-small mb-0 font-weight-light"
                                    },
                                    [_vm._v("09.04.2018")]
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-center slider-nav" }, [
                _c(
                  "button",
                  { staticClass: "left-arrow btn btn-link swiper-basic-prev" },
                  [_c("i", { staticClass: "simple-icon-arrow-left" })]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "slider-dot-container swiper-basic-nav"
                }),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "left-arrow btn btn-link swiper-basic-next" },
                  [_c("i", { staticClass: "simple-icon-arrow-right" })]
                )
              ]),
              _vm._v(" "),
              _c("resize-observer", {
                on: { notify: _vm.handleSwiperBasicResize }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("b-colxx", { attrs: { xxs: "12" } }, [
            _c("h5", { staticClass: "mb-4 card-title" }, [
              _vm._v(_vm._s(_vm.$t("carousel.single")))
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4 pl-0 pr-0", attrs: { xxs: "12" } },
            [
              _c(
                "swiper",
                {
                  ref: "swiperSingle",
                  attrs: { options: _vm.swiperSingleOption }
                },
                [
                  _c("swiper-slide", [
                    _c(
                      "div",
                      { staticClass: "pr-3 pl-3" },
                      [
                        _c(
                          "b-card",
                          { staticClass: "flex-row", attrs: { "no-body": "" } },
                          [
                            _c("img", {
                              staticClass: "list-thumbnail responsive border-0",
                              attrs: {
                                alt: "Thumbnail",
                                src: "/assets/img/thumb-3.jpg"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "pl-2 d-flex flex-grow-1 min-width-zero"
                              },
                              [
                                _c(
                                  "b-card-body",
                                  {
                                    staticClass:
                                      "align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "list-item-heading mb-1 truncate"
                                      },
                                      [
                                        _vm._v(
                                          "Cheesecake with Chocolate Cookies and Cream Biscuits"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "mb-0 text-muted text-small"
                                      },
                                      [_vm._v("Cupcakes")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "mb-0 text-muted text-small"
                                      },
                                      [_vm._v("09.11.2018")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      [
                                        _c(
                                          "b-badge",
                                          {
                                            staticClass: "mr-1",
                                            attrs: {
                                              variant: "primary",
                                              pill: ""
                                            }
                                          },
                                          [_vm._v("NEW")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-badge",
                                          {
                                            staticClass: "mr-1",
                                            attrs: {
                                              variant: "secondary",
                                              pill: ""
                                            }
                                          },
                                          [_vm._v("ON HOLD")]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c(
                      "div",
                      { staticClass: "pr-3 pl-3" },
                      [
                        _c(
                          "b-card",
                          { staticClass: "flex-row", attrs: { "no-body": "" } },
                          [
                            _c("img", {
                              staticClass: "list-thumbnail responsive border-0",
                              attrs: {
                                alt: "Thumbnail",
                                src: "/assets/img/thumb-2.jpg"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "pl-2 d-flex flex-grow-1 min-width-zero"
                              },
                              [
                                _c(
                                  "b-card-body",
                                  {
                                    staticClass:
                                      "align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "list-item-heading mb-1 truncate"
                                      },
                                      [
                                        _vm._v(
                                          "Cheesecake with Fresh Berries and Mint"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "mb-0 text-muted text-small"
                                      },
                                      [_vm._v("Cupcakes")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "mb-0 text-muted text-small"
                                      },
                                      [_vm._v("09.04.2018")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      [
                                        _c(
                                          "b-badge",
                                          {
                                            staticClass: "mr-1",
                                            attrs: {
                                              variant: "primary",
                                              pill: ""
                                            }
                                          },
                                          [_vm._v("NEW")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-badge",
                                          {
                                            staticClass: "mr-1",
                                            attrs: {
                                              variant: "secondary",
                                              pill: ""
                                            }
                                          },
                                          [_vm._v("ON HOLD")]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-center slider-nav" }, [
                _c(
                  "button",
                  { staticClass: "left-arrow btn btn-link swiper-single-prev" },
                  [_c("i", { staticClass: "simple-icon-arrow-left" })]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "slider-dot-container swiper-single-nav"
                }),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "left-arrow btn btn-link swiper-single-next" },
                  [_c("i", { staticClass: "simple-icon-arrow-right" })]
                )
              ]),
              _vm._v(" "),
              _c("resize-observer", {
                on: { notify: _vm.handleSwiperSingleResize }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("b-colxx", { attrs: { xxs: "12" } }, [
            _c("h5", { staticClass: "mb-4 card-title" }, [
              _vm._v(_vm._s(_vm.$t("carousel.infinite")))
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4 pl-0 pr-0", attrs: { xxs: "12" } },
            [
              _c(
                "swiper",
                {
                  ref: "swiperInfinite",
                  attrs: { options: _vm.swiperInfiniteOption }
                },
                [
                  _c("swiper-slide", [
                    _c(
                      "div",
                      { staticClass: "pr-3 pl-3" },
                      [
                        _c(
                          "b-card",
                          { attrs: { "no-body": "" } },
                          [
                            _c(
                              "div",
                              { staticClass: "position-relative" },
                              [
                                _c("img", {
                                  staticClass: "card-img-top",
                                  attrs: {
                                    src: "/assets/img/card-thumb-1.jpg",
                                    alt: "Card cap"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left",
                                    attrs: { variant: "primary", pill: "" }
                                  },
                                  [_vm._v("NEW")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left-2",
                                    attrs: { variant: "secondary", pill: "" }
                                  },
                                  [_vm._v("TRENDING")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("b-card-body", [
                              _c("h6", { staticClass: "mb-4" }, [
                                _vm._v("Cheesecake with Fresh Berries and Mint")
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-muted text-small mb-0 font-weight-light"
                                },
                                [_vm._v("09.04.2018")]
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c(
                      "div",
                      { staticClass: "pr-3 pl-3" },
                      [
                        _c(
                          "b-card",
                          { attrs: { "no-body": "" } },
                          [
                            _c(
                              "div",
                              { staticClass: "position-relative" },
                              [
                                _c("img", {
                                  staticClass: "card-img-top",
                                  attrs: {
                                    src: "/assets/img/card-thumb-2.jpg",
                                    alt: "Card cap"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left",
                                    attrs: { variant: "primary", pill: "" }
                                  },
                                  [_vm._v("NEW")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left-2",
                                    attrs: { variant: "secondary", pill: "" }
                                  },
                                  [_vm._v("TRENDING")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("b-card-body", [
                              _c("h6", { staticClass: "mb-4" }, [
                                _vm._v(
                                  "Homemade Cheesecake with Fresh Berries and Mint"
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-muted text-small mb-0 font-weight-light"
                                },
                                [_vm._v("09.04.2018")]
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c(
                      "div",
                      { staticClass: "pr-3 pl-3" },
                      [
                        _c(
                          "b-card",
                          { attrs: { "no-body": "" } },
                          [
                            _c(
                              "div",
                              { staticClass: "position-relative" },
                              [
                                _c("img", {
                                  staticClass: "card-img-top",
                                  attrs: {
                                    src: "/assets/img/card-thumb-3.jpg",
                                    alt: "Card cap"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left",
                                    attrs: { variant: "primary", pill: "" }
                                  },
                                  [_vm._v("NEW")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left-2",
                                    attrs: { variant: "secondary", pill: "" }
                                  },
                                  [_vm._v("TRENDING")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("b-card-body", [
                              _c("h6", { staticClass: "mb-4" }, [
                                _vm._v(
                                  "Wedding Cake with Flowers Macarons and Blueberries"
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-muted text-small mb-0 font-weight-light"
                                },
                                [_vm._v("09.04.2018")]
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c(
                      "div",
                      { staticClass: "pr-3 pl-3" },
                      [
                        _c(
                          "b-card",
                          { attrs: { "no-body": "" } },
                          [
                            _c(
                              "div",
                              { staticClass: "position-relative" },
                              [
                                _c("img", {
                                  staticClass: "card-img-top",
                                  attrs: {
                                    src: "/assets/img/card-thumb-4.jpg",
                                    alt: "Card cap"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left",
                                    attrs: { variant: "primary", pill: "" }
                                  },
                                  [_vm._v("NEW")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left-2",
                                    attrs: { variant: "secondary", pill: "" }
                                  },
                                  [_vm._v("TRENDING")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("b-card-body", [
                              _c("h6", { staticClass: "mb-4" }, [
                                _vm._v(
                                  "Cheesecake with Chocolate Cookies and Cream Biscuits"
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-muted text-small mb-0 font-weight-light"
                                },
                                [_vm._v("09.04.2018")]
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c(
                      "div",
                      { staticClass: "pr-3 pl-3" },
                      [
                        _c(
                          "b-card",
                          { attrs: { "no-body": "" } },
                          [
                            _c(
                              "div",
                              { staticClass: "position-relative" },
                              [
                                _c("img", {
                                  staticClass: "card-img-top",
                                  attrs: {
                                    src: "/assets/img/card-thumb-2.jpg",
                                    alt: "Card cap"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left",
                                    attrs: { variant: "primary", pill: "" }
                                  },
                                  [_vm._v("NEW")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-badge",
                                  {
                                    staticClass:
                                      "position-absolute badge-top-left-2",
                                    attrs: { variant: "secondary", pill: "" }
                                  },
                                  [_vm._v("TRENDING")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("b-card-body", [
                              _c("h6", { staticClass: "mb-4" }, [
                                _vm._v(
                                  "Wedding Cake with Flowers Macarons and Blueberries"
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-muted text-small mb-0 font-weight-light"
                                },
                                [_vm._v("09.04.2018")]
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-center slider-nav" }, [
                _c(
                  "button",
                  {
                    staticClass: "left-arrow btn btn-link swiper-infinite-prev"
                  },
                  [_c("i", { staticClass: "simple-icon-arrow-left" })]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "slider-dot-container swiper-infinite-nav"
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "left-arrow btn btn-link swiper-infinite-next"
                  },
                  [_c("i", { staticClass: "simple-icon-arrow-right" })]
                )
              ]),
              _vm._v(" "),
              _c("resize-observer", {
                on: { notify: _vm.handleSwiperInfiniteResize }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Charts.vue?vue&type=template&id=e7112064&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Charts.vue?vue&type=template&id=e7112064& ***!
  \************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.charts") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("charts.line") }
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("line-shadow-chart", {
                                attrs: { data: _vm.lineChartData, height: 300 }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.no-shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("line-chart", {
                                attrs: { data: _vm.lineChartData, height: 300 }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("charts.polar") }
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("polar-area-shadow-chart", {
                                attrs: {
                                  data: _vm.polarAreaChartData,
                                  height: 300
                                }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.no-shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("polar-area-chart", {
                                attrs: {
                                  data: _vm.polarAreaChartData,
                                  height: 300
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("charts.area") }
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("area-shadow-chart", {
                                attrs: { data: _vm.areaChartData, height: 300 }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.no-shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("area-chart", {
                                attrs: { data: _vm.areaChartData, height: 300 }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("charts.scatter") }
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("scatter-shadow-chart", {
                                attrs: {
                                  data: _vm.scatterChartData,
                                  height: 300
                                }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.no-shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("scatter-chart", {
                                attrs: {
                                  data: _vm.scatterChartData,
                                  height: 300
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                { staticClass: "mb-4", attrs: { title: _vm.$t("charts.bar") } },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("bar-shadow-chart", {
                                attrs: { data: _vm.barChartData, height: 300 }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.no-shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("bar-chart", {
                                attrs: { data: _vm.barChartData, height: 300 }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("charts.radar") }
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("radar-shadow-chart", {
                                attrs: { data: _vm.radarChartData, height: 300 }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.no-shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("radar-chart", {
                                attrs: { data: _vm.radarChartData, height: 300 }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                { staticClass: "mb-4", attrs: { title: _vm.$t("charts.pie") } },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("pie-shadow-chart", {
                                attrs: { data: _vm.pieChartData, height: 300 }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.no-shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("pie-chart", {
                                attrs: { data: _vm.pieChartData, height: 300 }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("charts.doughnut") }
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("doughnut-shadow-chart", {
                                attrs: {
                                  data: _vm.doughnutChartData,
                                  height: 300
                                }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-colxx",
                        { staticClass: "mb-4", attrs: { xxs: "12", lg: "6" } },
                        [
                          _c("h6", { staticClass: "card-subtitle" }, [
                            _vm._v(_vm._s(_vm.$t("charts.no-shadow")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "chart-container" },
                            [
                              _c("doughnut-chart", {
                                attrs: {
                                  data: _vm.doughnutChartData,
                                  height: 300
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Collapse.vue?vue&type=template&id=f722a234&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Collapse.vue?vue&type=template&id=f722a234& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.collapse") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("collapse.basic") }
                },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-toggle",
                          rawName: "v-b-toggle.collapse1",
                          modifiers: { collapse1: true }
                        }
                      ],
                      attrs: { variant: "primary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("collapse.toggle")))]
                  ),
                  _vm._v(" "),
                  _c("b-collapse", { attrs: { id: "collapse1" } }, [
                    _c("div", { staticClass: "p-4 border mt-4" }, [
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v(
                          "\r\n                        Anim pariatur cliche reprehenderit, enim eiusmod high\r\n                        life accusamus terry richardson ad squid. Nihil anim\r\n                        keffiyeh helvetica, craft beer labore wes anderson cred\r\n                        nesciunt sapiente ea proident. Anim pariatur cliche\r\n                        reprehenderit, enim eiusmod high life accusamus terry\r\n                        richardson ad squid.\r\n                      "
                        )
                      ])
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("collapse.accordion") }
                },
                [
                  _c(
                    "div",
                    { staticClass: "border" },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-toggle",
                              rawName: "v-b-toggle.collapseAccordion1",
                              modifiers: { collapseAccordion1: true }
                            }
                          ],
                          staticClass: "text-left",
                          attrs: { variant: "link", block: "" }
                        },
                        [_vm._v("Collapsible Group Item #1")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-collapse",
                        {
                          attrs: {
                            id: "collapseAccordion1",
                            accordion: "my-accordion"
                          }
                        },
                        [
                          _c("div", { staticClass: "p-4" }, [
                            _vm._v(
                              "\r\n                        1. Anim pariatur cliche reprehenderit, enim eiusmod high life\r\n                        accusamus terry richardson ad squid. 3 wolf moon officia aute, non\r\n                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt\r\n                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\r\n                        on it squid single-origin coffee nulla assumenda shoreditch et.\r\n                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\r\n                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\r\n                        lomo. Leggings occaecat craft beer farm-to-table, raw denim\r\n                        aesthetic synth nesciunt you probably haven't heard of them\r\n                        accusamus labore sustainable VHS.\r\n                    "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "border" },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-toggle",
                              rawName: "v-b-toggle.collapseAccordion2",
                              modifiers: { collapseAccordion2: true }
                            }
                          ],
                          staticClass: "text-left",
                          attrs: { variant: "link", block: "" }
                        },
                        [_vm._v("Collapsible Group Item #2")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-collapse",
                        {
                          attrs: {
                            id: "collapseAccordion2",
                            accordion: "my-accordion"
                          }
                        },
                        [
                          _c("div", { staticClass: "p-4" }, [
                            _vm._v(
                              "\r\n                       2. Anim pariatur cliche reprehenderit, enim eiusmod high life\r\n                        accusamus terry richardson ad squid. 3 wolf moon officia aute, non\r\n                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt\r\n                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\r\n                        on it squid single-origin coffee nulla assumenda shoreditch et.\r\n                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\r\n                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\r\n                        lomo. Leggings occaecat craft beer farm-to-table, raw denim\r\n                        aesthetic synth nesciunt you probably haven't heard of them\r\n                        accusamus labore sustainable VHS.\r\n                    "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "border" },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-toggle",
                              rawName: "v-b-toggle.collapseAccordion3",
                              modifiers: { collapseAccordion3: true }
                            }
                          ],
                          staticClass: "text-left",
                          attrs: { variant: "link", block: "" }
                        },
                        [_vm._v("Collapsible Group Item #3")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-collapse",
                        {
                          attrs: {
                            id: "collapseAccordion3",
                            accordion: "my-accordion"
                          }
                        },
                        [
                          _c("div", { staticClass: "p-4" }, [
                            _vm._v(
                              "\r\n                        3. Anim pariatur cliche reprehenderit, enim eiusmod high life\r\n                        accusamus terry richardson ad squid. 3 wolf moon officia aute, non\r\n                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt\r\n                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\r\n                        on it squid single-origin coffee nulla assumenda shoreditch et.\r\n                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\r\n                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\r\n                        lomo. Leggings occaecat craft beer farm-to-table, raw denim\r\n                        aesthetic synth nesciunt you probably haven't heard of them\r\n                        accusamus labore sustainable VHS.\r\n                    "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Dropdowns.vue?vue&type=template&id=4b4165ce&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Dropdowns.vue?vue&type=template&id=4b4165ce& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.dropdowns") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("dropdowns.basic") }
                },
                [
                  _c(
                    "b-dropdown",
                    {
                      attrs: {
                        id: "ddown1",
                        text: _vm.$t("dropdowns.dropdown"),
                        variant: "outline-secondary"
                      }
                    },
                    [
                      _c("b-dropdown-header", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.header")))
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", { attrs: { disabled: "" } }, [
                        _vm._v(_vm._s(_vm.$t("dropdowns.action")))
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.another-action")))
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-divider"),
                      _vm._v(" "),
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.another-action")))
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("dropdowns.split-button") }
                },
                [
                  _c(
                    "b-dropdown",
                    {
                      attrs: {
                        id: "ddown2",
                        text: _vm.$t("dropdowns.action"),
                        split: "",
                        variant: "secondary"
                      }
                    },
                    [
                      _c("b-dropdown-header", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.header")))
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", { attrs: { disabled: "" } }, [
                        _vm._v(_vm._s(_vm.$t("dropdowns.action")))
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.another-action")))
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-divider"),
                      _vm._v(" "),
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.another-action")))
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("dropdowns.sizing") }
                },
                [
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "mr-1 mb-1",
                      attrs: {
                        id: "ddown3",
                        text: _vm.$t("dropdowns.large-button"),
                        size: "lg",
                        variant: "outline-info"
                      }
                    },
                    [
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.action")))
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.another-action")))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "mr-1 mb-1",
                      attrs: {
                        id: "ddown4",
                        text: _vm.$t("dropdowns.small-button"),
                        size: "sm",
                        variant: "outline-info"
                      }
                    },
                    [
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.action")))
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.another-action")))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "mr-1 mb-1",
                      attrs: {
                        id: "ddown5",
                        text: _vm.$t("dropdowns.small-button"),
                        size: "xs",
                        variant: "outline-info"
                      }
                    },
                    [
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.action")))
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.another-action")))
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("dropdowns.drop-directions") }
                },
                [
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "mr-1 mb-1",
                      attrs: {
                        id: "ddown6",
                        text: _vm.$t("dropdowns.dropup"),
                        dropup: "",
                        variant: "secondary"
                      }
                    },
                    [
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.action")))
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.another-action")))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "mr-1 mb-1 dropleft",
                      attrs: {
                        id: "ddown7",
                        text: _vm.$t("dropdowns.dropleft"),
                        left: "",
                        variant: "secondary"
                      }
                    },
                    [
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.action")))
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.another-action")))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "mr-1 mb-1 dropright",
                      attrs: {
                        id: "ddown8",
                        text: _vm.$t("dropdowns.dropright"),
                        right: "",
                        variant: "secondary"
                      }
                    },
                    [
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.action")))
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", [
                        _vm._v(_vm._s(_vm.$t("dropdowns.another-action")))
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Editors.vue?vue&type=template&id=7310c606&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Editors.vue?vue&type=template&id=7310c606& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.editors") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("editors.quill-standart") }
                },
                [
                  _c("quill-editor", {
                    ref: "myTextEditor",
                    attrs: { options: _vm.editorOption },
                    on: {
                      blur: function($event) {
                        return _vm.onEditorBlur($event)
                      },
                      focus: function($event) {
                        return _vm.onEditorFocus($event)
                      },
                      ready: function($event) {
                        return _vm.onEditorReady($event)
                      }
                    },
                    model: {
                      value: _vm.content,
                      callback: function($$v) {
                        _vm.content = $$v
                      },
                      expression: "content"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("editors.quill-bubble") }
                },
                [
                  _c("quill-editor", {
                    ref: "myTextEditorBubble",
                    staticClass: "bubble",
                    attrs: { options: _vm.editorOptionBubble },
                    on: {
                      change: function($event) {
                        return _vm.onEditorChange($event)
                      }
                    },
                    model: {
                      value: _vm.contentBubble,
                      callback: function($$v) {
                        _vm.contentBubble = $$v
                      },
                      expression: "contentBubble"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/FormComponents.vue?vue&type=template&id=4e17c6f3&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/FormComponents.vue?vue&type=template&id=4e17c6f3& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.form-components") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("form-components.custom-inputs") }
                },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: _vm.$t("form-components.checkboxes") } },
                    [
                      _c(
                        "b-form-checkbox-group",
                        { attrs: { stacked: "" } },
                        [
                          _c("b-form-checkbox", { attrs: { value: "first" } }, [
                            _vm._v("Check this custom checkbox")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-form-checkbox",
                            { attrs: { value: "second" } },
                            [_vm._v("Or this one")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-checkbox",
                            { attrs: { value: "third", disabled: "" } },
                            [_vm._v("But not this disabled one")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { attrs: { label: _vm.$t("form-components.radios") } },
                    [
                      _c(
                        "b-form-radio-group",
                        { attrs: { stacked: "" } },
                        [
                          _c("b-form-radio", { attrs: { value: "first" } }, [
                            _vm._v("Select this custom radio")
                          ]),
                          _vm._v(" "),
                          _c("b-form-radio", { attrs: { value: "second" } }, [
                            _vm._v("Or this one")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-form-radio",
                            { attrs: { value: "third", disabled: "" } },
                            [_vm._v("But not this disabled one")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { attrs: { label: _vm.$t("form-components.inline") } },
                    [
                      _c(
                        "b-form-checkbox-group",
                        [
                          _c("b-form-checkbox", { attrs: { value: "first" } }, [
                            _vm._v("An inline custom input")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-form-checkbox",
                            { attrs: { value: "second" } },
                            [_vm._v("and another one")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("form-components.vue-select") }
                },
                [
                  _c(
                    "b-form",
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-colxx",
                            { attrs: { xxs: "12", md: "4" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: _vm.$t(
                                      "form-components.state-single"
                                    )
                                  }
                                },
                                [
                                  _c("v-select", {
                                    attrs: { options: _vm.selectData },
                                    model: {
                                      value: _vm.vueSelectForm.single,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.vueSelectForm,
                                          "single",
                                          $$v
                                        )
                                      },
                                      expression: "vueSelectForm.single"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { xxs: "12", md: "4" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: _vm.$t(
                                      "form-components.state-multiple"
                                    )
                                  }
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      multiple: "",
                                      options: _vm.selectData
                                    },
                                    model: {
                                      value: _vm.vueSelectForm.multiple,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.vueSelectForm,
                                          "multiple",
                                          $$v
                                        )
                                      },
                                      expression: "vueSelectForm.multiple"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { xxs: "12", md: "4" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: _vm.$t(
                                      "form-components.state-multiple"
                                    )
                                  }
                                },
                                [
                                  _c(
                                    "v-select",
                                    {
                                      attrs: {
                                        label: "name",
                                        filterable: false,
                                        options: _vm.vueSelectOptions
                                      },
                                      on: { search: _vm.fetchOptions },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "option",
                                          fn: function(option) {
                                            return [
                                              _c(
                                                "div",
                                                { staticClass: "d-center" },
                                                [
                                                  _c("img", {
                                                    attrs: {
                                                      src:
                                                        option.owner.avatar_url,
                                                      height: "25"
                                                    }
                                                  }),
                                                  _vm._v(
                                                    "\n                      " +
                                                      _vm._s(option.full_name) +
                                                      "\n                      "
                                                  )
                                                ]
                                              )
                                            ]
                                          }
                                        },
                                        {
                                          key: "selected-option",
                                          fn: function(option) {
                                            return [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "selected d-center"
                                                },
                                                [
                                                  _c("img", {
                                                    attrs: {
                                                      src:
                                                        option.owner.avatar_url,
                                                      height: "18"
                                                    }
                                                  }),
                                                  _vm._v(
                                                    "\n                      " +
                                                      _vm._s(option.full_name) +
                                                      "\n                    "
                                                  )
                                                ]
                                              )
                                            ]
                                          }
                                        },
                                        {
                                          key: "spinner",
                                          fn: function(spinner) {
                                            return [
                                              _c("div", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: spinner,
                                                    expression: "spinner"
                                                  }
                                                ],
                                                staticClass:
                                                  "spinner-border text-primary"
                                              })
                                            ]
                                          }
                                        }
                                      ])
                                    },
                                    [
                                      _c("template", { slot: "no-options" }, [
                                        _vm._v(
                                          "\n                    type to search GitHub repositories..\n                  "
                                        )
                                      ])
                                    ],
                                    2
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("form-components.vue-autosuggest") }
                },
                [
                  _c(
                    "b-form",
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-colxx",
                            { attrs: { xxs: "12", md: "6" } },
                            [
                              _c("vue-autosuggest", {
                                staticClass: "autosuggest",
                                attrs: {
                                  suggestions: _vm.filteredOptions,
                                  "render-suggestion": _vm.renderSuggestion,
                                  "get-suggestion-value":
                                    _vm.getSuggestionValue,
                                  limit: 6,
                                  "input-props": {
                                    id: "autosuggest__input",
                                    class: "form-control",
                                    onInputChange: this
                                      .onAutoSuggestInputChange,
                                    placeholder: _vm.$t(
                                      "form-components.type-a-cake"
                                    )
                                  }
                                },
                                on: { selected: _vm.onAutosuggestSelected }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { xxs: "12", xl: "8" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("form-components.date-picker") } },
                [
                  _c(
                    "b-form",
                    [
                      _c(
                        "b-row",
                        { staticClass: "mb-5" },
                        [
                          _c("b-colxx", { attrs: { xxs: "12" } }, [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("form-components.date")))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { xxs: "12" } },
                            [
                              _c("v-date-picker", {
                                attrs: {
                                  mode: "single",
                                  "input-props": {
                                    class: "form-control",
                                    placeholder: _vm.$t("form-components.date")
                                  }
                                },
                                model: {
                                  value: _vm.selectedValueSingle,
                                  callback: function($$v) {
                                    _vm.selectedValueSingle = $$v
                                  },
                                  expression: "selectedValueSingle"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "mb-5" },
                        [
                          _c("b-colxx", { attrs: { xxs: "12" } }, [
                            _c("label", [
                              _vm._v(
                                _vm._s(_vm.$t("form-components.date-range"))
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { xxs: "12" } },
                            [
                              _c("v-date-picker", {
                                attrs: {
                                  mode: "range",
                                  "input-props": {
                                    class: "form-control",
                                    placeholder: _vm.$t(
                                      "form-components.date-range"
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.selectedValueRange,
                                  callback: function($$v) {
                                    _vm.selectedValueRange = $$v
                                  },
                                  expression: "selectedValueRange"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "mb-5" },
                        [
                          _c("b-colxx", { attrs: { xxs: "12" } }, [
                            _c("label", [
                              _vm._v(
                                _vm._s(_vm.$t("form-components.disabled-dates"))
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { xxs: "12" } },
                            [
                              _c("v-date-picker", {
                                attrs: {
                                  mode: "single",
                                  "disabled-dates": { weekdays: [1, 7] },
                                  "input-props": {
                                    class: "form-control",
                                    placeholder: _vm.$t(
                                      "form-components.disabled-dates"
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.selectedValueDisabled,
                                  callback: function($$v) {
                                    _vm.selectedValueDisabled = $$v
                                  },
                                  expression: "selectedValueDisabled"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { xxs: "12", xl: "4" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("form-components.embedded") } },
                [
                  _c(
                    "b-form",
                    [
                      _c(
                        "b-row",
                        { staticClass: "mb-0" },
                        [
                          _c(
                            "b-colxx",
                            { attrs: { xxs: "12" } },
                            [
                              _c(
                                "b-form-group",
                                [
                                  _c("v-date-picker", {
                                    staticClass: "is-expanded",
                                    attrs: {
                                      mode: "single",
                                      "is-inline": true,
                                      "input-props": {
                                        class: "form-control",
                                        placeholder: _vm.$t(
                                          "form-components.date"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.selectedValueSingleInline,
                                      callback: function($$v) {
                                        _vm.selectedValueSingleInline = $$v
                                      },
                                      expression: "selectedValueSingleInline"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("form-components.dropzone") }
                },
                [
                  _c(
                    "b-form",
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-colxx",
                            { attrs: { xxs: "12" } },
                            [
                              _c("vue-dropzone", {
                                ref: "myVueDropzone",
                                attrs: {
                                  id: "dropzone",
                                  options: _vm.dropzoneOptions
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("form-components.tags") }
                },
                [
                  _c(
                    "b-form",
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-colxx",
                            { attrs: { xxs: "12" } },
                            [
                              _c("input-tag", {
                                attrs: {
                                  placeholder: _vm.$t("form-components.tags")
                                },
                                model: {
                                  value: _vm.tags,
                                  callback: function($$v) {
                                    _vm.tags = $$v
                                  },
                                  expression: "tags"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("form-components.switch") }
                },
                [
                  _c(
                    "b-form",
                    [
                      _c(
                        "b-row",
                        { staticClass: "mb-3" },
                        [
                          _c(
                            "b-colxx",
                            { attrs: { xxs: "6" } },
                            [
                              _c(
                                "b-row",
                                [
                                  _c("b-colxx", { attrs: { xxs: "12" } }, [
                                    _c("label", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("form-components.primary")
                                        )
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-colxx",
                                    { attrs: { xxs: "12" } },
                                    [
                                      _c("switches", {
                                        attrs: {
                                          theme: "custom",
                                          color: "primary"
                                        },
                                        model: {
                                          value: _vm.switches.primary,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.switches,
                                              "primary",
                                              $$v
                                            )
                                          },
                                          expression: "switches.primary"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { xxs: "6" } },
                            [
                              _c(
                                "b-row",
                                [
                                  _c("b-colxx", { attrs: { xxs: "12" } }, [
                                    _c("label", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("form-components.secondary")
                                        )
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-colxx",
                                    { attrs: { xxs: "12" } },
                                    [
                                      _c("switches", {
                                        attrs: {
                                          theme: "custom",
                                          color: "secondary"
                                        },
                                        model: {
                                          value: _vm.switches.secondary,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.switches,
                                              "secondary",
                                              $$v
                                            )
                                          },
                                          expression: "switches.secondary"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-colxx",
                            { attrs: { xxs: "6" } },
                            [
                              _c(
                                "b-row",
                                [
                                  _c("b-colxx", { attrs: { xxs: "12" } }, [
                                    _c("label", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t(
                                            "form-components.primary-inverse"
                                          )
                                        )
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-colxx",
                                    { attrs: { xxs: "12" } },
                                    [
                                      _c("switches", {
                                        attrs: {
                                          theme: "custom",
                                          color: "primary-inverse"
                                        },
                                        model: {
                                          value: _vm.switches.primaryInverse,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.switches,
                                              "primaryInverse",
                                              $$v
                                            )
                                          },
                                          expression: "switches.primaryInverse"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { xxs: "6" } },
                            [
                              _c(
                                "b-row",
                                [
                                  _c("b-colxx", { attrs: { xxs: "12" } }, [
                                    _c("label", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t(
                                            "form-components.secondary-inverse"
                                          )
                                        )
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-colxx",
                                    { attrs: { xxs: "12" } },
                                    [
                                      _c("switches", {
                                        attrs: {
                                          theme: "custom",
                                          color: "secondary-inverse"
                                        },
                                        model: {
                                          value: _vm.switches.secondaryInverse,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.switches,
                                              "secondaryInverse",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "switches.secondaryInverse"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("form-components.slider") }
                },
                [
                  _c(
                    "b-row",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-colxx",
                        { attrs: { xxs: "12", sm: "6" } },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-colxx", { attrs: { xxs: "12" } }, [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("form-components.double-slider")
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-colxx",
                                { staticClass: "mb-5", attrs: { xxs: "12" } },
                                [
                                  _c("vue-slider", {
                                    ref: "slider",
                                    attrs: {
                                      "tooltip-dir": "['bottom']",
                                      piecewise: true,
                                      data: _vm.sliderData
                                    },
                                    model: {
                                      value: _vm.sliderDoubleValue,
                                      callback: function($$v) {
                                        _vm.sliderDoubleValue = $$v
                                      },
                                      expression: "sliderDoubleValue"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-colxx",
                        { attrs: { xxs: "12", sm: "6" } },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-colxx", { attrs: { xxs: "12" } }, [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("form-components.single-slider")
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-colxx",
                                { staticClass: "mb-5", attrs: { xxs: "12" } },
                                [
                                  _c("vue-slider", {
                                    ref: "sliderSingle",
                                    attrs: {
                                      "tooltip-dir": "['bottom']",
                                      min: 10,
                                      max: 100
                                    },
                                    model: {
                                      value: _vm.sliderValue,
                                      callback: function($$v) {
                                        _vm.sliderValue = $$v
                                      },
                                      expression: "sliderValue"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("form-components.rating") }
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-colxx",
                        { attrs: { xxs: "12", sm: "6" } },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-colxx", { attrs: { xxs: "12" } }, [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("form-components.interactive")
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-colxx",
                                { attrs: { xxs: "12" } },
                                [
                                  _c("stars", {
                                    model: {
                                      value: _vm.rate,
                                      callback: function($$v) {
                                        _vm.rate = $$v
                                      },
                                      expression: "rate"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-colxx",
                        { attrs: { xxs: "12", sm: "6" } },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-colxx", { attrs: { xxs: "12" } }, [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(_vm.$t("form-components.readonly"))
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-colxx",
                                { attrs: { xxs: "12" } },
                                [
                                  _c("stars", {
                                    attrs: { disabled: true },
                                    model: {
                                      value: _vm.disabledRate,
                                      callback: function($$v) {
                                        _vm.disabledRate = $$v
                                      },
                                      expression: "disabledRate"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Forms.vue?vue&type=template&id=552353c6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Forms.vue?vue&type=template&id=552353c6& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.forms") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("forms.basic") }
                },
                [
                  _c(
                    "b-form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onBasicSubmit($event)
                        }
                      }
                    },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: _vm.$t("forms.email"),
                            description: _vm.$t("forms.email-muted")
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              type: "email",
                              placeholder: _vm.$t("forms.email")
                            },
                            model: {
                              value: _vm.basicForm.email,
                              callback: function($$v) {
                                _vm.$set(_vm.basicForm, "email", $$v)
                              },
                              expression: "basicForm.email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        { attrs: { label: _vm.$t("forms.password") } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              type: "password",
                              placeholder: _vm.$t("forms.password")
                            },
                            model: {
                              value: _vm.basicForm.password,
                              callback: function($$v) {
                                _vm.$set(_vm.basicForm, "password", $$v)
                              },
                              expression: "basicForm.password"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        [
                          _c(
                            "b-form-checkbox",
                            {
                              model: {
                                value: _vm.basicForm.checked,
                                callback: function($$v) {
                                  _vm.$set(_vm.basicForm, "checked", $$v)
                                },
                                expression: "basicForm.checked"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("forms.custom-checkbox")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mt-4",
                          attrs: { type: "submit", variant: "primary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("forms.submit")))]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("forms.horizontal") }
                },
                [
                  _c(
                    "b-form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onHorizontalSubmit($event)
                        }
                      }
                    },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            "label-cols": "2",
                            horizontal: "",
                            label: _vm.$t("forms.email")
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: { placeholder: _vm.$t("forms.email") },
                            model: {
                              value: _vm.horizontalForm.email,
                              callback: function($$v) {
                                _vm.$set(_vm.horizontalForm, "email", $$v)
                              },
                              expression: "horizontalForm.email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            "label-cols": "2",
                            horizontal: "",
                            label: _vm.$t("forms.password")
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              type: "password",
                              placeholder: _vm.$t("forms.password")
                            },
                            model: {
                              value: _vm.horizontalForm.password,
                              callback: function($$v) {
                                _vm.$set(_vm.horizontalForm, "password", $$v)
                              },
                              expression: "horizontalForm.password"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            "label-cols": "2",
                            horizontal: "",
                            label: _vm.$t("forms.radios")
                          }
                        },
                        [
                          _c("b-form-radio-group", {
                            staticClass: "pt-2",
                            attrs: {
                              stacked: "",
                              options: _vm.horizontalFormRadios
                            },
                            model: {
                              value: _vm.horizontalForm.radio,
                              callback: function($$v) {
                                _vm.$set(_vm.horizontalForm, "radio", $$v)
                              },
                              expression: "horizontalForm.radio"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            "label-cols": "2",
                            horizontal: "",
                            label: _vm.$t("forms.checkbox")
                          }
                        },
                        [
                          _c(
                            "b-form-checkbox",
                            {
                              model: {
                                value: _vm.horizontalForm.checked,
                                callback: function($$v) {
                                  _vm.$set(_vm.horizontalForm, "checked", $$v)
                                },
                                expression: "horizontalForm.checked"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("forms.custom-checkbox")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mt-4",
                          attrs: { type: "submit", variant: "primary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("forms.signin")))]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("forms.top-labels-over-line") }
                },
                [
                  _c(
                    "b-form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onTopLabelsOverLineFormSubmit($event)
                        }
                      }
                    },
                    [
                      _c(
                        "label",
                        { staticClass: "form-group has-float-label" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.topLabelsOverLineForm.email,
                                expression: "topLabelsOverLineForm.email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "email" },
                            domProps: {
                              value: _vm.topLabelsOverLineForm.email
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.topLabelsOverLineForm,
                                  "email",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.$t("forms.email")))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "label",
                        { staticClass: "form-group has-float-label" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.topLabelsOverLineForm.password,
                                expression: "topLabelsOverLineForm.password"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "password" },
                            domProps: {
                              value: _vm.topLabelsOverLineForm.password
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.topLabelsOverLineForm,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.$t("forms.password")))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group has-float-label" },
                        [
                          _c("input-tag", {
                            model: {
                              value: _vm.topLabelsOverLineForm.tags,
                              callback: function($$v) {
                                _vm.$set(_vm.topLabelsOverLineForm, "tags", $$v)
                              },
                              expression: "topLabelsOverLineForm.tags"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.$t("forms.tags")))])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group has-float-label" },
                        [
                          _c("v-date-picker", {
                            attrs: {
                              mode: "single",
                              "input-props": {
                                class: "form-control",
                                placeholder: _vm.$t("form-components.date")
                              }
                            },
                            model: {
                              value: _vm.topLabelsOverLineForm.date,
                              callback: function($$v) {
                                _vm.$set(_vm.topLabelsOverLineForm, "date", $$v)
                              },
                              expression: "topLabelsOverLineForm.date"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.$t("forms.date")))])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group has-float-label" },
                        [
                          _c("v-select", {
                            attrs: { options: _vm.selectData },
                            model: {
                              value: _vm.topLabelsOverLineForm.select,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.topLabelsOverLineForm,
                                  "select",
                                  $$v
                                )
                              },
                              expression: "topLabelsOverLineForm.select"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.$t("forms.state")))])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mt-4",
                          attrs: { type: "submit", variant: "primary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("forms.submit")))]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("forms.top-labels-in-input") }
                },
                [
                  _c(
                    "b-form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onTopLabelsInInputFormSubmit($event)
                        }
                      }
                    },
                    [
                      _c("label", { staticClass: "form-group has-top-label" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.topLabelsInInputForm.email,
                              expression: "topLabelsInInputForm.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "email" },
                          domProps: { value: _vm.topLabelsInInputForm.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.topLabelsInInputForm,
                                "email",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.$t("forms.email-u")))])
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "form-group has-top-label" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.topLabelsInInputForm.password,
                              expression: "topLabelsInInputForm.password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "password" },
                          domProps: {
                            value: _vm.topLabelsInInputForm.password
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.topLabelsInInputForm,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.$t("forms.password-u")))])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group has-top-label" },
                        [
                          _c("input-tag", {
                            model: {
                              value: _vm.topLabelsInInputForm.tags,
                              callback: function($$v) {
                                _vm.$set(_vm.topLabelsInInputForm, "tags", $$v)
                              },
                              expression: "topLabelsInInputForm.tags"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.$t("forms.tags-u")))])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group has-top-label" },
                        [
                          _c("v-date-picker", {
                            attrs: {
                              mode: "single",
                              "input-props": {
                                class: "form-control",
                                placeholder: _vm.$t("form-components.date")
                              }
                            },
                            model: {
                              value: _vm.topLabelsInInputForm.date,
                              callback: function($$v) {
                                _vm.$set(_vm.topLabelsInInputForm, "date", $$v)
                              },
                              expression: "topLabelsInInputForm.date"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.$t("forms.date-u")))])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group has-top-label" },
                        [
                          _c("v-select", {
                            attrs: { options: _vm.selectData },
                            model: {
                              value: _vm.topLabelsInInputForm.select,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.topLabelsInInputForm,
                                  "select",
                                  $$v
                                )
                              },
                              expression: "topLabelsInInputForm.select"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.$t("forms.state-u")))])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mt-4",
                          attrs: { type: "submit", variant: "primary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("forms.submit")))]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                { staticClass: "mb-4", attrs: { title: _vm.$t("forms.grid") } },
                [
                  _c(
                    "b-form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onGridFormSubmit($event)
                        }
                      }
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-colxx",
                            { attrs: { sm: "6" } },
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("forms.email") } },
                                [
                                  _c("b-form-input", {
                                    attrs: { type: "email" },
                                    model: {
                                      value: _vm.gridForm.email,
                                      callback: function($$v) {
                                        _vm.$set(_vm.gridForm, "email", $$v)
                                      },
                                      expression: "gridForm.email"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { sm: "6" } },
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("forms.password") } },
                                [
                                  _c("b-form-input", {
                                    attrs: { type: "password" },
                                    model: {
                                      value: _vm.gridForm.password,
                                      callback: function($$v) {
                                        _vm.$set(_vm.gridForm, "password", $$v)
                                      },
                                      expression: "gridForm.password"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { sm: "12" } },
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("forms.address") } },
                                [
                                  _c("b-form-input", {
                                    model: {
                                      value: _vm.gridForm.address1,
                                      callback: function($$v) {
                                        _vm.$set(_vm.gridForm, "address1", $$v)
                                      },
                                      expression: "gridForm.address1"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { sm: "12" } },
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("forms.address2") } },
                                [
                                  _c("b-form-input", {
                                    model: {
                                      value: _vm.gridForm.address2,
                                      callback: function($$v) {
                                        _vm.$set(_vm.gridForm, "address2", $$v)
                                      },
                                      expression: "gridForm.address2"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { sm: "6" } },
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("forms.city") } },
                                [
                                  _c("b-form-input", {
                                    model: {
                                      value: _vm.gridForm.city,
                                      callback: function($$v) {
                                        _vm.$set(_vm.gridForm, "city", $$v)
                                      },
                                      expression: "gridForm.city"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { sm: "4" } },
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("forms.state") } },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      options: _vm.stateOptions,
                                      plain: ""
                                    },
                                    model: {
                                      value: _vm.gridForm.state,
                                      callback: function($$v) {
                                        _vm.$set(_vm.gridForm, "state", $$v)
                                      },
                                      expression: "gridForm.state"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { sm: "2" } },
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("forms.zip") } },
                                [
                                  _c("b-form-input", {
                                    model: {
                                      value: _vm.gridForm.zip,
                                      callback: function($$v) {
                                        _vm.$set(_vm.gridForm, "zip", $$v)
                                      },
                                      expression: "gridForm.zip"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mt-4",
                          attrs: { type: "submit", variant: "primary" }
                        },
                        [_vm._v(_vm._s(_vm.$t("forms.signin")))]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("forms.inline") }
                },
                [
                  _c(
                    "b-form",
                    {
                      attrs: { inline: "" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onInlineSubmit($event)
                        }
                      }
                    },
                    [
                      _c(
                        "b-input-group",
                        [
                          _c("b-form-input", {
                            staticClass: "mb-2 mr-sm-2 mb-sm-0",
                            attrs: {
                              type: "text",
                              placeholder: _vm.$t("forms.firstname")
                            },
                            model: {
                              value: _vm.inlineForm.fullname,
                              callback: function($$v) {
                                _vm.$set(_vm.inlineForm, "fullname", $$v)
                              },
                              expression: "inlineForm.fullname"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-input-group",
                        { attrs: { prepend: "@" } },
                        [
                          _c("b-form-input", {
                            staticClass: "mb-2 mr-sm-2 mb-sm-0",
                            attrs: {
                              type: "text",
                              placeholder: _vm.$t("forms.lastname")
                            },
                            model: {
                              value: _vm.inlineForm.lastname,
                              callback: function($$v) {
                                _vm.$set(_vm.inlineForm, "lastname", $$v)
                              },
                              expression: "inlineForm.lastname"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        [
                          _c(
                            "b-form-checkbox",
                            {
                              staticClass: "mb-2 mr-sm-2 mb-sm-0",
                              model: {
                                value: _vm.inlineForm.checked,
                                callback: function($$v) {
                                  _vm.$set(_vm.inlineForm, "checked", $$v)
                                },
                                expression: "inlineForm.checked"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("forms.custom-checkbox")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            type: "submit",
                            variant: "outline-primary",
                            size: "sm"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("forms.submit")))]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("forms.validation") }
                },
                [
                  _c(
                    "b-form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onValitadeFormSubmit($event)
                        }
                      }
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-colxx",
                            { attrs: { sm: "6" } },
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("forms.firstname") } },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "text",
                                      state: !_vm.$v.validateForm.firstname
                                        .$invalid
                                    },
                                    model: {
                                      value: _vm.validateForm.firstname,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.validateForm,
                                          "firstname",
                                          $$v
                                        )
                                      },
                                      expression: "validateForm.firstname"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b-form-invalid-feedback", [
                                    _vm._v(
                                      _vm._s(_vm.$t("forms.firstname-message"))
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { sm: "6" } },
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("forms.lastname") } },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "text",
                                      state: !_vm.$v.validateForm.lastname
                                        .$invalid
                                    },
                                    model: {
                                      value: _vm.validateForm.lastname,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.validateForm,
                                          "lastname",
                                          $$v
                                        )
                                      },
                                      expression: "validateForm.lastname"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b-form-invalid-feedback", [
                                    _vm._v(
                                      _vm._s(_vm.$t("forms.lastname-message"))
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { sm: "6" } },
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("forms.city") } },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "text",
                                      state: !_vm.$v.validateForm.city.$invalid
                                    },
                                    model: {
                                      value: _vm.validateForm.city,
                                      callback: function($$v) {
                                        _vm.$set(_vm.validateForm, "city", $$v)
                                      },
                                      expression: "validateForm.city"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b-form-invalid-feedback", [
                                    _vm._v(_vm._s(_vm.$t("forms.city-message")))
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-colxx",
                            { attrs: { sm: "6" } },
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("forms.state") } },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      options: _vm.stateOptions,
                                      plain: "",
                                      state: !_vm.$v.validateForm.state.$invalid
                                    },
                                    model: {
                                      value: _vm.validateForm.state,
                                      callback: function($$v) {
                                        _vm.$set(_vm.validateForm, "state", $$v)
                                      },
                                      expression: "validateForm.state"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b-form-invalid-feedback", [
                                    _vm._v(
                                      _vm._s(_vm.$t("forms.state-message"))
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mt-4",
                          attrs: {
                            type: "submit",
                            variant: "primary",
                            disabled: _vm.$v.validateForm.$invalid
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("forms.submit")))]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Icons.vue?vue&type=template&id=d336a59e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Icons.vue?vue&type=template&id=d336a59e& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.icons") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: {
                    title:
                      _vm.$t("icons.simplelineicons") +
                      " (" +
                      _vm.simplelineicons.length +
                      " icons)"
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "simple-line-icons" },
                    _vm._l(_vm.simplelineicons, function(icon, index) {
                      return _c("div", { key: index, staticClass: "glyph" }, [
                        _c("div", { class: "glyph-icon " + icon }),
                        _vm._v(" "),
                        _c("div", { staticClass: "class-name" }, [
                          _vm._v(_vm._s(icon))
                        ])
                      ])
                    }),
                    0
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("icons.iconsmind") }
                },
                [
                  _c(
                    "div",
                    { staticClass: "mind-icons" },
                    _vm._l(_vm.iconsmind, function(group, parentIndex) {
                      return _c(
                        "div",
                        { key: parentIndex, staticClass: "mb-5" },
                        [
                          _c("h6", { staticClass: "mb-4" }, [
                            _vm._v(_vm._s(group.title))
                          ]),
                          _vm._v(" "),
                          _vm._l(group.icons, function(icon, iconIndex) {
                            return _c(
                              "div",
                              {
                                key: parentIndex + "_" + iconIndex,
                                staticClass: "glyph"
                              },
                              [
                                _c("div", { class: "glyph-icon " + icon }),
                                _vm._v(" "),
                                _c("div", { staticClass: "class-name" }, [
                                  _vm._v(_vm._s(icon))
                                ])
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "clearfix" })
                        ],
                        2
                      )
                    }),
                    0
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/InputGroups.vue?vue&type=template&id=e3e7a9d6&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/InputGroups.vue?vue&type=template&id=e3e7a9d6& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.input-groups") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("input-groups.basic") }
                },
                [
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3", attrs: { prepend: "@" } },
                    [
                      _c("b-form-input", {
                        attrs: { placeholder: _vm.$t("user.username") }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3", attrs: { append: "@example" } },
                    [
                      _c("b-form-input", {
                        attrs: { placeholder: _vm.$t("user.username") }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    {
                      staticClass: "mb-3",
                      attrs: { prepend: "https://example.com/users/" }
                    },
                    [
                      _c("b-form-input", {
                        attrs: { placeholder: _vm.$t("user.username") }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    {
                      staticClass: "mb-3",
                      attrs: { prepend: "$", append: ".00" }
                    },
                    [_c("b-form-input", { attrs: { type: "number" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    {
                      staticClass: "mb-3",
                      attrs: { prepend: "With textarea" }
                    },
                    [
                      _c("b-form-textarea", {
                        attrs: { rows: "2", "max-rows": "6", "no-resize": "" },
                        model: {
                          value: _vm.textarea,
                          callback: function($$v) {
                            _vm.textarea = $$v
                          },
                          expression: "textarea"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("input-groups.sizing") }
                },
                [
                  _c(
                    "b-input-group",
                    {
                      staticClass: "mb-3",
                      attrs: { prepend: "Small", size: "sm" }
                    },
                    [_c("b-form-input")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3", attrs: { prepend: "Default" } },
                    [_c("b-form-input")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    {
                      staticClass: "mb-3",
                      attrs: { prepend: "Large", size: "lg" }
                    },
                    [_c("b-form-input")],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("input-groups.checkboxes-and-radios") }
                },
                [
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-input-group-prepend",
                        { attrs: { "is-text": "" } },
                        [_c("input", { attrs: { type: "checkbox" } })]
                      ),
                      _vm._v(" "),
                      _c("b-form-input")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-input-group-prepend",
                        { attrs: { "is-text": "" } },
                        [_c("input", { attrs: { type: "radio" } })]
                      ),
                      _vm._v(" "),
                      _c("b-form-input")
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("input-groups.multiple-inputs") }
                },
                [
                  _c(
                    "b-input-group",
                    {
                      staticClass: "mb-3",
                      attrs: {
                        prepend: _vm.$t("input-groups.first-and-last-name")
                      }
                    },
                    [_c("b-form-input"), _vm._v(" "), _c("b-form-input")],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("input-groups.multiple-addons") }
                },
                [
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3", attrs: { prepend: "$" } },
                    [
                      _c(
                        "b-input-group-prepend",
                        { attrs: { "is-text": "" } },
                        [
                          _vm._v(
                            "\r\n                    0.00\r\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("b-form-input")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3", attrs: { append: "$" } },
                    [
                      _c("b-form-input"),
                      _vm._v(" "),
                      _c("b-input-group-append", { attrs: { "is-text": "" } }, [
                        _vm._v(
                          "\r\n                    0.00\r\n                "
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("input-groups.button-addons") }
                },
                [
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-input-group-prepend",
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-secondary" } },
                            [_vm._v(_vm._s(_vm.$t("input-groups.button")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-form-input")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3" },
                    [
                      _c("b-form-input"),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-secondary" } },
                            [_vm._v(_vm._s(_vm.$t("input-groups.button")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-input-group-prepend",
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-secondary" } },
                            [_vm._v(_vm._s(_vm.$t("input-groups.button")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-secondary" } },
                            [_vm._v(_vm._s(_vm.$t("input-groups.button")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-form-input")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3" },
                    [
                      _c("b-form-input"),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-secondary" } },
                            [_vm._v(_vm._s(_vm.$t("input-groups.button")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-secondary" } },
                            [_vm._v(_vm._s(_vm.$t("input-groups.button")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: {
                    title: _vm.$t("input-groups.buttons-with-dropdowns")
                  }
                },
                [
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-input-group-prepend",
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                text: _vm.$t("input-groups.dropdown"),
                                variant: "outline-secondary"
                              }
                            },
                            [
                              _c("b-dropdown-header", [
                                _vm._v(_vm._s(_vm.$t("input-groups.header")))
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                { attrs: { disabled: "" } },
                                [_vm._v(_vm._s(_vm.$t("input-groups.action")))]
                              ),
                              _vm._v(" "),
                              _c("b-dropdown-item", [
                                _vm._v(
                                  _vm._s(_vm.$t("input-groups.another-action"))
                                )
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-divider"),
                              _vm._v(" "),
                              _c("b-dropdown-item", [
                                _vm._v(
                                  _vm._s(_vm.$t("input-groups.another-action"))
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-form-input")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3" },
                    [
                      _c("b-form-input"),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                text: _vm.$t("input-groups.dropdown"),
                                variant: "outline-secondary"
                              }
                            },
                            [
                              _c("b-dropdown-header", [
                                _vm._v(_vm._s(_vm.$t("input-groups.header")))
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                { attrs: { disabled: "" } },
                                [_vm._v(_vm._s(_vm.$t("input-groups.action")))]
                              ),
                              _vm._v(" "),
                              _c("b-dropdown-item", [
                                _vm._v(
                                  _vm._s(_vm.$t("input-groups.another-action"))
                                )
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-divider"),
                              _vm._v(" "),
                              _c("b-dropdown-item", [
                                _vm._v(
                                  _vm._s(_vm.$t("input-groups.another-action"))
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("input-groups.segmented-buttons") }
                },
                [
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-input-group-prepend",
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                right: "",
                                split: "",
                                text: _vm.$t("input-groups.action"),
                                variant: "outline-secondary"
                              }
                            },
                            [
                              _c("b-dropdown-header", [
                                _vm._v(_vm._s(_vm.$t("input-groups.header")))
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                { attrs: { disabled: "" } },
                                [_vm._v(_vm._s(_vm.$t("input-groups.action")))]
                              ),
                              _vm._v(" "),
                              _c("b-dropdown-item", [
                                _vm._v(
                                  _vm._s(_vm.$t("input-groups.another-action"))
                                )
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-divider"),
                              _vm._v(" "),
                              _c("b-dropdown-item", [
                                _vm._v(
                                  _vm._s(_vm.$t("input-groups.another-action"))
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-form-input")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3" },
                    [
                      _c("b-form-input"),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                right: "",
                                split: "",
                                text: _vm.$t("input-groups.action"),
                                variant: "outline-secondary"
                              }
                            },
                            [
                              _c("b-dropdown-header", [
                                _vm._v(_vm._s(_vm.$t("input-groups.header")))
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                { attrs: { disabled: "" } },
                                [_vm._v(_vm._s(_vm.$t("input-groups.action")))]
                              ),
                              _vm._v(" "),
                              _c("b-dropdown-item", [
                                _vm._v(
                                  _vm._s(_vm.$t("input-groups.another-action"))
                                )
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-divider"),
                              _vm._v(" "),
                              _c("b-dropdown-item", [
                                _vm._v(
                                  _vm._s(_vm.$t("input-groups.another-action"))
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("input-groups.custom-select") }
                },
                [
                  _c(
                    "b-input-group",
                    {
                      staticClass: "mb-3",
                      attrs: { prepend: _vm.$t("input-groups.options") }
                    },
                    [
                      _c("b-form-select", {
                        attrs: {
                          options: ["Option1", "Option2", "Option3", "Option4"],
                          plain: ""
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    {
                      staticClass: "mb-3",
                      attrs: { append: _vm.$t("input-groups.options") }
                    },
                    [
                      _c("b-form-select", {
                        attrs: {
                          options: ["Option1", "Option2", "Option3", "Option4"],
                          plain: ""
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-input-group-prepend",
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-secondary" } },
                            [_vm._v(_vm._s(_vm.$t("input-groups.button")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-form-select", {
                        attrs: {
                          options: ["Option1", "Option2", "Option3", "Option4"],
                          plain: ""
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3" },
                    [
                      _c("b-form-select", {
                        attrs: {
                          options: ["Option1", "Option2", "Option3", "Option4"],
                          plain: ""
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-secondary" } },
                            [_vm._v(_vm._s(_vm.$t("input-groups.button")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("input-groups.custom-file-input") }
                },
                [
                  _c(
                    "b-input-group",
                    {
                      staticClass: "mb-3",
                      attrs: { prepend: _vm.$t("input-groups.upload") }
                    },
                    [
                      _c("b-form-file", {
                        attrs: {
                          placeholder: _vm.$t("input-groups.choose-file")
                        },
                        model: {
                          value: _vm.file,
                          callback: function($$v) {
                            _vm.file = $$v
                          },
                          expression: "file"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    {
                      staticClass: "mb-3",
                      attrs: { append: _vm.$t("input-groups.upload") }
                    },
                    [
                      _c("b-form-file", {
                        attrs: {
                          placeholder: _vm.$t("input-groups.choose-file")
                        },
                        model: {
                          value: _vm.file,
                          callback: function($$v) {
                            _vm.file = $$v
                          },
                          expression: "file"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-input-group-prepend",
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-secondary" } },
                            [_vm._v(_vm._s(_vm.$t("input-groups.button")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-form-file", {
                        attrs: {
                          placeholder: _vm.$t("input-groups.choose-file")
                        },
                        model: {
                          value: _vm.file,
                          callback: function($$v) {
                            _vm.file = $$v
                          },
                          expression: "file"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { staticClass: "mb-3" },
                    [
                      _c("b-form-file", {
                        attrs: {
                          placeholder: _vm.$t("input-groups.choose-file")
                        },
                        model: {
                          value: _vm.file,
                          callback: function($$v) {
                            _vm.file = $$v
                          },
                          expression: "file"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-secondary" } },
                            [_vm._v(_vm._s(_vm.$t("input-groups.button")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Jumbotron.vue?vue&type=template&id=61feaf43&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Jumbotron.vue?vue&type=template&id=61feaf43& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.jumbotron") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                { staticClass: "mb-4" },
                [
                  _c(
                    "b-jumbotron",
                    {
                      attrs: {
                        header: _vm.$t("jumbotron.hello-world"),
                        lead: _vm.$t("jumbotron.lead"),
                        "header-level": "4"
                      }
                    },
                    [
                      _c("hr", { staticClass: "my-4" }),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.$t("jumbotron.lead-detail")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "lead mb-0" },
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "primary", size: "lg" } },
                            [_vm._v(_vm._s(_vm.$t("jumbotron.learn-more")))]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Maps.vue?vue&type=template&id=f27c7560&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Maps.vue?vue&type=template&id=f27c7560& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.maps") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("maps.google") }
                },
                [
                  _c(
                    "GmapMap",
                    {
                      staticClass: "map-item",
                      attrs: {
                        center: _vm.center,
                        zoom: 9,
                        "map-type-id": "roadmap"
                      }
                    },
                    _vm._l(_vm.markers, function(m, index) {
                      return _c("GmapMarker", {
                        key: index,
                        attrs: {
                          position: m.position,
                          clickable: true,
                          draggable: true
                        },
                        on: {
                          click: function($event) {
                            _vm.center = m.position
                          }
                        }
                      })
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("maps.yandex") }
                },
                [
                  _c("yandex-map", {
                    staticClass: "map-item",
                    attrs: {
                      coords: _vm.yandexCoords,
                      zoom: "9",
                      placemarks: _vm.placemarks,
                      "map-type": "map"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Modal.vue?vue&type=template&id=698e5344&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Modal.vue?vue&type=template&id=698e5344& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.modal") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("modal.basic") }
                },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modalbasic",
                          modifiers: { modalbasic: true }
                        }
                      ],
                      attrs: { variant: "outline-primary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("modal.launch-demo-modal")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      ref: "modalbasic",
                      attrs: {
                        id: "modalbasic",
                        title: _vm.$t("modal.modal-title")
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit,\r\n                sed do eiusmod tempor incididunt ut labore et dolore magna\r\n                aliqua. Ut enim ad minim veniam, quis nostrud exercitation\r\n                ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n                Duis aute irure dolor in reprehenderit in voluptate velit\r\n                esse cillum dolore eu fugiat nulla pariatur. Excepteur\r\n                sint occaecat cupidatat non proident, sunt in culpa qui\r\n                officia deserunt mollit anim id est laborum.\r\n                "
                      ),
                      _c(
                        "template",
                        { slot: "modal-footer" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-1",
                              attrs: { variant: "primary" },
                              on: {
                                click: function($event) {
                                  return _vm.somethingModal("modalbasic")
                                }
                              }
                            },
                            [_vm._v("Do Something")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "secondary" },
                              on: {
                                click: function($event) {
                                  return _vm.hideModal("modalbasic")
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          )
                        ],
                        1
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("modal.scrolling-long-content") }
                },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modallong",
                          modifiers: { modallong: true }
                        }
                      ],
                      attrs: { variant: "outline-primary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("modal.launch-demo-modal")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      ref: "modallong",
                      attrs: {
                        id: "modallong",
                        title: _vm.$t("modal.modal-title")
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                    Fusce in ex imperdiet magna dignissim porta in vel ipsum.\r\n                    Cras et lectus vel magna eleifend faucibus. Proin aliquam\r\n                    fermentum lacus, sit amet molestie ante aliquet nec. Nunc\r\n                    interdum, ante non lobortis feugiat, quam quam ornare\r\n                    nunc, tempus dictum neque odio sed augue. Suspendisse\r\n                    tincidunt tristique laoreet. Orci varius natoque penatibus\r\n                    et magnis dis parturient montes, nascetur ridiculus mus.\r\n                    Aenean condimentum est sit amet justo semper molestie.\r\n                    Integer placerat nulla id tortor molestie, sed laoreet est\r\n                    ornare. Morbi non velit nec purus accumsan commodo et sed\r\n                    nisi. Maecenas sit amet purus scelerisque neque luctus\r\n                    congue.\r\n                    "
                      ),
                      _c("br"),
                      _vm._v(
                        " Nam consequat nunc neque, nec bibendum ante mollis\r\n                    nec. Cras porta ante a ex condimentum imperdiet. Cras\r\n                    vehicula velit in erat semper, sed bibendum ligula\r\n                    vehicula. Fusce hendrerit orci arcu, ut posuere dui\r\n                    volutpat at. Vivamus condimentum porttitor ultricies.\r\n                    Quisque at metus sit amet ipsum convallis lacinia. Nulla\r\n                    elementum ligula eget velit viverra condimentum.\r\n                    Vestibulum pulvinar enim mattis pharetra tristique. Donec\r\n                    hendrerit vitae lorem at malesuada. Lorem ipsum dolor sit\r\n                    amet, consectetur adipiscing elit. Nulla a diam eu sem\r\n                    gravida ultrices.\r\n                    "
                      ),
                      _c("br"),
                      _vm._v(
                        " Nam consequat nunc neque, nec bibendum ante mollis\r\n                    nec. Cras porta ante a ex condimentum imperdiet. Cras\r\n                    vehicula velit in erat semper, sed bibendum ligula\r\n                    vehicula. Fusce hendrerit orci arcu, ut posuere dui\r\n                    volutpat at. Vivamus condimentum porttitor ultricies.\r\n                    Quisque at metus sit amet ipsum convallis lacinia. Nulla\r\n                    elementum ligula eget velit viverra condimentum.\r\n                    Vestibulum pulvinar enim mattis pharetra tristique. Donec\r\n                    hendrerit vitae lorem at malesuada. Lorem ipsum dolor sit\r\n                    amet, consectetur adipiscing elit. Nulla a diam eu sem\r\n                    gravida ultrices. "
                      ),
                      _c("br"),
                      _vm._v(
                        " Nam consequat nunc neque, nec\r\n                    bibendum ante mollis nec. Cras porta ante a ex condimentum\r\n                    imperdiet. Cras vehicula velit in erat semper, sed\r\n                    bibendum ligula vehicula. Fusce hendrerit orci arcu, ut\r\n                    posuere dui volutpat at. Vivamus condimentum porttitor\r\n                    ultricies. Quisque at metus sit amet ipsum convallis\r\n                    lacinia. Nulla elementum ligula eget velit viverra\r\n                    condimentum. Vestibulum pulvinar enim mattis pharetra\r\n                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem\r\n                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a\r\n                    diam eu sem gravida ultrices. "
                      ),
                      _c("br"),
                      _vm._v(
                        " Nam consequat nunc\r\n                    neque, nec bibendum ante mollis nec. Cras porta ante a ex\r\n                    condimentum imperdiet. Cras vehicula velit in erat semper,\r\n                    sed bibendum ligula vehicula. Fusce hendrerit orci arcu,\r\n                    ut posuere dui volutpat at. Vivamus condimentum porttitor\r\n                    ultricies. Quisque at metus sit amet ipsum convallis\r\n                    lacinia. Nulla elementum ligula eget velit viverra\r\n                    condimentum. Vestibulum pulvinar enim mattis pharetra\r\n                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem\r\n                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a\r\n                    diam eu sem gravida ultrices. "
                      ),
                      _c("br"),
                      _vm._v(
                        " Nam consequat nunc\r\n                    neque, nec bibendum ante mollis nec. Cras porta ante a ex\r\n                    condimentum imperdiet. Cras vehicula velit in erat semper,\r\n                    sed bibendum ligula vehicula. Fusce hendrerit orci arcu,\r\n                    ut posuere dui volutpat at. Vivamus condimentum porttitor\r\n                    ultricies. Quisque at metus sit amet ipsum convallis\r\n                    lacinia. Nulla elementum ligula eget velit viverra\r\n                    condimentum. Vestibulum pulvinar enim mattis pharetra\r\n                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem\r\n                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a\r\n                    diam eu sem gravida ultrices. "
                      ),
                      _c("br"),
                      _vm._v(
                        " Nam consequat nunc\r\n                    neque, nec bibendum ante mollis nec. Cras porta ante a ex\r\n                    condimentum imperdiet. Cras vehicula velit in erat semper,\r\n                    sed bibendum ligula vehicula. Fusce hendrerit orci arcu,\r\n                    ut posuere dui volutpat at. Vivamus condimentum porttitor\r\n                    ultricies. Quisque at metus sit amet ipsum convallis\r\n                    lacinia. Nulla elementum ligula eget velit viverra\r\n                    condimentum. Vestibulum pulvinar enim mattis pharetra\r\n                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem\r\n                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a\r\n                    diam eu sem gravida ultrices. "
                      ),
                      _c("br"),
                      _vm._v(
                        " Nam consequat nunc\r\n                    neque, nec bibendum ante mollis nec. Cras porta ante a ex\r\n                    condimentum imperdiet. Cras vehicula velit in erat semper,\r\n                    sed bibendum ligula vehicula. Fusce hendrerit orci arcu,\r\n                    ut posuere dui volutpat at. Vivamus condimentum porttitor\r\n                    ultricies. Quisque at metus sit amet ipsum convallis\r\n                    lacinia. Nulla elementum ligula eget velit viverra\r\n                    condimentum. Vestibulum pulvinar enim mattis pharetra\r\n                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem\r\n                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a\r\n                    diam eu sem gravida ultrices. "
                      ),
                      _c("br"),
                      _vm._v(
                        " Nam consequat nunc\r\n                    neque, nec bibendum ante mollis nec. Cras porta ante a ex\r\n                    condimentum imperdiet. Cras vehicula velit in erat semper,\r\n                    sed bibendum ligula vehicula. Fusce hendrerit orci arcu,\r\n                    ut posuere dui volutpat at. Vivamus condimentum porttitor\r\n                    ultricies. Quisque at metus sit amet ipsum convallis\r\n                    lacinia. Nulla elementum ligula eget velit viverra\r\n                    condimentum. Vestibulum pulvinar enim mattis pharetra\r\n                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem\r\n                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a\r\n                    diam eu sem gravida ultrices. "
                      ),
                      _c("br"),
                      _vm._v(
                        " Nam consequat nunc\r\n                    neque, nec bibendum ante mollis nec. Cras porta ante a ex\r\n                    condimentum imperdiet. Cras vehicula velit in erat semper,\r\n                    sed bibendum ligula vehicula. Fusce hendrerit orci arcu,\r\n                    ut posuere dui volutpat at. Vivamus condimentum porttitor\r\n                    ultricies. Quisque at metus sit amet ipsum convallis\r\n                    lacinia. Nulla elementum ligula eget velit viverra\r\n                    condimentum. Vestibulum pulvinar enim mattis pharetra\r\n                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem\r\n                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a\r\n                    diam eu sem gravida ultrices. "
                      ),
                      _c("br"),
                      _vm._v(
                        " Nam consequat nunc\r\n                    neque, nec bibendum ante mollis nec. Cras porta ante a ex\r\n                    condimentum imperdiet. Cras vehicula velit in erat semper,\r\n                    sed bibendum ligula vehicula. Fusce hendrerit orci arcu,\r\n                    ut posuere dui volutpat at. Vivamus condimentum porttitor\r\n                    ultricies. Quisque at metus sit amet ipsum convallis\r\n                    lacinia. Nulla elementum ligula eget velit viverra\r\n                    condimentum. Vestibulum pulvinar enim mattis pharetra\r\n                    tristique. Donec hendrerit vitae lorem at malesuada. Lorem\r\n                    ipsum dolor sit amet, consectetur adipiscing elit. Nulla a\r\n                    diam eu sem gravida ultrices.\r\n                "
                      ),
                      _c(
                        "template",
                        { slot: "modal-footer" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-1",
                              attrs: { variant: "primary" },
                              on: {
                                click: function($event) {
                                  return _vm.somethingModal("modallong")
                                }
                              }
                            },
                            [_vm._v("Do Something")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "secondary" },
                              on: {
                                click: function($event) {
                                  return _vm.hideModal("modallong")
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          )
                        ],
                        1
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("modal.backdrop") }
                },
                [
                  _c("b-form-select", {
                    staticClass: "mb-2 mr-2",
                    attrs: { options: _vm.backdropOptions, plain: "" },
                    model: {
                      value: _vm.selectedBackdrop,
                      callback: function($$v) {
                        _vm.selectedBackdrop = $$v
                      },
                      expression: "selectedBackdrop"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modalbackdrop",
                          modifiers: { modalbackdrop: true }
                        }
                      ],
                      attrs: { variant: "outline-primary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("modal.launch-demo-modal")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      ref: "modalbackdrop",
                      attrs: {
                        id: "modalbackdrop",
                        title: _vm.$t("modal.modal-title"),
                        "hide-backdrop": _vm.selectedBackdrop == "false",
                        "no-close-on-backdrop":
                          _vm.selectedBackdrop == "false" ||
                          _vm.selectedBackdrop == "static"
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit,\r\n                sed do eiusmod tempor incididunt ut labore et dolore magna\r\n                aliqua. Ut enim ad minim veniam, quis nostrud exercitation\r\n                ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n                Duis aute irure dolor in reprehenderit in voluptate velit\r\n                esse cillum dolore eu fugiat nulla pariatur. Excepteur\r\n                sint occaecat cupidatat non proident, sunt in culpa qui\r\n                officia deserunt mollit anim id est laborum.\r\n                "
                      ),
                      _c(
                        "template",
                        { slot: "modal-footer" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-1",
                              attrs: { variant: "primary" },
                              on: {
                                click: function($event) {
                                  return _vm.somethingModal("modalbackdrop")
                                }
                              }
                            },
                            [_vm._v("Do Something")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "secondary" },
                              on: {
                                click: function($event) {
                                  return _vm.hideModal("modalbackdrop")
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          )
                        ],
                        1
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("modal.right-modal") }
                },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modalright",
                          modifiers: { modalright: true }
                        }
                      ],
                      attrs: { variant: "outline-primary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("modal.launch-right-modal")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      ref: "modalright",
                      staticClass: "modal-right",
                      attrs: {
                        id: "modalright",
                        title: _vm.$t("modal.modal-title")
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit,\r\n                sed do eiusmod tempor incididunt ut labore et dolore magna\r\n                aliqua. Ut enim ad minim veniam, quis nostrud exercitation\r\n                ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n                Duis aute irure dolor in reprehenderit in voluptate velit\r\n                esse cillum dolore eu fugiat nulla pariatur. Excepteur\r\n                sint occaecat cupidatat non proident, sunt in culpa qui\r\n                officia deserunt mollit anim id est laborum.\r\n                "
                      ),
                      _c(
                        "template",
                        { slot: "modal-footer" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-1",
                              attrs: { variant: "primary" },
                              on: {
                                click: function($event) {
                                  return _vm.somethingModal("modalright")
                                }
                              }
                            },
                            [_vm._v("Do Something")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "secondary" },
                              on: {
                                click: function($event) {
                                  return _vm.hideModal("modalright")
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          )
                        ],
                        1
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("modal.nested-modal") }
                },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modalnested",
                          modifiers: { modalnested: true }
                        }
                      ],
                      attrs: { variant: "outline-primary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("modal.launch-demo-modal")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      ref: "modalnested",
                      attrs: {
                        id: "modalnested",
                        title: _vm.$t("modal.modal-title")
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit,\r\n                sed do eiusmod tempor incididunt ut labore et dolore magna\r\n                aliqua. Ut enim ad minim veniam, quis nostrud exercitation\r\n                ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n                Duis aute irure dolor in reprehenderit in voluptate velit\r\n                esse cillum dolore eu fugiat nulla pariatur. Excepteur\r\n                sint occaecat cupidatat non proident, sunt in culpa qui\r\n                officia deserunt mollit anim id est laborum."
                      ),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center m-2" },
                        [
                          _c(
                            "b-btn",
                            {
                              directives: [
                                {
                                  name: "b-modal",
                                  rawName: "v-b-modal.modalnestedinline",
                                  modifiers: { modalnestedinline: true }
                                }
                              ],
                              attrs: { variant: "outline-primary" }
                            },
                            [_vm._v("Show Nested Modal")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "template",
                        { slot: "modal-footer" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-1",
                              attrs: { variant: "primary" },
                              on: {
                                click: function($event) {
                                  return _vm.somethingModal("modalnested")
                                }
                              }
                            },
                            [_vm._v("Do Something")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "secondary" },
                              on: {
                                click: function($event) {
                                  return _vm.hideModal("modalnested")
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          )
                        ],
                        1
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      ref: "modalnestedinline",
                      attrs: {
                        id: "modalnestedinline",
                        title: "Nested Modal title"
                      }
                    },
                    [
                      _vm._v("Stuff and things\r\n                "),
                      _c(
                        "template",
                        { slot: "modal-footer" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-1",
                              attrs: { variant: "primary" },
                              on: {
                                click: function($event) {
                                  return _vm.somethingModal("modalnestedinline")
                                }
                              }
                            },
                            [_vm._v("Done")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "secondary" },
                              on: {
                                click: function($event) {
                                  return _vm.hideModal("modalnestedinline")
                                }
                              }
                            },
                            [_vm._v("All Done")]
                          )
                        ],
                        1
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                { staticClass: "mb-4", attrs: { title: _vm.$t("modal.size") } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modallg",
                          modifiers: { modallg: true }
                        }
                      ],
                      staticClass: "mr-2 mb-2",
                      attrs: { variant: "outline-primary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("modal.launch-large-modal")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modalsm",
                          modifiers: { modalsm: true }
                        }
                      ],
                      staticClass: "mb-2",
                      attrs: { variant: "outline-primary" }
                    },
                    [_vm._v(_vm._s(_vm.$t("modal.launch-small-modal")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modallg",
                        size: "lg",
                        title: "Large Modal",
                        "hide-footer": ""
                      }
                    },
                    [_vm._v("\r\n                Hello Modal!\r\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modalsm",
                        size: "sm",
                        title: "Small Modal",
                        "hide-footer": ""
                      }
                    },
                    [_vm._v("\r\n                Hello Modal!\r\n            ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Navigation.vue?vue&type=template&id=0ea8c58d&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Navigation.vue?vue&type=template&id=0ea8c58d& ***!
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.navigation") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                { staticClass: "mb-4", attrs: { title: _vm.$t("nav.basic") } },
                [
                  _c(
                    "b-nav",
                    [
                      _c("b-nav-item", { attrs: { active: "" } }, [
                        _vm._v(_vm._s(_vm.$t("nav.active")))
                      ]),
                      _vm._v(" "),
                      _c("b-nav-item", [_vm._v(_vm._s(_vm.$t("nav.link")))]),
                      _vm._v(" "),
                      _c("b-nav-item", [
                        _vm._v(_vm._s(_vm.$t("nav.another-link")))
                      ]),
                      _vm._v(" "),
                      _c("b-nav-item", { attrs: { disabled: "" } }, [
                        _vm._v(_vm._s(_vm.$t("nav.disabled")))
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("nav.horizontal-alignment") }
                },
                [
                  _c(
                    "b-nav",
                    { staticClass: "justify-content-center" },
                    [
                      _c("b-nav-item", { attrs: { active: "" } }, [
                        _vm._v(_vm._s(_vm.$t("nav.active")))
                      ]),
                      _vm._v(" "),
                      _c("b-nav-item", [_vm._v(_vm._s(_vm.$t("nav.link")))]),
                      _vm._v(" "),
                      _c("b-nav-item", [
                        _vm._v(_vm._s(_vm.$t("nav.another-link")))
                      ]),
                      _vm._v(" "),
                      _c("b-nav-item", { attrs: { disabled: "" } }, [
                        _vm._v(_vm._s(_vm.$t("nav.disabled")))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-nav",
                    { staticClass: "justify-content-end" },
                    [
                      _c("b-nav-item", { attrs: { active: "" } }, [
                        _vm._v(_vm._s(_vm.$t("nav.active")))
                      ]),
                      _vm._v(" "),
                      _c("b-nav-item", [_vm._v(_vm._s(_vm.$t("nav.link")))]),
                      _vm._v(" "),
                      _c("b-nav-item", [
                        _vm._v(_vm._s(_vm.$t("nav.another-link")))
                      ]),
                      _vm._v(" "),
                      _c("b-nav-item", { attrs: { disabled: "" } }, [
                        _vm._v(_vm._s(_vm.$t("nav.disabled")))
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("nav.vertical-alignment") }
                },
                [
                  _c(
                    "b-nav",
                    { staticClass: "w-25", attrs: { vertical: "" } },
                    [
                      _c("b-nav-item", { attrs: { active: "" } }, [
                        _vm._v(_vm._s(_vm.$t("nav.active")))
                      ]),
                      _vm._v(" "),
                      _c("b-nav-item", [_vm._v(_vm._s(_vm.$t("nav.link")))]),
                      _vm._v(" "),
                      _c("b-nav-item", [
                        _vm._v(_vm._s(_vm.$t("nav.another-link")))
                      ]),
                      _vm._v(" "),
                      _c("b-nav-item", { attrs: { disabled: "" } }, [
                        _vm._v(_vm._s(_vm.$t("nav.disabled")))
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                { staticClass: "mb-4", attrs: { title: _vm.$t("nav.pills") } },
                [
                  _c(
                    "b-nav",
                    { attrs: { pills: "" } },
                    [
                      _c("b-nav-item", { attrs: { active: "" } }, [
                        _vm._v(_vm._s(_vm.$t("nav.active")))
                      ]),
                      _vm._v(" "),
                      _c("b-nav-item", [_vm._v(_vm._s(_vm.$t("nav.link")))]),
                      _vm._v(" "),
                      _c("b-nav-item", [
                        _vm._v(_vm._s(_vm.$t("nav.another-link")))
                      ]),
                      _vm._v(" "),
                      _c("b-nav-item", { attrs: { disabled: "" } }, [
                        _vm._v(_vm._s(_vm.$t("nav.disabled")))
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("nav.fill-justify") }
                },
                [
                  _c(
                    "b-nav",
                    { attrs: { fill: "", pills: "" } },
                    [
                      _c("b-nav-item", { attrs: { active: "" } }, [
                        _vm._v(_vm._s(_vm.$t("nav.active")))
                      ]),
                      _vm._v(" "),
                      _c("b-nav-item", [
                        _vm._v(_vm._s(_vm.$t("nav.longer-link")))
                      ]),
                      _vm._v(" "),
                      _c("b-nav-item", [_vm._v(_vm._s(_vm.$t("nav.link")))]),
                      _vm._v(" "),
                      _c("b-nav-item", { attrs: { disabled: "" } }, [
                        _vm._v(_vm._s(_vm.$t("nav.disabled")))
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("nav.pills-dropdowns") }
                },
                [
                  _c(
                    "b-nav",
                    { attrs: { pills: "" } },
                    [
                      _c(
                        "b-nav-item",
                        { staticClass: "mr-1", attrs: { active: "" } },
                        [_vm._v(_vm._s(_vm.$t("nav.active")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-nav-item-dropdown",
                        {
                          attrs: {
                            text: _vm.$t("nav.dropdown"),
                            "extra-toggle-classes": "nav-link-custom",
                            right: ""
                          }
                        },
                        [
                          _c("b-dropdown-header", [
                            _vm._v(_vm._s(_vm.$t("nav.header")))
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", { attrs: { disabled: "" } }, [
                            _vm._v(_vm._s(_vm.$t("nav.action")))
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("nav.another-action")))
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-divider"),
                          _vm._v(" "),
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("nav.another-action")))
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-nav-item", [_vm._v(_vm._s(_vm.$t("nav.link")))]),
                      _vm._v(" "),
                      _c("b-nav-item", [
                        _vm._v(_vm._s(_vm.$t("nav.another-link")))
                      ]),
                      _vm._v(" "),
                      _c("b-nav-item", { attrs: { disabled: "" } }, [
                        _vm._v(_vm._s(_vm.$t("nav.disabled")))
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("nav.pagination-basic") }
                },
                [
                  _c("b-pagination-nav", {
                    attrs: {
                      "number-of-pages": 3,
                      "link-gen": _vm.linkGen,
                      "per-page": 5
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "next-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-arrow-right" })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "prev-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-arrow-left" })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "first-text",
                        fn: function() {
                          return [
                            _c("i", {
                              staticClass: "simple-icon-control-start"
                            })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "last-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-control-end" })
                          ]
                        },
                        proxy: true
                      }
                    ]),
                    model: {
                      value: _vm.currentPage,
                      callback: function($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("nav.pagination-sizing") }
                },
                [
                  _c("h6", { staticClass: "mb-3" }, [
                    _vm._v(_vm._s(_vm.$t("nav.large")))
                  ]),
                  _vm._v(" "),
                  _c("b-pagination-nav", {
                    attrs: {
                      size: "lg",
                      "number-of-pages": 3,
                      "link-gen": _vm.linkGen,
                      "per-page": 5
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "next-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-arrow-right" })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "prev-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-arrow-left" })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "first-text",
                        fn: function() {
                          return [
                            _c("i", {
                              staticClass: "simple-icon-control-start"
                            })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "last-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-control-end" })
                          ]
                        },
                        proxy: true
                      }
                    ]),
                    model: {
                      value: _vm.currentPage,
                      callback: function($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage"
                    }
                  }),
                  _vm._v(" "),
                  _c("h6", { staticClass: "mb-3" }, [
                    _vm._v(_vm._s(_vm.$t("nav.small")))
                  ]),
                  _vm._v(" "),
                  _c("b-pagination-nav", {
                    attrs: {
                      size: "sm",
                      "number-of-pages": 3,
                      "link-gen": _vm.linkGen,
                      "per-page": 5
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "next-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-arrow-right" })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "prev-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-arrow-left" })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "first-text",
                        fn: function() {
                          return [
                            _c("i", {
                              staticClass: "simple-icon-control-start"
                            })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "last-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-control-end" })
                          ]
                        },
                        proxy: true
                      }
                    ]),
                    model: {
                      value: _vm.currentPage,
                      callback: function($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("nav.pagination-alignment") }
                },
                [
                  _c("h6", { staticClass: "mb-3" }, [
                    _vm._v(_vm._s(_vm.$t("nav.center")))
                  ]),
                  _vm._v(" "),
                  _c("b-pagination-nav", {
                    attrs: {
                      size: "sm",
                      align: "center",
                      "number-of-pages": 3,
                      "link-gen": _vm.linkGen,
                      "per-page": 5
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "next-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-arrow-right" })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "prev-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-arrow-left" })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "first-text",
                        fn: function() {
                          return [
                            _c("i", {
                              staticClass: "simple-icon-control-start"
                            })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "last-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-control-end" })
                          ]
                        },
                        proxy: true
                      }
                    ]),
                    model: {
                      value: _vm.currentPage,
                      callback: function($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage"
                    }
                  }),
                  _vm._v(" "),
                  _c("h6", { staticClass: "mb-3" }, [
                    _vm._v(_vm._s(_vm.$t("nav.right")))
                  ]),
                  _vm._v(" "),
                  _c("b-pagination-nav", {
                    attrs: {
                      size: "sm",
                      align: "right",
                      "number-of-pages": 3,
                      "link-gen": _vm.linkGen,
                      "per-page": 5
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "next-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-arrow-right" })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "prev-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-arrow-left" })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "first-text",
                        fn: function() {
                          return [
                            _c("i", {
                              staticClass: "simple-icon-control-start"
                            })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "last-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-control-end" })
                          ]
                        },
                        proxy: true
                      }
                    ]),
                    model: {
                      value: _vm.currentPage,
                      callback: function($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("nav.breadcrumb-basic") }
                },
                [
                  _c("b-breadcrumb", {
                    attrs: { items: _vm.breadcrumbItems.slice(0, 1) }
                  }),
                  _vm._v(" "),
                  _c("b-breadcrumb", {
                    attrs: { items: _vm.breadcrumbItems.slice(0, 2) }
                  }),
                  _vm._v(" "),
                  _c("b-breadcrumb", { attrs: { items: _vm.breadcrumbItems } })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/PopoverTooltip.vue?vue&type=template&id=0dc5c397&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/PopoverTooltip.vue?vue&type=template&id=0dc5c397& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.popover-tooltip") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("popover-tooltip.popover") }
                },
                _vm._l(_vm.popovers, function(item, index) {
                  return _c(
                    "span",
                    { key: index },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1 mb-1",
                          attrs: {
                            id: "pop-" + item.placement,
                            variant: "secondary"
                          }
                        },
                        [_vm._v(_vm._s(item.text))]
                      ),
                      _vm._v(" "),
                      _c("b-popover", {
                        attrs: {
                          target: "pop-" + item.placement,
                          placement: item.placement,
                          content: item.body
                        }
                      })
                    ],
                    1
                  )
                }),
                0
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("popover-tooltip.tooltip") }
                },
                _vm._l(_vm.tooltips, function(item, index) {
                  return _c(
                    "span",
                    { key: index },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1 mb-1",
                          attrs: {
                            id: "tool-" + item.placement,
                            variant: "secondary"
                          }
                        },
                        [_vm._v(_vm._s(item.text))]
                      ),
                      _vm._v(" "),
                      _c("b-tooltip", {
                        attrs: {
                          target: "tool-" + item.placement,
                          placement: item.placement,
                          title: item.body
                        }
                      })
                    ],
                    1
                  )
                }),
                0
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Sortable.vue?vue&type=template&id=6adbf9b1&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Sortable.vue?vue&type=template&id=6adbf9b1& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.sortable") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("h5", { staticClass: "mb-4 card-title" }, [
                _vm._v(_vm._s(_vm.$t("sortable.columns")))
              ]),
              _vm._v(" "),
              _c(
                "draggable",
                { staticClass: "row icon-cards-row mb-2" },
                [
                  _c(
                    "b-colxx",
                    { attrs: { xxs: "6", sm: "4", md: "3", lg: "2" } },
                    [
                      _c("icon-card", {
                        attrs: {
                          title: _vm.$t("dashboards.pending-orders"),
                          icon: "iconsminds-clock",
                          value: 14
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { attrs: { xxs: "6", sm: "4", md: "3", lg: "2" } },
                    [
                      _c("icon-card", {
                        attrs: {
                          title: _vm.$t("dashboards.completed-orders"),
                          icon: "iconsminds-basket-coins",
                          value: 32
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { attrs: { xxs: "6", sm: "4", md: "3", lg: "2" } },
                    [
                      _c("icon-card", {
                        attrs: {
                          title: _vm.$t("dashboards.refund-requests"),
                          icon: "iconsminds-arrow-refresh",
                          value: 74
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { attrs: { xxs: "6", sm: "4", md: "3", lg: "2" } },
                    [
                      _c("icon-card", {
                        attrs: {
                          title: _vm.$t("dashboards.new-comments"),
                          icon: "iconsminds-mail-read",
                          value: 25
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-colxx",
                    { attrs: { xxs: "12" } },
                    [
                      _c("h5", { staticClass: "mb-4 card-title" }, [
                        _vm._v(_vm._s(_vm.$t("sortable.basic")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-card",
                        { staticClass: "mb-4" },
                        [
                          _c(
                            "draggable",
                            {
                              staticClass: "list-unstyled",
                              attrs: { type: "ul" }
                            },
                            [
                              _c("li", [_c("p", [_vm._v("1. Angel Cake")])]),
                              _vm._v(" "),
                              _c("li", [_c("p", [_vm._v("2. Bibingka")])]),
                              _vm._v(" "),
                              _c("li", [_c("p", [_vm._v("3. Cremeschnitte")])]),
                              _vm._v(" "),
                              _c("li", [_c("p", [_vm._v("4. Faworki")])])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-colxx",
                    { attrs: { xxs: "12" } },
                    [
                      _c("h5", { staticClass: "mb-4 card-title" }, [
                        _vm._v(_vm._s(_vm.$t("sortable.basic")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-card",
                        { staticClass: "mb-4" },
                        [
                          _c(
                            "draggable",
                            {
                              staticClass: "list-unstyled",
                              attrs: {
                                type: "ul",
                                options: { handle: ".handle" }
                              }
                            },
                            [
                              _c("li", [
                                _c("p", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "badge badge-pill badge-secondary handle mr-1"
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "simple-icon-cursor-move"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Angel Cake")])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _c("p", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "badge badge-pill badge-secondary handle mr-1"
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "simple-icon-cursor-move"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Bibingka")])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _c("p", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "badge badge-pill badge-secondary handle mr-1"
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "simple-icon-cursor-move"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Cremeschnitte")])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _c("p", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "badge badge-pill badge-secondary handle mr-1"
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "simple-icon-cursor-move"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Faworki")])
                                ])
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Tables.vue?vue&type=template&id=6f47fc44&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/Tables.vue?vue&type=template&id=6f47fc44& ***!
  \************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.tables") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "mb-5" },
        [
          _c("b-colxx", { attrs: { xxs: "12" } }, [
            _c("h3", { staticClass: "mb-4" }, [
              _vm._v(_vm._s(_vm.$t("table.bootstrap-tables")))
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("table.bootstrap-basic") }
                },
                [_c("b-table", { attrs: { items: _vm.items } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("table.bootstrap-striped") }
                },
                [_c("b-table", { attrs: { striped: "", items: _vm.items } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("table.bootstrap-bordered") }
                },
                [_c("b-table", { attrs: { bordered: "", items: _vm.items } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("table.bootstrap-borderless") }
                },
                [
                  _c("b-table", { attrs: { borderless: "", items: _vm.items } })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("table.bootstrap-hoverable") }
                },
                [_c("b-table", { attrs: { hover: "", items: _vm.items } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("table.bootstrap-responsive") }
                },
                [
                  _c("b-table", { attrs: { responsive: "", items: _vm.items } })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("table.bootstrap-custom") }
                },
                [
                  _c("b-table", {
                    ref: "custom-table",
                    staticClass: "vuetable",
                    attrs: {
                      "sort-by": "title",
                      "sort-desc.sync": "false",
                      selectable: "",
                      "select-mode": _vm.bootstrapTable.selectMode,
                      "current-page": _vm.currentPage,
                      selectedVariant: "primary",
                      fields: _vm.bootstrapTable.fields,
                      items: _vm.dataProvider
                    },
                    on: { "row-selected": _vm.rowSelected },
                    scopedSlots: _vm._u([
                      {
                        key: "status",
                        fn: function(data) {
                          return [
                            _c(
                              "b-badge",
                              {
                                staticClass: "mb-1",
                                attrs: { variant: data.item.statusColor }
                              },
                              [_vm._v(_vm._s(data.value))]
                            )
                          ]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("b-pagination", {
                    attrs: {
                      size: "sm",
                      align: "center",
                      "total-rows": _vm.totalRows,
                      "per-page": _vm.perPage
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "next-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-arrow-right" })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "prev-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-arrow-left" })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "first-text",
                        fn: function() {
                          return [
                            _c("i", {
                              staticClass: "simple-icon-control-start"
                            })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "last-text",
                        fn: function() {
                          return [
                            _c("i", { staticClass: "simple-icon-control-end" })
                          ]
                        },
                        proxy: true
                      }
                    ]),
                    model: {
                      value: _vm.currentPage,
                      callback: function($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage"
                    }
                  }),
                  _vm._v(" "),
                  _vm.bootstrapTable.selected.length > 0
                    ? _c(
                        "b-alert",
                        { attrs: { show: "", variant: "primary" } },
                        [
                          _vm._v("Selected Items :"),
                          _c("br"),
                          _c("pre", [
                            _vm._v(_vm._s(_vm.bootstrapTable.selected))
                          ])
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-colxx", { attrs: { xxs: "12" } }, [
            _c("h3", { staticClass: "mb-4" }, [
              _vm._v(_vm._s(_vm.$t("table.vue-tables")))
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("table.vue-pagination") }
                },
                [
                  _c("vuetable", {
                    ref: "vuetable",
                    attrs: {
                      "api-url": _vm.vuetableItems.apiUrl,
                      fields: _vm.vuetableItems.fields,
                      "per-page": 5,
                      "pagination-path": ""
                    },
                    on: { "vuetable:pagination-data": _vm.onPaginationData }
                  }),
                  _vm._v(" "),
                  _c("vuetable-pagination-bootstrap", {
                    ref: "pagination",
                    on: { "vuetable-pagination:change-page": _vm.onChangePage }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { xxs: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: { title: _vm.$t("table.vue-scrollable") }
                },
                [
                  _c("vuetable", {
                    ref: "vuetable-scrollable",
                    attrs: {
                      "table-height": "360px",
                      "api-url": _vm.vuetableItems.apiUrl,
                      fields: _vm.vuetableItems.fields,
                      "per-page": 20,
                      "pagination-path": ""
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/index.vue?vue&type=template&id=40a5c709&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/ui/index.vue?vue&type=template&id=40a5c709& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("router-view")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/components/Charts/Area.vue":
/*!**************************************************!*\
  !*** ./resources/src/components/Charts/Area.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Area_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Area.vue?vue&type=script&lang=js& */ "./resources/src/components/Charts/Area.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Area_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Charts/Area.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Charts/Area.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/src/components/Charts/Area.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Area_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Area.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/Area.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Area_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Charts/Bar.vue":
/*!*************************************************!*\
  !*** ./resources/src/components/Charts/Bar.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bar.vue?vue&type=script&lang=js& */ "./resources/src/components/Charts/Bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Charts/Bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Charts/Bar.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/src/components/Charts/Bar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Bar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/Bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Charts/BarShadow.vue":
/*!*******************************************************!*\
  !*** ./resources/src/components/Charts/BarShadow.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarShadow.vue?vue&type=script&lang=js& */ "./resources/src/components/Charts/BarShadow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _BarShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Charts/BarShadow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Charts/BarShadow.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/src/components/Charts/BarShadow.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BarShadow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/BarShadow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Charts/Doughnut.vue":
/*!******************************************************!*\
  !*** ./resources/src/components/Charts/Doughnut.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Doughnut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Doughnut.vue?vue&type=script&lang=js& */ "./resources/src/components/Charts/Doughnut.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Doughnut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Charts/Doughnut.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Charts/Doughnut.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/src/components/Charts/Doughnut.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Doughnut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Doughnut.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/Doughnut.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Doughnut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Charts/Line.vue":
/*!**************************************************!*\
  !*** ./resources/src/components/Charts/Line.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Line_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line.vue?vue&type=script&lang=js& */ "./resources/src/components/Charts/Line.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Line_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Charts/Line.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Charts/Line.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/src/components/Charts/Line.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Line_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Line.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/Line.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Line_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Charts/Pie.vue":
/*!*************************************************!*\
  !*** ./resources/src/components/Charts/Pie.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pie.vue?vue&type=script&lang=js& */ "./resources/src/components/Charts/Pie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Charts/Pie.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Charts/Pie.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/src/components/Charts/Pie.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pie.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/Pie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Charts/PieShadow.vue":
/*!*******************************************************!*\
  !*** ./resources/src/components/Charts/PieShadow.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PieShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PieShadow.vue?vue&type=script&lang=js& */ "./resources/src/components/Charts/PieShadow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _PieShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Charts/PieShadow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Charts/PieShadow.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/src/components/Charts/PieShadow.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PieShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PieShadow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/PieShadow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PieShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Charts/PolarArea.vue":
/*!*******************************************************!*\
  !*** ./resources/src/components/Charts/PolarArea.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PolarArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PolarArea.vue?vue&type=script&lang=js& */ "./resources/src/components/Charts/PolarArea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _PolarArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Charts/PolarArea.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Charts/PolarArea.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/src/components/Charts/PolarArea.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PolarArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PolarArea.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/PolarArea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PolarArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Charts/Radar.vue":
/*!***************************************************!*\
  !*** ./resources/src/components/Charts/Radar.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Radar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Radar.vue?vue&type=script&lang=js& */ "./resources/src/components/Charts/Radar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Radar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Charts/Radar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Charts/Radar.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/src/components/Charts/Radar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Radar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Radar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/Radar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Radar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Charts/Scatter.vue":
/*!*****************************************************!*\
  !*** ./resources/src/components/Charts/Scatter.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scatter.vue?vue&type=script&lang=js& */ "./resources/src/components/Charts/Scatter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Scatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Charts/Scatter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Charts/Scatter.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/src/components/Charts/Scatter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Scatter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/Scatter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Charts/ScatterShadow.vue":
/*!***********************************************************!*\
  !*** ./resources/src/components/Charts/ScatterShadow.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScatterShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScatterShadow.vue?vue&type=script&lang=js& */ "./resources/src/components/Charts/ScatterShadow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ScatterShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Charts/ScatterShadow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Charts/ScatterShadow.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/src/components/Charts/ScatterShadow.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScatterShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ScatterShadow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/ScatterShadow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScatterShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Common/StateButton.vue":
/*!*********************************************************!*\
  !*** ./resources/src/components/Common/StateButton.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StateButton_vue_vue_type_template_id_9f0fe2b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateButton.vue?vue&type=template&id=9f0fe2b6& */ "./resources/src/components/Common/StateButton.vue?vue&type=template&id=9f0fe2b6&");
/* harmony import */ var _StateButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StateButton.vue?vue&type=script&lang=js& */ "./resources/src/components/Common/StateButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StateButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StateButton_vue_vue_type_template_id_9f0fe2b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StateButton_vue_vue_type_template_id_9f0fe2b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Common/StateButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Common/StateButton.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/src/components/Common/StateButton.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StateButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StateButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Common/StateButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StateButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Common/StateButton.vue?vue&type=template&id=9f0fe2b6&":
/*!****************************************************************************************!*\
  !*** ./resources/src/components/Common/StateButton.vue?vue&type=template&id=9f0fe2b6& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StateButton_vue_vue_type_template_id_9f0fe2b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StateButton.vue?vue&type=template&id=9f0fe2b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Common/StateButton.vue?vue&type=template&id=9f0fe2b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StateButton_vue_vue_type_template_id_9f0fe2b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StateButton_vue_vue_type_template_id_9f0fe2b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/Form/InputTag.vue":
/*!****************************************************!*\
  !*** ./resources/src/components/Form/InputTag.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputTag_vue_vue_type_template_id_797b2bb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputTag.vue?vue&type=template&id=797b2bb6& */ "./resources/src/components/Form/InputTag.vue?vue&type=template&id=797b2bb6&");
/* harmony import */ var _InputTag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputTag.vue?vue&type=script&lang=js& */ "./resources/src/components/Form/InputTag.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _InputTag_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputTag.vue?vue&type=style&index=0&lang=css& */ "./resources/src/components/Form/InputTag.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InputTag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputTag_vue_vue_type_template_id_797b2bb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputTag_vue_vue_type_template_id_797b2bb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Form/InputTag.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Form/InputTag.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/src/components/Form/InputTag.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputTag.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Form/InputTag.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Form/InputTag.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/src/components/Form/InputTag.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputTag.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Form/InputTag.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/src/components/Form/InputTag.vue?vue&type=template&id=797b2bb6&":
/*!***********************************************************************************!*\
  !*** ./resources/src/components/Form/InputTag.vue?vue&type=template&id=797b2bb6& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_template_id_797b2bb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputTag.vue?vue&type=template&id=797b2bb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Form/InputTag.vue?vue&type=template&id=797b2bb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_template_id_797b2bb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTag_vue_vue_type_template_id_797b2bb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/data/icons.js":
/*!*************************************!*\
  !*** ./resources/src/data/icons.js ***!
  \*************************************/
/*! exports provided: simplelineicons, iconsmind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplelineicons", function() { return simplelineicons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconsmind", function() { return iconsmind; });
var simplelineicons = ['simple-icon-user', 'simple-icon-people', 'simple-icon-user-female', 'simple-icon-user-follow', 'simple-icon-user-following', 'simple-icon-user-unfollow', 'simple-icon-login', 'simple-icon-logout', 'simple-icon-emotsmile', 'simple-icon-phone', 'simple-icon-call-end', 'simple-icon-call-in', 'simple-icon-call-out', 'simple-icon-map', 'simple-icon-location-pin', 'simple-icon-direction', 'simple-icon-directions', 'simple-icon-compass', 'simple-icon-layers', 'simple-icon-menu', 'simple-icon-list', 'simple-icon-options-vertical', 'simple-icon-options', 'simple-icon-arrow-down', 'simple-icon-arrow-left', 'simple-icon-arrow-right', 'simple-icon-arrow-up', 'simple-icon-arrow-up-circle', 'simple-icon-arrow-left-circle', 'simple-icon-arrow-right-circle', 'simple-icon-arrow-down-circle', 'simple-icon-check', 'simple-icon-clock', 'simple-icon-plus', 'simple-icon-minus', 'simple-icon-close', 'simple-icon-event', 'simple-icon-exclamation', 'simple-icon-organization', 'simple-icon-trophy', 'simple-icon-screen-smartphone', 'simple-icon-screen-desktop', 'simple-icon-plane', 'simple-icon-notebook', 'simple-icon-mustache', 'simple-icon-mouse', 'simple-icon-magnet', 'simple-icon-energy', 'simple-icon-disc', 'simple-icon-cursor', 'simple-icon-cursor-move', 'simple-icon-crop', 'simple-icon-chemistry', 'simple-icon-speedometer', 'simple-icon-shield', 'simple-icon-screen-tablet', 'simple-icon-magic-wand', 'simple-icon-hourglass', 'simple-icon-graduation', 'simple-icon-ghost', 'simple-icon-game-controller', 'simple-icon-fire', 'simple-icon-eyeglass', 'simple-icon-envelope-open', 'simple-icon-envelope-letter', 'simple-icon-bell', 'simple-icon-badge', 'simple-icon-anchor', 'simple-icon-wallet', 'simple-icon-vector', 'simple-icon-speech', 'simple-icon-puzzle', 'simple-icon-printer', 'simple-icon-present', 'simple-icon-playlist', 'simple-icon-pin', 'simple-icon-picture', 'simple-icon-handbag', 'simple-icon-globe-alt', 'simple-icon-globe', 'simple-icon-folder-alt', 'simple-icon-folder', 'simple-icon-film', 'simple-icon-feed', 'simple-icon-drop', 'simple-icon-drawer', 'simple-icon-docs', 'simple-icon-doc', 'simple-icon-diamond', 'simple-icon-cup', 'simple-icon-calculator', 'simple-icon-bubbles', 'simple-icon-briefcase', 'simple-icon-book-open', 'simple-icon-basket-loaded', 'simple-icon-basket', 'simple-icon-bag', 'simple-icon-action-undo', 'simple-icon-action-redo', 'simple-icon-wrench', 'simple-icon-umbrella', 'simple-icon-trash', 'simple-icon-tag', 'simple-icon-support', 'simple-icon-frame', 'simple-icon-size-fullscreen', 'simple-icon-size-actual', 'simple-icon-shuffle', 'simple-icon-share-alt', 'simple-icon-share', 'simple-icon-rocket', 'simple-icon-question', 'simple-icon-pie-chart', 'simple-icon-pencil', 'simple-icon-note', 'simple-icon-loop', 'simple-icon-home', 'simple-icon-grid', 'simple-icon-graph', 'simple-icon-microphone', 'simple-icon-music-tone-alt', 'simple-icon-music-tone', 'simple-icon-earphones-alt', 'simple-icon-earphones', 'simple-icon-equalizer', 'simple-icon-like', 'simple-icon-dislike', 'simple-icon-control-start', 'simple-icon-control-rewind', 'simple-icon-control-play', 'simple-icon-control-pause', 'simple-icon-control-forward', 'simple-icon-control-end', 'simple-icon-volume-1', 'simple-icon-volume-2', 'simple-icon-volume-off', 'simple-icon-calendar', 'simple-icon-bulb', 'simple-icon-chart', 'simple-icon-ban', 'simple-icon-bubble', 'simple-icon-camrecorder', 'simple-icon-camera', 'simple-icon-cloud-download', 'simple-icon-cloud-upload', 'simple-icon-envelope', 'simple-icon-eye', 'simple-icon-flag', 'simple-icon-heart', 'simple-icon-info', 'simple-icon-key', 'simple-icon-link', 'simple-icon-lock', 'simple-icon-lock-open', 'simple-icon-magnifier', 'simple-icon-magnifier-add', 'simple-icon-magnifier-remove', 'simple-icon-paper-clip', 'simple-icon-paper-plane', 'simple-icon-power', 'simple-icon-refresh', 'simple-icon-reload', 'simple-icon-settings', 'simple-icon-star', 'simple-icon-symbol-female', 'simple-icon-symbol-male', 'simple-icon-target', 'simple-icon-credit-card', 'simple-icon-paypal', 'simple-icon-social-tumblr', 'simple-icon-social-twitter', 'simple-icon-social-facebook', 'simple-icon-social-instagram', 'simple-icon-social-linkedin', 'simple-icon-social-pinterest', 'simple-icon-social-github', 'simple-icon-social-google', 'simple-icon-social-reddit', 'simple-icon-social-skype', 'simple-icon-social-dribbble', 'simple-icon-social-behance', 'simple-icon-social-foursqare', 'simple-icon-social-soundcloud', 'simple-icon-social-spotify', 'simple-icon-social-stumbleupon', 'simple-icon-social-youtube', 'simple-icon-social-dropbox', 'simple-icon-social-vkontakte', 'simple-icon-social-steam'];
var iconsmind = [{
  'title': 'Alignment & Paragraph',
  'icons': ['iconsminds-add-space-after-paragraph', 'iconsminds-add-space-before-paragraph', 'iconsminds-align-center', 'iconsminds-align-justify-all', 'iconsminds-align-justify-center', 'iconsminds-align-justify-left', 'iconsminds-align-justify-right', 'iconsminds-align-left', 'iconsminds-align-right', 'iconsminds-decrase-inedit', 'iconsminds-increase-inedit', 'iconsminds-indent-first-line', 'iconsminds-indent-left-margin', 'iconsminds-indent-right-margin', 'iconsminds-line-spacing']
}, {
  'title': 'Arrow View',
  'icons': ['iconsminds-arrow-fork', 'iconsminds-arrow-from', 'iconsminds-arrow-inside-45', 'iconsminds-arrow-inside-gap-45', 'iconsminds-arrow-inside-gap', 'iconsminds-arrow-inside', 'iconsminds-arrow-into', 'iconsminds-arrow-junction', 'iconsminds-arrow-loop', 'iconsminds-arrow-merge', 'iconsminds-arrow-mix', 'iconsminds-arrow-out-left', 'iconsminds-arrow-out-right', 'iconsminds-arrow-outside-45', 'iconsminds-arrow-outside-gap-45', 'iconsminds-arrow-outside-gap', 'iconsminds-arrow-outside', 'iconsminds-arrow-over', 'iconsminds-arrow-shuffle', 'iconsminds-arrow-squiggly', 'iconsminds-arrow-through', 'iconsminds-arrow-to', 'iconsminds-double-circle', 'iconsminds-full-view-2', 'iconsminds-full-view', 'iconsminds-maximize', 'iconsminds-minimize', 'iconsminds-resize', 'iconsminds-three-arrow-fork', 'iconsminds-view-height', 'iconsminds-view-width', 'iconsminds-arrow-around', 'iconsminds-arrow-barrier', 'iconsminds-arrow-circle', 'iconsminds-arrow-cross']
}, {
  'title': 'Arrows',
  'icons': ['iconsminds-arrow-back-2', 'iconsminds-arrow-back-3', 'iconsminds-arrow-back', 'iconsminds-arrow-down-2', 'iconsminds-arrow-down-3', 'iconsminds-arrow-down-in-circle', 'iconsminds-arrow-down', 'iconsminds-arrow-forward-2', 'iconsminds-arrow-forward', 'iconsminds-arrow-left-2', 'iconsminds-arrow-left-in-circle', 'iconsminds-arrow-left', 'iconsminds-arrow-next', 'iconsminds-arrow-refresh-2', 'iconsminds-arrow-refresh', 'iconsminds-arrow-right-2', 'iconsminds-arrow-right-in-circle', 'iconsminds-arrow-right', 'iconsminds-arrow-turn-left', 'iconsminds-arrow-turn-right', 'iconsminds-arrow-up-2', 'iconsminds-arrow-up-3', 'iconsminds-arrow-up-in-circle', 'iconsminds-arrow-up', 'iconsminds-arrow-x-left', 'iconsminds-arrow-x-right', 'iconsminds-bottom-to-top', 'iconsminds-down', 'iconsminds-down-2', 'iconsminds-down-3', 'iconsminds-download', 'iconsminds-end', 'iconsminds-fit-to-2', 'iconsminds-fit-to', 'iconsminds-full-screen-2', 'iconsminds-full-screen', 'iconsminds-go-bottom', 'iconsminds-go-top', 'iconsminds-left---right-3', 'iconsminds-left---right', 'iconsminds-left', 'iconsminds-left-2', 'iconsminds-left-3', 'iconsminds-left-to-right', 'iconsminds-loop', 'iconsminds-navigate-end', 'iconsminds-navigat-start', 'iconsminds-reload', 'iconsminds-reload-2', 'iconsminds-repeat', 'iconsminds-repeat-2', 'iconsminds-repeat-3', 'iconsminds-repeat-4', 'iconsminds-right', 'iconsminds-right-2', 'iconsminds-right-3', 'iconsminds-right-to-left', 'iconsminds-shuffle', 'iconsminds-shuffle-2', 'iconsminds-start', 'iconsminds-sync', 'iconsminds-to-bottom-2', 'iconsminds-to-bottom', 'iconsminds-to-left', 'iconsminds-top-to-bottom', 'iconsminds-to-right', 'iconsminds-to-top-2', 'iconsminds-to-top', 'iconsminds-triangle-arrow-down', 'iconsminds-triangle-arrow-left', 'iconsminds-triangle-arrow-right', 'iconsminds-triangle-arrow-up', 'iconsminds-turn-down-2', 'iconsminds-turn-down-from-left', 'iconsminds-turn-down-from-right', 'iconsminds-turn-down', 'iconsminds-turn-left-3', 'iconsminds-turn-left', 'iconsminds-turn-right-3', 'iconsminds-turn-right', 'iconsminds-turn-up-2', 'iconsminds-turn-up', 'iconsminds-up---down-3', 'iconsminds-up---down', 'iconsminds-up', 'iconsminds-up-2', 'iconsminds-up-3', 'iconsminds-upload']
}, {
  'title': 'Basic',
  'icons': ['iconsminds-billing', 'iconsminds-binocular', 'iconsminds-bone', 'iconsminds-box-close', 'iconsminds-box-with-folders', 'iconsminds-brush', 'iconsminds-bucket', 'iconsminds-camera-3', 'iconsminds-camera-4', 'iconsminds-candle', 'iconsminds-candy', 'iconsminds-chair', 'iconsminds-control', 'iconsminds-control-2', 'iconsminds-crop-2', 'iconsminds-crown-2', 'iconsminds-dashboard', 'iconsminds-data-center', 'iconsminds-data-cloud', 'iconsminds-data-download', 'iconsminds-data-storage', 'iconsminds-delete-file', 'iconsminds-dice', 'iconsminds-drill', 'iconsminds-duplicate-layer', 'iconsminds-electricity', 'iconsminds-factory', 'iconsminds-feather', 'iconsminds-file', 'iconsminds-file-clipboard-file---text', 'iconsminds-file-clipboard', 'iconsminds-file-copy', 'iconsminds-file-edit', 'iconsminds-file-horizontal', 'iconsminds-files', 'iconsminds-file-zip', 'iconsminds-filter-2', 'iconsminds-flash-2', 'iconsminds-folder', 'iconsminds-folder-add--', 'iconsminds-folder-block', 'iconsminds-folder-close', 'iconsminds-folder-cloud', 'iconsminds-folder-delete', 'iconsminds-folder-edit', 'iconsminds-folder-open', 'iconsminds-folders', 'iconsminds-folder-zip', 'iconsminds-funny-bicycle', 'iconsminds-gas-pump', 'iconsminds-gear', 'iconsminds-gear-2', 'iconsminds-gears', 'iconsminds-gift-box', 'iconsminds-grave', 'iconsminds-headphone', 'iconsminds-headset', 'iconsminds-hipster-men', 'iconsminds-hub', 'iconsminds-idea', 'iconsminds-information', 'iconsminds-key', 'iconsminds-knife', 'iconsminds-lantern', 'iconsminds-layer-backward', 'iconsminds-layer-forward', 'iconsminds-library', 'iconsminds-light-bulb-2', 'iconsminds-loading', 'iconsminds-loading-2', 'iconsminds-loading-3', 'iconsminds-magic-wand', 'iconsminds-magnifi-glass--', 'iconsminds-magnifi-glass', 'iconsminds-memory-card-2', 'iconsminds-mine', 'iconsminds-mustache-2', 'iconsminds-office-lamp', 'iconsminds-old-sticky-2', 'iconsminds-on-off', 'iconsminds-on-off-2', 'iconsminds-on-off-3', 'iconsminds-palette', 'iconsminds-paper', 'iconsminds-pen', 'iconsminds-photo', 'iconsminds-photo-album-2', 'iconsminds-power-station', 'iconsminds-preview', 'iconsminds-pricing', 'iconsminds-profile', 'iconsminds-project', 'iconsminds-puzzle', 'iconsminds-refinery', 'iconsminds-remove-file', 'iconsminds-rename', 'iconsminds-repair', 'iconsminds-ruler', 'iconsminds-save', 'iconsminds-scissor', 'iconsminds-scroller', 'iconsminds-scroller-2', 'iconsminds-share', 'iconsminds-smoking-pipe', 'iconsminds-solar', 'iconsminds-statistic', 'iconsminds-suitcase', 'iconsminds-support', 'iconsminds-switch', 'iconsminds-tripod-with-camera', 'iconsminds-upgrade', 'iconsminds-user', 'iconsminds-windmill', 'iconsminds-witch-hat', 'iconsminds-wrench', 'iconsminds-add-file', 'iconsminds-affiliate', 'iconsminds-anchor', 'iconsminds-balloon', 'iconsminds-beard-3', 'iconsminds-bicycle', 'iconsminds-big-data', 'iconsminds-printer', 'iconsminds-sheep', 'iconsminds-cow', 'iconsminds-dog', 'iconsminds-deer', 'iconsminds-pantone', 'iconsminds-digital-drawing', 'iconsminds-trophy-2', 'iconsminds-life-safer', 'iconsminds-usb', 'iconsminds-flowerpot']
}, {
  'title': 'Buildings & Landmarks',
  'icons': ['iconsminds-eifel-tower', 'iconsminds-el-castillo', 'iconsminds-embassy', 'iconsminds-empire-state-building', 'iconsminds-factory-1', 'iconsminds-fire-staion', 'iconsminds-home', 'iconsminds-home-3', 'iconsminds-home-4', 'iconsminds-hotel', 'iconsminds-japanese-gate', 'iconsminds-leaning-tower', 'iconsminds-lighthouse', 'iconsminds-museum', 'iconsminds-office', 'iconsminds-opera-house', 'iconsminds-piramids', 'iconsminds-police-station', 'iconsminds-post-office', 'iconsminds-prater', 'iconsminds-roof', 'iconsminds-space-needle', 'iconsminds-the-white-house', 'iconsminds-tower', 'iconsminds-bank', 'iconsminds-berlin-tower', 'iconsminds-big-bang', 'iconsminds-building', 'iconsminds-castle', 'iconsminds-chinese-temple', 'iconsminds-chrysler-building', 'iconsminds-city-hall', 'iconsminds-clothing-store', 'iconsminds-colosseum', 'iconsminds-column', 'iconsminds-taj-mahal']
}, {
  'title': 'Business & Finance',
  'icons': ['iconsminds-coins', 'iconsminds-coins-2', 'iconsminds-diamond', 'iconsminds-dollar', 'iconsminds-dollar-sign-2', 'iconsminds-euro', 'iconsminds-euro-sign-2', 'iconsminds-financial', 'iconsminds-handshake', 'iconsminds-pie-chart-3', 'iconsminds-pie-chart', 'iconsminds-pound', 'iconsminds-pound-sign-2', 'iconsminds-safe-box', 'iconsminds-wallet', 'iconsminds-bar-chart-4', 'iconsminds-calendar-1', 'iconsminds-calendar-4', 'iconsminds-line-chart-1', 'iconsminds-line-chart-3']
}, {
  'title': 'Clothes & Accesories',
  'icons': ['iconsminds-jeans', 'iconsminds-sunglasses-w-3', 'iconsminds-tie', 'iconsminds-t-shirt', 'iconsminds-baby-clothes', 'iconsminds-belt', 'iconsminds-bikini', 'iconsminds-blouse', 'iconsminds-boot', 'iconsminds-bow-3', 'iconsminds-bra', 'iconsminds-cap', 'iconsminds-coat', 'iconsminds-dress', 'iconsminds-glasses-3', 'iconsminds-gloves', 'iconsminds-hanger', 'iconsminds-heels-2', 'iconsminds-jacket', 'iconsminds-walkie-talkie']
}, {
  'title': 'Communications & Network',
  'icons': ['iconsminds-wifi', 'iconsminds-address-book-2', 'iconsminds-bell', 'iconsminds-bird-delivering-letter', 'iconsminds-communication-tower-2', 'iconsminds-fax', 'iconsminds-megaphone', 'iconsminds-newspaper', 'iconsminds-old-telephone', 'iconsminds-router', 'iconsminds-telephone-2', 'iconsminds-smartphone-4', 'iconsminds-tablet-3', 'iconsminds-computer', 'iconsminds-laptop---phone', 'iconsminds-laptop---tablet', 'iconsminds-laptop-3', 'iconsminds-monitor', 'iconsminds-monitor---laptop', 'iconsminds-monitor---phone', 'iconsminds-monitor---tablet', 'iconsminds-monitor-3', 'iconsminds-monitor-vertical', 'iconsminds-orientation', 'iconsminds-phone-3', 'iconsminds-smartphone-3']
}, {
  'title': 'Education',
  'icons': ['iconsminds-quill-3', 'iconsminds-student-hat', 'iconsminds-blackboard', 'iconsminds-book', 'iconsminds-bookmark', 'iconsminds-books', 'iconsminds-compass-2', 'iconsminds-diploma-2', 'iconsminds-eraser-2', 'iconsminds-formula', 'iconsminds-notepad', 'iconsminds-open-book', 'iconsminds-pen-2', 'iconsminds-pi', 'iconsminds-pipette']
}, {
  'title': 'Emails',
  'icons': ['iconsminds-mail-block', 'iconsminds-mailbox-empty', 'iconsminds-mailbox-full', 'iconsminds-mail-delete', 'iconsminds-mail-favorite', 'iconsminds-mail-forward', 'iconsminds-mail-gallery', 'iconsminds-mail-inbox', 'iconsminds-mail-link', 'iconsminds-mail-lock', 'iconsminds-mail-love', 'iconsminds-mail-money', 'iconsminds-mail-open', 'iconsminds-mail-outbox', 'iconsminds-mail-password', 'iconsminds-mail-photo', 'iconsminds-mail-read', 'iconsminds-mail-remove-x', 'iconsminds-mail-reply-all', 'iconsminds-mail-reply', 'iconsminds-mail-search', 'iconsminds-mail-send', 'iconsminds-mail-settings', 'iconsminds-mail-unread', 'iconsminds-mail-video', 'iconsminds-mail-with-at-sign', 'iconsminds-mail-with-cursors', 'iconsminds-new-mail', 'iconsminds-post-mail-2', 'iconsminds-post-mail', 'iconsminds-spam-mail', 'iconsminds-stamp', 'iconsminds-stamp-2', 'iconsminds-voicemail', 'iconsminds-at-sign', 'iconsminds-box-full', 'iconsminds-empty-box', 'iconsminds-envelope', 'iconsminds-envelope-2', 'iconsminds-inbox', 'iconsminds-inbox-empty', 'iconsminds-inbox-forward', 'iconsminds-inbox-full', 'iconsminds-inbox-into', 'iconsminds-inbox-out', 'iconsminds-inbox-reply', 'iconsminds-letter-close', 'iconsminds-letter-open', 'iconsminds-letter-sent', 'iconsminds-mail', 'iconsminds-mail-2', 'iconsminds-mail-3', 'iconsminds-mail-add--', 'iconsminds-mail-attachement']
}, {
  'title': 'Food & Drinks',
  'icons': ['iconsminds-ice-cream', 'iconsminds-lollipop', 'iconsminds-open-banana', 'iconsminds-pepper', 'iconsminds-tee-mug', 'iconsminds-tomato', 'iconsminds-apple', 'iconsminds-apple-bite', 'iconsminds-beer-glass', 'iconsminds-birthday-cake', 'iconsminds-bread', 'iconsminds-cake', 'iconsminds-can', 'iconsminds-can-2', 'iconsminds-cheese', 'iconsminds-chef-hat', 'iconsminds-chopsticks', 'iconsminds-cocktail', 'iconsminds-coffee', 'iconsminds-coffee-bean', 'iconsminds-coffee-to-go', 'iconsminds-cookies', 'iconsminds-croissant', 'iconsminds-cupcake', 'iconsminds-doughnut', 'iconsminds-fish', 'iconsminds-glass-water', 'iconsminds-hamburger', 'iconsminds-hot-dog']
}, {
  'title': 'Hardware',
  'icons': ['iconsminds-webcam', 'iconsminds-battery-0', 'iconsminds-battery-100', 'iconsminds-battery-charge', 'iconsminds-charger', 'iconsminds-cpu', 'iconsminds-disk', 'iconsminds-dvd', 'iconsminds-fan', 'iconsminds-gamepad-2', 'iconsminds-hdd', 'iconsminds-keyboard', 'iconsminds-mouse', 'iconsminds-mouse-3', 'iconsminds-plug-in', 'iconsminds-power', 'iconsminds-power-cable', 'iconsminds-remote-controll-2', 'iconsminds-server-2', 'iconsminds-speaker']
}, {
  'title': 'Interface',
  'icons': ['iconsminds-start-ways', 'iconsminds-synchronize', 'iconsminds-synchronize-2', 'iconsminds-undo', 'iconsminds-up-1', 'iconsminds-upload-1', 'iconsminds-upward', 'iconsminds-yes', 'iconsminds-add', 'iconsminds-back', 'iconsminds-broken-link', 'iconsminds-check', 'iconsminds-close', 'iconsminds-cursor', 'iconsminds-cursor-click-2', 'iconsminds-cursor-click', 'iconsminds-cursor-move-2', 'iconsminds-cursor-select', 'iconsminds-down-1', 'iconsminds-download-1', 'iconsminds-downward', 'iconsminds-endways', 'iconsminds-forward', 'iconsminds-left-1', 'iconsminds-link', 'iconsminds-next', 'iconsminds-orientation-1', 'iconsminds-pointer', 'iconsminds-previous', 'iconsminds-redo', 'iconsminds-refresh', 'iconsminds-reload-1', 'iconsminds-remove', 'iconsminds-repeat-1', 'iconsminds-reset', 'iconsminds-rewind', 'iconsminds-right-1', 'iconsminds-rotation', 'iconsminds-rotation-390', 'iconsminds-spot']
}, {
  'title': 'Maps & Locations',
  'icons': ['iconsminds-satelite-2', 'iconsminds-compass-1', 'iconsminds-direction-east', 'iconsminds-edit-map', 'iconsminds-geo2', 'iconsminds-geo2--', 'iconsminds-globe-2', 'iconsminds-location-2', 'iconsminds-map2', 'iconsminds-map-marker-2', 'iconsminds-map-marker']
}, {
  'title': 'Media control',
  'icons': ['iconsminds-stop', 'iconsminds-stop-2', 'iconsminds-back-1', 'iconsminds-back-2', 'iconsminds-eject', 'iconsminds-eject-2', 'iconsminds-end-1', 'iconsminds-end-2', 'iconsminds-next-1', 'iconsminds-next-2', 'iconsminds-pause', 'iconsminds-pause-2', 'iconsminds-power-2', 'iconsminds-power-3', 'iconsminds-record', 'iconsminds-record-2', 'iconsminds-repeat-5', 'iconsminds-repeat-6', 'iconsminds-shuffle-1', 'iconsminds-shuffle-3', 'iconsminds-start-1', 'iconsminds-start-2']
}, {
  'title': 'Music',
  'icons': ['iconsminds-volume-down', 'iconsminds-volume-up', 'iconsminds-back-music', 'iconsminds-cd-2', 'iconsminds-clef', 'iconsminds-earphones-2', 'iconsminds-equalizer', 'iconsminds-first', 'iconsminds-headphones', 'iconsminds-last', 'iconsminds-loudspeaker', 'iconsminds-mic', 'iconsminds-microphone-4', 'iconsminds-next-music', 'iconsminds-old-radio', 'iconsminds-play-music', 'iconsminds-radio', 'iconsminds-record-1', 'iconsminds-record-music', 'iconsminds-sound', 'iconsminds-speaker-1', 'iconsminds-stop-music', 'iconsminds-trumpet', 'iconsminds-voice', 'iconsminds-electric-guitar', 'iconsminds-guitar']
}, {
  'title': 'Nature',
  'icons': ['iconsminds-tree-3', 'iconsminds-eci-icon', 'iconsminds-environmental', 'iconsminds-environmental-3', 'iconsminds-fire-flame-2', 'iconsminds-green-energy', 'iconsminds-green-house', 'iconsminds-leafs', 'iconsminds-light-bulb-leaf', 'iconsminds-palm-tree', 'iconsminds-plant', 'iconsminds-recycling-2', 'iconsminds-seed', 'iconsminds-trash-with-men', 'iconsminds-forest-1']
}, {
  'title': 'People',
  'icons': ['iconsminds-id-card', 'iconsminds-king-2', 'iconsminds-male', 'iconsminds-male-female', 'iconsminds-male-2', 'iconsminds-man-sign', 'iconsminds-mens', 'iconsminds-network', 'iconsminds-student-female', 'iconsminds-student-male', 'iconsminds-student-male-female', 'iconsminds-students', 'iconsminds-woman-man', 'iconsminds-add-user', 'iconsminds-administrator', 'iconsminds-assistant', 'iconsminds-business-man', 'iconsminds-business-man-woman', 'iconsminds-business-mens', 'iconsminds-business-woman', 'iconsminds-conference', 'iconsminds-doctor', 'iconsminds-engineering', 'iconsminds-female', 'iconsminds-female-2', 'iconsminds-temperature']
}, {
  'title': 'Science & Medical',
  'icons': ['iconsminds-test-tube', 'iconsminds-ambulance', 'iconsminds-atom', 'iconsminds-band-aid', 'iconsminds-bio-hazard', 'iconsminds-biotech', 'iconsminds-brain', 'iconsminds-chemical', 'iconsminds-clinic', 'iconsminds-danger', 'iconsminds-dna', 'iconsminds-dna-2', 'iconsminds-first-aid', 'iconsminds-flask', 'iconsminds-medical-sign', 'iconsminds-medicine-3', 'iconsminds-microscope', 'iconsminds-physics', 'iconsminds-plasmid', 'iconsminds-plaster', 'iconsminds-pulse', 'iconsminds-radioactive', 'iconsminds-stethoscope']
}, {
  'title': 'Security',
  'icons': ['iconsminds-security-settings', 'iconsminds-securiy-remove', 'iconsminds-shield', 'iconsminds-ssl', 'iconsminds-type-pass', 'iconsminds-unlock-2', 'iconsminds-finger-print', 'iconsminds-firewall', 'iconsminds-key-lock', 'iconsminds-laptop-secure', 'iconsminds-lock-2', 'iconsminds-password', 'iconsminds-password-field', 'iconsminds-police', 'iconsminds-security-block', 'iconsminds-security-bug', 'iconsminds-security-camera', 'iconsminds-security-check']
}, {
  'title': 'Seo Icons',
  'icons': ['iconsminds-testimonal', 'iconsminds-broke-link-2', 'iconsminds-coding', 'iconsminds-consulting', 'iconsminds-copyright', 'iconsminds-idea-2', 'iconsminds-link-2', 'iconsminds-management', 'iconsminds-monitor-analytics', 'iconsminds-monitoring', 'iconsminds-optimization', 'iconsminds-tag', 'iconsminds-target', 'iconsminds-target-market']
}, {
  'title': 'Shopping & E-commerce',
  'icons': ['iconsminds-shopping-bag', 'iconsminds-shopping-basket', 'iconsminds-shopping-cart', 'iconsminds-tag-3', 'iconsminds-add-bag', 'iconsminds-add-basket', 'iconsminds-add-cart', 'iconsminds-bag-items', 'iconsminds-bag-quantity', 'iconsminds-basket-coins', 'iconsminds-basket-items', 'iconsminds-basket-quantity', 'iconsminds-car-items', 'iconsminds-cart-quantity', 'iconsminds-cash-register-2', 'iconsminds-checkout', 'iconsminds-checkout-bag', 'iconsminds-checkout-basket', 'iconsminds-home-1', 'iconsminds-qr-code', 'iconsminds-receipt-4', 'iconsminds-remove-bag', 'iconsminds-remove-basket', 'iconsminds-remove-cart', 'iconsminds-shop', 'iconsminds-shop-2', 'iconsminds-shop-3', 'iconsminds-calculator', 'iconsminds-scale', 'iconsminds-shop-4', 'iconsminds-credit-card', 'iconsminds-credit-card-3', 'iconsminds-money-bag']
}, {
  'title': 'Signs & Symbols',
  'icons': ['iconsminds-ying-yang', 'iconsminds-bisexual', 'iconsminds-cancer', 'iconsminds-couple-sign', 'iconsminds-family-sign', 'iconsminds-female-1', 'iconsminds-gey', 'iconsminds-heart', 'iconsminds-homosexual', 'iconsminds-inifity', 'iconsminds-lesbian', 'iconsminds-lesbians', 'iconsminds-love', 'iconsminds-male-1', 'iconsminds-men', 'iconsminds-no-smoking', 'iconsminds-paw', 'iconsminds-quotes', 'iconsminds-redirect', 'iconsminds-ribbon', 'iconsminds-venn-diagram', 'iconsminds-wheelchair', 'iconsminds-women']
}, {
  'title': 'Social Media',
  'icons': ['iconsminds-instagram', 'iconsminds-last-fm', 'iconsminds-like', 'iconsminds-linkedin-2', 'iconsminds-livejournal', 'iconsminds-newsvine', 'iconsminds-picasa', 'iconsminds-pinterest', 'iconsminds-plaxo', 'iconsminds-plurk', 'iconsminds-posterous', 'iconsminds-qik', 'iconsminds-reddit', 'iconsminds-reverbnation', 'iconsminds-rss', 'iconsminds-sharethis', 'iconsminds-skype', 'iconsminds-soundcloud', 'iconsminds-stumbleupon', 'iconsminds-technorati', 'iconsminds-tumblr', 'iconsminds-twitter', 'iconsminds-unlike', 'iconsminds-ustream', 'iconsminds-viddler', 'iconsminds-vimeo', 'iconsminds-wordpress', 'iconsminds-xanga', 'iconsminds-yahoo', 'iconsminds-yelp', 'iconsminds-youtube', 'iconsminds-ask', 'iconsminds-behance', 'iconsminds-bing', 'iconsminds-blinklist', 'iconsminds-blogger', 'iconsminds-delicious', 'iconsminds-deviantart', 'iconsminds-digg', 'iconsminds-diigo', 'iconsminds-dribble', 'iconsminds-email', 'iconsminds-evernote', 'iconsminds-facebook', 'iconsminds-feedburner', 'iconsminds-flickr', 'iconsminds-formspring', 'iconsminds-forsquare', 'iconsminds-friendster', 'iconsminds-google', 'iconsminds-gowalla', 'iconsminds-icq', 'iconsminds-imdb']
}, {
  'title': 'Speech Bubbles',
  'icons': ['iconsminds-speach-bubble', 'iconsminds-speach-bubbles', 'iconsminds-speach-bubble-2', 'iconsminds-speach-bubble-3', 'iconsminds-speach-bubble-4', 'iconsminds-speach-bubble-5', 'iconsminds-speach-bubble-6', 'iconsminds-speach-bubble-7', 'iconsminds-speach-bubble-8', 'iconsminds-speach-bubble-9', 'iconsminds-speach-bubble-10', 'iconsminds-speach-bubble-11', 'iconsminds-speach-bubble-12', 'iconsminds-speach-bubble-13', 'iconsminds-speach-bubble-asking', 'iconsminds-speach-bubble-comic-2', 'iconsminds-speach-bubble-comic-3', 'iconsminds-speach-bubble-comic-4', 'iconsminds-speach-bubble-comic', 'iconsminds-speach-bubble-dialog']
}, {
  'title': 'Sports',
  'icons': ['iconsminds-trekking', 'iconsminds-trophy', 'iconsminds-weight-lift', 'iconsminds-aerobics', 'iconsminds-archery', 'iconsminds-ballet-shoes', 'iconsminds-baseball', 'iconsminds-basket-ball', 'iconsminds-bowling', 'iconsminds-box', 'iconsminds-chess', 'iconsminds-cricket', 'iconsminds-dumbbell', 'iconsminds-football', 'iconsminds-football-2', 'iconsminds-footprint', 'iconsminds-footprint-2', 'iconsminds-golf', 'iconsminds-gymnastics', 'iconsminds-hokey', 'iconsminds-jump-rope', 'iconsminds-life-jacket', 'iconsminds-medal', 'iconsminds-pilates-2', 'iconsminds-rafting', 'iconsminds-running-shoes', 'iconsminds-skydiving', 'iconsminds-snorkel', 'iconsminds-soccer-ball', 'iconsminds-swimming', 'iconsminds-tennis', 'iconsminds-tennis-ball']
}, {
  'title': 'Time',
  'icons': ['iconsminds-over-time-2', 'iconsminds-sand-watch-2', 'iconsminds-stopwatch', 'iconsminds-time-backup', 'iconsminds-timer', 'iconsminds-watch', 'iconsminds-24-hour', 'iconsminds-alarm-clock-2', 'iconsminds-alarm-clock', 'iconsminds-clock', 'iconsminds-clock-2', 'iconsminds-clock-back', 'iconsminds-clock-forward', 'iconsminds-old-clock']
}, {
  'title': 'Transportation',
  'icons': ['iconsminds-scooter', 'iconsminds-ship', 'iconsminds-skateboard', 'iconsminds-taxi-sign', 'iconsminds-traffic-light', 'iconsminds-train', 'iconsminds-yacht', 'iconsminds-bicycle-1', 'iconsminds-bus-2', 'iconsminds-car', 'iconsminds-gaugage', 'iconsminds-gaugage-2', 'iconsminds-helicopter', 'iconsminds-jeep', 'iconsminds-jet', 'iconsminds-motorcycle', 'iconsminds-plane', 'iconsminds-road-2', 'iconsminds-sailing-ship', 'iconsminds-air-balloon-1', 'iconsminds-tractor']
}, {
  'title': 'Video',
  'icons': ['iconsminds-video-tripod', 'iconsminds-3d-eyeglasses', 'iconsminds-cinema', 'iconsminds-director', 'iconsminds-film', 'iconsminds-film-video', 'iconsminds-old-tv', 'iconsminds-tv', 'iconsminds-video', 'iconsminds-video-5', 'iconsminds-video-6', 'iconsminds-video-len']
}, {
  'title': 'Weather',
  'icons': ['iconsminds-sunrise', 'iconsminds-sunset', 'iconsminds-temperature-2', 'iconsminds-thunder', 'iconsminds-umbrella-2', 'iconsminds-wave', 'iconsminds-wind-turbine', 'iconsminds-windy', 'iconsminds-cloud-hail', 'iconsminds-cloud-moon', 'iconsminds-cloud-rain', 'iconsminds-cloud-snow', 'iconsminds-cloud-sun', 'iconsminds-cloud-weather', 'iconsminds-drop', 'iconsminds-dry', 'iconsminds-fog-day', 'iconsminds-fog-night', 'iconsminds-half-moon', 'iconsminds-rain-drop', 'iconsminds-snow', 'iconsminds-snowflake-3', 'iconsminds-snow-storm', 'iconsminds-spring', 'iconsminds-storm', 'iconsminds-summer', 'iconsminds-sun', 'iconsminds-sun-cloudy-rain']
}];

/***/ }),

/***/ "./resources/src/views/app/ui/Alerts.vue":
/*!***********************************************!*\
  !*** ./resources/src/views/app/ui/Alerts.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alerts_vue_vue_type_template_id_d70a05e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alerts.vue?vue&type=template&id=d70a05e0& */ "./resources/src/views/app/ui/Alerts.vue?vue&type=template&id=d70a05e0&");
/* harmony import */ var _Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alerts.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/Alerts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Alerts_vue_vue_type_template_id_d70a05e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Alerts_vue_vue_type_template_id_d70a05e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Alerts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Alerts.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/src/views/app/ui/Alerts.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Alerts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Alerts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/Alerts.vue?vue&type=template&id=d70a05e0&":
/*!******************************************************************************!*\
  !*** ./resources/src/views/app/ui/Alerts.vue?vue&type=template&id=d70a05e0& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_d70a05e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Alerts.vue?vue&type=template&id=d70a05e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Alerts.vue?vue&type=template&id=d70a05e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_d70a05e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_d70a05e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Badges.vue":
/*!***********************************************!*\
  !*** ./resources/src/views/app/ui/Badges.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Badges_vue_vue_type_template_id_62753f29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badges.vue?vue&type=template&id=62753f29& */ "./resources/src/views/app/ui/Badges.vue?vue&type=template&id=62753f29&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Badges_vue_vue_type_template_id_62753f29___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Badges_vue_vue_type_template_id_62753f29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Badges.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Badges.vue?vue&type=template&id=62753f29&":
/*!******************************************************************************!*\
  !*** ./resources/src/views/app/ui/Badges.vue?vue&type=template&id=62753f29& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_template_id_62753f29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Badges.vue?vue&type=template&id=62753f29& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Badges.vue?vue&type=template&id=62753f29&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_template_id_62753f29___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badges_vue_vue_type_template_id_62753f29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Buttons.vue":
/*!************************************************!*\
  !*** ./resources/src/views/app/ui/Buttons.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Buttons_vue_vue_type_template_id_ce712b50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buttons.vue?vue&type=template&id=ce712b50& */ "./resources/src/views/app/ui/Buttons.vue?vue&type=template&id=ce712b50&");
/* harmony import */ var _Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/Buttons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Buttons_vue_vue_type_template_id_ce712b50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Buttons_vue_vue_type_template_id_ce712b50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Buttons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Buttons.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/src/views/app/ui/Buttons.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Buttons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Buttons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/Buttons.vue?vue&type=template&id=ce712b50&":
/*!*******************************************************************************!*\
  !*** ./resources/src/views/app/ui/Buttons.vue?vue&type=template&id=ce712b50& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_ce712b50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Buttons.vue?vue&type=template&id=ce712b50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Buttons.vue?vue&type=template&id=ce712b50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_ce712b50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_ce712b50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Cards.vue":
/*!**********************************************!*\
  !*** ./resources/src/views/app/ui/Cards.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cards_vue_vue_type_template_id_4aac160c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cards.vue?vue&type=template&id=4aac160c& */ "./resources/src/views/app/ui/Cards.vue?vue&type=template&id=4aac160c&");
/* harmony import */ var _Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/Cards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cards_vue_vue_type_template_id_4aac160c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cards_vue_vue_type_template_id_4aac160c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Cards.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Cards.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/src/views/app/ui/Cards.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cards.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Cards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/Cards.vue?vue&type=template&id=4aac160c&":
/*!*****************************************************************************!*\
  !*** ./resources/src/views/app/ui/Cards.vue?vue&type=template&id=4aac160c& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_4aac160c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cards.vue?vue&type=template&id=4aac160c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Cards.vue?vue&type=template&id=4aac160c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_4aac160c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_4aac160c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Carousel.vue":
/*!*************************************************!*\
  !*** ./resources/src/views/app/ui/Carousel.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel_vue_vue_type_template_id_7b3bdb19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=7b3bdb19& */ "./resources/src/views/app/ui/Carousel.vue?vue&type=template&id=7b3bdb19&");
/* harmony import */ var _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Carousel_vue_vue_type_template_id_7b3bdb19___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Carousel_vue_vue_type_template_id_7b3bdb19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Carousel.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/src/views/app/ui/Carousel.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/Carousel.vue?vue&type=template&id=7b3bdb19&":
/*!********************************************************************************!*\
  !*** ./resources/src/views/app/ui/Carousel.vue?vue&type=template&id=7b3bdb19& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_7b3bdb19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=template&id=7b3bdb19& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Carousel.vue?vue&type=template&id=7b3bdb19&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_7b3bdb19___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_7b3bdb19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Charts.vue":
/*!***********************************************!*\
  !*** ./resources/src/views/app/ui/Charts.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Charts_vue_vue_type_template_id_e7112064___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Charts.vue?vue&type=template&id=e7112064& */ "./resources/src/views/app/ui/Charts.vue?vue&type=template&id=e7112064&");
/* harmony import */ var _Charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Charts.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/Charts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Charts_vue_vue_type_template_id_e7112064___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Charts_vue_vue_type_template_id_e7112064___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Charts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Charts.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/src/views/app/ui/Charts.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Charts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Charts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/Charts.vue?vue&type=template&id=e7112064&":
/*!******************************************************************************!*\
  !*** ./resources/src/views/app/ui/Charts.vue?vue&type=template&id=e7112064& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_template_id_e7112064___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Charts.vue?vue&type=template&id=e7112064& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Charts.vue?vue&type=template&id=e7112064&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_template_id_e7112064___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Charts_vue_vue_type_template_id_e7112064___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Collapse.vue":
/*!*************************************************!*\
  !*** ./resources/src/views/app/ui/Collapse.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collapse_vue_vue_type_template_id_f722a234___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collapse.vue?vue&type=template&id=f722a234& */ "./resources/src/views/app/ui/Collapse.vue?vue&type=template&id=f722a234&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Collapse_vue_vue_type_template_id_f722a234___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Collapse_vue_vue_type_template_id_f722a234___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Collapse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Collapse.vue?vue&type=template&id=f722a234&":
/*!********************************************************************************!*\
  !*** ./resources/src/views/app/ui/Collapse.vue?vue&type=template&id=f722a234& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapse_vue_vue_type_template_id_f722a234___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Collapse.vue?vue&type=template&id=f722a234& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Collapse.vue?vue&type=template&id=f722a234&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapse_vue_vue_type_template_id_f722a234___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collapse_vue_vue_type_template_id_f722a234___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Dropdowns.vue":
/*!**************************************************!*\
  !*** ./resources/src/views/app/ui/Dropdowns.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdowns_vue_vue_type_template_id_4b4165ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdowns.vue?vue&type=template&id=4b4165ce& */ "./resources/src/views/app/ui/Dropdowns.vue?vue&type=template&id=4b4165ce&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Dropdowns_vue_vue_type_template_id_4b4165ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dropdowns_vue_vue_type_template_id_4b4165ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Dropdowns.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Dropdowns.vue?vue&type=template&id=4b4165ce&":
/*!*********************************************************************************!*\
  !*** ./resources/src/views/app/ui/Dropdowns.vue?vue&type=template&id=4b4165ce& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdowns_vue_vue_type_template_id_4b4165ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdowns.vue?vue&type=template&id=4b4165ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Dropdowns.vue?vue&type=template&id=4b4165ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdowns_vue_vue_type_template_id_4b4165ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdowns_vue_vue_type_template_id_4b4165ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Editors.vue":
/*!************************************************!*\
  !*** ./resources/src/views/app/ui/Editors.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editors_vue_vue_type_template_id_7310c606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editors.vue?vue&type=template&id=7310c606& */ "./resources/src/views/app/ui/Editors.vue?vue&type=template&id=7310c606&");
/* harmony import */ var _Editors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editors.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/Editors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Editors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Editors_vue_vue_type_template_id_7310c606___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Editors_vue_vue_type_template_id_7310c606___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Editors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Editors.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/src/views/app/ui/Editors.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Editors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Editors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/Editors.vue?vue&type=template&id=7310c606&":
/*!*******************************************************************************!*\
  !*** ./resources/src/views/app/ui/Editors.vue?vue&type=template&id=7310c606& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_template_id_7310c606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Editors.vue?vue&type=template&id=7310c606& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Editors.vue?vue&type=template&id=7310c606&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_template_id_7310c606___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editors_vue_vue_type_template_id_7310c606___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/FormComponents.vue":
/*!*******************************************************!*\
  !*** ./resources/src/views/app/ui/FormComponents.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormComponents_vue_vue_type_template_id_4e17c6f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormComponents.vue?vue&type=template&id=4e17c6f3& */ "./resources/src/views/app/ui/FormComponents.vue?vue&type=template&id=4e17c6f3&");
/* harmony import */ var _FormComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormComponents.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/FormComponents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormComponents_vue_vue_type_template_id_4e17c6f3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormComponents_vue_vue_type_template_id_4e17c6f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/FormComponents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/FormComponents.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/src/views/app/ui/FormComponents.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormComponents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/FormComponents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/FormComponents.vue?vue&type=template&id=4e17c6f3&":
/*!**************************************************************************************!*\
  !*** ./resources/src/views/app/ui/FormComponents.vue?vue&type=template&id=4e17c6f3& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponents_vue_vue_type_template_id_4e17c6f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormComponents.vue?vue&type=template&id=4e17c6f3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/FormComponents.vue?vue&type=template&id=4e17c6f3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponents_vue_vue_type_template_id_4e17c6f3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponents_vue_vue_type_template_id_4e17c6f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Forms.vue":
/*!**********************************************!*\
  !*** ./resources/src/views/app/ui/Forms.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Forms_vue_vue_type_template_id_552353c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forms.vue?vue&type=template&id=552353c6& */ "./resources/src/views/app/ui/Forms.vue?vue&type=template&id=552353c6&");
/* harmony import */ var _Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forms.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/Forms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Forms_vue_vue_type_template_id_552353c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Forms_vue_vue_type_template_id_552353c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Forms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Forms.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/src/views/app/ui/Forms.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Forms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Forms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/Forms.vue?vue&type=template&id=552353c6&":
/*!*****************************************************************************!*\
  !*** ./resources/src/views/app/ui/Forms.vue?vue&type=template&id=552353c6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_552353c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Forms.vue?vue&type=template&id=552353c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Forms.vue?vue&type=template&id=552353c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_552353c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_552353c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Icons.vue":
/*!**********************************************!*\
  !*** ./resources/src/views/app/ui/Icons.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icons_vue_vue_type_template_id_d336a59e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons.vue?vue&type=template&id=d336a59e& */ "./resources/src/views/app/ui/Icons.vue?vue&type=template&id=d336a59e&");
/* harmony import */ var _Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/Icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icons_vue_vue_type_template_id_d336a59e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Icons_vue_vue_type_template_id_d336a59e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Icons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Icons.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/src/views/app/ui/Icons.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Icons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/Icons.vue?vue&type=template&id=d336a59e&":
/*!*****************************************************************************!*\
  !*** ./resources/src/views/app/ui/Icons.vue?vue&type=template&id=d336a59e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_d336a59e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Icons.vue?vue&type=template&id=d336a59e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Icons.vue?vue&type=template&id=d336a59e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_d336a59e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_d336a59e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/InputGroups.vue":
/*!****************************************************!*\
  !*** ./resources/src/views/app/ui/InputGroups.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputGroups_vue_vue_type_template_id_e3e7a9d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputGroups.vue?vue&type=template&id=e3e7a9d6& */ "./resources/src/views/app/ui/InputGroups.vue?vue&type=template&id=e3e7a9d6&");
/* harmony import */ var _InputGroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputGroups.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/InputGroups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputGroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputGroups_vue_vue_type_template_id_e3e7a9d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputGroups_vue_vue_type_template_id_e3e7a9d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/InputGroups.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/InputGroups.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/src/views/app/ui/InputGroups.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InputGroups.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/InputGroups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/InputGroups.vue?vue&type=template&id=e3e7a9d6&":
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/ui/InputGroups.vue?vue&type=template&id=e3e7a9d6& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroups_vue_vue_type_template_id_e3e7a9d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InputGroups.vue?vue&type=template&id=e3e7a9d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/InputGroups.vue?vue&type=template&id=e3e7a9d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroups_vue_vue_type_template_id_e3e7a9d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroups_vue_vue_type_template_id_e3e7a9d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Jumbotron.vue":
/*!**************************************************!*\
  !*** ./resources/src/views/app/ui/Jumbotron.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Jumbotron_vue_vue_type_template_id_61feaf43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Jumbotron.vue?vue&type=template&id=61feaf43& */ "./resources/src/views/app/ui/Jumbotron.vue?vue&type=template&id=61feaf43&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Jumbotron_vue_vue_type_template_id_61feaf43___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Jumbotron_vue_vue_type_template_id_61feaf43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Jumbotron.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Jumbotron.vue?vue&type=template&id=61feaf43&":
/*!*********************************************************************************!*\
  !*** ./resources/src/views/app/ui/Jumbotron.vue?vue&type=template&id=61feaf43& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jumbotron_vue_vue_type_template_id_61feaf43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Jumbotron.vue?vue&type=template&id=61feaf43& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Jumbotron.vue?vue&type=template&id=61feaf43&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jumbotron_vue_vue_type_template_id_61feaf43___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jumbotron_vue_vue_type_template_id_61feaf43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Maps.vue":
/*!*********************************************!*\
  !*** ./resources/src/views/app/ui/Maps.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Maps_vue_vue_type_template_id_f27c7560___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Maps.vue?vue&type=template&id=f27c7560& */ "./resources/src/views/app/ui/Maps.vue?vue&type=template&id=f27c7560&");
/* harmony import */ var _Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Maps.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/Maps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Maps_vue_vue_type_template_id_f27c7560___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Maps_vue_vue_type_template_id_f27c7560___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Maps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Maps.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/src/views/app/ui/Maps.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Maps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Maps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/Maps.vue?vue&type=template&id=f27c7560&":
/*!****************************************************************************!*\
  !*** ./resources/src/views/app/ui/Maps.vue?vue&type=template&id=f27c7560& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_f27c7560___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Maps.vue?vue&type=template&id=f27c7560& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Maps.vue?vue&type=template&id=f27c7560&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_f27c7560___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_f27c7560___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Modal.vue":
/*!**********************************************!*\
  !*** ./resources/src/views/app/ui/Modal.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_698e5344___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=698e5344& */ "./resources/src/views/app/ui/Modal.vue?vue&type=template&id=698e5344&");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_698e5344___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_vue_vue_type_template_id_698e5344___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Modal.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/src/views/app/ui/Modal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/Modal.vue?vue&type=template&id=698e5344&":
/*!*****************************************************************************!*\
  !*** ./resources/src/views/app/ui/Modal.vue?vue&type=template&id=698e5344& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_698e5344___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=698e5344& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Modal.vue?vue&type=template&id=698e5344&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_698e5344___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_698e5344___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Navigation.vue":
/*!***************************************************!*\
  !*** ./resources/src/views/app/ui/Navigation.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation_vue_vue_type_template_id_0ea8c58d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=0ea8c58d& */ "./resources/src/views/app/ui/Navigation.vue?vue&type=template&id=0ea8c58d&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/Navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_0ea8c58d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navigation_vue_vue_type_template_id_0ea8c58d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Navigation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Navigation.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/src/views/app/ui/Navigation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/Navigation.vue?vue&type=template&id=0ea8c58d&":
/*!**********************************************************************************!*\
  !*** ./resources/src/views/app/ui/Navigation.vue?vue&type=template&id=0ea8c58d& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_0ea8c58d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=template&id=0ea8c58d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Navigation.vue?vue&type=template&id=0ea8c58d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_0ea8c58d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_0ea8c58d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/PopoverTooltip.vue":
/*!*******************************************************!*\
  !*** ./resources/src/views/app/ui/PopoverTooltip.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopoverTooltip_vue_vue_type_template_id_0dc5c397___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopoverTooltip.vue?vue&type=template&id=0dc5c397& */ "./resources/src/views/app/ui/PopoverTooltip.vue?vue&type=template&id=0dc5c397&");
/* harmony import */ var _PopoverTooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopoverTooltip.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/PopoverTooltip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PopoverTooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopoverTooltip_vue_vue_type_template_id_0dc5c397___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PopoverTooltip_vue_vue_type_template_id_0dc5c397___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/PopoverTooltip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/PopoverTooltip.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/src/views/app/ui/PopoverTooltip.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopoverTooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PopoverTooltip.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/PopoverTooltip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopoverTooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/PopoverTooltip.vue?vue&type=template&id=0dc5c397&":
/*!**************************************************************************************!*\
  !*** ./resources/src/views/app/ui/PopoverTooltip.vue?vue&type=template&id=0dc5c397& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopoverTooltip_vue_vue_type_template_id_0dc5c397___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PopoverTooltip.vue?vue&type=template&id=0dc5c397& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/PopoverTooltip.vue?vue&type=template&id=0dc5c397&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopoverTooltip_vue_vue_type_template_id_0dc5c397___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopoverTooltip_vue_vue_type_template_id_0dc5c397___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Sortable.vue":
/*!*************************************************!*\
  !*** ./resources/src/views/app/ui/Sortable.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sortable_vue_vue_type_template_id_6adbf9b1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sortable.vue?vue&type=template&id=6adbf9b1& */ "./resources/src/views/app/ui/Sortable.vue?vue&type=template&id=6adbf9b1&");
/* harmony import */ var _Sortable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sortable.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/Sortable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sortable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sortable_vue_vue_type_template_id_6adbf9b1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sortable_vue_vue_type_template_id_6adbf9b1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Sortable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Sortable.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/src/views/app/ui/Sortable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sortable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sortable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Sortable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sortable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/Sortable.vue?vue&type=template&id=6adbf9b1&":
/*!********************************************************************************!*\
  !*** ./resources/src/views/app/ui/Sortable.vue?vue&type=template&id=6adbf9b1& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sortable_vue_vue_type_template_id_6adbf9b1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sortable.vue?vue&type=template&id=6adbf9b1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Sortable.vue?vue&type=template&id=6adbf9b1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sortable_vue_vue_type_template_id_6adbf9b1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sortable_vue_vue_type_template_id_6adbf9b1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/Tables.vue":
/*!***********************************************!*\
  !*** ./resources/src/views/app/ui/Tables.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tables_vue_vue_type_template_id_6f47fc44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tables.vue?vue&type=template&id=6f47fc44& */ "./resources/src/views/app/ui/Tables.vue?vue&type=template&id=6f47fc44&");
/* harmony import */ var _Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tables.vue?vue&type=script&lang=js& */ "./resources/src/views/app/ui/Tables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tables_vue_vue_type_template_id_6f47fc44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tables_vue_vue_type_template_id_6f47fc44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/Tables.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/Tables.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/src/views/app/ui/Tables.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Tables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/ui/Tables.vue?vue&type=template&id=6f47fc44&":
/*!******************************************************************************!*\
  !*** ./resources/src/views/app/ui/Tables.vue?vue&type=template&id=6f47fc44& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_6f47fc44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tables.vue?vue&type=template&id=6f47fc44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/Tables.vue?vue&type=template&id=6f47fc44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_6f47fc44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_6f47fc44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/ui/index.vue":
/*!**********************************************!*\
  !*** ./resources/src/views/app/ui/index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_40a5c709___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=40a5c709& */ "./resources/src/views/app/ui/index.vue?vue&type=template&id=40a5c709&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _index_vue_vue_type_template_id_40a5c709___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_40a5c709___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/ui/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/ui/index.vue?vue&type=template&id=40a5c709&":
/*!*****************************************************************************!*\
  !*** ./resources/src/views/app/ui/index.vue?vue&type=template&id=40a5c709& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_40a5c709___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=40a5c709& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/ui/index.vue?vue&type=template&id=40a5c709&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_40a5c709___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_40a5c709___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);