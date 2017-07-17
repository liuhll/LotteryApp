<template>
  <div class="lottery-item-wrapper">
    <div class="item-extra">
      <div class="item-period">
        <span>第1010101期</span>
      </div>
      <div class="item-date">
        <span class="date-text">2017-07-17</span>
        <span class="time-text">19:22</span>
      </div>
      <div class="clear"></div>
    </div>
    <div class="item-data">
      <lottery-number :lotteryNumber="lotteryNumber"></lottery-number>
    </div>
  </div>
</template>

<style lang="stylus">
.lottery-item-wrapper
  padding :5px 10px
  text-align :left
  border-bottom: 1px solid #f0f0f0
  .item-extra
    height :25px
    line-height :25px
    font-size :13px
    font-weight :500px
    .item-period
      float :left
      padding-left :2px
    .item-date
      float :right
      span
        display :inline-block
      .date-text
        padding-right :3px
      .time-text
        padding-right :20px

    .clear
      clear :both
  .item-data
    height :30px
    line-height :30px
</style>

<script type="ecmascript-6">
import LotteryNumber from 'components/lotterynumber/LotteryNumber'
export default {
  props: {
    lotteryData: {
      type: Object
    }
  },
  data() {
    return {
      lotteryNumber: [3, 4, 2, 1, 5, 6, 7, 8, 9, 10]
    }
  },
   components: {
    'lottery-number': LotteryNumber
  }

}
</script>
