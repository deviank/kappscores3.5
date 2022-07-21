/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/helpers/strip-tags.js":
/*!*********************************************!*\
  !*** ./src/assets/js/helpers/strip-tags.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var strip_tags = function strip_tags(input, allowed) {
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)

  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
      commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strip_tags);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./src/assets/js/customize-preview.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_strip_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/strip-tags */ "./src/assets/js/helpers/strip-tags.js");


wp.customize('_themename_site_info', function (value) {
  value.bind(function (to) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-header__blogname').html(to);
  });
});
console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_themename));
wp.customize('_themename_display_author_info', function (value) {
  value.bind(function (to) {
    if (to) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-post-author').show();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-post-author').hide();
    }
  });
});
wp.customize('_themename_accent_colour', function (value) {
  value.bind(function (to) {
    var inline_css = "";
    var inline_css_obj = _themename['inline-css'];

    for (var selector in inline_css_obj) {
      inline_css += "".concat(selector, " {");

      for (var prop in inline_css_obj[selector]) {
        var val = inline_css_obj[selector][prop];
        inline_css += "".concat(prop, ": ").concat(wp.customize(val).get());
      }

      inline_css += "}";
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_themename-stylesheet-inline-css').html(inline_css);
  });
});
wp.customize('_themename_site_info', function (value) {
  value.bind(function (to) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-site-info__text').html((0,_helpers_strip_tags__WEBPACK_IMPORTED_MODULE_1__["default"])(to, '<a>'));
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQWIsRUFBa0JDLEdBQWxCLEVBQWhCLENBQVY7TUFDSDs7TUFDTEwsVUFBVSxPQUFWO0lBQ0g7O0lBQ0RaLDZDQUFDLENBQUMsbUNBQUQsQ0FBRCxDQUF1Q00sSUFBdkMsQ0FBNENNLFVBQTVDO0VBQ0gsQ0FaRDtBQWFILENBZEQ7QUFnQkFYLEVBQUUsQ0FBQ0MsU0FBSCxDQUFhLHNCQUFiLEVBQXFDLFVBQUNDLEtBQUQsRUFBVztFQUM1Q0EsS0FBSyxDQUFDQyxJQUFOLENBQVcsVUFBQ0MsRUFBRCxFQUFRO0lBQ2ZMLDZDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qk0sSUFBeEIsQ0FBNkJsQiwrREFBVSxDQUFDaUIsRUFBRCxFQUFLLEtBQUwsQ0FBdkM7RUFDSCxDQUZEO0FBR0gsQ0FKRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2FwcHNjb3Jlcy8uL3NyYy9hc3NldHMvanMvaGVscGVycy9zdHJpcC10YWdzLmpzIiwid2VicGFjazovL2thcHBzY29yZXMvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8va2FwcHNjb3Jlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYXBwc2NvcmVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2thcHBzY29yZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2thcHBzY29yZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rYXBwc2NvcmVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2FwcHNjb3Jlcy8uL3NyYy9hc3NldHMvanMvY3VzdG9taXplLXByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RyaXBfdGFncyA9IChpbnB1dCwgYWxsb3dlZCkgPT4ge1xyXG4gICAgYWxsb3dlZCA9ICgoKGFsbG93ZWQgfHwgJycpICsgJycpXHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLm1hdGNoKC88W2Etel1bYS16MC05XSo+L2cpIHx8IFtdKVxyXG4gICAgLmpvaW4oJycpOyAvLyBtYWtpbmcgc3VyZSB0aGUgYWxsb3dlZCBhcmcgaXMgYSBzdHJpbmcgY29udGFpbmluZyBvbmx5IHRhZ3MgaW4gbG93ZXJjYXNlICg8YT48Yj48Yz4pXHJcbiAgICB2YXIgdGFncyA9IC88XFwvPyhbYS16XVthLXowLTldKilcXGJbXj5dKj4vZ2ksXHJcbiAgICBjb21tZW50c0FuZFBocFRhZ3MgPSAvPCEtLVtcXHNcXFNdKj8tLT58PFxcPyg/OnBocCk/W1xcc1xcU10qP1xcPz4vZ2k7XHJcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZShjb21tZW50c0FuZFBocFRhZ3MsICcnKVxyXG4gICAgLnJlcGxhY2UodGFncywgZnVuY3Rpb24oJDAsICQxKSB7XHJcbiAgICAgIHJldHVybiBhbGxvd2VkLmluZGV4T2YoJzwnICsgJDEudG9Mb3dlckNhc2UoKSArICc+JykgPiAtMSA/ICQwIDogJyc7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RyaXBfdGFnczsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHN0cmlwX3RhZ3MgZnJvbSAnLi9oZWxwZXJzL3N0cmlwLXRhZ3MnO1xyXG5cclxud3AuY3VzdG9taXplKCdfdGhlbWVuYW1lX3NpdGVfaW5mbycsICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuYmluZCgodG8pID0+IHtcclxuICAgICAgICAkKCcuYy1oZWFkZXJfX2Jsb2duYW1lJykuaHRtbCgodG8pKTtcclxuICAgIH0pXHJcbn0pXHJcblxyXG5jb25zb2xlLmxvZygkKF90aGVtZW5hbWUpKTtcclxuXHJcbndwLmN1c3RvbWl6ZSggJ190aGVtZW5hbWVfZGlzcGxheV9hdXRob3JfaW5mbycsICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuYmluZCggKHRvKSA9PiB7XHJcbiAgICAgICAgaWYodG8pIHtcclxuICAgICAgICAgICAgJCgnLmMtcG9zdC1hdXRob3InKS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmMtcG9zdC1hdXRob3InKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSApXHJcbn0pXHJcblxyXG53cC5jdXN0b21pemUoICdfdGhlbWVuYW1lX2FjY2VudF9jb2xvdXInLCAodmFsdWUpID0+IHtcclxuICAgIHZhbHVlLmJpbmQoICh0bykgPT4ge1xyXG4gICAgICAgIGxldCBpbmxpbmVfY3NzID0gYGA7XHJcbiAgICAgICAgbGV0IGlubGluZV9jc3Nfb2JqID0gX3RoZW1lbmFtZVsnaW5saW5lLWNzcyddO1xyXG4gICAgICAgIGZvcihsZXQgc2VsZWN0b3IgaW4gaW5saW5lX2Nzc19vYmopIHtcclxuICAgICAgICAgICAgaW5saW5lX2NzcyArPSBgJHtzZWxlY3Rvcn0ge2A7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHByb3AgaW4gaW5saW5lX2Nzc19vYmpbc2VsZWN0b3JdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IGlubGluZV9jc3Nfb2JqW3NlbGVjdG9yXVtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVfY3NzICs9IGAke3Byb3B9OiAke3dwLmN1c3RvbWl6ZSh2YWwpLmdldCgpfWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlubGluZV9jc3MgKz0gYH1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjX3RoZW1lbmFtZS1zdHlsZXNoZWV0LWlubGluZS1jc3MnKS5odG1sKGlubGluZV9jc3MpO1xyXG4gICAgfSApXHJcbn0pXHJcblxyXG53cC5jdXN0b21pemUoJ190aGVtZW5hbWVfc2l0ZV9pbmZvJywgKHZhbHVlKSA9PiB7XHJcbiAgICB2YWx1ZS5iaW5kKCh0bykgPT4ge1xyXG4gICAgICAgICQoJy5jLXNpdGUtaW5mb19fdGV4dCcpLmh0bWwoc3RyaXBfdGFncyh0bywgJzxhPicpKTtcclxuICAgIH0pXHJcbn0pIl0sIm5hbWVzIjpbInN0cmlwX3RhZ3MiLCJpbnB1dCIsImFsbG93ZWQiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwiam9pbiIsInRhZ3MiLCJjb21tZW50c0FuZFBocFRhZ3MiLCJyZXBsYWNlIiwiJDAiLCIkMSIsImluZGV4T2YiLCIkIiwid3AiLCJjdXN0b21pemUiLCJ2YWx1ZSIsImJpbmQiLCJ0byIsImh0bWwiLCJjb25zb2xlIiwibG9nIiwiX3RoZW1lbmFtZSIsInNob3ciLCJoaWRlIiwiaW5saW5lX2NzcyIsImlubGluZV9jc3Nfb2JqIiwic2VsZWN0b3IiLCJwcm9wIiwidmFsIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==