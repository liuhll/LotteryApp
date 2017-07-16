<template>
<div class="lottery-func-wrapper">
  <div class="lottery-func-list">
  <func-lottery-item v-for="(item,index) in FuncLotteryList" :key="index" :funcItemData="item"></func-lottery-item>
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
  .clear
    clear :both
</style>

<script type="text/ecmascript-6">
import FuncLotteryItem from 'components/funlottery/FuncLotteryItem';

const FuncLotteryList = [{
  name: 'choiceplan',
  cname: '选择计划',
  imgSrc: require('./plan.svg')
}, {
  name: 'swithfunc',
  cname: '切换公式',
  imgSrc: require('./function.svg')
}, {
  name: 'setbasicnorm',
  cname: '基础指标',
  imgSrc: require('./norm.svg')
}, {
  name: 'dataanalyse',
  cname: '数据分析',
  imgSrc: require('./analyse.svg')
}, {
  name: 'lotteryyhistroy',
  cname: '历史开奖',
  imgSrc: require('./lotteryhistroy.svg')
}, {
  name: 'authorize',
  cname: '购买授权',
  imgSrc: require('./authorize.svg')
}];

export default {
  data: function() {
    return {
        FuncLotteryList: FuncLotteryList

    };
  },
  methods: {

  },
  components: {
    'func-lottery-item': FuncLotteryItem
  }
}
</script>

