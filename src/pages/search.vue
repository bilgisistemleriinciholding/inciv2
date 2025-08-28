<template>
  <div>
    <LittleHero title="" :img="headerImage" />

    <div
      class="container relative grid grid-cols-1 2xl:grid-cols-3 items-center gap-12 2xl:gap-32 py-20 2xl:py-32"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div class="col-span-1 2xl:col-span-2 z-10">
        <h2 class="text-2xl 2xl:text-5xl font-black mb-10 2xl:mb-24">
          {{ $t("SearchResult") }}: {{ query }}
        </h2>
        <ul class="list-none" v-if="searchResults.length > 0">
          <li v-for="res in searchResults" class="">
            <a
              :href="res.url"
              class="block text-lg 2xl:text-2xl font-light border-b border-inci_gray_light py-5 2xl:py-8"
              v-html="res.description"
            ></a>
          </li>
        </ul>
      </div>
      <div
        class="col-span-1 flex items-center h-full absolute 2xl:static inset-0 right-0 opacity-5 2xl:opacity-100"
      >
        <Pic
          class="w-full h-full max-h-[300px] object-contain 2xl:mb-40"
          :src="resultsSearchIcon"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<style></style>
<script>
import ImgOnCircle from "../components/ImgOnCircle.vue";
import LittleHero from "../components/LittleHero.vue";
import Pic from "../components/Pic.vue";
import pageSettingsService from "@/services/pageSettingService.js";

export default {
  name: "results",
  layout: "default",
  data() {
    return {
      headerImage: "img/results-header.jpg",
      resultsSearchIcon: "img/results-search.png",
      searchResults: [],
      query: "",
      limit: 10,
      page: 0,
    };
  },
  mounted() {
    var _this = this;
    try {
      this.query = this.$route.query.search;

      if (this.query.length >= 3) {
        pageSettingsService
          .search(this.$root.$i18n.locale, this.query)
          .then(function (_data) {
            _this.searchResults = _data;
          });
      } else {
        this.$nuxt.context.error({
          status: 400,
          message: "Not Found",
        });
      }
    } catch (error) {
      this.$nuxt.context.error({
        status: 400,
        message: "Not Found",
      });
    }
  },
  components: { LittleHero, ImgOnCircle, Pic },
};
</script>
