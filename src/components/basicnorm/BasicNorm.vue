<template>
<div class="basic-norm-container">
  <v-header :title="title"></v-header>
  <div class="basic-norm-wrapper page-field">
    <div class="page-part">
      <mt-field label="计划周期" placeholder="用户设置的默认周期数"   type="number" v-model="norm.period"></mt-field>
      <mt-field label="定码个数" placeholder="用户设置的默认定码个数"   type="number" v-model="norm.number"></mt-field>
    </div>
    <div class="page-part">
      <mt-field label="指标基数" placeholder="基于历史开奖的数据分析总的期数" type="number" v-model="norm.basicNumber"></mt-field>
      <mt-field label="指标单元数" placeholder="基于历史开奖的数据分析的单元期数" type="number" v-model="norm.unitNunber"></mt-field>
    </div>
    <div class="page-part">
      <div class="weight-wrapper">
        <mt-cell title="冷热权重" class="weight-text"></mt-cell>
        <mt-range v-model="norm.temper.value" class="weight-value"  :bar-height="4">
         <div slot="start" v-if="norm.temper.start">{{ norm.temper.start }}</div>
         <div slot="end" v-if="norm.temper.end">{{ norm.temper.end }}</div>
        </mt-range>
        <div class="clear"></div>
      </div>

      <div class="weight-wrapper">
        <mt-cell title="大小权重" class="weight-text"></mt-cell>
        <mt-range v-model="norm.temper.value" class="weight-value" :bar-height="4">
         <div slot="start" v-if="norm.temper.start">{{ norm.temper.start }}</div>
         <div slot="end" v-if="norm.temper.end">{{ norm.temper.end }}</div>
        </mt-range>
        <div class="clear"></div>
      </div>
      <div class="weight-wrapper">
        <mt-cell title="三区间权重" class="weight-text"></mt-cell>
        <mt-range v-model="norm.temper.value" class="weight-value" :bar-height="4">
         <div slot="start" v-if="norm.temper.start">{{ norm.temper.start }}</div>
         <div slot="end" v-if="norm.temper.end">{{ norm.temper.end }}</div>
        </mt-range>
        <div class="clear"></div>
      </div>
      <div class="weight-wrapper">
        <mt-cell title="遗漏值权重" class="weight-text"></mt-cell>
        <mt-range v-model="norm.temper.value" class="weight-value" :bar-height="4">
         <div slot="start" v-if="norm.temper.start">{{ norm.temper.start }}</div>
         <div slot="end" v-if="norm.temper.end">{{ norm.temper.end }}</div>
        </mt-range>
        <div class="clear"></div>
      </div>
      <div class="weight-wrapper">
        <mt-cell title="奇偶权重" class="weight-text"></mt-cell>
        <mt-range v-model="norm.temper.value" class="weight-value" :bar-height="4">
         <div slot="start" v-if="norm.temper.start">{{ norm.temper.start }}</div>
         <div slot="end" v-if="norm.temper.end">{{ norm.temper.end }}</div>
        </mt-range>
        <div class="clear"></div>
      </div>
    </div>
    <div class="page-part">
      <mt-button  type="primary" size="large" class="btn-norm-commit">提交</mt-button>
    </div>
  </div>
</div>
</template>

<style lang="stylus">
.basic-norm-wrapper
  margin-top :30px
  .page-part
    .mint-cell
      min-height :30px
      padding :5px 0
      .mint-cell-wrapper
        line-height :30px
        font-size :12px
        border:none
        .mint-cell-title
          text-align :left
  .weight-wrapper
    .weight-text
      float :left
      width :35%
    .weight-value
      float :right
      width :65%
      height: 30px;
      line-height: 30px;
      padding-top: 5px;
    .clear
      clear:both
  .btn-norm-commit
    background :#ea0000
    height :35px
    margin-top :30px
</style>

<script type="ecmascript-6">
import Header from 'components/header/Header';
export default {
  data() {
    return {
      title: {
        text: '基础指标设置',
        showBack: true
      },
      norm: {
        period:3,
        number:3,
        basicNumber:1000,
        unitNunber:50,
        temper: {
          'value' :50,
          start: 1,
          end:100

        }
      }
    };
  },
  components: {
    'v-header': Header
  }
}
</script>
