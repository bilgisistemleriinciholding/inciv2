<template>
  <section
    id="section-1"
    class="h-screen relative !overflow-hidden full-screen"
  >
    <!-- Modal -->
    <div
      id="storyModal"
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
            class="relative transform overflow-hidden shadow-xl max-w-lg flex flex-row items-center justify-between"
          >
            <a
              v-if="prevShow"
              @click="prevClick"
              class="text-white mr-3"
              href="javascript:void(0)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </a>

            <div class="relative">
              <img
                :src="selectedStory.videoUrl"
                :alt="selectedStory.description"
              />
              <!-- <div class="absolute top-2 left-[5%] w-[90%] bg-gray-500 rounded-full h-0.5">
                <div class="bg-white h-0.5 rounded-full" style="width: 45%"></div>
              </div> -->
              <div
                class="absolute left-[5%] top-5 w-[90%] flex items-center justify-between"
              >
                <div class="flex gap-3 flex-row items-center">
                  <button
                    type="button"
                    class="inline-flex items-center w-11 h-11 flex-shrink-0 rounded-full justify-center bg-white"
                  >
                    <img
                      class="p-1.5"
                      :src="storyItem.thumbnail"
                      :alt="storyItem.smallText"
                    />
                  </button>
                  <span class="text-white text-lg font-medium text-center">
                    {{ storyItem.smallText }}
                  </span>
                </div>
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
              <p
                class="absolute bottom-20 text-white w-full text-base xl:text-3xl text-center font-medium underline p-5 drop-shadow-2xl bg-black"
              >
                {{ selectedStory.description }}
              </p>
            </div>

            <a
              v-if="nextShow"
              @click="nextClick"
              class="text-white ml-3"
              href="javascript:void(0)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->

    <div class="relative bg-black bg-opacity-50 h-full z-20">
      <div
        class="container w-full h-full flex flex-col pl-4 md:pl-12 lg:pl-36 2xl:pl-56 relative"
      >
        <div
          class="mt-[40%] sm:mt-[20%] md:mt[20%] lg:mt-[20%] h-0 pr-5 sm:pr-20"
        >
          <h3
            class="uppercase tracking-wider text-inci_red text-base md:text-2xl lg:text-2xl mb-6 lg:mb-8"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            {{ heroData.smallTitle }}
          </h3>
          <h1
            class="text-white !leading-tight font-normal text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl max-w-5xl mb-8"
            data-aos="fade-down"
            data-aos-duration="900"
          >
            {{ heroData.bigTitle }}
          </h1>
          <span
            class="uppercase tracking-wider text-white text-lg flex flex-row items-center gap-4"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {{ heroData.linkText }}
            <a
              :href="heroData.url"
              class="bg-white text-black w-7 md:w-12 h-7 md:h-12 rounded-full flex items-center justify-center button-hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 md:w-5 h-3 md:h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </span>
        </div>
        <!-- Stories -->
        <!-- <div
          class="flex flex-col items-center absolute right-2 sm:right-3.5 top-16 sm:top-20 md:top-[100px] xl:top-[120px] 2xl:top-[136px] 3xl:top-[150px]"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <span
            class="w-14 xl:w-16 2xl:w-[74px] block text-base xl:text-xl 2xl:text-2xl font-normal font-anydore text-white text-center mb-2"
          >
            {{ $t("Stories") }}</span
          >
          <div class="relative flex flex-col items-center">
            <button
              type="button"
              data-toggle="dropdown"
              data-target="#stories"
              class="inline-flex items-center w-11 md:w-14 h-11 md:h-14 flex-shrink-0 rounded-full border-2 border-inci_red justify-center text-2xl font-medium bg-white text-black focus:outline-none focus:ring-1 focus:ring-inci_red z-[1]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                class="w-6 md:w-7 h-6 md:h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
            <div
              class="no-scrollbar flex flex-col items-center space-y-1 md:space-y-2 pt-12 md:pt-14 pb-5 md:pb-6 w-[60px] md:w-[86px] bg-white bg-opacity-80 px-0.5 md:px-4 rounded-full absolute top-6 md:top-7 max-h-[65vh] overflow-y-auto hidden"
              id="stories"
              scrollable="true"
            >
              <span
                class="flex justify-center text-[8px] font-medium -mt-6 text-center"
                >İNCİ Story</span
              >
              <div>
                <div class="flex flex-col items-center" v-for="item in stories">
                  <button
                    data-toggle="dropdown"
                    @click="openStory(item)"
                    data-target="#storyModal"
                    type="button"
                    class="inline-flex items-center w-11 md:w-14 h-11 md:h-14 flex-shrink-0 rounded-full border-2 border-inci_red justify-center text-2xl font-medium bg-white text-black focus:outline-none focus:ring-1 focus:ring-inci_red"
                  >
                    <img
                      class="p-1.5 rounded-full"
                      :src="item.thumbnail"
                      :alt="item.smallText"
                    />
                  </button>
                  <span class="flex text-[8px] font-medium text-center">
                    {{ item.smallText }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <!-- Stories -->
      </div>
    </div>
    <div class="bg_video">
      <youtube
        v-show="heroData.videoUrl"
        class="absolute inset-0 z-10 h-screen w-full min-w-full min-h-full max-w-none object-cover bg-cover"
        :player-vars="playerVars"
        @ready="playVideo"
        :video-id="getVideoId(heroData.videoUrl)"
        ref="herotube"
      ></youtube>
    </div>
    <!-- <video
      autoplay
      loop
      muted
      class="absolute inset-0 z-10 h-screen w-full min-w-full min-h-full max-w-none object-cover bg-cover"
    >
      <source :src="heroData.videoUrl" type="video/mp4" />
      Your browser does not support the video tag.
    </video> -->
  </section>
</template>
<script>
export default {
  name: "Hero",
  props: ["heroData", "stories"],
  data() {
    return {
      storyItem: {},
      selectedStoryIndex: -1,
      selectedStory: {},
      nextShow: true,
      prevShow: true,
      playerVars: {
        controls: 0,
        disablekb: 0,
        loop: 1,
        mute: 1,
        playlist: this.getVideoId(this.heroData.videoUrl),
      },
    };
  },
  // props: {
  //   video: String,
  // },
  computed: {},
  methods: {
    nextClick() {
      if (this.selectedStoryIndex == this.storyItem.story.length - 1) {
        if (this.stories.indexOf(this.storyItem) == this.stories.length - 1) {
          this.storyItem = this.stories[0];
        } else {
          this.storyItem =
            this.stories[this.stories.indexOf(this.storyItem) + 1];
        }

        this.selectedStoryIndex = 0;
        this.selectedStory = this.storyItem.story[0];
      } else {
        this.selectedStoryIndex++;
        this.selectedStory = this.storyItem.story[this.selectedStoryIndex];
      }
      //this.prevShow = true;
      //if (this.storyItem.story.length > this.selectedStoryIndex + 1) {
      //  this.nextShow = true;
      //} else {
      //  this.nextShow = false;
      //}
    },
    prevClick() {
      if (this.selectedStoryIndex == 0) {
        if (this.stories.indexOf(this.storyItem) == -1) {
          return;
        }
        if (this.stories.indexOf(this.storyItem) == 0) {
          this.storyItem = this.stories[this.stories.length - 1];
        } else {
          this.storyItem =
            this.stories[this.stories.indexOf(this.storyItem) - 1];
        }

        this.selectedStory = this.storyItem.story[0];
      } else {
        this.selectedStoryIndex--;
        this.selectedStory = this.storyItem.story[this.selectedStoryIndex];
      }
    },
    openStory(_item) {
      this.storyItem = _item;
      if (_item.story.length > 0) {
        this.selectedStoryIndex = 0;
        this.selectedStory = _item.story[0];
        //this.prevShow = false;
        //if (_item.story.length > 1) this.nextShow = true;
      }
    },
    getVideoId(_url) {
      return this.$youtube.getIdFromUrl(_url);
    },
    playVideo() {
      var _this = this;
      setTimeout(function () {
        _this.$refs.herotube.player.playVideo();
      }, 100);
      // Do something after the playVideo command
    },
  },
};
</script>
<style>
.bg_video {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 56.25vw;
  /* 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 177.77vh;
  /* 16/9*100 = 177.77 */
}
</style>
