<template>
  <div class="data-container">
    <v-header :title="title"></v-header>
    <div class="data-wrapper">
      <div class="data-item-list-wrapper">
          <a class="analyse-item-wrapper">
          <div class="analyse-item-img">
            <img src="./temper.svg" width="16" height="16" alt="冷热分析">
          </div>
          <div class="analyse-item-text">冷热分析</div>
        </a>
        <a class="analyse-item-wrapper">
          <div class="analyse-item-img">
            <img src="./missval.svg" width="16" height="16" alt="遗漏分析">
          </div>
          <div class="analyse-item-text">遗漏分析</div>
        </a>
        <a class="analyse-item-wrapper">
          <div class="analyse-item-img">
            <img src="./size.svg" width="16" height="16" alt="大小历史">
          </div>
          <div class="analyse-item-text">大小历史</div>
        </a>
        <a class="analyse-item-wrapper">
          <div class="analyse-item-img">
            <img src="./shape.svg" width="16" height="16" alt="单双历史">
          </div>
          <div class="analyse-item-text">单双历史</div>
        </a>
        <a class="analyse-item-wrapper">
          <div class="analyse-item-img">
            <img src="./longhubang.svg" width="16" height="16" alt="龙虎历史">
          </div>
          <div class="analyse-item-text">龙虎历史</div>
        </a>
        <a class="analyse-item-wrapper">
          <div class="analyse-item-img">
            <img src="./twosides.svg" width="16" height="16" alt="两面长龙">
          </div>
          <div class="analyse-item-text">两面长龙</div>
        </a>
        <a class="analyse-item-wrapper">
          <div class="analyse-item-img">
            <img src="./trend.svg" width="16" height="16" alt="横版走势">
          </div>
          <div class="analyse-item-text">横版走势</div>
        </a>
        <a class="analyse-item-wrapper">
          <div class="analyse-item-img">
            <img src="./lvzhu.svg" width="16" height="16" alt="露珠系列">
          </div>
          <div class="analyse-item-text">露珠系列</div>
        </a>
        <div class="clear"></div>
      </div>
    </div>
    <div></div>

  </div>
</template>

<style lang="stylus">
.data-wrapper
  margin:35px 10px 0 10px
  .data-item-list-wrapper
    .analyse-item-wrapper
      float :left
      display :inline-block
      min-height :50px
      min-width :20%
      padding: 5px 10px 2px 5px
      font-size :10px
      border  : 1px solid #ffc1e0
      color :#272727
      &:active
        background :#ff2d2d
        color :#ffe097
      .analyse-item-text
        margin-top :5px
        height :20px
        line-height :20px

    .clear
      clear:both
</style>

<script type="ecmascript-6">
import Header from 'components/header/Header';
export default {
  data() {
    return {
      title: {
        text: "数据分析中心",
        showBack: true
      }
    }
  },
  components: {
    'v-header': Header
  }
}
</script>
