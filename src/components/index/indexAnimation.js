import $ from "jquery";
import * as d3 from "d3";
function composedPath(el) {
  var path = [];

  while (el) {
    path.push(el);

    if (el.tagName === "HTML") {
      path.push(document);
      path.push(window);

      return path;
    }

    el = el.parentElement;
  }
}

let indexAnimation = {
  _initted: false,
  _offsets: [],
  _newsTextTimeout: undefined,
  _inMove: false,
  _inMoveDelay: 1000,
  _activeSection: 0,
  _touchStartY: 0,
  _clientWidth: 0,
  _circleTriggered: false,
  _calculateSectionOffsets: function () {
    let sections = document.getElementsByClassName("full-screen");
    let length = sections.length;

    for (let i = 0; i < length; i++) {
      let sectionOffset = sections[i].offsetTop;
      indexAnimation._offsets.push(sectionOffset);
    }
  },
  _openNews: function (target) {
    var delay = parseInt($(target).attr("delay") || "700");

    if (indexAnimation._newsTextTimeout != undefined) {
      clearTimeout(indexAnimation._newsTextTimeout);
      indexAnimation._newsTextTimeout = undefined;
    }
    $(target).attr("aria-zoom", "true");
    $(target).addClass("!grow-[2]");
    $(target).children("img").addClass("lg:grayscale-0");

    indexAnimation._newsTextTimeout = setTimeout(function () {
      $(target)
        .children(".effect-marley")
        .addClass("!bottom-0")
        .addClass("effect-marley-trigger");
      clearTimeout(indexAnimation._newsTextTimeout);
      indexAnimation._newsTextTimeout = undefined;
    }, delay);
  },
  _runTextAnimate: function (t) {
    var dValue = $(t).attr("data-value").trim();
    const setIntervalTime = dValue.length;
    var runTime = 0;
    var letterInterVal = setInterval(function () {
      if (runTime == setIntervalTime) {
        clearInterval(letterInterVal);
        letterInterVal = undefined;
      } else {
        runTime++;
        $(t).html(dValue.substr(0, runTime));
      }
    }, $(t).attr("animation-speed"));
  },
  _moveDown: function () {
    indexAnimation._inMove = true;
    indexAnimation._activeSection--;

    if (indexAnimation._activeSection < 0) indexAnimation._activeSection = 0;

    indexAnimation._scrollToSection(indexAnimation._activeSection, true);
  },
  _moveUp: function () {
    indexAnimation._inMove = true;
    indexAnimation._activeSection++;

    if (indexAnimation._activeSection > indexAnimation._offsets.length - 1)
      indexAnimation._activeSection = indexAnimation._offsets.length - 1;

    indexAnimation._scrollToSection(indexAnimation._activeSection, true);
  },
  _handleMouseWheel: function (e) {
    var path = e.path || (e.composedPath && e.composedPath());
    var hasScroll = !path
      ? false
      : path.filter(function (f) {
          if (!f.id) return false;
          if ($("#" + f.id).attr("scrollable") == "true") {
            return true;
          }
          return false;
        });
    if (hasScroll && hasScroll.length > 0) return true;
    e.preventDefault();

    if (e.wheelDelta <= 20 && e.wheelDelta >= -20) {
      return false;
    }

    if (e.wheelDelta < 30 && !indexAnimation._inMove) {
      indexAnimation._moveUp();
    } else if (e.wheelDelta > 30 && !indexAnimation._inMove) {
      indexAnimation._moveDown();
    }
    return false;
  },
  _handleMouseWheelDOM: function (e) {
    e.preventDefault();

    if (e.wheelDelta <= 20 && e.wheelDelta >= -20) {
      return false;
    }
    if (e.detail > 0 && !indexAnimation._inMove) {
      indexAnimation._moveUp();
    } else if (e.detail < 0 && !indexAnimation._inMove) {
      indexAnimation._moveDown();
    }
    return false;
  },

  _scrollToSection: function (id, force = false) {
    if (indexAnimation._inMove && !force) return false;

    indexAnimation._activeSection = id;
    indexAnimation._inMove = true;
    // get section and scroll into view if it exists
    let section = document.getElementsByClassName("full-screen")[id];

    if (section) {
      $("#" + section.id).addClass("active");

      document
        .getElementsByClassName("full-screen")
        [id].scrollIntoView({ behavior: "smooth" });
    }

    var triggerCircle = false;

    if (section.id == "section-4") {
      indexAnimation._triggeredCircles();
      indexAnimation._openCircleContainer();
    } else if (indexAnimation._circleTriggered == true) {
      triggerCircle = true;
    }

    setTimeout(() => {
      if (triggerCircle == true) {
        $("#circle-animate").html("");
        indexAnimation._circleTriggered = false;
        $("#circle-animate").append($("#circle-clone").html());
      }

      $(".full-screen.active:not(#" + section.id + ")").removeClass("active");
      indexAnimation._inMove = false;
    }, indexAnimation._inMoveDelay);
  },
  _touchStart: function (e) {
    e.preventDefault();
    indexAnimation._touchStartY = e.touches[0].clientY;
  },
  _touchMove: function (e) {
    if (indexAnimation._inMove) return false;
    e.preventDefault();

    const currentY = e.touches[0].clientY;

    if (indexAnimation._touchStartY < currentY) {
      indexAnimation._moveDown();
    } else {
      indexAnimation._moveUp();
    }

    indexAnimation._touchStartY = 0;
    return false;
  },
  _triggeredCircles: function () {
    const windowWidth = $("#circle-animate").width();

    const gapWidth = (windowWidth * 4.2) / 100;

    var circleTotalArea = windowWidth - gapWidth * 3;
    var circleWidth = circleTotalArea / 4;
    var r2w = circleWidth * 4 + 3 * gapWidth;
    var r1w = circleWidth * 3 + 2 * gapWidth;
    var marginLeft = (r2w - r1w) / 2;
    var thin_k_perc = 1.89;
    var bold_k_perc = 4.47;
    var fontgapPerc = 1900;

    if (indexAnimation._clientWidth < 768) {
      circleTotalArea = windowWidth - gapWidth;
      circleWidth = circleTotalArea;

      r2w = circleWidth + gapWidth;
      r1w = circleWidth + gapWidth;
      marginLeft = 0;

      thin_k_perc = 8;
      bold_k_perc = 10;
      fontgapPerc = 500;
      var root = document.querySelector(":root");
      root.style.setProperty("--dashSize", "1815");

      $("#circle-animate").css({
        "min-height": 7 * circleWidth + 4 * gapWidth + 50 + "px",
      });
      var sortedCircles = $("#circle-animate .circle-item").sort(function (
        a,
        b
      ) {
        var _a = parseInt($(a).attr("circle-order"));
        var _b = parseInt($(b).attr("circle-order"));
        return _a - _b;
      });
      $("#circle-animate .circle-gap").html("");
      var _circleAppendFirst = $("#circle-animate .circle-gap")[0];
      var _circleAppendSecond = $("#circle-animate .circle-gap")[1];
      $.each(sortedCircles, function (i, t) {
        if (i <= 2) {
          $(t).clone(true, true).appendTo(_circleAppendFirst);
        } else {
          $(t).clone(true, true).appendTo(_circleAppendSecond);
        }
      });
    }
    if (marginLeft > 0) {
      $("#circle-animate .circle-margin").css({
        "margin-left": marginLeft + "px",
      });
    }

    $("#circle-animate .root-svg").attr(
      "viewBox",
      "0 0 " + circleWidth + " " + circleWidth
    );

    $("#circle-animate .root-svg").css({
      width: circleWidth + "px",
      height: circleWidth + "px",
    });
    $("#circle-animate .circle-gap").css({ gap: gapWidth + "px" });

    const thinSize = (thin_k_perc * windowWidth) / 100;

    $("#circle-animate .svgTextWhiteThin").css({
      "font-size": +thinSize + "px",
    });
    $("#circle-animate .svgTextRedThin").css({
      "font-size": thinSize + "px",
    });

    $.each($("#circle-animate .svgTextWhiteThin"), function (i, _t) {
      var _dy = parseInt($(_t).attr("data-dy"));
      var dperc = (100 * _dy) / fontgapPerc;

      const dySize = (dperc * windowWidth) / 100;
      $(_t).attr("dy", dySize);
    });
    $.each($("#circle-animate .svgTextRedThin"), function (i, _t) {
      var _dy = parseInt($(_t).attr("data-dy"));
      var dperc = (100 * _dy) / fontgapPerc;

      const dySize = (dperc * windowWidth) / 100;
      $(_t).attr("dy", dySize);
    });
    $.each($("#circle-animate .svgTextRedBold"), function (i, _t) {
      var _dy = parseInt($(_t).attr("data-dy"));
      var dperc = (100 * _dy) / fontgapPerc;

      const dySize = (dperc * windowWidth) / 100;
      $(_t).attr("dy", dySize);
    });
    $.each($("#circle-animate .svgTextWhiteBold"), function (i, _t) {
      var _dy = parseInt($(_t).attr("data-dy"));
      var dperc = (100 * _dy) / fontgapPerc;

      const dySize = (dperc * windowWidth) / 100;
      $(_t).attr("dy", dySize);
    });
    const boldSize = (bold_k_perc * windowWidth) / 100;

    $("#circle-animate .svgTextWhiteBold").css({
      "font-size": boldSize + "px",
    });
    $("#circle-animate .svgTextRedBold").css({
      "font-size": boldSize + "px",
    });
  },
  _openCircleContainer: function () {
    var _this = indexAnimation;
    const circleItems = $("#circle-animate .circle-item");
    $.each(circleItems, function (i, t) {
      var delay = parseInt($(t).attr("data-delay") || "0");

      setTimeout(function () {
        var svgItem = $(t).find(".root-svg");

        const svgId = $(svgItem[0]).attr("id");
        $(t).fadeIn();
        $(t).removeClass("hidden");

        const allCircles = $(svgItem[0]).find("circle");

        if (allCircles.length > 0) {
          const _circle = allCircles[0];
          const _innerCircle =
            allCircles.length > 1 ? $(svgItem).find("circle")[1] : undefined;

          const ww = $(t).width();

          var _circler = ww / 2 - 2;
          if (ww > 0) {
            $(_circle).attr("r", _circler);
            var rGapPer = 3.75;
            var rGap = (ww * rGapPer) / 100;
            if (_innerCircle) {
              $(_innerCircle).attr("r", ww / 2 - 4 - rGap);
            }
            if (d3.select("#" + svgId).node()) {
              const rootSVGSize = d3
                .select("#" + svgId)
                .node()
                .getBoundingClientRect();

              const dataLabelSize = d3
                .select("#" + svgId + " g.data-label")
                .node()
                .getBoundingClientRect();

              var $tspans = $(svgItem).find("text tspan");
              $.each($tspans, function (i, $tspan) {
                $($tspan).attr("data-value", $($tspan).text());
                $($tspan).text("");
              });

              var x =
                rootSVGSize.x -
                dataLabelSize.x +
                (rootSVGSize.width - dataLabelSize.width) / 2;

              var y =
                rootSVGSize.y -
                dataLabelSize.y +
                (rootSVGSize.height - dataLabelSize.height) / 2;
              d3.select("#" + svgId + " g.data-label").attr(
                "transform",
                "translate(" + x + "," + y + ")"
              );

              if ($(svgItem).find(".animation-svg-text").length > 0) {
                _this._svgWriteTextAnimation(svgItem);
              }
            }
          }
        }
      }, delay);
    });
    _this._circleTriggered = true;
  },
  _svgWriteTextAnimation: function (t) {
    var _this = indexAnimation;
    $.each($(t).find(".animation-svg-text"), function (i, t) {
      var delay = parseInt($(t).attr("data-delay") || "0");
      if (delay > 0) {
        setTimeout(function () {
          _this._runTextAnimate(t);
        }, delay);
      } else {
        _this._runTextAnimate(t);
      }
    });
  },
  _registerEvents: function () {
    window.addEventListener(
      "DOMMouseScroll",
      indexAnimation._handleMouseWheelDOM
    );
    window.addEventListener("mousewheel", indexAnimation._handleMouseWheel, {
      passive: false,
    });
    window.addEventListener("touchstart", indexAnimation._touchStart); // mobile devices
    window.addEventListener("touchmove", indexAnimation._touchMove); // mobile devices
  },
  _unregisterEvents: function () {
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
    window.removeEventListener("touchstart", this.touchStart); // mobile devices
    window.removeEventListener("touchmove", this.touchMove); // mobile devices
  },
  init: function () {
    var $this = indexAnimation;
    if ($this._initted) {
      this.destroy();
    }
    setTimeout(function () {
      $this._registerEvents();
      $this._initted = true;
      $("body").append(
        '<div id="circle-clone" style="display:none !important"></div>'
      );
      $("#circle-clone").append($("#circle-animate").html());

      $this._calculateSectionOffsets();
      $this._clientWidth = document.body.clientWidth;
      let _sectionIndex = 0;
      let _sectionDistance = $(document).height();

      $(".full-screen").each(function (i, t) {
        var scrollDiff = $(document).scrollTop() - $(t).offset().top;

        scrollDiff = scrollDiff < 0 ? scrollDiff * -1 : scrollDiff;
        if (_sectionDistance > scrollDiff) {
          _sectionIndex = i;
          _sectionDistance = scrollDiff;
        }
      });

      $this._scrollToSection(_sectionIndex, true);

      $(".effect-marley-wrap").mouseenter(function (e) {
        clearTimeout(indexAnimation._newsTextTimeout);
        indexAnimation._newsTextTimeout = undefined;

        $('.effect-marley-wrap[aria-zoom="true"]')
          .not(this)
          .children(".effect-marley")
          .removeClass("!bottom-0")
          .removeClass("effect-marley-trigger");

        $('.effect-marley-wrap[aria-zoom="true"]')
          .not(this)
          .children("img")
          .removeClass("lg:grayscale-0");

        $('.effect-marley-wrap[aria-zoom="true"]')
          .not(this)
          .removeClass("!grow-[2]");
        $('.effect-marley-wrap[aria-zoom="true"]').attr("aria-zoom", "false");
        $this._openNews($(this));
      });

      $this._openNews($(".effect-marley-wrap").first());

      $this._triggeredCircles();
      $(window).resize(function () {
        $("#circle-animate").html("");
        indexAnimation._circleTriggered = false;
        $("#circle-animate").append($("#circle-clone").html());

        if ((indexAnimation._activeSection = "section-4")) {
          indexAnimation._triggeredCircles();
          indexAnimation._openCircleContainer();
        }
      });
    }, 200);
    const mouseMoveFunc = $(document).on("mousemove", function (e) {
      var mouseX = e.pageX;
      var mouseY = e.pageY;
      if ($("#sector1")) {
        var offsetOtomotiv = $("#sector1").offset();
        if (offsetOtomotiv) {
          var otomotivX1 = offsetOtomotiv.left;
          var otomotivX2 = otomotivX1 + $("#sector1").width();
          var otomotivY1 = offsetOtomotiv.top;
          var otomotivY2 = otomotivY1 + $("#sector1").height();
          if (
            mouseX >= otomotivX1 &&
            mouseX <= otomotivX2 &&
            mouseY >= otomotivY1 &&
            mouseY <= otomotivY2
          ) {
            $("#sector1").removeClass("lg:grayscale");
          } else if (!$("#sector1").hasClass("lg:grayscale")) {
            $("#sector1").addClass("lg:grayscale");
          }
        }
      }

      if ($("#sector2")) {
        var offsetHizmet = $("#sector2").offset();
        if (offsetHizmet) {
          var hizmetX1 = offsetHizmet.left;
          var hizmetX2 = hizmetX1 + $("#sector2").width();
          var hizmetY1 = offsetHizmet.top;
          var hizmetY2 = hizmetY1 + $("#sector2").height();

          if (
            mouseX >= hizmetX1 &&
            mouseX <= hizmetX2 &&
            mouseY >= hizmetY1 &&
            mouseY <= hizmetY2
          ) {
            $("#sector2").removeClass("lg:grayscale");
          } else if (!$("#sector2").hasClass("lg:grayscale")) {
            $("#sector2").addClass("lg:grayscale");
          }
        }
      }

      if ($("#sector3")) {
        var offsetTeknoloji = $("#sector3").offset();
        if (offsetTeknoloji) {
          var teknolojiX1 = offsetTeknoloji.left;
          var teknolojiX2 = teknolojiX1 + $("#sector3").width();
          var teknolojiY1 = offsetTeknoloji.top;
          var teknolojiY2 = teknolojiY1 + $("#sector3").height();

          if (
            mouseX >= teknolojiX1 &&
            mouseX <= teknolojiX2 &&
            mouseY >= teknolojiY1 &&
            mouseY <= teknolojiY2
          ) {
            $("#sector3").removeClass("lg:grayscale");
          } else if (!$("#sector3").hasClass("lg:grayscale")) {
            $("#sector3").addClass("lg:grayscale");
          }
        }
      }
    });
  },
  destroy: function () {
    indexAnimation._unregisterEvents();
  },
};
export default indexAnimation;
