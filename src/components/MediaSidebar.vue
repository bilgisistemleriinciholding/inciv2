<template>
  <div class="hidden lg:block col-span-10 lg:col-span-3">
    <div class="sticky top-40 flex items-start">
      <ul class="nav nav-tabs flex flex-col list-none ml-auto"
          id="tabs-tabVertical"
          role="tablist">
        <li v-for="(item, index) in menu"
            class="nav-item flex-grow text-center"
            role="presentation">
          <a :href="getFullUrl(item)" :target="isFullUrl(item)"
             class="nav-link block font-light text-xl text-right relative pr-12 before:content-[''] before:w-5 before:h-5 before:border-2 before:border-inci_red before:rounded-full before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 after:content-[''] mb-16 after:w-px after:h-[72px] after:absolute after:right-2.5 after:top-6"
             data-bs-toggle="pill"
             :class="{'text-inci_red' : item.isActive == true,'before:bg-inci_red' : item.isActive == true,'after:bg-inci_red' : index < (menu.length-1)}" aria-selected="true">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: "MediaSidebar",
    props: {
      menu: { type: Array, required: true },
    },
    methods: {
      isFullUrl(item) {
        if (item.url.indexOf("http://") > -1 || item.url.indexOf("https://") > -1) {
          return "_blank";
        } else {
          return "_self";
        }
      },
      getFullUrl(item) {
        if (item.url.indexOf("http://") > -1 || item.url.indexOf("https://") > -1) {
          return item.url;
        }
        else {
          return '/' + item.lang + item.url.replace('/:page?', '');
        }
      }
    }
  };
</script>
