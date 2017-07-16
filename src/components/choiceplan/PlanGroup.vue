<template>
<div class="plan-group-wrapper">
  <div class="plan-group-title">
    <span>{{planGroup.GroupName}}</span>
  </div>
  <div class="plan-list-wrapper">
    <plan-item class="plan-item" v-for="(planItem,index) in planGroup.Plans" :key="index" :planInfo="planItem"></plan-item>
    <div class="clear"></div>
  </div>
</div>
</template>

<style lang="stylus">
.plan-group-wrapper
  text-align :left
  .plan-group-title
     height :25px
     margin :2px 0
     background :#ffecf5
     line-height :25px
     padding-left :10px
     font-size :14px

.plan-list-wrapper
  padding-left : 10px
  .plan-item
    float :left
  .clear
    clear :both

</style>


<script type="ecmascript-6">
import PlanItem from 'components/choiceplan/PlanItem'
export default {
  props: {
    planGroup: {
      type: Object
    }
  },
  data() {
    return {
      value:[]
    };
  },
  components: {
    'plan-item': PlanItem
  }
}
</script>
