<template>
  <div class="run-lottery-wrapper">
    <div class="lottery-cell">第6287878期最新开奖</div>
    <lottery-number :lotteryNumber="lotteryNumber"></lottery-number>
    <div class="lottery-next-wrapper">
      <span class="lottery-cell">距离第6287878开奖剩余:</span>
      <span class="lottery-next-time">00:00:30</span>
      <mt-button type="default" class="btn-lottery-live">直播</mt-button>
    </div>
  </div>
</template>

<style lang="stylus">
.run-lottery-wrapper
  height :90px
  background :#f0f0f0
  text-align :left
  padding-left : 8px
  padding-bottom : 5px
  .lottery-cell
    padding : 2px 0 3px 8px
    line-height :22px
    font-weight :500
    font-size :12px
    color :#ff5500
  .lottery-next-wrapper
    padding-bottom : 5px
    .lottery-next-time
      display :inline-block
      background-color :#EA0000
      margin-left :10px
      width :80px
      height :20px
      line-height :20px
      vertical-align: middle
      border-radius: 20px
      text-align :center
      font-size :10px
      color :#fff
    .btn-lottery-live
      width :60px
      height :20px
      line-height :20px
      vertical-align: middle
      border-radius :20px
      background-color :#EA0000
      text-align :center
      margin-left :5px
      font-size :8px
      color :#fff

  .clear
    clear :both
</style>

<script type="text/ecmascript-6">
import LotteryNumber from 'components/lotterynumber/LotteryNumber'
export default {
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
