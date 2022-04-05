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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */
;

(function (factory) {
  'use strict';

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var Slick = window.Slick || {};

  Slick = function () {
    var instanceUid = 0;

    function Slick(element, settings) {
      var _ = this,
          dataSettings;

      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function customPaging(slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;

      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }

      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++; // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source

      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

      _.registerBreakpoints();

      _.init(true);
    }

    return Slick;
  }();

  Slick.prototype.activateADA = function () {
    var _ = this;

    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;

    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }

    _.unload();

    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.animateHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };

  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
        _ = this;

    _.animateHeight();

    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }

    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }

        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function step(now) {
            now = Math.ceil(now);

            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' + now + 'px, 0px)';

              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' + now + 'px)';

              _.$slideTrack.css(animProps);
            }
          },
          complete: function complete() {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();

        targetLeft = Math.ceil(targetLeft);

        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }

        _.$slideTrack.css(animProps);

        if (callback) {
          setTimeout(function () {
            _.disableTransition();

            callback.call();
          }, _.options.speed);
        }
      }
    }
  };

  Slick.prototype.getNavTarget = function () {
    var _ = this,
        asNavFor = _.options.asNavFor;

    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }

    return asNavFor;
  };

  Slick.prototype.asNavFor = function (index) {
    var _ = this,
        asNavFor = _.getNavTarget();

    if (asNavFor !== null && _typeof(asNavFor) === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');

        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };

  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
        transition = {};

    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.autoPlay = function () {
    var _ = this;

    _.autoPlayClear();

    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };

  Slick.prototype.autoPlayClear = function () {
    var _ = this;

    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };

  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;

    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;

          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }

      _.slideHandler(slideTo);
    }
  };

  Slick.prototype.buildArrows = function () {
    var _ = this;

    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }

        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }

        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
      }
    }
  };

  Slick.prototype.buildDots = function () {
    var _ = this,
        i,
        dot;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');

      dot = $('<ul />').addClass(_.options.dotsClass);

      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }

      _.$dots = dot.appendTo(_.options.appendDots);

      _.$dots.find('li').first().addClass('slick-active');
    }
  };

  Slick.prototype.buildOut = function () {
    var _ = this;

    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
    _.slideCount = _.$slides.length;

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
    });

    _.$slider.addClass('slick-slider');

    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();

    _.$slideTrack.css('opacity', 0);

    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }

    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

    _.setupInfinite();

    _.buildArrows();

    _.buildDots();

    _.updateDots();

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  };

  Slick.prototype.buildRows = function () {
    var _ = this,
        a,
        b,
        c,
        newSlides,
        numOfSlides,
        originalSlides,
        slidesPerSection;

    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();

    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');

        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');

          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);

            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }

          slide.appendChild(row);
        }

        newSlides.appendChild(slide);
      }

      _.$slider.empty().append(newSlides);

      _.$slider.children().children().children().css({
        'width': 100 / _.options.slidesPerRow + '%',
        'display': 'inline-block'
      });
    }
  };

  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
        breakpoint,
        targetBreakpoint,
        respondToWidth,
        triggerBreakpoint = false;

    var sliderWidth = _.$slider.width();

    var windowWidth = window.innerWidth || $(window).width();

    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }

    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;

      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }

      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;

            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }

              _.refresh(initial);
            }

            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;

          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }

            _.refresh(initial);
          }

          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;

          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }

          _.refresh(initial);

          triggerBreakpoint = targetBreakpoint;
        }
      } // only trigger breakpoints during an actual break. not on initialize.


      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };

  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
        $target = $(event.currentTarget),
        indexOffset,
        slideOffset,
        unevenOffset; // If target is a link, prevent default action.


    if ($target.is('a')) {
      event.preventDefault();
    } // If target is not the <li> element (ie: a child), find the <li>.


    if (!$target.is('li')) {
      $target = $target.closest('li');
    }

    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

    switch (event.data.message) {
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }

        break;

      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }

        break;

      case 'index':
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

        _.slideHandler(_.checkNavigable(index), false, dontAnimate);

        $target.children().trigger('focus');
        break;

      default:
        return;
    }
  };

  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
        navigables,
        prevNavigable;

    navigables = _.getNavigableIndexes();
    prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  };

  Slick.prototype.cleanUpEvents = function () {
    var _ = this;

    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

      if (_.options.accessibility === true) {
        _.$dots.off('keydown.slick', _.keyHandler);
      }
    }

    _.$slider.off('focus.slick blur.slick');

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
        _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
      }
    }

    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);

    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);

    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);

    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

    _.$list.off('click.slick', _.clickHandler);

    $(document).off(_.visibilityChange, _.visibility);

    _.cleanUpSlideEvents();

    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }

    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  };

  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;

    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));

    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  };

  Slick.prototype.cleanUpRows = function () {
    var _ = this,
        originalSlides;

    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');

      _.$slider.empty().append(originalSlides);
    }
  };

  Slick.prototype.clickHandler = function (event) {
    var _ = this;

    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };

  Slick.prototype.destroy = function (refresh) {
    var _ = this;

    _.autoPlayClear();

    _.touchObject = {};

    _.cleanUpEvents();

    $('.slick-cloned', _.$slider).detach();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }

    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }

    if (_.$slides) {
      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
        $(this).attr('style', $(this).data('originalStyling'));
      });

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.detach();

      _.$list.detach();

      _.$slider.append(_.$slides);
    }

    _.cleanUpRows();

    _.$slider.removeClass('slick-slider');

    _.$slider.removeClass('slick-initialized');

    _.$slider.removeClass('slick-dotted');

    _.unslicked = true;

    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };

  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
        transition = {};

    transition[_.transitionType] = '';

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });

      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });

      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);

          callback.call();
        }, _.options.speed);
      }
    }
  };

  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;

    if (filter !== null) {
      _.$slidesCache = _.$slides;

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.focusHandler = function () {
    var _ = this;

    _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {
      event.stopImmediatePropagation();
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          _.focussed = $sf.is(':focus');

          _.autoPlay();
        }
      }, 0);
    });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;

    return _.currentSlide;
  };

  Slick.prototype.getDotCount = function () {
    var _ = this;

    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;

    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }

    return pagerQty - 1;
  };

  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide,
        coef;

    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);

    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;

        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }

        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }

      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }

    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }

    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }

    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }

      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }

      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }

    return targetLeft;
  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;

    return _.options[option];
  };

  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }

    return indexes;
  };

  Slick.prototype.getSlick = function () {
    return this;
  };

  Slick.prototype.getSlideCount = function () {
    var _ = this,
        slidesTraversed,
        swipedSlide,
        centerOffset;

    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      });

      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
  };

  Slick.prototype.init = function (creation) {
    var _ = this;

    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');

      _.buildRows();

      _.buildOut();

      _.setProps();

      _.startLoad();

      _.loadSlider();

      _.initializeEvents();

      _.updateArrows();

      _.updateDots();

      _.checkResponsive(true);

      _.focusHandler();
    }

    if (creation) {
      _.$slider.trigger('init', [_]);
    }

    if (_.options.accessibility === true) {
      _.initADA();
    }

    if (_.options.autoplay) {
      _.paused = false;

      _.autoPlay();
    }
  };

  Slick.prototype.initADA = function () {
    var _ = this,
        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
      return val >= 0 && val < _.slideCount;
    });

    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });

    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          'role': 'tabpanel',
          'id': 'slick-slide' + _.instanceUid + i,
          'tabindex': -1
        });

        if (slideControlIndex !== -1) {
          var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;

          if ($('#' + ariaButtonControl).length) {
            $(this).attr({
              'aria-describedby': ariaButtonControl
            });
          }
        }
      });

      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          'role': 'presentation'
        });
        $(this).find('button').first().attr({
          'role': 'tab',
          'id': 'slick-slide-control' + _.instanceUid + i,
          'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
          'aria-label': i + 1 + ' of ' + numDotGroups,
          'aria-selected': null,
          'tabindex': '-1'
        });
      }).eq(_.currentSlide).find('button').attr({
        'aria-selected': 'true',
        'tabindex': '0'
      }).end();
    }

    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          'tabindex': '0'
        });
      } else {
        _.$slides.eq(i).removeAttr('tabindex');
      }
    }

    _.activateADA();
  };

  Slick.prototype.initArrowEvents = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on('click.slick', {
        message: 'previous'
      }, _.changeSlide);

      _.$nextArrow.off('click.slick').on('click.slick', {
        message: 'next'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow.on('keydown.slick', _.keyHandler);

        _.$nextArrow.on('keydown.slick', _.keyHandler);
      }
    }
  };

  Slick.prototype.initDotEvents = function () {
    var _ = this;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$dots.on('keydown.slick', _.keyHandler);
      }
    }

    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initSlideEvents = function () {
    var _ = this;

    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));

      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initializeEvents = function () {
    var _ = this;

    _.initArrowEvents();

    _.initDotEvents();

    _.initSlideEvents();

    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);

    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);

    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('click.slick', _.clickHandler);

    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };

  Slick.prototype.initUI = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();

      _.$nextArrow.show();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };

  Slick.prototype.keyHandler = function (event) {
    var _ = this; //Dont slide if the cursor is inside the form fields and arrow keys are pressed


    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'next' : 'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'previous' : 'next'
          }
        });
      }
    }
  };

  Slick.prototype.lazyLoad = function () {
    var _ = this,
        loadRange,
        cloneRange,
        rangeStart,
        rangeEnd;

    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
            imageSource = $(this).attr('data-lazy'),
            imageSrcSet = $(this).attr('data-srcset'),
            imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
            imageToLoad = document.createElement('img');

        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr('srcset', imageSrcSet);

              if (imageSizes) {
                image.attr('sizes', imageSizes);
              }
            }

            image.attr('src', imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
            });

            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
        };

        imageToLoad.onerror = function () {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        };

        imageToLoad.src = imageSource;
      });
    }

    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }

    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

    if (_.options.lazyLoad === 'anticipated') {
      var prevSlide = rangeStart - 1,
          nextSlide = rangeEnd,
          $slides = _.$slider.find('.slick-slide');

      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }

    loadImages(loadRange);

    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };

  Slick.prototype.loadSlider = function () {
    var _ = this;

    _.setPosition();

    _.$slideTrack.css({
      opacity: 1
    });

    _.$slider.removeClass('slick-loading');

    _.initUI();

    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };

  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'next'
      }
    });
  };

  Slick.prototype.orientationChange = function () {
    var _ = this;

    _.checkResponsive();

    _.setPosition();
  };

  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;

    _.autoPlayClear();

    _.paused = true;
  };

  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;

    _.autoPlay();

    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };

  Slick.prototype.postSlide = function (index) {
    var _ = this;

    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);

      _.animating = false;

      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }

      _.swipeLeft = null;

      if (_.options.autoplay) {
        _.autoPlay();
      }

      if (_.options.accessibility === true) {
        _.initADA();

        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr('tabindex', 0).focus();
        }
      }
    }
  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
  };

  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };

  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;

    var _ = this,
        $imgsToLoad = $('img[data-lazy]', _.$slider),
        image,
        imageSource,
        imageSrcSet,
        imageSizes,
        imageToLoad;

    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageSrcSet = image.attr('data-srcset');
      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
      imageToLoad = document.createElement('img');

      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr('srcset', imageSrcSet);

          if (imageSizes) {
            image.attr('sizes', imageSizes);
          }
        }

        image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }

        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);

        _.progressiveLazyLoad();
      };

      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          /**
           * try to load the image 3 times,
           * leave a slight delay so we don't get
           * servers blocking the request.
           */
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

          _.progressiveLazyLoad();
        }
      };

      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  };

  Slick.prototype.refresh = function (initializing) {
    var _ = this,
        currentSlide,
        lastVisibleIndex;

    lastVisibleIndex = _.slideCount - _.options.slidesToShow; // in non-infinite sliders, we don't want to go past the
    // last visible index.

    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    } // if less slides than to show, go to start.


    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    currentSlide = _.currentSlide;

    _.destroy(true);

    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });

    _.init();

    if (!initializing) {
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
    }
  };

  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
        breakpoint,
        currentBreakpoint,
        l,
        responsiveSettings = _.options.responsive || null;

    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';

      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;

        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint; // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.

          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }

            l--;
          }

          _.breakpoints.push(currentBreakpoint);

          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }

      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };

  Slick.prototype.reinit = function () {
    var _ = this;

    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;

    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    _.registerBreakpoints();

    _.setProps();

    _.setupInfinite();

    _.buildArrows();

    _.updateArrows();

    _.initArrowEvents();

    _.buildDots();

    _.updateDots();

    _.initDotEvents();

    _.cleanUpSlideEvents();

    _.initSlideEvents();

    _.checkResponsive(false, true);

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    _.setPosition();

    _.focusHandler();

    _.paused = !_.options.autoplay;

    _.autoPlay();

    _.$slider.trigger('reInit', [_]);
  };

  Slick.prototype.resize = function () {
    var _ = this;

    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();

        _.checkResponsive();

        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;

    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }

    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }

    _.unload();

    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.setCSS = function (position) {
    var _ = this,
        positionProps = {},
        x,
        y;

    if (_.options.rtl === true) {
      position = -position;
    }

    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;

    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};

      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';

        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';

        _.$slideTrack.css(positionProps);
      }
    }
  };

  Slick.prototype.setDimensions = function () {
    var _ = this;

    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: '0px ' + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + ' 0px'
        });
      }
    }

    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();

    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);

      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
    }

    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };

  Slick.prototype.setFade = function () {
    var _ = this,
        targetLeft;

    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;

      if (_.options.rtl === true) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });

    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };

  Slick.prototype.setHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.css('height', targetHeight);
    }
  };

  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    /**
     * accepts arguments in format of:
     *
     *  - for changing a single option's value:
     *     .slick("setOption", option, value, refresh )
     *
     *  - for changing a set of responsive options:
     *     .slick("setOption", 'responsive', [{}, ...], refresh )
     *
     *  - for updating multiple values at once (not responsive)
     *     .slick("setOption", { 'option': value, ... }, refresh )
     */
    var _ = this,
        l,
        item,
        option,
        value,
        refresh = false,
        type;

    if ($.type(arguments[0]) === 'object') {
      option = arguments[0];
      refresh = arguments[1];
      type = 'multiple';
    } else if ($.type(arguments[0]) === 'string') {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];

      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
        type = 'responsive';
      } else if (typeof arguments[1] !== 'undefined') {
        type = 'single';
      }
    }

    if (type === 'single') {
      _.options[option] = value;
    } else if (type === 'multiple') {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === 'responsive') {
      for (item in value) {
        if ($.type(_.options.responsive) !== 'array') {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1; // loop through the responsive object and splice out duplicates.

          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }

            l--;
          }

          _.options.responsive.push(value[item]);
        }
      }
    }

    if (refresh) {
      _.unload();

      _.reinit();
    }
  };

  Slick.prototype.setPosition = function () {
    var _ = this;

    _.setDimensions();

    _.setHeight();

    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }

    _.$slider.trigger('setPosition', [_]);
  };

  Slick.prototype.setProps = function () {
    var _ = this,
        bodyStyle = document.body.style;

    _.positionProp = _.options.vertical === true ? 'top' : 'left';

    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }

    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }

    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }

    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }

    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }

    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };

  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
        centerOffset,
        allSlides,
        indexOffset,
        remainder;

    allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

    _.$slides.eq(index).addClass('slick-current');

    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
        }

        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }

      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
      }
    }

    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
      _.lazyLoad();
    }
  };

  Slick.prototype.setupInfinite = function () {
    var _ = this,
        i,
        slideIndex,
        infiniteCount;

    if (_.options.fade === true) {
      _.options.centerMode = false;
    }

    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;

      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }

        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
        }

        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
        }

        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });
      }
    }
  };

  Slick.prototype.interrupt = function (toggle) {
    var _ = this;

    if (!toggle) {
      _.autoPlay();
    }

    _.interrupted = toggle;
  };

  Slick.prototype.selectHandler = function (event) {
    var _ = this;

    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);

      return;
    }

    _.slideHandler(index);
  };

  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
        animSlide,
        oldSlide,
        slideLeft,
        targetLeft = null,
        _ = this,
        navTarget;

    sync = sync || false;

    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }

    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }

    if (sync === false) {
      _.asNavFor(index);
    }

    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    }

    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }

    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }

    _.animating = true;

    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;

    _.setSlideClasses(_.currentSlide);

    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');

      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }

    _.updateDots();

    _.updateArrows();

    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);

        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }

      _.animateHeight();

      return;
    }

    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };

  Slick.prototype.startLoad = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();

      _.$nextArrow.hide();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }

    _.$slider.addClass('slick-loading');
  };

  Slick.prototype.swipeDirection = function () {
    var xDist,
        yDist,
        r,
        swipeAngle,
        _ = this;

    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }

    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';
  };

  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
        slideCount,
        direction;

    _.dragging = false;
    _.swiping = false;

    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }

    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

    if (_.touchObject.curX === undefined) {
      return false;
    }

    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }

    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();

      switch (direction) {
        case 'left':
        case 'down':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;

        case 'right':
        case 'up':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;

        default:
      }

      if (direction != 'vertical') {
        _.slideHandler(slideCount);

        _.touchObject = {};

        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);

        _.touchObject = {};
      }
    }
  };

  Slick.prototype.swipeHandler = function (event) {
    var _ = this;

    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }

    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }

    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);

        break;

      case 'move':
        _.swipeMove(event);

        break;

      case 'end':
        _.swipeEnd(event);

        break;
    }
  };

  Slick.prototype.swipeMove = function (event) {
    var _ = this,
        edgeWasHit = false,
        curLeft,
        swipeDirection,
        swipeLength,
        positionOffset,
        touches,
        verticalSwipeLength;

    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }

    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }

    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }

    swipeDirection = _.swipeDirection();

    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }

    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }

    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;

    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }

    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }

    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }

    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }

    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }

    _.setCSS(_.swipeLeft);
  };

  Slick.prototype.swipeStart = function (event) {
    var _ = this,
        touches;

    _.interrupted = true;

    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }

    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }

    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;

    if (_.$slidesCache !== null) {
      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.unload = function () {
    var _ = this;

    $('.slick-cloned', _.$slider).remove();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }

    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }

    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  };

  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;

    _.$slider.trigger('unslick', [_, fromBreakpoint]);

    _.destroy();
  };

  Slick.prototype.updateArrows = function () {
    var _ = this,
        centerOffset;

    centerOffset = Math.floor(_.options.slidesToShow / 2);

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  };

  Slick.prototype.updateDots = function () {
    var _ = this;

    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').end();

      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
    }
  };

  Slick.prototype.visibility = function () {
    var _ = this;

    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };

  $.fn.slick = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;

    for (i = 0; i < l; i++) {
      if (_typeof(opt) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }

    return _;
  };
});

/***/ }),

/***/ "./src/assets/js/bundle.js":
/*!*********************************!*\
  !*** ./src/assets/js/bundle.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slider */ "./src/assets/js/components/slider.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation */ "./src/assets/js/components/navigation.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);




jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".c-post__gallery, .c-post__gallery-gutenberg .wp-block-gallery").slick({
    arrows: false,
    adaptiveHeight: true
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".most_recent_widget").slick();

  if (wp.customize && wp.customize.selectiveRefresh) {
    wp.customize.selectiveRefresh.bind("partial-content-rendered", function (placement) {
      if (placement.partial.widgetIdParts && placement.partial.widgetIdParts.idBase === "_themename_mst_recent_widget") {
        placement.container.find(".most_recent_widget").slick();
      }
    });
  }
});

/***/ }),

/***/ "./src/assets/js/components/navigation.js":
/*!************************************************!*\
  !*** ./src/assets/js/components/navigation.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-navigation').on('mouseenter', '.menu-item-has-children', function (e) {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).parents('.sub-menu').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu > .menu-item.open').find('> a > .menu-button').trigger('click');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).removeClass('open');
}); //Code for making arrow icon open and close when clicked

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-navigation').on('click', '.menu .menu-button', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var menu_button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
  var menu_link = menu_button.parent();
  var menu_item = menu_link.parent();

  if (menu_item.hasClass('open')) {
    menu_item.add(menu_item.find('menu-item.open')).removeClass('open');
    menu_link.add(menu_item.find('a')).attr('aria-expanded', 'false');
    menu_button.find('.menu-button-show').attr('aria-hidden', 'false');
    menu_button.find('.menu-button-hide').attr('aria-hidden', 'true');
  } else {
    menu_item.siblings('.open').find('> a >.menu-button').trigger('click');
    menu_item.addClass('open');
    menu_link.attr('aria-expanded', 'true');
    menu_button.find('.menu-button-show').attr('aria-hidden', 'true');
    menu_button.find('.menu-button-hide').attr('aria-hidden', 'false');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-item.open').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu > .menu-item.open > a > .menu-button').trigger('click');
  }
});

/***/ }),

/***/ "./src/assets/js/components/slider.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/slider.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./src/assets/js/bundle.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\wordpressTheme\wp-content\themes\kappscores\src\assets\js\bundle.js */"./src/assets/js/bundle.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImZhY3RvcnkiLCJkZWZpbmUiLCIkIiwiU2xpY2siLCJ3aW5kb3ciLCJpbnN0YW5jZVVpZCIsImVsZW1lbnQiLCJzZXR0aW5ncyIsIl8iLCJkYXRhU2V0dGluZ3MiLCJkZWZhdWx0cyIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsImFwcGVuZEFycm93cyIsImFwcGVuZERvdHMiLCJhcnJvd3MiLCJhc05hdkZvciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiY3NzRWFzZSIsImN1c3RvbVBhZ2luZyIsInNsaWRlciIsImkiLCJ0ZXh0IiwiZG90cyIsImRvdHNDbGFzcyIsImRyYWdnYWJsZSIsImVhc2luZyIsImVkZ2VGcmljdGlvbiIsImZhZGUiLCJmb2N1c09uU2VsZWN0IiwiZm9jdXNPbkNoYW5nZSIsImluZmluaXRlIiwiaW5pdGlhbFNsaWRlIiwibGF6eUxvYWQiLCJtb2JpbGVGaXJzdCIsInBhdXNlT25Ib3ZlciIsInBhdXNlT25Gb2N1cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJyZXNwb25kVG8iLCJyZXNwb25zaXZlIiwicm93cyIsInJ0bCIsInNsaWRlIiwic2xpZGVzUGVyUm93Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzcGVlZCIsInN3aXBlIiwic3dpcGVUb1NsaWRlIiwidG91Y2hNb3ZlIiwidG91Y2hUaHJlc2hvbGQiLCJ1c2VDU1MiLCJ1c2VUcmFuc2Zvcm0iLCJ2YXJpYWJsZVdpZHRoIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFN3aXBpbmciLCJ3YWl0Rm9yQW5pbWF0ZSIsInpJbmRleCIsImluaXRpYWxzIiwiYW5pbWF0aW5nIiwiZHJhZ2dpbmciLCJhdXRvUGxheVRpbWVyIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRMZWZ0IiwiY3VycmVudFNsaWRlIiwiZGlyZWN0aW9uIiwiJGRvdHMiLCJsaXN0V2lkdGgiLCJsaXN0SGVpZ2h0IiwibG9hZEluZGV4IiwiJG5leHRBcnJvdyIsIiRwcmV2QXJyb3ciLCJzY3JvbGxpbmciLCJzbGlkZUNvdW50Iiwic2xpZGVXaWR0aCIsIiRzbGlkZVRyYWNrIiwiJHNsaWRlcyIsInNsaWRpbmciLCJzbGlkZU9mZnNldCIsInN3aXBlTGVmdCIsInN3aXBpbmciLCIkbGlzdCIsInRvdWNoT2JqZWN0IiwidHJhbnNmb3Jtc0VuYWJsZWQiLCJ1bnNsaWNrZWQiLCJleHRlbmQiLCJhY3RpdmVCcmVha3BvaW50IiwiYW5pbVR5cGUiLCJhbmltUHJvcCIsImJyZWFrcG9pbnRzIiwiYnJlYWtwb2ludFNldHRpbmdzIiwiY3NzVHJhbnNpdGlvbnMiLCJmb2N1c3NlZCIsImludGVycnVwdGVkIiwiaGlkZGVuIiwicGF1c2VkIiwicG9zaXRpb25Qcm9wIiwicm93Q291bnQiLCJzaG91bGRDbGljayIsIiRzbGlkZXIiLCIkc2xpZGVzQ2FjaGUiLCJ0cmFuc2Zvcm1UeXBlIiwidHJhbnNpdGlvblR5cGUiLCJ2aXNpYmlsaXR5Q2hhbmdlIiwid2luZG93V2lkdGgiLCJ3aW5kb3dUaW1lciIsImRhdGEiLCJvcHRpb25zIiwib3JpZ2luYWxTZXR0aW5ncyIsImRvY3VtZW50IiwibW96SGlkZGVuIiwid2Via2l0SGlkZGVuIiwiYXV0b1BsYXkiLCJwcm94eSIsImF1dG9QbGF5Q2xlYXIiLCJhdXRvUGxheUl0ZXJhdG9yIiwiY2hhbmdlU2xpZGUiLCJjbGlja0hhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwic2V0UG9zaXRpb24iLCJzd2lwZUhhbmRsZXIiLCJkcmFnSGFuZGxlciIsImtleUhhbmRsZXIiLCJodG1sRXhwciIsInJlZ2lzdGVyQnJlYWtwb2ludHMiLCJpbml0IiwicHJvdG90eXBlIiwiYWN0aXZhdGVBREEiLCJmaW5kIiwiYXR0ciIsImFkZFNsaWRlIiwic2xpY2tBZGQiLCJtYXJrdXAiLCJpbmRleCIsImFkZEJlZm9yZSIsInVubG9hZCIsImxlbmd0aCIsImFwcGVuZFRvIiwiaW5zZXJ0QmVmb3JlIiwiZXEiLCJpbnNlcnRBZnRlciIsInByZXBlbmRUbyIsImNoaWxkcmVuIiwiZGV0YWNoIiwiYXBwZW5kIiwiZWFjaCIsInJlaW5pdCIsImFuaW1hdGVIZWlnaHQiLCJ0YXJnZXRIZWlnaHQiLCJvdXRlckhlaWdodCIsImFuaW1hdGUiLCJoZWlnaHQiLCJhbmltYXRlU2xpZGUiLCJ0YXJnZXRMZWZ0IiwiY2FsbGJhY2siLCJhbmltUHJvcHMiLCJsZWZ0IiwidG9wIiwiYW5pbVN0YXJ0IiwiZHVyYXRpb24iLCJzdGVwIiwibm93IiwiTWF0aCIsImNlaWwiLCJjc3MiLCJjb21wbGV0ZSIsImNhbGwiLCJhcHBseVRyYW5zaXRpb24iLCJzZXRUaW1lb3V0IiwiZGlzYWJsZVRyYW5zaXRpb24iLCJnZXROYXZUYXJnZXQiLCJub3QiLCJ0YXJnZXQiLCJzbGljayIsInNsaWRlSGFuZGxlciIsInRyYW5zaXRpb24iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzbGlkZVRvIiwiYnVpbGRBcnJvd3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicmVtb3ZlQXR0ciIsInRlc3QiLCJhZGQiLCJidWlsZERvdHMiLCJkb3QiLCJnZXREb3RDb3VudCIsImZpcnN0IiwiYnVpbGRPdXQiLCJ3cmFwQWxsIiwicGFyZW50Iiwid3JhcCIsInNldHVwSW5maW5pdGUiLCJ1cGRhdGVEb3RzIiwic2V0U2xpZGVDbGFzc2VzIiwiYnVpbGRSb3dzIiwiYSIsImIiLCJjIiwibmV3U2xpZGVzIiwibnVtT2ZTbGlkZXMiLCJvcmlnaW5hbFNsaWRlcyIsInNsaWRlc1BlclNlY3Rpb24iLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY3JlYXRlRWxlbWVudCIsInJvdyIsImdldCIsImFwcGVuZENoaWxkIiwiZW1wdHkiLCJjaGVja1Jlc3BvbnNpdmUiLCJpbml0aWFsIiwiZm9yY2VVcGRhdGUiLCJicmVha3BvaW50IiwidGFyZ2V0QnJlYWtwb2ludCIsInJlc3BvbmRUb1dpZHRoIiwidHJpZ2dlckJyZWFrcG9pbnQiLCJzbGlkZXJXaWR0aCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm1pbiIsImhhc093blByb3BlcnR5IiwidW5zbGljayIsInJlZnJlc2giLCJ0cmlnZ2VyIiwiZXZlbnQiLCJkb250QW5pbWF0ZSIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXhPZmZzZXQiLCJ1bmV2ZW5PZmZzZXQiLCJpcyIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VzdCIsIm1lc3NhZ2UiLCJjaGVja05hdmlnYWJsZSIsIm5hdmlnYWJsZXMiLCJwcmV2TmF2aWdhYmxlIiwiZ2V0TmF2aWdhYmxlSW5kZXhlcyIsIm4iLCJjbGVhblVwRXZlbnRzIiwib2ZmIiwiaW50ZXJydXB0IiwidmlzaWJpbGl0eSIsImNsZWFuVXBTbGlkZUV2ZW50cyIsIm9yaWVudGF0aW9uQ2hhbmdlIiwicmVzaXplIiwiY2xlYW5VcFJvd3MiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJkZXN0cm95IiwicmVtb3ZlIiwiZmFkZVNsaWRlIiwic2xpZGVJbmRleCIsIm9wYWNpdHkiLCJmYWRlU2xpZGVPdXQiLCJmaWx0ZXJTbGlkZXMiLCJzbGlja0ZpbHRlciIsImZpbHRlciIsImZvY3VzSGFuZGxlciIsIm9uIiwiJHNmIiwiZ2V0Q3VycmVudCIsInNsaWNrQ3VycmVudFNsaWRlIiwiYnJlYWtQb2ludCIsImNvdW50ZXIiLCJwYWdlclF0eSIsImdldExlZnQiLCJ2ZXJ0aWNhbEhlaWdodCIsInZlcnRpY2FsT2Zmc2V0IiwidGFyZ2V0U2xpZGUiLCJjb2VmIiwiZmxvb3IiLCJvZmZzZXRMZWZ0Iiwib3V0ZXJXaWR0aCIsImdldE9wdGlvbiIsInNsaWNrR2V0T3B0aW9uIiwib3B0aW9uIiwiaW5kZXhlcyIsIm1heCIsInB1c2giLCJnZXRTbGljayIsImdldFNsaWRlQ291bnQiLCJzbGlkZXNUcmF2ZXJzZWQiLCJzd2lwZWRTbGlkZSIsImNlbnRlck9mZnNldCIsImFicyIsImdvVG8iLCJzbGlja0dvVG8iLCJwYXJzZUludCIsImNyZWF0aW9uIiwiaGFzQ2xhc3MiLCJzZXRQcm9wcyIsInN0YXJ0TG9hZCIsImxvYWRTbGlkZXIiLCJpbml0aWFsaXplRXZlbnRzIiwidXBkYXRlQXJyb3dzIiwiaW5pdEFEQSIsIm51bURvdEdyb3VwcyIsInRhYkNvbnRyb2xJbmRleGVzIiwidmFsIiwic2xpZGVDb250cm9sSW5kZXgiLCJpbmRleE9mIiwiYXJpYUJ1dHRvbkNvbnRyb2wiLCJtYXBwZWRTbGlkZUluZGV4IiwiZW5kIiwiaW5pdEFycm93RXZlbnRzIiwiaW5pdERvdEV2ZW50cyIsImluaXRTbGlkZUV2ZW50cyIsImFjdGlvbiIsImluaXRVSSIsInNob3ciLCJ0YWdOYW1lIiwibWF0Y2giLCJrZXlDb2RlIiwibG9hZFJhbmdlIiwiY2xvbmVSYW5nZSIsInJhbmdlU3RhcnQiLCJyYW5nZUVuZCIsImxvYWRJbWFnZXMiLCJpbWFnZXNTY29wZSIsImltYWdlIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZVNyY1NldCIsImltYWdlU2l6ZXMiLCJpbWFnZVRvTG9hZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJzbGljZSIsInByZXZTbGlkZSIsIm5leHRTbGlkZSIsInByb2dyZXNzaXZlTGF6eUxvYWQiLCJuZXh0Iiwic2xpY2tOZXh0IiwicGF1c2UiLCJzbGlja1BhdXNlIiwicGxheSIsInNsaWNrUGxheSIsInBvc3RTbGlkZSIsIiRjdXJyZW50U2xpZGUiLCJmb2N1cyIsInByZXYiLCJzbGlja1ByZXYiLCJ0cnlDb3VudCIsIiRpbWdzVG9Mb2FkIiwiaW5pdGlhbGl6aW5nIiwibGFzdFZpc2libGVJbmRleCIsImN1cnJlbnRCcmVha3BvaW50IiwibCIsInJlc3BvbnNpdmVTZXR0aW5ncyIsInR5cGUiLCJzcGxpY2UiLCJzb3J0IiwiY2xlYXJUaW1lb3V0Iiwid2luZG93RGVsYXkiLCJyZW1vdmVTbGlkZSIsInNsaWNrUmVtb3ZlIiwicmVtb3ZlQmVmb3JlIiwicmVtb3ZlQWxsIiwic2V0Q1NTIiwicG9zaXRpb24iLCJwb3NpdGlvblByb3BzIiwieCIsInkiLCJzZXREaW1lbnNpb25zIiwicGFkZGluZyIsIm9mZnNldCIsInNldEZhZGUiLCJyaWdodCIsInNldEhlaWdodCIsInNldE9wdGlvbiIsInNsaWNrU2V0T3B0aW9uIiwiaXRlbSIsInZhbHVlIiwiYXJndW1lbnRzIiwib3B0IiwiYm9keVN0eWxlIiwiYm9keSIsInN0eWxlIiwiV2Via2l0VHJhbnNpdGlvbiIsInVuZGVmaW5lZCIsIk1velRyYW5zaXRpb24iLCJtc1RyYW5zaXRpb24iLCJPVHJhbnNmb3JtIiwicGVyc3BlY3RpdmVQcm9wZXJ0eSIsIndlYmtpdFBlcnNwZWN0aXZlIiwiTW96VHJhbnNmb3JtIiwiTW96UGVyc3BlY3RpdmUiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRyYW5zZm9ybSIsImFsbFNsaWRlcyIsInJlbWFpbmRlciIsImV2ZW5Db2VmIiwiaW5maW5pdGVDb3VudCIsImNsb25lIiwidG9nZ2xlIiwidGFyZ2V0RWxlbWVudCIsInBhcmVudHMiLCJzeW5jIiwiYW5pbVNsaWRlIiwib2xkU2xpZGUiLCJzbGlkZUxlZnQiLCJuYXZUYXJnZXQiLCJoaWRlIiwic3dpcGVEaXJlY3Rpb24iLCJ4RGlzdCIsInlEaXN0IiwiciIsInN3aXBlQW5nbGUiLCJzdGFydFgiLCJjdXJYIiwic3RhcnRZIiwiY3VyWSIsImF0YW4yIiwicm91bmQiLCJQSSIsInN3aXBlRW5kIiwic3dpcGVMZW5ndGgiLCJlZGdlSGl0IiwibWluU3dpcGUiLCJmaW5nZXJDb3VudCIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwic3dpcGVTdGFydCIsInN3aXBlTW92ZSIsImVkZ2VXYXNIaXQiLCJjdXJMZWZ0IiwicG9zaXRpb25PZmZzZXQiLCJ2ZXJ0aWNhbFN3aXBlTGVuZ3RoIiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwic3FydCIsInBvdyIsInVuZmlsdGVyU2xpZGVzIiwic2xpY2tVbmZpbHRlciIsImZyb21CcmVha3BvaW50IiwiZm4iLCJhcmdzIiwiQXJyYXkiLCJyZXQiLCJhcHBseSIsInJlYWR5Iiwid3AiLCJjdXN0b21pemUiLCJzZWxlY3RpdmVSZWZyZXNoIiwiYmluZCIsInBsYWNlbWVudCIsInBhcnRpYWwiLCJ3aWRnZXRJZFBhcnRzIiwiaWRCYXNlIiwiY29udGFpbmVyIiwiZSIsIm1lbnVfYnV0dG9uIiwibWVudV9saW5rIiwibWVudV9pdGVtIiwic2libGluZ3MiLCJjbGljayJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7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biBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qXG4gICAgIF8gXyAgICAgIF8gICAgICAgX1xuIF9fX3wgKF8pIF9fX3wgfCBfXyAgKF8pX19fXG4vIF9ffCB8IHwvIF9ffCB8LyAvICB8IC8gX198XG5cXF9fIFxcIHwgfCAoX198ICAgPCBfIHwgXFxfXyBcXFxufF9fXy9ffF98XFxfX198X3xcXF8oXykvIHxfX18vXG4gICAgICAgICAgICAgICAgICAgfF9fL1xuXG4gVmVyc2lvbjogMS44LjFcbiAgQXV0aG9yOiBLZW4gV2hlZWxlclxuIFdlYnNpdGU6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pb1xuICAgIERvY3M6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGlja1xuICAgIFJlcG86IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2tcbiAgSXNzdWVzOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrL2lzc3Vlc1xuXG4gKi9cbi8qIGdsb2JhbCB3aW5kb3csIGRvY3VtZW50LCBkZWZpbmUsIGpRdWVyeSwgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgKi9cbjsoZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG5cbn0oZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgU2xpY2sgPSB3aW5kb3cuU2xpY2sgfHwge307XG5cbiAgICBTbGljayA9IChmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgaW5zdGFuY2VVaWQgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIFNsaWNrKGVsZW1lbnQsIHNldHRpbmdzKSB7XG5cbiAgICAgICAgICAgIHZhciBfID0gdGhpcywgZGF0YVNldHRpbmdzO1xuXG4gICAgICAgICAgICBfLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcHBlbmREb3RzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldlwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj5QcmV2aW91czwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHR5cGU9XCJidXR0b25cIj5OZXh0PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNTBweCcsXG4gICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICAgICAgICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24oc2xpZGVyLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAvPicpLnRleHQoaSArIDEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90c0NsYXNzOiAnc2xpY2stZG90cycsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgZWRnZUZyaWN0aW9uOiAwLjM1LFxuICAgICAgICAgICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25DaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRG90c0hvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNwb25kVG86ICd3aW5kb3cnLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IG51bGwsXG4gICAgICAgICAgICAgICAgcm93czogMSxcbiAgICAgICAgICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlOiAnJyxcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgICAgICAgICAgc3dpcGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0b3VjaE1vdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgdG91Y2hUaHJlc2hvbGQ6IDUsXG4gICAgICAgICAgICAgICAgdXNlQ1NTOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZVRyYW5zZm9ybTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMDBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIF8uaW5pdGlhbHMgPSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b1BsYXlUaW1lcjogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RGlyZWN0aW9uOiAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDEsXG4gICAgICAgICAgICAgICAgJGRvdHM6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdFdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RIZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbG9hZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgICRuZXh0QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgJHByZXZBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlQ291bnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICAkc2xpZGVUcmFjazogbnVsbCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzOiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIHN3aXBlTGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBzd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAkbGlzdDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3VjaE9iamVjdDoge30sXG4gICAgICAgICAgICAgICAgdHJhbnNmb3Jtc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVuc2xpY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMpO1xuXG4gICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMgPSBbXTtcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzID0gW107XG4gICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gZmFsc2U7XG4gICAgICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmhpZGRlbiA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgXy5wb3NpdGlvblByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBudWxsO1xuICAgICAgICAgICAgXy5yb3dDb3VudCA9IDE7XG4gICAgICAgICAgICBfLnNob3VsZENsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIF8uJHNsaWRlciA9ICQoZWxlbWVudCk7XG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gMDtcbiAgICAgICAgICAgIF8ud2luZG93VGltZXIgPSBudWxsO1xuXG4gICAgICAgICAgICBkYXRhU2V0dGluZ3MgPSAkKGVsZW1lbnQpLmRhdGEoJ3NsaWNrJykgfHwge307XG5cbiAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLmRlZmF1bHRzLCBzZXR0aW5ncywgZGF0YVNldHRpbmdzKTtcblxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuXG4gICAgICAgICAgICBfLm9yaWdpbmFsU2V0dGluZ3MgPSBfLm9wdGlvbnM7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQubW96SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ21vekhpZGRlbic7XG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ21venZpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQud2Via2l0SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ3dlYmtpdEhpZGRlbic7XG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmF1dG9QbGF5ID0gJC5wcm94eShfLmF1dG9QbGF5LCBfKTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlDbGVhciA9ICQucHJveHkoXy5hdXRvUGxheUNsZWFyLCBfKTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlJdGVyYXRvciA9ICQucHJveHkoXy5hdXRvUGxheUl0ZXJhdG9yLCBfKTtcbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUgPSAkLnByb3h5KF8uY2hhbmdlU2xpZGUsIF8pO1xuICAgICAgICAgICAgXy5jbGlja0hhbmRsZXIgPSAkLnByb3h5KF8uY2xpY2tIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uc2VsZWN0SGFuZGxlciA9ICQucHJveHkoXy5zZWxlY3RIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uc2V0UG9zaXRpb24gPSAkLnByb3h5KF8uc2V0UG9zaXRpb24sIF8pO1xuICAgICAgICAgICAgXy5zd2lwZUhhbmRsZXIgPSAkLnByb3h5KF8uc3dpcGVIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uZHJhZ0hhbmRsZXIgPSAkLnByb3h5KF8uZHJhZ0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5rZXlIYW5kbGVyID0gJC5wcm94eShfLmtleUhhbmRsZXIsIF8pO1xuXG4gICAgICAgICAgICBfLmluc3RhbmNlVWlkID0gaW5zdGFuY2VVaWQrKztcblxuICAgICAgICAgICAgLy8gQSBzaW1wbGUgd2F5IHRvIGNoZWNrIGZvciBIVE1MIHN0cmluZ3NcbiAgICAgICAgICAgIC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uIChtdXN0IHN0YXJ0IHdpdGggPClcbiAgICAgICAgICAgIC8vIEV4dHJhY3RlZCBmcm9tIGpRdWVyeSB2MS4xMSBzb3VyY2VcbiAgICAgICAgICAgIF8uaHRtbEV4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSopJC87XG5cblxuICAgICAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG4gICAgICAgICAgICBfLmluaXQodHJ1ZSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTbGljaztcblxuICAgIH0oKSk7XG5cbiAgICBTbGljay5wcm90b3R5cGUuYWN0aXZhdGVBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWFjdGl2ZScpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ2ZhbHNlJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYWRkU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tBZGQgPSBmdW5jdGlvbihtYXJrdXAsIGluZGV4LCBhZGRCZWZvcmUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgYWRkQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCAwIHx8IChpbmRleCA+PSBfLnNsaWRlQ291bnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIF8uJHNsaWRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFkZEJlZm9yZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRCZWZvcmUoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRBZnRlcihfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhZGRCZWZvcmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXRIZWlnaHRcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVTbGlkZSA9IGZ1bmN0aW9uKHRhcmdldExlZnQsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIGFuaW1Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IC10YXJnZXRMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudExlZnQgPSAtKF8uY3VycmVudExlZnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiBfLmN1cnJlbnRMZWZ0XG4gICAgICAgICAgICAgICAgfSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IF8ub3B0aW9ucy5zcGVlZCxcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBfLm9wdGlvbnMuZWFzaW5nLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbihub3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdyA9IE1hdGguY2VpbChub3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoMHB4LCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IE1hdGguY2VpbCh0YXJnZXRMZWZ0KTtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4LCAwcHgpJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoMHB4LCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdlRhcmdldCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5vcHRpb25zLmFzTmF2Rm9yO1xuXG4gICAgICAgIGlmICggYXNOYXZGb3IgJiYgYXNOYXZGb3IgIT09IG51bGwgKSB7XG4gICAgICAgICAgICBhc05hdkZvciA9ICQoYXNOYXZGb3IpLm5vdChfLiRzbGlkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFzTmF2Rm9yO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hc05hdkZvciA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLmdldE5hdlRhcmdldCgpO1xuXG4gICAgICAgIGlmICggYXNOYXZGb3IgIT09IG51bGwgJiYgdHlwZW9mIGFzTmF2Rm9yID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuc2xpY2soJ2dldFNsaWNrJyk7XG4gICAgICAgICAgICAgICAgaWYoIXRhcmdldC51bnNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNsaWRlSGFuZGxlcihpbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXBwbHlUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9IF8udHJhbnNmb3JtVHlwZSArICcgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJ29wYWNpdHkgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlUaW1lciA9IHNldEludGVydmFsKCBfLmF1dG9QbGF5SXRlcmF0b3IsIF8ub3B0aW9ucy5hdXRvcGxheVNwZWVkICk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlDbGVhciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5hdXRvUGxheVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlJdGVyYXRvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBpZiAoICFfLnBhdXNlZCAmJiAhXy5pbnRlcnJ1cHRlZCAmJiAhXy5mb2N1c3NlZCApIHtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMSAmJiAoIF8uY3VycmVudFNsaWRlICsgMSApID09PSAoIF8uc2xpZGVDb3VudCAtIDEgKSkge1xuICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIF8uZGlyZWN0aW9uID09PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIF8uY3VycmVudFNsaWRlIC0gMSA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZVRvICk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZEFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93ID0gJChfLm9wdGlvbnMucHJldkFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyA9ICQoXy5vcHRpb25zLm5leHRBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG5cbiAgICAgICAgICAgIGlmKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnByZXBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZCggXy4kbmV4dEFycm93IClcblxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGREb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgaSwgZG90O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgICAgIGRvdCA9ICQoJzx1bCAvPicpLmFkZENsYXNzKF8ub3B0aW9ucy5kb3RzQ2xhc3MpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IF8uZ2V0RG90Q291bnQoKTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgZG90LmFwcGVuZCgkKCc8bGkgLz4nKS5hcHBlbmQoXy5vcHRpb25zLmN1c3RvbVBhZ2luZy5jYWxsKHRoaXMsIF8sIGkpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJGRvdHMgPSBkb3QuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZERvdHMpO1xuXG4gICAgICAgICAgICBfLiRkb3RzLmZpbmQoJ2xpJykuZmlyc3QoKS5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZE91dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCBfLm9wdGlvbnMuc2xpZGUgKyAnOm5vdCguc2xpY2stY2xvbmVkKScpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KVxuICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnLCAkKGVsZW1lbnQpLmF0dHIoJ3N0eWxlJykgfHwgJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2sgPSAoXy5zbGlkZUNvdW50ID09PSAwKSA/XG4gICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykuYXBwZW5kVG8oXy4kc2xpZGVyKSA6XG4gICAgICAgICAgICBfLiRzbGlkZXMud3JhcEFsbCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLnBhcmVudCgpO1xuXG4gICAgICAgIF8uJGxpc3QgPSBfLiRzbGlkZVRyYWNrLndyYXAoXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInNsaWNrLWxpc3RcIi8+JykucGFyZW50KCk7XG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKCdvcGFjaXR5JywgMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlIHx8IF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlcikubm90KCdbc3JjXScpLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG5cbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuXG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG5cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5hZGRDbGFzcygnZHJhZ2dhYmxlJyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBhLCBiLCBjLCBuZXdTbGlkZXMsIG51bU9mU2xpZGVzLCBvcmlnaW5hbFNsaWRlcyxzbGlkZXNQZXJTZWN0aW9uO1xuXG4gICAgICAgIG5ld1NsaWRlcyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXIuY2hpbGRyZW4oKTtcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcblxuICAgICAgICAgICAgc2xpZGVzUGVyU2VjdGlvbiA9IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cgKiBfLm9wdGlvbnMucm93cztcbiAgICAgICAgICAgIG51bU9mU2xpZGVzID0gTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLmxlbmd0aCAvIHNsaWRlc1BlclNlY3Rpb25cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGZvcihhID0gMDsgYSA8IG51bU9mU2xpZGVzOyBhKyspe1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGZvcihiID0gMDsgYiA8IF8ub3B0aW9ucy5yb3dzOyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBmb3IoYyA9IDA7IGMgPCBfLm9wdGlvbnMuc2xpZGVzUGVyUm93OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAoYSAqIHNsaWRlc1BlclNlY3Rpb24gKyAoKGIgKiBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArIGMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzLmFwcGVuZENoaWxkKHNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG5ld1NsaWRlcyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNoaWxkcmVuKClcbiAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzooMTAwIC8gXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrUmVzcG9uc2l2ZSA9IGZ1bmN0aW9uKGluaXRpYWwsIGZvcmNlVXBkYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtwb2ludCwgdGFyZ2V0QnJlYWtwb2ludCwgcmVzcG9uZFRvV2lkdGgsIHRyaWdnZXJCcmVha3BvaW50ID0gZmFsc2U7XG4gICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IF8uJHNsaWRlci53aWR0aCgpO1xuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICBpZiAoXy5yZXNwb25kVG8gPT09ICd3aW5kb3cnKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnc2xpZGVyJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBzbGlkZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ21pbicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gTWF0aC5taW4od2luZG93V2lkdGgsIHNsaWRlcldpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnJlc3BvbnNpdmUgJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aCAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IG51bGw7XG5cbiAgICAgICAgICAgIGZvciAoYnJlYWtwb2ludCBpbiBfLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3JpZ2luYWxTZXR0aW5ncy5tb2JpbGVGaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA8IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA+IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBfLmFjdGl2ZUJyZWFrcG9pbnQgfHwgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9IF8ub3JpZ2luYWxTZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG9ubHkgdHJpZ2dlciBicmVha3BvaW50cyBkdXJpbmcgYW4gYWN0dWFsIGJyZWFrLiBub3Qgb24gaW5pdGlhbGl6ZS5cbiAgICAgICAgICAgIGlmKCAhaW5pdGlhbCAmJiB0cmlnZ2VyQnJlYWtwb2ludCAhPT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JyZWFrcG9pbnQnLCBbXywgdHJpZ2dlckJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGFuZ2VTbGlkZSA9IGZ1bmN0aW9uKGV2ZW50LCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLFxuICAgICAgICAgICAgaW5kZXhPZmZzZXQsIHNsaWRlT2Zmc2V0LCB1bmV2ZW5PZmZzZXQ7XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgbGluaywgcHJldmVudCBkZWZhdWx0IGFjdGlvbi5cbiAgICAgICAgaWYoJHRhcmdldC5pcygnYScpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIG5vdCB0aGUgPGxpPiBlbGVtZW50IChpZTogYSBjaGlsZCksIGZpbmQgdGhlIDxsaT4uXG4gICAgICAgIGlmKCEkdGFyZ2V0LmlzKCdsaScpKSB7XG4gICAgICAgICAgICAkdGFyZ2V0ID0gJHRhcmdldC5jbG9zZXN0KCdsaScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdW5ldmVuT2Zmc2V0ID0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCk7XG4gICAgICAgIGluZGV4T2Zmc2V0ID0gdW5ldmVuT2Zmc2V0ID8gMCA6IChfLnNsaWRlQ291bnQgLSBfLmN1cnJlbnRTbGlkZSkgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLm1lc3NhZ2UpIHtcblxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgLSBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSArIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnaW5kZXgnOlxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50LmRhdGEuaW5kZXggPT09IDAgPyAwIDpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleCB8fCAkdGFyZ2V0LmluZGV4KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmNoZWNrTmF2aWdhYmxlKGluZGV4KSwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmNoaWxkcmVuKCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tOYXZpZ2FibGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG5hdmlnYWJsZXMsIHByZXZOYXZpZ2FibGU7XG5cbiAgICAgICAgbmF2aWdhYmxlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpO1xuICAgICAgICBwcmV2TmF2aWdhYmxlID0gMDtcbiAgICAgICAgaWYgKGluZGV4ID4gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gaW4gbmF2aWdhYmxlcykge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IG5hdmlnYWJsZXNbbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBwcmV2TmF2aWdhYmxlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldk5hdmlnYWJsZSA9IG5hdmlnYWJsZXNbbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyAmJiBfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcblxuICAgICAgICBfLiRsaXN0Lm9mZignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub2ZmKF8udmlzaWJpbGl0eUNoYW5nZSwgXy52aXNpYmlsaXR5KTtcblxuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub2ZmKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5vcmllbnRhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnJlc2l6ZSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vZmYoJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwU2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIG9yaWdpbmFsU2xpZGVzO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXMuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChvcmlnaW5hbFNsaWRlcyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uc2hvdWxkQ2xpY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24ocmVmcmVzaCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgXy5jbGVhblVwRXZlbnRzKCk7XG5cbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikuZGV0YWNoKCk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5wcmV2QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLm5leHRBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoXy4kc2xpZGVzKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKVxuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignc3R5bGUnLCAkKHRoaXMpLmRhdGEoJ29yaWdpbmFsU3R5bGluZycpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRsaXN0LmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYXBwZW5kKF8uJHNsaWRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBfLmNsZWFuVXBSb3dzKCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZXInKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgIF8udW5zbGlja2VkID0gdHJ1ZTtcblxuICAgICAgICBpZighcmVmcmVzaCkge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2Rlc3Ryb3knLCBbX10pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmRpc2FibGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XG5cbiAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICcnO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlID0gZnVuY3Rpb24oc2xpZGVJbmRleCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGVPdXQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrRmlsdGVyID0gZnVuY3Rpb24oZmlsdGVyKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChmaWx0ZXIgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuZmlsdGVyKGZpbHRlcikuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG5cbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mb2N1c0hhbmRsZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVyXG4gICAgICAgICAgICAub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJylcbiAgICAgICAgICAgIC5vbignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycsICcqJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgJHNmID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucGF1c2VPbkZvY3VzICkge1xuICAgICAgICAgICAgICAgICAgICBfLmZvY3Vzc2VkID0gJHNmLmlzKCc6Zm9jdXMnKTtcbiAgICAgICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRDdXJyZW50ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQ3VycmVudFNsaWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICByZXR1cm4gXy5jdXJyZW50U2xpZGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldERvdENvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciBicmVha1BvaW50ID0gMDtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB2YXIgcGFnZXJRdHkgPSAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IF8uc2xpZGVDb3VudDtcbiAgICAgICAgfSBlbHNlIGlmKCFfLm9wdGlvbnMuYXNOYXZGb3IpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gMSArIE1hdGguY2VpbCgoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFnZXJRdHkgLSAxO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQsXG4gICAgICAgICAgICB2ZXJ0aWNhbEhlaWdodCxcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIHRhcmdldFNsaWRlLFxuICAgICAgICAgICAgY29lZjtcblxuICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgdmVydGljYWxIZWlnaHQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoXy5zbGlkZVdpZHRoICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiAtMTtcbiAgICAgICAgICAgICAgICBjb2VmID0gLTFcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMS41O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKHZlcnRpY2FsSGVpZ2h0ICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiBjb2VmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID4gXy5zbGlkZUNvdW50ICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiBfLnNsaWRlV2lkdGg7XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiB2ZXJ0aWNhbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIC8gMikgLSAoKF8uc2xpZGVXaWR0aCAqIF8uc2xpZGVDb3VudCkgLyAyKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgLSBfLnNsaWRlV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogXy5zbGlkZVdpZHRoKSAqIC0xKSArIF8uc2xpZGVPZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogdmVydGljYWxIZWlnaHQpICogLTEpICsgdmVydGljYWxPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgKz0gKF8uJGxpc3Qud2lkdGgoKSAtIHRhcmdldFNsaWRlLm91dGVyV2lkdGgoKSkgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldExlZnQ7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE9wdGlvbiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dldE9wdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICByZXR1cm4gXy5vcHRpb25zW29wdGlvbl07XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdmlnYWJsZUluZGV4ZXMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha1BvaW50ID0gMCxcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwLFxuICAgICAgICAgICAgaW5kZXhlcyA9IFtdLFxuICAgICAgICAgICAgbWF4O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBjb3VudGVyID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQgKiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBtYXgpIHtcbiAgICAgICAgICAgIGluZGV4ZXMucHVzaChicmVha1BvaW50KTtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXhlcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpY2sgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpZGVDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCwgc3dpcGVkU2xpZGUsIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSA/IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIDogMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBzbGlkZSkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZS5vZmZzZXRMZWZ0IC0gY2VudGVyT2Zmc2V0ICsgKCQoc2xpZGUpLm91dGVyV2lkdGgoKSAvIDIpID4gKF8uc3dpcGVMZWZ0ICogLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlZFNsaWRlID0gc2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkID0gTWF0aC5hYnMoJChzd2lwZWRTbGlkZSkuYXR0cignZGF0YS1zbGljay1pbmRleCcpIC0gXy5jdXJyZW50U2xpZGUpIHx8IDE7XG5cbiAgICAgICAgICAgIHJldHVybiBzbGlkZXNUcmF2ZXJzZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ29UbyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dvVG8gPSBmdW5jdGlvbihzbGlkZSwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICBpbmRleDogcGFyc2VJbnQoc2xpZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGRvbnRBbmltYXRlKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGNyZWF0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICghJChfLiRzbGlkZXIpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG5cbiAgICAgICAgICAgICQoXy4kc2xpZGVyKS5hZGRDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcblxuICAgICAgICAgICAgXy5idWlsZFJvd3MoKTtcbiAgICAgICAgICAgIF8uYnVpbGRPdXQoKTtcbiAgICAgICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgICAgIF8uc3RhcnRMb2FkKCk7XG4gICAgICAgICAgICBfLmxvYWRTbGlkZXIoKTtcbiAgICAgICAgICAgIF8uaW5pdGlhbGl6ZUV2ZW50cygpO1xuICAgICAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUodHJ1ZSk7XG4gICAgICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3JlYXRpb24pIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdpbml0JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5pbml0QURBKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgICAgIG51bURvdEdyb3VwcyA9IE1hdGguY2VpbChfLnNsaWRlQ291bnQgLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxcbiAgICAgICAgICAgICAgICB0YWJDb250cm9sSW5kZXhlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpLmZpbHRlcihmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh2YWwgPj0gMCkgJiYgKHZhbCA8IF8uc2xpZGVDb3VudCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmFkZChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgXy4kc2xpZGVzLm5vdChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlQ29udHJvbEluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXMuaW5kZXhPZihpKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYnBhbmVsJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAtMVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlQ29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgIHZhciBhcmlhQnV0dG9uQ29udHJvbCA9ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBzbGlkZUNvbnRyb2xJbmRleFxuICAgICAgICAgICAgICAgICAgIGlmICgkKCcjJyArIGFyaWFCdXR0b25Db250cm9sKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiBhcmlhQnV0dG9uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRkb3RzLmF0dHIoJ3JvbGUnLCAndGFibGlzdCcpLmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZFNsaWRlSW5kZXggPSB0YWJDb250cm9sSW5kZXhlc1tpXTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykuZmlyc3QoKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAndGFiJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIGksXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBtYXBwZWRTbGlkZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCc6IChpICsgMSkgKyAnIG9mICcgKyBudW1Eb3RHcm91cHMsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KS5lcShfLmN1cnJlbnRTbGlkZSkuZmluZCgnYnV0dG9uJykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgICAgICB9KS5lbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGk9Xy5jdXJyZW50U2xpZGUsIG1heD1pK18ub3B0aW9ucy5zbGlkZXNUb1Nob3c7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPbkNoYW5nZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLmF0dHIoeyd0YWJpbmRleCc6ICcwJ30pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoaSkucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmFjdGl2YXRlQURBKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBcnJvd0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdERvdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKS5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4J1xuICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGRvdHMub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8ub3B0aW9ucy5wYXVzZU9uRG90c0hvdmVyID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0U2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucGF1c2VPbkhvdmVyICkge1xuXG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0aWFsaXplRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XG5cbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdzdGFydCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnbW92ZSdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbihfLnZpc2liaWxpdHlDaGFuZ2UsICQucHJveHkoXy52aXNpYmlsaXR5LCBfKSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub24oJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ub3JpZW50YXRpb25DaGFuZ2UsIF8pKTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLnJlc2l6ZSwgXykpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub24oJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xuXG4gICAgICAgICQod2luZG93KS5vbignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG4gICAgICAgICQoXy5zZXRQb3NpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRVSSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5zaG93KCk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRkb3RzLnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmtleUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgIC8vRG9udCBzbGlkZSBpZiB0aGUgY3Vyc29yIGlzIGluc2lkZSB0aGUgZm9ybSBmaWVsZHMgYW5kIGFycm93IGtleXMgYXJlIHByZXNzZWRcbiAgICAgICAgaWYoIWV2ZW50LnRhcmdldC50YWdOYW1lLm1hdGNoKCdURVhUQVJFQXxJTlBVVHxTRUxFQ1QnKSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3ICYmIF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF8ub3B0aW9ucy5ydGwgPT09IHRydWUgPyAnbmV4dCcgOiAgJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5ICYmIF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF8ub3B0aW9ucy5ydGwgPT09IHRydWUgPyAncHJldmlvdXMnIDogJ25leHQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGxvYWRSYW5nZSwgY2xvbmVSYW5nZSwgcmFuZ2VTdGFydCwgcmFuZ2VFbmQ7XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZEltYWdlcyhpbWFnZXNTY29wZSkge1xuXG4gICAgICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIGltYWdlc1Njb3BlKS5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGF6eScpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyY1NldCA9ICQodGhpcykuYXR0cignZGF0YS1zcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMCB9LCAxMDAsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU3JjU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc2l6ZXMnLCBpbWFnZVNpemVzICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgaW1hZ2VTb3VyY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCAyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFtfLCBpbWFnZSwgaW1hZ2VTb3VyY2VdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ3NsaWNrLWxhenlsb2FkLWVycm9yJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gXy5jdXJyZW50U2xpZGUgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IE1hdGgubWF4KDAsIF8uY3VycmVudFNsaWRlIC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gMiArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpICsgXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYW5nZVN0YXJ0ID0gXy5vcHRpb25zLmluZmluaXRlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIF8uY3VycmVudFNsaWRlIDogXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICByYW5nZUVuZCA9IE1hdGguY2VpbChyYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VTdGFydCA+IDApIHJhbmdlU3RhcnQtLTtcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VFbmQgPD0gXy5zbGlkZUNvdW50KSByYW5nZUVuZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZFJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpLnNsaWNlKHJhbmdlU3RhcnQsIHJhbmdlRW5kKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XG4gICAgICAgICAgICB2YXIgcHJldlNsaWRlID0gcmFuZ2VTdGFydCAtIDEsXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gcmFuZ2VFbmQsXG4gICAgICAgICAgICAgICAgJHNsaWRlcyA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2U2xpZGUgPCAwKSBwcmV2U2xpZGUgPSBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShwcmV2U2xpZGUpKTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEobmV4dFNsaWRlKSk7XG4gICAgICAgICAgICAgICAgcHJldlNsaWRlLS07XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkSW1hZ2VzKGxvYWRSYW5nZSk7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZSgwLCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKiAtMSk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxvYWRTbGlkZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5pbml0VUkoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAncHJvZ3Jlc3NpdmUnKSB7XG4gICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5uZXh0ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrTmV4dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm9yaWVudGF0aW9uQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGF1c2UgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQYXVzZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcbiAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wbGF5ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIF8ub3B0aW9ucy5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wb3N0U2xpZGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIV8udW5zbGlja2VkICkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWZ0ZXJDaGFuZ2UnLCBbXywgaW5kZXhdKTtcblxuICAgICAgICAgICAgXy5hbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmluaXRBREEoKTtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnRTbGlkZSA9ICQoXy4kc2xpZGVzLmdldChfLmN1cnJlbnRTbGlkZSkpO1xuICAgICAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlLmF0dHIoJ3RhYmluZGV4JywgMCkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUHJldiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJvZ3Jlc3NpdmVMYXp5TG9hZCA9IGZ1bmN0aW9uKCB0cnlDb3VudCApIHtcblxuICAgICAgICB0cnlDb3VudCA9IHRyeUNvdW50IHx8IDE7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJGltZ3NUb0xvYWQgPSAkKCAnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIgKSxcbiAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UsXG4gICAgICAgICAgICBpbWFnZVNyY1NldCxcbiAgICAgICAgICAgIGltYWdlU2l6ZXMsXG4gICAgICAgICAgICBpbWFnZVRvTG9hZDtcblxuICAgICAgICBpZiAoICRpbWdzVG9Mb2FkLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgaW1hZ2UgPSAkaW1nc1RvTG9hZC5maXJzdCgpO1xuICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSBpbWFnZS5hdHRyKCdkYXRhLWxhenknKTtcbiAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gaW1hZ2UuYXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gaW1hZ2UuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyk7XG4gICAgICAgICAgICBpbWFnZVRvTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoICdzcmMnLCBpbWFnZVNvdXJjZSApXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRyeUNvdW50IDwgMyApIHtcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogdHJ5IHRvIGxvYWQgdGhlIGltYWdlIDMgdGltZXMsXG4gICAgICAgICAgICAgICAgICAgICAqIGxlYXZlIGEgc2xpZ2h0IGRlbGF5IHNvIHdlIGRvbid0IGdldFxuICAgICAgICAgICAgICAgICAgICAgKiBzZXJ2ZXJzIGJsb2NraW5nIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoIHRyeUNvdW50ICsgMSApO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDAgKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWxsSW1hZ2VzTG9hZGVkJywgWyBfIF0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCBpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBjdXJyZW50U2xpZGUsIGxhc3RWaXNpYmxlSW5kZXg7XG5cbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG5cbiAgICAgICAgLy8gaW4gbm9uLWluZmluaXRlIHNsaWRlcnMsIHdlIGRvbid0IHdhbnQgdG8gZ28gcGFzdCB0aGVcbiAgICAgICAgLy8gbGFzdCB2aXNpYmxlIGluZGV4LlxuICAgICAgICBpZiggIV8ub3B0aW9ucy5pbmZpbml0ZSAmJiAoIF8uY3VycmVudFNsaWRlID4gbGFzdFZpc2libGVJbmRleCApKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGxhc3RWaXNpYmxlSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBsZXNzIHNsaWRlcyB0aGFuIHRvIHNob3csIGdvIHRvIHN0YXJ0LlxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcblxuICAgICAgICBfLmRlc3Ryb3kodHJ1ZSk7XG5cbiAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscywgeyBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSB9KTtcblxuICAgICAgICBfLmluaXQoKTtcblxuICAgICAgICBpZiggIWluaXRpYWxpemluZyApIHtcblxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudFNsaWRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVnaXN0ZXJCcmVha3BvaW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYnJlYWtwb2ludCwgY3VycmVudEJyZWFrcG9pbnQsIGwsXG4gICAgICAgICAgICByZXNwb25zaXZlU2V0dGluZ3MgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZSB8fCBudWxsO1xuXG4gICAgICAgIGlmICggJC50eXBlKHJlc3BvbnNpdmVTZXR0aW5ncykgPT09ICdhcnJheScgJiYgcmVzcG9uc2l2ZVNldHRpbmdzLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBfLm9wdGlvbnMucmVzcG9uZFRvIHx8ICd3aW5kb3cnO1xuXG4gICAgICAgICAgICBmb3IgKCBicmVha3BvaW50IGluIHJlc3BvbnNpdmVTZXR0aW5ncyApIHtcblxuICAgICAgICAgICAgICAgIGwgPSBfLmJyZWFrcG9pbnRzLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5icmVha3BvaW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYnJlYWtwb2ludHMgYW5kIGN1dCBvdXQgYW55IGV4aXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uZXMgd2l0aCB0aGUgc2FtZSBicmVha3BvaW50IG51bWJlciwgd2UgZG9uJ3Qgd2FudCBkdXBlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLmJyZWFrcG9pbnRzW2xdICYmIF8uYnJlYWtwb2ludHNbbF0gPT09IGN1cnJlbnRCcmVha3BvaW50ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc3BsaWNlKGwsMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnB1c2goY3VycmVudEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tjdXJyZW50QnJlYWtwb2ludF0gPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uc2V0dGluZ3M7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5icmVha3BvaW50cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCBfLm9wdGlvbnMubW9iaWxlRmlyc3QgKSA/IGEtYiA6IGItYTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVpbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKF8ub3B0aW9ucy5zbGlkZSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50ICYmIF8uY3VycmVudFNsaWRlICE9PSAwKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcblxuICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZShmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICBfLnBhdXNlZCA9ICFfLm9wdGlvbnMuYXV0b3BsYXk7XG4gICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigncmVJbml0JywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAhPT0gXy53aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF8ud2luZG93RGVsYXkpO1xuICAgICAgICAgICAgXy53aW5kb3dEZWxheSA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICAgICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7IF8uc2V0UG9zaXRpb24oKTsgfVxuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZW1vdmVTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1JlbW92ZSA9IGZ1bmN0aW9uKGluZGV4LCByZW1vdmVCZWZvcmUsIHJlbW92ZUFsbCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICByZW1vdmVCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gMCA6IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IC0taW5kZXggOiBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPCAxIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IF8uc2xpZGVDb3VudCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUFsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmVxKGluZGV4KS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRDU1MgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIHgsIHk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gLXBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHggPSBfLnBvc2l0aW9uUHJvcCA9PSAnbGVmdCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuICAgICAgICB5ID0gXy5wb3NpdGlvblByb3AgPT0gJ3RvcCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuXG4gICAgICAgIHBvc2l0aW9uUHJvcHNbXy5wb3NpdGlvblByb3BdID0gcG9zaXRpb247XG5cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJywgJyArIHkgKyAnKSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHggKyAnLCAnICsgeSArICcsIDBweCknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKCcwcHggJyArIF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kbGlzdC5oZWlnaHQoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nICsgJyAwcHgnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5saXN0V2lkdGggPSBfLiRsaXN0LndpZHRoKCk7XG4gICAgICAgIF8ubGlzdEhlaWdodCA9IF8uJGxpc3QuaGVpZ2h0KCk7XG5cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSAmJiBfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoKF8uc2xpZGVXaWR0aCAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKDUwMDAgKiBfLnNsaWRlQ291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoKTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbCgoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2Zmc2V0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCh0cnVlKSAtIF8uJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLndpZHRoKF8uc2xpZGVXaWR0aCAtIG9mZnNldCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEZhZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0O1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uc2xpZGVXaWR0aCAqIGluZGV4KSAqIC0xO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLmNzcyh7XG4gICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAxLFxuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuY3NzKCdoZWlnaHQnLCB0YXJnZXRIZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldE9wdGlvbiA9XG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWNrU2V0T3B0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjY2VwdHMgYXJndW1lbnRzIGluIGZvcm1hdCBvZjpcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2luZ2xlIG9wdGlvbidzIHZhbHVlOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzZXQgb2YgcmVzcG9uc2l2ZSBvcHRpb25zOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsICdyZXNwb25zaXZlJywgW3t9LCAuLi5dLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIHVwZGF0aW5nIG11bHRpcGxlIHZhbHVlcyBhdCBvbmNlIChub3QgcmVzcG9uc2l2ZSlcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCB7ICdvcHRpb24nOiB2YWx1ZSwgLi4uIH0sIHJlZnJlc2ggKVxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGwsIGl0ZW0sIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggPSBmYWxzZSwgdHlwZTtcblxuICAgICAgICBpZiggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ29iamVjdCcgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgdHlwZSA9ICdtdWx0aXBsZSc7XG5cbiAgICAgICAgfSBlbHNlIGlmICggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ3N0cmluZycgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICB2YWx1ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgICAgIGlmICggYXJndW1lbnRzWzBdID09PSAncmVzcG9uc2l2ZScgJiYgJC50eXBlKCBhcmd1bWVudHNbMV0gKSA9PT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAncmVzcG9uc2l2ZSc7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBhcmd1bWVudHNbMV0gIT09ICd1bmRlZmluZWQnICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdzaW5nbGUnO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ3NpbmdsZScgKSB7XG5cbiAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAnbXVsdGlwbGUnICkge1xuXG4gICAgICAgICAgICAkLmVhY2goIG9wdGlvbiAsIGZ1bmN0aW9uKCBvcHQsIHZhbCApIHtcblxuICAgICAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRdID0gdmFsO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdyZXNwb25zaXZlJyApIHtcblxuICAgICAgICAgICAgZm9yICggaXRlbSBpbiB2YWx1ZSApIHtcblxuICAgICAgICAgICAgICAgIGlmKCAkLnR5cGUoIF8ub3B0aW9ucy5yZXNwb25zaXZlICkgIT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgPSBbIHZhbHVlW2l0ZW1dIF07XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGwgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIHJlc3BvbnNpdmUgb2JqZWN0IGFuZCBzcGxpY2Ugb3V0IGR1cGxpY2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucmVzcG9uc2l2ZVtsXS5icmVha3BvaW50ID09PSB2YWx1ZVtpdGVtXS5icmVha3BvaW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUuc3BsaWNlKGwsMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5wdXNoKCB2YWx1ZVtpdGVtXSApO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggcmVmcmVzaCApIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldERpbWVuc2lvbnMoKTtcblxuICAgICAgICBfLnNldEhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2V0Q1NTKF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zZXRGYWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc2V0UG9zaXRpb24nLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG5cbiAgICAgICAgXy5wb3NpdGlvblByb3AgPSBfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgPyAndG9wJyA6ICdsZWZ0JztcblxuICAgICAgICBpZiAoXy5wb3NpdGlvblByb3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLldlYmtpdFRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLk1velRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLm1zVHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnVzZUNTUyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuZmFkZSApIHtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIF8ub3B0aW9ucy56SW5kZXggPT09ICdudW1iZXInICkge1xuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMuekluZGV4IDwgMyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gXy5kZWZhdWx0cy56SW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLk9UcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdPVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctby10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdPVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUuTW96VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnTW96VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbW96LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ01velRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLk1velBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLndlYmtpdFRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3dlYmtpdFRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLXdlYmtpdC10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd3ZWJraXRUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ21zVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbXMtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnbXNUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd0cmFuc2l0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBfLnRyYW5zZm9ybXNFbmFibGVkID0gXy5vcHRpb25zLnVzZVRyYW5zZm9ybSAmJiAoXy5hbmltVHlwZSAhPT0gbnVsbCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSk7XG4gICAgfTtcblxuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFNsaWRlQ2xhc3NlcyA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0LCBhbGxTbGlkZXMsIGluZGV4T2Zmc2V0LCByZW1haW5kZXI7XG5cbiAgICAgICAgYWxsU2xpZGVzID0gXy4kc2xpZGVyXG4gICAgICAgICAgICAuZmluZCgnLnNsaWNrLXNsaWRlJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWN1cnJlbnQnKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgdmFyIGV2ZW5Db2VmID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAlIDIgPT09IDAgPyAxIDogMDtcblxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBjZW50ZXJPZmZzZXQgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIDEpIC0gY2VudGVyT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4IC0gY2VudGVyT2Zmc2V0ICsgZXZlbkNvZWYsIGluZGV4ICsgY2VudGVyT2Zmc2V0ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSBjZW50ZXJPZmZzZXQgKyAxICsgZXZlbkNvZWYsIGluZGV4T2Zmc2V0ICsgY2VudGVyT2Zmc2V0ICsgMilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoYWxsU2xpZGVzLmxlbmd0aCAtIDEgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IF8uc2xpZGVDb3VudCAtIDEpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIHtcblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXgsIGluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxTbGlkZXMubGVuZ3RoIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleCA6IGluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICYmIChfLnNsaWRlQ291bnQgLSBpbmRleCkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIHJlbWFpbmRlciksIGluZGV4T2Zmc2V0ICsgcmVtYWluZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0LCBpbmRleE9mZnNldCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnb25kZW1hbmQnIHx8IF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgXy5sYXp5TG9hZCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXR1cEluZmluaXRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgaSwgc2xpZGVJbmRleCwgaW5maW5pdGVDb3VudDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8ub3B0aW9ucy5jZW50ZXJNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlICYmIF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBzbGlkZUluZGV4ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gXy5zbGlkZUNvdW50OyBpID4gKF8uc2xpZGVDb3VudCAtXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50KTsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZmluaXRlQ291bnQgICsgXy5zbGlkZUNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4ICsgXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignaWQnLCAnJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmludGVycnVwdCA9IGZ1bmN0aW9uKCB0b2dnbGUgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhdG9nZ2xlICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0b2dnbGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNlbGVjdEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9XG4gICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuaXMoJy5zbGljay1zbGlkZScpID9cbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkgOlxuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5wYXJlbnRzKCcuc2xpY2stc2xpZGUnKTtcblxuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSk7XG5cbiAgICAgICAgaWYgKCFpbmRleCkgaW5kZXggPSAwO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWRlSGFuZGxlciA9IGZ1bmN0aW9uKGluZGV4LCBzeW5jLCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciB0YXJnZXRTbGlkZSwgYW5pbVNsaWRlLCBvbGRTbGlkZSwgc2xpZGVMZWZ0LCB0YXJnZXRMZWZ0ID0gbnVsbCxcbiAgICAgICAgICAgIF8gPSB0aGlzLCBuYXZUYXJnZXQ7XG5cbiAgICAgICAgc3luYyA9IHN5bmMgfHwgZmFsc2U7XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlICYmIF8ub3B0aW9ucy53YWl0Rm9yQW5pbWF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlICYmIF8uY3VycmVudFNsaWRlID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFzTmF2Rm9yKGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFNsaWRlID0gaW5kZXg7XG4gICAgICAgIHRhcmdldExlZnQgPSBfLmdldExlZnQodGFyZ2V0U2xpZGUpO1xuICAgICAgICBzbGlkZUxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8uY3VycmVudExlZnQgPSBfLnN3aXBlTGVmdCA9PT0gbnVsbCA/IHNsaWRlTGVmdCA6IF8uc3dpcGVMZWZ0O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gXy5nZXREb3RDb3VudCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRTbGlkZSA8IDApIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgLSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50ICsgdGFyZ2V0U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2xpZGUgPj0gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGUgLSBfLnNsaWRlQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYmVmb3JlQ2hhbmdlJywgW18sIF8uY3VycmVudFNsaWRlLCBhbmltU2xpZGVdKTtcblxuICAgICAgICBvbGRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGFuaW1TbGlkZTtcblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXNOYXZGb3IgKSB7XG5cbiAgICAgICAgICAgIG5hdlRhcmdldCA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBuYXZUYXJnZXQuc2xpY2soJ2dldFNsaWNrJyk7XG5cbiAgICAgICAgICAgIGlmICggbmF2VGFyZ2V0LnNsaWRlQ291bnQgPD0gbmF2VGFyZ2V0Lm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgICAgIG5hdlRhcmdldC5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGVPdXQob2xkU2xpZGUpO1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGUoYW5pbVNsaWRlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUodGFyZ2V0TGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zdGFydExvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuaGlkZSgpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciB4RGlzdCwgeURpc3QsIHIsIHN3aXBlQW5nbGUsIF8gPSB0aGlzO1xuXG4gICAgICAgIHhEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFggLSBfLnRvdWNoT2JqZWN0LmN1clg7XG4gICAgICAgIHlEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFkgLSBfLnRvdWNoT2JqZWN0LmN1clk7XG4gICAgICAgIHIgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XG5cbiAgICAgICAgc3dpcGVBbmdsZSA9IE1hdGgucm91bmQociAqIDE4MCAvIE1hdGguUEkpO1xuICAgICAgICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHN3aXBlQW5nbGUgPSAzNjAgLSBNYXRoLmFicyhzd2lwZUFuZ2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSA0NSkgJiYgKHN3aXBlQW5nbGUgPj0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gMzYwKSAmJiAoc3dpcGVBbmdsZSA+PSAzMTUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDEzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMjI1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdyaWdodCcgOiAnbGVmdCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMzUpICYmIChzd2lwZUFuZ2xlIDw9IDEzNSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rvd24nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVDb3VudCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjtcblxuICAgICAgICBfLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIF8uc3dpcGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLnNjcm9sbGluZykge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgXy5zaG91bGRDbGljayA9ICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDEwICkgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmN1clggPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5lZGdlSGl0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2VkZ2UnLCBbXywgXy5zd2lwZURpcmVjdGlvbigpIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID49IF8udG91Y2hPYmplY3QubWluU3dpcGUgKSB7XG5cbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICAgICAgc3dpdGNoICggZGlyZWN0aW9uICkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggZGlyZWN0aW9uICE9ICd2ZXJ0aWNhbCcgKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVDb3VudCApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc3dpcGUnLCBbXywgZGlyZWN0aW9uIF0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAhPT0gXy50b3VjaE9iamVjdC5jdXJYICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIF8uY3VycmVudFNsaWRlICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoKF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpIHx8ICgnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQgJiYgXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSBmYWxzZSAmJiBldmVudC50eXBlLmluZGV4T2YoJ21vdXNlJykgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIDogMTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0V2lkdGggLyBfLm9wdGlvbnNcbiAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdEhlaWdodCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5hY3Rpb24pIHtcblxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVTdGFydChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVNb3ZlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlRW5kKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgZWRnZVdhc0hpdCA9IGZhbHNlLFxuICAgICAgICAgICAgY3VyTGVmdCwgc3dpcGVEaXJlY3Rpb24sIHN3aXBlTGVuZ3RoLCBwb3NpdGlvbk9mZnNldCwgdG91Y2hlcywgdmVydGljYWxTd2lwZUxlbmd0aDtcblxuICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkID8gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzIDogbnVsbDtcblxuICAgICAgICBpZiAoIV8uZHJhZ2dpbmcgfHwgXy5zY3JvbGxpbmcgfHwgdG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWCAtIF8udG91Y2hPYmplY3Quc3RhcnRYLCAyKSkpO1xuXG4gICAgICAgIHZlcnRpY2FsU3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWSAtIF8udG91Y2hPYmplY3Quc3RhcnRZLCAyKSkpO1xuXG4gICAgICAgIGlmICghXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyAmJiAhXy5zd2lwaW5nICYmIHZlcnRpY2FsU3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IHZlcnRpY2FsU3dpcGVMZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBzd2lwZURpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICAgICAgICBfLnN3aXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gMSA6IC0xKSAqIChfLnRvdWNoT2JqZWN0LmN1clggPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA/IDEgOiAtMSk7XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbk9mZnNldCA9IF8udG91Y2hPYmplY3QuY3VyWSA+IF8udG91Y2hPYmplY3Quc3RhcnRZID8gMSA6IC0xO1xuICAgICAgICB9XG5cblxuICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGg7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICgoXy5jdXJyZW50U2xpZGUgPT09IDAgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdyaWdodCcpIHx8IChfLmN1cnJlbnRTbGlkZSA+PSBfLmdldERvdENvdW50KCkgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdsZWZ0JykpIHtcbiAgICAgICAgICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggKiBfLm9wdGlvbnMuZWRnZUZyaWN0aW9uO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIChzd2lwZUxlbmd0aCAqIChfLiRsaXN0LmhlaWdodCgpIC8gXy5saXN0V2lkdGgpKSAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlIHx8IF8ub3B0aW9ucy50b3VjaE1vdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2V0Q1NTKF8uc3dpcGVMZWZ0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVTdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdG91Y2hlcztcblxuICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCAhPT0gMSB8fCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRYID0gXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRZID0gXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrVW5maWx0ZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uJHNsaWRlc0NhY2hlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG5cbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikucmVtb3ZlKCk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kcHJldkFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJG5leHRBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgJycpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bnNsaWNrID0gZnVuY3Rpb24oZnJvbUJyZWFrcG9pbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCd1bnNsaWNrJywgW18sIGZyb21CcmVha3BvaW50XSk7XG4gICAgICAgIF8uZGVzdHJveSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmXG4gICAgICAgICAgICBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmXG4gICAgICAgICAgICAhXy5vcHRpb25zLmluZmluaXRlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gMSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZURvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmVuZCgpO1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAuZXEoTWF0aC5mbG9vcihfLmN1cnJlbnRTbGlkZSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnZpc2liaWxpdHkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIGlmICggZG9jdW1lbnRbXy5oaWRkZW5dICkge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJC5mbi5zbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBvcHQgPSBhcmd1bWVudHNbMF0sXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGwgPSBfLmxlbmd0aCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICByZXQ7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBvcHQgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgX1tpXS5zbGljayA9IG5ldyBTbGljayhfW2ldLCBvcHQpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldCA9IF9baV0uc2xpY2tbb3B0XS5hcHBseShfW2ldLnNsaWNrLCBhcmdzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0ICE9ICd1bmRlZmluZWQnKSByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfO1xuICAgIH07XG5cbn0pKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmlnYXRpb24nO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbFwiO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAgICQoXCIuYy1wb3N0X19nYWxsZXJ5LCAuYy1wb3N0X19nYWxsZXJ5LWd1dGVuYmVyZyAud3AtYmxvY2stZ2FsbGVyeVwiKS5zbGljayh7XHJcbiAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgICB9KTtcclxuICBcclxuICAgICQoXCIubW9zdF9yZWNlbnRfd2lkZ2V0XCIpLnNsaWNrKCk7XHJcbiAgXHJcbiAgICBpZiAod3AuY3VzdG9taXplICYmIHdwLmN1c3RvbWl6ZS5zZWxlY3RpdmVSZWZyZXNoKSB7XHJcbiAgICAgIHdwLmN1c3RvbWl6ZS5zZWxlY3RpdmVSZWZyZXNoLmJpbmQoXHJcbiAgICAgICAgXCJwYXJ0aWFsLWNvbnRlbnQtcmVuZGVyZWRcIixcclxuICAgICAgICBwbGFjZW1lbnQgPT4ge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBwbGFjZW1lbnQucGFydGlhbC53aWRnZXRJZFBhcnRzICYmXHJcbiAgICAgICAgICAgIHBsYWNlbWVudC5wYXJ0aWFsLndpZGdldElkUGFydHMuaWRCYXNlID09PVxyXG4gICAgICAgICAgICAgIFwiX3RoZW1lbmFtZV9tc3RfcmVjZW50X3dpZGdldFwiXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcGxhY2VtZW50LmNvbnRhaW5lci5maW5kKFwiLm1vc3RfcmVjZW50X3dpZGdldFwiKS5zbGljaygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdtb3VzZWVudGVyJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcclxuICAgIGlmKCEkKGUuY3VycmVudFRhcmdldCkucGFyZW50cygnLnN1Yi1tZW51JykubGVuZ3RoKXtcclxuICAgICAgICAkKCcubWVudSA+IC5tZW51LWl0ZW0ub3BlbicpLmZpbmQoJz4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ29wZW4nKTtcclxufSkub24oJ21vdXNlbGVhdmUnLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbn0pXHJcblxyXG4vL0NvZGUgZm9yIG1ha2luZyBhcnJvdyBpY29uIG9wZW4gYW5kIGNsb3NlIHdoZW4gY2xpY2tlZFxyXG5cclxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdjbGljaycsICcubWVudSAubWVudS1idXR0b24nLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCBtZW51X2J1dHRvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgIGxldCBtZW51X2xpbmsgPSBtZW51X2J1dHRvbi5wYXJlbnQoKTtcclxuICAgIGxldCBtZW51X2l0ZW0gPSBtZW51X2xpbmsucGFyZW50KCk7XHJcblxyXG4gICAgaWYobWVudV9pdGVtLmhhc0NsYXNzKCdvcGVuJykpe1xyXG4gICAgICAgIG1lbnVfaXRlbS5hZGQobWVudV9pdGVtLmZpbmQoJ21lbnUtaXRlbS5vcGVuJykpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgbWVudV9saW5rLmFkZChtZW51X2l0ZW0uZmluZCgnYScpKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51X2l0ZW0uc2libGluZ3MoJy5vcGVuJykuZmluZCgnPiBhID4ubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpXHJcbiAgICAgICAgbWVudV9pdGVtLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgbWVudV9saW5rLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLmNsaWNrKChlKSA9PiB7XHJcbiAgICBpZigkKCcubWVudS1pdGVtLm9wZW4nKS5sZW5ndGgpe1xyXG4gICAgICAgICQoJy5tZW51ID4gLm1lbnUtaXRlbS5vcGVuID4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcbn0pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==