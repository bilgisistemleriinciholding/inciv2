<template>
  <section
    class="bg-inci_red full-screen overflow-x-hidden"
    id="footer"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="xl:grid xl:grid-cols-3 xl:gap-8 2xl:gap-16 items-center">
      <div
        class="footer-logo-bg-sircle xl:col-span-1 h-full hidden xl:flex items-center justify-center bg-inci_red_dark p-6 lg:p-12"
      >
        <a
          :href="'/' + this.$root.$i18n.locale"
          class="inline-block w-44 lg:w-72 flex-shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            id="Isolation_Mode"
            x="0"
            y="0"
            style="enable-background: new 0 0 841.89 595.28"
            version="1.1"
            viewBox="0 0 841.89 595.28"
          >
            <path
              fill="#fff"
              d="M77.63 410.9h15.93v12.22H77.63zM77.63 431.41h15.93v76.33H77.63zM104.82 431.41v76.33h14.87V453.4l.31.11 31.03 54.23h15.93v-76.33h-14.87v53.05l-.2.08-30.3-53.13zM211.86 429.38c-23.71 0-35.3 17.77-35.3 40.29 0 22.11 11.06 40.06 34.87 40.06 18.71 0 29.76-10.93 33.15-28.14h-15.93c-1.9 9.45-8.2 14.34-16.89 14.34-14.57 0-18.93-13.95-18.93-26.26 0-14.54 5.95-26.46 19.24-26.46 9.23 0 14.44 4.47 16.58 13.19h15.93c-2.02-17.95-16.45-27.02-32.72-27.02zM253.33 431.41h15.93v76.33h-15.93zM253.33 410.9h15.93v12.22h-15.93zM306.66 431.41v76.33h15.92V473.5h29.77v34.24h15.95v-76.33h-15.95v28.91h-29.77v-28.91zM414.57 429.38c-16.79 0-36.68 9.59-36.68 40.19 0 29.96 19.13 40.16 36.68 40.16 16.88 0 36.64-9.46 36.64-40.24 0-30.52-20.07-40.11-36.64-40.11zm-.11 13.5c13.17 0 20.82 10.42 20.82 26.61 0 17.52-8.41 26.76-20.71 26.76-13.08 0-20.73-10.42-20.73-26.67-.01-17.76 8.81-26.7 20.62-26.7zM460.81 431.41v76.33h52.68v-13.85h-36.75v-62.48zM595.46 431.41h15.93v76.33h-15.93zM521.68 431.41v76.33h33.19c23.69 0 31.57-21.27 31.57-39.98 0-19.45-8.62-36.24-30.94-36.35h-33.82zm15.66 13.2h16.02c14.26.1 16.8 13.07 16.8 24.02 0 10.83-3.41 25.9-17.11 25.9h-15.71v-49.92zM622.64 431.41v76.33h14.89V453.4l.31.11 31.03 54.23h15.96v-76.33h-14.91v53.05l-.2.08-30.28-53.13zM731.04 429.38c-24.23 0-37.19 17.77-37.19 40.41 0 24.02 14.01 39.95 35.17 39.95 11.27 0 17.76-4.35 23.71-11.56.53 3.28 1.06 6.46 1.58 9.56h10.62V466.6h-31.88v12.86h17.77c-1.81 9.64-8.83 16.78-18.71 16.78-15.73 0-21.99-11.28-21.99-26.23 0-15.96 7.53-27.45 21.88-27.45 6.71 0 14.67 4.06 16.8 12.56h15.82c-1.91-16.48-15.95-25.74-33.58-25.74zM595.46 410.9h15.93v12.22h-15.93z"
              class="st0"
            />
            <path
              fill="#fff"
              d="M380.13 126.78c0-22.73 18.42-41.16 41.13-41.16 22.73 0 41.15 18.42 41.15 41.16 0 22.7-18.41 41.13-41.15 41.13-22.71.01-41.13-18.43-41.13-41.13z"
              style="fill-rule: evenodd; clip-rule: evenodd; fill: #fff"
            />
            <path
              fill="#fff"
              d="M348.28 185.01c18.22 28.27 28.7 61.95 28.7 98.06 0 34.09-9.4 65.94-25.73 93.16L388.13 393c18.55-32.38 29.14-69.9 29.14-109.92 0-42.16-11.7-81.59-32.16-115.15l-36.83 17.08zM494.28 185.01c-18.23 28.27-28.72 61.95-28.72 98.06 0 34.09 9.4 65.94 25.73 93.16L454.4 393c-18.54-32.38-29.14-69.9-29.14-109.92 0-42.16 11.69-81.59 32.16-115.15l36.86 17.08z"
            />
          </svg>
        </a>
      </div>
      <div class="col-span-2 px-12 2xl:px-40 pb-4 lg:py-8">
        <!-- footer menu -->
        <div
          class="hidden xl:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-7"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div v-for="menuItem in menu" class="mt-6 lg:mt-0">
            <a :href="menuItem.url">
              <h3 class="footer-title">{{ menuItem.text }}</h3>
            </a>
            <ul
              v-if="
                menuItem.inverseParentMenu &&
                menuItem.inverseParentMenu.length > 0
              "
              role="list"
              class="footer-list"
            >
              <li v-for="subItem in menuItem.inverseParentMenu">
                <a :href="subItem.url" class="footer-sub">{{ subItem.text }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="xl:pr-20 flex flex-col items-center xl:items-end justify-center xl:justify-end"
        >
          <!-- inci gif logo -->
          <a href="https://blog.inciholding.com/" target="_blank">
            <img
              class="mt-4 xl:mt-1 w-28 xl:ml-auto"
              src="~/static/img/inci-logo.gif"
              alt="İnci Holding"
            />
          </a>
          <!-- inci gif logo -->
          <!-- social -->
          <div class="mt-2 flex justify-end">
            <div class="flex space-x-1">
              <a
                :href="$t('linkFacebook')"
                target="_blank"
                class="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:text-opacity-70 !cursor-pointer"
              >
                <span class="sr-only">Facebook</span>
                <svg
                  class="h-4 w-4"
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
                :href="$t('linkLinkedin')"
                target="_blank"
                class="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:text-opacity-70 !cursor-pointer"
              >
                <span class="sr-only">Linkedin</span>
                <svg
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </a>

              <a
                :href="$t('linkInstagram')"
                target="_blank"
                class="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:text-opacity-70 !cursor-pointer"
              >
                <span class="sr-only">İnstagram</span>
                <svg
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>

              <a
                :href="$t('linkTwitter')"
                target="_blank"
                class="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:text-opacity-70 !cursor-pointer"
              >
                <span class="sr-only">X</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  class="h-4 w-4"
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
                :href="$t('linkYoutube')"
                target="_blank"
                class="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:text-opacity-70 !cursor-pointer"
              >
                <span class="sr-only">Youtube</span>
                <svg
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                  aria-hidden="true"
                >
                  <path
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                  />
                </svg>
              </a>

              <a
                :href="$t('linkPinterest')"
                target="_blank"
                class="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:text-opacity-70 !cursor-pointer"
              >
                <span class="sr-only">Pinterest</span>
                <svg
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                  aria-hidden="true"
                >
                  <path
                    d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <!-- social -->
        </div>
        <!-- footer menu -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
  props: {
    menu: { type: Array, required: true, default: [] },
  },
};
</script>
