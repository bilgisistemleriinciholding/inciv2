<template>
  <div class="flex flex-col justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <div
        v-for="item in data"
        class="group border-2 border-inci_gray_extra_light transition-colors hover:border-inci_red rounded-br-[52px]"
      >
        <a :href="baseUrl.replace(':id', item.path)" class="block">
          <Pic2
            class="max-w-full h-40 md:h-60 object-contain mx-auto px-2"
            :src="item.image"
            :alt="item.title"
          />
        </a>
        <div
          class="flex flex-col bg-inci_gray_extra_light group-hover:bg-inci_red transition-colors rounded-br-6xl"
        >
          <a
            :href="baseUrl.replace(':id', item.path)"
            class="flex flex-col gap-5 md:gap-7 px-5 py-8"
          >
            <h3
              class="line-clamp-2 font-bold text-lg md:text-xl 2xl:text-3xl transition group-hover:text-white"
            >
              {{ item.title }}
            </h3>
            <span
              class="font-light text-base lg:text-lg transition group-hover:text-white"
            >
              {{ formatDate(item.date) }}
            </span>
            <p
              class="line-clamp-2 font-medium text-base lg:text-lg transition group-hover:text-white"
            >
              {{ item.description }}
            </p>
          </a>
          <a
            :href="baseUrl.replace(':id', item.path)"
            class="block transition group-hover:text-white px-5 pb-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 2xl:w-9 h-6 2xl:h-9 ml-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pic from "./Pic.vue";

export default {
  name: "NewsFromInci",
  components: { Pic },
  props: {
    data: { type: Array, required: true },
    baseUrl: { type: String, required: true },
  },
  methods: {
    formatDate(date) {
      // format the date to be displayed in a readable format
      return new Date(date).toLocaleDateString("tr", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
};
</script>
