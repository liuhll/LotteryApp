<template>
   <div class="func-item-wrapper">
      <div class="func-icon">
        <img :src="funcItemData.imgSrc" :alt="funcItemData.name">
      </div>
    <div class="func-text">{{funcItemData.name}}</div>
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
  }
}
</script>
