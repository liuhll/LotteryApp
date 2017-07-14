<template>
<div class="lottery-func-wrapper">
  <div class="lottery-func">
    <div class="func-icon"></div>
    <div class="func-text">选择计划</div>
  </div>
  <div class="lottery-func">
    <div class="func-icon"></div>
    <div class="func-text">切换公式</div>
  </div>
  <div class="lottery-func">
    <div class="func-icon"></div>
    <div class="func-text">基础指标</div>
  </div>
  <div class="lottery-func">
    <div class="func-icon"></div>
    <div class="func-text">数据分析</div>
  </div>
  <div class="lottery-func">
    <div class="func-icon"></div>
    <div class="func-text">历史开奖</div>
  </div>
  <div class="lottery-func">
    <div class="func-icon"></div>
    <div class="func-text">购买授权</div>
  </div>
  <div class="clear"></div>
</div>
</template>

<style lang="stylus">
.lottery-func-wrapper
  height :90px
  background :#ffecec
  .lottery-func
    float :left
    width :90px
    position :relative
    padding :2px 5px
    text-align :center
    .func-icon
      height :20px
      width :20px
      line-height :20px
      position :relative
      left :36px
      border-radius: 50%
      background:red
    .func-text
      font-size :10px
      padding-top:2px
      line-height :18px
  .clear
    clear :both
</style>

