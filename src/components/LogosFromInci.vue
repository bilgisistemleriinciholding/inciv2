<template>
  <div class="flex flex-col justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
      <a v-for="item in data" :href="item.pdfFile" :title="item.title" target="_blank"
         class="flex flex-col items-center justify-center gap-3 p-4 bg-inci_gray_extra_light group">
        <Pic class="max-w-[50%] group-hover:max-w-[70%] h-40 object-contain mx-auto px-2 transition-all"
             :src="item.image"
             :alt="item.title" />
        <span class="font-light text-xs lg:text-sm text-center pt-3 border-t border-inci_red px-5">
          {{item.title}}
        </span>
      </a>
    </div>
  </div>
</template>

<script>
  import Pic from "./Pic.vue";

  export default {
    name: "LogosFromInci",
    components: { Pic },

    props: { data: { type: Array, required: true } }
  };
</script>
