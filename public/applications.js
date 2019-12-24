(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["applications"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/DoughnutShadow.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Charts/DoughnutShadow.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./resources/src/utils/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./resources/src/components/Charts/config.js");




chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.doughnutWithShadow = chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.doughnut;
chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.doughnutWithShadow = chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.doughnut.extend({
  draw: function draw(ease) {
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.doughnut.prototype.draw.call(this, ease);
    var ctx = this.chart.chart.ctx;
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.15)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 10;
    ctx.responsive = true;
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.doughnut.prototype.draw.apply(this, arguments);
    ctx.restore();
  }
});
var DoughnutShadow = Object(vue_chartjs__WEBPACK_IMPORTED_MODULE_1__["generateChart"])('doughnut-with-shadow', 'doughnutWithShadow');
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": DoughnutShadow,
  props: ['data'],
  data: function data() {
    return {
      options: _config__WEBPACK_IMPORTED_MODULE_3__["doughnutChartOptions"]
    };
  },
  mounted: function mounted() {
    this.addPlugin(_utils__WEBPACK_IMPORTED_MODULE_2__["centerTextPlugin"]);
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ChatApp/ContactList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/ChatApp/ContactList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data'],
  methods: {
    selectContact: function selectContact(userId) {
      this.$emit('select-contact', userId);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ChatApp/ConversationDetail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/ChatApp/ConversationDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['currentUser', 'otherUser', 'messages'],
  methods: {
    scrollToEnd: function scrollToEnd() {
      var _this = this;

      setTimeout(function () {
        var container = _this.$refs.chatArea.$el;
        container.scrollTop = container.scrollHeight;
      }, 0);
    }
  },
  mounted: function mounted() {
    this.scrollToEnd();
  },
  updated: function updated() {
    this.scrollToEnd();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ChatApp/ConversationList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/ChatApp/ConversationList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['conversations', 'contacts', 'currentUser'],
  methods: {
    selectConversation: function selectConversation(conversation) {
      var otherUser = this.otherUser(conversation.users);
      this.$emit('select-conversation', otherUser, conversation.messages);
    },
    otherUser: function otherUser(users) {
      var _this = this;

      var otherUserId = users.find(function (x) {
        return x !== _this.currentUser.id;
      });
      return this.contacts.find(function (x) {
        return x.id === otherUserId;
      });
    }
  },
  computed: {},
  mounted: function mounted() {
    this.selectConversation(this.conversations[0]);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Common/ApplicationMenu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Common/ApplicationMenu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_0__);
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
      isOpen: false,
      isMenuOver: false
    };
  },
  methods: {
    addEvents: function addEvents() {
      document.addEventListener('click', this.handleDocumentClick);
      document.addEventListener('touchstart', this.handleDocumentClick);
    },
    removeEvents: function removeEvents() {
      document.removeEventListener('click', this.handleDocumentClick);
      document.removeEventListener('touchstart', this.handleDocumentClick);
    },
    handleDocumentClick: function handleDocumentClick(e) {
      if (!this.isMenuOver) {
        this.toggle();
      }
    },
    toggle: function toggle() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: function isOpen(val) {
      var _this = this;

      if (val) {
        Object(timers__WEBPACK_IMPORTED_MODULE_0__["setTimeout"])(function () {
          _this.$emit('show');
        }, 300);
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.removeEvents();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SurveyApp/QuestionBuilder.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/SurveyApp/QuestionBuilder.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_4__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var questionTypes = [{
  label: 'Text Input',
  value: 0,
  options: false
}, {
  label: 'Single Select',
  value: 1,
  options: true
}, {
  label: 'Multiple Select',
  value: 2,
  options: true
}, {
  label: 'Checkbox',
  value: 3,
  options: true
}, {
  label: 'Radiobutton',
  value: 4,
  options: true
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data', 'sort'],
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  data: function data() {
    return {
      questionTypes: questionTypes,
      mode: 'edit',
      // edit,
      showDetail: false,
      title: '',
      question: '',
      answers: null,
      answerType: questionTypes[0]
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.title = this.data.title;
    this.question = this.data.question;
    this.answers = this.data.answers;
    this.answerType = questionTypes.find(function (x) {
      return x.value === _this.data.answerType;
    });
  },
  methods: {
    changeMode: function changeMode(mode) {
      this.mode = mode;
      this.showDetail = true;
    },
    deleteAnswer: function deleteAnswer(value) {
      this.answers = this.answers.filter(function (x) {
        return x.value !== value;
      });
    },
    addAnswer: function addAnswer() {
      this.answers.push({
        value: this.answers.length + 1,
        label: ''
      });
    }
  },
  watch: {
    showDetail: function showDetail(val) {
      if (!val) {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SurveyApp/SurveyListItem.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/SurveyApp/SurveyListItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data', 'selectedItems'],
  methods: {
    toggleItem: function toggleItem(event, itemId) {
      this.$emit('toggle-item', event, itemId);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/TodoApp/TodoListItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/TodoApp/TodoListItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data', 'selectedItems'],
  methods: {
    toggleItem: function toggleItem(event, itemId) {
      this.$emit('toggle-item', event, itemId);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/Chat.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/applications/Chat.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Common_ApplicationMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Common/ApplicationMenu */ "./resources/src/components/Common/ApplicationMenu.vue");
/* harmony import */ var _components_ChatApp_ContactList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/ChatApp/ContactList */ "./resources/src/components/ChatApp/ContactList.vue");
/* harmony import */ var _components_ChatApp_ConversationList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/ChatApp/ConversationList */ "./resources/src/components/ChatApp/ConversationList.vue");
/* harmony import */ var _components_ChatApp_ConversationDetail__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/ChatApp/ConversationDetail */ "./resources/src/components/ChatApp/ConversationDetail.vue");












function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ApplicationMenu: _components_Common_ApplicationMenu__WEBPACK_IMPORTED_MODULE_12__["default"],
    ContactList: _components_ChatApp_ContactList__WEBPACK_IMPORTED_MODULE_13__["default"],
    ConversationList: _components_ChatApp_ConversationList__WEBPACK_IMPORTED_MODULE_14__["default"],
    ConversationDetail: _components_ChatApp_ConversationDetail__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  data: function data() {
    return {
      tabIndex: 0,
      message: '',
      searchKey: '',
      isLoadCurrentConversation: false,
      otherUser: null,
      conversationMessages: null
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])(['currentUser', 'isLoadContacts', 'isLoadConversations', 'error', 'contacts', 'contactsSearchResult', 'conversations'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapActions"])(['getContacts', 'searchContacts', 'getConversations']), {
    selectConversation: function selectConversation(otherUser, messages) {
      this.otherUser = otherUser;
      this.conversationMessages = messages;
    },
    selectContact: function selectContact(userId) {
      var _this = this;

      this.otherUser = this.contacts.find(function (x) {
        return x.id === userId;
      });
      var conversation = this.conversations.find(function (x) {
        return x.users.includes(userId) && x.users.includes(_this.currentUser.id);
      });

      if (conversation) {
        console.log('change selected conversation');
        this.conversationMessages = conversation.messages;
      } else {
        console.log('create new conversation');
        var date = new Date();
        this.conversations.splice(0, 0, {
          users: [userId, this.currentUser.id],
          messages: [],
          lastMessageTime: date.getHours() + ':' + date.getMinutes()
        });
        this.conversationMessages = [];
      }

      this.tabIndex = 0;
      this.message = '';
      this.searchKey = '';
    },
    sendMessage: function sendMessage() {
      console.log('add message to conversation');
      var date = new Date();
      this.conversationMessages.push({
        sender: this.currentUser.id,
        text: this.message,
        time: date.getHours() + ':' + date.getMinutes()
      });
      this.message = '';
    }
  }),
  mounted: function mounted() {
    this.getContacts({
      userId: this.currentUser.id,
      searchKey: ''
    });
    this.getConversations(this.currentUser.id);
  },
  watch: {
    searchKey: function searchKey(val, oldVal) {
      this.searchContacts({
        userId: this.currentUser.id,
        searchKey: val
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/Survey.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/applications/Survey.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_SurveyApp_SurveyListItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/SurveyApp/SurveyListItem */ "./resources/src/components/SurveyApp/SurveyListItem.vue");
/* harmony import */ var _components_Common_ApplicationMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/Common/ApplicationMenu */ "./resources/src/components/Common/ApplicationMenu.vue");













function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_13___default.a,
    SurveyListItem: _components_SurveyApp_SurveyListItem__WEBPACK_IMPORTED_MODULE_15__["default"],
    ApplicationMenu: _components_Common_ApplicationMenu__WEBPACK_IMPORTED_MODULE_16__["default"]
  },
  data: function data() {
    return {
      sort: {
        column: 'title',
        label: 'Title'
      },
      sortOptions: [{
        column: 'title',
        label: 'Title'
      }, {
        column: 'category',
        label: 'Category'
      }, {
        column: 'label',
        label: 'Label'
      }, {
        column: 'status',
        label: 'Status'
      }],
      search: '',
      selectedItems: [],
      categories: [{
        label: 'Development',
        value: 'Development'
      }, {
        label: 'Workplace',
        value: 'Workplace'
      }, {
        label: 'Hardware',
        value: 'Hardware'
      }],
      labels: [{
        label: 'EDUCATION',
        value: 'EDUCATION',
        color: 'secondary'
      }, {
        label: 'NEW FRAMEWORK',
        value: 'NEW FRAMEWORK',
        color: 'primary'
      }, {
        label: 'PERSONAL',
        value: 'PERSONAL',
        color: 'info'
      }],
      statuses: [{
        text: 'ACTIVE',
        value: 'ACTIVE'
      }, {
        text: 'COMPLETED',
        value: 'COMPLETED'
      }],
      newItem: {
        title: '',
        category: '',
        detail: '',
        label: '',
        status: ''
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_12__["mapGetters"])(['isLoadSurveys', 'surveyItems', 'surveyError'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_12__["mapActions"])(['getSurveyItems']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_12__["mapMutations"])(['addSurveyItem']), {
    isSelectedAll: function isSelectedAll() {
      return this.selectedItems.length >= this.surveyItems.length;
    },
    isAnyItemSelected: function isAnyItemSelected() {
      return this.selectedItems.length > 0 && this.selectedItems.length < this.surveyItems.length;
    },
    hideModal: function hideModal(refname) {
      this.$refs[refname].hide();
    },
    changeOrderBy: function changeOrderBy(sort) {
      this.sort = sort;
    },
    addNewItem: function addNewItem() {
      var date = new Date();
      this.addSurveyItem({
        title: this.newItem.title,
        category: this.newItem.category.value,
        detail: this.newItem.detail,
        label: this.newItem.label.value,
        status: this.newItem.status,
        date: date.getDay() + '.' + date.getMonth() + 1 + '.' + date.getFullYear(),
        labelColor: this.newItem.label.color,
        questions: []
      });
      this.newItem = {
        title: '',
        category: '',
        detail: '',
        label: '',
        status: ''
      };
      this.hideModal('modalright');
    },
    selectAll: function selectAll(isToggle) {
      if (this.selectedItems.length >= this.surveyItems.length) {
        if (isToggle) {
          this.selectedItems = [];
        }
      } else {
        this.selectedItems = this.surveyItems.map(function (x) {
          return x.id;
        });
      }
    },
    keymap: function keymap(event) {
      switch (event.srcKey) {
        case 'select':
          this.selectAll(false);
          break;

        case 'undo':
          this.selectedItems = [];
          break;
      }
    },
    getIndex: function getIndex(value, arr, prop) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }

      return -1;
    },
    toggleItem: function toggleItem(event, itemId) {
      if (event.shiftKey && this.selectedItems.length > 0) {
        var _this$selectedItems;

        var itemsForToggle = this.surveyItems;
        var start = this.getIndex(itemId, itemsForToggle, 'id');
        var end = this.getIndex(this.selectedItems[this.selectedItems.length - 1], itemsForToggle, 'id');
        itemsForToggle = itemsForToggle.slice(Math.min(start, end), Math.max(start, end) + 1);

        (_this$selectedItems = this.selectedItems).push.apply(_this$selectedItems, Object(_Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(itemsForToggle.map(function (item) {
          return item.id;
        })));
      } else {
        if (this.selectedItems.includes(itemId)) {
          this.selectedItems = this.selectedItems.filter(function (x) {
            return x !== itemId;
          });
        } else {
          this.selectedItems.push(itemId);
        }
      }
    },
    handleContextmenu: function handleContextmenu(vnode) {
      if (!this.selectedItems.includes(vnode.key)) {
        this.selectedItems = [vnode.key];
      }
    },
    onContextCopy: function onContextCopy() {
      console.log('context menu item clicked - Copy Items: ', this.selectedItems);
    },
    onContextArchive: function onContextArchive() {
      console.log('context menu item clicked - Move to Archive Items: ', this.selectedItems);
    },
    onContextDelete: function onContextDelete() {
      console.log('context menu item clicked - Delete Items: ', this.selectedItems);
    }
  }),
  mounted: function mounted() {
    this.getSurveyItems();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/SurveyDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/applications/SurveyDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_Charts_DoughnutShadow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Charts/DoughnutShadow */ "./resources/src/components/Charts/DoughnutShadow.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_SurveyApp_QuestionBuilder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/SurveyApp/QuestionBuilder */ "./resources/src/components/SurveyApp/QuestionBuilder.vue");
/* harmony import */ var _components_Common_ApplicationMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Common/ApplicationMenu */ "./resources/src/components/Common/ApplicationMenu.vue");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils */ "./resources/src/utils/index.js");









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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var colors = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["ThemeColors"])();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_10___default.a,
    QuestionBuilder: _components_SurveyApp_QuestionBuilder__WEBPACK_IMPORTED_MODULE_11__["default"],
    ApplicationMenu: _components_Common_ApplicationMenu__WEBPACK_IMPORTED_MODULE_12__["default"],
    DoughnutShadowChart: _components_Charts_DoughnutShadow__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      categories: [{
        label: 'Development',
        value: 'Development'
      }, {
        label: 'Workplace',
        value: 'Workplace'
      }, {
        label: 'Hardware',
        value: 'Hardware'
      }],
      labels: [{
        label: 'EDUCATION',
        value: 'EDUCATION',
        color: 'secondary'
      }, {
        label: 'NEW FRAMEWORK',
        value: 'NEW FRAMEWORK',
        color: 'primary'
      }, {
        label: 'PERSONAL',
        value: 'PERSONAL',
        color: 'info'
      }],
      statuses: [{
        text: 'ACTIVE',
        value: 'ACTIVE'
      }, {
        text: 'COMPLETED',
        value: 'COMPLETED'
      }],
      currentSurvey: null,
      tabIndex: 0,
      ageChartData: {
        labels: ['12-24', '24-30', '30-40', '40-50', '50-60'],
        datasets: [{
          label: '',
          borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3, colors.themeColor4, colors.themeColor5],
          backgroundColor: [colors.themeColor1_10, colors.themeColor2_10, colors.themeColor3_10, colors.themeColor4_10, colors.themeColor5_10],
          borderWidth: 2,
          data: [15, 25, 20, 30, 14]
        }]
      },
      genderChartData: {
        labels: ['Male', 'Female', 'Other'],
        datasets: [{
          label: '',
          borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
          backgroundColor: [colors.themeColor1_10, colors.themeColor2_10, colors.themeColor3_10],
          borderWidth: 2,
          data: [85, 45, 20]
        }]
      },
      workChartData: {
        labels: ['Employed for wages', 'Self-employed', 'Looking for work', 'Retired'],
        datasets: [{
          label: '',
          borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3, colors.themeColor4],
          backgroundColor: [colors.themeColor1_10, colors.themeColor2_10, colors.themeColor3_10, colors.themeColor4_10],
          borderWidth: 2,
          data: [15, 25, 20, 8]
        }]
      },
      codingChartData: {
        labels: ['Python', 'JavaScript', 'PHP', 'Java', 'C#'],
        datasets: [{
          label: '',
          borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3, colors.themeColor4, colors.themeColor5],
          backgroundColor: [colors.themeColor1_10, colors.themeColor2_10, colors.themeColor3_10, colors.themeColor4_10, colors.themeColor4_10],
          borderWidth: 2,
          data: [15, 25, 20, 8, 25]
        }]
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])(['isLoadSurveys', 'surveyItems', 'surveyError'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapActions"])(['getSurveyItems']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapMutations"])(['addSurveyItem']), {
    addQuestion: function addQuestion() {
      this.currentSurvey.questions.push({
        id: this.currentSurvey.questions.length + 1,
        title: 'New Question',
        question: 'Question',
        answerType: 0,
        answers: []
      });
    }
  }),
  mounted: function mounted() {
    this.getSurveyItems();
  },
  watch: {
    isLoadSurveys: function isLoadSurveys(val) {
      if (val === true) {
        this.currentSurvey = this.surveyItems[0];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/Todo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/applications/Todo.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_TodoApp_TodoListItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/TodoApp/TodoListItem */ "./resources/src/components/TodoApp/TodoListItem.vue");
/* harmony import */ var _components_Common_ApplicationMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/Common/ApplicationMenu */ "./resources/src/components/Common/ApplicationMenu.vue");













function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_13___default.a,
    TodoListItem: _components_TodoApp_TodoListItem__WEBPACK_IMPORTED_MODULE_15__["default"],
    ApplicationMenu: _components_Common_ApplicationMenu__WEBPACK_IMPORTED_MODULE_16__["default"]
  },
  data: function data() {
    return {
      sort: {
        column: 'title',
        label: 'Title'
      },
      sortOptions: [{
        column: 'title',
        label: 'Title'
      }, {
        column: 'category',
        label: 'Category'
      }, {
        column: 'label',
        label: 'Label'
      }, {
        column: 'status',
        label: 'Status'
      }],
      search: '',
      selectedItems: [],
      categories: [{
        label: 'Flexbox',
        value: 'Flexbox'
      }, {
        label: 'Sass',
        value: 'Sass'
      }, {
        label: 'Vue',
        value: 'Vue'
      }, {
        label: 'React',
        value: 'React'
      }],
      labels: [{
        label: 'EDUCATION',
        value: 'EDUCATION',
        color: 'secondary'
      }, {
        label: 'NEW FRAMEWORK',
        value: 'NEW FRAMEWORK',
        color: 'primary'
      }, {
        label: 'PERSONAL',
        value: 'PERSONAL',
        color: 'info'
      }],
      statuses: [{
        text: 'PENDING',
        value: 'PENDING'
      }, {
        text: 'COMPLETED',
        value: 'COMPLETED'
      }],
      newItem: {
        title: '',
        category: '',
        detail: '',
        label: '',
        status: ''
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_12__["mapGetters"])(['isLoad', 'items', 'todoError'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_12__["mapActions"])(['getTodoItems']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_12__["mapMutations"])(['addTodoItem']), {
    isSelectedAll: function isSelectedAll() {
      return this.selectedItems.length >= this.items.length;
    },
    isAnyItemSelected: function isAnyItemSelected() {
      return this.selectedItems.length > 0 && this.selectedItems.length < this.items.length;
    },
    hideModal: function hideModal(refname) {
      this.$refs[refname].hide();
    },
    changeOrderBy: function changeOrderBy(sort) {
      this.sort = sort;
    },
    addNewItem: function addNewItem() {
      var date = new Date();
      this.addTodoItem({
        title: this.newItem.title,
        detail: this.newItem.detail,
        category: this.newItem.category.value,
        label: this.newItem.label.value,
        status: this.newItem.status,
        date: date.getDay() + '.' + date.getMonth() + 1 + '.' + date.getFullYear(),
        labelColor: this.newItem.label.color
      });
      this.newItem = {
        title: '',
        category: '',
        detail: '',
        label: '',
        status: ''
      };
      this.hideModal('modalright');
    },
    selectAll: function selectAll(isToggle) {
      if (this.selectedItems.length >= this.items.length) {
        if (isToggle) {
          this.selectedItems = [];
        }
      } else {
        this.selectedItems = this.items.map(function (x) {
          return x.id;
        });
      }
    },
    keymap: function keymap(event) {
      switch (event.srcKey) {
        case 'select':
          this.selectAll(false);
          break;

        case 'undo':
          this.selectedItems = [];
          break;
      }
    },
    getIndex: function getIndex(value, arr, prop) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }

      return -1;
    },
    toggleItem: function toggleItem(event, itemId) {
      if (event.shiftKey && this.selectedItems.length > 0) {
        var _this$selectedItems;

        var itemsForToggle = this.items;
        var start = this.getIndex(itemId, itemsForToggle, 'id');
        var end = this.getIndex(this.selectedItems[this.selectedItems.length - 1], itemsForToggle, 'id');
        itemsForToggle = itemsForToggle.slice(Math.min(start, end), Math.max(start, end) + 1);

        (_this$selectedItems = this.selectedItems).push.apply(_this$selectedItems, Object(_Applications_XAMPP_xamppfiles_htdocs_shaverno_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(itemsForToggle.map(function (item) {
          return item.id;
        })));
      } else {
        if (this.selectedItems.includes(itemId)) {
          this.selectedItems = this.selectedItems.filter(function (x) {
            return x !== itemId;
          });
        } else {
          this.selectedItems.push(itemId);
        }
      }
    },
    handleContextmenu: function handleContextmenu(vnode) {
      if (!this.selectedItems.includes(vnode.key)) {
        this.selectedItems = [vnode.key];
      }
    },
    onContextCopy: function onContextCopy() {
      console.log('context menu item clicked - Copy Items: ', this.selectedItems);
    },
    onContextArchive: function onContextArchive() {
      console.log('context menu item clicked - Move to Archive Items: ', this.selectedItems);
    },
    onContextDelete: function onContextDelete() {
      console.log('context menu item clicked - Delete Items: ', this.selectedItems);
    }
  }),
  mounted: function mounted() {
    this.getTodoItems();
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ChatApp/ContactList.vue?vue&type=template&id=37f4dd02&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/ChatApp/ContactList.vue?vue&type=template&id=37f4dd02& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "vue-perfect-scrollbar",
    { attrs: { settings: { suppressScrollX: true, wheelPropagation: false } } },
    [
      _c(
        "div",
        { staticClass: "pt-0 pr-4 pl-4 pb-0" },
        _vm._l(_vm.data, function(contact, index) {
          return _c(
            "div",
            {
              key: "contact" + index,
              staticClass: "d-flex flex-row mb-3 border-bottom pb-3"
            },
            [
              _c(
                "a",
                {
                  staticClass: "d-flex",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.selectContact(contact.id)
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass:
                      "img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall",
                    attrs: { alt: contact.title, src: contact.img }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex flex-grow-1 min-width-zero" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                        },
                        [
                          _c("div", { staticClass: "min-width-zero" }, [
                            _c("p", { staticClass: " mb-0 truncate" }, [
                              _vm._v(_vm._s(contact.title))
                            ])
                          ])
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ChatApp/ConversationDetail.vue?vue&type=template&id=1c2b6540&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/ChatApp/ConversationDetail.vue?vue&type=template&id=1c2b6540& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "d-flex flex-row chat-heading" }, [
        _c("div", { staticClass: "d-flex" }, [
          _c("img", {
            staticClass:
              "img-thumbnail border-0 rounded-circle ml-0 mr-4 list-thumbnail align-self-center small",
            attrs: { alt: _vm.otherUser.title, src: _vm.otherUser.img }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex min-width-zero" }, [
          _c(
            "div",
            {
              staticClass:
                "card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
            },
            [
              _c("div", { staticClass: "min-width-zero" }, [
                _c("div", [
                  _c("p", { staticClass: "list-item-heading mb-1 truncate" }, [
                    _vm._v(_vm._s(_vm.otherUser.title))
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "mb-0 text-muted text-small" }, [
                  _vm._v(_vm._s(_vm.otherUser.date))
                ])
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "separator mb-5" }),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          ref: "chatArea",
          staticClass: "scroll",
          attrs: {
            settings: { suppressScrollX: true, wheelPropagation: false }
          }
        },
        _vm._l(_vm.messages, function(message, index) {
          return _c(
            "div",
            { key: "message" + index },
            [
              _c(
                "b-card",
                {
                  class: {
                    "d-inline-block mb-3": true,
                    "float-left": message.sender == _vm.otherUser.id,
                    "float-right": message.sender == _vm.currentUser.id
                  },
                  attrs: { "no-body": "" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "position-absolute pt-1 pr-2 r-0" },
                    [
                      _c(
                        "span",
                        { staticClass: "text-extra-small text-muted" },
                        [_vm._v(_vm._s(message.time))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("b-card-body", [
                    message.sender == _vm.currentUser.id
                      ? _c("div", { staticClass: "d-flex flex-row pb-1" }, [
                          _c("img", {
                            staticClass:
                              "img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall",
                            attrs: {
                              alt: _vm.currentUser.title,
                              src: _vm.currentUser.img
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "d-flex flex-grow-1 min-width-zero"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                                },
                                [
                                  _c("div", { staticClass: "min-width-zero" }, [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "mb-0 truncate list-item-heading"
                                      },
                                      [_vm._v(_vm._s(_vm.currentUser.title))]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ])
                      : _c("div", { staticClass: "d-flex flex-row pb-1" }, [
                          _c("img", {
                            staticClass:
                              "img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall",
                            attrs: {
                              alt: _vm.otherUser.title,
                              src: _vm.otherUser.img
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "d-flex flex-grow-1 min-width-zero"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                                },
                                [
                                  _c("div", { staticClass: "min-width-zero" }, [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "mb-0 truncate list-item-heading"
                                      },
                                      [_vm._v(_vm._s(_vm.otherUser.title))]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "chat-text-left" }, [
                      _c("p", { staticClass: "mb-0 text-semi-muted" }, [
                        _vm._v(_vm._s(message.text))
                      ])
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "clearfix" })
            ],
            1
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ChatApp/ConversationList.vue?vue&type=template&id=454fd8cd&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/ChatApp/ConversationList.vue?vue&type=template&id=454fd8cd& ***!
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
    "vue-perfect-scrollbar",
    {
      staticClass: "scroll",
      attrs: { settings: { suppressScrollX: true, wheelPropagation: false } }
    },
    [
      _c(
        "div",
        { staticClass: "pt-0 pr-4 pl-4 pb-0" },
        _vm._l(_vm.conversations, function(conversation, index) {
          return _c(
            "div",
            {
              key: "conversation" + index,
              staticClass: "d-flex flex-row mb-1 border-bottom pb-3"
            },
            [
              _c(
                "a",
                {
                  staticClass: "d-flex",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.selectConversation(conversation)
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass:
                      "img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall",
                    attrs: {
                      alt: _vm.otherUser(conversation.users).title,
                      src: _vm.otherUser(conversation.users).img
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex flex-grow-1 min-width-zero" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                        },
                        [
                          _c("div", { staticClass: "min-width-zero" }, [
                            _c("p", { staticClass: "mb-0 truncate" }, [
                              _vm._v(
                                _vm._s(_vm.otherUser(conversation.users).title)
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              { staticClass: "mb-1 text-muted text-small" },
                              [_vm._v(_vm._s(conversation.lastMessageTime))]
                            )
                          ])
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Common/ApplicationMenu.vue?vue&type=template&id=2aee1351&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Common/ApplicationMenu.vue?vue&type=template&id=2aee1351& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      class: { "app-menu": true, shown: _vm.isOpen },
      on: {
        mouseenter: function($event) {
          _vm.isMenuOver = true
        },
        mouseleave: function($event) {
          _vm.isMenuOver = false
        }
      }
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "app-menu-button d-inline-block d-xl-none",
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.toggle($event)
            }
          }
        },
        [_c("i", { staticClass: "simple-icon-refresh" })]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SurveyApp/QuestionBuilder.vue?vue&type=template&id=5d9b34b7&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/SurveyApp/QuestionBuilder.vue?vue&type=template&id=5d9b34b7& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "question d-flex mb-4 edit-quesiton",
      attrs: { "no-body": "" }
    },
    [
      _c("div", { staticClass: "d-flex flex-grow-1 min-width-zero" }, [
        _c(
          "div",
          {
            staticClass:
              "card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"
          },
          [
            _c(
              "div",
              { staticClass: "list-item-heading mb-0 truncate w-80 mb-1 mt-1" },
              [
                _c("span", { staticClass: "heading-number d-inline-block" }, [
                  _vm._v(_vm._s(_vm.sort))
                ]),
                _vm._v(_vm._s(_vm.title) + "\r\n            ")
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "custom-control custom-checkbox pl-1 align-self-center pr-4"
          },
          [
            _vm.mode == "edit"
              ? _c(
                  "b-button",
                  {
                    staticClass: "icon-button",
                    attrs: { variant: "outline-theme-3" },
                    on: {
                      click: function($event) {
                        return _vm.changeMode("preview")
                      }
                    }
                  },
                  [_c("i", { staticClass: "simple-icon-eye" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.mode == "preview"
              ? _c(
                  "b-button",
                  {
                    staticClass: "icon-button",
                    attrs: { variant: "outline-theme-3" },
                    on: {
                      click: function($event) {
                        return _vm.changeMode("edit")
                      }
                    }
                  },
                  [_c("i", { staticClass: "simple-icon-pencil" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "b-button",
              {
                staticClass: "icon-button rotate-icon-click rotate",
                attrs: {
                  variant: "outline-theme-3",
                  "aria-controls": "questionCollapse" + _vm.sort,
                  "aria-expanded": _vm.showDetail ? "true" : "false"
                },
                on: {
                  click: function($event) {
                    _vm.showDetail = !_vm.showDetail
                  }
                }
              },
              [
                _c("i", {
                  class: {
                    "with-rotate-icon": true,
                    "simple-icon-arrow-down": !_vm.showDetail,
                    "simple-icon-arrow-up": _vm.showDetail
                  }
                })
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "b-collapse",
        {
          staticClass: "question-collapse",
          attrs: { id: "questionCollapse" + _vm.sort },
          model: {
            value: _vm.showDetail,
            callback: function($$v) {
              _vm.showDetail = $$v
            },
            expression: "showDetail"
          }
        },
        [
          _c("div", { staticClass: "card-body pt-0" }, [
            _vm.mode == "edit"
              ? _c("div", { key: "edit" }, [
                  _c(
                    "div",
                    { staticClass: "form-group mb-3" },
                    [
                      _c("label", [_vm._v("Title")]),
                      _vm._v(" "),
                      _c("b-input", {
                        model: {
                          value: _vm.title,
                          callback: function($$v) {
                            _vm.title = $$v
                          },
                          expression: "title"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group mb-5" },
                    [
                      _c("label", [_vm._v("Question")]),
                      _vm._v(" "),
                      _c("b-input", {
                        model: {
                          value: _vm.question,
                          callback: function($$v) {
                            _vm.question = $$v
                          },
                          expression: "question"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "separator mb-4" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { staticClass: "d-block" }, [
                        _vm._v("Answer Type")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: { options: _vm.questionTypes },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "option",
                              fn: function(option) {
                                return [
                                  _vm._v(
                                    "\r\n                            " +
                                      _vm._s(option.label) +
                                      "\r\n                        "
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          false,
                          136478423
                        ),
                        model: {
                          value: _vm.answerType,
                          callback: function($$v) {
                            _vm.answerType = $$v
                          },
                          expression: "answerType"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.answerType.options
                    ? _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { staticClass: "d-block" }, [
                            _vm._v("Answers")
                          ]),
                          _vm._v(" "),
                          _c(
                            "draggable",
                            {
                              staticClass: "answers mb-3 sortable",
                              attrs: {
                                type: "div",
                                options: { handle: ".handle" }
                              }
                            },
                            _vm._l(_vm.answers, function(a, index) {
                              return _c(
                                "div",
                                {
                                  key: index,
                                  staticClass: "mb-1 position-relative"
                                },
                                [
                                  _c("b-input", { attrs: { value: a.label } }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "input-icons" }, [
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-pill handle pr-0 mr-0"
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "simple-icon-cursor-move"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "badge badge-pill",
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteAnswer(a.value)
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "simple-icon-ban"
                                        })
                                      ]
                                    )
                                  ])
                                ],
                                1
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "text-center" },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mb-2",
                                  attrs: {
                                    variant: "outline-primary",
                                    size: "sm"
                                  },
                                  on: { click: _vm.addAnswer }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "simple-icon-plus btn-group-icon"
                                  }),
                                  _vm._v(" Add Answer")
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ])
              : _vm.mode == "preview"
              ? _c(
                  "div",
                  { key: "preview" },
                  [
                    _c("label", [_vm._v(_vm._s(_vm.question))]),
                    _vm._v(" "),
                    _vm.answerType.value == 0
                      ? _c("b-input", { key: "text-input-preview" })
                      : _vm.answerType.value == 1
                      ? _c("v-select", {
                          key: "single-select-preview",
                          attrs: { options: _vm.answers }
                        })
                      : _vm.answerType.value == 2
                      ? _c("v-select", {
                          key: "multiple-select-preview",
                          attrs: { options: _vm.answers }
                        })
                      : _vm.answerType.value == 3
                      ? _c(
                          "b-form-checkbox-group",
                          { key: "checkbox-preview", attrs: { stacked: "" } },
                          _vm._l(_vm.answers, function(a, index) {
                            return _c(
                              "b-form-checkbox",
                              {
                                key: "ans_" + index,
                                attrs: { value: a.value }
                              },
                              [_vm._v(_vm._s(a.label))]
                            )
                          }),
                          1
                        )
                      : _vm.answerType.value == 4
                      ? _c(
                          "b-form-radio-group",
                          {
                            key: "radiobutton-preview",
                            attrs: { stacked: "" }
                          },
                          _vm._l(_vm.answers, function(a, index) {
                            return _c(
                              "b-form-radio",
                              {
                                key: "ans_" + index,
                                attrs: { value: a.value }
                              },
                              [_vm._v(_vm._s(a.label))]
                            )
                          }),
                          1
                        )
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e()
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SurveyApp/SurveyListItem.vue?vue&type=template&id=1b50ee59&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/SurveyApp/SurveyListItem.vue?vue&type=template&id=1b50ee59& ***!
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
    {
      class: {
        "d-flex mb-3": true,
        active: _vm.selectedItems.includes(_vm.data.id)
      },
      attrs: { "no-body": "" },
      on: {
        click: function($event) {
          return _vm.toggleItem($event, _vm.data.id)
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "d-flex flex-grow-1 min-width-zero" },
        [
          _c(
            "b-card-body",
            {
              staticClass:
                "align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center pb-2"
            },
            [
              _c(
                "a",
                {
                  staticClass:
                    "list-item-heading mb-0 truncate w-40 w-xs-100  mb-1 mt-1",
                  attrs: { href: "/app/applications/survey/" + _vm.data.id }
                },
                [
                  _c("i", {
                    class: {
                      "heading-icon": true,
                      "simple-icon-check": _vm.data.status === "COMPLETED",
                      "simple-icon-refresh": _vm.data.status !== "COMPLETED"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle d-inline-block" }, [
                    _vm._v(_vm._s(_vm.data.title))
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "mb-1 text-muted text-small w-15 w-xs-100" },
                [_vm._v(_vm._s(_vm.data.category))]
              ),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "mb-1 text-muted text-small w-15 w-xs-100" },
                [_vm._v(_vm._s(_vm.data.date))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-15 w-xs-100" },
                [
                  _c(
                    "b-badge",
                    { attrs: { variant: _vm.data.labelColor, pill: "" } },
                    [_vm._v(_vm._s(_vm.data.label))]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "custom-control custom-checkbox pl-1 align-self-center pr-sm-4 pt-sm-4custom-control custom-checkbox pl-1 align-self-md-center align-self-start pr-md-2 pt-4"
            },
            [
              _c("b-form-checkbox", {
                staticClass: "itemCheck mb-0",
                attrs: { checked: _vm.selectedItems.includes(_vm.data.id) }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-body pt-1" }, [
        _c("p", {
          staticClass: "mb-0",
          domProps: { innerHTML: _vm._s(_vm.data.detail) }
        })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/TodoApp/TodoListItem.vue?vue&type=template&id=da4fcd9e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/TodoApp/TodoListItem.vue?vue&type=template&id=da4fcd9e& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    {
      class: {
        "d-flex mb-3": true,
        active: _vm.selectedItems.includes(_vm.data.id)
      },
      attrs: { "no-body": "" },
      on: {
        click: function($event) {
          $event.preventDefault()
          return _vm.toggleItem($event, _vm.data.id)
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "d-flex flex-grow-1 min-width-zero" },
        [
          _c(
            "b-card-body",
            {
              staticClass:
                "align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center pb-2"
            },
            [
              _c(
                "a",
                {
                  staticClass:
                    "list-item-heading mb-0 truncate w-40 w-xs-100  mb-1 mt-1",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                    }
                  }
                },
                [
                  _c("i", {
                    class: {
                      "heading-icon": true,
                      "simple-icon-check": _vm.data.status === "COMPLETED",
                      "simple-icon-refresh": _vm.data.status !== "COMPLETED"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle d-inline-block" }, [
                    _vm._v(_vm._s(_vm.data.title))
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "mb-1 text-muted text-small w-15 w-xs-100" },
                [_vm._v(_vm._s(_vm.data.category))]
              ),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "mb-1 text-muted text-small w-15 w-xs-100" },
                [_vm._v(_vm._s(_vm.data.date))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-15 w-xs-100" },
                [
                  _c(
                    "b-badge",
                    { attrs: { variant: _vm.data.labelColor, pill: "" } },
                    [_vm._v(_vm._s(_vm.data.label))]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "custom-control custom-checkbox pl-1 align-self-md-center align-self-start pr-md-2 pt-4"
            },
            [
              _c("b-form-checkbox", {
                staticClass: "itemCheck mb-0",
                attrs: { checked: _vm.selectedItems.includes(_vm.data.id) }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-body pt-1" }, [
        _c("p", {
          staticClass: "mb-0",
          domProps: { innerHTML: _vm._s(_vm.data.detail) }
        })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/Chat.vue?vue&type=template&id=704a1c62&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/applications/Chat.vue?vue&type=template&id=704a1c62& ***!
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
        { staticClass: "app-row" },
        [
          _c(
            "b-colxx",
            { staticClass: "chat-app", attrs: { xxs: "12" } },
            [
              _vm.isLoadContacts &&
              _vm.isLoadConversations &&
              _vm.otherUser != null
                ? _c("conversation-detail", {
                    key: "conversation",
                    attrs: {
                      "current-user": _vm.currentUser,
                      "other-user": _vm.otherUser,
                      messages: _vm.conversationMessages
                    }
                  })
                : _c("div", {
                    key: "conversationLoading",
                    staticClass: "loading"
                  })
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
            "chat-input-container d-flex justify-content-between align-items-center"
        },
        [
          _c("b-input", {
            staticClass: "flex-grow-1",
            attrs: { type: "text", placeholder: _vm.$t("chat.saysomething") },
            nativeOn: {
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.sendMessage($event)
              }
            },
            model: {
              value: _vm.message,
              callback: function($$v) {
                _vm.message = $$v
              },
              expression: "message"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "b-button",
                {
                  staticClass: "icon-button large ml-1",
                  attrs: { variant: "outline-primary" }
                },
                [_c("i", { staticClass: "simple-icon-paper-clip" })]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "icon-button large ml-1",
                  attrs: { variant: "primary" },
                  on: { click: _vm.sendMessage }
                },
                [_c("i", { staticClass: "simple-icon-arrow-right" })]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "application-menu",
        [
          _c(
            "b-tabs",
            {
              staticClass: "pl-0 pr-0 h-100",
              attrs: {
                "no-fade": "",
                "content-class": "chat-app-tab-content",
                "nav-class": "card-header-tabs ml-0 mr-0"
              },
              model: {
                value: _vm.tabIndex,
                callback: function($$v) {
                  _vm.tabIndex = $$v
                },
                expression: "tabIndex"
              }
            },
            [
              _c(
                "b-tab",
                {
                  staticClass: "chat-app-tab-pane",
                  attrs: {
                    title: _vm.$t("chat.messages"),
                    active: "",
                    "title-item-class": "w-50 text-center",
                    "no-body": ""
                  }
                },
                [
                  _c("div", { staticClass: "pt-4 pr-4 pl-4 pb-0 mt-2" }),
                  _vm._v(" "),
                  _vm.isLoadContacts && _vm.isLoadConversations
                    ? _c("conversation-list", {
                        key: "conversationList",
                        attrs: {
                          "current-user": _vm.currentUser,
                          conversations: _vm.conversations,
                          contacts: _vm.contacts
                        },
                        on: { "select-conversation": _vm.selectConversation }
                      })
                    : _c("div", {
                        key: "conversationListLoading",
                        staticClass: "loading"
                      })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                {
                  staticClass: "chat-app-tab-pane",
                  attrs: {
                    title: _vm.$t("chat.contacts"),
                    "title-item-class": "w-50 text-center",
                    "no-body": ""
                  }
                },
                [
                  _c("div", { staticClass: "pt-4 pr-4 pl-4 pb-0 mt-2" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("b-input", {
                          staticClass: "rounded",
                          attrs: {
                            type: "text",
                            placeholder: _vm.$t("menu.search")
                          },
                          model: {
                            value: _vm.searchKey,
                            callback: function($$v) {
                              _vm.searchKey = $$v
                            },
                            expression: "searchKey"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm.isLoadContacts
                    ? _c("contact-list", {
                        key: "contactList",
                        attrs: { data: _vm.contactsSearchResult },
                        on: { "select-contact": _vm.selectContact }
                      })
                    : _c("div", {
                        key: "contactListLoading",
                        staticClass: "loading"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/Survey.vue?vue&type=template&id=002aea38&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/applications/Survey.vue?vue&type=template&id=002aea38& ***!
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
    "div",
    { staticClass: "disable-text-selection" },
    [
      _c(
        "b-row",
        { staticClass: "app-row survey-app" },
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "div",
                { staticClass: "mb-2" },
                [
                  _c("h1", [_vm._v(_vm._s(_vm.$t("menu.survey")))]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "float-sm-right" },
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
                          staticClass: "top-right-button",
                          attrs: { variant: "primary", size: "lg" }
                        },
                        [_vm._v(_vm._s(_vm.$t("survey.add-new")))]
                      ),
                      _vm._v(" "),
                      _vm.isLoadSurveys
                        ? _c(
                            "b-button-group",
                            [
                              _c(
                                "b-dropdown",
                                {
                                  staticClass: "check-button",
                                  attrs: {
                                    split: "",
                                    right: "",
                                    variant: "primary"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.selectAll(true)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "custom-control custom-checkbox pl-4 mb-0 d-inline-block",
                                      attrs: { slot: "button-content" },
                                      slot: "button-content"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "shortkey",
                                            rawName: "v-shortkey",
                                            value: {
                                              select: ["ctrl", "a"],
                                              undo: ["ctrl", "d"]
                                            },
                                            expression:
                                              "{select: ['ctrl','a'], undo: ['ctrl','d']}"
                                          }
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: { type: "checkbox" },
                                        domProps: {
                                          checked: _vm.isSelectedAll()
                                        },
                                        on: { shortkey: _vm.keymap }
                                      }),
                                      _vm._v(" "),
                                      _c("span", {
                                        class: {
                                          "custom-control-label": true,
                                          indeterminate: _vm.isAnyItemSelected()
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("b-dropdown-item", [
                                    _vm._v(_vm._s(_vm.$t("survey.delete")))
                                  ]),
                                  _vm._v(" "),
                                  _c("b-dropdown-item", [
                                    _vm._v(
                                      _vm._s(_vm.$t("survey.another-action"))
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          ref: "modalright",
                          staticClass: "modal-right",
                          attrs: {
                            id: "modalright",
                            title: _vm.$t("survey.add-new-title")
                          }
                        },
                        [
                          _c(
                            "b-form",
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("survey.title") } },
                                [
                                  _c("b-form-input", {
                                    model: {
                                      value: _vm.newItem.title,
                                      callback: function($$v) {
                                        _vm.$set(_vm.newItem, "title", $$v)
                                      },
                                      expression: "newItem.title"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("todo.detail") } },
                                [
                                  _c("b-textarea", {
                                    attrs: { rows: 2, "max-rows": 2 },
                                    model: {
                                      value: _vm.newItem.detail,
                                      callback: function($$v) {
                                        _vm.$set(_vm.newItem, "detail", $$v)
                                      },
                                      expression: "newItem.detail"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("survey.category") } },
                                [
                                  _c("v-select", {
                                    attrs: { options: _vm.categories },
                                    model: {
                                      value: _vm.newItem.category,
                                      callback: function($$v) {
                                        _vm.$set(_vm.newItem, "category", $$v)
                                      },
                                      expression: "newItem.category"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("survey.label") } },
                                [
                                  _c("v-select", {
                                    attrs: { options: _vm.labels },
                                    model: {
                                      value: _vm.newItem.label,
                                      callback: function($$v) {
                                        _vm.$set(_vm.newItem, "label", $$v)
                                      },
                                      expression: "newItem.label"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("survey.status") } },
                                [
                                  _c("b-form-radio-group", {
                                    staticClass: "pt-2",
                                    attrs: {
                                      stacked: "",
                                      options: _vm.statuses
                                    },
                                    model: {
                                      value: _vm.newItem.status,
                                      callback: function($$v) {
                                        _vm.$set(_vm.newItem, "status", $$v)
                                      },
                                      expression: "newItem.status"
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
                            "template",
                            { slot: "modal-footer" },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "outline-secondary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.hideModal("modalright")
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.$t("survey.cancel")))]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.addNewItem()
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.$t("survey.submit")))]
                              )
                            ],
                            1
                          )
                        ],
                        2
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("piaf-breadcrumb")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-2" },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-toggle",
                          rawName: "v-b-toggle.displayOptions",
                          modifiers: { displayOptions: true }
                        }
                      ],
                      staticClass: "pt-0 pl-0 d-inline-block d-md-none",
                      attrs: { variant: "empty" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$t("survey.display-options")) +
                          " "
                      ),
                      _c("i", {
                        staticClass: "simple-icon-arrow-down align-middle"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-collapse",
                    {
                      staticClass: "d-md-block",
                      attrs: { id: "displayOptions" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "d-block d-md-inline-block mb-2" },
                        [
                          _c(
                            "b-dropdown",
                            {
                              staticClass: "mr-1 float-md-left btn-group ",
                              attrs: {
                                id: "ddown1",
                                text:
                                  _vm.$t("survey.orderby") +
                                  " " +
                                  _vm.sort.label,
                                variant: "outline-dark",
                                size: "xs"
                              }
                            },
                            _vm._l(_vm.sortOptions, function(order, index) {
                              return _c(
                                "b-dropdown-item",
                                {
                                  key: "order" + index,
                                  on: {
                                    click: function($event) {
                                      return _vm.changeOrderBy(order)
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(order.label))]
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "search-sm d-inline-block float-md-left mr-1 align-top"
                            },
                            [
                              _c("b-input", {
                                attrs: { placeholder: _vm.$t("menu.search") },
                                model: {
                                  value: _vm.search,
                                  callback: function($$v) {
                                    _vm.search = $$v
                                  },
                                  expression: "search"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" }),
              _vm._v(" "),
              _vm.isLoadSurveys
                ? _c(
                    "b-row",
                    { key: "itemList" },
                    _vm._l(_vm.surveyItems, function(item, index) {
                      return _c(
                        "b-colxx",
                        { key: "item" + index, attrs: { xxs: "12" } },
                        [
                          _c("survey-list-item", {
                            directives: [
                              {
                                name: "contextmenu",
                                rawName: "v-contextmenu:contextmenu",
                                arg: "contextmenu"
                              }
                            ],
                            key: item.id,
                            attrs: {
                              data: item,
                              "selected-items": _vm.selectedItems
                            },
                            on: { "toggle-item": _vm.toggleItem }
                          })
                        ],
                        1
                      )
                    }),
                    1
                  )
                : _c("div", { key: "itemLoading", staticClass: "loading" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-contextmenu",
        { ref: "contextmenu", on: { contextmenu: _vm.handleContextmenu } },
        [
          _c(
            "v-contextmenu-item",
            {
              on: {
                click: function($event) {
                  return _vm.onContextCopy()
                }
              }
            },
            [
              _c("i", { staticClass: "simple-icon-docs" }),
              _vm._v(" "),
              _c("span", [_vm._v("Copy")])
            ]
          ),
          _vm._v(" "),
          _c(
            "v-contextmenu-item",
            {
              on: {
                click: function($event) {
                  return _vm.onContextArchive()
                }
              }
            },
            [
              _c("i", { staticClass: "simple-icon-drawer" }),
              _vm._v(" "),
              _c("span", [_vm._v("Move to archive")])
            ]
          ),
          _vm._v(" "),
          _c(
            "v-contextmenu-item",
            {
              on: {
                click: function($event) {
                  return _vm.onContextDelete()
                }
              }
            },
            [
              _c("i", { staticClass: "simple-icon-trash" }),
              _vm._v(" "),
              _c("span", [_vm._v("Delete")])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "application-menu",
        [
          _c(
            "vue-perfect-scrollbar",
            {
              attrs: {
                settings: { suppressScrollX: true, wheelPropagation: false }
              }
            },
            [
              _c("div", { staticClass: "p-4" }, [
                _c("p", { staticClass: "text-muted text-small mb-3" }, [
                  _vm._v(_vm._s(_vm.$t("survey.status")))
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "list-unstyled mb-4" }, [
                  _c("li", { staticClass: "nav-item" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "simple-icon-reload" }),
                      _vm._v(_vm._s(_vm.$t("survey.all-surveys")) + " "),
                      _vm.isLoadSurveys
                        ? _c("span", { staticClass: "float-right" }, [
                            _vm._v(_vm._s(_vm.surveyItems.length))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "simple-icon-refresh" }),
                      _vm._v(_vm._s(_vm.$t("survey.active-surveys")) + " "),
                      _vm.isLoadSurveys
                        ? _c("span", { staticClass: "float-right" }, [
                            _vm._v(
                              _vm._s(
                                _vm.surveyItems.filter(function(x) {
                                  return x.status === "PENDING"
                                }).length
                              )
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "simple-icon-check" }),
                      _vm._v(_vm._s(_vm.$t("survey.completed-surveys")) + " "),
                      _vm.isLoadSurveys
                        ? _c("span", { staticClass: "float-right" }, [
                            _vm._v(
                              _vm._s(
                                _vm.surveyItems.filter(function(x) {
                                  return x.status === "COMPLETED"
                                }).length
                              )
                            )
                          ])
                        : _vm._e()
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted text-small mb-1" }, [
                  _vm._v(_vm._s(_vm.$t("survey.categories")))
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-unstyled mb-4" },
                  [
                    _c("b-form-radio-group", {
                      staticClass: "pt-2",
                      attrs: {
                        stacked: "",
                        options: _vm.categories.map(function(c) {
                          return { text: c.label, value: c.value }
                        })
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted text-small mb-3" }, [
                  _vm._v(_vm._s(_vm.$t("survey.labels")))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  _vm._l(_vm.labels, function(l, index) {
                    return _c(
                      "p",
                      { key: index, staticClass: "d-sm-inline-block mb-1" },
                      [
                        _c(
                          "a",
                          { attrs: { href: "#" } },
                          [
                            _c(
                              "b-badge",
                              {
                                staticClass: "mb-1 mr-1",
                                attrs: {
                                  pill: "",
                                  variant: "outline-" + l.color
                                }
                              },
                              [_vm._v(_vm._s(l.label))]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  }),
                  0
                )
              ])
            ]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/SurveyDetail.vue?vue&type=template&id=7630f456&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/applications/SurveyDetail.vue?vue&type=template&id=7630f456& ***!
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
    "div",
    { staticClass: "disable-text-selection" },
    [
      _c(
        "b-row",
        { staticClass: "app-row survey-app" },
        [
          _vm.isLoadSurveys
            ? _c(
                "b-colxx",
                { key: "surveyDetail", attrs: { xxs: "12" } },
                [
                  _vm.currentSurvey
                    ? _c("h1", [
                        _c("i", {
                          class: {
                            "heading-icon": true,
                            "simple-icon-check":
                              _vm.currentSurvey.status === "COMPLETED",
                            "simple-icon-refresh":
                              _vm.currentSurvey.status !== "COMPLETED"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "align-middle d-inline-block pt-1" },
                          [_vm._v(_vm._s(_vm.currentSurvey.title))]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "float-sm-right" },
                    [
                      _c(
                        "b-button-group",
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "flex-grow-1",
                              attrs: { variant: "outline-primary", size: "lg" }
                            },
                            [_vm._v(_vm._s(_vm.$t("survey.save")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                right: "",
                                variant: "outline-primary",
                                "toggle-class": "pl-4 pr-4"
                              }
                            },
                            [
                              _c("b-dropdown-item", [
                                _vm._v(_vm._s(_vm.$t("survey.delete")))
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", [
                                _vm._v(_vm._s(_vm.$t("survey.edit")))
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
                  _c("piaf-breadcrumb"),
                  _vm._v(" "),
                  _vm.isLoadSurveys
                    ? _c(
                        "b-tabs",
                        {
                          key: "itemList",
                          attrs: {
                            "nav-class": "separator-tabs ml-0 mb-5",
                            "content-class": "tab-content",
                            "no-fade": true
                          },
                          model: {
                            value: _vm.tabIndex,
                            callback: function($$v) {
                              _vm.tabIndex = $$v
                            },
                            expression: "tabIndex"
                          }
                        },
                        [
                          _c(
                            "b-tab",
                            { attrs: { title: _vm.$t("survey.details") } },
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-colxx",
                                    {
                                      staticClass: "mb-4",
                                      attrs: { xxs: "12", lg: "4" }
                                    },
                                    [
                                      _c(
                                        "b-card",
                                        {
                                          staticClass: "mb-4",
                                          attrs: { "no-body": "" }
                                        },
                                        [
                                          _c("b-card-body", [
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "list-item-heading mb-4"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t("survey.summary")
                                                  )
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
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("survey.title"))
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("p", { staticClass: "mb-3" }, [
                                              _vm._v(
                                                _vm._s(_vm.currentSurvey.title)
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "text-muted text-small mb-2"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "survey.details-lowercase"
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("p", {
                                              staticClass: "mb-3",
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.currentSurvey.detail
                                                )
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "text-muted text-small mb-2"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t("survey.category")
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("p", { staticClass: "mb-3" }, [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.currentSurvey.category
                                                )
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "text-muted text-small mb-2"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("survey.label"))
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("div", [
                                              _c(
                                                "p",
                                                {
                                                  staticClass:
                                                    "d-sm-inline-block mb-1"
                                                },
                                                [
                                                  _c(
                                                    "b-badge",
                                                    {
                                                      attrs: {
                                                        variant:
                                                          _vm.currentSurvey
                                                            .labelColor,
                                                        pill: ""
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.currentSurvey
                                                            .label
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("p", {
                                                staticClass:
                                                  "d-sm-inline-block mb-1"
                                              })
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
                                    { attrs: { xxs: "12", lg: "8" } },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "sortable-survey" },
                                        [
                                          _c(
                                            "draggable",
                                            {
                                              staticClass: "list-unstyled mb-4",
                                              attrs: {
                                                type: "ul",
                                                options: { handle: ".drag" }
                                              }
                                            },
                                            _vm._l(
                                              _vm.currentSurvey.questions,
                                              function(question, index) {
                                                return _c("question-builder", {
                                                  key: "question_" + index,
                                                  staticClass: "drag",
                                                  attrs: {
                                                    data: question,
                                                    sort: index + 1
                                                  }
                                                })
                                              }
                                            ),
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "text-center" },
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              staticClass: "mt-3",
                                              attrs: {
                                                variant: "outline-primary"
                                              },
                                              on: { click: _vm.addQuestion }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "simple-icon-plus btn-group-icon"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "survey.add-question"
                                                    )
                                                  )
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
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            { attrs: { title: _vm.$t("survey.results") } },
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-colxx",
                                    { attrs: { xxs: "12", lg: "4" } },
                                    [
                                      _c(
                                        "b-card",
                                        {
                                          staticClass: "mb-4",
                                          attrs: { "no-body": "" }
                                        },
                                        [
                                          _c("b-card-body", [
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "list-item-heading mb-4"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("survey.quota"))
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "mb-4" },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "mb-2" },
                                                  [_vm._v("Gender")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "b-progress",
                                                  { staticClass: "mb-3" },
                                                  [
                                                    _c("b-progress-bar", {
                                                      attrs: {
                                                        value: 60,
                                                        variant: "theme-1"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("b-progress-bar", {
                                                      attrs: {
                                                        value: 40,
                                                        variant: "theme-2"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "table",
                                                  {
                                                    staticClass:
                                                      "table table-sm table-borderless"
                                                  },
                                                  [
                                                    _c("tbody", [
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "p-0 pb-1 w-10"
                                                          },
                                                          [
                                                            _c("span", {
                                                              staticClass:
                                                                "log-indicator border-theme-1 align-middle"
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "p-0 pb-1"
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "font-weight-medium text-muted text-small"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "105/125 Male"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "p-0 pb-1 w-10"
                                                          },
                                                          [
                                                            _c("span", {
                                                              staticClass:
                                                                "log-indicator border-theme-2 align-middle"
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "p-0 pb-1"
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "font-weight-medium text-muted text-small"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "90/125 Female"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "mb-4" },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "mb-2" },
                                                  [_vm._v("Education")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "b-progress",
                                                  { staticClass: "mb-3" },
                                                  [
                                                    _c("b-progress-bar", {
                                                      attrs: {
                                                        value: 80,
                                                        variant: "theme-1"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("b-progress-bar", {
                                                      attrs: {
                                                        value: 20,
                                                        variant: "theme-2"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "table",
                                                  {
                                                    staticClass:
                                                      "table table-sm table-borderless"
                                                  },
                                                  [
                                                    _c("tbody", [
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "p-0 pb-1 w-10"
                                                          },
                                                          [
                                                            _c("span", {
                                                              staticClass:
                                                                "log-indicator border-theme-1 align-middle"
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "p-0 pb-1"
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "font-weight-medium text-muted text-small"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "139/125 College"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "p-0 pb-1 w-10"
                                                          },
                                                          [
                                                            _c("span", {
                                                              staticClass:
                                                                "log-indicator border-theme-2 align-middle"
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "p-0 pb-1"
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "font-weight-medium text-muted text-small"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "95/125 High School"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "mb-4" },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "mb-2" },
                                                  [_vm._v("Age")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "b-progress",
                                                  { staticClass: "mb-3" },
                                                  [
                                                    _c("b-progress-bar", {
                                                      attrs: {
                                                        value: 35,
                                                        variant: "theme-1"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("b-progress-bar", {
                                                      attrs: {
                                                        value: 25,
                                                        variant: "theme-2"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("b-progress-bar", {
                                                      attrs: {
                                                        value: 40,
                                                        variant: "theme-3"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "table",
                                                  {
                                                    staticClass:
                                                      "table table-sm table-borderless"
                                                  },
                                                  [
                                                    _c("tbody", [
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "p-0 pb-1 w-10"
                                                          },
                                                          [
                                                            _c("span", {
                                                              staticClass:
                                                                "log-indicator border-theme-1 align-middle"
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "p-0 pb-1"
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "font-weight-medium text-muted text-small"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "50/75 18-24"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "p-0 pb-1 w-10"
                                                          },
                                                          [
                                                            _c("span", {
                                                              staticClass:
                                                                "log-indicator border-theme-2 align-middle"
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "p-0 pb-1"
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "font-weight-medium text-muted text-small"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "40/75 24-30"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "p-0 pb-1 w-10"
                                                          },
                                                          [
                                                            _c("span", {
                                                              staticClass:
                                                                "log-indicator border-theme-3 align-middle"
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "p-0 pb-1"
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "font-weight-medium text-muted text-small"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "60/75 30-40"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ])
                                                    ])
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-colxx",
                                    { attrs: { xxs: "12", lg: "8" } },
                                    [
                                      _c(
                                        "b-card",
                                        {
                                          staticClass: "mb-4",
                                          attrs: { "no-body": "" }
                                        },
                                        [
                                          _c("b-card-body", [
                                            _c(
                                              "h5",
                                              { staticClass: "card-title" },
                                              [_vm._v("How old are you?")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "chart-container"
                                              },
                                              [
                                                _vm.tabIndex == 1
                                                  ? _c(
                                                      "doughnut-shadow-chart",
                                                      {
                                                        attrs: {
                                                          data:
                                                            _vm.ageChartData,
                                                          height: 300
                                                        }
                                                      }
                                                    )
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-card",
                                        {
                                          staticClass: "mb-4",
                                          attrs: { "no-body": "" }
                                        },
                                        [
                                          _c("b-card-body", [
                                            _c(
                                              "h5",
                                              { staticClass: "card-title" },
                                              [_vm._v("What is your gender?")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "chart-container"
                                              },
                                              [
                                                _vm.tabIndex == 1
                                                  ? _c(
                                                      "doughnut-shadow-chart",
                                                      {
                                                        attrs: {
                                                          data:
                                                            _vm.genderChartData,
                                                          height: 300
                                                        }
                                                      }
                                                    )
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-card",
                                        {
                                          staticClass: "mb-4",
                                          attrs: { "no-body": "" }
                                        },
                                        [
                                          _c("b-card-body", [
                                            _c(
                                              "h5",
                                              { staticClass: "card-title" },
                                              [
                                                _vm._v(
                                                  "What is your employment status?"
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "chart-container"
                                              },
                                              [
                                                _vm.tabIndex == 1
                                                  ? _c(
                                                      "doughnut-shadow-chart",
                                                      {
                                                        attrs: {
                                                          data:
                                                            _vm.workChartData,
                                                          height: 300
                                                        }
                                                      }
                                                    )
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-card",
                                        {
                                          staticClass: "mb-4",
                                          attrs: { "no-body": "" }
                                        },
                                        [
                                          _c("b-card-body", [
                                            _c(
                                              "h5",
                                              { staticClass: "card-title" },
                                              [
                                                _vm._v(
                                                  "What programming languages do you use?"
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "chart-container"
                                              },
                                              [
                                                _vm.tabIndex == 1
                                                  ? _c(
                                                      "doughnut-shadow-chart",
                                                      {
                                                        attrs: {
                                                          data:
                                                            _vm.codingChartData,
                                                          height: 300
                                                        }
                                                      }
                                                    )
                                                  : _vm._e()
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
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _c("div", { key: "itemLoading", staticClass: "loading" })
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "application-menu",
        [
          _c(
            "vue-perfect-scrollbar",
            {
              attrs: {
                settings: { suppressScrollX: true, wheelPropagation: false }
              }
            },
            [
              _c("div", { staticClass: "p-4" }, [
                _c("p", { staticClass: "text-muted text-small mb-3" }, [
                  _vm._v(_vm._s(_vm.$t("survey.status")))
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "list-unstyled mb-4" }, [
                  _c("li", { staticClass: "nav-item" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "simple-icon-reload" }),
                      _vm._v(_vm._s(_vm.$t("survey.all-surveys")) + " "),
                      _vm.isLoadSurveys
                        ? _c("span", { staticClass: "float-right" }, [
                            _vm._v(_vm._s(_vm.surveyItems.length))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "simple-icon-refresh" }),
                      _vm._v(_vm._s(_vm.$t("survey.active-surveys")) + " "),
                      _vm.isLoadSurveys
                        ? _c("span", { staticClass: "float-right" }, [
                            _vm._v(
                              _vm._s(
                                _vm.surveyItems.filter(function(x) {
                                  return x.status === "PENDING"
                                }).length
                              )
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "simple-icon-check" }),
                      _vm._v(_vm._s(_vm.$t("survey.completed-surveys")) + " "),
                      _vm.isLoadSurveys
                        ? _c("span", { staticClass: "float-right" }, [
                            _vm._v(
                              _vm._s(
                                _vm.surveyItems.filter(function(x) {
                                  return x.status === "COMPLETED"
                                }).length
                              )
                            )
                          ])
                        : _vm._e()
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted text-small mb-1" }, [
                  _vm._v(_vm._s(_vm.$t("survey.categories")))
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-unstyled mb-4" },
                  [
                    _c("b-form-radio-group", {
                      staticClass: "pt-2",
                      attrs: {
                        stacked: "",
                        options: _vm.categories.map(function(c) {
                          return { text: c.label, value: c.value }
                        })
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted text-small mb-3" }, [
                  _vm._v(_vm._s(_vm.$t("survey.labels")))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  _vm._l(_vm.labels, function(l, index) {
                    return _c(
                      "p",
                      { key: index, staticClass: "d-sm-inline-block mb-1" },
                      [
                        _c(
                          "a",
                          {
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                              }
                            }
                          },
                          [
                            _c(
                              "b-badge",
                              {
                                staticClass: "mb-1 mr-1",
                                attrs: {
                                  pill: "",
                                  variant: "outline-" + l.color
                                }
                              },
                              [_vm._v(_vm._s(l.label))]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  }),
                  0
                )
              ])
            ]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/Todo.vue?vue&type=template&id=653c6b60&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/applications/Todo.vue?vue&type=template&id=653c6b60& ***!
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
    { staticClass: "disable-text-selection" },
    [
      _c(
        "b-row",
        { staticClass: "app-row survey-app" },
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "div",
                { staticClass: "mb-2" },
                [
                  _c("h1", [_vm._v(_vm._s(_vm.$t("menu.todo")))]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "float-sm-right" },
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
                          staticClass: "top-right-button",
                          attrs: { variant: "primary", size: "lg" }
                        },
                        [_vm._v(_vm._s(_vm.$t("todo.add-new")))]
                      ),
                      _vm._v(" "),
                      _vm.isLoad
                        ? _c(
                            "b-button-group",
                            [
                              _c(
                                "b-dropdown",
                                {
                                  staticClass: "check-button",
                                  attrs: {
                                    split: "",
                                    right: "",
                                    variant: "primary"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.selectAll(true)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "custom-control custom-checkbox pl-4 mb-0 d-inline-block",
                                      attrs: { slot: "button-content" },
                                      slot: "button-content"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "shortkey",
                                            rawName: "v-shortkey",
                                            value: {
                                              select: ["ctrl", "a"],
                                              undo: ["ctrl", "d"]
                                            },
                                            expression:
                                              "{select: ['ctrl','a'], undo: ['ctrl','d']}"
                                          }
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: { type: "checkbox" },
                                        domProps: {
                                          checked: _vm.isSelectedAll()
                                        },
                                        on: { shortkey: _vm.keymap }
                                      }),
                                      _vm._v(" "),
                                      _c("span", {
                                        class: {
                                          "custom-control-label": true,
                                          indeterminate: _vm.isAnyItemSelected()
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("b-dropdown-item", [
                                    _vm._v(_vm._s(_vm.$t("todo.action")))
                                  ]),
                                  _vm._v(" "),
                                  _c("b-dropdown-item", [
                                    _vm._v(
                                      _vm._s(_vm.$t("todo.another-action"))
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          ref: "modalright",
                          staticClass: "modal-right",
                          attrs: {
                            id: "modalright",
                            title: _vm.$t("todo.add-new-title")
                          }
                        },
                        [
                          _c(
                            "b-form",
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("todo.title") } },
                                [
                                  _c("b-form-input", {
                                    model: {
                                      value: _vm.newItem.title,
                                      callback: function($$v) {
                                        _vm.$set(_vm.newItem, "title", $$v)
                                      },
                                      expression: "newItem.title"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("todo.detail") } },
                                [
                                  _c("b-textarea", {
                                    attrs: { rows: 2, "max-rows": 2 },
                                    model: {
                                      value: _vm.newItem.detail,
                                      callback: function($$v) {
                                        _vm.$set(_vm.newItem, "detail", $$v)
                                      },
                                      expression: "newItem.detail"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("todo.category") } },
                                [
                                  _c("v-select", {
                                    attrs: { options: _vm.categories },
                                    model: {
                                      value: _vm.newItem.category,
                                      callback: function($$v) {
                                        _vm.$set(_vm.newItem, "category", $$v)
                                      },
                                      expression: "newItem.category"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("todo.label") } },
                                [
                                  _c("v-select", {
                                    attrs: { options: _vm.labels },
                                    model: {
                                      value: _vm.newItem.label,
                                      callback: function($$v) {
                                        _vm.$set(_vm.newItem, "label", $$v)
                                      },
                                      expression: "newItem.label"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("todo.status") } },
                                [
                                  _c("b-form-radio-group", {
                                    staticClass: "pt-2",
                                    attrs: {
                                      stacked: "",
                                      options: _vm.statuses
                                    },
                                    model: {
                                      value: _vm.newItem.status,
                                      callback: function($$v) {
                                        _vm.$set(_vm.newItem, "status", $$v)
                                      },
                                      expression: "newItem.status"
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
                            "template",
                            { slot: "modal-footer" },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "outline-secondary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.hideModal("modalright")
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.$t("todo.cancel")))]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.addNewItem()
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.$t("todo.submit")))]
                              )
                            ],
                            1
                          )
                        ],
                        2
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("piaf-breadcrumb")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-2" },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-toggle",
                          rawName: "v-b-toggle.displayOptions",
                          modifiers: { displayOptions: true }
                        }
                      ],
                      staticClass: "pt-0 pl-0 d-inline-block d-md-none",
                      attrs: { variant: "empty" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$t("todo.display-options")) +
                          " "
                      ),
                      _c("i", {
                        staticClass: "simple-icon-arrow-down align-middle"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-collapse",
                    {
                      staticClass: "d-md-block",
                      attrs: { id: "displayOptions" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "d-block d-md-inline-block mb-2" },
                        [
                          _c(
                            "b-dropdown",
                            {
                              staticClass: "mr-1 float-md-left btn-group ",
                              attrs: {
                                id: "ddown1",
                                text:
                                  _vm.$t("todo.orderby") + " " + _vm.sort.label,
                                variant: "outline-dark",
                                size: "xs"
                              }
                            },
                            _vm._l(_vm.sortOptions, function(order, index) {
                              return _c(
                                "b-dropdown-item",
                                {
                                  key: "order" + index,
                                  on: {
                                    click: function($event) {
                                      return _vm.changeOrderBy(order)
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(order.label))]
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "search-sm d-inline-block float-md-left mr-1 align-top"
                            },
                            [
                              _c("b-input", {
                                attrs: { placeholder: _vm.$t("menu.search") },
                                model: {
                                  value: _vm.search,
                                  callback: function($$v) {
                                    _vm.search = $$v
                                  },
                                  expression: "search"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" }),
              _vm._v(" "),
              _vm.isLoad
                ? _c(
                    "b-row",
                    { key: "itemList" },
                    _vm._l(_vm.items, function(item, index) {
                      return _c(
                        "b-colxx",
                        { key: "item" + index, attrs: { xxs: "12" } },
                        [
                          _c("todo-list-item", {
                            directives: [
                              {
                                name: "contextmenu",
                                rawName: "v-contextmenu:contextmenu",
                                arg: "contextmenu"
                              }
                            ],
                            key: item.id,
                            attrs: {
                              data: item,
                              "selected-items": _vm.selectedItems
                            },
                            on: { "toggle-item": _vm.toggleItem }
                          })
                        ],
                        1
                      )
                    }),
                    1
                  )
                : _c("div", { key: "itemLoading", staticClass: "loading" })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-contextmenu",
        { ref: "contextmenu", on: { contextmenu: _vm.handleContextmenu } },
        [
          _c(
            "v-contextmenu-item",
            {
              on: {
                click: function($event) {
                  return _vm.onContextCopy()
                }
              }
            },
            [
              _c("i", { staticClass: "simple-icon-docs" }),
              _vm._v(" "),
              _c("span", [_vm._v("Copy")])
            ]
          ),
          _vm._v(" "),
          _c(
            "v-contextmenu-item",
            {
              on: {
                click: function($event) {
                  return _vm.onContextArchive()
                }
              }
            },
            [
              _c("i", { staticClass: "simple-icon-drawer" }),
              _vm._v(" "),
              _c("span", [_vm._v("Move to archive")])
            ]
          ),
          _vm._v(" "),
          _c(
            "v-contextmenu-item",
            {
              on: {
                click: function($event) {
                  return _vm.onContextDelete()
                }
              }
            },
            [
              _c("i", { staticClass: "simple-icon-trash" }),
              _vm._v(" "),
              _c("span", [_vm._v("Delete")])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "application-menu",
        [
          _c(
            "vue-perfect-scrollbar",
            {
              attrs: {
                settings: { suppressScrollX: true, wheelPropagation: false }
              }
            },
            [
              _c("div", { staticClass: "p-4" }, [
                _c("p", { staticClass: "text-muted text-small mb-3" }, [
                  _vm._v(_vm._s(_vm.$t("todo.status")))
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "list-unstyled mb-4" }, [
                  _c("li", { staticClass: "nav-item" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "simple-icon-reload" }),
                      _vm._v(_vm._s(_vm.$t("todo.all-tasks")) + " "),
                      _vm.isLoad
                        ? _c("span", { staticClass: "float-right" }, [
                            _vm._v(_vm._s(_vm.items.length))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "simple-icon-refresh" }),
                      _vm._v(_vm._s(_vm.$t("todo.pending-tasks")) + " "),
                      _vm.isLoad
                        ? _c("span", { staticClass: "float-right" }, [
                            _vm._v(
                              _vm._s(
                                _vm.items.filter(function(x) {
                                  return x.status === "PENDING"
                                }).length
                              )
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "simple-icon-check" }),
                      _vm._v(_vm._s(_vm.$t("todo.completed-tasks")) + " "),
                      _vm.isLoad
                        ? _c("span", { staticClass: "float-right" }, [
                            _vm._v(
                              _vm._s(
                                _vm.items.filter(function(x) {
                                  return x.status === "COMPLETED"
                                }).length
                              )
                            )
                          ])
                        : _vm._e()
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted text-small mb-1" }, [
                  _vm._v(_vm._s(_vm.$t("todo.categories")))
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-unstyled mb-4" },
                  [
                    _c("b-form-radio-group", {
                      staticClass: "pt-2",
                      attrs: {
                        stacked: "",
                        options: _vm.categories.map(function(c) {
                          return { text: c.label, value: c.value }
                        })
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted text-small mb-3" }, [
                  _vm._v(_vm._s(_vm.$t("todo.labels")))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  _vm._l(_vm.labels, function(l, index) {
                    return _c(
                      "p",
                      { key: index, staticClass: "d-sm-inline-block mb-1" },
                      [
                        _c(
                          "a",
                          { attrs: { href: "#" } },
                          [
                            _c(
                              "b-badge",
                              {
                                staticClass: "mb-1 mr-1",
                                attrs: {
                                  pill: "",
                                  variant: "outline-" + l.color
                                }
                              },
                              [_vm._v(_vm._s(l.label))]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  }),
                  0
                )
              ])
            ]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/index.vue?vue&type=template&id=d915e350&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/applications/index.vue?vue&type=template&id=d915e350& ***!
  \*********************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/src/components/Charts/DoughnutShadow.vue":
/*!************************************************************!*\
  !*** ./resources/src/components/Charts/DoughnutShadow.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DoughnutShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoughnutShadow.vue?vue&type=script&lang=js& */ "./resources/src/components/Charts/DoughnutShadow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _DoughnutShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Charts/DoughnutShadow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Charts/DoughnutShadow.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/src/components/Charts/DoughnutShadow.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoughnutShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DoughnutShadow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Charts/DoughnutShadow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoughnutShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/ChatApp/ContactList.vue":
/*!**********************************************************!*\
  !*** ./resources/src/components/ChatApp/ContactList.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactList_vue_vue_type_template_id_37f4dd02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactList.vue?vue&type=template&id=37f4dd02& */ "./resources/src/components/ChatApp/ContactList.vue?vue&type=template&id=37f4dd02&");
/* harmony import */ var _ContactList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactList.vue?vue&type=script&lang=js& */ "./resources/src/components/ChatApp/ContactList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactList_vue_vue_type_template_id_37f4dd02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactList_vue_vue_type_template_id_37f4dd02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/ChatApp/ContactList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/ChatApp/ContactList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/src/components/ChatApp/ContactList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ChatApp/ContactList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/ChatApp/ContactList.vue?vue&type=template&id=37f4dd02&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/components/ChatApp/ContactList.vue?vue&type=template&id=37f4dd02& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_template_id_37f4dd02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactList.vue?vue&type=template&id=37f4dd02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ChatApp/ContactList.vue?vue&type=template&id=37f4dd02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_template_id_37f4dd02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_template_id_37f4dd02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/ChatApp/ConversationDetail.vue":
/*!*****************************************************************!*\
  !*** ./resources/src/components/ChatApp/ConversationDetail.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConversationDetail_vue_vue_type_template_id_1c2b6540___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConversationDetail.vue?vue&type=template&id=1c2b6540& */ "./resources/src/components/ChatApp/ConversationDetail.vue?vue&type=template&id=1c2b6540&");
/* harmony import */ var _ConversationDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConversationDetail.vue?vue&type=script&lang=js& */ "./resources/src/components/ChatApp/ConversationDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConversationDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConversationDetail_vue_vue_type_template_id_1c2b6540___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConversationDetail_vue_vue_type_template_id_1c2b6540___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/ChatApp/ConversationDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/ChatApp/ConversationDetail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/src/components/ChatApp/ConversationDetail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConversationDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ChatApp/ConversationDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/ChatApp/ConversationDetail.vue?vue&type=template&id=1c2b6540&":
/*!************************************************************************************************!*\
  !*** ./resources/src/components/ChatApp/ConversationDetail.vue?vue&type=template&id=1c2b6540& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationDetail_vue_vue_type_template_id_1c2b6540___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConversationDetail.vue?vue&type=template&id=1c2b6540& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ChatApp/ConversationDetail.vue?vue&type=template&id=1c2b6540&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationDetail_vue_vue_type_template_id_1c2b6540___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationDetail_vue_vue_type_template_id_1c2b6540___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/ChatApp/ConversationList.vue":
/*!***************************************************************!*\
  !*** ./resources/src/components/ChatApp/ConversationList.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConversationList_vue_vue_type_template_id_454fd8cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConversationList.vue?vue&type=template&id=454fd8cd& */ "./resources/src/components/ChatApp/ConversationList.vue?vue&type=template&id=454fd8cd&");
/* harmony import */ var _ConversationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConversationList.vue?vue&type=script&lang=js& */ "./resources/src/components/ChatApp/ConversationList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConversationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConversationList_vue_vue_type_template_id_454fd8cd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConversationList_vue_vue_type_template_id_454fd8cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/ChatApp/ConversationList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/ChatApp/ConversationList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/src/components/ChatApp/ConversationList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConversationList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ChatApp/ConversationList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/ChatApp/ConversationList.vue?vue&type=template&id=454fd8cd&":
/*!**********************************************************************************************!*\
  !*** ./resources/src/components/ChatApp/ConversationList.vue?vue&type=template&id=454fd8cd& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationList_vue_vue_type_template_id_454fd8cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConversationList.vue?vue&type=template&id=454fd8cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/ChatApp/ConversationList.vue?vue&type=template&id=454fd8cd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationList_vue_vue_type_template_id_454fd8cd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationList_vue_vue_type_template_id_454fd8cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/Common/ApplicationMenu.vue":
/*!*************************************************************!*\
  !*** ./resources/src/components/Common/ApplicationMenu.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApplicationMenu_vue_vue_type_template_id_2aee1351___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationMenu.vue?vue&type=template&id=2aee1351& */ "./resources/src/components/Common/ApplicationMenu.vue?vue&type=template&id=2aee1351&");
/* harmony import */ var _ApplicationMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApplicationMenu.vue?vue&type=script&lang=js& */ "./resources/src/components/Common/ApplicationMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ApplicationMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApplicationMenu_vue_vue_type_template_id_2aee1351___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApplicationMenu_vue_vue_type_template_id_2aee1351___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Common/ApplicationMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Common/ApplicationMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/src/components/Common/ApplicationMenu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApplicationMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Common/ApplicationMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Common/ApplicationMenu.vue?vue&type=template&id=2aee1351&":
/*!********************************************************************************************!*\
  !*** ./resources/src/components/Common/ApplicationMenu.vue?vue&type=template&id=2aee1351& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationMenu_vue_vue_type_template_id_2aee1351___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApplicationMenu.vue?vue&type=template&id=2aee1351& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Common/ApplicationMenu.vue?vue&type=template&id=2aee1351&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationMenu_vue_vue_type_template_id_2aee1351___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationMenu_vue_vue_type_template_id_2aee1351___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/SurveyApp/QuestionBuilder.vue":
/*!****************************************************************!*\
  !*** ./resources/src/components/SurveyApp/QuestionBuilder.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuestionBuilder_vue_vue_type_template_id_5d9b34b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionBuilder.vue?vue&type=template&id=5d9b34b7& */ "./resources/src/components/SurveyApp/QuestionBuilder.vue?vue&type=template&id=5d9b34b7&");
/* harmony import */ var _QuestionBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionBuilder.vue?vue&type=script&lang=js& */ "./resources/src/components/SurveyApp/QuestionBuilder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuestionBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuestionBuilder_vue_vue_type_template_id_5d9b34b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuestionBuilder_vue_vue_type_template_id_5d9b34b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/SurveyApp/QuestionBuilder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/SurveyApp/QuestionBuilder.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/components/SurveyApp/QuestionBuilder.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuestionBuilder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SurveyApp/QuestionBuilder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/SurveyApp/QuestionBuilder.vue?vue&type=template&id=5d9b34b7&":
/*!***********************************************************************************************!*\
  !*** ./resources/src/components/SurveyApp/QuestionBuilder.vue?vue&type=template&id=5d9b34b7& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionBuilder_vue_vue_type_template_id_5d9b34b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuestionBuilder.vue?vue&type=template&id=5d9b34b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SurveyApp/QuestionBuilder.vue?vue&type=template&id=5d9b34b7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionBuilder_vue_vue_type_template_id_5d9b34b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionBuilder_vue_vue_type_template_id_5d9b34b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/SurveyApp/SurveyListItem.vue":
/*!***************************************************************!*\
  !*** ./resources/src/components/SurveyApp/SurveyListItem.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SurveyListItem_vue_vue_type_template_id_1b50ee59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveyListItem.vue?vue&type=template&id=1b50ee59& */ "./resources/src/components/SurveyApp/SurveyListItem.vue?vue&type=template&id=1b50ee59&");
/* harmony import */ var _SurveyListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SurveyListItem.vue?vue&type=script&lang=js& */ "./resources/src/components/SurveyApp/SurveyListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SurveyListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SurveyListItem_vue_vue_type_template_id_1b50ee59___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SurveyListItem_vue_vue_type_template_id_1b50ee59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/SurveyApp/SurveyListItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/SurveyApp/SurveyListItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/src/components/SurveyApp/SurveyListItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SurveyListItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SurveyApp/SurveyListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/SurveyApp/SurveyListItem.vue?vue&type=template&id=1b50ee59&":
/*!**********************************************************************************************!*\
  !*** ./resources/src/components/SurveyApp/SurveyListItem.vue?vue&type=template&id=1b50ee59& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyListItem_vue_vue_type_template_id_1b50ee59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SurveyListItem.vue?vue&type=template&id=1b50ee59& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/SurveyApp/SurveyListItem.vue?vue&type=template&id=1b50ee59&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyListItem_vue_vue_type_template_id_1b50ee59___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyListItem_vue_vue_type_template_id_1b50ee59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/TodoApp/TodoListItem.vue":
/*!***********************************************************!*\
  !*** ./resources/src/components/TodoApp/TodoListItem.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoListItem_vue_vue_type_template_id_da4fcd9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoListItem.vue?vue&type=template&id=da4fcd9e& */ "./resources/src/components/TodoApp/TodoListItem.vue?vue&type=template&id=da4fcd9e&");
/* harmony import */ var _TodoListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoListItem.vue?vue&type=script&lang=js& */ "./resources/src/components/TodoApp/TodoListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TodoListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoListItem_vue_vue_type_template_id_da4fcd9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoListItem_vue_vue_type_template_id_da4fcd9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/TodoApp/TodoListItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/TodoApp/TodoListItem.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/src/components/TodoApp/TodoListItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoListItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/TodoApp/TodoListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/TodoApp/TodoListItem.vue?vue&type=template&id=da4fcd9e&":
/*!******************************************************************************************!*\
  !*** ./resources/src/components/TodoApp/TodoListItem.vue?vue&type=template&id=da4fcd9e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoListItem_vue_vue_type_template_id_da4fcd9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoListItem.vue?vue&type=template&id=da4fcd9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/TodoApp/TodoListItem.vue?vue&type=template&id=da4fcd9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoListItem_vue_vue_type_template_id_da4fcd9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoListItem_vue_vue_type_template_id_da4fcd9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/applications/Chat.vue":
/*!*******************************************************!*\
  !*** ./resources/src/views/app/applications/Chat.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat_vue_vue_type_template_id_704a1c62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=704a1c62& */ "./resources/src/views/app/applications/Chat.vue?vue&type=template&id=704a1c62&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/src/views/app/applications/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_704a1c62___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chat_vue_vue_type_template_id_704a1c62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/applications/Chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/applications/Chat.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/src/views/app/applications/Chat.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/applications/Chat.vue?vue&type=template&id=704a1c62&":
/*!**************************************************************************************!*\
  !*** ./resources/src/views/app/applications/Chat.vue?vue&type=template&id=704a1c62& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_704a1c62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=template&id=704a1c62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/Chat.vue?vue&type=template&id=704a1c62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_704a1c62___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_704a1c62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/applications/Survey.vue":
/*!*********************************************************!*\
  !*** ./resources/src/views/app/applications/Survey.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Survey_vue_vue_type_template_id_002aea38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Survey.vue?vue&type=template&id=002aea38& */ "./resources/src/views/app/applications/Survey.vue?vue&type=template&id=002aea38&");
/* harmony import */ var _Survey_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Survey.vue?vue&type=script&lang=js& */ "./resources/src/views/app/applications/Survey.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Survey_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Survey_vue_vue_type_template_id_002aea38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Survey_vue_vue_type_template_id_002aea38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/applications/Survey.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/applications/Survey.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/src/views/app/applications/Survey.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Survey_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Survey.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/Survey.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Survey_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/applications/Survey.vue?vue&type=template&id=002aea38&":
/*!****************************************************************************************!*\
  !*** ./resources/src/views/app/applications/Survey.vue?vue&type=template&id=002aea38& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Survey_vue_vue_type_template_id_002aea38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Survey.vue?vue&type=template&id=002aea38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/Survey.vue?vue&type=template&id=002aea38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Survey_vue_vue_type_template_id_002aea38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Survey_vue_vue_type_template_id_002aea38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/applications/SurveyDetail.vue":
/*!***************************************************************!*\
  !*** ./resources/src/views/app/applications/SurveyDetail.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SurveyDetail_vue_vue_type_template_id_7630f456___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveyDetail.vue?vue&type=template&id=7630f456& */ "./resources/src/views/app/applications/SurveyDetail.vue?vue&type=template&id=7630f456&");
/* harmony import */ var _SurveyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SurveyDetail.vue?vue&type=script&lang=js& */ "./resources/src/views/app/applications/SurveyDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SurveyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SurveyDetail_vue_vue_type_template_id_7630f456___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SurveyDetail_vue_vue_type_template_id_7630f456___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/applications/SurveyDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/applications/SurveyDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/src/views/app/applications/SurveyDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SurveyDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/SurveyDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/applications/SurveyDetail.vue?vue&type=template&id=7630f456&":
/*!**********************************************************************************************!*\
  !*** ./resources/src/views/app/applications/SurveyDetail.vue?vue&type=template&id=7630f456& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyDetail_vue_vue_type_template_id_7630f456___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SurveyDetail.vue?vue&type=template&id=7630f456& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/SurveyDetail.vue?vue&type=template&id=7630f456&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyDetail_vue_vue_type_template_id_7630f456___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyDetail_vue_vue_type_template_id_7630f456___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/applications/Todo.vue":
/*!*******************************************************!*\
  !*** ./resources/src/views/app/applications/Todo.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo_vue_vue_type_template_id_653c6b60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.vue?vue&type=template&id=653c6b60& */ "./resources/src/views/app/applications/Todo.vue?vue&type=template&id=653c6b60&");
/* harmony import */ var _Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo.vue?vue&type=script&lang=js& */ "./resources/src/views/app/applications/Todo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Todo_vue_vue_type_template_id_653c6b60___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Todo_vue_vue_type_template_id_653c6b60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/applications/Todo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/applications/Todo.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/src/views/app/applications/Todo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/Todo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/applications/Todo.vue?vue&type=template&id=653c6b60&":
/*!**************************************************************************************!*\
  !*** ./resources/src/views/app/applications/Todo.vue?vue&type=template&id=653c6b60& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_653c6b60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=template&id=653c6b60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/Todo.vue?vue&type=template&id=653c6b60&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_653c6b60___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_653c6b60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/applications/index.vue":
/*!********************************************************!*\
  !*** ./resources/src/views/app/applications/index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_d915e350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d915e350& */ "./resources/src/views/app/applications/index.vue?vue&type=template&id=d915e350&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _index_vue_vue_type_template_id_d915e350___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_d915e350___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/applications/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/applications/index.vue?vue&type=template&id=d915e350&":
/*!***************************************************************************************!*\
  !*** ./resources/src/views/app/applications/index.vue?vue&type=template&id=d915e350& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d915e350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d915e350& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/applications/index.vue?vue&type=template&id=d915e350&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d915e350___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d915e350___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);