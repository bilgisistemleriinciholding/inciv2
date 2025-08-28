<template>
  <div>
    <LittleHero title="404" :img="headerImage" />

    <div
      class="container min-h-full xl:h-[calc(100vh-240px)] md:grid md:place-items-center py-16 2xl:py-14"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <main
        class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center"
      >
        <div class="flex flex-shrink-0 justify-center">
          <a href="/" class="inline-flex">
            <Pic
              class="w-full h-full max-h-[200px] 2xl:max-h-[250px] 3xl:max-h-72 object-cover mx-auto"
              :src="resultsSearchIcon"
              alt=""
            />
          </a>
        </div>
        <div class="pt-8">
          <div class="text-center">
            <h1 class="text-4xl 2xl:text-4xl 3xl:text-5xl font-bold mb-5">
              {{ $t("ErrorTextTitle") }}
            </h1>
            <p
              class="max-w-md mx-auto text-base 2xl:text-xl text-gray-500 mb-3"
            >
              {{ $t("ErrorTextDesc") }}
            </p>
            <div class="mt-5">
              <a
                class="bg-inci_red button-hover text-base xl:text-lg text-white px-7 xl:px-12 py-2 xl:py-3 inline-block"
                href=""
              >
                {{ $t("ErrorTextButton") }}</a
              >
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<style></style>
<script>
import ImgOnCircle from "../components/ImgOnCircle.vue";
import LittleHero from "../components/LittleHero.vue";
import Pic from "../components/Pic.vue";

export default {
  name: "not-found",
  layout: "default",
  props: ["error"],
  data() {
    return {
      headerImage: "img/404-header.jpg",
      resultsSearchIcon: "img/404.png",
    };
  },

  components: { LittleHero, ImgOnCircle, Pic },
};
</script>
