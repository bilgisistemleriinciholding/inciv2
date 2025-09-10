<template>
  <div>
    <Hero v-if="heroData" :hero-data="heroData" :stories="stories" />

    <section
      v-if="sectorData"
      id="section-2"
      class="container md:h-screen py-12 flex lg:block items-center justify-center full-screen"
    >
      <div class="relative w-full h-full flex flex-col items-center mt-14">
        <div
          class="lg:absolute lg:left-[5%] lg:bottom-[10%] lg:-translate-y-1/2 mb-6 lg:mb-0 z-10"
        >
          <h1
            class="text-inci_red text-6xl lg:text-7xl xl:text-8xl 2xl:text-[150px] leading-none font-bold"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {{ $t("Sectors") }}
          </h1>
          <h1 class="stroke-text" data-aos="fade-left" data-aos-duration="900">
            {{ $t("AndOrganizations") }}
          </h1>
        </div>
        <div
          class="w-full grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-5 overflow-hidden lg:absolute bottom-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div
            v-for="item in sectorData"
            :id="'sector' + item.sort"
            class="shrink-0 lg:grayscale hover:grayscale-0 transition duration-500 sectors-home"
          >
            <div
              :style="{ backgroundImage: 'url(\'' + item.image + '\')' }"
              class="w-full h-[20vh] lg:h-[90vh] relative bg-local lg:!bg-center bg-cover bg-no-repeat px-8 lg:px-16 py-8 lg:py-20 flex"
            >
              <div class="mt-auto">
                <h3
                  class="uppercase text-base lg:text-2xl xl:text-4xl text-white font-extrabold"
                >
                  <a
                    :href="
                      '/' +
                      getLocale() +
                      sectorSettings.route +
                      '#' +
                      getSlugify(item.title)
                    "
                  >
                    {{ item.title }}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="section-3"
      class="h-screen pt-16 pb-4 md:py-12 full-screen flex flex-col items-end justify-end"
    >
      <div class="mx-auto text-center md:hidden mb-2">
        <h1
          class="text-inci_red text-5xl leading-none font-bold"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          {{ $t("HomepageNewsTitle1") }}
        </h1>
        <h1 class="stroke-text" data-aos="fade-left" data-aos-duration="900">
          {{ $t("HomepageNewsTitle2") }}
        </h1>
      </div>

      <div
        class="w-full grid grid-cols-2 lg:flex lg:flex-row items-center lg:overflow-hidden"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div
          class="w-full relative grow flex-1 transition-all duration-1000 h-[38vh] lg:h-[80vh] overflow-hidden effect-marley-wrap"
          v-for="item in homeNews"
        >
          <a
            class="absolute inset-0"
            :href="detailPageSettings.route.replace(':id', item.path)"
          ></a>
          <Pic
            v-if="item.image"
            class="w-full h-full object-cover transition-all duration-1000 lg:grayscale"
            :src="item.image"
            :alt="item.title"
          />

          <!--lg:grayscale lg:grayscale-0-->

          <a
            :href="detailPageSettings.route.replace(':id', item.path)"
            class="uppercase text-xs md:text-base lg:text-2xl text-white leading-5 md:leading-7 lg:leading-10 bg-black bg-opacity-50 p-1 lg:p-6 min-w-full absolute left-0 bottom-0 lg:-bottom-full effect-marley transform-gpu line-clamp-3"
          >
            {{ item.title }}
          </a>
          <!-- <span
            class="md:hidden absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-xs h-6 p-1"
            >Devamı..</span> -->
        </div>
      </div>

      <a
        :href="
          '/' + getLocale() + newsPageSettings.route.replace('/:page?', '')
        "
        class="text-base xl:text-2xl hover:text-inci_red underline flex flex-row items-center gap-2 mt-4 mr-3"
      >
        {{ $t("MoreNews") }}

        <span class="text-inci_red">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </a>
    </section>

    <!-- Bir Bakışta İnci -->
    <section
      id="section-4"
      class="container md:h-screen py-10 md:py-32 xl:pt-28 xl:pb-48 full-screen"
    >
      <div class="">
        <h1
          class="uppercase font-bold text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-center mb-8 md:mb-10 3xl:mb-14"
        >
          {{ $t("HomepageCirclesTitle") }}
        </h1>
        <span
          class="w-1 md:w-1.5 h-8 md:h-10 3xl:h-14 bg-black block mx-auto"
        ></span>
      </div>

      <div class="flex md:hidden flex-col justify-center items-center mt-10">
        <div class="flex flex-row">
          <div
            v-if="circles[0]"
            data-aos="fade-right"
            data-aos-duration="800"
            class="flex flex-col justify-center items-center text-center w-40 h-40 rounded-full border border-inci_red text-inci_red"
          >
            <span class="font-bold text-4xl count">
              <number
                :from="0"
                :to="circles[0].line3"
                :duration="1"
                easing="Power1.easeOut"
              />
            </span>
            <span class="text-base leading-4">
              {{ circles[0].line4 }}
            </span>
          </div>
          <div
            v-if="circles[1]"
            data-aos="fade-left"
            data-aos-duration="800"
            class="flex flex-col justify-center items-center text-center w-40 h-40 rounded-full border border-inci_red bg-inci_red text-white -ml-4"
          >
            <span class="text-base leading-4">{{ circles[1].line2 }}</span>
            <span class="font-bold text-4xl count">
              {{ circles[1].line3 }}
              <!--<number :from="0"
                      :to=""
                      :duration="1"
                      easing="Power1.easeOut" />-->
            </span>
            <span class="text-base leading-4">{{ circles[1].line4 }}</span>
          </div>
        </div>
        <div class="flex flex-row gap-3 xxs:gap-10 relative mt-28 mb-5">
          <div
            v-if="circles[2]"
            data-aos="fade-right"
            data-aos-duration="800"
            class="flex flex-col justify-center items-center text-center w-40 h-40 rounded-full border border-inci_red text-inci_red"
          >
            <span class="font-bold text-4xl count">
              <number
                :from="0"
                :to="circles[2].line3"
                :duration="1"
                easing="Power1.easeOut"
              />
            </span>
            <span class="text-base leading-4">{{ circles[2].line4 }}</span>
          </div>
          <div
            v-if="circles[3]"
            class="flex flex-col justify-center items-center text-center w-40 h-40 rounded-full border border-inci_red bg-inci_red text-white absolute -top-28 left-1/2 -translate-x-1/2"
          >
            <span class="font-bold text-4xl count">
              <number
                :from="0"
                :to="circles[3].line3"
                :duration="1"
                easing="Power1.easeOut"
              />
            </span>
            <span class="text-base leading-4 max-w-[90%]">{{
              circles[3].line4
            }}</span>
          </div>
          <div
            v-if="circles[4]"
            data-aos="fade-left"
            data-aos-duration="800"
            class="flex flex-col justify-center items-center text-center w-40 h-40 rounded-full border border-inci_red text-inci_red"
          >
            <span class="text-base leading-4 mt-2">{{ circles[4].line1 }}</span>
            <span class="text-base leading-4">
              {{ circles[4].line2 }}
            </span>
            <span class="font-bold text-4xl count">
              <number
                :from="0"
                :to="circles[4].line3"
                :duration="1"
                easing="Power1.easeOut"
              />
            </span>
            <span class="text-base leading-4">
              {{ circles[4].line4 }}
            </span>
          </div>
        </div>
        <div class="flex flex-row">
          <div
            v-if="circles[5]"
            data-aos="fade-right"
            data-aos-duration="800"
            class="flex flex-col justify-center items-center text-center w-40 h-40 rounded-full border border-inci_red bg-inci_red text-white -mr-4"
          >
            <span class="font-bold text-4xl count">
              <number
                :from="0"
                :to="circles[5].line3"
                :duration="1"
                easing="Power1.easeOut"
              />
            </span>
            <span class="text-base leading-4">{{ circles[5].line4 }}</span>
            <span class="text-base leading-4 max-w-[90%]">
              {{ circles[5].line5 }}
            </span>
          </div>
          <div
            v-if="circles[6]"
            data-aos="fade-left"
            data-aos-duration="800"
            class="flex flex-col justify-center items-center text-center w-40 h-40 rounded-full border border-inci_red text-inci_red"
          >
            <span class="text-base leading-4">{{ circles[6].line1 }}</span>
            <span class="text-base leading-4">{{ circles[6].line2 }}</span>
            <span class="font-bold text-4xl count">
              <number
                :from="0"
                :to="circles[6].line3"
                :duration="1"
                easing="Power1.easeOut"
              />
            </span>
            <span class="text-base leading-4">{{ circles[6].line4 }}</span>
          </div>
        </div>
      </div>
      <div
        class="hidden md:block relative mt-20 md:mt-40 xl:mt-48 2xl:mt-60 circle-container px-0"
        id="circle-animate"
      >
        <div
          class="flex flex-row items-center flex-wrap sm:flex-nowrap circle-gap md:absolute -top-[60%] circle-margin"
        >
          <div
            class="circle-item hidden"
            v-if="circles[1]"
            circle-order="2"
            data-delay="500"
          >
            <svg
              id="circle-2"
              class="root-svg circle2 max-w-[35vw] sm:max-w-none max-h-52 sm:max-h-full"
              viewBox="0 0 400 400"
            >
              <circle
                class="stroke-circle"
                cx="50%"
                cy="50%"
                r="50%"
                fill="transparent"
                stroke="#e30613"
                stroke-width="3"
              />
              <circle
                cx="50%"
                cy="50%"
                r="50%"
                fill="red"
                stroke="#e30613"
                stroke-width="3"
              />
              <g class="data-label">
                <text alignment-baseline="middle" text-anchor="middle">
                  <tspan
                    x="0"
                    data-dy="0"
                    dy="0"
                    class="svgTextWhiteThin animation-svg-text"
                    animation-speed="40"
                    data-delay="0"
                  >
                    {{ circles[1].line2 }}
                  </tspan>
                  <tspan
                    x="0"
                    data-dy="84"
                    dy="84"
                    class="svgTextWhiteBold animation-svg-text"
                    animation-speed="60"
                    data-delay="0"
                  >
                    {{ circles[1].line3 }}
                  </tspan>
                  <tspan
                    x="0"
                    data-dy="42"
                    dy="42"
                    class="svgTextWhiteThin animation-svg-text"
                    animation-speed="40"
                    data-delay="1000"
                  >
                    {{ circles[1].line4 }}
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
          <div
            class="circle-item hidden"
            v-if="circles[3]"
            circle-order="4"
            data-delay="2000"
          >
            <svg
              id="circle-4"
              class="root-svg circle2 max-w-[35vw] sm:max-w-none max-h-52 sm:max-h-full"
              viewBox="0 0 400 400"
            >
              <circle
                class="stroke-circle"
                cx="50%"
                cy="50%"
                r="50%"
                fill="transparent"
                stroke="#e30613"
                stroke-width="3"
              />

              <circle
                cx="50%"
                cy="50%"
                r="50%"
                fill="red"
                stroke="#e30613"
                stroke-width="3"
              />

              <g class="data-label">
                <text alignment-baseline="middle" text-anchor="middle">
                  <tspan
                    x="0"
                    data-dy="0"
                    dy="0"
                    class="svgTextWhiteBold animation-svg-text"
                    animation-speed="80"
                    data-delay="0"
                  >
                    {{ circles[3].line3 }}
                  </tspan>
                  <tspan
                    x="0"
                    data-dy="40"
                    dy="40"
                    class="svgTextWhiteThin animation-svg-text"
                    animation-speed="40"
                    data-delay="200"
                  >
                    {{ circles[3].line4 }}
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
          <div
            class="circle-item hidden mx-auto"
            circle-order="6"
            v-if="circles[5]"
            data-delay="3600"
          >
            <svg
              id="circle-6"
              class="root-svg circle2 max-w-[35vw] sm:max-w-none max-h-52 sm:max-h-full"
              viewBox="0 0 400 400"
            >
              <circle
                class="stroke-circle"
                cx="50%"
                cy="50%"
                r="50%"
                fill="transparent"
                stroke="#e30613"
                stroke-width="3"
              />

              <circle
                cx="50%"
                cy="50%"
                r="50%"
                fill="red"
                stroke="#e30613"
                stroke-width="3"
              />

              <g class="data-label">
                <text alignment-baseline="middle" text-anchor="middle">
                  <tspan
                    x="0"
                    data-dy="0"
                    dy="0"
                    class="svgTextWhiteBold animation-svg-text"
                    animation-speed="80"
                    data-delay="0"
                  >
                    {{ circles[5].line3 }}
                  </tspan>
                  <tspan
                    x="0"
                    data-dy="40"
                    dy="40"
                    class="svgTextWhiteThin animation-svg-text"
                    animation-speed="40"
                    data-delay="500"
                  >
                    {{ circles[5].line4 }}
                  </tspan>
                  <tspan
                    x="0"
                    data-dy="40"
                    dy="40"
                    class="svgTextWhiteThin animation-svg-text"
                    animation-speed="40"
                    data-delay="1200"
                  >
                    {{ circles[5].line5 }}
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
        </div>

        <div
          class="flex flex-row items-center flex-wrap sm:flex-nowrap circle-gap"
        >
          <div
            class="circle-item hidden"
            v-if="circles[0]"
            circle-order="1"
            data-delay="200"
          >
            <svg
              id="circle-1"
              class="root-svg circle1 max-w-[35vw] sm:max-w-none max-h-52 sm:max-h-full"
              viewBox="0 0 400 400"
            >
              <circle
                class="stroke-circle"
                cx="50%"
                cy="50%"
                r="50%"
                fill="transparent"
                stroke="#e30613"
                stroke-width="3"
              />

              <g class="data-label">
                <text alignment-baseline="middle" text-anchor="middle">
                  <tspan
                    x="0"
                    data-dy="0"
                    dy="0"
                    class="svgTextRedBold animation-svg-text"
                    animation-speed="40"
                  >
                    {{ circles[0].line3 }}
                  </tspan>
                  <tspan
                    x="0"
                    data-dy="40"
                    dy="40"
                    class="svgTextRedThin animation-svg-text"
                    animation-speed="40"
                    data-delay="200"
                  >
                    {{ circles[0].line4 }}
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
          <div
            class="circle-item hidden"
            v-if="circles[2]"
            circle-order="3"
            data-delay="1200"
          >
            <svg
              id="circle-3"
              class="root-svg circle1 max-w-[35vw] sm:max-w-none max-h-52 sm:max-h-full"
              viewBox="0 0 400 400"
            >
              <circle
                class="stroke-circle"
                cx="50%"
                cy="50%"
                r="50%"
                fill="transparent"
                stroke="#e30613"
                stroke-width="3"
              />

              <g class="data-label">
                <text alignment-baseline="middle" text-anchor="middle">
                  <tspan
                    x="0"
                    dy="0"
                    data-dy="0"
                    class="svgTextRedBold animation-svg-text"
                    animation-speed="40"
                    animation-delay="0"
                  >
                    {{ circles[2].line3 }}
                  </tspan>
                  <tspan
                    x="0"
                    dy="41"
                    data-dy="41"
                    class="svgTextRedThin animation-svg-text"
                    animation-speed="40"
                    data-delay="200"
                  >
                    {{ circles[2].line4 }}
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
          <div
            class="circle-item hidden"
            v-if="circles[4]"
            circle-order="5"
            data-delay="2400"
          >
            <svg
              id="circle-5"
              class="root-svg circle1 max-w-[35vw] sm:max-w-none max-h-52 sm:max-h-full"
              viewBox="0 0 400 400"
            >
              <circle
                class="stroke-circle"
                cx="50%"
                cy="50%"
                r="50%"
                fill="transparent"
                stroke="#e30613"
                stroke-width="3"
              />

              <g class="data-label">
                <text alignment-baseline="middle" text-anchor="middle">
                  <tspan
                    x="0"
                    dy="0"
                    data-dy="0"
                    class="svgTextRedThin animation-svg-text"
                    animation-speed="40"
                    data-delay="250"
                  >
                    {{ circles[4].line1 }}
                  </tspan>
                  <tspan
                    x="0"
                    dy="40"
                    data-dy="40"
                    class="svgTextRedThin animation-svg-text"
                    animation-speed="40"
                    data-delay="500"
                  >
                    {{ circles[4].line2 }}
                  </tspan>
                  <tspan
                    x="0"
                    dy="80"
                    data-dy="80"
                    class="svgTextRedBold animation-svg-text"
                    animation-speed="900"
                    animation-delay="500"
                  >
                    {{ circles[4].line3 }}
                  </tspan>
                  <tspan
                    x="0"
                    dy="40"
                    data-dy="40"
                    class="svgTextRedThin animation-svg-text"
                    animation-speed="40"
                    data-delay="1200"
                  >
                    {{ circles[4].line4 }}
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
          <div
            class="circle-item hidden"
            v-if="circles[6]"
            circle-order="7"
            data-delay="4400"
          >
            <svg
              id="circle-7"
              class="root-svg circle1 max-w-[35vw] sm:max-w-none max-h-52 sm:max-h-full"
              viewBox="0 0 400 400"
            >
              <circle
                class="stroke-circle"
                cx="50%"
                cy="50%"
                r="50%"
                fill="transparent"
                stroke="#e30613"
                stroke-width="3"
              />

              <g class="data-label">
                <text alignment-baseline="middle" text-anchor="middle">
                  <tspan
                    x="0"
                    dy="0"
                    data-dy="0"
                    class="svgTextRedThin animation-svg-text"
                    animation-speed="40"
                    data-delay="100"
                  >
                    {{ circles[6].line1 }}
                  </tspan>
                  <tspan
                    x="0"
                    dy="40"
                    data-dy="40"
                    class="svgTextRedThin animation-svg-text"
                    animation-speed="40"
                    data-delay="400"
                  >
                    {{ circles[6].line2 }}
                  </tspan>
                  <tspan
                    x="0"
                    dy="80"
                    data-dy="80"
                    class="svgTextRedBold animation-svg-text"
                    animation-speed="900"
                    animation-delay="0"
                  >
                    {{ circles[6].line3 }}
                  </tspan>
                  <tspan
                    x="0"
                    dy="41"
                    data-dy="41"
                    class="svgTextRedThin animation-svg-text"
                    animation-speed="40"
                    data-delay="1200"
                  >
                    {{ circles[6].line4 }}
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
    <!-- Bir Bakışta İnci -->

    <section
      id="section-5"
      class="container pt-20 pb-10 lg: md:h-screen full-screen flex items-center"
    >
      <div class="grid row-span-2 lg:grid-cols-2 gap-24 lg:gap-5 2xl:mt-auto">
        <div class="flex flex-col justify-center items-center lg:items-start">
          <img
            class="w-40 lg:w-60"
            src="~/static/img/surdurulebilirlik.png"
            alt=""
            data-aos="fade"
            data-aos-duration="800"
          />
          <h3
            class="xl:max-w-3xl text-2xl lg:text-4xl xl:text-5xl 3xl:text-6xl text-center lg:text-left font-bold text-inci_green relative max-w-[60%] xxs:max-w-none"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {{ $t("HomepageSustanbilityText") }}
            <a
              :href="$t('HomepageSustanbilityLink')"
              class="bg-inci_gray text-white w-7 lg:w-12 2xl:w-16 h-7 lg:h-12 2xl:h-16 rounded-full inline-flex items-center justify-center ml-1 md:ml-3 button-hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 lg:w-7 h-3 lg:h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </h3>
        </div>
        <div class="relative" data-aos="fade-up-left" data-aos-duration="900">
          <img
            id="cloud1"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-dept="20"
            class="absolute z-10 hidden lg:block parallax-item"
            style="top: 5%; left: -50%"
            src="~/static/img/cloud-1.png"
            alt=""
          />
          <img
            id="cloud2"
            data-aos="fade-left"
            data-aos-duration="900"
            data-dept="8"
            class="absolute z-10 parallax-item"
            style="top: 8%; left: 0%"
            src="~/static/img/cloud-2.png"
            alt=""
          />
          <img
            id="cloud3"
            data-aos="fade-left"
            data-dept="12"
            data-aos-duration="1800"
            class="absolute z-10 hidden lg:block parallax-item"
            style="top: 20%; left: 0"
            src="~/static/img/cloud-3.png"
            alt=""
          />
          <img
            id="cloud4"
            data-aos="fade-left"
            data-dept="15"
            data-aos-duration="1500"
            data-aos-delay="500"
            class="absolute z-10 parallax-item"
            style="transform: scale(0.9); top: 15%; left: 48%"
            src="~/static/img/cloud-3.png"
            alt=""
          />
          <img
            id="cloud5"
            data-aos="fade-left"
            data-dept="7"
            data-aos-duration="1000"
            class="absolute z-10 hidden md:block parallax-item"
            style="transform: scale(0.7); top: 15%; left: 90%"
            src="~/static/img/cloud-3.png"
            alt=""
          />
          <div class="relative w-3/4 md:w-3/5 lg:w-auto mx-auto">
            <img
              class="flex-shrink-0 hidden lg:block w-5/6 mx-auto"
              src="~/static/img/surdurulebilirlik_big-sade-gulsuz.png"
              alt=""
            />
            <img
              class="flex-shrink-0 block lg:hidden"
              src="~/static/img/surdurulebilirlik_big-sade.png"
              alt=""
            />
            <img
              class="lg:w-52 xl:w-56 absolute -right-[4%] top-[6.6%] xl:-right-[0.4%] xl:top-[10.9%] 2xl:right-[2.5%] 2xl:top-[14.1%] 3xl:right-[4.8%] 3xl:top-[16.9%] animate-spin-slow hidden lg:block"
              src="~/static/img/surdurulebilirlik-wings.png"
              alt=""
            />
            <img
              class="lg:w-52 xl:w-56 absolute -left-[0.6%] top-[9.6%] xl:left-[2.8%] xl:top-[14.1%] 2xl:left-[5.7%] 2xl:top-[17.9%] 3xl:left-[8.1%] 3xl:top-[20.5%] animate-spin-slow hidden lg:block"
              src="~/static/img/surdurulebilirlik-wings.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section
      id="section-6"
      class="container pt-20 pb-6 relative md:h-screen full-screen flex items-center"
    >
      <div
        class="flex flex-col h-full lg:flex-row items-center justify-center gap-5"
      >
        <div class="w-full lg:w-1/2">
          <div class="relative h-auto md:w-3/4 lg:w-auto mx-auto lg:mx-0">
            <img
              class="opacity-0 w-full sm:w-4/5 lg:w-auto mx-auto"
              src="~/static/img/incide-hayat-big-kadin.png"
            />

            <img
              class="absolute inset-0 top-14 sm:top-0 w-4/5 lg:w-auto mx-auto"
              src="~/static/img/incide-hayat-big-erkek.png"
              id="change-gender"
              alt=""
              data-dept="2"
              data-aos="fade-down-right"
              data-aos-duration="1000"
            />

            <img
              class="absolute inset-0 top-14 sm:top-0 w-4/5 lg:w-auto mx-auto"
              src="~/static/img/incide-hayat-big-kadin.png"
              id="change-gender2"
              alt=""
              data-dept="2"
              data-aos="fade"
              data-aos-delay="2000"
              data-aos-duration="1000"
            />
            <img
              data-aos="fade"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-dept="5"
              class="absolute left-[14%] top-[12%] w-20 sm:w-32 parallax-item"
              src="~/static/img/incide-hayat-star-two.png"
              alt=""
            />
            <img
              data-aos="fade"
              data-aos-duration="1000"
              data-aos-delay="500"
              class="absolute left-0 xl:left-[4%] bottom-[10%] w-36 sm:w-52"
              src="~/static/img/incide-hayat-sign.png"
              alt=""
            />
            <img
              data-aos="fade"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-dept="5"
              class="absolute right-[8%] sm:right-[12%] bottom-[2%] lg:bottom-[7%] w-20 sm:w-32 parallax-item"
              src="~/static/img/incide-hayat-star-alone.png"
              alt=""
            />
          </div>
        </div>

        <div class="w-full lg:w-1/2 -mt-2 sm:mt-0">
          <div class="flex flex-col items-center lg:items-start">
            <h3
              class="text-xl md:text-2xl lg:text-4xl xl:text-6xl text-center lg:text-left font-bold mb-3 xl:mb-10"
              data-aos="fade-up-left"
              data-aos-duration="800"
            >
              {{ $t("HomepageLifeAtIncıTitle") }}
            </h3>

            <p
              class="text-sm md:text-xl xl:text-2xl font-light text-center lg:text-left mb-5 xl:mb-20"
              data-aos="fade-up-left"
              data-aos-duration="900"
            >
              {{ $t("HomepageLifeAtIncıDesc1") }}

              {{ $t("HomepageLifeAtIncıDesc2") }}
            </p>
            <a
              class="bg-inci_red button-hover text-base xl:text-lg text-white px-8 xl:px-16 py-3 xl:py-7 inline-block"
              :href="'/' + this.$root.$i18n.locale + beInciSettings.route"
              data-aos="fade-up-left"
              data-aos-duration="1000"
              data-aos-offset="-200"
            >
              {{ $t("MoreInfo") }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <div
      class="hidden grow-[2] lg:grayscale-0 -hue-rotate-60 top-auto bottom-0"
    ></div>
  </div>
</template>
<style>
body {
  @apply md:overflow-hidden;
}
</style>
<script>
import animations from "@/components/index/indexAnimation.js";
import Pic from "../components/Pic.vue";
import Pic3 from "../components/Pic3.vue";

import Hero from "@/components/index/Hero.vue";
import heroService from "@/services/heroService.js";
import sectorService from "@/services/sectorService.js";
import pageSettingsService from "@/services/pageSettingService.js";
import mediaService from "@/services/mediaService.js";
import slugify from "@/util/slugify.js";

export default {
  layout: "default",
  name: "IndexPage",
  components: { Hero, Pic,Pic3 },
  async asyncData({ i18n }) {
    const heroData = await heroService.loadHero(i18n.locale);

    const stories = await heroService.loadStories(i18n.locale);
    const pageSettings = (await pageSettingsService.getPageSetting(
      "index",
      i18n.locale
    )) || { seoTitle: "", seoKeywords: "", seoDescription: "" };
    const sectorData = await sectorService.getSectors(i18n.locale);
    const newsPageSettings = await pageSettingsService.getPageSetting(
      "news",
      i18n.locale
    );

    const homeNews = (await mediaService.getHomeNews(i18n.locale)).result;
    var beInciSettings = await pageSettingsService.getPageSetting(
      "beinci",
      i18n.locale
    );

    var sectorSettings = await pageSettingsService.getPageSetting(
      "sectors",
      i18n.locale
    );

    var circles = await pageSettingsService.getCircles(i18n.locale);

    var detailPageSettings = await pageSettingsService.getPageSetting(
      "news-detail",
      i18n.locale
    );

    detailPageSettings = detailPageSettings || {
      seoTitle: "",
      seoKeywords: "",
      seoDescription: "",
      image: "",
      title: "",
      title2: "",
      route: "",
    };

    return {
      heroData,
      sectorData,
      pageSettings,
      homeNews,
      newsPageSettings,
      detailPageSettings,
      beInciSettings,
      sectorSettings,
      stories,
      circles,
    };
  },
  nuxtI18n: {
    paths: {
      tr: "/",
      en: "/",
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
    if (window.innerWidth > 767) {
      animations.init();
    }

    // updateCount(cccccc);
  },
  destroyed() {
    if (window.innerWidth > 767) {
      animations.destroy();
    }
  },
  methods: {
    getSlugify(_url) {
      return slugify(_url);
    },
    getLocale() {
      return this.$root.$i18n.locale;
    },

    theFormat(number) {
      return number.toFixed(2);
    },
    completed() {},
    playAnimation() {
      this.$refs.number2.play();
    },
  },
};
</script>
