(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~dashboards~pages"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.radial-progress-container {\r\n  position: relative;\n}\n.radial-progress-inner {\r\n  position: absolute;\r\n  top: 0; right: 0; bottom: 0; left: 0;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  margin: 0 auto;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!../../vue-loader/lib??vue-loader-options!./RadialProgressBar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    diameter: {
      type: Number,
      required: false,
      default: 200
    },
    totalSteps: {
      type: Number,
      required: true,
      default: 10
    },
    completedSteps: {
      type: Number,
      required: true,
      default: 0
    },
    startColor: {
      type: String,
      required: false,
      default: '#bbff42'
    },
    stopColor: {
      type: String,
      required: false,
      default: '#429321'
    },
    strokeWidth: {
      type: Number,
      required: false,
      default: 10
    },
    animateSpeed: {
      type: Number,
      required: false,
      default: 1000
    },
    innerStrokeColor: {
      type: String,
      required: false,
      default: '#323232'
    },
    fps: {
      type: Number,
      required: false,
      default: 60
    },
    timingFunc: {
      type: String,
      required: false,
      default: 'linear'
    }
  },

  data () {
    return {
      gradient: {
        fx: 0.99,
        fy: 0.5,
        cx: 0.5,
        cy: 0.5,
        r: 0.65
      },
      gradientAnimation: null,
      currentAngle: 0,
      strokeDashoffset: 0
    }
  },

  computed: {
    radius () {
      return this.diameter / 2
    },

    circumference () {
      return Math.PI * this.innerCircleDiameter
    },

    stepSize () {
      if (this.totalSteps === 0) {
        return 0
      }

      return 100 / this.totalSteps
    },

    finishedPercentage () {
      return this.stepSize * this.completedSteps
    },

    circleSlice () {
      return 2 * Math.PI / this.totalSteps
    },

    animateSlice () {
      return this.circleSlice / this.totalPoints
    },

    innerCircleDiameter () {
      return this.diameter - (this.strokeWidth * 2)
    },

    innerCircleRadius () {
      return this.innerCircleDiameter / 2
    },

    totalPoints () {
      return this.animateSpeed / this.animationIncrements
    },

    animationIncrements () {
      return 1000 / this.fps
    },

    hasGradient () {
      return this.startColor !== this.stopColor
    },

    containerStyle () {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`
      }
    },

    progressStyle () {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`,
        strokeWidth: `${this.strokeWidth}px`,
        strokeDashoffset: this.strokeDashoffset,
        transition: `stroke-dashoffset ${this.animateSpeed}ms ${this.timingFunc}`
      }
    },

    strokeStyle () {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`,
        strokeWidth: `${this.strokeWidth}px`
      }
    },

    innerCircleStyle () {
      return {
        width: `${this.innerCircleDiameter}px`
      }
    }
  },

  methods: {
    getStopPointsOfCircle (steps) {
      const points = []

      for (let i = 0; i < steps; i++) {
        const angle = this.circleSlice * i
        points.push(this.getPointOfCircle(angle))
      }

      return points
    },

    getPointOfCircle (angle) {
      const radius = 0.5

      const x = radius + (radius * Math.cos(angle))
      const y = radius + (radius * Math.sin(angle))

      return { x, y }
    },

    gotoPoint () {
      const point = this.getPointOfCircle(this.currentAngle)

      this.gradient.fx = point.x
      this.gradient.fy = point.y
    },

    changeProgress ({ isAnimate = true }) {
      this.strokeDashoffset = ((100 - this.finishedPercentage) / 100) * this.circumference

      if (this.gradientAnimation) {
        clearInterval(this.gradientAnimation)
      }

      if (!isAnimate) {
        this.gotoNextStep()
        return
      }

      const angleOffset = (this.completedSteps - 1) * this.circleSlice
      let i = (this.currentAngle - angleOffset) / this.animateSlice
      const incrementer = Math.abs(i - this.totalPoints) / this.totalPoints
      const isMoveForward = i < this.totalPoints

      this.gradientAnimation = setInterval(() => {
        if (isMoveForward && i >= this.totalPoints ||
            !isMoveForward && i < this.totalPoints) {
          clearInterval(this.gradientAnimation)
          return
        }

        this.currentAngle = angleOffset + (this.animateSlice * i)
        this.gotoPoint()

        i += isMoveForward ? incrementer : -incrementer
      }, this.animationIncrements)
    },

    gotoNextStep () {
      this.currentAngle = this.completedSteps * this.circleSlice
      this.gotoPoint()
    }
  },

  watch: {
    totalSteps () {
      this.changeProgress({ isAnimate: true })
    },

    completedSteps () {
      this.changeProgress({ isAnimate: true })
    },

    diameter () {
      this.changeProgress({ isAnimate: true })
    },

    strokeWidth () {
      this.changeProgress({ isAnimate: true })
    }
  },

  created () {
    this.changeProgress({ isAnimate: false })
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=template&id=3e2ff9ec&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=template&id=3e2ff9ec& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "radial-progress-container", style: _vm.containerStyle },
    [
      _c(
        "div",
        { staticClass: "radial-progress-inner", style: _vm.innerCircleStyle },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c(
        "svg",
        {
          staticClass: "radial-progress-bar",
          attrs: {
            width: _vm.diameter,
            height: _vm.diameter,
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c(
            "defs",
            [
              _c(
                "radialGradient",
                {
                  attrs: {
                    id: "radial-gradient" + _vm._uid,
                    fx: _vm.gradient.fx,
                    fy: _vm.gradient.fy,
                    cx: _vm.gradient.cx,
                    cy: _vm.gradient.cy,
                    r: _vm.gradient.r
                  }
                },
                [
                  _c("stop", {
                    attrs: { offset: "30%", "stop-color": _vm.startColor }
                  }),
                  _vm._v(" "),
                  _c("stop", {
                    attrs: { offset: "100%", "stop-color": _vm.stopColor }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("circle", {
            style: _vm.strokeStyle,
            attrs: {
              r: _vm.innerCircleRadius,
              cx: _vm.radius,
              cy: _vm.radius,
              fill: "transparent",
              stroke: _vm.innerStrokeColor,
              "stroke-dasharray": _vm.circumference,
              "stroke-dashoffset": "0",
              "stroke-linecap": "round"
            }
          }),
          _vm._v(" "),
          _c("circle", {
            style: _vm.progressStyle,
            attrs: {
              transform: "rotate(270, " + _vm.radius + "," + _vm.radius + ")",
              r: _vm.innerCircleRadius,
              cx: _vm.radius,
              cy: _vm.radius,
              fill: "transparent",
              stroke: "url(#radial-gradient" + _vm._uid + ")",
              "stroke-dasharray": _vm.circumference,
              "stroke-dashoffset": _vm.circumference,
              "stroke-linecap": "round"
            }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-radial-progress/src/RadialProgressBar.vue":
/*!********************************************************************!*\
  !*** ./node_modules/vue-radial-progress/src/RadialProgressBar.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RadialProgressBar_vue_vue_type_template_id_3e2ff9ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadialProgressBar.vue?vue&type=template&id=3e2ff9ec& */ "./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=template&id=3e2ff9ec&");
/* harmony import */ var _RadialProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadialProgressBar.vue?vue&type=script&lang=js& */ "./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RadialProgressBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RadialProgressBar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RadialProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RadialProgressBar_vue_vue_type_template_id_3e2ff9ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RadialProgressBar_vue_vue_type_template_id_3e2ff9ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-radial-progress/src/RadialProgressBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib??vue-loader-options!./RadialProgressBar.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!../../vue-loader/lib??vue-loader-options!./RadialProgressBar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=template&id=3e2ff9ec&":
/*!***************************************************************************************************!*\
  !*** ./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=template&id=3e2ff9ec& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_template_id_3e2ff9ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vue-loader/lib??vue-loader-options!./RadialProgressBar.vue?vue&type=template&id=3e2ff9ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-radial-progress/src/RadialProgressBar.vue?vue&type=template&id=3e2ff9ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_template_id_3e2ff9ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_RadialProgressBar_vue_vue_type_template_id_3e2ff9ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-radial-progress/src/main.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-radial-progress/src/main.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./RadialProgressBar.vue */ "./node_modules/vue-radial-progress/src/RadialProgressBar.vue")


/***/ })

}]);