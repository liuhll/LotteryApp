<template>
<div>
  <div class="header">
  <div class="title">{{title.text}}</div>
  <div v-if="title.tabName==='tabPlan'" class="lottery-run-wrapper">
    <run-lottery></run-lottery>
    <func-cLottery></func-cLottery>
  </div>
 </div>
</div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
.header
  height : 30px
  background-color : #CE0000
  line-height :30px
  text-align :center
  .title
    font-size :15px
    color : #272727
    font-weight :500
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
  components: {
    'run-lottery': RunLottery,
    'func-cLottery': FuncLottery
  }
}
</script>
