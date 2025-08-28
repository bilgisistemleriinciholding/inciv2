<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
    <a v-for="item in magazines" :href="item.pdfUrl" target="_blank" :title="item.title"
      class="flex flex-col items-center justify-center gap-3 p-4 bg-inci_gray_extra_light transition-colors group hover:bg-inci_gray">
      <Pic class="max-w-full h-60 object-contain mx-auto px-2" :src="item.image" :alt="item.title" />
      <span class="font-light text-xs lg:text-sm text-center w-24 group-hover:text-white">
        {{ item.title }}
      </span>
    </a>
  </div>
</template>

<script>
import Pic from "./Pic.vue";

export default {
  name: "MagazineFromInci",
  components: { Pic },
  props: { magazines: { type: Array, required: true } },
};
</script>
