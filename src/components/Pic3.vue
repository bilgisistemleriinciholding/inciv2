<template>
  <nuxt-img :src="aliasedUrl(src)" quality="80" loading="lazy" format="webp" :alt="alt" :sizes="sizes" />
</template>

<script>
  export default {
    name: "Pic3",
    props: {
      alt: { type: String }, src: { type: String }, sizes: { type: String }
    }
    , methods: {
      aliasedUrl(fullUrl) {
        if (fullUrl.indexOf('https://') > -1 || fullUrl.indexOf('http://') > -1)
          return fullUrl.replace(process.env.VUE_APP_IMG_PATH + '/Uploads/images', '/cdnimg');
        return fullUrl;
      }
    }
  };
</script>
