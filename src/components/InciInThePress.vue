<template>
  <div>
    <div class="flex flex-col justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <a
          v-for="item in data"
          href="javascript:void(0);"
          @click="setModalSrc(item.image)"
          data-target="#pressModal"
          class="group flex flex-col items-center justify-center transition hover:bg-inci_gray_light"
        >
          <img
            class="max-w-full h-40 lg:h-56 object-contain mb-2"
            :src="item.image"
            alt=""
          />
          <span class="text-sm lg:text-base text-center mb-1"
            >{{ item.title }}
          </span>
          <span class="font-light text-xs lg:text-sm text-center">
            {{ formatDate(item.date) }}
          </span>
        </a>
      </div>
    </div>
    <!-- Modal -->
    <div
      id="pressModal"
      class="relative z-50 hidden"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-black bg-opacity-80 transition-opacity"
      ></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full justify-center p-4 text-center items-center sm:p-0"
          data-toggle="close"
        >
          <div
            class="relative transform overflow-hidden shadow-xl max-w-6xl flex flex-row items-center justify-between"
          >
            <div class="relative py-20">
              <img v-if="modalSrc" :src="modalSrc" alt="" />

              <div
                class="absolute left-[5%] top-7 w-[90%] flex items-center justify-between z-10"
              >
                <div class="flex gap-3 flex-row items-center">&nbsp;</div>
                <button
                  data-toggle="close"
                  type="button"
                  class="inline-flex justify-center border-transparent text-white focus:outline-none drop-shadow-2xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
  </div>
</template>

<script>
import Pic from "./Pic.vue";

export default {
  name: "InciInThePress",
  components: { Pic },
  props: { data: { type: Array, required: true } },
  data() {
    return {
      modalSrc: "",
    };
  },
  methods: {
    setModalSrc(modalSrc) {
      this.modalSrc = modalSrc;
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
};
</script>
