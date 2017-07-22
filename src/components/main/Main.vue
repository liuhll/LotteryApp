<template>
<div class="page-container">
  <v-header :title="title"></v-header>

    <div class="page-wrap" :class="title.tabClass">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="tabPlan">
          <v-plan></v-plan>
        </mt-tab-container-item>
        <mt-tab-container-item id="tabIntegralmall">
          <v-integralmall></v-integralmall>
        </mt-tab-container-item>
        <mt-tab-container-item id="tabMe">
          <v-me></v-me>
        </mt-tab-container-item>

        </mt-tab-container-item>
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

.page-tabbar
  overflow: hidden;
  height: 100px;

.page-wrap
  overflow: auto;
  height: 100%;
  padding-bottom: 90px;
  .mint-tab-container
    margin-top:0
    z-index :0
&.plan-page
  margin-top:215px
&.integralmall-page
&.me-page
  margin-top:50px

.mint-tabbar > .mint-tab-item.is-selected
  background-color : #ff97bc
  color : #ff0000 !important
</style>

<script  type="text/ecmascript-6">
import header from 'components/header/Header';
import plan from 'components/plan/Plan';
import integralmall from 'components/integralmall/Integralmall';
import me from 'components/me/Me';

const titleList = [
      {
        text: '北京PK10 - 计划',
        tabName: 'tabPlan',
        tabClass: 'plan-page'
      },
      {
        text: '积分商城',
        tabName: 'tabIntegralmall',
        tabClass: 'integralmall-page'
      },
       {
        text: '关于我',
        tabName: 'tabMe',
        tabClass: 'me-page'
      }
    ];

const tabList = {
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

export default {
  data() {
    return {
      selected: 'tabPlan',
      titleList: titleList,
      title: titleList[0],
      tabList: tabList

    };
  },
  watch: {
     selected(val, oldVal) {
        this.tabList[val].src = this.tabList[val].activeSrc;
        this.tabList[oldVal].src = this.tabList[oldVal].defaultSrc;
          switch (val) {
            case 'tabPlan':
              this.title = this.titleList[0];
              break;
            case 'tabIntegralmall':
              this.title = this.titleList[1];
              break;
            case 'tabMe':
              this.title = this.titleList[2];
              break;
        }
     }
  },
  created() {
  },
  activated() {
    document.body.className = 'main-body';
  },
  components: {
      'v-header': header,
      'v-plan': plan,
      'v-integralmall': integralmall,
      'v-me': me
    }
}
</script>
