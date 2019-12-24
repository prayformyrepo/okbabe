(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/ForgotPassword.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/user/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      fullname: '',
      email: '',
      password: ''
    };
  },
  methods: {
    formSubmit: function formSubmit() {
      console.log('forgot-password');
      this.$router.push('/');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/Login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/user/Login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      email: '',
      password: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])(['currentUser', 'processing', 'loginError'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapActions"])(['login']), {
    formSubmit: function formSubmit() {
      this.email = 'demo@gogo.com';
      this.password = 'gogo123';
      this.login({
        email: this.email,
        password: this.password
      });
    }
  }),
  watch: {
    currentUser: function currentUser(val) {
      var _this = this;

      if (val && val.uid && val.uid.length > 0) {
        setTimeout(function () {
          _this.$router.push('/');
        }, 500);
      }
    },
    loginError: function loginError(val) {
      if (val != null) {
        this.$notify('error', 'Login Error', val, {
          duration: 3000,
          permanent: false
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/Register.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/user/Register.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fullname: '',
      email: '',
      password: ''
    };
  },
  methods: {
    formSubmit: function formSubmit() {
      console.log('register');
      this.$router.push('/');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/user/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    document.body.classList.add('background');
  },
  beforeDestroy: function beforeDestroy() {
    document.body.classList.remove('background');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/ForgotPassword.vue?vue&type=template&id=7c3734ae&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/user/ForgotPassword.vue?vue&type=template&id=7c3734ae& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "b-row",
    { staticClass: "h-100" },
    [
      _c(
        "b-colxx",
        { staticClass: "mx-auto my-auto", attrs: { xxs: "12", md: "10" } },
        [
          _c("b-card", { staticClass: "auth-card", attrs: { "no-body": "" } }, [
            _c("div", { staticClass: "position-relative image-side " }, [
              _c("p", { staticClass: " text-white h2" }, [
                _vm._v(_vm._s(_vm.$t("dashboards.magic-is-in-the-details")))
              ]),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "white mb-0" },
                [
                  _vm._v("Please use your e-mail to reset your password. "),
                  _c("br"),
                  _vm._v("If you are not a member, please\n              "),
                  _c(
                    "router-link",
                    {
                      staticClass: "white",
                      attrs: { tag: "a", to: "/user/register" }
                    },
                    [_vm._v("register")]
                  ),
                  _vm._v(".\n            ")
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-side" },
              [
                _c("router-link", { attrs: { tag: "a", to: "/" } }, [
                  _c("span", { staticClass: "logo-single" })
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "mb-4" }, [
                  _vm._v(_vm._s(_vm.$t("user.forgot-password")))
                ]),
                _vm._v(" "),
                _c(
                  "b-form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.formSubmit($event)
                      }
                    }
                  },
                  [
                    _c(
                      "label",
                      { staticClass: "form-group has-float-label mb-4" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.email,
                              expression: "email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "email" },
                          domProps: { value: _vm.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.email = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.$t("user.email")))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex justify-content-end align-items-center"
                      },
                      [
                        _c(
                          "b-button",
                          {
                            staticClass: "btn-shadow",
                            attrs: {
                              type: "submit",
                              variant: "primary",
                              size: "lg"
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("user.reset-password-button")))]
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/Login.vue?vue&type=template&id=97b4176e&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/user/Login.vue?vue&type=template&id=97b4176e& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    "b-row",
    { staticClass: "h-100" },
    [
      _c(
        "b-colxx",
        { staticClass: "mx-auto my-auto", attrs: { xxs: "12", md: "10" } },
        [
          _c("b-card", { staticClass: "auth-card", attrs: { "no-body": "" } }, [
            _c("div", { staticClass: "position-relative image-side " }, [
              _c("p", { staticClass: " text-white h2" }, [
                _vm._v(_vm._s(_vm.$t("dashboards.magic-is-in-the-details")))
              ]),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "white mb-0" },
                [
                  _vm._v("Please use your credentials to login."),
                  _c("br"),
                  _vm._v("If you are not a member, please\n              "),
                  _c(
                    "router-link",
                    {
                      staticClass: "white",
                      attrs: { tag: "a", to: "/user/register" }
                    },
                    [_vm._v("register")]
                  ),
                  _vm._v(".\n            ")
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-side" },
              [
                _c("router-link", { attrs: { tag: "a", to: "/" } }, [
                  _c("span", { staticClass: "logo-single" })
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "mb-4" }, [
                  _vm._v(_vm._s(_vm.$t("user.login-title")))
                ]),
                _vm._v(" "),
                _c(
                  "b-form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.formSubmit($event)
                      }
                    }
                  },
                  [
                    _c(
                      "label",
                      { staticClass: "form-group has-float-label mb-4" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.email,
                              expression: "email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "email" },
                          domProps: { value: _vm.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.email = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.$t("user.email")))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "form-group has-float-label mb-4" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.password,
                              expression: "password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "password" },
                          domProps: { value: _vm.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.password = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.$t("user.password")))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex justify-content-between align-items-center"
                      },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/user/forgot-password" } },
                          [
                            _vm._v(
                              _vm._s(_vm.$t("user.forgot-password-question"))
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            staticClass: "btn-shadow",
                            attrs: {
                              type: "submit",
                              variant: "primary",
                              size: "lg",
                              disabled: _vm.processing
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("user.login-button")))]
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/Register.vue?vue&type=template&id=69d0581a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/user/Register.vue?vue&type=template&id=69d0581a& ***!
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
    "b-row",
    { staticClass: "h-100" },
    [
      _c(
        "b-colxx",
        { staticClass: "mx-auto my-auto", attrs: { xxs: "12", md: "10" } },
        [
          _c("b-card", { staticClass: "auth-card", attrs: { "no-body": "" } }, [
            _c("div", { staticClass: "position-relative image-side " }, [
              _c("p", { staticClass: " text-white h2" }, [
                _vm._v(_vm._s(_vm.$t("dashboards.magic-is-in-the-details")))
              ]),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "white mb-0" },
                [
                  _vm._v("  Please use this form to register. "),
                  _c("br"),
                  _vm._v("If you are a member, please\n              "),
                  _c(
                    "router-link",
                    {
                      staticClass: "white",
                      attrs: { tag: "a", to: "/user/login" }
                    },
                    [_vm._v("login")]
                  ),
                  _vm._v(".\n            ")
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-side" },
              [
                _c("router-link", { attrs: { tag: "a", to: "/" } }, [
                  _c("span", { staticClass: "logo-single" })
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "mb-4" }, [
                  _vm._v(_vm._s(_vm.$t("user.register")))
                ]),
                _vm._v(" "),
                _c(
                  "b-form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.formSubmit($event)
                      }
                    }
                  },
                  [
                    _c(
                      "label",
                      { staticClass: "form-group has-float-label mb-4" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.fullname,
                              expression: "fullname"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.fullname },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.fullname = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.$t("user.fullname")))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "form-group has-float-label mb-4" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.email,
                              expression: "email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "email" },
                          domProps: { value: _vm.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.email = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.$t("user.email")))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "form-group has-float-label mb-4" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.password,
                              expression: "password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "password" },
                          domProps: { value: _vm.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.password = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.$t("user.password")))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex justify-content-end align-items-center"
                      },
                      [
                        _c(
                          "b-button",
                          {
                            staticClass: "btn-shadow",
                            attrs: {
                              type: "submit",
                              variant: "primary",
                              size: "lg"
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("user.register-button")))]
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/index.vue?vue&type=template&id=730c3152&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/user/index.vue?vue&type=template&id=730c3152& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "fixed-background" }),
    _vm._v(" "),
    _c("main", [
      _c("div", { staticClass: "container" }, [_c("router-view")], 1)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/user/ForgotPassword.vue":
/*!*****************************************************!*\
  !*** ./resources/src/views/user/ForgotPassword.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_7c3734ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=7c3734ae& */ "./resources/src/views/user/ForgotPassword.vue?vue&type=template&id=7c3734ae&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/src/views/user/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPassword_vue_vue_type_template_id_7c3734ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForgotPassword_vue_vue_type_template_id_7c3734ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/user/ForgotPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/user/ForgotPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/src/views/user/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/user/ForgotPassword.vue?vue&type=template&id=7c3734ae&":
/*!************************************************************************************!*\
  !*** ./resources/src/views/user/ForgotPassword.vue?vue&type=template&id=7c3734ae& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_7c3734ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=7c3734ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/ForgotPassword.vue?vue&type=template&id=7c3734ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_7c3734ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_7c3734ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/user/Login.vue":
/*!********************************************!*\
  !*** ./resources/src/views/user/Login.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_97b4176e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=97b4176e& */ "./resources/src/views/user/Login.vue?vue&type=template&id=97b4176e&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/src/views/user/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_97b4176e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_97b4176e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/user/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/user/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/src/views/user/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/user/Login.vue?vue&type=template&id=97b4176e&":
/*!***************************************************************************!*\
  !*** ./resources/src/views/user/Login.vue?vue&type=template&id=97b4176e& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_97b4176e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=97b4176e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/Login.vue?vue&type=template&id=97b4176e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_97b4176e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_97b4176e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/user/Register.vue":
/*!***********************************************!*\
  !*** ./resources/src/views/user/Register.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_69d0581a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=69d0581a& */ "./resources/src/views/user/Register.vue?vue&type=template&id=69d0581a&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/src/views/user/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_69d0581a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_69d0581a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/user/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/user/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/src/views/user/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/user/Register.vue?vue&type=template&id=69d0581a&":
/*!******************************************************************************!*\
  !*** ./resources/src/views/user/Register.vue?vue&type=template&id=69d0581a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_69d0581a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=69d0581a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/Register.vue?vue&type=template&id=69d0581a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_69d0581a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_69d0581a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/user/index.vue":
/*!********************************************!*\
  !*** ./resources/src/views/user/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_730c3152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=730c3152& */ "./resources/src/views/user/index.vue?vue&type=template&id=730c3152&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/views/user/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_730c3152___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_730c3152___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/user/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/user/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/src/views/user/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/user/index.vue?vue&type=template&id=730c3152&":
/*!***************************************************************************!*\
  !*** ./resources/src/views/user/index.vue?vue&type=template&id=730c3152& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_730c3152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=730c3152& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/user/index.vue?vue&type=template&id=730c3152&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_730c3152___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_730c3152___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);