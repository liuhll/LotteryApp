<template>
  <div class="plan-detail-content-wrapper">
  	<div class="lottery-area">
  		<div class="lottery-current-text">
        <span>第600039期开奖</span>
        <span class="btn-change-norm">更改指标</span>
        <div class="clear"></div>
      </div>
  		<lottery-number :lotteryNumber="lotteryNumber"></lottery-number>
  		<div class="lottery-predict-wrapper">
        <div class="lottery-predict-info">
           <span class="lottery-predict-periods">041期-042期</span>
           <span class="lottery-predict-text">预</span>
           <span class="lottery-predict-number">1 2 3 4</span>
  		  </div>
        <div class="lottery-time-wrapper">
          <span class="lottery-small-period">2</span>
          <span class="lottery-next-period">189期</span>
          <span class="lottery-next-time">00:00:30</span>
        </div>
        <div class="clear"></div>
      </div>
  	</div>

 	  <div class="content-statistic-area">
        <div class="statistic-wrapper">
          <span class="statistic-title">准确率</span>
          <span class="statistic-value">70%</span>
        </div>
          <div class="statistic-wrapper">
          <span class="statistic-title">准确率</span>
          <span class="statistic-value">70%</span>
        </div>
          <div class="statistic-wrapper">
          <span class="statistic-title">准确率</span>
          <span class="statistic-value">70%</span>
        </div>
          <div class="statistic-wrapper">
          <span class="statistic-title">准确率</span>
          <span class="statistic-value">70%</span>
        </div>
          <div class="statistic-wrapper">
          <span class="statistic-title">准确率</span>
          <span class="statistic-value">70%</span>
        </div>
          <div class="statistic-wrapper">
          <span class="statistic-title">准确率</span>
          <span class="statistic-value">70%</span>
        </div>
          <div class="statistic-wrapper">
          <span class="statistic-title">准确率</span>
          <span class="statistic-value">70%</span>
        </div>
          <div class="statistic-wrapper">
          <span class="statistic-title">准确率</span>
          <span class="statistic-value">70%</span>
        </div>
          <div class="statistic-wrapper">
          <span class="statistic-title">准确率</span>
          <span class="statistic-value">70%</span>
        </div>
        <div class="clear"></div>
  	  </div>

    <div class="predict-history-area" :style="areaDistance">
      <predict-history-item v-for="(item,index) in 10" :key="index"></predict-history-item>
  	</div>

  </div>
</template>

<style lang="stylus">
.plan-detail-content-wrapper
  text-align :left
  .lottery-area
    padding : 12px 10px 10px 8px
    background :#fbfbfb
    position :fixed
    width :100%
    .lottery-current-text
      font-size :12px
      margin-bottom :10px
      color:#5b5b5b
      span
        line-height :16px
      .btn-change-norm
        display: inline-block;
        background-color: #ea0000;
        width: 80px;
        height: 20px;
        line-height: 20px;
        vertical-align: middle;
        border-radius: 20px;
        text-align: center;
        font-size: 10px;
        color: #fff;
        float :right
        margin-right :20px
      .clear
        clear :both
    .lottery-predict-wrapper
       margin-top:10px
      .lottery-predict-info
        float :left
        .lottery-predict-periods
          color:#5b5b5b
          height :24px
          line-height :24px
        .lottery-predict-text
          color :#ea0000
          margin :0 8px
        .lottery-predict-number
          color :#ea0000
      .lottery-time-wrapper
        float :right
        margin-right: 20px;
        span
          height :24px
          line-height :24px
          display :inline-block
        .lottery-small-period
          width :16px
          height :16px
          line-height :16px
          text-align :center
          color :#4a4aff
          border :1px solid #4a4aff
          border-radius :50%
        .lottery-next-period
          margin : 0 10px
          color: #5b5b5b
        .lottery-next-time
          display: inline-block;
          background-color: #ea0000;
          width: 80px;
          height: 20px;
          line-height: 20px;
          vertical-align: middle;
          border-radius: 20px;
          text-align: center;
          font-size: 10px;
          color: #fff;
      .clear
        clear :both
  .content-statistic-area
    position :fixed
    top :170px
    width :100%
    padding :3px 5px
    margin-right :10px
    background :#ffecec
    .statistic-wrapper
      float :left
      padding :4px 5px 4px 5px
      height :18px
      line-height :18px
      .statistic-title
        color :#7e8c8d
      .statistic-value
        color :#ce0000
    .clear
      clear:both

  .predict-history-area
    padding-bottom :60px
</style>

<script type="ecmascript-6">
import LotteryNumber from 'components/lotterynumber/LotteryNumber';
import PredictHistoryItem from 'components/plandetail/PredictHistoryItem';
export default {

  props: {
    areaDistance: {
      type: Object
    }
  },
  data() {
    return {
      lotteryNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
	components: {
		'lottery-number': LotteryNumber,
    'predict-history-item': PredictHistoryItem
	}
}
</script>
