<template>
  <div class="predict-history-item">
     <div class="item-row first-row">
       <span class="predict-periods">305-307期</span>
       <span class="predict-text">杀</span>
       <span class="predict-type">预</span>
       <span class="predict-numbers">1 2 6 9</span>
     </div>
     <div class="item-row second-row">
       <span class="predict-small-period">2</span>
       <span class="predict-period">306期</span>
       <span class="predict-open">开</span>
       <span class="lottery-numbers">1 2 3 4 5  6 7 8  9 10</span>
     </div>
  </div>
</template>

<style lang="stylus">
@import "../../common/stylus/mixin.styl"
.predict-history-item
  padding :5px 10px 3px 10px
  border-top :1px solid #f0f0f0
  color : #272727
  &:last-child
    border-bottom :1px solid #f0f0f0
  .item-row
    padding :3px 0
    height :18px
    line-height :18px
    span
      display :inline-block
      padding :0 2px
    .predict-text
      color :#4a4aff
    .predict-type
      circle(10px,#ef1410,#ef1410,3px)

    .predict-numbers
      color :#00e3e3
    .predict-small-period
      circle(10px,#ef1410,#ef1410,3px)
    .predict-open
      color :#4a4aff

  .second-row
    text-align :right
</style>

<script type="ecmascript-6">
export default {

}
</script>

