<template>
   <div class="func-item-wrapper" @click="execFuncLottery($event,funcItemData)">
      <div class="func-icon">
        <img :src="funcItemData.imgSrc" :alt="funcItemData.cname">
      </div>
    <div class="func-text">{{funcItemData.cname}}</div>
  </div>
</template>

<style lang="stylus">
@import "./funcitem";

@media screen and (max-width: 350px)
  .func-item-wrapper
    item-wrapper(55px,14px,20px,8px)

@media screen and (min-width: 350px) and (max-width: 400px)
  .func-item-wrapper
    item-wrapper(60px,16px,23px,8px)

@media screen and (min-width: 400px) and (max-width: 450px)
  .func-item-wrapper
    item-wrapper(70px,16px,28px,10px)

@media screen and (min-width: 450px) and (max-width: 500px)
  .func-item-wrapper
    item-wrapper(80px,18px,32px,10px)
@media screen and (min-width: 500px)
  .func-item-wrapper
    item-wrapper(90px,18px,36px,10px)
</style>

<script type="text/ecmascript-6">
export default {
  props: {
    funcItemData: {
      type: Object
    }
  },
  methods: {
    execFuncLottery: function(event, funcData) {
      switch (funcData.name) {
        case 'choiceplan':
          this.choicePlan();
        break;
        case 'lotteryhistroy':
          this.lotteryHistroy();
        break;
        case 'setbasicnorm':
          this.setBasicNorm();
          break;
      }
    },
    choicePlan() {
      this.$router.push({ name: 'choice' });
    },
    lotteryHistroy() {
      this.$router.push({ name: 'history' });
    },
    setBasicNorm() {
      this.$router.push({ name: 'normbasic' });
    }
  }
}
</script>
