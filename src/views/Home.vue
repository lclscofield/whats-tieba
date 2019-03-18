<template>
  <div class="home">
    <div class="home-search-wrap">
      <input class="home-search" type="text">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Home extends Vue {
  created () {
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  padding-top: 100px;

  > .home-search-wrap {
    width: 600px;
    margin: 0 auto;

    > .home-search {
      outline: none;
      border: none;
      height: 50px;
      width: 100%;
      padding: 0 25px;
      border: 1px solid $baseColor1;
      border-radius: 100px;
      &:hover,
      &:focus {
        box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
      }
    }
  }
}
</style>
