<template>
  <div>
    <LittleHero
      v-show="pageSettings"
      :title="pageSettings.title"
      :img="pageSettings.image"
    />

    <section class="container py-10 lg:py-20">
      <div class="grid grid-cols-10 gap-0 lg:gap-10">
        <div class="col-span-10 lg:col-span-7">
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
            <div class="news-detail relative" v-if="pageData.image">
              <ImgOnCircle :img="pageData.image" :alt="pageData.title" />
            </div>
            <div
              class="2xl:ml-auto 3xl:ml-0 3xl:mr-auto w-4/5 3xl:w-3/5"
              data-aos="fade-left"
            >
              <h1 class="text-xl 2xl:text-2xl font-bold mb-4 2xl:mb-10">
                {{ pageData.title }}
              </h1>
              <span class="font-light text-lg">
                {{ formatDate(pageData.date) }}
              </span>
            </div>
          </div>

          <div
            v-html="pageData.htmlContent"
            class="py-10 lg:py-20 news-detail-div"
            data-aos="fade-up"
          ></div>

          <hr class="border-inci_gray my-5" data-aos="fade-up" />
          <div class="" data-aos="fade-up">
            <p class="text-base font-medium">{{ $t("ShareSocial") }}</p>
          </div>
          <div class="mt-2" data-aos="fade-up">
            <div class="flex space-x-1">
              <div id="fb-root"></div>

              <a
                :href="getFbUrl()"
                target="_blank"
                class="w-12 h-12 border border-inci_red rounded-full flex items-center justify-center text-inci_red hover:text-opacity-70 !cursor-pointer"
              >
                <span class="sr-only">Facebook</span>
                <svg
                  class="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                  aria-hidden="true"
                >
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </a>

              <a
                :href="getTwUrl()"
                target="_blank"
                class="w-12 h-12 border border-inci_red rounded-full flex items-center justify-center text-inci_red hover:text-opacity-70 !cursor-pointer"
              >
                <span class="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="nonzero"
                    d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                  />
                </svg>
              </a>

              <a
                :href="getLinkedinUrl()"
                target="_blank"
                class="w-12 h-12 border border-inci_red rounded-full flex items-center justify-center text-inci_red hover:text-opacity-70 !cursor-pointer"
              >
                <span class="sr-only">Linkedin</span>
                <svg
                  class="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <hr class="border-inci_gray my-5" data-aos="fade-up" />

          <div class="" data-aos="fade-up">
            <h2 class="text-2xl 2xl:text-3xl font-medium mb-4 2xl:mb-6">
              {{ $t("LatestNews") }}
            </h2>
            <NewsFromInci
              :data="latestNews"
              :base-url="'/' + this.$root.$i18n.locale + pageSettings.route"
            />
          </div>
        </div>

        <MediaSidebar :menu="sideMenu" />
      </div>
    </section>
  </div>
</template>
<style>
.news-detail > div > div {
  @apply mx-auto;
}

.news-detail > div > div > div {
  @apply left-1/2 -translate-x-1/2;
}
</style>
<script>
import ImgOnCircle from "../components/ImgOnCircle.vue";
import LittleHero from "../components/LittleHero.vue";
import Pic from "../components/Pic.vue";
import MediaSidebar from "../components/MediaSidebar.vue";
import pageSettingService from "../services/pageSettingService.js";
import mediaService from "../services/mediaService.js";
import NewsFromInci from "../components/NewsFromInci.vue";

export default {
  name: "news-detail",
  layout: "default",
  components: { LittleHero, MediaSidebar, ImgOnCircle, Pic, NewsFromInci },
  async asyncData({ i18n, route, error }) {
    if (!route.params || !route.params.id) {
      return error({ statusCode: 404, message: "Not found" });
    }
    var pageData = await mediaService.getNewsDetail(route.params.id);
    if (pageData == null) {
      error({ statusCode: 404, message: "Not found" });
    }
    var pageSettings = await pageSettingService.getPageSetting(
      "news-detail",
      i18n.locale
    );
    pageSettings = pageSettings || {
      seoTitle: "",
      seoKeywords: "",
      seoDescription: "",
      image: "",
      title: "",
      title2: "",
    };
    pageSettings.seoTitle = pageData.title;
    pageSettings.fullPath = route.fullPath;
    var sideMenu = await pageSettingService.getMediaSideMenu(i18n);
    var _route = pageSettings.route.replace("/:id", "");
    _route = _route.substr(1, _route.length);
    sideMenu.forEach(function (t, i) {
      if (t.url.indexOf(_route) > -1) {
        t.isActive = true;
      }
    });

    var pageFilter = { page: 1, limit: 3, langCode: i18n.locale };
    var newsResult = await mediaService.getNews(pageFilter);
    var latestNews = newsResult.result;

    return {
      pageSettings,
      sideMenu,
      pageData,
      latestNews,
    };
  },
  methods: {
    getFbUrl() {
      return (
        "https://facebook.com/sharer.php?u=https://www.inciholding.com" +
        this.pageSettings.fullPath
      );
    },
    getTwUrl() {
      return (
        "http://twitter.com/share?text=" +
        this.pageData.title +
        "&url=https://www.inciholding.com" +
        this.pageSettings.fullPath
      );
    },
    getLinkedinUrl() {
      return (
        "http://www.linkedin.com/shareArticle?mini=true&url=https://www.inciholding.com" +
        this.pageSettings.fullPath +
        "&title=" +
        this.pageData.title +
        "&source=https://www.inciholding.com"
      );
    },
    formatDate(date) {
      // format the date to be displayed in a readable format
      return new Date(date).toLocaleDateString("tr", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
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
        {
          vmid: "og:url",
          name: "og:url",
          property: "og:url",
          content: "https://www.inciholding.com" + this.pageSettings.fullPath,
        },
        {
          vmid: "og:type",
          name: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          vmid: "og:title",
          name: "og:title",
          property: "og:title",
          content: this.pageSettings.seoTitle,
        },
        {
          vmid: "og:description",
          name: "og:description",
          property: "og:description",
          content: this.pageData.description,
        },
        {
          vmid: "og:image",
          name: "og:image",
          property: "og:image",
          content: this.pageData.image,
        },
      ],
      script: [
        {
          hid: "fb",
          src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0",
          defer: true,
          // changed after script load
          callback: () => {
            FB.XFBML.parse();
          },
        },
      ],
    };
  },
};
</script>
