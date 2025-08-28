import $ from "jquery";
var data = {
  inMove: false,
  inMoveDelay: 1000,
  activeSection: 0,
  offsets: [],
  touchStartY: 0,
};
function composedPath(el) {

  var path = [];

  while (el) {

    path.push(el);

    if (el.tagName === 'HTML') {

      path.push(document);
      path.push(window);

      return path;
    }

    el = el.parentElement;
  }
}
export function initFullScreen() {
  calculateSectionOffsets();

  window.addEventListener("DOMMouseScroll", handleMouseWheelDOM); // Mozilla Firefox
  window.addEventListener("mousewheel", handleMouseWheel, {
    passive: false,
  });
  window.addEventListener("touchstart", touchStart); // mobile devices
  window.addEventListener("touchmove", touchMove); // mobile devices

  $(document).ready(function () {
    var _sectionIndex = 0;

    if (window.location.hash) {
      var _hash = window.location.hash.replace('#', '');
      if ($(".full-screen"))
        $(".full-screen").each(function (i, t) {
          if ($(t) && $(t).attr("id") && $(t).attr("id") === _hash) {
            _sectionIndex = i;
          }
        });
    } else {
      var _sectionDistance = $(document).height();

      $(".full-screen").each(function (i, t) {
        var scrollDiff = $(document).scrollTop() - $(t).offset().top;

        scrollDiff = scrollDiff < 0 ? scrollDiff * -1 : scrollDiff;

        if (_sectionDistance > scrollDiff) {
          _sectionIndex = i;
          _sectionDistance = scrollDiff;
        }
      });

    }

    setTimeout(function () { scrollToSection(_sectionIndex, true); }, 500)

  });
}
export function destroyFullScreen() {
  window.removeEventListener("DOMMouseScroll", handleMouseWheelDOM); // Mozilla Firefox
  window.removeEventListener("mousewheel", handleMouseWheel, {
    passive: false,
  }); // Other browsers

  window.removeEventListener("touchstart", touchStart); // mobile devices
  window.removeEventListener("touchmove", touchMove); // mobile devices
}
function calculateSectionOffsets() {
  let sections = document.getElementsByClassName("full-screen");
  let length = sections.length;

  for (let i = 0; i < length; i++) {
    let sectionOffset = sections[i].offsetTop;
    data.offsets.push(sectionOffset);
  }
}
function handleMouseWheel(e) {
  var path = e.path || (e.composedPath && e.composedPath());

  var hasScroll = !path ? false : path.filter(function (f) {
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
  if (e.wheelDelta < 30 && !data.inMove) {
    moveUp();
  } else if (e.wheelDelta > 30 && !data.inMove) {
    moveDown();
  }

  return false;
}

function handleMouseWheelDOM(e) {
  e.preventDefault();

  if (e.wheelDelta <= 20 && e.wheelDelta >= -20) {
    return false;
  }
  if (e.detail > 0 && !data.inMove) {
    moveUp();
  } else if (e.detail < 0 && !inMove) {
    moveDown();
  }

  return false;
}

function moveDown() {
  data.inMove = true;
  data.activeSection--;

  if (data.activeSection < 0) data.activeSection = 0;

  scrollToSection(data.activeSection, true);
}

function moveUp() {
  data.inMove = true;
  data.activeSection++;

  if (data.activeSection > data.offsets.length - 1)
    data.activeSection = data.offsets.length - 1;

  scrollToSection(data.activeSection, true);
}

export function scrollToSection(id, force = false) {
  if (data.inMove && !force) return false;

  data.activeSection = id;
  data.inMove = true;

  let section = document.getElementsByClassName("full-screen")[id];

  if (section) {
    $("#" + section.id).addClass("active");


    if ($("a[data-scroll]")) $("a[data-scroll]").removeClass("active");
    var aElem = $('a[data-scroll="' + section.id + '"]');
    if (aElem) {
      $(aElem).addClass("active");
    }

    setTimeout(function () {
      document
        .getElementsByClassName("full-screen")
      [id].scrollIntoView({ behavior: "smooth", block: "start" });

    }, 100);
  }

  setTimeout(() => {
    if (section)
      $(".full-screen.active:not(#" + section.id + ")").removeClass("active");
    data.inMove = false;
  }, data.inMoveDelay);
  return false;
}
function touchStart(e) {
  e.preventDefault();

  data.touchStartY = e.touches[0].clientY;
}

function touchMove(e) {
  if (data.inMove) return false;
  e.preventDefault();

  const currentY = e.touches[0].clientY;

  if (data.touchStartY < currentY) {
    moveDown();
  } else {
    moveUp();
  }

  data.touchStartY = 0;
  return false;
}
