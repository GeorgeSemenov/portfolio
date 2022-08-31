/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 923:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(755);
$(document).ready(function(){
  $('.faq-section__accordeon-title-container').click(function(){
    $(this).parent().toggleClass("faq-section__accordeon_opened");
    $(this).next('.faq-section__accordeon-text').slideToggle(300);
  })
})

/***/ }),

/***/ 254:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(755);
//упрощённая схема аккордеона находится тут https://codepen.io/Goshanbo/pen/ExEPOXg
$(document).ready(function(){
  // let pages = $(`.header__nav-pages`); 
  // В этой версии шапки - страничек нет;
  let services = $(`.header__nav-services`);
  let contacts = $(`.header__contacts`);
  let submenu = $(`.header__service-submenu`);
  if($(window).width() < 767 ){
    contacts.css({"display" : "none"})//При запуске на мобилках контакты должны быть скрытыми.
  }
  window.addEventListener('resize', function(event) {
    if($(window).width() > 767 ){
      contacts.css({"display" : "flex"});
      services.css({"display" : "block"});
    }else{//для мобилок
      if(!$(`.header`).hasClass(`header_expanded`)){//Если хедер свёрнут
        contacts.css({"display" : "none"});
        services.css({"display" : "none"});
      }
    }
  }, true);

  $('.header__sandwich-ico-container').click(function(){//При нажатии на бутерброд будет пересчитанна высота хедера
    contacts.slideToggle();
    services.slideToggle();

    $('.header').toggleClass('header_expanded');
  });

  //функция для открытия и закрытия выпадающего списка и подсчёта высоты хедера на мобильных версиях
  $('.header__service-href_dropdown').click(function(){
    let thisSubmenu = $(this).siblings(".header__service-submenu");
    $(this).toggleClass('header__service-href_dropdown_pic-rotated');
    thisSubmenu.slideToggle();
  })
})


/***/ }),

/***/ 851:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[3].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./source/pages/index/index.scss
var index_namespaceObject = {};
__webpack_require__.r(index_namespaceObject);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[3].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./source/pages/index/index.scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./source/pages/index/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(index_namespaceObject["default"], options);




       /* harmony default export */ const index = (index_namespaceObject["default"] && index_namespaceObject["default"].locals ? index_namespaceObject["default"].locals : undefined);

// EXTERNAL MODULE: ./node_modules/swiper/swiper.min.css + 1 modules
var swiper_min = __webpack_require__(862);
// EXTERNAL MODULE: ./node_modules/swiper/modules/navigation/navigation.min.css + 1 modules
var navigation_min = __webpack_require__(180);
;// CONCATENATED MODULE: ./source/JS-components/libs.js

let $ = window.jQuery;




// EXTERNAL MODULE: ./source/blocks/header/header.js
var header = __webpack_require__(254);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 88 modules
var swiper_esm = __webpack_require__(99);
;// CONCATENATED MODULE: ./source/blocks/ssl-cert/ssl-cert.js
/* provided dependency */ var ssl_cert_$ = __webpack_require__(755);



ssl_cert_$(document).ready(function(){
    /* Swiper
  **************************************************************/
  let swiper;
  var init = false;
  
  /* On Load
  **************************************************************/
  window.addEventListener('load', function() {
    swiperMode();
  });

  /* On Resize
  **************************************************************/
  window.addEventListener('resize', function() {
    swiperMode();
  });

  /* Which media query
  **************************************************************/
  function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1199px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches || tablet.matches) {
      if (!init) {
        init = true;
        swiper = new swiper_esm/* default */.ZP('.ssl-cert .content-container', {
          modules: [swiper_esm/* Navigation */.W_],
          slidesPerView: 4,
          spaceBetween: 20,
          loop: false,
          // Responsive breakpoints
          breakpoints: {
            // when window width is >= 320px
            320: {slidesPerView: 1},
            // when window width is >= 480px
            640: {slidesPerView: 2},
            991: {slidesPerView: 3},
          },

          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }

    }

    // Disable (for desktop)
    else if(desktop.matches && init) {
      swiper.destroy();
      init = false;
    }
  }
})
;// CONCATENATED MODULE: ./source/blocks/reviews-section/reviews-section.js
/* provided dependency */ var reviews_section_$ = __webpack_require__(755);

reviews_section_$(document).ready(function(){
  let swiper = new swiper_esm/* default */.ZP('.reviews-section__reviews', {
    modules: [swiper_esm/* Pagination */.tl, swiper_esm/* Autoplay */.pt],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //   delay: 2500,
    // },
    loop: true,
    pagination: {
      el: '.reviews-section__review-pagination',
      clickable: true,
    }
  });
})
// EXTERNAL MODULE: ./source/blocks/faq-section/faq-section.js
var faq_section = __webpack_require__(923);
;// CONCATENATED MODULE: ./source/pages/index/index.js











/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkFSD_lesson2_UiKit_new_try"] = self["webpackChunkFSD_lesson2_UiKit_new_try"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [592], () => (__webpack_require__(851)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;