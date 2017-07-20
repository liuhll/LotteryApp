<template>
  <div class="lottery-history-wrapper">
    <v-header :title="title"></v-header>
    <div class="history-opt-wrapper">
        <button type="button" class="btn btn-lottery-date" @click="open('picker')">选择日期</button>
    </div>
    <div class="lottery-history-container">
      <div class="lottery-history-list-wrapper">
         <lottery-history-item v-for="(item,index) in 100" :key="index"></lottery-history-item>
      </div>
    </div>
    <mt-datetime-picker
      ref="picker"
      type="date"
      v-model="value"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </mt-datetime-picker>
  </div>
</template>
<style lang="stylus">
.lottery-history-container
  margin-top: 60px

.history-opt-wrapper
  height :30px
  line-height :30px
  text-align :right
  background :#ffecf5
  top: 30px
  right: 0
  left: 0
  position: fixed
  z-index: 1
  .btn
    border : none
    background :none
    outline：none
    &:focus
      outline : 0
  .btn-lottery-date
    background-color :#ea0000
    border-radius :10px
    width :120px
    height :25px
    line-height :25px
    vertical-align :middle
    margin-right :10px
    color :#fff
    &:active
      background-color :#ae0000
      color :#ffd306
</style>


<script type="ecmascript-6">
import Header from 'components/header/Header';
import LotteryHistoryItem from 'components/lotteryhistory/LotteryHistoryItem';
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      title: {
        text: '开奖历史',
        showBack: true
      },
      value:null
    }
  },
  methods: {
    open(picker) {
      this.$refs[picker].open();
    },
    handleChange(value) {
       Toast({
         message: '已选择 ' + value.toString(),
         position: 'bottom'
       });
     }
  },
  components: {
    'v-header': Header,
    'lottery-history-item': LotteryHistoryItem
  }
}
</script>
