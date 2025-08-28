<template>
  <div>
    <div class="full-screen" id="screen-0">
      <LittleHero v-show="pageSettings"
                  :title="pageSettings.title"
                  :img="pageSettings.image" />
    </div>

    <section v-for="(item, index) in sustainabilitys">
      <div v-if="index == 0"
           :id="getSlugify(item.title1 + ' ' + item.title2 + ' ' + item.title3)"
           class="lg:h-screen py-16 flex flex-col-reverse gap-20 justify-center lg:items-center lg:relative full-screen lg:flex-row-reverse">
        <div class="mx-auto w-full max-w-screen-3xl float-right"
             data-aos="fade-left"
             data-aos-duration="800">
          <div class="px-4 sm:px-8 lg:w-1/2 xl:px-16 text-center ml-auto">
            <h2 class="text-3xl 2xl:text-5xl font-black text-inci_blue3 mb-6">
              <span class="block">{{ item.title1 }}</span>
              <span class="block italic font-thin text-black my-1">
                {{
                item.title2
                }}
              </span>
              <span class="block">{{ item.title3 }}</span>
            </h2>
            <div v-html="item.htmlContent" class="plain-text"></div>
          </div>
        </div>
        <div class="w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:w-1/2">
          <div class="relative"
               data-aos="fade-right"
               data-aos-delay="100"
               data-aos-duration="800">
            <div class="w-4/5 h-48 lg:h-64 xl:h-80 2xl:h-[400px] bg-inci_blue_light mr-auto">
              <div class="absolute top-1/2 -translate-y-1/2 right-0">
                <div data-aos="rotate-right"
                     data-aos-delay="100"
                     data-aos-duration="1200"
                     data-aos-anchor-placement="top-bottom">
                  <Pic class="h-64 md:h-72 lg:h-96 xl:h-[500px] 2xl:h-[700px] object-cover"
                       :src="item.image"
                       :alt="item.title1 + ' ' + item.title2 + ' ' + item.title3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="index == 1"
           :id="getSlugify(item.title1 + ' ' + item.title2 + ' ' + item.title3)"
           class="lg:h-screen py-16 flex flex-col-reverse gap-20 justify-center lg:items-center lg:relative full-screen lg:flex-row">
        <div class="mx-auto w-full max-w-screen-3xl float-left"
             data-aos="fade-right"
             data-aos-duration="800">
          <div class="px-4 sm:px-8 lg:w-1/2 xl:px-16 text-center mr-auto">
            <h2 class="text-3xl 2xl:text-5xl font-black text-inci_pink mb-6">
              <span class="block">{{ item.title1 }}</span>
              <span class="block italic font-thin text-black my-1">
                {{
                item.title2
                }}
              </span>
              <span class="block">{{ item.title3 }}</span>
            </h2>
            <div v-html="item.htmlContent" class="plain-text"></div>
          </div>
        </div>
        <div class="w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:w-1/2">
          <div class="relative"
               data-aos="fade-left"
               data-aos-delay="100"
               data-aos-duration="800">
            <div class="w-4/5 h-48 lg:h-64 xl:h-80 2xl:h-[400px] bg-inci_pink_light ml-auto">
              <div class="absolute top-1/2 -translate-y-1/2 left-0">
                <div data-aos="rotate-left"
                     data-aos-delay="100"
                     data-aos-duration="1200"
                     data-aos-anchor-placement="top-bottom">
                  <Pic class="h-64 md:h-72 lg:h-96 xl:h-[500px] 2xl:h-[700px] object-cover"
                       :src="item.image"
                       :alt="item.title1 + ' ' + item.title2 + ' ' + item.title3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="index == 2"
           :id="getSlugify(item.title1 + ' ' + item.title2 + ' ' + item.title3)"
           class="lg:h-screen py-16 flex flex-col-reverse gap-20 justify-center lg:items-center lg:relative full-screen lg:flex-row-reverse">
        <div class="mx-auto w-full max-w-screen-3xl float-right"
             data-aos="fade-left"
             data-aos-duration="800">
          <div class="px-4 sm:px-8 lg:w-1/2 xl:px-16 text-center ml-auto">
            <h2 class="text-3xl 2xl:text-5xl font-black text-inci_green2 mb-6">
              <span class="block">{{ item.title1 }}</span>
              <span class="block italic font-thin text-black my-1">
                {{
                item.title2
                }}
              </span>
              <span class="block">{{ item.title3 }}</span>
            </h2>
            <div v-html="item.htmlContent" class="plain-text"></div>
          </div>
        </div>
        <div class="w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:w-1/2">
          <div class="relative"
               data-aos="fade-right"
               data-aos-delay="100"
               data-aos-duration="800">
            <div class="w-4/5 h-48 lg:h-64 xl:h-80 2xl:h-[400px] bg-inci_green_light mr-auto">
              <div class="absolute top-1/2 -translate-y-1/2 right-0">
                <div data-aos="rotate-right"
                     data-aos-delay="100"
                     data-aos-duration="1200"
                     data-aos-anchor-placement="top-bottom">
                  <Pic class="h-64 md:h-72 lg:h-96 xl:h-[500px] 2xl:h-[700px] object-cover"
                       :src="item.image"
                       :alt="item.title1 + ' ' + item.title2 + ' ' + item.title3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="index == 3"
           :id="getSlugify(item.title1 + ' ' + item.title2 + ' ' + item.title3)"
           class="lg:h-screen py-16 flex flex-col-reverse gap-20 justify-center lg:items-center lg:relative full-screen lg:flex-row">
        <div class="mx-auto w-full max-w-screen-3xl float-left"
             data-aos="fade-right"
             data-aos-duration="800">
          <div class="px-4 sm:px-8 lg:w-1/2 xl:px-16 text-center mr-auto">
            <h2 class="text-3xl 2xl:text-5xl font-black text-inci_brown mb-6">
              <span class="block">{{ item.title1 }}</span>
              <span class="block italic font-thin text-black my-1">
                {{
                item.title2
                }}
              </span>
              <span class="block">{{ item.title3 }}</span>
            </h2>
            <div v-html="item.htmlContent" class="plain-text"></div>
          </div>
        </div>
        <div class="w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:w-1/2">
          <div class="relative"
               data-aos="fade-left"
               data-aos-delay="100"
               data-aos-duration="800">
            <div class="w-4/5 h-48 lg:h-64 xl:h-80 2xl:h-[400px] bg-inci_brown_light ml-auto">
              <div class="absolute top-1/2 -translate-y-1/2 left-0">
                <div data-aos="rotate-left"
                     data-aos-delay="100"
                     data-aos-duration="1200"
                     data-aos-anchor-placement="top-bottom">
                  <Pic class="h-64 md:h-72 lg:h-96 xl:h-[500px] 2xl:h-[700px] object-cover"
                       :src="item.image"
                       :alt="item.title1 + ' ' + item.title2 + ' ' + item.title3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="index == 4"
           :id="getSlugify(item.title1 + ' ' + item.title2 + ' ' + item.title3)"
           class="h-auto lg:h-[45vh] relative full-screen mt-10">
        <Pic class="w-full h-96 lg:h-full object-cover"
             :src="item.image"
             :alt="item.title1 + ' ' + item.title2 + ' ' + item.title3" />
        <div class="absolute inset-0 mx-auto max-w-7xl flex flex-col items-center justify-center text-center"
             data-aos="fade-up"
             data-aos-duration="1000">
          <h2 class="text-3xl lg:text-5xl 2xl:text-7xl font-bold text-inci_blue4 mb-10 drop-shadow-sm">
            <span class="block">{{ item.title1 }}</span>
            <span class="block font-anydore font-thin text-inci_green -my-1">
              {{ item.title2 }}
            </span>
            <span class="block">{{ item.title3 }}</span>
          </h2>
        </div>
      </div>
    </section>
    
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-10 lg:px-20 gap-10 my-10">
      <div v-for="(item, index) in sustainabilitys" v-if="index > 4"
          :id="getSlugify(item.title1 + ' ' + item.title2 + ' ' + item.title3)"
          class="h-auto lg:h-full relative full-screen">
        <Pic class="w-full h-80 xl:h-[450px] object-cover"
            :src="item.image"
            :alt="item.title1 + ' ' + item.title2 + ' ' + item.title3" />
        <div class="absolute inset-0 mx-auto max-w-7xl flex flex-col items-center justify-center text-center"
            data-aos="fade-up"
            data-aos-duration="1000">
          <h2 class="text-3xl lg:text-5xl 2xl:text-7xl font-bold text-inci_blue4 drop-shadow-sm mb-4">
            <span class="block">{{ item.title1 }}</span>
          </h2>
          <div v-html="item.htmlContent"></div>
        </div>
        <h2 class="text-xl xl:text-2xl 2xl:text-3xl text-zinc-700 mt-6 text-center">
          <span>
            {{
            item.title2
            }}
          </span>
          <span>{{ item.title3 }}</span>
        </h2>
      </div>
    </div>
  </div>
</template>
<style></style>
<script>
  import ImgOnCircle from "../components/ImgOnCircle.vue";
  import LittleHero from "../components/LittleHero.vue";
  import Pic from "../components/Pic.vue";
  import { initFullScreen, destroyFullScreen, scrollToSection } from "@/components/fullPage.js";
  import sustainabilityService from "@/services/sustainabilityService.js";
  import pageSettingsService from "@/services/pageSettingService.js";
  import slugify from "@/util/slugify.js";
  export default {
    name: "sustainability",
    layout: "default",
    mounted() {
      if (window.innerWidth > 1024) {
        initFullScreen();
      } else {
        const _sectionHash = location.hash.replace('#', '');
        if (_sectionHash)
          document
            .getElementById(_sectionHash).scrollIntoView({ behavior: "smooth" });
      }
    },
    destroyed() {
      if (window.innerWidth > 1024) {
        destroyFullScreen();
      }
    },
    components: { LittleHero, ImgOnCircle, Pic },
    async asyncData({ i18n }) {
      const sustainabilitys = await sustainabilityService.getSustainability(
        i18n.locale
      );
      var pageSettings = await pageSettingsService.getPageSetting(
        "sustainability",
        i18n.locale
      );
      pageSettings = pageSettings || {
        seoTitle: "",
        seoKeywords: "",
        seoDescription: "",
        image: "",
        title: "",
      };

      return { sustainabilitys, pageSettings };
    },
    methods: {
      getSlugify(_url) {
        return slugify(_url);
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
  };
</script>
