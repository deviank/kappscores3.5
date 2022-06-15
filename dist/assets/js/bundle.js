/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

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

/***/ "./src/assets/js/components/navigation.js":
/*!************************************************!*\
  !*** ./src/assets/js/components/navigation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/***/ (() => {

console.log(78779789);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./src/assets/js/bundle.js ***!
  \*********************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9rYXBwc2NvcmVzLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmpzIiwid2VicGFjazovL2thcHBzY29yZXMvLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9rYXBwc2NvcmVzLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9rYXBwc2NvcmVzL2V4dGVybmFsIHZhciBcImpRdWVyeVwiIiwid2VicGFjazovL2thcHBzY29yZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2FwcHNjb3Jlcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rYXBwc2NvcmVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYXBwc2NvcmVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2FwcHNjb3Jlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2thcHBzY29yZXMvLi9zcmMvYXNzZXRzL2pzL2J1bmRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgICBfIF8gICAgICBfICAgICAgIF9cbiBfX198IChfKSBfX198IHwgX18gIChfKV9fX1xuLyBfX3wgfCB8LyBfX3wgfC8gLyAgfCAvIF9ffFxuXFxfXyBcXCB8IHwgKF9ffCAgIDwgXyB8IFxcX18gXFxcbnxfX18vX3xffFxcX19ffF98XFxfKF8pLyB8X19fL1xuICAgICAgICAgICAgICAgICAgIHxfXy9cblxuIFZlcnNpb246IDEuOC4xXG4gIEF1dGhvcjogS2VuIFdoZWVsZXJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cbiAgICBEb2NzOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2tcbiAgICBSZXBvOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcblxuICovXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZGVmaW5lLCBqUXVlcnksIHNldEludGVydmFsLCBjbGVhckludGVydmFsICovXG47KGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxuXG59KGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIFNsaWNrID0gd2luZG93LlNsaWNrIHx8IHt9O1xuXG4gICAgU2xpY2sgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGluc3RhbmNlVWlkID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBTbGljayhlbGVtZW50LCBzZXR0aW5ncykge1xuXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGRhdGFTZXR0aW5ncztcblxuICAgICAgICAgICAgXy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgLz4nKS50ZXh0KGkgKyAxKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIGVkZ2VGcmljdGlvbjogMC4zNSxcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnd2luZG93JyxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBudWxsLFxuICAgICAgICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZTogJycsXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvdWNoVGhyZXNob2xkOiA1LFxuICAgICAgICAgICAgICAgIHVzZUNTUzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBfLmluaXRpYWxzID0ge1xuICAgICAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9QbGF5VGltZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbjogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50TGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgICAgICRkb3RzOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0SGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgICAgIGxvYWRJbmRleDogMCxcbiAgICAgICAgICAgICAgICAkbmV4dEFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZUNvdW50OiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlVHJhY2s6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlczogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJGxpc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgdG91Y2hPYmplY3Q6IHt9LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1bnNsaWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzKTtcblxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5ncyA9IFtdO1xuICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5oaWRkZW4gPSAnaGlkZGVuJztcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIF8ucG9zaXRpb25Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gbnVsbDtcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xuICAgICAgICAgICAgXy5zaG91bGRDbGljayA9IHRydWU7XG4gICAgICAgICAgICBfLiRzbGlkZXIgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9IDA7XG4gICAgICAgICAgICBfLndpbmRvd1RpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgZGF0YVNldHRpbmdzID0gJChlbGVtZW50KS5kYXRhKCdzbGljaycpIHx8IHt9O1xuXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcblxuICAgICAgICAgICAgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICdtb3pIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5hdXRvUGxheSA9ICQucHJveHkoXy5hdXRvUGxheSwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5SXRlcmF0b3IgPSAkLnByb3h5KF8uYXV0b1BsYXlJdGVyYXRvciwgXyk7XG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlID0gJC5wcm94eShfLmNoYW5nZVNsaWRlLCBfKTtcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNlbGVjdEhhbmRsZXIgPSAkLnByb3h5KF8uc2VsZWN0SGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uID0gJC5wcm94eShfLnNldFBvc2l0aW9uLCBfKTtcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmRyYWdIYW5kbGVyID0gJC5wcm94eShfLmRyYWdIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8ua2V5SGFuZGxlciA9ICQucHJveHkoXy5rZXlIYW5kbGVyLCBfKTtcblxuICAgICAgICAgICAgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7XG5cbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG4gICAgICAgICAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAobXVzdCBzdGFydCB3aXRoIDwpXG4gICAgICAgICAgICAvLyBFeHRyYWN0ZWQgZnJvbSBqUXVlcnkgdjEuMTEgc291cmNlXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xuXG5cbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuICAgICAgICAgICAgXy5pbml0KHRydWUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xpY2s7XG5cbiAgICB9KCkpO1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFkZFNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQWRkID0gZnVuY3Rpb24obWFya3VwLCBpbmRleCwgYWRkQmVmb3JlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGFkZEJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0XG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBhbmltUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAtdGFyZ2V0TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gLShfLmN1cnJlbnRMZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogXy5jdXJyZW50TGVmdFxuICAgICAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfLm9wdGlvbnMuc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3cgPSBNYXRoLmNlaWwobm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKDBweCwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBNYXRoLmNlaWwodGFyZ2V0TGVmdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHRhcmdldExlZnQgKyAncHgsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZUYXJnZXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8ub3B0aW9ucy5hc05hdkZvcjtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsICkge1xuICAgICAgICAgICAgYXNOYXZGb3IgPSAkKGFzTmF2Rm9yKS5ub3QoXy4kc2xpZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc05hdkZvcjtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICE9PSBudWxsICYmIHR5cGVvZiBhc05hdkZvciA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLnNsaWNrKCdnZXRTbGljaycpO1xuICAgICAgICAgICAgICAgIGlmKCF0YXJnZXQudW5zbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBfLnRyYW5zZm9ybVR5cGUgKyAnICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgaWYgKCAhXy5wYXVzZWQgJiYgIV8uaW50ZXJydXB0ZWQgJiYgIV8uZm9jdXNzZWQgKSB7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBfLmN1cnJlbnRTbGlkZSAtIDEgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVUbyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyA9ICQoXy5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgPSAkKF8ub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuXG4gICAgICAgICAgICBpZiggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5wcmVwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGQoIF8uJG5leHRBcnJvdyApXG5cbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIGRvdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBfLmdldERvdENvdW50KCk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcblxuICAgICAgICAgICAgXy4kZG90cy5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRPdXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbiggXy5vcHRpb25zLnNsaWRlICsgJzpub3QoLnNsaWNrLWNsb25lZCknKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleClcbiAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJywgJChlbGVtZW50KS5hdHRyKCdzdHlsZScpIHx8ICcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1zbGlkZXInKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrID0gKF8uc2xpZGVDb3VudCA9PT0gMCkgP1xuICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLmFwcGVuZFRvKF8uJHNsaWRlcikgOlxuICAgICAgICAgICAgXy4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKTtcblxuICAgICAgICBfLiRsaXN0ID0gXy4kc2xpZGVUcmFjay53cmFwKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpO1xuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIpLm5vdCgnW3NyY10nKS5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuXG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcblxuICAgICAgICBfLmJ1aWxkRG90cygpO1xuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuXG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3QuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYSwgYiwgYywgbmV3U2xpZGVzLCBudW1PZlNsaWRlcywgb3JpZ2luYWxTbGlkZXMsc2xpZGVzUGVyU2VjdGlvbjtcblxuICAgICAgICBuZXdTbGlkZXMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVyLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG5cbiAgICAgICAgICAgIHNsaWRlc1BlclNlY3Rpb24gPSBfLm9wdGlvbnMuc2xpZGVzUGVyUm93ICogXy5vcHRpb25zLnJvd3M7XG4gICAgICAgICAgICBudW1PZlNsaWRlcyA9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5sZW5ndGggLyBzbGlkZXNQZXJTZWN0aW9uXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb3IoYSA9IDA7IGEgPCBudW1PZlNsaWRlczsgYSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb3IoYiA9IDA7IGIgPCBfLm9wdGlvbnMucm93czsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGMgPSAwOyBjIDwgXy5vcHRpb25zLnNsaWRlc1BlclJvdzsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKGEgKiBzbGlkZXNQZXJTZWN0aW9uICsgKChiICogXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyBjKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NsaWRlcy5hcHBlbmRDaGlsZChzbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChuZXdTbGlkZXMpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6KDEwMCAvIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgJyUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmUgPSBmdW5jdGlvbihpbml0aWFsLCBmb3JjZVVwZGF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnQsIHRhcmdldEJyZWFrcG9pbnQsIHJlc3BvbmRUb1dpZHRoLCB0cmlnZ2VyQnJlYWtwb2ludCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2xpZGVyV2lkdGggPSBfLiRzbGlkZXIud2lkdGgoKTtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKF8ucmVzcG9uZFRvID09PSAnd2luZG93Jykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gc2xpZGVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdtaW4nKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IE1hdGgubWluKHdpbmRvd1dpZHRoLCBzbGlkZXJXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5yZXNwb25zaXZlICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGggJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBmb3IgKGJyZWFrcG9pbnQgaW4gXy5icmVha3BvaW50cykge1xuICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9yaWdpbmFsU2V0dGluZ3MubW9iaWxlRmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPCBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPiBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gXy5hY3RpdmVCcmVha3BvaW50IHx8IGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSBfLm9yaWdpbmFsU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvbmx5IHRyaWdnZXIgYnJlYWtwb2ludHMgZHVyaW5nIGFuIGFjdHVhbCBicmVhay4gbm90IG9uIGluaXRpYWxpemUuXG4gICAgICAgICAgICBpZiggIWluaXRpYWwgJiYgdHJpZ2dlckJyZWFrcG9pbnQgIT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdicmVha3BvaW50JywgW18sIHRyaWdnZXJCcmVha3BvaW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hhbmdlU2xpZGUgPSBmdW5jdGlvbihldmVudCwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgICAgIGluZGV4T2Zmc2V0LCBzbGlkZU9mZnNldCwgdW5ldmVuT2Zmc2V0O1xuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGxpbmssIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uXG4gICAgICAgIGlmKCR0YXJnZXQuaXMoJ2EnKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBub3QgdGhlIDxsaT4gZWxlbWVudCAoaWU6IGEgY2hpbGQpLCBmaW5kIHRoZSA8bGk+LlxuICAgICAgICBpZighJHRhcmdldC5pcygnbGknKSkge1xuICAgICAgICAgICAgJHRhcmdldCA9ICR0YXJnZXQuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVuZXZlbk9mZnNldCA9IChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApO1xuICAgICAgICBpbmRleE9mZnNldCA9IHVuZXZlbk9mZnNldCA/IDAgOiAoXy5zbGlkZUNvdW50IC0gXy5jdXJyZW50U2xpZGUpICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5tZXNzYWdlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgKyBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2luZGV4JzpcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kYXRhLmluZGV4ID09PSAwID8gMCA6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXggfHwgJHRhcmdldC5pbmRleCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jaGVja05hdmlnYWJsZShpbmRleCksIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5jaGlsZHJlbigpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrTmF2aWdhYmxlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBuYXZpZ2FibGVzLCBwcmV2TmF2aWdhYmxlO1xuXG4gICAgICAgIG5hdmlnYWJsZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKTtcbiAgICAgICAgcHJldk5hdmlnYWJsZSA9IDA7XG4gICAgICAgIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgaW5kZXggPSBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBuYXZpZ2FibGVzW25dKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gcHJldk5hdmlnYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZXZOYXZpZ2FibGUgPSBuYXZpZ2FibGVzW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgJiYgXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihfLnZpc2liaWxpdHlDaGFuZ2UsIF8udmlzaWJpbGl0eSk7XG5cbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ub3JpZW50YXRpb25DaGFuZ2UpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5yZXNpemUpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub2ZmKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBvcmlnaW5hbFNsaWRlcztcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQob3JpZ2luYWxTbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLnNob3VsZENsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlZnJlc2gpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgIF8uY2xlYW5VcEV2ZW50cygpO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLmRldGFjaCgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMucHJldkFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5uZXh0QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKF8uJHNsaWRlcykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFwcGVuZChfLiRzbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5jbGVhblVwUm93cygpO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGVyJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICBfLnVuc2xpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgaWYoIXJlZnJlc2gpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdkZXN0cm95JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlT3V0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0ZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmZpbHRlcihmaWx0ZXIpLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXG4gICAgICAgICAgICAub24oJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snLCAnKicsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyICRzZiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb2N1c3NlZCA9ICRzZi5pcygnOmZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXREb3RDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgYnJlYWtQb2ludCA9IDA7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgdmFyIHBhZ2VyUXR5ID0gMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSBpZighXy5vcHRpb25zLmFzTmF2Rm9yKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgdmVydGljYWxIZWlnaHQsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgICAgICAgICB0YXJnZXRTbGlkZSxcbiAgICAgICAgICAgIGNvZWY7XG5cbiAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XG4gICAgICAgICAgICAgICAgY29lZiA9IC0xXG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTEuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogY29lZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA+IF8uc2xpZGVDb3VudCAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogXy5zbGlkZVdpZHRoO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogdmVydGljYWxIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSAvIDIpIC0gKChfLnNsaWRlV2lkdGggKiBfLnNsaWRlQ291bnQpIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIC0gXy5zbGlkZVdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIF8uc2xpZGVXaWR0aCkgKiAtMSkgKyBfLnNsaWRlT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xKSArIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ICs9IChfLiRsaXN0LndpZHRoKCkgLSB0YXJnZXRTbGlkZS5vdXRlcldpZHRoKCkpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRMZWZ0O1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIF8ub3B0aW9uc1tvcHRpb25dO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IDAsXG4gICAgICAgICAgICBjb3VudGVyID0gMCxcbiAgICAgICAgICAgIGluZGV4ZXMgPSBbXSxcbiAgICAgICAgICAgIG1heDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgY291bnRlciA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50ICogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XG4gICAgICAgICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQsIHN3aXBlZFNsaWRlLCBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArICgkKHNsaWRlKS5vdXRlcldpZHRoKCkgLyAyKSA+IChfLnN3aXBlTGVmdCAqIC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZWRTbGlkZSA9IHNsaWRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSAtIF8uY3VycmVudFNsaWRlKSB8fCAxO1xuXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdvVG8gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHb1RvID0gZnVuY3Rpb24oc2xpZGUsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG5cbiAgICAgICAgICAgIF8uYnVpbGRSb3dzKCk7XG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XG4gICAgICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgICAgICBfLnN0YXJ0TG9hZCgpO1xuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XG4gICAgICAgICAgICBfLmluaXRpYWxpemVFdmVudHMoKTtcbiAgICAgICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKHRydWUpO1xuICAgICAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignaW5pdCcsIFtfXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICAgICBudW1Eb3RHcm91cHMgPSBNYXRoLmNlaWwoXy5zbGlkZUNvdW50IC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyksXG4gICAgICAgICAgICAgICAgdGFiQ29udHJvbEluZGV4ZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsID49IDApICYmICh2YWwgPCBfLnNsaWRlQ291bnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5ub3QoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZUNvbnRyb2xJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzLmluZGV4T2YoaSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWJwYW5lbCcsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogLTFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChzbGlkZUNvbnRyb2xJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICB2YXIgYXJpYUJ1dHRvbkNvbnRyb2wgPSAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgc2xpZGVDb250cm9sSW5kZXhcbiAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyBhcmlhQnV0dG9uQ29udHJvbCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogYXJpYUJ1dHRvbkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXBwZWRTbGlkZUluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXNbaV07XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLmZpcnN0KCkuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYicsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1jb250cm9scyc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgbWFwcGVkU2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAoaSArIDEpICsgJyBvZiAnICsgbnVtRG90R3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkuZXEoXy5jdXJyZW50U2xpZGUpLmZpbmQoJ2J1dHRvbicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICAgICAgfSkuZW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpPV8uY3VycmVudFNsaWRlLCBtYXg9aStfLm9wdGlvbnMuc2xpZGVzVG9TaG93OyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5hdHRyKHsndGFiaW5kZXgnOiAnMCd9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXREb3RFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cykub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCdcbiAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMucGF1c2VPbkRvdHNIb3ZlciA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnBhdXNlT25Ib3ZlciApIHtcblxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oXy52aXNpYmlsaXR5Q2hhbmdlLCAkLnByb3h5KF8udmlzaWJpbGl0eSwgXykpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5yZXNpemUsIF8pKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9uKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuICAgICAgICAkKF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0VUkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuc2hvdygpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXG4gICAgICAgIGlmKCFldmVudC50YXJnZXQudGFnTmFtZS5tYXRjaCgnVEVYVEFSRUF8SU5QVVR8U0VMRUNUJykpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ25leHQnIDogICdwcmV2aW91cydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ3ByZXZpb3VzJyA6ICduZXh0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubGF6eUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBsb2FkUmFuZ2UsIGNsb25lUmFuZ2UsIHJhbmdlU3RhcnQsIHJhbmdlRW5kO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcblxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBpbWFnZXNTY29wZSkuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU291cmNlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxhenknKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgMTAwLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltYWdlU291cmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbXywgaW1hZ2UsIGltYWdlU291cmNlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8uY3VycmVudFNsaWRlICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBNYXRoLm1heCgwLCBfLmN1cnJlbnRTbGlkZSAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSBNYXRoLmNlaWwocmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlRW5kIDw9IF8uc2xpZGVDb3VudCkgcmFuZ2VFbmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKS5zbGljZShyYW5nZVN0YXJ0LCByYW5nZUVuZCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgdmFyIHByZXZTbGlkZSA9IHJhbmdlU3RhcnQgLSAxLFxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHJhbmdlRW5kLFxuICAgICAgICAgICAgICAgICRzbGlkZXMgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlIDwgMCkgcHJldlNsaWRlID0gXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEocHJldlNsaWRlKSk7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpO1xuICAgICAgICAgICAgICAgIHByZXZTbGlkZS0tO1xuICAgICAgICAgICAgICAgIG5leHRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZEltYWdlcyhsb2FkUmFuZ2UpO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoMCwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZShfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICogLTEpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sb2FkU2xpZGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uaW5pdFVJKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3Byb2dyZXNzaXZlJykge1xuICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBhdXNlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGF1c2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG4gICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGxheSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICBfLm9wdGlvbnMuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucG9zdFNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FmdGVyQ2hhbmdlJywgW18sIGluZGV4XSk7XG5cbiAgICAgICAgICAgIF8uYW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkKF8uJHNsaWRlcy5nZXQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hdHRyKCd0YWJpbmRleCcsIDApLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XG5cbiAgICAgICAgdHJ5Q291bnQgPSB0cnlDb3VudCB8fCAxO1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICRpbWdzVG9Mb2FkID0gJCggJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyICksXG4gICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIGltYWdlU291cmNlLFxuICAgICAgICAgICAgaW1hZ2VTcmNTZXQsXG4gICAgICAgICAgICBpbWFnZVNpemVzLFxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQ7XG5cbiAgICAgICAgaWYgKCAkaW1nc1RvTG9hZC5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIGltYWdlID0gJGltZ3NUb0xvYWQuZmlyc3QoKTtcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gaW1hZ2UuYXR0cignZGF0YS1sYXp5Jyk7XG4gICAgICAgICAgICBpbWFnZVNyY1NldCA9IGltYWdlLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICBpbWFnZVNpemVzICA9IGltYWdlLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpO1xuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnc3JjJywgaW1hZ2VTb3VyY2UgKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxuICAgICAgICAgICAgICAgICAgICAgKiBsZWF2ZSBhIHNsaWdodCBkZWxheSBzbyB3ZSBkb24ndCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICogc2VydmVycyBibG9ja2luZyB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCB0cnlDb3VudCArIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgY3VycmVudFNsaWRlLCBsYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXG4gICAgICAgIC8vIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgICAgaWYoICFfLm9wdGlvbnMuaW5maW5pdGUgJiYgKCBfLmN1cnJlbnRTbGlkZSA+IGxhc3RWaXNpYmxlSW5kZXggKSkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcblxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG5cbiAgICAgICAgXy5kZXN0cm95KHRydWUpO1xuXG4gICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMsIHsgY3VycmVudFNsaWRlOiBjdXJyZW50U2xpZGUgfSk7XG5cbiAgICAgICAgXy5pbml0KCk7XG5cbiAgICAgICAgaWYoICFpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRTbGlkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGJyZWFrcG9pbnQsIGN1cnJlbnRCcmVha3BvaW50LCBsLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcblxuICAgICAgICBpZiAoICQudHlwZShyZXNwb25zaXZlU2V0dGluZ3MpID09PSAnYXJyYXknICYmIHJlc3BvbnNpdmVTZXR0aW5ncy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gXy5vcHRpb25zLnJlc3BvbmRUbyB8fCAnd2luZG93JztcblxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XG5cbiAgICAgICAgICAgICAgICBsID0gXy5icmVha3BvaW50cy5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uYnJlYWtwb2ludDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGJyZWFrcG9pbnRzIGFuZCBjdXQgb3V0IGFueSBleGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmVzIHdpdGggdGhlIHNhbWUgYnJlYWtwb2ludCBudW1iZXIsIHdlIGRvbid0IHdhbnQgZHVwZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5icmVha3BvaW50c1tsXSAmJiBfLmJyZWFrcG9pbnRzW2xdID09PSBjdXJyZW50QnJlYWtwb2ludCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNwbGljZShsLDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5wdXNoKGN1cnJlbnRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbY3VycmVudEJyZWFrcG9pbnRdID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLnNldHRpbmdzO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggXy5vcHRpb25zLm1vYmlsZUZpcnN0ICkgPyBhLWIgOiBiLWE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVUcmFja1xuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihfLm9wdGlvbnMuc2xpZGUpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG5cbiAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuICAgICAgICBfLmJ1aWxkRG90cygpO1xuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgXy5wYXVzZWQgPSAhXy5vcHRpb25zLmF1dG9wbGF5O1xuICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3JlSW5pdCcsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgIT09IF8ud2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfLndpbmRvd0RlbGF5KTtcbiAgICAgICAgICAgIF8ud2luZG93RGVsYXkgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgICAgICAgICBpZiggIV8udW5zbGlja2VkICkgeyBfLnNldFBvc2l0aW9uKCk7IH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVtb3ZlU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tSZW1vdmUgPSBmdW5jdGlvbihpbmRleCwgcmVtb3ZlQmVmb3JlLCByZW1vdmVBbGwpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcmVtb3ZlQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IDAgOiBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAtLWluZGV4IDogaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDwgMSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBfLnNsaWRlQ291bnQgLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmIChyZW1vdmVBbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5lcShpbmRleCkucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0Q1NTID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge30sXG4gICAgICAgICAgICB4LCB5O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IC1wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB4ID0gXy5wb3NpdGlvblByb3AgPT0gJ2xlZnQnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcbiAgICAgICAgeSA9IF8ucG9zaXRpb25Qcm9wID09ICd0b3AnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcblxuICAgICAgICBwb3NpdGlvblByb3BzW18ucG9zaXRpb25Qcm9wXSA9IHBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge307XG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICsgeCArICcsICcgKyB5ICsgJyknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywgJyArIHkgKyAnLCAwcHgpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICgnMHB4ICcgKyBfLm9wdGlvbnMuY2VudGVyUGFkZGluZylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJGxpc3QuaGVpZ2h0KF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IChfLm9wdGlvbnMuY2VudGVyUGFkZGluZyArICcgMHB4JylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8ubGlzdFdpZHRoID0gXy4kbGlzdC53aWR0aCgpO1xuICAgICAgICBfLmxpc3RIZWlnaHQgPSBfLiRsaXN0LmhlaWdodCgpO1xuXG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGggLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoTWF0aC5jZWlsKChfLnNsaWRlV2lkdGggKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aCg1MDAwICogXy5zbGlkZUNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmhlaWdodChNYXRoLmNlaWwoKF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVyV2lkdGgodHJ1ZSkgLSBfLiRzbGlkZXMuZmlyc3QoKS53aWR0aCgpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS53aWR0aChfLnNsaWRlV2lkdGggLSBvZmZzZXQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRGYWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLnNsaWRlV2lkdGggKiBpbmRleCkgKiAtMTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5jc3Moe1xuICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmNzcygnaGVpZ2h0JywgdGFyZ2V0SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRPcHRpb24gPVxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlja1NldE9wdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY2NlcHRzIGFyZ3VtZW50cyBpbiBmb3JtYXQgb2Y6XG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNpbmdsZSBvcHRpb24ncyB2YWx1ZTpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2V0IG9mIHJlc3BvbnNpdmUgb3B0aW9uczpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCAncmVzcG9uc2l2ZScsIFt7fSwgLi4uXSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciB1cGRhdGluZyBtdWx0aXBsZSB2YWx1ZXMgYXQgb25jZSAobm90IHJlc3BvbnNpdmUpXG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgeyAnb3B0aW9uJzogdmFsdWUsIC4uLiB9LCByZWZyZXNoIClcbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBsLCBpdGVtLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoID0gZmFsc2UsIHR5cGU7XG5cbiAgICAgICAgaWYoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdvYmplY3QnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHR5cGUgPSAnbXVsdGlwbGUnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdzdHJpbmcnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzJdO1xuXG4gICAgICAgICAgICBpZiAoIGFyZ3VtZW50c1swXSA9PT0gJ3Jlc3BvbnNpdmUnICYmICQudHlwZSggYXJndW1lbnRzWzFdICkgPT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3Jlc3BvbnNpdmUnO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgYXJndW1lbnRzWzFdICE9PSAndW5kZWZpbmVkJyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAnc2luZ2xlJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHR5cGUgPT09ICdzaW5nbGUnICkge1xuXG4gICAgICAgICAgICBfLm9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ211bHRpcGxlJyApIHtcblxuICAgICAgICAgICAgJC5lYWNoKCBvcHRpb24gLCBmdW5jdGlvbiggb3B0LCB2YWwgKSB7XG5cbiAgICAgICAgICAgICAgICBfLm9wdGlvbnNbb3B0XSA9IHZhbDtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAncmVzcG9uc2l2ZScgKSB7XG5cbiAgICAgICAgICAgIGZvciAoIGl0ZW0gaW4gdmFsdWUgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggJC50eXBlKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSApICE9PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlID0gWyB2YWx1ZVtpdGVtXSBdO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBsID0gXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSByZXNwb25zaXZlIG9iamVjdCBhbmQgc3BsaWNlIG91dCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnJlc3BvbnNpdmVbbF0uYnJlYWtwb2ludCA9PT0gdmFsdWVbaXRlbV0uYnJlYWtwb2ludCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShsLDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUucHVzaCggdmFsdWVbaXRlbV0gKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHJlZnJlc2ggKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXREaW1lbnNpb25zKCk7XG5cbiAgICAgICAgXy5zZXRIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNldENTUyhfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2V0RmFkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3NldFBvc2l0aW9uJywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG4gICAgICAgIF8ucG9zaXRpb25Qcm9wID0gXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlID8gJ3RvcCcgOiAnbGVmdCc7XG5cbiAgICAgICAgaWYgKF8ucG9zaXRpb25Qcm9wID09PSAndG9wJykge1xuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5Nb3pUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5tc1RyYW5zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy51c2VDU1MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmZhZGUgKSB7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBfLm9wdGlvbnMuekluZGV4ID09PSAnbnVtYmVyJyApIHtcbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnpJbmRleCA8IDMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IF8uZGVmYXVsdHMuekluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5PVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnT1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW8tdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnT1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ01velRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1vei10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdNb3pUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS5Nb3pQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd3ZWJraXRUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy13ZWJraXQtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnd2Via2l0VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdtc1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1zLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ21zVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAndHJhbnNpdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgXy50cmFuc2Zvcm1zRW5hYmxlZCA9IF8ub3B0aW9ucy51c2VUcmFuc2Zvcm0gJiYgKF8uYW5pbVR5cGUgIT09IG51bGwgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpO1xuICAgIH07XG5cblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCwgYWxsU2xpZGVzLCBpbmRleE9mZnNldCwgcmVtYWluZGVyO1xuXG4gICAgICAgIGFsbFNsaWRlcyA9IF8uJHNsaWRlclxuICAgICAgICAgICAgLmZpbmQoJy5zbGljay1zbGlkZScpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jdXJyZW50Jyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHZhciBldmVuQ29lZiA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJSAyID09PSAwID8gMSA6IDA7XG5cbiAgICAgICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY2VudGVyT2Zmc2V0ICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSAxKSAtIGNlbnRlck9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCArIGV2ZW5Db2VmLCBpbmRleCArIGNlbnRlck9mZnNldCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gY2VudGVyT2Zmc2V0ICsgMSArIGV2ZW5Db2VmLCBpbmRleE9mZnNldCArIGNlbnRlck9mZnNldCArIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKGFsbFNsaWRlcy5sZW5ndGggLSAxIC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBfLnNsaWRlQ291bnQgLSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAmJiAoXy5zbGlkZUNvdW50IC0gaW5kZXgpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSByZW1haW5kZXIpLCBpbmRleE9mZnNldCArIHJlbWFpbmRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ29uZGVtYW5kJyB8fCBfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIF8ubGF6eUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgc2xpZGVJbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50ICArIF8uc2xpZGVDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCArIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBmdW5jdGlvbiggdG9nZ2xlICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZWxlY3RIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPVxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpIDpcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50cygnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykpO1xuXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbihpbmRleCwgc3luYywgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXG4gICAgICAgICAgICBfID0gdGhpcywgbmF2VGFyZ2V0O1xuXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMud2FpdEZvckFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hc05hdkZvcihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRTbGlkZSA9IGluZGV4O1xuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IF8uZ2V0RG90Q291bnQoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0U2xpZGUgPCAwKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50IC0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFNsaWRlID49IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XG4gICAgICAgIH1cblxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JlZm9yZUNoYW5nZScsIFtfLCBfLmN1cnJlbnRTbGlkZSwgYW5pbVNsaWRlXSk7XG5cbiAgICAgICAgb2xkU2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBhbmltU2xpZGU7XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xuXG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBfLmdldE5hdlRhcmdldCgpO1xuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xuXG4gICAgICAgICAgICBpZiAoIG5hdlRhcmdldC5zbGlkZUNvdW50IDw9IG5hdlRhcmdldC5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlT3V0KG9sZFNsaWRlKTtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlKGFuaW1TbGlkZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcblxuICAgICAgICB4RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRYIC0gXy50b3VjaE9iamVjdC5jdXJYO1xuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gNDUpICYmIChzd2lwZUFuZ2xlID49IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDM2MCkgJiYgKHN3aXBlQW5nbGUgPj0gMzE1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAxMzUpICYmIChzd2lwZUFuZ2xlIDw9IDIyNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlQ291bnQsXG4gICAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBfLnN3aXBpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5zY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgIF8uc2hvdWxkQ2xpY2sgPSAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiAxMCApID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5jdXJYID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xuXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoIGRpcmVjdGlvbiApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIGRpcmVjdGlvbiAhPSAndmVydGljYWwnICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlQ291bnQgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBfLmN1cnJlbnRTbGlkZSApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gZmFsc2UgJiYgZXZlbnQudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXG4gICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RIZWlnaHQgLyBfLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEuYWN0aW9uKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZUVuZChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGVkZ2VXYXNIaXQgPSBmYWxzZSxcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXMsIHZlcnRpY2FsU3dpcGVMZW5ndGg7XG5cbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFfLmRyYWdnaW5nIHx8IF8uc2Nyb2xsaW5nIHx8IHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcblxuICAgICAgICB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clkgLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSwgMikpKTtcblxuICAgICAgICBpZiAoIV8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgJiYgIV8uc3dpcGluZyAmJiB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVEaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zd2lwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbk9mZnNldCA9IChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/IDEgOiAtMSkgKiAoXy50b3VjaE9iamVjdC5jdXJYID4gXy50b3VjaE9iamVjdC5zdGFydFggPyAxIDogLTEpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfLnRvdWNoT2JqZWN0LmN1clkgPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoKF8uY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnKSB8fCAoXy5jdXJyZW50U2xpZGUgPj0gXy5nZXREb3RDb3VudCgpICYmIHN3aXBlRGlyZWN0aW9uID09PSAnbGVmdCcpKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogXy5vcHRpb25zLmVkZ2VGcmljdGlvbjtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyAoc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSkgKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldENTUyhfLnN3aXBlTGVmdCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRvdWNoZXM7XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRzbGlkZXNDYWNoZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJHByZXZBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5zbGljayA9IGZ1bmN0aW9uKGZyb21CcmVha3BvaW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigndW5zbGljaycsIFtfLCBmcm9tQnJlYWtwb2ludF0pO1xuICAgICAgICBfLmRlc3Ryb3koKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxuICAgICAgICAgICAgIV8ub3B0aW9ucy5pbmZpbml0ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKTtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgLmVxKE1hdGguZmxvb3IoXy5jdXJyZW50U2xpZGUgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS52aXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50W18uaGlkZGVuXSApIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQuZm4uc2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgb3B0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBsID0gXy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcmV0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0ID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIF9baV0uc2xpY2sgPSBuZXcgU2xpY2soX1tpXSwgb3B0KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXQgPSBfW2ldLnNsaWNrW29wdF0uYXBwbHkoX1tpXS5zbGljaywgYXJncyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJldCAhPSAndW5kZWZpbmVkJykgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXztcbiAgICB9O1xuXG59KSk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdtb3VzZWVudGVyJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcclxuICAgIGlmKCEkKGUuY3VycmVudFRhcmdldCkucGFyZW50cygnLnN1Yi1tZW51JykubGVuZ3RoKXtcclxuICAgICAgICAkKCcubWVudSA+IC5tZW51LWl0ZW0ub3BlbicpLmZpbmQoJz4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ29wZW4nKTtcclxufSkub24oJ21vdXNlbGVhdmUnLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbn0pXHJcblxyXG4vL0NvZGUgZm9yIG1ha2luZyBhcnJvdyBpY29uIG9wZW4gYW5kIGNsb3NlIHdoZW4gY2xpY2tlZFxyXG5cclxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdjbGljaycsICcubWVudSAubWVudS1idXR0b24nLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCBtZW51X2J1dHRvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgIGxldCBtZW51X2xpbmsgPSBtZW51X2J1dHRvbi5wYXJlbnQoKTtcclxuICAgIGxldCBtZW51X2l0ZW0gPSBtZW51X2xpbmsucGFyZW50KCk7XHJcblxyXG4gICAgaWYobWVudV9pdGVtLmhhc0NsYXNzKCdvcGVuJykpe1xyXG4gICAgICAgIG1lbnVfaXRlbS5hZGQobWVudV9pdGVtLmZpbmQoJ21lbnUtaXRlbS5vcGVuJykpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgbWVudV9saW5rLmFkZChtZW51X2l0ZW0uZmluZCgnYScpKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51X2l0ZW0uc2libGluZ3MoJy5vcGVuJykuZmluZCgnPiBhID4ubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpXHJcbiAgICAgICAgbWVudV9pdGVtLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgbWVudV9saW5rLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLmNsaWNrKChlKSA9PiB7XHJcbiAgICBpZigkKCcubWVudS1pdGVtLm9wZW4nKS5sZW5ndGgpe1xyXG4gICAgICAgICQoJy5tZW51ID4gLm1lbnUtaXRlbS5vcGVuID4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcbn0pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwiY29uc29sZS5sb2coNzg3Nzk3ODkpIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3NsaWRlclwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbFwiO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAgICQoXCIuYy1wb3N0X19nYWxsZXJ5LCAuYy1wb3N0X19nYWxsZXJ5LWd1dGVuYmVyZyAud3AtYmxvY2stZ2FsbGVyeVwiKS5zbGljayh7XHJcbiAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgICB9KTtcclxuICBcclxuICAgICQoXCIubW9zdF9yZWNlbnRfd2lkZ2V0XCIpLnNsaWNrKCk7XHJcbiAgXHJcbiAgICBpZiAod3AuY3VzdG9taXplICYmIHdwLmN1c3RvbWl6ZS5zZWxlY3RpdmVSZWZyZXNoKSB7XHJcbiAgICAgIHdwLmN1c3RvbWl6ZS5zZWxlY3RpdmVSZWZyZXNoLmJpbmQoXHJcbiAgICAgICAgXCJwYXJ0aWFsLWNvbnRlbnQtcmVuZGVyZWRcIixcclxuICAgICAgICBwbGFjZW1lbnQgPT4ge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBwbGFjZW1lbnQucGFydGlhbC53aWRnZXRJZFBhcnRzICYmXHJcbiAgICAgICAgICAgIHBsYWNlbWVudC5wYXJ0aWFsLndpZGdldElkUGFydHMuaWRCYXNlID09PVxyXG4gICAgICAgICAgICAgIFwiX3RoZW1lbmFtZV9tc3RfcmVjZW50X3dpZGdldFwiXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcGxhY2VtZW50LmNvbnRhaW5lci5maW5kKFwiLm1vc3RfcmVjZW50X3dpZGdldFwiKS5zbGljaygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTsiXSwibmFtZXMiOlsiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwialF1ZXJ5IiwiJCIsIlNsaWNrIiwid2luZG93IiwiaW5zdGFuY2VVaWQiLCJlbGVtZW50Iiwic2V0dGluZ3MiLCJfIiwiZGF0YVNldHRpbmdzIiwiZGVmYXVsdHMiLCJhY2Nlc3NpYmlsaXR5IiwiYWRhcHRpdmVIZWlnaHQiLCJhcHBlbmRBcnJvd3MiLCJhcHBlbmREb3RzIiwiYXJyb3dzIiwiYXNOYXZGb3IiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImNzc0Vhc2UiLCJjdXN0b21QYWdpbmciLCJzbGlkZXIiLCJpIiwidGV4dCIsImRvdHMiLCJkb3RzQ2xhc3MiLCJkcmFnZ2FibGUiLCJlYXNpbmciLCJlZGdlRnJpY3Rpb24iLCJmYWRlIiwiZm9jdXNPblNlbGVjdCIsImZvY3VzT25DaGFuZ2UiLCJpbmZpbml0ZSIsImluaXRpYWxTbGlkZSIsImxhenlMb2FkIiwibW9iaWxlRmlyc3QiLCJwYXVzZU9uSG92ZXIiLCJwYXVzZU9uRm9jdXMiLCJwYXVzZU9uRG90c0hvdmVyIiwicmVzcG9uZFRvIiwicmVzcG9uc2l2ZSIsInJvd3MiLCJydGwiLCJzbGlkZSIsInNsaWRlc1BlclJvdyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwic3BlZWQiLCJzd2lwZSIsInN3aXBlVG9TbGlkZSIsInRvdWNoTW92ZSIsInRvdWNoVGhyZXNob2xkIiwidXNlQ1NTIiwidXNlVHJhbnNmb3JtIiwidmFyaWFibGVXaWR0aCIsInZlcnRpY2FsIiwidmVydGljYWxTd2lwaW5nIiwid2FpdEZvckFuaW1hdGUiLCJ6SW5kZXgiLCJpbml0aWFscyIsImFuaW1hdGluZyIsImRyYWdnaW5nIiwiYXV0b1BsYXlUaW1lciIsImN1cnJlbnREaXJlY3Rpb24iLCJjdXJyZW50TGVmdCIsImN1cnJlbnRTbGlkZSIsImRpcmVjdGlvbiIsIiRkb3RzIiwibGlzdFdpZHRoIiwibGlzdEhlaWdodCIsImxvYWRJbmRleCIsIiRuZXh0QXJyb3ciLCIkcHJldkFycm93Iiwic2Nyb2xsaW5nIiwic2xpZGVDb3VudCIsInNsaWRlV2lkdGgiLCIkc2xpZGVUcmFjayIsIiRzbGlkZXMiLCJzbGlkaW5nIiwic2xpZGVPZmZzZXQiLCJzd2lwZUxlZnQiLCJzd2lwaW5nIiwiJGxpc3QiLCJ0b3VjaE9iamVjdCIsInRyYW5zZm9ybXNFbmFibGVkIiwidW5zbGlja2VkIiwiZXh0ZW5kIiwiYWN0aXZlQnJlYWtwb2ludCIsImFuaW1UeXBlIiwiYW5pbVByb3AiLCJicmVha3BvaW50cyIsImJyZWFrcG9pbnRTZXR0aW5ncyIsImNzc1RyYW5zaXRpb25zIiwiZm9jdXNzZWQiLCJpbnRlcnJ1cHRlZCIsImhpZGRlbiIsInBhdXNlZCIsInBvc2l0aW9uUHJvcCIsInJvd0NvdW50Iiwic2hvdWxkQ2xpY2siLCIkc2xpZGVyIiwiJHNsaWRlc0NhY2hlIiwidHJhbnNmb3JtVHlwZSIsInRyYW5zaXRpb25UeXBlIiwidmlzaWJpbGl0eUNoYW5nZSIsIndpbmRvd1dpZHRoIiwid2luZG93VGltZXIiLCJkYXRhIiwib3B0aW9ucyIsIm9yaWdpbmFsU2V0dGluZ3MiLCJkb2N1bWVudCIsIm1vekhpZGRlbiIsIndlYmtpdEhpZGRlbiIsImF1dG9QbGF5IiwicHJveHkiLCJhdXRvUGxheUNsZWFyIiwiYXV0b1BsYXlJdGVyYXRvciIsImNoYW5nZVNsaWRlIiwiY2xpY2tIYW5kbGVyIiwic2VsZWN0SGFuZGxlciIsInNldFBvc2l0aW9uIiwic3dpcGVIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJrZXlIYW5kbGVyIiwiaHRtbEV4cHIiLCJyZWdpc3RlckJyZWFrcG9pbnRzIiwiaW5pdCIsInByb3RvdHlwZSIsImFjdGl2YXRlQURBIiwiZmluZCIsImF0dHIiLCJhZGRTbGlkZSIsInNsaWNrQWRkIiwibWFya3VwIiwiaW5kZXgiLCJhZGRCZWZvcmUiLCJ1bmxvYWQiLCJsZW5ndGgiLCJhcHBlbmRUbyIsImluc2VydEJlZm9yZSIsImVxIiwiaW5zZXJ0QWZ0ZXIiLCJwcmVwZW5kVG8iLCJjaGlsZHJlbiIsImRldGFjaCIsImFwcGVuZCIsImVhY2giLCJyZWluaXQiLCJhbmltYXRlSGVpZ2h0IiwidGFyZ2V0SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJhbmltYXRlIiwiaGVpZ2h0IiwiYW5pbWF0ZVNsaWRlIiwidGFyZ2V0TGVmdCIsImNhbGxiYWNrIiwiYW5pbVByb3BzIiwibGVmdCIsInRvcCIsImFuaW1TdGFydCIsImR1cmF0aW9uIiwic3RlcCIsIm5vdyIsIk1hdGgiLCJjZWlsIiwiY3NzIiwiY29tcGxldGUiLCJjYWxsIiwiYXBwbHlUcmFuc2l0aW9uIiwic2V0VGltZW91dCIsImRpc2FibGVUcmFuc2l0aW9uIiwiZ2V0TmF2VGFyZ2V0Iiwibm90IiwidGFyZ2V0Iiwic2xpY2siLCJzbGlkZUhhbmRsZXIiLCJ0cmFuc2l0aW9uIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2xpZGVUbyIsImJ1aWxkQXJyb3dzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUF0dHIiLCJ0ZXN0IiwiYWRkIiwiYnVpbGREb3RzIiwiZG90IiwiZ2V0RG90Q291bnQiLCJmaXJzdCIsImJ1aWxkT3V0Iiwid3JhcEFsbCIsInBhcmVudCIsIndyYXAiLCJzZXR1cEluZmluaXRlIiwidXBkYXRlRG90cyIsInNldFNsaWRlQ2xhc3NlcyIsImJ1aWxkUm93cyIsImEiLCJiIiwiYyIsIm5ld1NsaWRlcyIsIm51bU9mU2xpZGVzIiwib3JpZ2luYWxTbGlkZXMiLCJzbGlkZXNQZXJTZWN0aW9uIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyb3ciLCJnZXQiLCJhcHBlbmRDaGlsZCIsImVtcHR5IiwiY2hlY2tSZXNwb25zaXZlIiwiaW5pdGlhbCIsImZvcmNlVXBkYXRlIiwiYnJlYWtwb2ludCIsInRhcmdldEJyZWFrcG9pbnQiLCJyZXNwb25kVG9XaWR0aCIsInRyaWdnZXJCcmVha3BvaW50Iiwic2xpZGVyV2lkdGgiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJtaW4iLCJoYXNPd25Qcm9wZXJ0eSIsInVuc2xpY2siLCJyZWZyZXNoIiwidHJpZ2dlciIsImV2ZW50IiwiZG9udEFuaW1hdGUiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImluZGV4T2Zmc2V0IiwidW5ldmVuT2Zmc2V0IiwiaXMiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3Nlc3QiLCJtZXNzYWdlIiwiY2hlY2tOYXZpZ2FibGUiLCJuYXZpZ2FibGVzIiwicHJldk5hdmlnYWJsZSIsImdldE5hdmlnYWJsZUluZGV4ZXMiLCJuIiwiY2xlYW5VcEV2ZW50cyIsIm9mZiIsImludGVycnVwdCIsInZpc2liaWxpdHkiLCJjbGVhblVwU2xpZGVFdmVudHMiLCJvcmllbnRhdGlvbkNoYW5nZSIsInJlc2l6ZSIsImNsZWFuVXBSb3dzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVzdHJveSIsInJlbW92ZSIsImZhZGVTbGlkZSIsInNsaWRlSW5kZXgiLCJvcGFjaXR5IiwiZmFkZVNsaWRlT3V0IiwiZmlsdGVyU2xpZGVzIiwic2xpY2tGaWx0ZXIiLCJmaWx0ZXIiLCJmb2N1c0hhbmRsZXIiLCJvbiIsIiRzZiIsImdldEN1cnJlbnQiLCJzbGlja0N1cnJlbnRTbGlkZSIsImJyZWFrUG9pbnQiLCJjb3VudGVyIiwicGFnZXJRdHkiLCJnZXRMZWZ0IiwidmVydGljYWxIZWlnaHQiLCJ2ZXJ0aWNhbE9mZnNldCIsInRhcmdldFNsaWRlIiwiY29lZiIsImZsb29yIiwib2Zmc2V0TGVmdCIsIm91dGVyV2lkdGgiLCJnZXRPcHRpb24iLCJzbGlja0dldE9wdGlvbiIsIm9wdGlvbiIsImluZGV4ZXMiLCJtYXgiLCJwdXNoIiwiZ2V0U2xpY2siLCJnZXRTbGlkZUNvdW50Iiwic2xpZGVzVHJhdmVyc2VkIiwic3dpcGVkU2xpZGUiLCJjZW50ZXJPZmZzZXQiLCJhYnMiLCJnb1RvIiwic2xpY2tHb1RvIiwicGFyc2VJbnQiLCJjcmVhdGlvbiIsImhhc0NsYXNzIiwic2V0UHJvcHMiLCJzdGFydExvYWQiLCJsb2FkU2xpZGVyIiwiaW5pdGlhbGl6ZUV2ZW50cyIsInVwZGF0ZUFycm93cyIsImluaXRBREEiLCJudW1Eb3RHcm91cHMiLCJ0YWJDb250cm9sSW5kZXhlcyIsInZhbCIsInNsaWRlQ29udHJvbEluZGV4IiwiaW5kZXhPZiIsImFyaWFCdXR0b25Db250cm9sIiwibWFwcGVkU2xpZGVJbmRleCIsImVuZCIsImluaXRBcnJvd0V2ZW50cyIsImluaXREb3RFdmVudHMiLCJpbml0U2xpZGVFdmVudHMiLCJhY3Rpb24iLCJpbml0VUkiLCJzaG93IiwidGFnTmFtZSIsIm1hdGNoIiwia2V5Q29kZSIsImxvYWRSYW5nZSIsImNsb25lUmFuZ2UiLCJyYW5nZVN0YXJ0IiwicmFuZ2VFbmQiLCJsb2FkSW1hZ2VzIiwiaW1hZ2VzU2NvcGUiLCJpbWFnZSIsImltYWdlU291cmNlIiwiaW1hZ2VTcmNTZXQiLCJpbWFnZVNpemVzIiwiaW1hZ2VUb0xvYWQiLCJvbmxvYWQiLCJvbmVycm9yIiwic3JjIiwic2xpY2UiLCJwcmV2U2xpZGUiLCJuZXh0U2xpZGUiLCJwcm9ncmVzc2l2ZUxhenlMb2FkIiwibmV4dCIsInNsaWNrTmV4dCIsInBhdXNlIiwic2xpY2tQYXVzZSIsInBsYXkiLCJzbGlja1BsYXkiLCJwb3N0U2xpZGUiLCIkY3VycmVudFNsaWRlIiwiZm9jdXMiLCJwcmV2Iiwic2xpY2tQcmV2IiwidHJ5Q291bnQiLCIkaW1nc1RvTG9hZCIsImluaXRpYWxpemluZyIsImxhc3RWaXNpYmxlSW5kZXgiLCJjdXJyZW50QnJlYWtwb2ludCIsImwiLCJyZXNwb25zaXZlU2V0dGluZ3MiLCJ0eXBlIiwic3BsaWNlIiwic29ydCIsImNsZWFyVGltZW91dCIsIndpbmRvd0RlbGF5IiwicmVtb3ZlU2xpZGUiLCJzbGlja1JlbW92ZSIsInJlbW92ZUJlZm9yZSIsInJlbW92ZUFsbCIsInNldENTUyIsInBvc2l0aW9uIiwicG9zaXRpb25Qcm9wcyIsIngiLCJ5Iiwic2V0RGltZW5zaW9ucyIsInBhZGRpbmciLCJvZmZzZXQiLCJzZXRGYWRlIiwicmlnaHQiLCJzZXRIZWlnaHQiLCJzZXRPcHRpb24iLCJzbGlja1NldE9wdGlvbiIsIml0ZW0iLCJ2YWx1ZSIsImFyZ3VtZW50cyIsIm9wdCIsImJvZHlTdHlsZSIsImJvZHkiLCJzdHlsZSIsIldlYmtpdFRyYW5zaXRpb24iLCJ1bmRlZmluZWQiLCJNb3pUcmFuc2l0aW9uIiwibXNUcmFuc2l0aW9uIiwiT1RyYW5zZm9ybSIsInBlcnNwZWN0aXZlUHJvcGVydHkiLCJ3ZWJraXRQZXJzcGVjdGl2ZSIsIk1velRyYW5zZm9ybSIsIk1velBlcnNwZWN0aXZlIiwid2Via2l0VHJhbnNmb3JtIiwibXNUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJhbGxTbGlkZXMiLCJyZW1haW5kZXIiLCJldmVuQ29lZiIsImluZmluaXRlQ291bnQiLCJjbG9uZSIsInRvZ2dsZSIsInRhcmdldEVsZW1lbnQiLCJwYXJlbnRzIiwic3luYyIsImFuaW1TbGlkZSIsIm9sZFNsaWRlIiwic2xpZGVMZWZ0IiwibmF2VGFyZ2V0IiwiaGlkZSIsInN3aXBlRGlyZWN0aW9uIiwieERpc3QiLCJ5RGlzdCIsInIiLCJzd2lwZUFuZ2xlIiwic3RhcnRYIiwiY3VyWCIsInN0YXJ0WSIsImN1clkiLCJhdGFuMiIsInJvdW5kIiwiUEkiLCJzd2lwZUVuZCIsInN3aXBlTGVuZ3RoIiwiZWRnZUhpdCIsIm1pblN3aXBlIiwiZmluZ2VyQ291bnQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInN3aXBlU3RhcnQiLCJzd2lwZU1vdmUiLCJlZGdlV2FzSGl0IiwiY3VyTGVmdCIsInBvc2l0aW9uT2Zmc2V0IiwidmVydGljYWxTd2lwZUxlbmd0aCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsInNxcnQiLCJwb3ciLCJ1bmZpbHRlclNsaWRlcyIsInNsaWNrVW5maWx0ZXIiLCJmcm9tQnJlYWtwb2ludCIsImZuIiwiYXJncyIsIkFycmF5IiwicmV0IiwiYXBwbHkiLCJlIiwibWVudV9idXR0b24iLCJtZW51X2xpbmsiLCJtZW51X2l0ZW0iLCJzaWJsaW5ncyIsImNsaWNrIiwiY29uc29sZSIsImxvZyIsInJlYWR5Iiwid3AiLCJjdXN0b21pemUiLCJzZWxlY3RpdmVSZWZyZXNoIiwiYmluZCIsInBsYWNlbWVudCIsInBhcnRpYWwiLCJ3aWRnZXRJZFBhcnRzIiwiaWRCYXNlIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==