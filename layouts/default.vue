<template>
  <div id="app">
    <Heard />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    scroll(e) {
      console.log(e);
    },
  },
  mounted() {
    new WOW({ live: false }).init();
  },
};
</script>
<style scoped>
.overflowY {
  overflow-y: scroll;
}
#app {
  position: relative;
  min-height: 100vh;
  padding-bottom: 190px;
}
@media screen and (max-width: 900px) {
  #app {
    padding-bottom: 190px;
  }
}
</style>
