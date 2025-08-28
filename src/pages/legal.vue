<template>
  <div>
    <LittleHero :title="pageSettings.title" :img="pageSettings.image" />
    <section class="container py-10 lg:py-20">
      <div class="grid grid-cols-10 gap-0 xl:gap-10">
        <div class="col-span-10 xl:col-span-7 space-y-40" data-aos="fade-right" data-aos-duration="800">
          <div id="Pp" class="scroll-mt-36 flex flex-col justify-center">
            <h2 class="text-2xl md:text-3xl 2xl:text-5xl font-black mb-5 lg:mb-10">
              {{ pageData.title }}
            </h2>
            <div v-html="pageData.htmlContent" class="plain-text"></div>
          </div>
        </div>
        <div class="hidden xl:block col-span-10 xl:col-span-3" data-aos="fade-left" data-aos-duration="800">
          <div class="sticky top-40 flex items-start">
            <ul class="nav nav-tabs flex flex-col list-none ml-auto" id="tabs-tabVertical" role="tablist">
              <li v-for="(item, index) in legalData" class="nav-item flex-grow text-center" role="presentation">
                <a :href="getUrl(item.url)" :target="getTarget(item.url)"
                  class="nav-link block font-light text-xl text-right relative pr-12 before:content-[''] before:w-5 before:h-5 before:border-2 before:border-inci_red before:rounded-full before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 after:content-[''] mb-16 after:w-px after:h-[72px] after:absolute after:right-2.5 after:top-6"
                  id="tabs-home-tabVertical" :class="{
  'text-inci_red': item.url == pageData.url,
  'before:bg-inci_red': item.url == pageData.url,
  'after:bg-inci_red': index + 1 < legalData.length,
}">{{ item.title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import LittleHero from "../components/LittleHero.vue";
import legalService from "../services/legalService.js";
import pageSettingsService from "@/services/pageSettingService.js";

export default {
  name: "legal",
  layout: "default",
  components: { LittleHero },
  async asyncData({ i18n, route, error }) {
    const legalData = await legalService.getLegal(i18n.locale);
    const pageSettings = (await pageSettingsService.getPageSetting(
      "legal",
      i18n.locale
    )) || { seoTitle: "", seoKeywords: "", seoDescription: "" };

    const pageData =
      legalData && legalData.length > 0
        ? legalData.filter((f) => f.url == route.params.url)[0]
        : { title: "" };
    if (!pageData) error({ statusCode: 404, message: "Not found" });

    pageSettings.route = pageSettings.route.replace("/:url", "");

    if (pageData && pageData.heroImage) {
      pageSettings.image = pageData.heroImage;
    }

    return { pageSettings, legalData, pageData };
  },
  methods: {
    getTarget(_url) {
      if (_url.indexOf("https://") > -1 || _url.indexOf("http://") > -1) {
        return "_blank";
      } else {
        return "_self";
      }
    },
    getUrl(_url) {
      if (_url.indexOf("https://") > -1 || _url.indexOf("http://") > -1) {
        return _url;
      }
      return (
        "/" + this.pageSettings.langCode + this.pageSettings.route + "/" + _url
      );
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
