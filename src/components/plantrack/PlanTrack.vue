<template>
<div class="track-plan-wrapper" :class="trackClass">
  <div class="trank-row">
    <div class="plan-name trank-first-left">
      <img src="./plan-track.svg" width="14" height="14" alt="计划追号"/>
      <span>冠军</span>
    </div>
    <div class="track-list-wrapper trank-first-right">
      <div class="track-list">
        <span v-for="(item,index) in 10" :key="index"></span>
        <div class="track-percent">80%</div>
      </div>

    </div>
    <div class="clear"></div>
  </div>
  <div class="trank-row">
    <div class="track-plan trank-second-left">
      <span class="tranck-period">101期-103期</span>
      <span class="tranck-minor-period">2</span>
      <span class="prediction-type">定</span>
      <span class="tranck-number">1 2 3 4</span>
    </div>
    <div class="track-plan-option trank-second-right">
      <span>数据</span>
      <span>详情</span>
    </div>
     <div class="clear"></div>
  </div>
</div>
</template>

<style lang="stylus">
@import "../../common/stylus/mixin"
.track-plan-wrapper
  height :50px
  text-align :left
  padding : 5px
  .trank-row
    height : 25px
    line-height :20px
    .plan-name
      padding : 2px 0 2px 5px
      img
        vertical-align :middle
      span
        margin-left :3px
        font-size: 14px
        font-weight :600
        line-height :14px
        vertical-align :middle

    .track-list-wrapper
      span
        display :inline-block
        height :6px
        width :6px
        margin : 0 1px
        line-height :25px
        vertical-align :middle
        background :red
  .trank-first-left
    float :left
  .trank-first-right
    float :right
    .track-percent
      display :inline-block
      margin-left :3px
      margin-right :3px
      line-height :25px
  .trank-second-left
    float :left
    padding-top: 3px
    .tranck-period
      padding :3px
      font-size :13px
      line-height :25px
    .tranck-minor-period
      circle(10px,#317ef3,#317ef3,3px)
      vertical-align :middle
    .prediction-type
      circle(11px,red,red,2px)
      border-radius :30%
      vertical-align :middle
      margin-left :4px
    .tranck-number
      font-size :14px
      color :#00e3e3
      line-height :25px
  .trank-second-right
    float :right
    margin-right :15px
    span
      width :50px
      height :20px
      display :inline-block
      line-height :20px
      vertical-align: middle
      border-radius :20px
      background-color :#EA0000
      text-align :center
      margin-left :5px
      font-size :12px
      color :#fff

  .clear
    clear :both
&.plan-track-odd
  background :#fAfAfA
</style>

<script type="text/ecmascript-6">
export default {
  props: {
    trackClass: {
      type: String
    }
  },
  created() {
  }
}
</script>

