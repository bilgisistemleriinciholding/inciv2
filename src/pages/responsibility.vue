<template>
  <div class="responsibility">
    <section class="" id="">
      <LittleHero
        v-show="pageSettings"
        :title="pageSettings.title"
        :img="pageSettings.image"
      />
    </section>

    <section
      v-for="(item, index) in responsibilitys"
      class=""
      :id="getSlugify(item.title)"
    >
      <div
        v-if="index % 2 == 0"
        class="flex flex-col-reverse lg:flex-row-reverse justify-center lg:items-center lg:relative"
      >
        <div
          class="mx-auto w-full max-w-screen-3xl pt-16 pb-12 float-right"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div class="px-4 sm:px-8 lg:w-1/2 xl:px-10 text-left ml-auto">
            <h2 class="text-3xl 2xl:text-5xl font-black text-inci_yellow2 mb-4">
              {{ item.title }}
            </h2>
            <div></div>
            <div v-html="item.htmlContent" class="plain-list"></div>
          </div>
        </div>
        <div
          class="w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:w-1/2 py-8 xxs:pt-20 xxs:pb-14 lg:py-0"
        >
          <div
            class="relative"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-offset="-100"
          >
            <div
              class="w-1/2 xxs:w-2/3 sm:w-4/5 md:!w-5/6 h-72 2xl:h-96 bg-inci_yellow2 mr-auto"
            >
              <Pic
                class="absolute top-1/2 -translate-y-1/2 right-0 h-80 xxs:h-96 lg:!h-[550px] 2xl:!h-[650px] object-cover rounded-full"
                :src="item.image"
                :alt="item.title"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="index % 2 != 0"
        class="flex flex-col-reverse lg:flex-row justify-center lg:items-center lg:relative mb-10 lg:mb-20"
      >
        <div
          class="mx-auto w-full max-w-screen-3xl pb-0 pt-10 lg:py-12 xl:pt-20 float-left"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div class="px-4 sm:px-8 lg:w-1/2 xl:px-16 text-left mr-auto">
            <h2 class="text-3xl 2xl:text-5xl font-black text-inci_yellow2 mb-6">
              {{ item.title }}
            </h2>
            <div v-html="item.htmlContent" class="plain-list"></div>
          </div>
        </div>
        <div
          class="w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:w-1/2 py-8 xxs:py-14 lg:py-0"
        >
          <div class="relative" data-aos="fade-left" data-aos-duration="800">
            <div
              class="w-1/2 xxs:w-2/3 sm:w-4/5 md:!w-5/6 h-72 2xl:h-96 bg-inci_blue2 ml-auto"
            >
              <Pic
                class="absolute top-1/2 -translate-y-1/2 left-0 h-80 xxs:h-96 lg:!h-[550px] 2xl:!h-[650px] object-cover"
                :src="item.image"
                :alt="item.title"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style></style>
<script>
import ImgOnCircle from "../components/ImgOnCircle.vue";
import LittleHero from "../components/LittleHero.vue";
import Pic from "../components/Pic.vue";
import {
  initFullScreen,
  destroyFullScreen,
  scrollToSection,
} from "@/components/fullPage.js";
import responsibilityService from "@/services/responsibilityService.js";
import pageSettingsService from "@/services/pageSettingService.js";
import slugify from "@/util/slugify.js";
export default {
  name: "responsibility",
  layout: "default",
  components: { LittleHero, ImgOnCircle, Pic },
  async asyncData({ i18n }) {
    const responsibilitys = await responsibilityService.getResponsibility(
      i18n.locale
    );
    var pageSettings = await pageSettingsService.getPageSetting(
      "responsibility",
      i18n.locale
    );
    pageSettings = pageSettings || {
      seoTitle: "",
      seoKeywords: "",
      seoDescription: "",
      image: "",
      title: "",
    };

    return { responsibilitys, pageSettings };
  },
  methods: {
    getSlugify(_url) {
      return slugify(_url);
    },
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
};
</script>
