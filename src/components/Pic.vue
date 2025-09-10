<template>
  <img
    v-bind="$attrs"
    :src="src"
    :alt="alt"
    loading="lazy"
  />
</template>

<script>
export default {
  name: "Pic",
  inheritAttrs: true,
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ""
    }
  }
};
</script>
