<template>
  <div class="relative">
    <!-- header -->
    <header
      class="fixed top-0 left-0 right-0 z-30 transition-all"
      data-aos="fade-down"
      data-aos-duration="900"
      data-aos-once="true"
      data-aos-mirror="false"
    >
      <div class="container px-5">
        <div
          class="header-padd flex flex-row items-center justify-between pt-4 pb-4 sm:pt-8 xl:pt-10 3xl:pt-12 transition-all"
        >
          <a
            :href="'/' + this.$root.$i18n.locale"
            class="inline-block text-white flex-shrink-0 header-logo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              viewBox="0 0 841.89 595.28"
              fill="currentColor"
              class="w-16 md:w-24 xl:w-28 2xl:w-32"
            >
              <path
                d="M77.63 410.9h15.93v12.22H77.63zM77.63 431.41h15.93v76.33H77.63zM104.82 431.41v76.33h14.87V453.4l.31.11 31.03 54.23h15.93v-76.33h-14.87v53.05l-.2.08-30.3-53.13zM211.86 429.38c-23.71 0-35.3 17.77-35.3 40.29 0 22.11 11.06 40.06 34.87 40.06 18.71 0 29.76-10.93 33.15-28.14h-15.93c-1.9 9.45-8.2 14.34-16.89 14.34-14.57 0-18.93-13.95-18.93-26.26 0-14.54 5.95-26.46 19.24-26.46 9.23 0 14.44 4.47 16.58 13.19h15.93c-2.02-17.95-16.45-27.02-32.72-27.02zM253.33 431.41h15.93v76.33h-15.93zM253.33 410.9h15.93v12.22h-15.93zM306.66 431.41v76.33h15.92V473.5h29.77v34.24h15.95v-76.33h-15.95v28.91h-29.77v-28.91zM414.57 429.38c-16.79 0-36.68 9.59-36.68 40.19 0 29.96 19.13 40.16 36.68 40.16 16.88 0 36.64-9.46 36.64-40.24 0-30.52-20.07-40.11-36.64-40.11zm-.11 13.5c13.17 0 20.82 10.42 20.82 26.61 0 17.52-8.41 26.76-20.71 26.76-13.08 0-20.73-10.42-20.73-26.67-.01-17.76 8.81-26.7 20.62-26.7zM460.81 431.41v76.33h52.68v-13.85h-36.75v-62.48zM595.46 431.41h15.93v76.33h-15.93zM521.68 431.41v76.33h33.19c23.69 0 31.57-21.27 31.57-39.98 0-19.45-8.62-36.24-30.94-36.35h-33.82zm15.66 13.2h16.02c14.26.1 16.8 13.07 16.8 24.02 0 10.83-3.41 25.9-17.11 25.9h-15.71v-49.92zM622.64 431.41v76.33h14.89V453.4l.31.11 31.03 54.23h15.96v-76.33h-14.91v53.05l-.2.08-30.28-53.13zM731.04 429.38c-24.23 0-37.19 17.77-37.19 40.41 0 24.02 14.01 39.95 35.17 39.95 11.27 0 17.76-4.35 23.71-11.56.53 3.28 1.06 6.46 1.58 9.56h10.62V466.6h-31.88v12.86h17.77c-1.81 9.64-8.83 16.78-18.71 16.78-15.73 0-21.99-11.28-21.99-26.23 0-15.96 7.53-27.45 21.88-27.45 6.71 0 14.67 4.06 16.8 12.56h15.82c-1.91-16.48-15.95-25.74-33.58-25.74zM595.46 410.9h15.93v12.22h-15.93z"
              />
              <path
                d="M380.13 126.78c0-22.73 18.42-41.16 41.13-41.16 22.73 0 41.15 18.42 41.15 41.16 0 22.7-18.41 41.13-41.15 41.13-22.71.01-41.13-18.43-41.13-41.13z"
              />
              <path
                d="M348.28 185.01c18.22 28.27 28.7 61.95 28.7 98.06 0 34.09-9.4 65.94-25.73 93.16L388.13 393c18.55-32.38 29.14-69.9 29.14-109.92 0-42.16-11.7-81.59-32.16-115.15l-36.83 17.08zM494.28 185.01c-18.23 28.27-28.72 61.95-28.72 98.06 0 34.09 9.4 65.94 25.73 93.16L454.4 393c-18.54-32.38-29.14-69.9-29.14-109.92 0-42.16 11.69-81.59 32.16-115.15l36.86 17.08z"
              />
            </svg>
          </a>

          <div class="lang flex flex-row items-start gap-5 lg:gap-7">
            <div class="relative inline-block text-left">
              <a
                href="javascript:void(0)"
                v-if="this.$root.$i18n.locale === 'tr'"
                class="inline-flex items-center w-full justify-center border-none text-sm lg:text-xl font-medium text-white focus:outline-none focus:ring-0"
                @click="changeLanguage('en')"
                >EN</a
              >

              <a
                href="javascript:void(0)"
                v-if="this.$root.$i18n.locale !== 'tr'"
                class="inline-flex items-center w-full justify-center border-none text-sm lg:text-xl font-medium text-white focus:outline-none focus:ring-0"
                @click="changeLanguage('tr')"
                >TR</a
              >
            </div>

            <a
              @click="openSearch"
              class="mt-1 text-white"
              href="javascript:void(0)"
              data-toggle="dropdown"
              data-target="#searchBar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32.563 32.563"
                fill="none"
                stroke-width="3"
                stroke="currentColor"
                class="search-icon w-3.5 lg:w-5 h-3.5 lg:h-5"
              >
                <path
                  d="M15.5 2A13.5 13.5 0 1 1 2 15.5 13.5 13.5 0 0 1 15.5 2ZM32 32l-7-7"
                />
              </svg>
            </a>
            <!-- menu dropdown -->
            <div class="relative 2xl:ml-5 flex-shrink-0">
              <div>
                <button
                  type="button"
                  data-target="#mainMenu"
                  data-toggle="dropdown"
                  class="header-hamburger w-8 md:w-12 2xl:w-14 3xl:w-16 h-8 md:h-12 2xl:h-14 3xl:h-16 bg-inci_red flex flex-col items-center justify-center flex-shrink-0 gap-1 md:gap-1.5 cursor-pointer button-hover focus:outline-none focus:ring-0"
                >
                  <span class="sr-only">Open menu</span>
                  <span
                    class="bg-white w-4 md:w-6 2xl:w-7 3xl:w-8 h-0.5 xl:h-[3px] 2xl:h-1"
                  ></span>
                  <span
                    class="bg-white w-4 md:w-6 2xl:w-7 3xl:w-8 h-0.5 xl:h-[3px] 2xl:h-1"
                  ></span>
                </button>
              </div>

              <div
                class="header-main-menu hidden fixed top-0 right-0 bottom-0 h-screen z-20 w-96 pr-8 md:pr-14 py-8 md:py-16 bg-inci_red bg-opacity-95 focus:outline-none"
                :class="{ toggle: clicked }"
                id="mainMenu"
                data-animation="fade"
                role="menu"
                aria-expanded="false"
                aria-orientation="vertical"
                aria-labelledby="close-menu-button"
                tabindex="-1"
              >
                <div class="flex flex-col items-end gap-5 lg:gap-11 h-full">
                  <!-- close icon -->
                  <button
                    type="button"
                    data-toggle="close"
                    class="w-14 xl:w-16 2xl:w-[74px] h-14 xl:h-16 2xl:h-[74px] bg-inci_red flex flex-col items-center justify-center flex-shrink-0 gap-1.5 cursor-pointer button-hover focus:outline-none focus:ring-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#fff"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <!-- close icon -->
                  <ul
                    class="flex flex-col justify-between items-end text-right w-full h-full"
                  >
                    <li
                      class="menu-item"
                      :class="{ toggle: openMenuIndex == index }"
                      v-for="(menuItem, index) in menu"
                    >
                      <a
                        :href="getParentMenu(menuItem)"
                        class="inline-block max-w-max py-0.5 text-2xl no-decoration leading-6 text-white after:content-[''] after:w-0 after:h-0.5 after:bg-white after:block after:transition-all duration-100 hover:after:w-full"
                        @click="openMenu(index), (clicked = !clicked)"
                        role="menuitem"
                        tabindex="-1"
                        >{{ menuItem.text }}</a
                      >
                      <!-- menu in menu dropdown -->
                      <div
                        v-if="
                          menuItem.inverseParentMenu &&
                          menuItem.inverseParentMenu.length > 0
                        "
                        class="lg:fixed lg:top-0 lg:right-96 lg:bottom-0 lg:h-screen z-50 w-96 flex flex-col items-end text-right focus:outline-none sub-menu-item"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabindex="-1"
                      >
                        <div
                          class="hidden lg:flex items-end justify-end bg-[#b90b15] w-full flex-shrink-0 h-1/4 px-8 py-8"
                        >
                          <span
                            class="inline-block max-w-max py-0.5 text-2xl no-decoration leading-6 text-white after:content-[''] after:w-full after:h-0.5 after:bg-white after:block"
                            >{{ menuItem.text }}</span
                          >
                        </div>
                        <ul
                          class="flex flex-col items-end gap-3 lg:gap-5 text-right bg-[#a50812] bg-opacity-95 w-full lg:h-3/4 flex-shrink-0 px-8 py-8"
                        >
                          <!-- Active: "bg-gray-100", Not Active: "" -->
                          <li v-for="subItem in menuItem.inverseParentMenu">
                            <a
                              :href="subItem.url"
                              class="inline-block max-w-max text-xl font-extralight text-[#b7b7b7] hover:text-white transition-colors"
                              role="menuitem"
                              tabindex="-1"
                              >{{ subItem.text }}</a
                            >
                          </li>
                        </ul>
                      </div>
                      <!-- menu in menu dropdown -->
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- menu dropdown -->
          </div>
        </div>
      </div>
    </header>
    <!-- header -->
    <!-- search section -->
    <div
      class="h-screen fixed inset-0 z-40 hidden"
      id="searchBar"
      data-animation="slide"
    >
      <div
        class="h-[180px] bg-inci_red mx-auto flex justify-center items-center"
      >
        <div
          class="w-3/4 flex justify-between items-center border-white border-b h-20 md:h-28"
        >
          <input
            id="searchText"
            v-on:keyup.enter="gotoSearch"
            v-model="searchText"
            type="search"
            name="search"
            placeholder=""
            class="block w-[90%] text-sm md:text-2xl text-white placeholder-current bg-transparent py-10 focus:ring-0 focus:outline-none"
          />
          <button
            type="button"
            @click="gotoSearch()"
            class="inline-flex items-center rounded-md border border-white bg-transparent px-3 md:px-7 py-2 md:py-3 text-sm font-medium text-white shadow-sm hover:bg-inci_red_dark focus:outline-none focus:ring-0 focus:bg-inci_red_dark focus:ring-offset-1"
          >
            Ara
          </button>
        </div>
      </div>
      <div
        class="h-[calc(100vh-180px)] bg-white bg-opacity-60"
        data-toggle="close"
      >
        &nbsp;
      </div>
    </div>
    <!-- search section -->
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    menu: { type: Array, required: true, default: [] },
  },
  data() {
    return {
      i: 0,
      placeholder: "",
      text: "",
      speed: 180,
      windowInnerWidth: 0,
      openMenuIndex: -1,
      clicked: false,
      searchText: "",
    };
  },
  methods: {
    changeLanguage(lang) {
      var url = this.switchLocalePath(lang);
      window.location.href = url;
    },
    gotoSearch() {
      var url = "/" + this.$root.$i18n.locale + "/";
      if (this.$root.$i18n.locale == "tr") {
        url += "arama";
      } else {
        url += "search";
      }
      url += "?search=" + this.searchText;
      window.location.href = url;
    },
    openMenu(_index) {
      if (this.openMenuIndex == _index) {
        this.openMenuIndex = -1;
      } else {
        this.openMenuIndex = _index;
      }
    },
    getParentMenu(menuItem) {
      if (this.windowInnerWidth > 1024) {
        return menuItem.url;
      } else if (
        menuItem.inverseParentMenu != null &&
        menuItem.inverseParentMenu.length > 0
      ) {
        return "javascript:void(0)";
      }
      {
        return menuItem.url;
      }
    },
    openSearch() {
      this.text = $nuxt.$t('SearchWord');
      this.type();
    },
    type() {
      this.placeholder += this.text.charAt(this.i);
      document
        .getElementById("searchText")
        .setAttribute("placeholder", this.placeholder);
      this.i++;
      if (this.i > this.text.length) {
        this.i = 0;
        this.placeholder = "";
        setTimeout(this.type, this.speed * 5);
      } else {
        setTimeout(this.type, this.speed);
      }
    },
  },
  mounted() {
    this.windowInnerWidth = window.innerWidth;
  },
};
</script>
