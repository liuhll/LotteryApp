<template>
  <div class="run-lottery-wrapper">
    <div class="lottery-cell">第6287878期最新开奖:</div>
    <div class="lottery-number">
        <span v-for="(num,index) in 10" class="lottery-circle" :class="numberClassMap[num-1]">{{num}}</span>
       <div class="clear"></div>
    </div>
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
  background :#f4f4f4
  text-align :left
  padding-left : 8px
  .lottery-cell
    padding : 10px 0 5px 8px
    line-height :10px
    font-weight :200
    font-size :10px
    color :#ff5500
  .lottery-number
    margin : 5px  0 5px 10px
    span
      float :left
      display :block
      margin :0 3px
      height :20px
      width :20px
      line-height :20px
      border-radius: 50%
      text-align :center
      color :#fff
    .one
      background :#edae00
    .two
      background :#0483f6
    .three
      background :#474747
    .four
       background :#f16804
    .five
      background :#00bfcf
    .six
      background :#4606f4
    .seven
      background :#787878
    .eight
      background :#ef1410
    .nine
      background :#bf0c00
    .ten
      background :#1fbc04
    .clear
      clear :both
  .lottery-next-wrapper
    padding-bottom : 5px
    .lottery-next-time
      display :inline-block
      background-color :#EA0000
      margin-left :10px
      width :80px
      height :25px
      line-height :25px
      vertical-align: middle
      border-radius: 20px
      text-align :center
      font-size :8px
      color :#fff
    .btn-lottery-live
      width :60px
      height :25px
      line-height :25px
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
export default {
  created() {
     this.numberClassMap = [
        'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'
     ];
  }
}
</script>
