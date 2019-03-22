<template>
  <div class="home">
    <div class="home-search-wrap">
      <input class="home-search" type="text">
    </div>

    <div class="home-tieba" v-if="myTieba.length">
      <div class="home-type-title">常用</div>
      <div class="home-tieba-my-wrap">
        <div class="home-tieba-my" v-for="(item, idx) in myTieba" :key="'tieba' + idx">
          {{ item }}
        </div>
      </div>
    </div>

    <div class="home-tieba">
      <div class="home-type-title">热门</div>
      <div class="home-tieba-wrap">
        <div class="home-tieba-hot" v-for="(item, idx) in hotTieba" :key="'tieba' + idx">
          <img :src="item.img" :alt="item.title">
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>

    <div class="home-tieba">
      <div class="home-type-title">最新</div>
      <div class="home-tieba-wrap">
        <div class="home-tieba-new" v-for="(item, idx) in newTieba" :key="'tieba' + idx">
          <img :src="item.img" :alt="item.title">
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface Tieba {
  title: string,
  img: string
}

@Component
export default class Home extends Vue {
  // data
  myTieba: string[] = ['hasdhas', 'oiseuhwjalsd', 'jasjdhiuwqbd', 'auishdueqwbeh', 'ashdahgsduyagsu']
  hotTieba: Tieba[] = [{
    title: '呵呵呵',
    img: 'http://res.pokemon.name/common/pokemon/pgl/054.00.png'
  }, {
    title: '呵呵呵',
    img: 'http://res.pokemon.name/common/pokemon/pgl/054.00.png'
  }, {
    title: '呵呵呵',
    img: 'http://res.pokemon.name/common/pokemon/pgl/054.00.png'
  }, {
    title: '呵呵呵',
    img: 'http://res.pokemon.name/common/pokemon/pgl/054.00.png'
  }, {
    title: '呵呵呵',
    img: 'http://res.pokemon.name/common/pokemon/pgl/054.00.png'
  }, {
    title: '呵呵呵',
    img: 'http://res.pokemon.name/common/pokemon/pgl/054.00.png'
  }]
  newTieba: Tieba[] = [{
    title: '一二三',
    img: 'http://res.pokemon.name/common/pokemon/pgl/054.00.png'
  }]

  // 钩子函数
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
    padding-bottom: 40px;

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

  > .home-tieba {
    width: 800px;
    margin: 0 auto;
    padding-top: 20px;

    > .home-type-title {
      font-size: 16px;
    }

    > .home-tieba-my-wrap {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      > .home-tieba-my {
        line-height: 30px;
        padding: 0 15px;
        margin: 10px 20px 0 0;
        border: 1px solid $baseColor1;
        border-radius: 100px;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          box-shadow: 1px 1px 5px $baseColor1;
        }
      }
    }

    > .home-tieba-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      > .home-tieba-hot,
      > .home-tieba-new {
        margin-top: 10px;
        transition: all 0.3s;
        border: 1px solid transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
          border: 1px solid $baseColor1;
          border-radius: 4px;
          box-shadow: 1px 1px 5px $baseColor1;
        }
        img {
          width: 110px;
          height: 120px;
        }
        span {
          padding-top: 10px;
        }
      }
    }
  }
}
</style>
