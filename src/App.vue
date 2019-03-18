<template>
  <div id="app">
    <header-home></header-home>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderHome from './views/HeaderHome.vue'

@Component({
  components: {
    HeaderHome
  }
})
export default class App extends Vue {
  created () {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Georgia, "Microsoft YaHei", "STXihei", monospace;
  color: #2c3e50;
  height: 100vh;

  > .main {
    height: calc(100% - 60px);
    overflow: auto;
  }
}
</style>
