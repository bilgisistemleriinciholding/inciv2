<template>
  <div id="loader"
       class="flex items-center justify-center absolute inset-0 w-screen h-screen bg-white bg-opacity-90 z-50">
    <div class="lds-dual-ring"></div>
  </div>
</template>

<script>
  export default {
    name: 'Loader',
    mounted() {
      window.addEventListener("load", this.loadEnd);
    },
    methods: {
      loadEnd() {
        if (document.getElementById('loader')) {
          document.getElementById('loader').remove();
        }

        setTimeout(function () {
          var element = document.body;
          if (element) {
            element.classList.remove("overflow-hidden");
          }
        }, 200);
      }
    }

  }

</script>
