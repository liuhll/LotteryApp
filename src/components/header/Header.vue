<template>
<div>
  <div class="header">
  <div class="title">{{title.text}}</div>
  <div v-if="title.tabName==='tabPlan'" class="lottery-number">
    <div>tabPlan</div>
  </div>
 </div>
</div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
.header
  height : 30px
  background-color : #FF5151
  line-height :30px
  text-align :center
  .title
    font-size :15px
    color : #6c6c6c
    font-weight :500
  .lottery-number
    height : 80px
    background :red

</style>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: Object
    }
  }
}
</script>
