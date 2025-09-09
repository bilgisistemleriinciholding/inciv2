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
  inheritAttrs: false, // class ve diğer attributelar img’ye gitsin
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
