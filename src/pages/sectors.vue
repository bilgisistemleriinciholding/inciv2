<template>
  <div>
    <LittleHero
      v-show="pageSettings"
      :title="pageSettings.title"
      :img="pageSettings.image"
    />

    <section class="bg-inci_gray_extra_light overflow-hidden">
      <div class="relative">
        <div
          class="container inline-flex flex-row items-center md:justify-center gap-9 2xl:gap-12 3xl:gap-16 py-6 overflow-x-auto max-w-full"
        >
          <a
            :title="item.name"
            v-for="item in brands"
            class="grayscale hover:grayscale-0 before:opacity-0"
            :class="
              activeContentId == getSlugify(item.name)
                ? 'active-company grayscale-0'
                : ''
            "
            href="javascript:void(0)"
            @click="changeContent(getSlugify(item.name))"
          >
            <Pic
              class="w-auto max-w-[100px] max-h-5 2xl:max-h-10 3xl:max-h-14"
              :src="item.logo"
              :alt="item.name"
            />
          </a>
        </div>

        <div class="flex flex-col mb-4">
          <div class="h-56">
            <div class="w-full h-full relative" v-if="sectorLoaded == true">
              <transition name="left" v-show="sectorLoaded == true">
                <Pic
                  class="w-full h-full object-cover"
                  :src="sectorImage"
                  :alt="sectorName"
                />
              </transition>
              <p
                class="inline-block absolute left-0 bottom-6 md:bottom-12 z-10"
                v-if="sectorLoaded == true"
              >
                <span
                  class="text-2xl md:text-3xl 2xl:text-5xl font-normal text-white relative pl-7 before:content-[''] before:w-5 before:h-9 before:bg-inci_red before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2"
                  >{{ sectorName }}</span
                >
              </p>
            </div>
          </div>

          <div class="w-full overflow-y-scroll">
            <div
              v-show="activeContentId == getSlugify(item.name)"
              v-for="item in brands"
              class="bg-white px-4 sm:px-7 3xl:px-10 pt-10 3xl:pt-16 pb-7 3xl:pb-10 h-full"
            >
              <h2 class="text-xl 2xl:text-2xl 3xl:text-3xl font-extrabold">
                {{ item.name }}
              </h2>
              <h3
                class="text-xl 2xl:text-2xl 3xl:text-3xl font-light mb-4 3xl:mb-8"
              >
                {{ item.title }}
              </h3>
              <div v-html="item.description.replaceAll('\n','<br/>')" class="plain-text"></div>

              <a
                :title="item.name"
                target="_blank"
                :href="item.externalUrl"
                class="group flex flex-row items-end mt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 3xl:w-10 h-7 3xl:h-10 stroke-inci_red group-hover:stroke-inci_red_dark"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>

                <p class="flex flex-col">
                  <span class="text-xs lg:text-base 2xl:text-base font-light">
                    {{ $t("ViewMoreSectors") }}
                  </span>
                  <span
                    class="text-sm lg:text-base 2xl:text-xl font-bold text-inci_red group-hover:text-inci_red_dark"
                    >{{ item.externalUrl }}</span
                  >
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div style="display: none" v-for="s in brands">
      <Pic :src="s.banner" />
    </div>
  </div>
</template>
<style></style>
<script>
import LittleHero from "../components/LittleHero.vue";
import sectorService from "@/services/sectorService.js";
import pageSettingsService from "@/services/pageSettingService.js";
import Pic from "../components/Pic.vue";
import slugify from "@/util/slugify.js";

export default {
  name: "sectors-and-organizations",
  layout: "default",

  data() {
    return {
      loaded: false,
      sectorLoaded: false,
      activeContentId: "",
      sectorName: "",
      sectorImage: "",
    };
  },
  components: { LittleHero, Pic },
  async asyncData({ i18n }) {
    const sectors = await sectorService.getAllSectors(i18n.locale);
    var pageSettings = await pageSettingsService.getPageSetting(
      "sectors",
      i18n.locale
    );
    pageSettings = pageSettings || {
      seoTitle: "",
      seoKeywords: "",
      seoDescription: "",
      image: "",
      title: "",
    };
    var brands = [];
    sectors.forEach(function (t, i) {
      if (t.brand)
        t.brand.forEach(function (tt, ii) {
          tt.sectorImage = tt.banner;
          tt.sectorName = t.title;
          brands.push(tt);
        });
    });
    return { sectors, brands, pageSettings };
  },
  methods: {
    changeContent(contentId) {
      var $this = this;
      this.loaded = false;
      var selectedBrand = $this.brands.filter(
        (f) => this.getSlugify(f.name) == contentId
      )[0];
      var selectedBrandOld = $this.brands.filter(
        (f) => this.getSlugify(f.name) == $this.activeContentId
      )[0];
      if (!selectedBrandOld && selectedBrand) {
        $this.sectorLoaded = false;
        $this.sectorName = selectedBrand.sectorName;
        $this.sectorImage = selectedBrand.sectorImage;
      }
      if (
        selectedBrand &&
        selectedBrandOld &&
        selectedBrand.brandId != selectedBrandOld.brandId
      ) {
        $this.sectorLoaded = false;
      }

      $this.activeContentId = contentId;
      setTimeout(function () {
        $this.loaded = true;
        if ($this.sectorLoaded == false) {
          $this.sectorName = selectedBrand.sectorName;
          $this.sectorImage = selectedBrand.sectorImage;
          $this.sectorLoaded = true;
        }
        setTimeout(function () {
          document.body.classList.remove("overflow-hidden");
        }, 1);
      }, 200);
    },
    getSlugify(_url) {
      return slugify(_url);
    },
  },
  mounted() {
    var $this = this;
    var contentId = $this.getSlugify(this.brands[0].name);
    var _hash = location.hash;
    if (_hash) {
      _hash = _hash.replace("#", "");
      var sectorLink = false;
      $this.sectors.forEach(function (v, i) {
        var _sectorSlug = slugify(v.title.toLowerCase());
        if (_hash == _sectorSlug && v.brand && v.brand.length > 0) {
          contentId = $this.getSlugify(v.brand[0].name);
          sectorLink = true;
        }
      });

      if (sectorLink == false) contentId = _hash;
    }

    $this.changeContent(contentId);
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
