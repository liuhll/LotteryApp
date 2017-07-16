<template>
<div class="plan-item-wrapper">
  <label class="mint-checklist-label">
    <span class="mint-checkbox">
      <input type="checkbox" class="mint-checkbox-input" value="1">
       <span class="mint-checkbox-core">
       </span>
    </span>
    <span class="mint-checkbox-label">{{planInfo.PlanName}}</span>
  </label>
</div>
</template>

<style lang="stylus">
.plan-item-wrapper
  margin :5px 12px 5px 0
  .mint-checklist-label
    padding : 4px 0
    .mint-checkbox-label
      margin-left : 1px
      font-size: 14px;
.mint-checkbox-core
  height :18px
  width :18px

</style>

<script type="ecmascript-6">

export default {
  props: {
    planInfo: {
      type: Object
    }
  }
}
</script>
