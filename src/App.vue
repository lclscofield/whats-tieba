<template>
  <div id="app">
    <header-home></header-home>
    <router-view />
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
}
</style>
