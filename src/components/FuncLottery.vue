<template>
<div class="lottery-func-wrapper">
  <div class="lottery-func-list">
  <div class="lottery-func">
      <div class="func-icon">
        <img src="./plan.svg" alt="选择计划">
      </div>
    <div class="func-text">选择计划</div>
  </div>
  <div class="lottery-func">
    <div class="func-icon">
      <img src="./function.svg" alt="切换公式">
    </div>
    <div class="func-text">切换公式</div>
  </div>
  <div class="lottery-func">
    <div class="func-icon">
      <img src="./norm.svg" alt="基础指标">
    </div>
    <div class="func-text">基础指标</div>
  </div>
  <div class="lottery-func">
    <div class="func-icon">
      <img src="./analyse.svg" alt="数据分析">
    </div>
    <div class="func-text">数据分析</div>
  </div>
   <div class="lottery-func">
    <div class="func-icon">
      <img src="./lotteryhistroy.svg" alt="历史开奖">
    </div>
    <div class="func-text">历史开奖</div>
  </div>
  <div class="lottery-func">
    <div class="func-icon">
      <img src="./authorize.svg" alt="购买授权">
    </div>
    <div class="func-text">购买授权</div>
  </div>
  <div class="clear"></div>
  </div>

</div>
</template>

<style lang="stylus">
.lottery-func-wrapper
  margin :0 auto
  height :90px
  background :#ffecec
  .lottery-func-list
    .lottery-func
      float :left
      width :90px
      position :relative
      padding :5px 0 0 14px
      text-align :center
      .func-icon
        height :20px
        width :20px
        line-height :20px
        position :relative
        left :34px
        border-radius: 50%
        img
          height :20px
          width :20px
      .func-text
        font-size :8px
        color :272727
        padding-top:6px
        line-height :10px
    .clear
      clear :both
</style>

<script type="text/ecmascript-6">
export default {
  data: function() {
    return {

    };
  }
}
</script>

