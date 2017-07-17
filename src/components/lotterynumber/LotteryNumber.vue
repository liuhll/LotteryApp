<template>
 <div class="lottery-number">
    <span v-for="(num,index) in lotteryNumber" class="lottery-circle" :key="index" :class="getNumClassIndex(num)">{{num}}</span>
    <div class="clear"></div>
  </div>
</template>

<style lang="stylus">
@import '../../common/stylus/lottery-number'
lottery-number(5px 0 5px 10px,0 2px,25px,#fff)
</style>

<script type="text/ecmascript-6">
const numberClassList = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

export default {
  props: {
    lotteryNumber: {
      type: Array
    }
  },
  computed() {

  },
  methods: {
    getNumClassIndex(num) {
      let mod = num % numberClassList.length;
      if (mod === 0) {
        return numberClassList[numberClassList.length - 1];
      }
      return numberClassList[mod - 1];
    }
  },
  data() {
    return {
      numberClassMap: numberClassList
    }
  }
}

</script>
