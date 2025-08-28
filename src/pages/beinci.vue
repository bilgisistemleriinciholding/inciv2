<template>
  <div>
    <section class="lg:h-screen full-screen" id="screen-0">
      <LittleHero
        v-show="pageSettings"
        :title="pageSettings.title"
        :img="pageSettings.image"
      />

      <div>
        <div
          class="container relative text-center flex flex-col items-center justify-center space-y-10 max-w-7xl py-10 lg:pt-16 lg:pb-32 lg:h-[calc(100vh-320px)] 2xl:h-[calc(100vh-384px)]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <!-- <p class="">
            {{ pageSettings.title2 }}
          </p> -->
          <div v-html="pageSettings.htmlContent" class=""></div>
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            class="absolute left-1/2 -bottom-6 sm:-bottom-10 md:-bottom-7 lg:bottom-20 w-1 2xl:w-1.5 h-10 2xl:h-12 bg-black block mx-auto animate-bounce"
          ></span>
        </div>
      </div>
    </section>

    <section class="container lg:h-screen">
      <div class="grid grid-col-1 lg:grid-cols-2 gap-20 items-center h-full">
        <div class="h-full overflow-hidden">
          <div
            class="pt-16 lg:pt-28 flex flex-col justify-center full-screen incili-olmak-img-bg-wrap h-screen"
            v-for="(item, index) in flares"
            :id="getSlugify(item.title)"
          >
            <div class="p-4 w-full md:w-3/4 mb-2 md:mb-3 incili-olmak-img-bg">
              <Pic :src="item.image" :alt="item.title" class="w-full" />
            </div>
            <h2 class="text-xl md:text-2xl xl:text-3xl font-bold mb-4 md:mb-5">
              {{ item.title }}
            </h2>

            <div
              v-html="item.htmlContent"
              style="height: calc(100% - 188px)"
              class="plain-text-incili-olmak pb-10"
            ></div>
          </div>
        </div>
        <div
          class="hidden lg:flex flex-col items-center gap-12 h-full incili-olmak pt-36 pb-10"
        >
          <div class="flex flex-col items-center">
            <a
              v-if="flares[1]"
              href="javascript:void(0)"
              :data-scroll="getSlugify(flares[1].title)"
              data-aos="fade-down"
              @click="goToSection(2)"
              data-aos-duration="1000"
              class="w-24 md:w-40 2xl:w-48 3xl:w-56 h-24 md:h-40 2xl:h-48 3xl:h-56 flex flex-col items-center justify-center gap-2 border-2 2xl:border-4 border-inci_turquoise rounded-xl md:rounded-4xl development"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                viewBox="0 0 1080 1080"
                class="w-8 md:w-14 2xl:w-16 3xl:w-24 fill-inci_turquoise"
                fill="currentColor"
              >
                <path
                  d="M546.33 16.88c8.19 5.73 17.42 10.42 24.41 17.36 75.8 75.29 151.28 150.9 226.76 226.5 18.2 18.24 15.28 45.36-6.31 55.52-6.38 3-14.17 4.08-21.34 4.18-31.2.44-62.41.19-94.7.19v606.94H405.57V320.63h-12.16c-28.11 0-56.23-.05-84.34.02-16.02.04-28.95-5.22-35.73-20.78-6.39-14.68-3.1-26.88 10.64-40.63 75.04-75.06 150-150.19 225.3-224.98 6.99-6.94 16.2-11.64 24.39-17.38h12.66zM0 1023.05c7.28-20.94 22.52-27.66 43.94-27.64 330.69.31 661.38.32 992.07-.01 21.47-.02 36.6 6.84 43.99 27.65v12.66c-4.66 13.62-13.81 22.75-27.42 27.42H27.42c-13.5-4.78-22.83-13.73-27.42-27.42v-12.66z"
                />
                <path
                  d="M742.5 927.39v-12.2c0-125.77-.01-251.54 0-377.31.01-51.06 30.99-82.22 81.76-82.26 35.83-.02 71.67-.04 107.5 0 48.89.07 80.69 31.54 80.71 80.14.07 127.17.02 254.35.02 381.52v10.1c-89.93.01-179.29.01-269.99.01zM337.5 927.74h-270v-11.55c0-81.49-.03-162.98.01-244.47.02-49.52 31.43-81.02 80.79-81.09 36.53-.05 73.06-.08 109.59.01 47.46.12 79.49 31.86 79.57 79.12.13 82.89.04 165.79.04 248.69v9.29z"
                />
              </svg>
              <span
                class="text-center text-xs leading-3 md:text-base md:leading-5 2xl:text-xl 3xl:text-2xl text-inci_turquoise font-light w-3/4"
              >
                {{ flares[1].title }}
              </span>
            </a>
            <div class="flex flex-row items-center">
              <a
                v-if="flares[0]"
                :data-scroll="getSlugify(flares[0].title)"
                data-aos="fade-right"
                @click="goToSection(1)"
                data-aos-duration="1000"
                href="javascript:void(0)"
                class="w-24 md:w-40 2xl:w-48 3xl:w-56 h-24 md:h-40 2xl:h-48 3xl:h-56 flex flex-col items-center justify-center gap-2 border-2 2xl:border-4 border-inci_yellow rounded-xl md:rounded-4xl information"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xml:space="preserve"
                  viewBox="0 0 1080 1080"
                  class="w-8 md:w-14 2xl:w-16 3xl:w-24 fill-inci_yellow"
                  fill="currentColor"
                >
                  <path
                    d="M1080 371.5v8.42c-3.92 11.99-12.5 19.69-23 26.11-156.41 95.59-312.66 191.45-469.18 286.87-31.4 19.14-64.23 19.14-95.63 0-156.52-95.43-312.77-191.29-469.18-286.88C12.5 399.6 3.92 391.91 0 379.92v-8.42c5.59-12.84 15.74-20.47 28.07-26.61 156.4-77.82 312.68-155.9 469-233.9 28.6-14.27 57.25-14.27 85.86 0 156.32 78 312.59 156.07 469 233.9 12.33 6.14 22.48 13.77 28.07 26.61z"
                    class="st0"
                  />
                  <path
                    d="M558.98 979.71h-37.97c-3.43-.54-6.85-1.47-10.29-1.57-64.55-1.9-127.42-13.28-188.33-34.48-59.17-20.6-114.38-48.26-157.69-95.15-21.01-22.74-35.56-48.94-35.86-80.57-.6-62.76-.42-125.52-.06-188.28.14-25.43 10.51-34.28 34.74-19.3 99.59 61.54 199.52 122.55 299.52 183.44 51.09 31.11 102.79 31.12 153.88 0 102.38-62.37 204.49-125.18 306.89-187.52 6.18-3.76 13.92-4.98 20.94-7.38 2.19 7.8 6.21 15.58 6.27 23.39.51 63.81.52 127.63.07 191.44-.08 11.02-1.63 22.47-4.94 32.96-11.83 37.47-38.41 63.96-69.26 86.11-80.52 57.82-172.57 83.08-269.83 92.81-15.99 1.59-32.04 2.74-48.08 4.1zM1042.03 675.34c0 51.55.13 103.09-.15 154.64-.04 7.32 1.85 12.22 8.01 16.69 21.13 15.36 29.02 37.75 22.29 60.67-6.85 23.34-25.39 38.01-50.9 40.27-21.22 1.88-44.45-13.05-53.22-34.2-9.14-22.05-3.46-49.14 15.28-62.66 10.48-7.56 13.39-15.85 13.33-28.13-.46-90.82-.25-181.64-.24-272.46 0-21.65 16.18-41.79 37.34-45.87 1.99-.38 5.93 2.07 6.66 4.05 1.41 3.8 1.53 8.2 1.54 12.36.09 51.55.06 103.1.06 154.64z"
                    class="st0"
                  />
                </svg>
                <span
                  class="text-center text-xs leading-3 md:text-base md:leading-5 2xl:text-xl 3xl:text-2xl text-inci_yellow font-light w-3/4"
                >
                  {{ flares[0].title }}
                </span>
              </a>
              <img
                data-aos="fade"
                data-aos-duration="1000"
                class="w-20 md:w-32 2xl:w-48 m-1 md:m-2 2xl:m-5 flex-shrink-0 aspect-auto"
                src="~/static/img/incide-hayat-sign.png"
                alt=""
              />
              <a
                v-if="flares[2]"
                :data-scroll="getSlugify(flares[2].title)"
                data-aos="fade-left"
                @click="goToSection(3)"
                data-aos-duration="1000"
                href="javascript:void(0)"
                class="w-24 md:w-40 2xl:w-48 3xl:w-56 h-24 md:h-40 2xl:h-48 3xl:h-56 flex flex-col items-center justify-center gap-2 border-2 2xl:border-4 border-inci_orange rounded-xl md:rounded-4xl enjoy"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xml:space="preserve"
                  viewBox="0 0 1080 1080"
                  class="w-8 md:w-14 2xl:w-16 3xl:w-24 fill-inci_orange"
                  fill="currentColor"
                >
                  <path
                    d="M1075.39 928.42c-11.48 27.86-21.17 34.19-52.37 34.19H812.86c-5.43-43.86-19.6-83.27-43.38-119.83 26.28-28.65 57.81-47.23 95.53-54.85 93.35-18.85 181.28 33.9 208.66 124.89.29.96 1.13 1.76 1.71 2.64.01 4.32.01 8.64.01 12.96zM4.61 915.46c10.74-32.91 27.5-61.94 53.4-85.53 72.15-65.69 190.28-60.12 252.1 13.08-22.93 35.92-37.7 75.4-42.94 119.59H55.92c-29.99 0-40.12-6.75-51.3-34.19-.01-4.31-.01-8.63-.01-12.95zM4.61 254.82c3.46-1.48 6.85-4.05 10.39-4.26 29.42-1.74 58.86-3.33 88.31-4.3 8.11-.27 12.37-3.23 15.12-10.73 10-27.23 20.28-54.36 30.94-81.34 1.46-3.68 5.63-6.29 8.55-9.4 2.65 3.05 6.38 5.66 7.77 9.2 10.5 26.65 20.87 53.37 30.53 80.33 3.03 8.44 7.42 11.69 16.38 11.97 28.74.9 57.45 2.53 86.16 4.23 3.46.21 6.78 2.59 10.17 3.97-1.64 3.63-2.32 8.42-5.07 10.7-22.41 18.58-45.02 36.95-68.02 54.79-6.87 5.33-8.11 10.7-5.86 18.57 7.76 27.18 15.27 54.44 22.42 81.79 1.07 4.07-.33 8.79-.58 13.21-4.58-1.01-9.88-.87-13.61-3.22-23.37-14.77-46.56-29.83-69.41-45.39-7.89-5.37-13.95-6-22.22-.3-23.05 15.9-46.66 31.01-70.32 46.01-3.48 2.2-8.42 2.1-12.68 3.06-.34-4.26-1.84-8.81-.84-12.72 7.06-27.75 14.17-55.5 22.31-82.95 2.55-8.59.22-13.36-6.1-18.35-22.29-17.6-44.37-35.45-66.48-53.27-2.77-2.23-5.25-4.84-7.87-7.27.01-1.45.01-2.89.01-4.33zM540 1079.66c-56.82.01-113.65-.86-170.45.33-37.66.79-67.71-30.01-67.8-67.78-.11-44.11 4.17-86.33 24.39-126.33 43.54-86.16 135.4-137.37 231.6-130.9 100.38 6.76 201.55 82.48 218.92 205.53 3.31 23.45 2.05 48.35-1.8 71.81-4.68 28.46-31.09 47.19-60.09 47.28-58.25.16-116.51.05-174.77.06zM540.1 731.95c-66.2.03-120.9-54.46-121-120.52-.1-66.7 54.68-121.45 121.35-121.29 66.11.16 120.5 54.85 120.44 121.1-.05 66.23-54.55 120.69-120.79 120.71zM443.07 428.06c8.35-31.03 15.83-60.16 24.18-89.04 2.48-8.56 1.03-13.98-5.98-19.46-22.65-17.71-45-35.81-67.17-54.13-2.83-2.34-3.89-6.82-5.76-10.3 3.6-1.59 7.13-4.37 10.81-4.59 29.42-1.77 58.86-3.3 88.31-4.35 8.12-.29 11.13-4.69 13.57-11.25 10-26.85 20.05-53.68 30.55-80.34 1.49-3.79 5.51-6.58 8.36-9.83 2.87 3.22 6.93 5.97 8.42 9.74 10.4 26.3 20.6 52.7 30.13 79.33 3.14 8.78 7.61 12.25 17.14 12.5 29.1.77 58.17 2.51 87.23 4.24 2.99.18 8.14 2.74 8.25 4.45.2 3.19-1.7 7.62-4.23 9.71-22.17 18.31-44.48 36.48-67.21 54.1-7.67 5.94-9.58 11.62-6.72 21.11 7.84 26.03 14.72 52.36 21.47 78.71 1.19 4.66-.1 9.96-.25 14.96-4.88-1.26-10.47-1.4-14.53-3.96-23.67-14.96-47.11-30.3-70.33-45.95-6.64-4.47-11.82-4.55-18.52-.05-24.44 16.42-49.16 32.45-74.01 48.25-2.85 1.81-7.36 2.03-10.82 1.42-1.55-.28-2.44-4.39-2.89-5.27zM824.6 427.34c7.14-26.4 14.01-51.24 20.56-76.17 7.69-29.3 10.58-20.2-12.67-39.53-18.8-15.62-38.19-30.54-57.02-46.12-2.9-2.4-4.2-6.72-6.23-10.16 3.62-1.67 7.16-4.58 10.86-4.81 29.42-1.79 58.87-3.23 88.32-4.4 7.12-.28 10.93-3.02 13.43-9.79 10.17-27.56 20.71-54.98 31.5-82.3 1.4-3.54 4.99-6.22 7.57-9.3 2.94 3.12 7.16 5.73 8.63 9.43 10.7 26.96 21.03 54.07 31.06 81.29 2.56 6.96 6.17 10.41 13.94 10.69 29.46 1.09 58.9 2.61 88.32 4.34 3.45.2 6.76 2.65 10.14 4.05-1.68 3.61-2.41 8.36-5.18 10.65-22.44 18.56-45.04 36.94-68.09 54.73-6.86 5.29-8.26 10.53-6.01 18.4 7.75 27.19 15.25 54.45 22.4 81.8 1.07 4.09-.24 8.8-.45 13.22-4.56-.95-9.88-.72-13.56-3.05a2737.859 2737.859 0 0 1-70.32-46.01c-7.22-4.88-12.85-5.34-20.36-.21-23.74 16.19-47.89 31.77-72.15 47.17-3.14 1.99-7.87 2.24-11.74 1.89-1.35-.11-2.32-4.47-2.95-5.81zM178.37 758.42c-50.33.29-90.39-39.35-90.63-89.66-.23-49.59 39.7-90.04 89.07-90.22 50.03-.18 90.9 39.3 91.21 88.12.33 51.35-38.87 91.47-89.65 91.76zM992.3 668.38c.19 50.07-39.96 90.12-90.28 90.04-49.8-.08-89.96-39.87-90.04-89.23-.09-50.33 39.77-90.58 89.76-90.65 50.37-.07 90.36 39.6 90.56 89.84zM648.25 181.73c-4.96-4.63-12-8.23-13.48-13.42-1.51-5.28.57-13.89 4.38-17.94 11.52-12.25 24.64-22.99 37.15-34.31 7.45-6.74 14.77-13.65 22.45-20.12 8.77-7.39 18.23-7.19 24.87.02 6.7 7.27 6.2 17.09-2.14 24.75-19.54 17.98-39.29 35.74-59.2 53.31-3.29 2.91-7.85 4.39-14.03 7.71zM448.89 162.81c-3.88 5.01-6.54 11.44-11.21 13.64-4.62 2.18-12.08 1.79-16.8-.52-6.22-3.04-11.01-9.02-16.36-13.81-14.97-13.42-29.97-26.82-44.85-40.35-9-8.17-10.27-17.87-3.63-25.45 6.77-7.73 16.51-8.07 25.66.02 19.64 17.36 39.08 34.95 58.28 52.8 3.46 3.22 5.37 8.11 8.91 13.67zM522.74 48.7c0-9.7-.2-19.4.05-29.09C523.1 7.47 529.56.18 539.67 0c10.25-.18 17.3 6.97 17.5 18.93.33 19.75.33 39.51-.01 59.26-.19 10.9-7.6 18.69-16.82 18.93-9.57.25-17.15-7.84-17.52-19.34-.33-9.68-.08-19.38-.08-29.08z"
                    class="st0"
                  />
                </svg>
                <span
                  class="text-center text-xs leading-3 md:text-base md:leading-5 2xl:text-xl 3xl:text-2xl text-inci_orange font-light w-3/4"
                >
                  {{ flares[2].title }}
                </span>
              </a>
            </div>
            <a
              v-if="flares[3]"
              :data-scroll="getSlugify(flares[3].title)"
              data-aos="fade-up"
              @click="goToSection(4)"
              data-aos-duration="1000"
              href="javascript:void(0)"
              class="w-24 md:w-40 2xl:w-48 3xl:w-56 h-24 md:h-40 2xl:h-48 3xl:h-56 flex flex-col items-center justify-center gap-2 border-2 2xl:border-4 border-inci_purple rounded-xl md:rounded-4xl share"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                viewBox="0 0 1080 1080"
                class="w-8 md:w-14 2xl:w-16 3xl:w-24 fill-inci_purple"
                fill="currentColor"
              >
                <path
                  d="M1080 1054.58c-6.79 17.64-19.49 24.02-38.39 23.9-97.36-.59-194.73-.72-292.09.02-25.99.2-38.52-13.09-38.01-38.58.56-27.77-.13-55.61 10.71-81.87 26.91-65.16 76.48-98.86 146.42-104.79-66.65-27.64-95.46-75.16-72.95-146.33 11.39-36.02 51.44-72.95 111.94-68.1 43.11 3.45 83.16 38.66 93.54 84.68 6.47 28.68 1.3 55.84-14.1 80.77-15.14 24.51-37.44 39.99-65.04 48.57 37.18 2.56 70.4 13.91 98.78 37.64 32.93 27.53 52.23 62.63 57.4 105.38.25 2.04 1.18 3.99 1.8 5.98-.01 17.57-.01 35.15-.01 52.73zM0 1001.85c2.46-11.24 4.15-22.72 7.49-33.7 20.09-66.1 78.01-110.79 147.23-114.09.92-.04 1.83-.36 5.42-1.1-36.81-11.4-62.52-32.35-76.16-66.53-9.16-22.95-10.08-46.37-3.46-70.07 13.19-47.24 57.08-78.83 107.66-77.64 47.9 1.13 90.05 35.25 100.79 82.12 6.61 28.84 3.05 56.4-12.48 81.98-15.22 25.07-37.52 40.97-63 48.45 19.08 5.36 40.86 8.48 59.92 17.39 62.63 29.29 93.14 80.43 94.77 149.12.28 11.92.18 23.93-1.01 35.77-1.38 13.68-12.46 23.38-26.14 24.4-3.85.29-7.73.23-11.59.23-96.66.01-193.32-.32-289.98.29-19.13.12-32.54-5.63-39.46-23.91v-52.71zM516.58 215.98c-35.87-10.72-61.12-30.99-75.14-63.54-9.86-22.9-11.47-46.58-5.02-70.95C448.9 34.29 491.68 1.5 541.35 1.71c48.89.2 91.78 32.91 103.53 80.21 7.2 28.97 4.01 57.1-11.55 83.2-15.21 25.51-37.79 41.6-66 50.8 34.98 2.65 66.88 12.69 94.29 34.4 38.06 30.15 59.41 69.42 62.14 118.16.8 14.37.82 28.83.3 43.22-.66 18.27-12.08 29.37-30.19 29.39-102.3.13-204.6.12-306.9-.01-16.21-.02-29.15-10.65-30.02-26.54-1.86-34.09-1.9-68.33 12.94-100.24 27.93-60.06 75.23-92.42 141.32-97.25.92-.07 1.82-.35 5.37-1.07zM304.5 255.03c-4.75 7.76-8.24 16.76-14.46 23.07-56.76 57.54-94.92 125.27-113.45 203.98-1.6 6.8-2.67 13.73-4.53 20.46-4.67 16.85-20.33 27.2-35.6 23.84-17.79-3.91-28.16-18.26-25.01-36.57 12-69.82 39.03-133.65 80.3-190.97 17.15-23.82 37.41-45.48 57.06-67.4 9.18-10.24 21.53-12.63 34.68-7.16 11.7 4.86 18.6 15.88 18.48 29.2.84.51 1.69 1.03 2.53 1.55zM970.44 493.97c-.17 18.03-11.92 30.97-28.38 32.96-14.64 1.77-29.61-9.08-32.92-25.06-7.05-34.04-16.83-67.12-31.35-98.78-21.44-46.75-50.1-88.44-86.67-124.61-8.42-8.32-13.98-17.72-11.96-29.91 2.05-12.36 9.07-20.99 21.14-25.17 12.75-4.41 23.47-.54 32.66 8.4 30.88 30.05 57.01 63.82 78.77 100.99 28.21 48.18 47.33 99.78 58.09 154.52.55 2.73.53 5.58.62 6.66zM538.62 852.37c-48.43.63-95.66-6.84-141.83-21.26-18.11-5.65-27.69-22.44-22.59-39.23 5.18-17.08 22.03-26.04 40.18-20.56 52.32 15.79 105.83 22.93 160.08 16.82 32.17-3.62 63.8-12.21 95.57-19.04 14.1-3.03 27.81 2.17 35.06 14.67 6.9 11.9 5.17 28.61-5.24 37.6-5.1 4.4-11.84 7.51-18.36 9.57-46.46 14.66-94.07 22.11-142.87 21.43z"
                  class="st0"
                />
              </svg>
              <span
                class="text-center text-xs leading-3 md:text-base md:leading-5 2xl:text-xl 3xl:text-2xl text-inci_purple font-light w-3/4"
              >
                {{ flares[3].title }}
              </span>
            </a>
          </div>
          <!-- <div class="flex flex-col md:flex-row items-center gap-8">
            <a
              href=""
              class="bg-inci_blue text-base font-bold 2xl:text-lg text-white rounded-2xl px-8 xl:px-10 py-3 xl:py-4 hover:bg-opacity-90"
            >
              {{ $t("GeneralApplication") }}
            </a>
            <a
              href=""
              class="bg-inci_blue text-base font-bold 2xl:text-lg text-white rounded-2xl px-8 xl:px-10 py-3 xl:py-4 hover:bg-opacity-90"
            >
              {{ $t("InternApplication") }}
            </a>
          </div> -->
        </div>
      </div>
    </section>

    <section
      id="screen-5"
      class="container mt-20 pt-4 pb-6 relative lg:h-screen full-screen flex items-center"
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
          <div
            class="flex flex-col items-center lg:items-start overflow-x-hidden plain-text-incili-olmak"
            v-html="lastSection.htmlContent"
          >
            <!--<h3 class="text-xl md:text-2xl xl:text-3xl text-center lg:text-left font-bold mb-3">

            </h3>
            <p
              class="text-base 2xl:text-xl font-light text-center lg:text-left mb-2"
            >
              İnci Holding ve grup şirketlerinde yetkinlik bazlı
              değerlendirmeler yapar; şeffaf, adil ve izlenebilir olmayı
              hedefleriz. <br />
              Yeni mezun, deneyimli ya da stajyer adaylar için tüm fırsatları
              www.kariyer.net üzerinden ilan etmekteyiz. <br />
              Bizi ve kariyer fırsatlarımızı LinkedIn ve Facebook sayfalarımız
              üzerinden de izleyebilirsiniz.
            </p>
            <h3
              class="text-xl md:text-2xl xl:text-3xl text-center lg:text-left font-bold mb-3"
            >
              İnci'de Staj
            </h3>

            <p
              class="text-base 2xl:text-xl font-light text-center lg:text-left"
            >
              İnci Holding'de uygulanan staj sisteminin temel amacı, üniversite,
              yüksekokullar, teknik liseler, endüstri meslek liseleri vb.
              öğrenim gören öğrencilerden en yetkin ve başarılı olanlarına,
              Holding'in kuruluşlarında staj olanağı vermek, staj süresince
              öğrencilerin performanslarını izlemek ve üstün performans gösteren
              öğrencileri öğrenimleri sonunda kuruluşlarımıza kazandırmaktır.
              <br />
              İnci Holding bünyesinde staj imkanı sağlayan şirketlerin büyük bir
              bölümü Manisa Organize Sanayi Bölgesi'nde faaliyet göstermektedir.
              Stajyerlere servis ve yemek olanakları sunarız. <br />
              Staj başvurularını her yıl Nisan ve Mayıs ayları arasında kabul
              ederiz.
            </p>-->
          </div>
          <a
            class="bg-inci_red button-hover text-base xl:text-lg text-white text-center px-8 xl:px-12 py-3 xl:py-5 block lg:inline-block mt-8 mx-auto"
            href="https://www.kariyer.net/firma-profil/inci-holding-1716-7857"
            target="_blank"
          >
            {{ $t("Apply") }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<style></style>
<script>
import {
  initFullScreen,
  destroyFullScreen,
  scrollToSection,
} from "@/components/fullPage.js";

import beinciService from "@/services/beinciService.js";
import pageSettingsService from "@/services/pageSettingService.js";
import Pic from "../components/Pic.vue";
import slugify from "@/util/slugify.js";

export default {
  name: "beinci",
  layout: "default",
  components: { Pic },
  mounted() {
    if (window.innerWidth > 1024) {
      initFullScreen();
    } else {
      const _sectionHash = location.hash.replace("#", "");
      if (_sectionHash)
        setTimeout(() => {
          scrollToSection(_sectionHash, true);
        }, 500);
    }
  },
  destroyed() {
    if (window.innerWidth > 1024) {
      destroyFullScreen();
    }
  },
  async asyncData({ i18n }) {
    var sectionTitles = [];

    var flaresData = await beinciService.getFlare(i18n.locale);

    var lastSection = flaresData.length > 4 ? flaresData[4] : null;
    var flares = flaresData.slice(0, 4);

    var pageSettings = await pageSettingsService.getPageSetting(
      "beinci",
      i18n.locale
    );
    pageSettings = pageSettings || {
      seoTitle: "",
      seoKeywords: "",
      seoDescription: "",
      image: "",
      title: "",
    };

    flares.forEach(function (t, i) {
      sectionTitles.push(t.title);
    });
    return { flares, pageSettings, sectionTitles, lastSection };
  },
  methods: {
    getSlugify(_url) {
      return slugify(_url);
    },
    goToSection(_id) {
      scrollToSection(_id, true);
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
