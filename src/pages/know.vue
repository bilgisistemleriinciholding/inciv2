<template>
  <div>
    <div class="" id="">
      <LittleHero
        v-show="pageSettings"
        :title="pageSettings.title"
        :img="pageSettings.image"
      />
    </div>

    <section
      class="lg:h-screen container flex flex-col items-center justify-center pt-6 3xl:pt-24"
      id=""
    >
      <div class="my-2 md:my-8 3xl:my-9">
        <h1
          class="font-bold text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-center"
        >
          {{ pageSettings.title2 }}
        </h1>
        <div
          v-html="pageSettings.htmlContent"
          class="max-w-6xl mx-auto text-base 2xl:text-xl font-light mt-4 2xl:mt-8 text-center"
        ></div>
        <span
          class="w-1 h-8 md:h-10 bg-black block mx-auto mt-4 md:mt-8 3xl:mt-9"
        ></span>
      </div>

      <div
        v-if="histories && histories.length > 0"
        class="timeline container relative w-5/6 md:w-3/5 2xl:max-w-5xl overflow-visible"
      >
        <div class="">
          <VueSlickCarousel
            v-bind="settings"
            @beforeChange="befChange"
            ref="carousel"
          >
            <div
              class="-rotate-90"
              @click="gotoSlide(index)"
              :class="{ active: activeIndex == index }"
              v-for="(item, index) in histories"
            >
              <span class="stroke-text">{{ item.year }}</span>
            </div>
          </VueSlickCarousel>
        </div>
        <div
          v-show="activeIndex == index"
          class="flex flex-col md:flex-row items-center gap-4 md:gap-10 mt-2 md:px-9"
          v-for="(item, index) in histories"
        >
          <Pic
            class="h-24 lg:h-56 object-cover"
            :src="item.image"
            :alt="item.year"
          />
          <div
            v-html="item.description"
            class="text-xs lg:text-base font-medium"
          ></div>
        </div>
      </div>
    </section>

    <section
      class="lg:h-screen py-10 lg:py-0"
      v-for="(item, index) in knows"
      :class="{
        'bg-inci_gray_light': index % 2 == 1,
        'lg:flex-row-reverse': !item.isRight && !item.isFull,
        'flex flex-col-reverse justify-center lg:items-center lg:relative':
          !item.isFull,
        'lg:pt-28': item.isFull,
      }"
      :id="getSlugify(item.title)"
    >
      <div
        v-if="!item.isFull"
        class="mx-auto w-full max-w-screen-3xl"
        :data-aos="item.isRight ? 'fade-right' : 'fade-left'"
        data-aos-duration="800"
        :class="{
          'pt-8 lg:pt-28 pb-0 lg:pb-16 xl:py-16 float-right':
            item.isRight == false,
          'pt-8 lg:py-12': item.isRight == true,
        }"
      >
        <div
          class="px-4 sm:px-8 lg:w-1/2 xl:pr-16 text-center"
          :class="{
            'lg:text-left ml-auto': item.isRight == false,
            'lg:text-right': item.isRight == true,
          }"
        >
          <h2 class="text-2xl xl:text-4xl 2xl:text-6xl font-bold mb-5 xl:mb-8">
            {{ item.title }}
          </h2>
          <div
            class="text-base md:text-lg 2xl:text-2xl font-light mb-6 2xl:mb-7 overflow-y-auto overflow-x-hidden max-h-[500px] custom-scrollbar plain-text plain-list-2"
            v-html="item.htmlContent"
          ></div>
          <a
            v-if="item.linkUrl"
            class="bg-inci_red button-hover text-base xl:text-lg text-white px-8 xl:px-12 py-4 xl:py-5 inline-flex flex-row items-center gap-1"
            :href="item.linkUrl"
            target="_blank"
          >
            {{ item.linkText }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
      </div>
      <div
        v-if="!item.isFull"
        class="w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2"
        :class="{
          'left-0': item.isRight == false,
          'right-0': item.isRight == true,
        }"
      >
        <div
          class=""
          :data-aos="item.isRight ? 'fade-left' : 'fade-right'"
          data-aos-duration="800"
        >
          <ImgOnCircle
            :left="item.isRight"
            :img="item.image"
            :video="item.youtubeUrl"
            :alt="item.title"
          />
        </div>
      </div>
      <div
        v-if="item.isFull && item.image && item.image.length > 0"
        class="mb-8 lg:mb-20"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Pic class="w-full object-cover" :src="item.image" :alt="item.title" />
      </div>
      <div
        v-if="item.isFull"
        class="mb-10 lg:mb-32 mt-10 container text-center"
      >
        <h2
          class="text-4xl 2xl:text-5xl font-bold mb-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {{ item.title }}
        </h2>
        <div
          v-html="item.htmlContent"
          class="text-lg 2xl:text-xl 3xl:text-2xl font-light mb-6 2xl:mb-10 plain-text plain-list"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="-200"
        ></div>
      </div>
    </section>
  </div>
</template>
<style>
#degerlerimiz ul,
#our-values ul {
  @apply list-none !important;
}
#degerlerimiz ul li:nth-child(odd),
#our-values ul li:nth-child(odd) {
  @apply text-transparent text-2xl lg:text-3xl font-bold !important;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #e30613;
}
#degerlerimiz ul li:nth-child(even),
#our-values ul li:nth-child(even) {
  @apply text-inci_red text-2xl lg:text-3xl font-bold !important;
}
</style>
<script>
import ImgOnCircle from "../components/ImgOnCircle.vue";
import LittleHero from "../components/LittleHero.vue";
import Pic from "../components/Pic.vue";
import {
  initFullScreen,
  destroyFullScreen,
  scrollToSection,
} from "@/components/fullPage.js";
import knowService from "@/services/knowService.js";
import pageSettingsService from "@/services/pageSettingService.js";
import slugify from "@/util/slugify.js";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import jQuery from "jquery";

export default {
  name: "about",
  layout: "default",
  components: { LittleHero, ImgOnCircle, Pic, VueSlickCarousel },
  data() {
    return {
      activeSliderImg: "img/timeline-1.jpg",
      activeIndex: 0,
      settings: {
        dots: true,
        dotsClass: "slick-dots timeline-dots",
        // fade: true,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 8,
        slidesToScroll: 1,
        swipeToSlide: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        draggable: false,
        responsive: [
          {
            breakpoint: 1536,
            settings: {
              slidesToShow: 7,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 6,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            },
          },
          ,
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          ,
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      },
    };
  },
  async asyncData({ i18n }) {
    const knows = await knowService.getKnow(i18n.locale);
    const histories = await knowService.getHistory(i18n.locale);
    var pageSettings = await pageSettingsService.getPageSetting(
      "know",
      i18n.locale
    );
    pageSettings = pageSettings || {
      seoTitle: "",
      seoKeywords: "",
      seoDescription: "",
      image: "",
      title: "",
    };

    return { knows, histories, pageSettings };
  },
  methods: {
    getSlugify(_url) {
      return slugify(_url);
    },
    befChange(oldSlideIndex, newSlideIndex) {
      this.activeIndex = newSlideIndex;
    },
    gotoSlide(sIndex) {
      this.$refs.carousel.goTo(sIndex);
      this.activeIndex = sIndex;
    },
  },
  head() {
    return {
      title: `${this.pageSettings.seoTitle}`,
      meta: [
        {
          vmid: "description",
          name: "description",
          content: this.pageSettings.seoDescription,
        },
        {
          vmid: "keywords",
          name: "keywords",
          content: this.pageSettings.seoKeywords,
        },
      ],
    };
  },
  mounted() {
    //if (window.innerWidth > 1024) {
    //  initFullScreen();
    //}
    const _sectionHash = location.hash.replace("#", "");
    if (_sectionHash)
      document
        .getElementById(_sectionHash)
        .scrollIntoView({ behavior: "smooth" });
  },
  // destroyed() {
  //   if (window.innerWidth > 1024) {
  //     destroyFullScreen();
  //   }
  // },
};
</script>
