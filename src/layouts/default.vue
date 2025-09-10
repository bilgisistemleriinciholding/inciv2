<template>
  <div>
    <Loader />
    <Header :menu="menuList" />
    <Nuxt keep-alive />
    <Footer :menu="menuList" />
    
    <!--
    <CookieControl class="w-full">
      <template v-slot:bar class="w-full">
        <div class="w-full">
          <p class="!text-[10px] leading-3 font-light">
            {{ $t("CookieText1") }}
            <a class="text-black font-medium text-xs" :href="$t('linkCookies')">
              {{ $t("CookieText2") }}
            </a>
            {{ $t("CookieText3") }}
          </p>
        </div>
      </template>
    </CookieControl>
    -->
  </div>
</template>

<script>
  import AOS from "aos";
  import "aos/dist/aos.css";
  import $ from "jquery";
  import menuService from "@/services/menuService.js";
  import { mapState } from 'vuex';

  export default {
    name: "default",
    data: function () {
      return {
        loaded: false,
        slideAnimationSpeed: 600,
      };
    },
    computed: {
      menuList() {
        return this.$store.state.menuList[this.$root.$i18n.locale];
      }
    },
    head() {
      return {
        bodyAttrs: {
          class: this.loaded ? "" : "overflow-hidden",
        },
      };
    },
    mounted() {
      AOS.init({
        startEvent: "load",
        mirror: true,
        once: false,
        anchorPlacement: "top-bottom",
      });
      $(window).on("resize", function () {
        AOS.refresh();
      });
      var _this = this;
      $(document).ready(function () {
        $(document).scroll(function () {
          if ($(this).scrollTop() > 5) {
            $("header").addClass("fixed-header");
          } else {
            AOS.refresh();
            $("header").removeClass("fixed-header");
          }
        });
        $(document).on("click", function (e) {
          if ($(e.target).attr("data-target")) {
            var target = $(e.target).attr("data-target");
            if ($(target).attr("aria-expanded") != "true") {
              _this.showElement(target);
            } else {
              _this.hideElement(target);
            }
          } else {
            if ($(e.target).attr("data-toggle") === "close") {
              _this.hideElement($('[aria-expanded="true"]'));
            } else {
              var parent = $(e.target).parents('[aria-expanded="true"]');

              $.each($('[aria-expanded="true"]'), function (i, t) {
                if (
                  t != e.target &&
                  (!parent || parent.length == 0 || t != parent[0])
                ) {
                  _this.hideElement(t);
                }
              });
            }
          }
        });
        $(document).mousemove(function (e) {
          var mouseX = e.pageX;
          var mouseY = e.pageY;
          let _w = window.innerWidth / 2;
          let _h = window.innerHeight / 2;

          $(".parallax-item").each(function (i, t) {
            if ($(t).offset().top - $(t).position().top - 300 <= mouseY) {
              var dept = parseFloat($(t).attr("data-dept") || 1) / 100;

              var originalLeft = parseFloat(
                $(t).attr("data-original-left") || $(t).position().left
              );

              //var originalTop = $(t).attr("data-original-top");

              //if (!originalTop) {
              //  originalTop = $(t).position().top;
              //  $(t).attr("data-original-top", originalTop);
              //}
              //originalTop = parseFloat(originalTop);

              $(t).attr("data-original-left", originalLeft);

              var diffLeft = originalLeft - (mouseX - _w) * dept;
              //var diffTop =
              //  originalTop -
              //  (mouseY - ($(document).scrollTop() + _h)) * (dept / 2);

              $(t).css({ left: diffLeft + "px" });
              //$(t).css({ top: diffTop + "px" });
            }
          });
        });
      });
      this.loaded = true;
    },
    methods: {
      showElement(target) {
        var slideDirection = $(target).attr("data-animation");
        if (!slideDirection) slideDirection = "fade";

        if (slideDirection === "fade") {
          $(target).fadeIn(this.slideAnimationSpeed);
        } else if (slideDirection === "slide") {
          $(target).slideDown(this.slideAnimationSpeed);
        }

        $(target).attr("aria-expanded", "true");

        $(target).removeClass("hidden");

        if ($(target).attr("body-overflow") != "false") {
          // $("body").addClass("overflow-hidden");
        }
      },
      hideElement(target) {
        var slideDirection = $(target).attr("data-animation");
        if (!slideDirection) slideDirection = "fade";

        if (slideDirection === "fade") {
          $(target).fadeOut(this.slideAnimationSpeed);
        } else if (slideDirection === "slide") {
          $(target).slideUp(this.slideAnimationSpeed);
        }

        $(target).addClass("hidden");
        $(target).attr("aria-expanded", "false");
        // $("body").removeClass("overflow-hidden");
      },
    },
  };
</script>
