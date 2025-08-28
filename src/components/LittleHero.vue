<template>
  <section class="h-40 md:h-60 3xl:h-72 relative" data-aos="fade-down">
    <div class="relative bg-black bg-opacity-50 h-full z-20">
      <div class="w-full h-full flex items-center justify-center">
        <h1
          class="text-white font-bold text-center text-2xl md:text-4xl 2xl:text-6xl"
        >
          {{ title }}
        </h1>
      </div>
    </div>
    <Pic
      class="absolute inset-0 z-10 w-full h-full object-cover"
      :src="img"
      :alt="title"
    />
  </section>
</template>
<script>
import Pic from "./Pic.vue";

export default {
  name: "LittleHero",
  props: ["title", "img"],
  components: { Pic },
};
</script>
