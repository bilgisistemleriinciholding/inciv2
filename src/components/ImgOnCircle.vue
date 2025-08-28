<template>
  <div class="relative">
    <div
      class="w-52 md:w-96 xl:w-[420px] 2xl:w-[550px] h-52 md:h-96 xl:h-[420px] 2xl:h-[550px] bg-inci_red rounded-full"
      :data-aos="left ? 'fade-left' : 'fade-right'"
      :class="
        left
          ? 'mr-auto xxs:mx-auto lg:!mr-auto !ml-[5%]'
          : 'ml-auto xxs:mx-auto lg:!ml-auto !mr-[5%]'
      "
      data-aos-offset="-100"
      data-aos-anchor-placement="top-bottom"
    >
      <div
        v-if="video != null && video != undefined"
        class="absolute top-1/2 -translate-y-1/2 h-3/4"
        :class="left ? 'right-0' : 'left-0'"
      >
        <youtube
          class="w-full h-full flex-shrink-0 aspect-video"
          :data-aos="left ? 'fade-left' : 'fade-right'"
          data-aos-delay="400"
          data-aos-duration="800"
          :player-vars="playerVars"
          :video-id="getVideoId(video)"
          ref="youtube"
        ></youtube>
      </div>
      <div
        v-if="map"
        class="absolute top-1/2 -translate-y-1/2 h-3/4"
        :class="left ? 'right-0' : 'left-0'"
      >
        <iframe
          class="w-full h-full flex-shrink-0 aspect-video"
          :data-aos="left ? 'fade-left' : 'fade-right'"
          data-aos-delay="400"
          data-aos-duration="800"
          data-aos-offset="-300"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.305983326629!2d27.130536469641907!3d38.35249537818543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdfd8f19478e7%3A0x203add3cb0593d51!2sInci%20Holding!5e0!3m2!1sen!2str!4v1670146462849!5m2!1sen!2str"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        v-if="!map && !video"
        class="absolute top-1/2 -translate-y-1/2 h-3/4"
        :class="left ? 'right-0' : 'left-0'"
      >
        <Pic
          class="h-full object-cover"
          :data-aos="left ? 'fade-left' : 'fade-right'"
          data-aos-delay="400"
          data-aos-duration="800"
          data-aos-offset="-150"
          data-aos-anchor-placement="top-bottom"
          :src="img"
          :alt="alt"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Pic from "./Pic.vue";

export default {
  name: "ImgOnCircle",
  data() {
    return {
      playerVars: {
        autoplay: 0,
      },
    };
  },
  props: {
    img: String,
    left: Boolean,
    video: String,
    map: Boolean,
    alt: String,
  },
  components: { Pic },
  methods: {
    getVideoId(_url) {
      return this.$youtube.getIdFromUrl(_url);
    },
  },
};
</script>

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/VXtVP9vuzsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
