(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/Error.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/Error.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    goBack: function goBack() {
      this.$router.push('/');
    }
  },
  mounted: function mounted() {
    document.body.classList.add('background');
  },
  beforeDestroy: function beforeDestroy() {
    document.body.classList.remove('background');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/Error.vue?vue&type=template&id=28bed658&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/Error.vue?vue&type=template&id=28bed658& ***!
  \****************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "root" } }, [
    _c("div", { staticClass: "fixed-background" }, [
      _c("main", [
        _c(
          "div",
          { staticClass: "container" },
          [
            _c(
              "b-row",
              { staticClass: "h-100" },
              [
                _c(
                  "b-colxx",
                  {
                    staticClass: "mx-auto my-auto",
                    attrs: { xxs: "12", md: "10" }
                  },
                  [
                    _c(
                      "b-card",
                      { staticClass: "auth-card", attrs: { "no-body": "" } },
                      [
                        _c(
                          "div",
                          { staticClass: "position-relative image-side " },
                          [
                            _c("p", { staticClass: " text-white h2" }, [
                              _vm._v("MAGIC IS IN THE DETAILS")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "white mb-0" }, [
                              _vm._v("Yes, it is indeed!")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-side" },
                          [
                            _c(
                              "router-link",
                              { attrs: { tag: "a", to: "/" } },
                              [_c("span", { staticClass: "logo-single" })]
                            ),
                            _vm._v(" "),
                            _c("h6", { staticClass: "mb-4" }, [
                              _vm._v(_vm._s(_vm.$t("pages.error-title")))
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "mb-0 text-muted text-small mb-0"
                              },
                              [_vm._v(_vm._s(_vm.$t("pages.error-code")))]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "display-1 font-weight-bold mb-5"
                              },
                              [_vm._v("404")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "btn-shadow",
                                attrs: {
                                  type: "submit",
                                  variant: "primary",
                                  size: "lg"
                                },
                                on: { click: _vm.goBack }
                              },
                              [_vm._v(_vm._s(_vm.$t("pages.go-back-home")))]
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
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/Error.vue":
/*!***************************************!*\
  !*** ./resources/src/views/Error.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Error_vue_vue_type_template_id_28bed658___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.vue?vue&type=template&id=28bed658& */ "./resources/src/views/Error.vue?vue&type=template&id=28bed658&");
/* harmony import */ var _Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error.vue?vue&type=script&lang=js& */ "./resources/src/views/Error.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Error_vue_vue_type_template_id_28bed658___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Error_vue_vue_type_template_id_28bed658___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/Error.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/Error.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/src/views/Error.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/Error.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/Error.vue?vue&type=template&id=28bed658&":
/*!**********************************************************************!*\
  !*** ./resources/src/views/Error.vue?vue&type=template&id=28bed658& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_28bed658___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=template&id=28bed658& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/Error.vue?vue&type=template&id=28bed658&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_28bed658___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_28bed658___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);