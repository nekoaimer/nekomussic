<template>
  <!-- <div class="home">{{ $store.state.name }}</div> -->
  <div class="home">
    {{ name }}
    <div>{{ count }}</div>
    <button @click="btn">count</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeVideo",
  computed: {
    ...mapState(["name", "count"]),
  },
  methods: {
    btn() {
      this.$store.commit("add");
    },
  },
};
</script>

<style lang="stylus" scoped>
.home
  width 100px
  height 100px
</style>