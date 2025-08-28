<template>
  <div>
    <LittleHero v-show="pageSettings"
                :title="pageSettings.title"
                :img="pageSettings.image" />

    <section class="container py-10 lg:py-20">
      <div class="grid grid-cols-10 gap-0 lg:gap-10">
        <div class="col-span-10 lg:col-span-7">

          <div class="flex flex-col justify-center">
            <h2 class="text-2xl md:text-3xl 2xl:text-5xl font-black mb-5 lg:mb-10">
              {{pageSettings.title2}}
            </h2>
            <div v-if="pageSettings.htmlContent" v-html="pageSettings.htmlContent" class="text-base md:text-xl font-light mb-10">
            </div>
            <LogosFromInci :data="logos" />
          </div>

        </div>

        <MediaSidebar :menu="sideMenu" />

      </div>

      <div v-if="pageCount>1">
        <nav class="isolate inline-flex -space-x-px my-14"
             aria-label="Pagination">
          <a :href="getPrevPage()" v-if="getPrevPage()!=null"
             class="relative inline-flex items-center px-2 py-1 hover:text-inci_red focus:z-20">
            <span class="sr-only">Geri</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke="currentColor"
                 class="w-6 h-6">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
          </a>

          <a v-for="i in pageCount" :href="getFullPage(i)" :class="{'text-inci_red':currentPage==i}"
             aria-current="page"
             class="relative text-xl hover:text-inci_red font-medium inline-flex items-center border-r border-black px-4 focus:z-20 ">{{i}}</a>


          <a :href="getNextPage()" v-if="getNextPage()!=null"
             class="relative inline-flex items-center px-2 py-1 hover:text-inci_red focus:z-20">
            <span class="sr-only">İleri</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke="currentColor"
                 class="w-6 h-6">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </nav>
      </div>
    </section>
  </div>
</template>
<style></style>
<script>
  import LittleHero from "../components/LittleHero.vue";
  import MediaSidebar from "../components/MediaSidebar.vue";
  import LogosFromInci from "../components/LogosFromInci.vue";
  import pageSettingService from "../services/pageSettingService.js";
  import mediaService from "../services/mediaService.js";


  export default {
    name: "logos",
    layout: "default",
    components: { LittleHero, LogosFromInci, MediaSidebar },
    async asyncData({ i18n, route }) {
      var pageSettings = await pageSettingService.getPageSetting(
        "logos",
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

      var sideMenu = await pageSettingService.getMediaSideMenu(i18n);
      sideMenu.forEach(function (t, i) {
        if (route.fullPath.indexOf(t.url.replace('/:page?', '')) > -1) {
          t.isActive = true;
        }
      });

      var pageFilter = { page: 1, limit: 12, langCode: i18n.locale };
      var currentPage = 1;
      if (route.params.page) {
        pageFilter.page = parseInt(route.params.page);
        currentPage = pageFilter.page;
      }
      var logoResult = await mediaService.getLogos(pageFilter);
      var logos = logoResult.result;

      var pageCount = parseInt(Math.ceil(logoResult.totalCount / pageFilter.limit));


      return { pageSettings, sideMenu, logos, pageCount, currentPage };
    },
    methods: {
      getFullPage(i) {
        return '/' + this.$root.$i18n.locale + this.pageSettings.route.replace(':page?', i);
      },
      getNextPage() {
        if (this.currentPage >= this.pageCount)
          return null;
        return (this.getFullPage(this.currentPage + 1))
      },
      getPrevPage() {
        if (this.currentPage <= 1)
          return null;
        return (this.getFullPage(this.currentPage - 1))
      }
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
    }
  };
</script>
