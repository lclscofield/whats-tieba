<template>
  <div class="header-home">
    <div class="header-navi arrows-btm">
      <div class="header-navi-title ellipsis" :title="currentBa">{{ currentBa }}</div>
      <ul class="header-navi-popup">
        <li class="header-navi-option ellipsis" :title="item.title" v-for="(item, idx) in navi" :key="'navi-option' + idx">
          {{ item.title }}
        </li>
      </ul>
    </div>

    <div class="header-user">
      <span class="header-username">{{ user.name }}</span>
      <img class="header-avatar" :src="user.avatar" :alt="user.name">
      <ul class="header-user-popup">
        <li class="user-home">个人中心</li>
        <li class="setting">设置</li>
        <li class="exit">退出</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  namespace
} from 'vuex-class'

const common = namespace('common')

interface NaviOption {
  title: string,
  baId: string
}
interface User {
  name: string,
  avatar: string
}

@Component
export default class HeaderHome extends Vue {
  @common.State('haha') haha: any
  @common.Action('setx') setx: any
  // data
  navi: NaviOption[] = [{
    title: 'hehehe吧',
    baId: 'sss'
  }, {
    title: 'xixixi吧',
    baId: 'xxx'
  }]
  user: User = {
    name: 'lclscofield',
    avatar: 'http://res.pokemon.name/common/pokemon/pgl/054.00.png'
  }
  currentBa: string = 'hehehe吧'

  // gouzi
  created () {
    console.log(this.haha)
    this.setx({
      query: 'sss'
    })
  }
}
</script>

<style lang="scss" scoped>
.header-home {
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  padding: 0 20px;
  box-shadow: 0px 2px 2px 0px rgba(66, 64, 86, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .header-navi {
    position: relative;
    cursor: pointer;
    &:hover {
      > .header-navi-popup {
        visibility: visible;
        opacity: 1;
      }
    }

    > .header-navi-popup {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      top: 100%;
      left: 0;
      background: #ffffff;
      font-size: 14px;
      box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
      transition: all 0.3s;

      > .header-navi-option {
        width: 150px;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background: $baseColor1;
        }
      }
    }
  }

  > .header-user {
    display: flex;
    align-items: center;
    position: relative;
    &:hover {
      > .header-user-popup {
        visibility: visible;
        opacity: 1;
      }
    }

    > .header-username {
      padding-right: 10px;
    }

    > .header-avatar {
      width: 40px;
      height: 40px;
      padding: 4px;
      border: 1px solid $baseColor1;
      border-radius: 100%;
    }

    > .header-user-popup {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      top: 100%;
      right: 0;
      background: #ffffff;
      font-size: 14px;
      box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
      transition: all 0.3s;

      > li {
        width: 100px;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background: $baseColor1;
        }
      }
    }
  }
}
</style>
