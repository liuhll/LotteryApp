<template>
  <div class="choice-plan-wrapper">
    <v-header :title="title"></v-header>
    <div class="selected-plan-wrapper">
      <div class="selected-plan-title">
        <span class="plan-title-text">已选计划</span>
        <span class="selected-plan-icon">
          <img src="./delete.svg" alt="删除" width="24" height="24"/>
        </span>
        <span class="clear"></span>
      </div>
      <div class="selected-plan-list">
        <span>冠军定码</span>
        <span>冠军定码</span>
        <span>冠军定码</span>
        <span>冠军定码</span>
        <span>冠军定码</span>
        <span>冠军定码</span>
        <span>冠军定码</span>
        <span>冠军定码</span>
        <span>冠军定码</span>
        <span>冠军定码</span>
        <span>冠军定码</span>
        <span>冠军定码</span>

      </div>
    </div>
    <div class="all-plan-wrapper">
      <div class="plan-title-wrapper">
        <span class="plan-title-text">所有计划</span>
        <span class="clear"></span>
      </div>
      <plan-group v-for="(item,index) in 10" :key="index" :planGroup="planGroup"></plan-group>
    </div>
  </div>
</template>

<style lang="stylus">
@import "../../common/stylus/mixin";

.choice-plan-wrapper
  .selected-plan-wrapper
    min-height :60px
    background-color :#fafafa
    border-bottom :1px solid #eee
    box-shadow: 1px 1px 1px #fcfcfc
    padding :5px 0 10px 0
    .selected-plan-title
      height :28px
      line-height :28px
      font-size : 15px
      margin-top : 4px
      padding : 3px 0 6px 10px

      .plan-title-text
        float :left
        background :#ff97bc
        color :#FFF
        padding : 0 6px
        border-radius :3px
      .selected-plan-icon
        float :right
        height :28px
        width :28px
        line-height :28px
        padding :0 10px
        vertical-align :middle
        margin-right :5px
        border-radius :3px

      span
        display :inline-block
      .clear
        clear :both

  .selected-plan-list
    margin-top: 5px
    padding :3px 0 6px 10px
    text-align :left
    span
      display :inline-block
      background :#EA0000
      padding :6px 10px
      margin :2px 5px
      border-radius :8px
      color :#fff
  .all-plan-wrapper
    .plan-title-wrapper
      height :28px
      line-height :28px
      font-size : 15px
      margin-top : 4px
      padding : 3px 0 6px 10px
      .plan-title-text
        float :left
        background :#ff97bc
        color :#FFF
        padding : 0 6px
        border-radius :3px
        span
          display :inline-block
        .clear
          clear :both


</style>

<script type="ecmascript-6">
import Header from 'components/header/Header';
import PlanGroup from 'components/choiceplan/PlanGroup';
const planGroup = {
      "LotteryType": "bjpks",
      "GroupId": 1,
      "GroupName": "定位系列",
      "IsSelecedGroup": false,
      "Plans": [
        {
          "PlanId": 1,
          "PlanName": "冠军定码",
          "IsSelected": false
        },
        {
          "PlanId": 2,
          "PlanName": "亚军定码",
          "IsSelected": false
        },
        {
          "PlanId": 3,
          "PlanName": "季军定码",
          "IsSelected": true
        },
        {
          "PlanId": 4,
          "PlanName": "第4名定码",
          "IsSelected": false
        },
        {
          "PlanId": 5,
          "PlanName": "第5名定码",
          "IsSelected": false
        },
        {
          "PlanId": 6,
          "PlanName": "第6名定码",
          "IsSelected": false
        },
        {
          "PlanId": 7,
          "PlanName": "第7名定码",
          "IsSelected": false
        },
        {
          "PlanId": 8,
          "PlanName": "第8名定码",
          "IsSelected": false
        },
        {
          "PlanId": 9,
          "PlanName": "第9名定码",
          "IsSelected": false
        },
        {
          "PlanId": 10,
          "PlanName": "第10名定码",
          "IsSelected": false
        },
        {
          "PlanId": 11,
          "PlanName": "冠军杀码",
          "IsSelected": false
        },
        {
          "PlanId": 12,
          "PlanName": "亚军杀码",
          "IsSelected": false
        },
        {
          "PlanId": 13,
          "PlanName": "季军杀码",
          "IsSelected": false
        },
        {
          "PlanId": 14,
          "PlanName": "第4名杀码",
          "IsSelected": false
        },
        {
          "PlanId": 15,
          "PlanName": "第5名杀码",
          "IsSelected": false
        },
        {
          "PlanId": 16,
          "PlanName": "第6名杀码",
          "IsSelected": false
        },
        {
          "PlanId": 17,
          "PlanName": "第7名杀码",
          "IsSelected": false
        },
        {
          "PlanId": 18,
          "PlanName": "第8名杀码",
          "IsSelected": false
        },
        {
          "PlanId": 19,
          "PlanName": "第9名杀码",
          "IsSelected": false
        },
        {
          "PlanId": 20,
          "PlanName": "第10名杀码",
          "IsSelected": false
        }
      ]
    }
export default {
  data() {
    return {
      title: {
        text: '选择计划',
        showBack: true
      },
      planGroup: planGroup

    }
  },
  components:{
    'v-header':Header,
    'plan-group':PlanGroup
  }
}
</script>
