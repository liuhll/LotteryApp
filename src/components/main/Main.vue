<template>
  <div class="page-tabbar">
    <v-header></v-header>
    <div class="page-wrap">
      <div>
        <mt-cell class="page-part" title="当前选中" :value="selected" />
      </div>
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="tabPlan">
        <img slot="icon" :src="tabList['tabPlan'].src">
        计划
      </mt-tab-item>
      <mt-tab-item id="tabIntegralmall">
        <img slot="icon" :src="tabList['tabIntegralmall'].src">
        积分商城
      </mt-tab-item>
      <mt-tab-item id="tabMe">
        <img slot="icon" :src="tabList['tabMe'].src">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixin.styl"
  .mint-tabbar
    & > .is-selected
      color : #ff0000 !important
  .mint-tabbar > .mint-tab-item.is-selected
    background-color : #ffecec
</style>

<script  type="text/ecmascript-6">
import header from 'components/header/Header'
export default {
  data() {

    return {
      selected: 'tabPlan'
    };
  },
  watch: {
     selected(val, oldVal) {
        this.tabList[val].src = this.tabList[val].activeSrc;
        this.tabList[oldVal].src = this.tabList[oldVal].defaultSrc;
     }
  },
  created() {
    this.tabList = {
         tabPlan: {
           src: require('./plan-active.svg'),
           defaultSrc: require('./plan.svg'),
           activeSrc: require('./plan-active.svg')
         },
         tabIntegralmall: {
           src: require('./integralmall.svg'),
           defaultSrc: require('./integralmall.svg'),
           activeSrc: require('./integralmall-active.svg')
         },
          tabMe: {
           src: require('./me.svg'),
           defaultSrc: require('./me.svg'),
           activeSrc: require('./me-active.svg')
         }
       };
  },
  activated() {
    document.body.className = 'main-body';
  },
  components: {
      'v-header': header
    }
}
</script>
