(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Cards/GradientWithRadialProgressCard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Cards/GradientWithRadialProgressCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
  components: {
    RadialProgressBar: vue_radial_progress__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: ['icon', 'title', 'detail', 'percent', 'progressText'],
  data: function data() {
    return {
      diameterDefault: 125,
      strokeWidthDefault: 5,
      diameter: this.diameterDefault,
      strokeWidth: this.strokeWidthDefault
    };
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();
  },
  methods: {
    handleWindowResize: function handleWindowResize(event) {
      if (event && !event.isTrusted) {
        return;
      }

      var windowWidth = window.innerWidth;

      if (windowWidth <= 1200) {
        this.diameter = 84;
        this.strokeWidth = 2;
      } else {
        this.diameter = this.diameterDefault;
        this.strokeWidth = this.strokeWidthDefault;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/ListWithUserItem.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Listing/ListWithUserItem.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data', 'detailPath']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/LogList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Listing/LogList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['logs']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/RecentOrderItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Listing/RecentOrderItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['order', 'detailPath']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/TopRatedSlideItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Listing/TopRatedSlideItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Common_Stars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Common/Stars */ "./resources/src/components/Common/Stars.vue");
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['image', 'order', 'title', 'rate', 'rateCount'],
  components: {
    Stars: _components_Common_Stars__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/TwoColumnList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Listing/TwoColumnList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Analytics.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/dashboards/Analytics.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Charts_AreaShadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Charts/AreaShadow */ "./resources/src/components/Charts/AreaShadow.vue");
/* harmony import */ var _components_Charts_DoughnutShadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Charts/DoughnutShadow */ "./resources/src/components/Charts/DoughnutShadow.vue");
/* harmony import */ var _components_Charts_PolarAreaShadow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Charts/PolarAreaShadow */ "./resources/src/components/Charts/PolarAreaShadow.vue");
/* harmony import */ var _components_Charts_RadarShadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Charts/RadarShadow */ "./resources/src/components/Charts/RadarShadow.vue");
/* harmony import */ var _components_Charts_LineShadow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Charts/LineShadow */ "./resources/src/components/Charts/LineShadow.vue");
/* harmony import */ var _components_Cards_SmallLineChartCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Cards/SmallLineChartCard */ "./resources/src/components/Cards/SmallLineChartCard.vue");
/* harmony import */ var _components_Cards_RadialProgressCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Cards/RadialProgressCard */ "./resources/src/components/Cards/RadialProgressCard.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/charts */ "./resources/src/data/charts.js");
/* harmony import */ var _data_profileStatuses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/profileStatuses */ "./resources/src/data/profileStatuses.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AreaShadowChart: _components_Charts_AreaShadow__WEBPACK_IMPORTED_MODULE_0__["default"],
    DoughnutShadowChart: _components_Charts_DoughnutShadow__WEBPACK_IMPORTED_MODULE_1__["default"],
    SmallLineChartCard: _components_Cards_SmallLineChartCard__WEBPACK_IMPORTED_MODULE_5__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_7___default.a,
    RadialProgressCard: _components_Cards_RadialProgressCard__WEBPACK_IMPORTED_MODULE_6__["default"],
    PolarAreaShadowChart: _components_Charts_PolarAreaShadow__WEBPACK_IMPORTED_MODULE_2__["default"],
    RadarShadowChart: _components_Charts_RadarShadow__WEBPACK_IMPORTED_MODULE_3__["default"],
    LineShadowChart: _components_Charts_LineShadow__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      areaChartData: _data_charts__WEBPACK_IMPORTED_MODULE_8__["areaChartData"],
      conversionChartData: _data_charts__WEBPACK_IMPORTED_MODULE_8__["conversionChartData"],
      doughnutChartData: _data_charts__WEBPACK_IMPORTED_MODULE_8__["doughnutChartData"],
      profileStatuses: _data_profileStatuses__WEBPACK_IMPORTED_MODULE_9__["default"],
      smallChartData1: _data_charts__WEBPACK_IMPORTED_MODULE_8__["smallChartData1"],
      smallChartData2: _data_charts__WEBPACK_IMPORTED_MODULE_8__["smallChartData2"],
      smallChartData3: _data_charts__WEBPACK_IMPORTED_MODULE_8__["smallChartData3"],
      smallChartData4: _data_charts__WEBPACK_IMPORTED_MODULE_8__["smallChartData4"],
      polarAreaChartData: _data_charts__WEBPACK_IMPORTED_MODULE_8__["polarAreaChartData"],
      radarChartData: _data_charts__WEBPACK_IMPORTED_MODULE_8__["radarChartData"],
      lineChartData: _data_charts__WEBPACK_IMPORTED_MODULE_8__["lineChartData"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Content.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/dashboards/Content.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-resize */ "./node_modules/vue-resize/dist/vue-resize.esm.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/dist/css/swiper.css */ "./node_modules/swiper/dist/css/swiper.css");
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetable_2_src_components_Vuetable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetable-2/src/components/Vuetable */ "./node_modules/vuetable-2/src/components/Vuetable.vue");
/* harmony import */ var _components_Common_VuetablePaginationBootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Common/VuetablePaginationBootstrap */ "./resources/src/components/Common/VuetablePaginationBootstrap.vue");
/* harmony import */ var _components_Cards_IconCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Cards/IconCard */ "./resources/src/components/Cards/IconCard.vue");
/* harmony import */ var _components_Cards_GradientWithRadialProgressCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Cards/GradientWithRadialProgressCard */ "./resources/src/components/Cards/GradientWithRadialProgressCard.vue");
/* harmony import */ var _components_Charts_AreaShadow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Charts/AreaShadow */ "./resources/src/components/Charts/AreaShadow.vue");
/* harmony import */ var _components_Listing_TwoColumnList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Listing/TwoColumnList */ "./resources/src/components/Listing/TwoColumnList.vue");
/* harmony import */ var _components_Listing_ListWithUserItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Listing/ListWithUserItem */ "./resources/src/components/Listing/ListWithUserItem.vue");
/* harmony import */ var _data_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../data/charts */ "./resources/src/data/charts.js");
/* harmony import */ var _data_cakes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/cakes */ "./resources/src/data/cakes.js");
/* harmony import */ var _data_comments__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../data/comments */ "./resources/src/data/comments.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../constants/config */ "./resources/src/constants/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    IconCard: _components_Cards_IconCard__WEBPACK_IMPORTED_MODULE_7__["default"],
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiperSlide"],
    ResizeObserver: vue_resize__WEBPACK_IMPORTED_MODULE_0__["ResizeObserver"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_3___default.a,
    Vuetable: vuetable_2_src_components_Vuetable__WEBPACK_IMPORTED_MODULE_5__["default"],
    VuetablePaginationBootstrap: _components_Common_VuetablePaginationBootstrap__WEBPACK_IMPORTED_MODULE_6__["default"],
    TwoColumnList: _components_Listing_TwoColumnList__WEBPACK_IMPORTED_MODULE_10__["default"],
    ListWithUserItem: _components_Listing_ListWithUserItem__WEBPACK_IMPORTED_MODULE_11__["default"],
    AreaShadowChart: _components_Charts_AreaShadow__WEBPACK_IMPORTED_MODULE_9__["default"],
    GradientWithRadialProgressCard: _components_Cards_GradientWithRadialProgressCard__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      swiperIconsOption: {
        slidesPerView: 4,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          320: {
            slidesPerView: 1
          },
          576: {
            slidesPerView: 2
          },
          1800: {
            slidesPerView: 3
          }
        }
      },
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
      quickPost: {
        title: '',
        content: '',
        category: ''
      },
      areaChartData: _data_charts__WEBPACK_IMPORTED_MODULE_12__["areaChartData"],
      conversionChartData: _data_charts__WEBPACK_IMPORTED_MODULE_12__["conversionChartData"],
      cakes: _data_cakes__WEBPACK_IMPORTED_MODULE_13__["default"],
      comments: _data_comments__WEBPACK_IMPORTED_MODULE_14__["default"],
      bestsellers: {
        apiUrl: _constants_config__WEBPACK_IMPORTED_MODULE_15__["apiUrl"] + '/cakes/fordatatable',
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
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.handleSwipersResize();
    }, 50);
  },
  methods: {
    refreshButtonClick: function refreshButtonClick() {
      console.log('refreshButtonClick');
    },
    handleSwipersResize: function handleSwipersResize() {
      this.$refs.swiperIcons.update();
    },
    onPaginationData: function onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage: function onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    quickPostSubmit: function quickPostSubmit() {
      console.log(this.quickPost);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Default.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/dashboards/Default.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-resize */ "./node_modules/vue-resize/dist/vue-resize.esm.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/dist/css/swiper.css */ "./node_modules/swiper/dist/css/swiper.css");
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_simple_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-simple-calendar */ "./node_modules/vue-simple-calendar/dist/CalendarView.umd.js");
/* harmony import */ var vue_simple_calendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_simple_calendar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetable_2_src_components_Vuetable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetable-2/src/components/Vuetable */ "./node_modules/vuetable-2/src/components/Vuetable.vue");
/* harmony import */ var _components_Common_VuetablePaginationBootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Common/VuetablePaginationBootstrap */ "./resources/src/components/Common/VuetablePaginationBootstrap.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Cards_IconCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Cards/IconCard */ "./resources/src/components/Cards/IconCard.vue");
/* harmony import */ var _components_Cards_GradientCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Cards/GradientCard */ "./resources/src/components/Cards/GradientCard.vue");
/* harmony import */ var _components_Cards_GradientWithRadialProgressCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Cards/GradientWithRadialProgressCard */ "./resources/src/components/Cards/GradientWithRadialProgressCard.vue");
/* harmony import */ var _components_Cards_SmallLineChartCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Cards/SmallLineChartCard */ "./resources/src/components/Cards/SmallLineChartCard.vue");
/* harmony import */ var _components_Cards_RadialProgressCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Cards/RadialProgressCard */ "./resources/src/components/Cards/RadialProgressCard.vue");
/* harmony import */ var _components_Charts_LineShadow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/Charts/LineShadow */ "./resources/src/components/Charts/LineShadow.vue");
/* harmony import */ var _components_Charts_PolarAreaShadow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/Charts/PolarAreaShadow */ "./resources/src/components/Charts/PolarAreaShadow.vue");
/* harmony import */ var _components_Charts_AreaShadow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/Charts/AreaShadow */ "./resources/src/components/Charts/AreaShadow.vue");
/* harmony import */ var _components_Listing_RecentOrderItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/Listing/RecentOrderItem */ "./resources/src/components/Listing/RecentOrderItem.vue");
/* harmony import */ var _components_Listing_LogList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/Listing/LogList */ "./resources/src/components/Listing/LogList.vue");
/* harmony import */ var _components_Listing_ListWithUserItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/Listing/ListWithUserItem */ "./resources/src/components/Listing/ListWithUserItem.vue");
/* harmony import */ var _components_Listing_TwoColumnList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../components/Listing/TwoColumnList */ "./resources/src/components/Listing/TwoColumnList.vue");
/* harmony import */ var _components_Listing_TopRatedSlideItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../components/Listing/TopRatedSlideItem */ "./resources/src/components/Listing/TopRatedSlideItem.vue");
/* harmony import */ var _data_charts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../data/charts */ "./resources/src/data/charts.js");
/* harmony import */ var _data_logs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../data/logs */ "./resources/src/data/logs.js");
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../data/products */ "./resources/src/data/products.js");
/* harmony import */ var _data_tickets__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../data/tickets */ "./resources/src/data/tickets.js");
/* harmony import */ var _data_profileStatuses__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../data/profileStatuses */ "./resources/src/data/profileStatuses.js");
/* harmony import */ var _data_cakes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../data/cakes */ "./resources/src/data/cakes.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../constants/config */ "./resources/src/constants/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    IconCard: _components_Cards_IconCard__WEBPACK_IMPORTED_MODULE_9__["default"],
    GradientCard: _components_Cards_GradientCard__WEBPACK_IMPORTED_MODULE_10__["default"],
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiperSlide"],
    ResizeObserver: vue_resize__WEBPACK_IMPORTED_MODULE_0__["ResizeObserver"],
    LineShadowChart: _components_Charts_LineShadow__WEBPACK_IMPORTED_MODULE_14__["default"],
    RecentOrderItem: _components_Listing_RecentOrderItem__WEBPACK_IMPORTED_MODULE_17__["default"],
    PolarAreaShadowChart: _components_Charts_PolarAreaShadow__WEBPACK_IMPORTED_MODULE_15__["default"],
    AreaShadowChart: _components_Charts_AreaShadow__WEBPACK_IMPORTED_MODULE_16__["default"],
    LogList: _components_Listing_LogList__WEBPACK_IMPORTED_MODULE_18__["default"],
    ListWithUserItem: _components_Listing_ListWithUserItem__WEBPACK_IMPORTED_MODULE_19__["default"],
    CalendarView: vue_simple_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarView"],
    CalendarViewHeader: vue_simple_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarViewHeader"],
    Vuetable: vuetable_2_src_components_Vuetable__WEBPACK_IMPORTED_MODULE_4__["default"],
    VuetablePaginationBootstrap: _components_Common_VuetablePaginationBootstrap__WEBPACK_IMPORTED_MODULE_5__["default"],
    TwoColumnList: _components_Listing_TwoColumnList__WEBPACK_IMPORTED_MODULE_20__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_6___default.a,
    RadialProgressCard: _components_Cards_RadialProgressCard__WEBPACK_IMPORTED_MODULE_13__["default"],
    GradientWithRadialProgressCard: _components_Cards_GradientWithRadialProgressCard__WEBPACK_IMPORTED_MODULE_11__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_7___default.a,
    SmallLineChartCard: _components_Cards_SmallLineChartCard__WEBPACK_IMPORTED_MODULE_12__["default"],
    TopRatedSlideItem: _components_Listing_TopRatedSlideItem__WEBPACK_IMPORTED_MODULE_21__["default"]
  },
  mixins: [vue_simple_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarMathMixin"]],
  data: function data() {
    return {
      swiperIconsOption: {
        slidesPerView: 4,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          320: {
            slidesPerView: 1
          },
          576: {
            slidesPerView: 2
          },
          1800: {
            slidesPerView: 3
          }
        }
      },
      lineChartData: _data_charts__WEBPACK_IMPORTED_MODULE_22__["lineChartData"],
      products: _data_products__WEBPACK_IMPORTED_MODULE_24__["default"],
      polarAreaChartData: _data_charts__WEBPACK_IMPORTED_MODULE_22__["polarAreaChartData"],
      logs: _data_logs__WEBPACK_IMPORTED_MODULE_23__["default"],
      tickets: _data_tickets__WEBPACK_IMPORTED_MODULE_25__["default"],
      calendar: {
        showDate: this.thisMonth(1),
        events: [{
          id: 'e2',
          startDate: this.thisMonth(15),
          title: 'Meeting',
          classes: 'secondary'
        }, {
          id: 'e3',
          startDate: this.thisMonth(8, 9, 25),
          endDate: this.thisMonth(9, 16, 30),
          title: 'Sales',
          classes: 'primary'
        }, {
          id: 'e5',
          startDate: this.thisMonth(5),
          endDate: this.thisMonth(12),
          title: 'Tax Days',
          classes: 'secondary'
        }, {
          id: 'e10',
          startDate: this.thisMonth(27),
          title: 'My Birthday!'
        }]
      },
      bestsellers: {
        apiUrl: _constants_config__WEBPACK_IMPORTED_MODULE_28__["apiUrl"] + '/cakes/fordatatable',
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
      profileStatuses: _data_profileStatuses__WEBPACK_IMPORTED_MODULE_26__["default"],
      cakes: _data_cakes__WEBPACK_IMPORTED_MODULE_27__["default"],
      areaChartData: _data_charts__WEBPACK_IMPORTED_MODULE_22__["areaChartData"],
      conversionChartData: _data_charts__WEBPACK_IMPORTED_MODULE_22__["conversionChartData"],
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
      smallChartData1: _data_charts__WEBPACK_IMPORTED_MODULE_22__["smallChartData1"],
      smallChartData2: _data_charts__WEBPACK_IMPORTED_MODULE_22__["smallChartData2"],
      smallChartData3: _data_charts__WEBPACK_IMPORTED_MODULE_22__["smallChartData3"],
      smallChartData4: _data_charts__WEBPACK_IMPORTED_MODULE_22__["smallChartData4"],
      swiperTopRatedOption: {
        slidesPerView: 1,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 1
          },
          992: {
            slidesPerView: 2
          }
        }
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.handleSwipersResize();
    }, 50);
  },
  methods: {
    refreshButtonClick: function refreshButtonClick() {
      console.log('refreshButtonClick');
    },
    handleSwipersResize: function handleSwipersResize() {
      this.$refs.swiperIcons.update();
      this.$refs.swiperTopRated.update();
    },
    thisMonth: function thisMonth(d, h, m) {
      var t = new Date();
      return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0);
    },
    onClickDay: function onClickDay(d) {
      console.log("You clicked: ".concat(d.toLocaleDateString()));
    },
    onClickEvent: function onClickEvent(e) {
      console.log("You clicked: ".concat(e.title));
    },
    setShowDate: function setShowDate(d) {
      this.calendar.showDate = d;
    },
    onDropDate: function onDropDate(event, date) {
      console.log("You dropped ".concat(event.id, " on ").concat(date.toLocaleDateString()));
      var eLength = this.dayDiff(event.startDate, date);
      event.originalEvent.startDate = this.addDays(event.startDate, eLength);
      event.originalEvent.endDate = this.addDays(event.endDate, eLength);
    },
    onPaginationData: function onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage: function onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Ecommerce.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/dashboards/Ecommerce.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-resize */ "./node_modules/vue-resize/dist/vue-resize.esm.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/dist/css/swiper.css */ "./node_modules/swiper/dist/css/swiper.css");
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_simple_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-simple-calendar */ "./node_modules/vue-simple-calendar/dist/CalendarView.umd.js");
/* harmony import */ var vue_simple_calendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_simple_calendar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetable_2_src_components_Vuetable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetable-2/src/components/Vuetable */ "./node_modules/vuetable-2/src/components/Vuetable.vue");
/* harmony import */ var _components_Common_VuetablePaginationBootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Common/VuetablePaginationBootstrap */ "./resources/src/components/Common/VuetablePaginationBootstrap.vue");
/* harmony import */ var _components_Cards_IconCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Cards/IconCard */ "./resources/src/components/Cards/IconCard.vue");
/* harmony import */ var _components_Charts_LineShadow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Charts/LineShadow */ "./resources/src/components/Charts/LineShadow.vue");
/* harmony import */ var _components_Charts_DoughnutShadow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Charts/DoughnutShadow */ "./resources/src/components/Charts/DoughnutShadow.vue");
/* harmony import */ var _components_Listing_RecentOrderItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Listing/RecentOrderItem */ "./resources/src/components/Listing/RecentOrderItem.vue");
/* harmony import */ var _components_Listing_ListWithUserItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Listing/ListWithUserItem */ "./resources/src/components/Listing/ListWithUserItem.vue");
/* harmony import */ var _components_Listing_TwoColumnList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Listing/TwoColumnList */ "./resources/src/components/Listing/TwoColumnList.vue");
/* harmony import */ var _data_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../data/charts */ "./resources/src/data/charts.js");
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/products */ "./resources/src/data/products.js");
/* harmony import */ var _data_tickets__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../data/tickets */ "./resources/src/data/tickets.js");
/* harmony import */ var _data_cakes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../data/cakes */ "./resources/src/data/cakes.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../constants/config */ "./resources/src/constants/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    IconCard: _components_Cards_IconCard__WEBPACK_IMPORTED_MODULE_6__["default"],
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiperSlide"],
    ResizeObserver: vue_resize__WEBPACK_IMPORTED_MODULE_0__["ResizeObserver"],
    LineShadowChart: _components_Charts_LineShadow__WEBPACK_IMPORTED_MODULE_7__["default"],
    RecentOrderItem: _components_Listing_RecentOrderItem__WEBPACK_IMPORTED_MODULE_9__["default"],
    ListWithUserItem: _components_Listing_ListWithUserItem__WEBPACK_IMPORTED_MODULE_10__["default"],
    CalendarView: vue_simple_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarView"],
    CalendarViewHeader: vue_simple_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarViewHeader"],
    Vuetable: vuetable_2_src_components_Vuetable__WEBPACK_IMPORTED_MODULE_4__["default"],
    VuetablePaginationBootstrap: _components_Common_VuetablePaginationBootstrap__WEBPACK_IMPORTED_MODULE_5__["default"],
    TwoColumnList: _components_Listing_TwoColumnList__WEBPACK_IMPORTED_MODULE_11__["default"],
    DoughnutShadowChart: _components_Charts_DoughnutShadow__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mixins: [vue_simple_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarMathMixin"]],
  data: function data() {
    return {
      swiperIconsOption: {
        slidesPerView: 4,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          320: {
            slidesPerView: 1
          },
          576: {
            slidesPerView: 2
          },
          1800: {
            slidesPerView: 3
          }
        }
      },
      lineChartData: _data_charts__WEBPACK_IMPORTED_MODULE_12__["lineChartData"],
      doughnutChartData: _data_charts__WEBPACK_IMPORTED_MODULE_12__["doughnutChartData"],
      products: _data_products__WEBPACK_IMPORTED_MODULE_13__["default"],
      cakes: _data_cakes__WEBPACK_IMPORTED_MODULE_15__["default"],
      tickets: _data_tickets__WEBPACK_IMPORTED_MODULE_14__["default"],
      calendar: {
        showDate: this.thisMonth(1),
        events: [{
          id: 'e2',
          startDate: this.thisMonth(15),
          title: 'Meeting',
          classes: 'secondary'
        }, {
          id: 'e3',
          startDate: this.thisMonth(8, 9, 25),
          endDate: this.thisMonth(9, 16, 30),
          title: 'Sales',
          classes: 'primary'
        }, {
          id: 'e5',
          startDate: this.thisMonth(5),
          endDate: this.thisMonth(12),
          title: 'Tax Days',
          classes: 'secondary'
        }, {
          id: 'e10',
          startDate: this.thisMonth(27),
          title: 'My Birthday!'
        }]
      },
      bestsellers: {
        apiUrl: _constants_config__WEBPACK_IMPORTED_MODULE_16__["apiUrl"] + '/cakes/fordatatable',
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
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.handleSwipersResize();
    }, 50);
  },
  methods: {
    refreshButtonClick: function refreshButtonClick() {
      console.log('refreshButtonClick');
    },
    handleSwipersResize: function handleSwipersResize() {
      this.$refs.swiperIcons.update();
    },
    thisMonth: function thisMonth(d, h, m) {
      var t = new Date();
      return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0);
    },
    onClickDay: function onClickDay(d) {
      console.log("You clicked: ".concat(d.toLocaleDateString()));
    },
    onClickEvent: function onClickEvent(e) {
      console.log("You clicked: ".concat(e.title));
    },
    setShowDate: function setShowDate(d) {
      this.calendar.showDate = d;
    },
    onDropDate: function onDropDate(event, date) {
      console.log("You dropped ".concat(event.id, " on ").concat(date.toLocaleDateString()));
      var eLength = this.dayDiff(event.startDate, date);
      event.originalEvent.startDate = this.addDays(event.startDate, eLength);
      event.originalEvent.endDate = this.addDays(event.endDate, eLength);
    },
    onPaginationData: function onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage: function onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Cards/GradientCard.vue?vue&type=template&id=47a6ce1c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Cards/GradientCard.vue?vue&type=template&id=47a6ce1c& ***!
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
    "b-card",
    {
      staticClass: "dashboard-sq-banner justify-content-end",
      attrs: { "no-body": "" }
    },
    [
      _c(
        "b-card-body",
        { staticClass: "justify-content-end d-flex flex-column" },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Cards/GradientWithRadialProgressCard.vue?vue&type=template&id=65978f38&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Cards/GradientWithRadialProgressCard.vue?vue&type=template&id=65978f38& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "progress-banner", attrs: { "no-body": "" } },
    [
      _c(
        "b-card-body",
        {
          staticClass:
            "justify-content-between d-flex flex-row align-items-center"
        },
        [
          _c("div", [
            _c("i", {
              class:
                _vm.icon + " mr-2 text-white align-text-bottom d-inline-block"
            }),
            _vm._v(" "),
            _c("div", [
              _c("p", { staticClass: "lead text-white" }, [
                _vm._v(_vm._s(_vm.title))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-small text-white" }, [
                _vm._v(_vm._s(_vm.detail))
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "progress-bar-circle progress-bar-banner position-relative"
            },
            [
              _c(
                "radial-progress-bar",
                {
                  attrs: {
                    diameter: _vm.diameter,
                    strokeWidth: _vm.strokeWidth,
                    "completed-steps": _vm.percent,
                    "total-steps": 100
                  }
                },
                [_vm._v(_vm._s(_vm.progressText))]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/ListWithUserItem.vue?vue&type=template&id=37fd68b3&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Listing/ListWithUserItem.vue?vue&type=template&id=37fd68b3& ***!
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
    { staticClass: "d-flex flex-row mb-3 pb-3 border-bottom" },
    [
      _c("router-link", { attrs: { tag: "a", to: _vm.detailPath } }, [
        _c("img", {
          staticClass:
            "img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall",
          attrs: { src: _vm.data.thumb, alt: _vm.data.title }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pl-3 pr-2" },
        [
          _c("router-link", { attrs: { tag: "a", to: _vm.detailPath } }, [
            _c("p", { staticClass: "font-weight-medium mb-0 " }, [
              _vm._v(_vm._s(_vm.data.title))
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-muted mb-0 text-small" }, [
              _vm._v(_vm._s(_vm.data.detail))
            ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/LogList.vue?vue&type=template&id=1b0e4efe&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Listing/LogList.vue?vue&type=template&id=1b0e4efe& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("table", { staticClass: "table table-sm table-borderless" }, [
    _c(
      "tbody",
      _vm._l(_vm.logs, function(log, index) {
        return _c("tr", { key: index, attrs: { log: log } }, [
          _c("td", [
            _c("span", { class: "log-indicator align-middle " + log.color })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("span", { staticClass: "font-weight-medium" }, [
              _vm._v(_vm._s(log.label))
            ])
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "text-right" }, [
            _c("span", { staticClass: "text-muted" }, [
              _vm._v(_vm._s(log.time))
            ])
          ])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/RecentOrderItem.vue?vue&type=template&id=bca5ce36&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Listing/RecentOrderItem.vue?vue&type=template&id=bca5ce36& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "d-flex flex-row mb-3" },
    [
      _c(
        "router-link",
        {
          staticClass: "d-block position-relative",
          attrs: { tag: "a", to: _vm.detailPath }
        },
        [
          _c("img", {
            staticClass: "list-thumbnail border-0",
            attrs: { src: _vm.order.img, alt: _vm.order.title }
          }),
          _vm._v(" "),
          _c(
            "b-badge",
            {
              staticClass: "position-absolute badge-top-right",
              attrs: { variant: _vm.order.statusColor, pill: "" }
            },
            [_vm._v(_vm._s(_vm.order.status))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pl-3 pt-2 pr-2 pb-2" },
        [
          _c("router-link", { attrs: { tag: "a", to: _vm.detailPath } }, [
            _c("p", { staticClass: "list-item-heading" }, [
              _vm._v(_vm._s(_vm.order.title))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "pr-4" }, [
              _c("p", { staticClass: "text-muted mb-1 text-small" }, [
                _vm._v(_vm._s(_vm.order.description))
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "text-primary text-small font-weight-medium d-none d-sm-block"
              },
              [_vm._v(_vm._s(_vm.order.createDate))]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/TopRatedSlideItem.vue?vue&type=template&id=4a071b98&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Listing/TopRatedSlideItem.vue?vue&type=template&id=4a071b98& ***!
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
    "div",
    { staticClass: "pr-2 pl-2" },
    [
      _c("img", {
        staticClass: "mb-4",
        attrs: { src: _vm.image, alt: _vm.title }
      }),
      _vm._v(" "),
      _c("h6", { staticClass: "mb-1" }, [
        _c("span", { staticClass: "mr-2" }, [_vm._v(_vm._s(_vm.order) + ".")]),
        _vm._v(_vm._s(_vm.title))
      ]),
      _vm._v(" "),
      _c("stars", { attrs: { value: _vm.rate, disabled: true } }),
      _vm._v(" "),
      _c("p", { staticClass: "text-small text-muted mb-0 d-inline-block" }, [
        _vm._v("(" + _vm._s(_vm.rateCount) + ")")
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/TwoColumnList.vue?vue&type=template&id=009c3282&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/components/Listing/TwoColumnList.vue?vue&type=template&id=009c3282& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "d-flex flex-row" }, [
    _c("div", { staticClass: "w-50" }, [
      _c(
        "ul",
        { staticClass: "list-unstyled mb-0" },
        _vm._l(_vm.data.slice(0, _vm.data.length / 2), function(item, index) {
          return _c(
            "li",
            { key: index, staticClass: "mb-1" },
            [
              _c("router-link", { attrs: { tag: "a", to: item.link } }, [
                _vm._v(_vm._s(item.title))
              ])
            ],
            1
          )
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "w-50" }, [
      _c(
        "ul",
        { staticClass: "list-unstyled mb-0" },
        _vm._l(_vm.data.slice(_vm.data.length / 2, _vm.data.length), function(
          item,
          index
        ) {
          return _c(
            "li",
            { key: index, staticClass: "mb-1" },
            [
              _c("router-link", { attrs: { tag: "a", to: item.link } }, [
                _vm._v(_vm._s(item.title))
              ])
            ],
            1
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Analytics.vue?vue&type=template&id=445f2eb0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/dashboards/Analytics.vue?vue&type=template&id=445f2eb0& ***!
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
                attrs: { heading: _vm.$t("menu.analytics") }
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
            { staticClass: "mb-4", attrs: { sm: "12", md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "dashboard-filled-line-chart",
                  attrs: { "no-body": "" }
                },
                [
                  _c(
                    "b-card-body",
                    [
                      _c("div", { staticClass: "float-left float-none-xs" }, [
                        _c("div", { staticClass: "d-inline-block" }, [
                          _c("h5", { staticClass: "d-inline" }, [
                            _vm._v(_vm._s(_vm.$t("dashboards.website-visits")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "text-muted text-small d-block" },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("dashboards.unique-visitors"))
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "float-right float-none-xs mt-2",
                          attrs: {
                            id: "ddown5",
                            text: _vm.$t("dashboards.this-week"),
                            size: "xs",
                            variant: "outline-primary"
                          }
                        },
                        [
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("dashboards.last-week")))
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("dashboards.this-month")))
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
                    { staticClass: "chart card-body pt-0" },
                    [
                      _c("area-shadow-chart", {
                        attrs: { data: _vm.areaChartData, height: 195 }
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
            { staticClass: "mb-4", attrs: { sm: "12", md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "dashboard-filled-line-chart",
                  attrs: { "no-body": "" }
                },
                [
                  _c(
                    "b-card-body",
                    [
                      _c("div", { staticClass: "float-left float-none-xs" }, [
                        _c("div", { staticClass: "d-inline-block" }, [
                          _c("h5", { staticClass: "d-inline" }, [
                            _vm._v(
                              _vm._s(_vm.$t("dashboards.conversion-rates"))
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "text-muted text-small d-block" },
                            [_vm._v(_vm._s(_vm.$t("dashboards.per-session")))]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "float-right float-none-xs mt-2",
                          attrs: {
                            id: "ddown5",
                            text: _vm.$t("dashboards.this-week"),
                            size: "xs",
                            variant: "outline-secondary"
                          }
                        },
                        [
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("dashboards.last-week")))
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("dashboards.this-month")))
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
                    { staticClass: "chart card-body pt-0" },
                    [
                      _c("area-shadow-chart", {
                        attrs: { data: _vm.conversionChartData, height: 195 }
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
            { staticClass: "mb-4", attrs: { xl: "4", lg: "6", md: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "h-100",
                  attrs: { title: _vm.$t("dashboards.product-categories") }
                },
                [
                  _c(
                    "div",
                    { staticClass: "dashboard-donut-chart" },
                    [
                      _c("doughnut-shadow-chart", {
                        attrs: { data: _vm.doughnutChartData, height: 300 }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { xl: "4", lg: "6", md: "12" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.profile-status") } },
                _vm._l(_vm.profileStatuses, function(s, index) {
                  return _c(
                    "div",
                    { key: index, staticClass: "mb-4" },
                    [
                      _c("p", { staticClass: "mb-2" }, [
                        _vm._v(
                          "\r\n              " +
                            _vm._s(s.title) +
                            "\r\n              "
                        ),
                        _c("span", { staticClass: "float-right text-muted" }, [
                          _vm._v(_vm._s(s.status) + "/" + _vm._s(s.total))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-progress", {
                        attrs: { value: (s.status / s.total) * 100 }
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
            { attrs: { xl: "4", lg: "12", md: "12" } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-colxx",
                    { staticClass: "mb-4", attrs: { xxs: "6" } },
                    [
                      _c("small-line-chart-card", {
                        staticClass: "dashboard-small-chart-analytics",
                        attrs: {
                          "label-prefix": "$",
                          data: _vm.smallChartData1
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { staticClass: "mb-4", attrs: { xxs: "6" } },
                    [
                      _c("small-line-chart-card", {
                        staticClass: "dashboard-small-chart-analytics",
                        attrs: {
                          "label-prefix": "$",
                          data: _vm.smallChartData2
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { staticClass: "mb-4", attrs: { xxs: "6" } },
                    [
                      _c("small-line-chart-card", {
                        staticClass: "dashboard-small-chart-analytics",
                        attrs: {
                          "label-prefix": "$",
                          data: _vm.smallChartData3
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { staticClass: "mb-4", attrs: { xxs: "6" } },
                    [
                      _c("small-line-chart-card", {
                        staticClass: "dashboard-small-chart-analytics",
                        attrs: {
                          "label-prefix": "$",
                          data: _vm.smallChartData4
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
        "draggable",
        { staticClass: "row" },
        [
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { xl: "3", lg: "6" } },
            [
              _c("radial-progress-card", {
                attrs: {
                  title: _vm.$t("dashboards.payment-status"),
                  percent: 64
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { xl: "3", lg: "6" } },
            [
              _c("radial-progress-card", {
                attrs: {
                  title: _vm.$t("dashboards.work-progress"),
                  percent: 75
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { xl: "3", lg: "6" } },
            [
              _c("radial-progress-card", {
                attrs: {
                  title: _vm.$t("dashboards.tasks-completed"),
                  percent: 32
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { xl: "3", lg: "6" } },
            [
              _c("radial-progress-card", {
                attrs: {
                  title: _vm.$t("dashboards.payments-done"),
                  percent: 45
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
            { staticClass: "mb-4", attrs: { lg: "6", xxs: "12" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.order-stock") } },
                [
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
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { lg: "6", xxs: "12" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.categories") } },
                [
                  _c(
                    "div",
                    { staticClass: "chart-container" },
                    [
                      _c("polar-area-shadow-chart", {
                        attrs: { data: _vm.polarAreaChartData, height: 300 }
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
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { xxs: "12" } },
            [
              _c("b-card", { attrs: { title: _vm.$t("dashboards.sales") } }, [
                _c(
                  "div",
                  { staticClass: "dashboard-line-chart" },
                  [
                    _c("line-shadow-chart", {
                      attrs: { data: _vm.lineChartData, height: 285 }
                    })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Content.vue?vue&type=template&id=6aa1aaca&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/dashboards/Content.vue?vue&type=template&id=6aa1aaca& ***!
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
                attrs: { heading: _vm.$t("menu.content") }
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
            { attrs: { xl: "6", lg: "12" } },
            [
              _c(
                "div",
                { staticClass: "icon-cards-row" },
                [
                  _c(
                    "swiper",
                    {
                      ref: "swiperIcons",
                      attrs: { options: _vm.swiperIconsOption }
                    },
                    [
                      _c(
                        "swiper-slide",
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
                        "swiper-slide",
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
                        "swiper-slide",
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
                        "swiper-slide",
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
                  _c("resize-observer", {
                    on: { notify: _vm.handleSwipersResize }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-colxx",
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-4 dashboard-quick-post",
                          attrs: { title: _vm.$t("dashboards.quick-post") }
                        },
                        [
                          _c("b-refresh-button", {
                            on: { click: _vm.refreshButtonClick }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-form",
                            {
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.quickPostSubmit($event)
                                }
                              }
                            },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    horizontal: "",
                                    "label-cols": "3",
                                    breakpoint: "sm",
                                    label: _vm.$t("dashboards.title")
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      placeholder: _vm.$t("dashboards.title")
                                    },
                                    model: {
                                      value: _vm.quickPost.title,
                                      callback: function($$v) {
                                        _vm.$set(_vm.quickPost, "title", $$v)
                                      },
                                      expression: "quickPost.title"
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
                                    horizontal: "",
                                    "label-cols": "3",
                                    breakpoint: "sm",
                                    label: _vm.$t("dashboards.content")
                                  }
                                },
                                [
                                  _c("b-textarea", {
                                    attrs: {
                                      placeholder: _vm.$t("dashboards.content"),
                                      rows: 4,
                                      "max-rows": 4
                                    },
                                    model: {
                                      value: _vm.quickPost.content,
                                      callback: function($$v) {
                                        _vm.$set(_vm.quickPost, "content", $$v)
                                      },
                                      expression: "quickPost.content"
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
                                    horizontal: "",
                                    "label-cols": "3",
                                    breakpoint: "sm",
                                    label: _vm.$t("dashboards.category")
                                  }
                                },
                                [
                                  _c("v-select", {
                                    attrs: { options: _vm.selectData }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "float-right",
                                  attrs: { type: "submit", variant: "primary" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("dashboards.save-and-publish")
                                    )
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
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { attrs: { lg: "12", xl: "6" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.top-viewed-posts") } },
                [
                  _c("vuetable", {
                    ref: "vuetable",
                    attrs: {
                      "api-url": _vm.bestsellers.apiUrl,
                      fields: _vm.bestsellers.fields,
                      "per-page": 6,
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
            { staticClass: "mb-4", attrs: { lg: "4", md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "dashboard-link-list",
                  attrs: { title: _vm.$t("dashboards.cakes") }
                },
                [_c("two-column-list", { attrs: { data: _vm.cakes } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { lg: "8", md: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "dashboard-link-list",
                  attrs: { title: _vm.$t("dashboards.new-comments") }
                },
                [
                  _c(
                    "vue-perfect-scrollbar",
                    {
                      staticClass: "scroll dashboard-list-with-user",
                      attrs: {
                        settings: {
                          suppressScrollX: true,
                          wheelPropagation: false
                        }
                      }
                    },
                    _vm._l(_vm.comments, function(item, index) {
                      return _c("list-with-user-item", {
                        key: index,
                        attrs: {
                          data: item,
                          "detail-path": "/app/pages/details"
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
            { staticClass: "mb-4", attrs: { sm: "12", md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "dashboard-filled-line-chart",
                  attrs: { "no-body": "" }
                },
                [
                  _c(
                    "b-card-body",
                    [
                      _c("div", { staticClass: "float-left float-none-xs" }, [
                        _c("div", { staticClass: "d-inline-block" }, [
                          _c("h5", { staticClass: "d-inline" }, [
                            _vm._v(_vm._s(_vm.$t("dashboards.website-visits")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "text-muted text-small d-block" },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("dashboards.unique-visitors"))
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "float-right float-none-xs mt-2",
                          attrs: {
                            id: "ddown5",
                            text: _vm.$t("dashboards.this-week"),
                            size: "xs",
                            variant: "outline-primary"
                          }
                        },
                        [
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("dashboards.last-week")))
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("dashboards.this-month")))
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
                    { staticClass: "chart card-body pt-0" },
                    [
                      _c("area-shadow-chart", {
                        attrs: { data: _vm.areaChartData, height: 195 }
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
            { staticClass: "mb-4", attrs: { sm: "12", md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "dashboard-filled-line-chart",
                  attrs: { "no-body": "" }
                },
                [
                  _c(
                    "b-card-body",
                    [
                      _c("div", { staticClass: "float-left float-none-xs" }, [
                        _c("div", { staticClass: "d-inline-block" }, [
                          _c("h5", { staticClass: "d-inline" }, [
                            _vm._v(
                              _vm._s(_vm.$t("dashboards.conversion-rates"))
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "text-muted text-small d-block" },
                            [_vm._v(_vm._s(_vm.$t("dashboards.per-session")))]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "float-right float-none-xs mt-2",
                          attrs: {
                            id: "ddown5",
                            text: _vm.$t("dashboards.this-week"),
                            size: "xs",
                            variant: "outline-secondary"
                          }
                        },
                        [
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("dashboards.last-week")))
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("dashboards.this-month")))
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
                    { staticClass: "chart card-body pt-0" },
                    [
                      _c("area-shadow-chart", {
                        attrs: { data: _vm.conversionChartData, height: 195 }
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
            { staticClass: "mb-4", attrs: { lg: "4" } },
            [
              _c("gradient-with-radial-progress-card", {
                attrs: {
                  icon: "iconsminds-clock",
                  title: "5 " + _vm.$t("dashboards.posts"),
                  detail: _vm.$t("dashboards.pending-for-publish"),
                  percent: (5 * 100) / 12,
                  progressText: "5/12"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { lg: "4" } },
            [
              _c("gradient-with-radial-progress-card", {
                attrs: {
                  icon: "iconsminds-male",
                  title: "4 " + _vm.$t("dashboards.users"),
                  detail: _vm.$t("dashboards.on-approval-process"),
                  percent: (4 * 100) / 6,
                  progressText: "4/6"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { lg: "4" } },
            [
              _c("gradient-with-radial-progress-card", {
                attrs: {
                  icon: "iconsminds-bell",
                  title: "8 " + _vm.$t("dashboards.alerts"),
                  detail: _vm.$t("dashboards.waiting-for-notice"),
                  percent: (8 * 100) / 10,
                  progressText: "8/10"
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Default.vue?vue&type=template&id=7054af3a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/dashboards/Default.vue?vue&type=template&id=7054af3a& ***!
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
                attrs: { heading: _vm.$t("menu.default") }
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
            { attrs: { xl: "6", lg: "12" } },
            [
              _c(
                "div",
                { staticClass: "icon-cards-row" },
                [
                  _c(
                    "swiper",
                    {
                      ref: "swiperIcons",
                      attrs: { options: _vm.swiperIconsOption }
                    },
                    [
                      _c(
                        "swiper-slide",
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
                        "swiper-slide",
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
                        "swiper-slide",
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
                        "swiper-slide",
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
                  _c("resize-observer", {
                    on: { notify: _vm.handleSwipersResize }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-colxx",
                    { staticClass: "mb-4", attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        { attrs: { title: _vm.$t("dashboards.sales") } },
                        [
                          _c("b-refresh-button", {
                            on: { click: _vm.refreshButtonClick }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dashboard-line-chart" },
                            [
                              _c("line-shadow-chart", {
                                attrs: { data: _vm.lineChartData, height: 300 }
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
            { staticClass: "mb-4", attrs: { lg: "12", xl: "6" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.recent-orders") } },
                [
                  _c("b-refresh-button", {
                    on: { click: _vm.refreshButtonClick }
                  }),
                  _vm._v(" "),
                  _c(
                    "vue-perfect-scrollbar",
                    {
                      staticClass: "scroll dashboard-list-with-thumbs",
                      attrs: {
                        settings: {
                          suppressScrollX: true,
                          wheelPropagation: false
                        }
                      }
                    },
                    _vm._l(_vm.products.slice(0, 6), function(order, index) {
                      return _c("recent-order-item", {
                        key: index,
                        attrs: {
                          order: order,
                          "detail-path": "/app/pages/details"
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
            { staticClass: "mb-4", attrs: { lg: "4", md: "12" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.product-categories") } },
                [
                  _c(
                    "div",
                    { staticClass: "dashboard-donut-chart" },
                    [
                      _c("polar-area-shadow-chart", {
                        attrs: { data: _vm.polarAreaChartData, height: 270 }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { lg: "4", md: "6" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.logs") } },
                [
                  _c(
                    "vue-perfect-scrollbar",
                    {
                      staticClass: "dashboard-logs",
                      attrs: {
                        settings: {
                          suppressScrollX: true,
                          wheelPropagation: false
                        }
                      }
                    },
                    [_c("log-list", { attrs: { logs: _vm.logs } })],
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
            { staticClass: "mb-4", attrs: { lg: "4", md: "6" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.tickets") } },
                [
                  _c(
                    "vue-perfect-scrollbar",
                    {
                      staticClass: "scroll dashboard-list-with-user",
                      attrs: {
                        settings: {
                          suppressScrollX: true,
                          wheelPropagation: false
                        }
                      }
                    },
                    _vm._l(_vm.tickets, function(ticket, index) {
                      return _c("list-with-user-item", {
                        key: index,
                        attrs: {
                          data: ticket,
                          "detail-path": "/app/pages/details"
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
            { staticClass: "mb-4", attrs: { xl: "6", lg: "12" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.calendar") } },
                [
                  _c("calendar-view", {
                    staticStyle: { "min-height": "500px" },
                    attrs: {
                      events: _vm.calendar.events,
                      "show-date": _vm.calendar.showDate,
                      "time-format-options": {
                        hour: "numeric",
                        minute: "2-digit"
                      },
                      "enable-drag-drop": true,
                      "show-event-times": true,
                      "display-period-uom": "month",
                      "starting-day-of-week": 1,
                      "current-period-label": "Today"
                    },
                    on: {
                      "drop-on-date": _vm.onDropDate,
                      "click-date": _vm.onClickDay,
                      "click-event": _vm.onClickEvent
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "header",
                        fn: function(t) {
                          return _c("calendar-view-header", {
                            attrs: { "header-props": t.headerProps },
                            on: { input: _vm.setShowDate }
                          })
                        }
                      }
                    ])
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
            { staticClass: "mb-4", attrs: { xl: "6", lg: "12" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.best-sellers") } },
                [
                  _c("vuetable", {
                    ref: "vuetable",
                    attrs: {
                      "api-url": _vm.bestsellers.apiUrl,
                      fields: _vm.bestsellers.fields,
                      "per-page": 6,
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
            { staticClass: "mb-4", attrs: { sm: "12", lg: "4" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.profile-status") } },
                _vm._l(_vm.profileStatuses, function(s, index) {
                  return _c(
                    "div",
                    { key: index, staticClass: "mb-4" },
                    [
                      _c("p", { staticClass: "mb-2" }, [
                        _vm._v(
                          "\n            " + _vm._s(s.title) + "\n            "
                        ),
                        _c("span", { staticClass: "float-right text-muted" }, [
                          _vm._v(_vm._s(s.status) + "/" + _vm._s(s.total))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-progress", {
                        attrs: { value: (s.status / s.total) * 100 }
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
            { staticClass: "mb-4", attrs: { md: "6", lg: "4" } },
            [
              _c(
                "gradient-card",
                [
                  _c(
                    "b-badge",
                    {
                      staticClass: "align-self-start mb-3",
                      attrs: { pill: "", variant: "theme-3" }
                    },
                    [_vm._v(_vm._s(_vm.$t("dashboards.piaf")))]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "lead text-white" }, [
                    _vm._v(_vm._s(_vm.$t("dashboards.magic-is-in-the-details")))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-white" }, [
                    _vm._v(_vm._s(_vm.$t("dashboards.yes-it-is-indeed")))
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
            { staticClass: "mb-4", attrs: { md: "6", lg: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "dashboard-link-list",
                  attrs: { title: _vm.$t("dashboards.cakes") }
                },
                [_c("two-column-list", { attrs: { data: _vm.cakes } })],
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
        "draggable",
        { staticClass: "row" },
        [
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { xl: "3", lg: "6" } },
            [
              _c("radial-progress-card", {
                attrs: {
                  title: _vm.$t("dashboards.payment-status"),
                  percent: 64
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { xl: "3", lg: "6" } },
            [
              _c("radial-progress-card", {
                attrs: {
                  title: _vm.$t("dashboards.work-progress"),
                  percent: 75
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { xl: "3", lg: "6" } },
            [
              _c("radial-progress-card", {
                attrs: {
                  title: _vm.$t("dashboards.tasks-completed"),
                  percent: 32
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { xl: "3", lg: "6" } },
            [
              _c("radial-progress-card", {
                attrs: {
                  title: _vm.$t("dashboards.payments-done"),
                  percent: 45
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
            { staticClass: "mb-4", attrs: { sm: "12", md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "dashboard-filled-line-chart",
                  attrs: { "no-body": "" }
                },
                [
                  _c(
                    "b-card-body",
                    [
                      _c("div", { staticClass: "float-left float-none-xs" }, [
                        _c("div", { staticClass: "d-inline-block" }, [
                          _c("h5", { staticClass: "d-inline" }, [
                            _vm._v(_vm._s(_vm.$t("dashboards.website-visits")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "text-muted text-small d-block" },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("dashboards.unique-visitors"))
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "float-right float-none-xs mt-2",
                          attrs: {
                            id: "ddown5",
                            text: _vm.$t("dashboards.this-week"),
                            size: "xs",
                            variant: "outline-primary"
                          }
                        },
                        [
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("dashboards.last-week")))
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("dashboards.this-month")))
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
                    { staticClass: "chart card-body pt-0" },
                    [
                      _c("area-shadow-chart", {
                        attrs: { data: _vm.areaChartData, height: 195 }
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
            { staticClass: "mb-4", attrs: { sm: "12", md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "dashboard-filled-line-chart",
                  attrs: { "no-body": "" }
                },
                [
                  _c(
                    "b-card-body",
                    [
                      _c("div", { staticClass: "float-left float-none-xs" }, [
                        _c("div", { staticClass: "d-inline-block" }, [
                          _c("h5", { staticClass: "d-inline" }, [
                            _vm._v(
                              _vm._s(_vm.$t("dashboards.conversion-rates"))
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "text-muted text-small d-block" },
                            [_vm._v(_vm._s(_vm.$t("dashboards.per-session")))]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "float-right float-none-xs mt-2",
                          attrs: {
                            id: "ddown5",
                            text: _vm.$t("dashboards.this-week"),
                            size: "xs",
                            variant: "outline-secondary"
                          }
                        },
                        [
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("dashboards.last-week")))
                          ]),
                          _vm._v(" "),
                          _c("b-dropdown-item", [
                            _vm._v(_vm._s(_vm.$t("dashboards.this-month")))
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
                    { staticClass: "chart card-body pt-0" },
                    [
                      _c("area-shadow-chart", {
                        attrs: { data: _vm.conversionChartData, height: 195 }
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
            { attrs: { lg: "12", md: "6", xl: "4" } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-colxx",
                    { staticClass: "mb-4", attrs: { lg: "4", xl: "12" } },
                    [
                      _c("gradient-with-radial-progress-card", {
                        attrs: {
                          icon: "iconsminds-clock",
                          title: "5 " + _vm.$t("dashboards.files"),
                          detail: _vm.$t("dashboards.pending-for-print"),
                          percent: (5 * 100) / 12,
                          progressText: "5/12"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { staticClass: "mb-4", attrs: { lg: "4", xl: "12" } },
                    [
                      _c("gradient-with-radial-progress-card", {
                        attrs: {
                          icon: "iconsminds-male",
                          title: "4 " + _vm.$t("dashboards.orders"),
                          detail: _vm.$t("dashboards.on-approval-process"),
                          percent: (4 * 100) / 6,
                          progressText: "4/6"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { staticClass: "mb-4", attrs: { lg: "4", xl: "12" } },
                    [
                      _c("gradient-with-radial-progress-card", {
                        attrs: {
                          icon: "iconsminds-bell",
                          title: "8 " + _vm.$t("dashboards.alerts"),
                          detail: _vm.$t("dashboards.waiting-for-notice"),
                          percent: (8 * 100) / 10,
                          progressText: "8/10"
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
            {
              staticClass: "mb-4",
              attrs: { lg: "6", md: "6", xl: "4", sm: "12" }
            },
            [
              _c(
                "b-card",
                { staticClass: "dashboard-search", attrs: { "no-body": "" } },
                [
                  _c(
                    "b-card-body",
                    [
                      _c("h5", { staticClass: "card-title text-white" }, [
                        _vm._v(_vm._s(_vm.$t("dashboards.advanced-search")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-form",
                        { staticClass: "form-container" },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: _vm.$t("dashboards.toppings") } },
                            [
                              _c("v-select", {
                                attrs: { options: _vm.selectData }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { label: _vm.$t("dashboards.type") } },
                            [
                              _c("v-select", {
                                attrs: { options: _vm.selectData }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { label: _vm.$t("dashboards.keyword") } },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  type: "text",
                                  placeholder: _vm.$t("dashboards.keyword")
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            [
                              _c("b-form-checkbox", [
                                _vm._v(_vm._s(_vm.$t("forms.custom-checkbox")))
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { staticClass: "text-center" },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mt-4 pl-5 pr-5",
                                  attrs: { type: "submit", variant: "primary" }
                                },
                                [_vm._v(_vm._s(_vm.$t("dashboards.search")))]
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
            "b-colxx",
            { staticClass: "mb-4", attrs: { lg: "6", xl: "4" } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-colxx",
                    { staticClass: "mb-4", attrs: { xxs: "6" } },
                    [
                      _c("small-line-chart-card", {
                        staticClass: "dashboard-small-chart",
                        attrs: {
                          "label-prefix": "$",
                          data: _vm.smallChartData1
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { staticClass: "mb-4", attrs: { xxs: "6" } },
                    [
                      _c("small-line-chart-card", {
                        staticClass: "dashboard-small-chart",
                        attrs: {
                          "label-prefix": "$",
                          data: _vm.smallChartData2
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { staticClass: "mb-4", attrs: { xxs: "6" } },
                    [
                      _c("small-line-chart-card", {
                        staticClass: "dashboard-small-chart",
                        attrs: {
                          "label-prefix": "$",
                          data: _vm.smallChartData3
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-colxx",
                    { staticClass: "mb-4", attrs: { xxs: "6" } },
                    [
                      _c("small-line-chart-card", {
                        staticClass: "dashboard-small-chart",
                        attrs: {
                          "label-prefix": "$",
                          data: _vm.smallChartData4
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
                  staticClass: "dashboard-top-rated",
                  attrs: { title: _vm.$t("dashboards.top-rated-items") }
                },
                [
                  _c(
                    "swiper",
                    {
                      ref: "swiperTopRated",
                      attrs: { options: _vm.swiperTopRatedOption }
                    },
                    [
                      _c(
                        "swiper-slide",
                        [
                          _c("top-rated-slide-item", {
                            attrs: {
                              image: "/assets/img/carousel-1.jpg",
                              order: "1",
                              title: "Cheesecake",
                              rate: "5",
                              "rate-count": "48"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "swiper-slide",
                        [
                          _c("top-rated-slide-item", {
                            attrs: {
                              image: "/assets/img/carousel-2.jpg",
                              order: "2",
                              title: "Chocolate Cake",
                              rate: "4",
                              "rate-count": "24"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "swiper-slide",
                        [
                          _c("top-rated-slide-item", {
                            attrs: {
                              image: "/assets/img/carousel-3.jpg",
                              order: "3",
                              title: "Cremeschnitte",
                              rate: "4",
                              "rate-count": "18"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("resize-observer", {
                    on: { notify: _vm.handleSwipersResize }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Ecommerce.vue?vue&type=template&id=2df19662&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/dashboards/Ecommerce.vue?vue&type=template&id=2df19662& ***!
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
                attrs: { heading: _vm.$t("menu.ecommerce") }
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
            { attrs: { xl: "6", lg: "12" } },
            [
              _c(
                "div",
                { staticClass: "icon-cards-row" },
                [
                  _c(
                    "swiper",
                    {
                      ref: "swiperIcons",
                      attrs: { options: _vm.swiperIconsOption }
                    },
                    [
                      _c(
                        "swiper-slide",
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
                        "swiper-slide",
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
                        "swiper-slide",
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
                        "swiper-slide",
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
                  _c("resize-observer", {
                    on: { notify: _vm.handleSwipersResize }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-colxx",
                    { staticClass: "mb-4", attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        { attrs: { title: _vm.$t("dashboards.sales") } },
                        [
                          _c("b-refresh-button", {
                            on: { click: _vm.refreshButtonClick }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dashboard-line-chart" },
                            [
                              _c("line-shadow-chart", {
                                attrs: { data: _vm.lineChartData, height: 300 }
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
            { staticClass: "mb-4", attrs: { lg: "12", xl: "6" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.recent-orders") } },
                [
                  _c("b-refresh-button", {
                    on: { click: _vm.refreshButtonClick }
                  }),
                  _vm._v(" "),
                  _c(
                    "vue-perfect-scrollbar",
                    {
                      staticClass: "scroll dashboard-list-with-thumbs",
                      attrs: {
                        settings: {
                          suppressScrollX: true,
                          wheelPropagation: false
                        }
                      }
                    },
                    _vm._l(_vm.products.slice(0, 6), function(order, index) {
                      return _c("recent-order-item", {
                        key: index,
                        attrs: {
                          order: order,
                          "detail-path": "/app/pages/details"
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
            { staticClass: "mb-4", attrs: { lg: "4", md: "12" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.product-categories") } },
                [
                  _c(
                    "div",
                    { staticClass: "dashboard-donut-chart" },
                    [
                      _c("doughnut-shadow-chart", {
                        attrs: { data: _vm.doughnutChartData, height: 300 }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-colxx",
            { staticClass: "mb-4", attrs: { lg: "4", md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "dashboard-link-list",
                  attrs: { title: _vm.$t("dashboards.tickets") }
                },
                [
                  _c(
                    "vue-perfect-scrollbar",
                    {
                      staticClass: "scroll dashboard-list-with-user",
                      attrs: {
                        settings: {
                          suppressScrollX: true,
                          wheelPropagation: false
                        }
                      }
                    },
                    _vm._l(_vm.tickets, function(ticket, index) {
                      return _c("list-with-user-item", {
                        key: index,
                        attrs: {
                          data: ticket,
                          "detail-path": "/app/pages/details"
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
            { staticClass: "mb-4", attrs: { lg: "4", md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "dashboard-link-list",
                  attrs: { title: _vm.$t("dashboards.cakes") }
                },
                [_c("two-column-list", { attrs: { data: _vm.cakes } })],
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
            { staticClass: "mb-4", attrs: { xl: "6", lg: "12" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.calendar") } },
                [
                  _c("calendar-view", {
                    staticStyle: { "min-height": "500px" },
                    attrs: {
                      events: _vm.calendar.events,
                      "show-date": _vm.calendar.showDate,
                      "time-format-options": {
                        hour: "numeric",
                        minute: "2-digit"
                      },
                      "enable-drag-drop": true,
                      "show-event-times": true,
                      "display-period-uom": "month",
                      "starting-day-of-week": 1,
                      "current-period-label": "Today"
                    },
                    on: {
                      "drop-on-date": _vm.onDropDate,
                      "click-date": _vm.onClickDay,
                      "click-event": _vm.onClickEvent
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "header",
                        fn: function(t) {
                          return _c("calendar-view-header", {
                            attrs: { "header-props": t.headerProps },
                            on: { input: _vm.setShowDate }
                          })
                        }
                      }
                    ])
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
            { staticClass: "mb-4", attrs: { xl: "6", lg: "12" } },
            [
              _c(
                "b-card",
                { attrs: { title: _vm.$t("dashboards.best-sellers") } },
                [
                  _c("vuetable", {
                    ref: "vuetable",
                    attrs: {
                      "api-url": _vm.bestsellers.apiUrl,
                      fields: _vm.bestsellers.fields,
                      "per-page": 6,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/index.vue?vue&type=template&id=4828b5d8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/dashboards/index.vue?vue&type=template&id=4828b5d8& ***!
  \*******************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/src/components/Cards/GradientCard.vue":
/*!*********************************************************!*\
  !*** ./resources/src/components/Cards/GradientCard.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradientCard_vue_vue_type_template_id_47a6ce1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradientCard.vue?vue&type=template&id=47a6ce1c& */ "./resources/src/components/Cards/GradientCard.vue?vue&type=template&id=47a6ce1c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _GradientCard_vue_vue_type_template_id_47a6ce1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradientCard_vue_vue_type_template_id_47a6ce1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Cards/GradientCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Cards/GradientCard.vue?vue&type=template&id=47a6ce1c&":
/*!****************************************************************************************!*\
  !*** ./resources/src/components/Cards/GradientCard.vue?vue&type=template&id=47a6ce1c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradientCard_vue_vue_type_template_id_47a6ce1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GradientCard.vue?vue&type=template&id=47a6ce1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Cards/GradientCard.vue?vue&type=template&id=47a6ce1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradientCard_vue_vue_type_template_id_47a6ce1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradientCard_vue_vue_type_template_id_47a6ce1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/Cards/GradientWithRadialProgressCard.vue":
/*!***************************************************************************!*\
  !*** ./resources/src/components/Cards/GradientWithRadialProgressCard.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradientWithRadialProgressCard_vue_vue_type_template_id_65978f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradientWithRadialProgressCard.vue?vue&type=template&id=65978f38& */ "./resources/src/components/Cards/GradientWithRadialProgressCard.vue?vue&type=template&id=65978f38&");
/* harmony import */ var _GradientWithRadialProgressCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradientWithRadialProgressCard.vue?vue&type=script&lang=js& */ "./resources/src/components/Cards/GradientWithRadialProgressCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GradientWithRadialProgressCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradientWithRadialProgressCard_vue_vue_type_template_id_65978f38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradientWithRadialProgressCard_vue_vue_type_template_id_65978f38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Cards/GradientWithRadialProgressCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Cards/GradientWithRadialProgressCard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/src/components/Cards/GradientWithRadialProgressCard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GradientWithRadialProgressCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GradientWithRadialProgressCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Cards/GradientWithRadialProgressCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GradientWithRadialProgressCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Cards/GradientWithRadialProgressCard.vue?vue&type=template&id=65978f38&":
/*!**********************************************************************************************************!*\
  !*** ./resources/src/components/Cards/GradientWithRadialProgressCard.vue?vue&type=template&id=65978f38& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradientWithRadialProgressCard_vue_vue_type_template_id_65978f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GradientWithRadialProgressCard.vue?vue&type=template&id=65978f38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Cards/GradientWithRadialProgressCard.vue?vue&type=template&id=65978f38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradientWithRadialProgressCard_vue_vue_type_template_id_65978f38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradientWithRadialProgressCard_vue_vue_type_template_id_65978f38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/Listing/ListWithUserItem.vue":
/*!***************************************************************!*\
  !*** ./resources/src/components/Listing/ListWithUserItem.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListWithUserItem_vue_vue_type_template_id_37fd68b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListWithUserItem.vue?vue&type=template&id=37fd68b3& */ "./resources/src/components/Listing/ListWithUserItem.vue?vue&type=template&id=37fd68b3&");
/* harmony import */ var _ListWithUserItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListWithUserItem.vue?vue&type=script&lang=js& */ "./resources/src/components/Listing/ListWithUserItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListWithUserItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListWithUserItem_vue_vue_type_template_id_37fd68b3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListWithUserItem_vue_vue_type_template_id_37fd68b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Listing/ListWithUserItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Listing/ListWithUserItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/src/components/Listing/ListWithUserItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListWithUserItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListWithUserItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/ListWithUserItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListWithUserItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Listing/ListWithUserItem.vue?vue&type=template&id=37fd68b3&":
/*!**********************************************************************************************!*\
  !*** ./resources/src/components/Listing/ListWithUserItem.vue?vue&type=template&id=37fd68b3& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListWithUserItem_vue_vue_type_template_id_37fd68b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListWithUserItem.vue?vue&type=template&id=37fd68b3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/ListWithUserItem.vue?vue&type=template&id=37fd68b3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListWithUserItem_vue_vue_type_template_id_37fd68b3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListWithUserItem_vue_vue_type_template_id_37fd68b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/Listing/LogList.vue":
/*!******************************************************!*\
  !*** ./resources/src/components/Listing/LogList.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LogList_vue_vue_type_template_id_1b0e4efe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogList.vue?vue&type=template&id=1b0e4efe& */ "./resources/src/components/Listing/LogList.vue?vue&type=template&id=1b0e4efe&");
/* harmony import */ var _LogList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogList.vue?vue&type=script&lang=js& */ "./resources/src/components/Listing/LogList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LogList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LogList_vue_vue_type_template_id_1b0e4efe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LogList_vue_vue_type_template_id_1b0e4efe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Listing/LogList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Listing/LogList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/src/components/Listing/LogList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LogList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/LogList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Listing/LogList.vue?vue&type=template&id=1b0e4efe&":
/*!*************************************************************************************!*\
  !*** ./resources/src/components/Listing/LogList.vue?vue&type=template&id=1b0e4efe& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogList_vue_vue_type_template_id_1b0e4efe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LogList.vue?vue&type=template&id=1b0e4efe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/LogList.vue?vue&type=template&id=1b0e4efe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogList_vue_vue_type_template_id_1b0e4efe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogList_vue_vue_type_template_id_1b0e4efe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/Listing/RecentOrderItem.vue":
/*!**************************************************************!*\
  !*** ./resources/src/components/Listing/RecentOrderItem.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecentOrderItem_vue_vue_type_template_id_bca5ce36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecentOrderItem.vue?vue&type=template&id=bca5ce36& */ "./resources/src/components/Listing/RecentOrderItem.vue?vue&type=template&id=bca5ce36&");
/* harmony import */ var _RecentOrderItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecentOrderItem.vue?vue&type=script&lang=js& */ "./resources/src/components/Listing/RecentOrderItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecentOrderItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecentOrderItem_vue_vue_type_template_id_bca5ce36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RecentOrderItem_vue_vue_type_template_id_bca5ce36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Listing/RecentOrderItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Listing/RecentOrderItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/src/components/Listing/RecentOrderItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentOrderItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecentOrderItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/RecentOrderItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentOrderItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Listing/RecentOrderItem.vue?vue&type=template&id=bca5ce36&":
/*!*********************************************************************************************!*\
  !*** ./resources/src/components/Listing/RecentOrderItem.vue?vue&type=template&id=bca5ce36& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentOrderItem_vue_vue_type_template_id_bca5ce36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecentOrderItem.vue?vue&type=template&id=bca5ce36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/RecentOrderItem.vue?vue&type=template&id=bca5ce36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentOrderItem_vue_vue_type_template_id_bca5ce36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentOrderItem_vue_vue_type_template_id_bca5ce36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/Listing/TopRatedSlideItem.vue":
/*!****************************************************************!*\
  !*** ./resources/src/components/Listing/TopRatedSlideItem.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopRatedSlideItem_vue_vue_type_template_id_4a071b98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopRatedSlideItem.vue?vue&type=template&id=4a071b98& */ "./resources/src/components/Listing/TopRatedSlideItem.vue?vue&type=template&id=4a071b98&");
/* harmony import */ var _TopRatedSlideItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopRatedSlideItem.vue?vue&type=script&lang=js& */ "./resources/src/components/Listing/TopRatedSlideItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopRatedSlideItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopRatedSlideItem_vue_vue_type_template_id_4a071b98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopRatedSlideItem_vue_vue_type_template_id_4a071b98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Listing/TopRatedSlideItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Listing/TopRatedSlideItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/components/Listing/TopRatedSlideItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopRatedSlideItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopRatedSlideItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/TopRatedSlideItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopRatedSlideItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Listing/TopRatedSlideItem.vue?vue&type=template&id=4a071b98&":
/*!***********************************************************************************************!*\
  !*** ./resources/src/components/Listing/TopRatedSlideItem.vue?vue&type=template&id=4a071b98& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopRatedSlideItem_vue_vue_type_template_id_4a071b98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopRatedSlideItem.vue?vue&type=template&id=4a071b98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/TopRatedSlideItem.vue?vue&type=template&id=4a071b98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopRatedSlideItem_vue_vue_type_template_id_4a071b98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopRatedSlideItem_vue_vue_type_template_id_4a071b98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/components/Listing/TwoColumnList.vue":
/*!************************************************************!*\
  !*** ./resources/src/components/Listing/TwoColumnList.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TwoColumnList_vue_vue_type_template_id_009c3282___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwoColumnList.vue?vue&type=template&id=009c3282& */ "./resources/src/components/Listing/TwoColumnList.vue?vue&type=template&id=009c3282&");
/* harmony import */ var _TwoColumnList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwoColumnList.vue?vue&type=script&lang=js& */ "./resources/src/components/Listing/TwoColumnList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TwoColumnList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TwoColumnList_vue_vue_type_template_id_009c3282___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TwoColumnList_vue_vue_type_template_id_009c3282___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/Listing/TwoColumnList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/components/Listing/TwoColumnList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/src/components/Listing/TwoColumnList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumnList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TwoColumnList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/TwoColumnList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumnList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/Listing/TwoColumnList.vue?vue&type=template&id=009c3282&":
/*!*******************************************************************************************!*\
  !*** ./resources/src/components/Listing/TwoColumnList.vue?vue&type=template&id=009c3282& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumnList_vue_vue_type_template_id_009c3282___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TwoColumnList.vue?vue&type=template&id=009c3282& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/components/Listing/TwoColumnList.vue?vue&type=template&id=009c3282&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumnList_vue_vue_type_template_id_009c3282___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumnList_vue_vue_type_template_id_009c3282___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/data/cakes.js":
/*!*************************************!*\
  !*** ./resources/src/data/cakes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cakes = [{
  title: 'Marble Cake',
  link: '/app/pages/details'
}, {
  title: 'Fruitcake',
  link: '/app/pages/details'
}, {
  title: 'Chocolate Cake',
  link: '/app/pages/details'
}, {
  title: 'Fat Rascal',
  link: '/app/pages/details'
}, {
  title: 'Financier',
  link: '/app/pages/details'
}, {
  title: 'Genoise',
  link: '/app/pages/details'
}, {
  title: 'Gingerbread',
  link: '/app/pages/details'
}, {
  title: 'Goose Breast',
  link: '/app/pages/details'
}, {
  title: 'Parkin',
  link: '/app/pages/details'
}, {
  title: 'Salzburger Nockerl',
  link: '/app/pages/details'
}, {
  title: 'Soufflé',
  link: '/app/pages/details'
}, {
  title: 'Merveilleux',
  link: '/app/pages/details'
}, {
  title: 'Streuselkuchen',
  link: '/app/pages/details'
}, {
  title: 'Tea Loaf',
  link: '/app/pages/details'
}, {
  title: 'Napoleonshat',
  link: '/app/pages/details'
}, {
  title: 'Merveilleux',
  link: '/app/pages/details'
}, {
  title: 'Magdalena',
  link: '/app/pages/details'
}, {
  title: 'Cremeschnitte',
  link: '/app/pages/details'
}, {
  title: 'Cheesecake',
  link: '/app/pages/details'
}, {
  title: 'Bebinca',
  link: '/app/pages/details'
}, {
  title: 'Fruitcake',
  link: '/app/pages/details'
}, {
  title: 'Chocolate Cake',
  link: '/app/pages/details'
}, {
  title: 'Fat Rascal',
  link: '/app/pages/details'
}, {
  title: 'Streuselkuchen',
  link: '/app/pages/details'
}];
/* harmony default export */ __webpack_exports__["default"] = (cakes);

/***/ }),

/***/ "./resources/src/data/logs.js":
/*!************************************!*\
  !*** ./resources/src/data/logs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var logs = [{
  label: 'New user registiration',
  time: '14:12',
  color: 'border-theme-1',
  key: 0
}, {
  label: 'New sale: Soufflé',
  time: '13:20',
  color: 'border-theme-2',
  key: 1
}, {
  label: '14 products added',
  time: '12:55',
  color: 'border-danger',
  key: 2
}, {
  label: 'New sale: Napoleonshat',
  time: '12:44',
  color: 'border-theme-2',
  key: 3
}, {
  label: 'New sale: Cremeschnitte',
  time: '12:30',
  color: 'border-theme-2',
  key: 4
}, {
  label: 'New sale: Soufflé',
  time: '10:40',
  color: 'border-theme-2',
  key: 5
}, {
  label: '2 categories added',
  time: '10:20',
  color: 'border-danger',
  key: 6
}, {
  label: 'New sale: Chocolate Cake',
  time: '09:28',
  color: 'border-theme-2',
  key: 7
}, {
  label: 'New sale: Magdalena',
  time: '09:25',
  color: 'border-theme-2',
  key: 8
}, {
  label: 'New sale: Fat Rascal',
  time: '09:20',
  color: 'border-theme-2',
  key: 9
}, {
  label: 'New sale: Parkin',
  time: '09:10',
  color: 'border-theme-2',
  key: 10
}];
/* harmony default export */ __webpack_exports__["default"] = (logs);

/***/ }),

/***/ "./resources/src/data/profileStatuses.js":
/*!***********************************************!*\
  !*** ./resources/src/data/profileStatuses.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var data = [{
  title: 'Basic Information',
  total: 18,
  status: 12
}, {
  title: 'Portfolio',
  total: 8,
  status: 1
}, {
  title: 'Billing Details',
  total: 6,
  status: 2
}, {
  title: 'Interests',
  total: 10,
  status: 0
}, {
  title: 'Legal Documents',
  total: 2,
  status: 1
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./resources/src/data/tickets.js":
/*!***************************************!*\
  !*** ./resources/src/data/tickets.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tickets = [{
  title: 'Mayra Sibley',
  detail: '09.08.2018 - 12:45',
  thumb: '/assets/img/profile-pic-l.jpg'
}, {
  title: 'Mimi Carreira',
  detail: '05.08.2018 - 10:20',
  thumb: '/assets/img/profile-pic-l-2.jpg'
}, {
  title: 'Philip Nelms',
  detail: '05.08.2018 - 09:12',
  thumb: '/assets/img/profile-pic-l-3.jpg'
}, {
  title: 'Terese Threadgill',
  detail: '01.08.2018 - 18:20',
  thumb: '/assets/img/profile-pic-l-4.jpg'
}, {
  title: 'Kathryn Mengel',
  detail: '27.07.2018 - 11:45',
  thumb: '/assets/img/profile-pic-l-5.jpg'
}, {
  title: 'Esperanza Lodge',
  detail: '24.07.2018 - 15:00',
  thumb: '/assets/img/profile-pic-l-2.jpg'
}, {
  title: 'Laree Munsch',
  detail: '24.05.2018 - 11:00',
  thumb: '/assets/img/profile-pic-l.jpg'
}];
/* harmony default export */ __webpack_exports__["default"] = (tickets);

/***/ }),

/***/ "./resources/src/views/app/dashboards/Analytics.vue":
/*!**********************************************************!*\
  !*** ./resources/src/views/app/dashboards/Analytics.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Analytics_vue_vue_type_template_id_445f2eb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Analytics.vue?vue&type=template&id=445f2eb0& */ "./resources/src/views/app/dashboards/Analytics.vue?vue&type=template&id=445f2eb0&");
/* harmony import */ var _Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Analytics.vue?vue&type=script&lang=js& */ "./resources/src/views/app/dashboards/Analytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Analytics_vue_vue_type_template_id_445f2eb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Analytics_vue_vue_type_template_id_445f2eb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/dashboards/Analytics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/dashboards/Analytics.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/dashboards/Analytics.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Analytics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Analytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/dashboards/Analytics.vue?vue&type=template&id=445f2eb0&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/dashboards/Analytics.vue?vue&type=template&id=445f2eb0& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_template_id_445f2eb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Analytics.vue?vue&type=template&id=445f2eb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Analytics.vue?vue&type=template&id=445f2eb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_template_id_445f2eb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_template_id_445f2eb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/dashboards/Content.vue":
/*!********************************************************!*\
  !*** ./resources/src/views/app/dashboards/Content.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Content_vue_vue_type_template_id_6aa1aaca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.vue?vue&type=template&id=6aa1aaca& */ "./resources/src/views/app/dashboards/Content.vue?vue&type=template&id=6aa1aaca&");
/* harmony import */ var _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content.vue?vue&type=script&lang=js& */ "./resources/src/views/app/dashboards/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Content_vue_vue_type_template_id_6aa1aaca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Content_vue_vue_type_template_id_6aa1aaca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/dashboards/Content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/dashboards/Content.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/src/views/app/dashboards/Content.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/dashboards/Content.vue?vue&type=template&id=6aa1aaca&":
/*!***************************************************************************************!*\
  !*** ./resources/src/views/app/dashboards/Content.vue?vue&type=template&id=6aa1aaca& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_6aa1aaca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=template&id=6aa1aaca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Content.vue?vue&type=template&id=6aa1aaca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_6aa1aaca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_6aa1aaca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/dashboards/Default.vue":
/*!********************************************************!*\
  !*** ./resources/src/views/app/dashboards/Default.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Default_vue_vue_type_template_id_7054af3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Default.vue?vue&type=template&id=7054af3a& */ "./resources/src/views/app/dashboards/Default.vue?vue&type=template&id=7054af3a&");
/* harmony import */ var _Default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Default.vue?vue&type=script&lang=js& */ "./resources/src/views/app/dashboards/Default.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Default_vue_vue_type_template_id_7054af3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Default_vue_vue_type_template_id_7054af3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/dashboards/Default.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/dashboards/Default.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/src/views/app/dashboards/Default.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Default.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Default.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/dashboards/Default.vue?vue&type=template&id=7054af3a&":
/*!***************************************************************************************!*\
  !*** ./resources/src/views/app/dashboards/Default.vue?vue&type=template&id=7054af3a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Default_vue_vue_type_template_id_7054af3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Default.vue?vue&type=template&id=7054af3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Default.vue?vue&type=template&id=7054af3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Default_vue_vue_type_template_id_7054af3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Default_vue_vue_type_template_id_7054af3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/dashboards/Ecommerce.vue":
/*!**********************************************************!*\
  !*** ./resources/src/views/app/dashboards/Ecommerce.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ecommerce_vue_vue_type_template_id_2df19662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ecommerce.vue?vue&type=template&id=2df19662& */ "./resources/src/views/app/dashboards/Ecommerce.vue?vue&type=template&id=2df19662&");
/* harmony import */ var _Ecommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ecommerce.vue?vue&type=script&lang=js& */ "./resources/src/views/app/dashboards/Ecommerce.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Ecommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Ecommerce_vue_vue_type_template_id_2df19662___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Ecommerce_vue_vue_type_template_id_2df19662___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/dashboards/Ecommerce.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/dashboards/Ecommerce.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/dashboards/Ecommerce.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ecommerce.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Ecommerce.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/dashboards/Ecommerce.vue?vue&type=template&id=2df19662&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/dashboards/Ecommerce.vue?vue&type=template&id=2df19662& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_template_id_2df19662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ecommerce.vue?vue&type=template&id=2df19662& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/Ecommerce.vue?vue&type=template&id=2df19662&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_template_id_2df19662___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_template_id_2df19662___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/dashboards/index.vue":
/*!******************************************************!*\
  !*** ./resources/src/views/app/dashboards/index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4828b5d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4828b5d8& */ "./resources/src/views/app/dashboards/index.vue?vue&type=template&id=4828b5d8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _index_vue_vue_type_template_id_4828b5d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4828b5d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/dashboards/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/dashboards/index.vue?vue&type=template&id=4828b5d8&":
/*!*************************************************************************************!*\
  !*** ./resources/src/views/app/dashboards/index.vue?vue&type=template&id=4828b5d8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4828b5d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4828b5d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboards/index.vue?vue&type=template&id=4828b5d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4828b5d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4828b5d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);