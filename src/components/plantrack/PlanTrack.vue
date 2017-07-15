<template>
<div class="plan-track-wrapper" :class="trackClass">
  <div class="trank-row">第一行</div>
  <div class="trank-row">第二行</div>
</div>
</template>

<style lang="stylus">
.plan-track-wrapper
  height :50px
  text-align :left
  padding : 5px
  .trank-row
    height : 25px
    line-height :25px
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

