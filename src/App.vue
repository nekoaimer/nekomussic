<template>
  <div id="app">
    <topbar></topbar>
    <wrapper></wrapper>
    <sidebar></sidebar>
    <input ref="a" type="range" value="0" />
    <span>{{ value }}</span>
  </div>
</template>

<script>
import topbar from "@/views/topbar/topbar";
import wrapper from "@/views/wrapper/wrapper";
import sidebar from "@/views/sidebar/sidebar";
import { getLoginInfo } from "./service/api_login";
export default {
  name: "App",
  data() {
    return {
      value: 0,
    };
  },
  components: {
    topbar,
    wrapper,
    sidebar,
  },
  mounted() {
    let a = 18674017339;
    let b = "Etidorhpa233";
    getLoginInfo(a, b).then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="stylus" scoped>
#app
  width 100%
  min-width 93.75rem
  height 100vh
  background-color pink
  font-weight bold
</style>>
