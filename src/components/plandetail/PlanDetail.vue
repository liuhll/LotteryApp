<template>
  <div class="plan-detail-container">
    <v-header :title="detailTitle"></v-header>
     <div class="page-navbar">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item :id="item.planTab.id" v-for="(item,index) in planDetails" :key="index">{{ item.planTab.text }}</mt-tab-item>
      </mt-navbar> 
    </div>
    <mt-tab-container class="swiper-container" v-model="selected">
      <mt-tab-container-item :id="item.planTab.id" v-for="(item,index) in planDetails" :key="index">
        <mt-cell v-for="(n,index) in 10" :key="index" :title="item.planTab.text  + n" />
      </mt-tab-container-item>
    </mt-tab-container>
</div>
</template>
<style lang="stylus">
.plan-detail-container
.page-navbar
  margin-top:30px
  .page-part
    height :35px   
    .mint-tab-item
      min-width :60px
      line-height :35px
      display :inline-block
      vertical-align :middle
      &.is-selected
        color :#ce0000
        border-bottom: 2px solid #ce0000

  .mint-tab-container
    margin-top: 15px

</style>

<script type="ecmascript-6">
import Header from "components/header/Header";
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
  },
  data(){
    return {
      detailTitle: {
        text: "计划详情",
        showBack: true
      },
      selected: '1',
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
        event.preventDefault();
        event.stopPropagation();
        that.dragging = true;
        that.userScrolling = false;
        that.doOnTouchStart(event);
      });
      element.addEventListener('touchmove', (event) => {
        if (!that.dragging) return;
        event.preventDefault();
        that.doOnTouchMove(event);
      },false);
      element.addEventListener('touchend', (event) => {
        if (!that.dragging) return;
        that.dragState = {};
        that.doOnTouchEnd(event);
        that.dragging = false;

      });
      this.$elswiper = element;
      this.$pages = element.getElementsByClassName('mint-tab-container-item');

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
      
      if (distanceX < 5 || (distanceX >= 5 && distanceY >= 1.73 * distanceX)) {
        this.noDrag = false;
        return;
      } else {
        this.noDrag = true;
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
      //debugger;
      console.log(offsetLeft);
      if(newIndex >= 0) {
        this.index = newIndex;
        this.selected = String(newIndex + 1);
      }

    },
    doOnTouchEnd(event) {
      console.log(this.noDrag);
      if (!this.noDrag) return;
      let dragState = this.dragState;
      let towards = null;
      this.noDrag = false;
      let offsetLeft = dragState.currentLeft - dragState.startLeft;
      let offsetTop = dragState.currentTop - dragState.startTop;
      let pageWidth = dragState.pageWidth;


    }
  },

  components: {
    'v-header': Header
  }
}
</script>
