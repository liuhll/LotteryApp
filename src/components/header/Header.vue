<template>
<div class="header-wrapper">
  <div class="header">
  <div class="title-wrapper">
    <span v-if="title.showBack" class="back" @click="back">
      <img src="./back.svg" alt="返回"/>
    </span>
    <span class="title" :class="{'letf-patch-title':!title.showBack }">{{title.text}}</span>
    <span class="set">
      <img v-if="title.showSet" src="./set.svg" alt="设置"/>
    </span>
  </div>
  <div v-if="title.tabName==='tabPlan'" class="lottery-run-wrapper">
    <run-lottery></run-lottery>
    <func-cLottery></func-cLottery>
  </div>
 </div>
</div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
.header-wrapper
  top: 0
  right: 0
  left: 0
  position: fixed
  z-index: 1
  .header
    height : 30px
    background-color : #CE0000
    line-height :30px
    text-align :center
    .title-wrapper
      font-size :15px
      color : #FCFCFC
      span
        display :inline-block
      .back
        width :12%
        margin-left : -10px
        img
          width :20px
          height :20px
          line-height :20px
          vertical-align :middle
          padding : 3px
      .title
        width :74%
        font-weight :700
      .letf-patch-title
        padding-left :35px
      .set
        width : 12%

        img
          width :20px
          height :20px
          line-height :20px
          vertical-align :middle
          padding : 3px
    .lottery-run-wrapper
      height : 180px

</style>

<script type="text/ecmascript-6">
import RunLottery from 'components/runlottery/RunLottery'
import FuncLottery from 'components/funlottery/FuncLottery'
export default {
  props: {
    title: {
      type: Object
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  components: {
    'run-lottery': RunLottery,
    'func-cLottery': FuncLottery
  }
}
</script>
