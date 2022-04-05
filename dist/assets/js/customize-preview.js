/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/customize-preview.js":
/*!********************************************!*\
  !*** ./src/assets/js/customize-preview.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-site-info__text').html(Object(_helpers_strip_tags__WEBPACK_IMPORTED_MODULE_1__["default"])(to, '<a>'));
  });
});

/***/ }),

/***/ "./src/assets/js/helpers/strip-tags.js":
/*!*********************************************!*\
  !*** ./src/assets/js/helpers/strip-tags.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var strip_tags = function strip_tags(input, allowed) {
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)

  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
      commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
  });
};

/* harmony default export */ __webpack_exports__["default"] = (strip_tags);

/***/ }),

/***/ 2:
/*!**************************************************!*\
  !*** multi ./src/assets/js/customize-preview.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\wordpressTheme\wp-content\themes\kappscores\src\assets\js\customize-preview.js */"./src/assets/js/customize-preview.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jdXN0b21pemUtcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvc3RyaXAtdGFncy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJ3cCIsImN1c3RvbWl6ZSIsInZhbHVlIiwiYmluZCIsInRvIiwiJCIsImh0bWwiLCJjb25zb2xlIiwibG9nIiwiX3RoZW1lbmFtZSIsInNob3ciLCJoaWRlIiwiaW5saW5lX2NzcyIsImlubGluZV9jc3Nfb2JqIiwic2VsZWN0b3IiLCJwcm9wIiwidmFsIiwiZ2V0Iiwic3RyaXBfdGFncyIsImlucHV0IiwiYWxsb3dlZCIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJqb2luIiwidGFncyIsImNvbW1lbnRzQW5kUGhwVGFncyIsInJlcGxhY2UiLCIkMCIsIiQxIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7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LEVBQWpFO0FBQ0QsR0FITSxDQUFQO0FBSUgsQ0FYRDs7QUFhZVQseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQSx3QiIsImZpbGUiOiJjdXN0b21pemUtcHJldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBzdHJpcF90YWdzIGZyb20gJy4vaGVscGVycy9zdHJpcC10YWdzJztcclxuXHJcblxyXG53cC5jdXN0b21pemUoJ190aGVtZW5hbWVfc2l0ZV9pbmZvJywgKHZhbHVlKSA9PiB7XHJcbiAgICB2YWx1ZS5iaW5kKCh0bykgPT4ge1xyXG4gICAgICAgICQoJy5jLWhlYWRlcl9fYmxvZ25hbWUnKS5odG1sKCh0bykpO1xyXG4gICAgfSlcclxufSlcclxuXHJcbmNvbnNvbGUubG9nKCQoX3RoZW1lbmFtZSkpO1xyXG5cclxud3AuY3VzdG9taXplKCAnX3RoZW1lbmFtZV9kaXNwbGF5X2F1dGhvcl9pbmZvJywgKHZhbHVlKSA9PiB7XHJcbiAgICB2YWx1ZS5iaW5kKCAodG8pID0+IHtcclxuICAgICAgICBpZih0bykge1xyXG4gICAgICAgICAgICAkKCcuYy1wb3N0LWF1dGhvcicpLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuYy1wb3N0LWF1dGhvcicpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9IClcclxufSlcclxuXHJcbndwLmN1c3RvbWl6ZSggJ190aGVtZW5hbWVfYWNjZW50X2NvbG91cicsICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuYmluZCggKHRvKSA9PiB7XHJcbiAgICAgICAgbGV0IGlubGluZV9jc3MgPSBgYDtcclxuICAgICAgICBsZXQgaW5saW5lX2Nzc19vYmogPSBfdGhlbWVuYW1lWydpbmxpbmUtY3NzJ107XHJcbiAgICAgICAgZm9yKGxldCBzZWxlY3RvciBpbiBpbmxpbmVfY3NzX29iaikge1xyXG4gICAgICAgICAgICBpbmxpbmVfY3NzICs9IGAke3NlbGVjdG9yfSB7YDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgcHJvcCBpbiBpbmxpbmVfY3NzX29ialtzZWxlY3Rvcl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gaW5saW5lX2Nzc19vYmpbc2VsZWN0b3JdW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZV9jc3MgKz0gYCR7cHJvcH06ICR7d3AuY3VzdG9taXplKHZhbCkuZ2V0KCl9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5saW5lX2NzcyArPSBgfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNfdGhlbWVuYW1lLXN0eWxlc2hlZXQtaW5saW5lLWNzcycpLmh0bWwoaW5saW5lX2Nzcyk7XHJcbiAgICB9IClcclxufSlcclxuXHJcbndwLmN1c3RvbWl6ZSgnX3RoZW1lbmFtZV9zaXRlX2luZm8nLCAodmFsdWUpID0+IHtcclxuICAgIHZhbHVlLmJpbmQoKHRvKSA9PiB7XHJcbiAgICAgICAgJCgnLmMtc2l0ZS1pbmZvX190ZXh0JykuaHRtbChzdHJpcF90YWdzKHRvLCAnPGE+JykpO1xyXG4gICAgfSlcclxufSkiLCJjb25zdCBzdHJpcF90YWdzID0gKGlucHV0LCBhbGxvd2VkKSA9PiB7XHJcbiAgICBhbGxvd2VkID0gKCgoYWxsb3dlZCB8fCAnJykgKyAnJylcclxuICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAubWF0Y2goLzxbYS16XVthLXowLTldKj4vZykgfHwgW10pXHJcbiAgICAuam9pbignJyk7IC8vIG1ha2luZyBzdXJlIHRoZSBhbGxvd2VkIGFyZyBpcyBhIHN0cmluZyBjb250YWluaW5nIG9ubHkgdGFncyBpbiBsb3dlcmNhc2UgKDxhPjxiPjxjPilcclxuICAgIHZhciB0YWdzID0gLzxcXC8/KFthLXpdW2EtejAtOV0qKVxcYltePl0qPi9naSxcclxuICAgIGNvbW1lbnRzQW5kUGhwVGFncyA9IC88IS0tW1xcc1xcU10qPy0tPnw8XFw/KD86cGhwKT9bXFxzXFxTXSo/XFw/Pi9naTtcclxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKGNvbW1lbnRzQW5kUGhwVGFncywgJycpXHJcbiAgICAucmVwbGFjZSh0YWdzLCBmdW5jdGlvbigkMCwgJDEpIHtcclxuICAgICAgcmV0dXJuIGFsbG93ZWQuaW5kZXhPZignPCcgKyAkMS50b0xvd2VyQ2FzZSgpICsgJz4nKSA+IC0xID8gJDAgOiAnJztcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHJpcF90YWdzOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=