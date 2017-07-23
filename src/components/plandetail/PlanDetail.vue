<template>
  <div class="plan-detail-container">
    <v-header :title="detailTitle"></v-header>
    <div class="page-navbar">
      <mt-navbar class="page-part" :style="pagepartStyle" v-model="selected">
        <mt-tab-item :id="item.planTab.id" v-for="(item,index) in planDetails" :key="index">{{ item.planTab.text }}
        </mt-tab-item>
        <div class="clear"></div>
      </mt-navbar>
      <div class="swiper-container">
        <mt-tab-container  v-model="selected">
          <mt-tab-container-item :id="item.planTab.id" v-for="(item,index) in planDetails" :key="index">
            <plan-detail-content :areaDistance="areaDistance"></plan-detail-content>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>

</div>
</template>
<style lang="stylus">
.plan-detail-container
  height :100%
.page-navbar
  padding-bottom :3px
  overflow-x :scroll
  border-bottom :1px solid #e0e0e0
  position :fixed
  top: 30px
  width :100%
  height :100%
  &::-webkit-scrollbar-x
    display :none
  &::-ms-scrollbar-x
    display :none
  &::-moz-scrollbar-x
    display :none
  &::-o-scrollbar-x
    display :none
  &::scrollbar-x
    display :none
  .page-part
    height :35px
    position :fixed
    width :100%
    & > a
      display :inline-block
      float :left
    .clear
      clear :both
    .mint-tab-item
      min-width :60px
      line-height :35px
      vertical-align :middle
      background :#f0f0f0
      &.is-selected
        color :#ce0000
        border-bottom: 2px solid #ce0000

.swiper-container
  margin-top :35px
  position :relative
  height :100%
  z-index :-1

</style>

<script type="ecmascript-6">
import Header from "components/header/Header";
import PlanDetailContent from 'components/plandetail/PlanDetailContent';
export default {
  created() {
    this.dragState = {};
    this.ready = false;
    this.animating = false;
    this.userScrolling = false;
    this.noDrag = false;
    this.isDone = false;
    this.$elswiper = null;
    this.$pages = [];
    this.pagepartStyle = {};
  },
  data(){
    return {
      detailTitle: {
        text: "计划详情",
        showBack: true
      },
      selected: '1',
      areaDistance: { },
      planDetails: [
        {
           planTab: {
             id: '1',
             text: "冠军"
           }
        }, {
            planTab: {
              id: '2',
              text: "亚军"
            }
        },  {
            planTab: {
              id: '3',
              text: "季军"
            },
        },
        {
            planTab: {
              id: '4',
              text: "第四名"
            },
        },
        {
            planTab: {
              id: '5',
              text: "第五名"
            },
        },
        {
            planTab: {
              id: '6',
              text: "第六名"
            },
        },
        {
            planTab: {
              id: '7',
              text: "第七名"
            },
        },
          {
            planTab: {
              id: '8',
              text: "第八名"
            },
        },
         {
            planTab: {
              id: '9',
              text: "第九名"
            },
        }
      ]
    }
  },
  computed: {
    index: function() {
      return Number(this.selected) - 1;
    }
  },
  mounted() {
    this.ready = true;
    let that = this;
    let element = this.$el.getElementsByClassName('swiper-container')[0];
      element.addEventListener('touchstart', (event) => {
        //event.preventDefault();
        that.dragging = true;
        that.userScrolling = false;
        that.doOnTouchStart(event);
      });
      element.addEventListener('touchmove', (event) => {
        if (!that.dragging) return;
        that.doOnTouchMove(event);
      });
      element.addEventListener('touchend', (event) => {
        if(that.userScrolling) {
          that.dragging = false;
          that.dragState = {};
          return;
        }
        if (!that.dragging) return;
        that.dragState = {};
        that.doOnTouchEnd(event);
        that.dragging = false;

      });
      this.$elswiper = element;
      this.$pages = element.getElementsByClassName('mint-tab-container-item');
      this.computeAreaDistance(0);
  },
  methods: {
    doOnTouchStart(event) {
      if (this.noDrag) return;

        let elswiper = this.$elswiper;
        let dragState = this.dragState;
        let touch = event.touches[0];

        dragState.startLeft = touch.pageX;
        dragState.startTop = touch.pageY;
        dragState.startTopAbsolute = touch.clientY;

        dragState.pageWidth = elswiper.offsetWidth;
        dragState.pageHeight = elswiper.offsetHeight;
        let prevPage,dragPage,nextPage;
        if(this.index > 0) {
          prevPage = this.$pages[this.index - 1];
        }
          dragPage = this.$pages[this.index];
        if(this.index < this.$pages.length - 1){
          nextPage = this.$pages[this.index + 1];
        }

        dragState.prevPage = prevPage ? prevPage : null;
        dragState.dragPage = dragPage ? dragPage : null;
        dragState.nextPage = nextPage ? nextPage : null;


    },
    doOnTouchMove(event) {
      if (this.noDrag) return;
      let dragState = this.dragState;
      let touch = event.touches[0];
      dragState.currentLeft = touch.pageX;
      dragState.currentTop = touch.pageY;
      dragState.currentTopAbsolute = touch.clientY;

      let offsetLeft = dragState.currentLeft - dragState.startLeft;
      let offsetTop = dragState.currentTopAbsolute - dragState.startTopAbsolute;

      let distanceX = Math.abs(offsetLeft);
      let distanceY = Math.abs(offsetTop);

      if (distanceX < 35 || (distanceX >= 35 && distanceY >= 1.73 * distanceX)) {
        this.noDrag = false;
        this.userScrolling = true;
        return false;
      } else {
        this.noDrag = true;
        this.userScrolling = false;
        event.preventDefault();
      }

      offsetLeft = Math.min(Math.max(-dragState.pageWidth + 1, offsetLeft), dragState.pageWidth - 1);
      let towards = offsetLeft < 0 ? 'next' : 'prev';
      let newIndex;
      if(towards === 'next') {
        if(dragState.nextPage) {
          newIndex = this.index + 1;
        }

      }else {
         if(dragState.prevPage) {
            newIndex = this.index - 1
         }
      }
      if(newIndex >= 0) {

      this.index = newIndex;
      this.selected = String(newIndex + 1);
      this.adjustPosion(newIndex);
      }

    },
    doOnTouchEnd(event) {
      if (!this.noDrag) return;
      let dragState = this.dragState;
      let towards = null;
      this.noDrag = false;
      let offsetLeft = dragState.currentLeft - dragState.startLeft;
      let offsetTop = dragState.currentTop - dragState.startTop;
      let pageWidth = dragState.pageWidth;
      this.computeAreaDistance(this.index);

    },
    adjustPosion(index) {
      let flb_w = this.$el.parentElement.getElementsByClassName('page-part')[0].offsetWidth;
      let fl_w = this.$el.parentElement.getElementsByClassName('page-part')[0].scrollWidth;
      let nav_w = this.$el.parentElement.getElementsByClassName('mint-tab-item')[0].offsetWidth;
      let fnl_x = nav_w * index;
      let fn_w = (flb_w- nav_w) / 2;
      let fnl_l;
      if (fnl_x <= fn_w) {
          fnl_l = 0;
      } else if (fn_w - fnl_x <= flb_w - fl_w) {
          fnl_l = flb_w - fl_w;
      } else {
          fnl_l = fn_w - fnl_x;
      }
      this.pagepartStyle = {left:fnl_l + 'px'};
    },
    computeAreaDistance(index) {
      let lotteryAreaHeight = this.$el.getElementsByClassName('lottery-area')[index].offsetHeight;
      let statisticAreaHeight = this.$el.getElementsByClassName('content-statistic-area')[index].offsetHeight;
      let distanceHeight = lotteryAreaHeight + statisticAreaHeight + 5;
      this.areaDistance = {
          'padding-top': distanceHeight + 'px'
      };
    }
  },

  components: {
    'v-header': Header,
    'plan-detail-content': PlanDetailContent
  }
}
</script>
