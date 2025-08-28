<template>
  <div class="about">
    <LittleHero
      v-show="pageSettings"
      :title="pageSettings.title"
      :img="pageSettings.image"
      
    />

    <section
      class="about-section lg:h-screen pb-10 flex flex-col-reverse justify-center lg:items-center lg:relative lg:flex-row pt-5 lg:pt-0"
      v-for="(item, index) in abouts"
      :class="{
        'bg-nci_gray_light': index % 2 == 1,
        'lg:flex-row-reverse': !item.isRight,
      }"
      :id="getSlugify(item.title)"
    >
      <div
        class="mx-auto w-full max-w-screen-3xl py-12"
        :data-aos="item.isRight ? 'fade-right' : 'fade-left'"
        data-aos-duration="800"
      >
        <div
          class="px-4 sm:px-8 lg:w-1/2 xl:pr-16 text-center lg:text-left"
          :class="item.isRight ? 'lg:text-right' : 'ml-auto'"
        >
          <h2
            class="text-2xl xl:text-4xl 2xl:text-6xl font-bold mb-5 xl:mb-10 pr-5"
          >
            {{ item.title }}
          </h2>
          <div
            class="text-base md:text-lg 2xl:text-2xl font-light pr-5 mb-4 2xl:mb-8 overflow-y-scroll max-h-[500px] custom-scrollbar"
            v-html="item.htmlContent"
          ></div>
        </div>
      </div>
      <div
        class="w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2"
        :class="item.isRight ? 'right-0' : 'left-0'"
      >
        <div
          class=""
          :data-aos="item.isRight ? 'fade-left' : 'fade-right'"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        >
          <ImgOnCircle
            :left="item.isRight"
            :img="item.image"
            :alt="item.title"
          />
        </div>
      </div>
    </section>

    <section class="py-16 md:py-20" id="yonetim-kurulumuz">
      <div class="">
        <div class="my-8 md:my-14">
          <h1
            class="font-bold text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-center"
          >
            {{ $t("OurBoardOfDirectors") }}
          </h1>
          <span
            class="w-1 md:w-1.5 h-8 md:h-14 bg-black block mx-auto mt-8 md:mt-14"
          ></span>
        </div>

        <div
          class="container max-w-7xl directors-grid gap-y-12 md:gap-y-20 3xl:gap-y-32 text-center justify-center items-center relative"
        >
          <div v-for="item in commitee">
            <div
              class="w-52 lg:w-72 mx-auto flex flex-col items-center justify-center text-center"
            >
              <Pic
                class="w-full object-cover border-12 lg:border-16 border-inci_gray_light mb-3"
                :src="item.image"
                :alt="item.name"
              />
              <span class="text-2xl font-bold mb-2">{{ item.name }}</span>
              <span class="text-lg 2xl:text-2xl font-light whitespace-nowrap">
                {{ item.title }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.about section:nth-child(2) .overflow-y-scroll,
.about section:nth-child(3) .overflow-y-scroll {
  @apply overflow-hidden;
}
</style>
<script>
import ImgOnCircle from "../components/ImgOnCircle.vue";
import LittleHero from "../components/LittleHero.vue";
import Pic from "../components/Pic.vue";
import aboutService from "@/services/aboutService.js";
import pageSettingsService from "@/services/pageSettingService.js";
import slugify from "@/util/slugify.js";
import {
  initFullScreen,
  destroyFullScreen,
  scrollToSection,
} from "@/components/fullPage.js";
export default {
  name: "about",
  layout: "default",
  components: { LittleHero, ImgOnCircle, Pic },
  async asyncData({ i18n }) {
    const abouts = await aboutService.getAbout(i18n.locale);
    const commitee = await aboutService.getCommitee(i18n.locale);
    var pageSettings = await pageSettingsService.getPageSetting(
      "about",
      i18n.locale
    );
    pageSettings = pageSettings || {
      seoTitle: "",
      seoKeywords: "",
      seoDescription: "",
      image: "",
      title: "",
    };

    return { abouts, commitee, pageSettings };
  },
  methods: {
    getSlugify(_url) {
      return slugify(_url);
    },
  },
  mounted() {
    const _sectionHash = location.hash.replace("#", "");
    if (_sectionHash)
      document
        .getElementById(_sectionHash)
        .scrollIntoView({ behavior: "smooth" });
  },
  head() {
    return {
      title: this.pageSettings.seoTitle,
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
};
</script>
