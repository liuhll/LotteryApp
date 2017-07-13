<template>
<div class="register-wapper">
  <div class="register-title">
    <span class="back-wrapper">
      <router-link :to="{name:'login'}"> <i class="fa fa-chevron-left" aria-hidden="true"></i></router-link>
    </span>
    <span class="register-inline">注册</span>
  </div>

  <div class="register-tab">
    <ul>
      <li>
        <router-link :to="{name:'userNameRegister'}">用户名注册</router-link>
      <li>
        <router-link :to="{name:'phoneRegister'}">手机注册</router-link>
      </li>
    </ul>
  </div>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<style lang="stylus">
.body
  background-image :none
.register-title
  height :30px
  width :100%
  padding:5px 0
  line-height :25px
  color :#fff
  background-color :#ff4343
  .back-wrapper
    width :5%
    font-weight :200
    padding :5px
  .register-inline
    width :90%
    text-align :center
  & > span
    display :inline-block

.register-tab
  ul
    width:100%
    padding :5px 0
    li
      display :inline-block
      width :49%
      border-bottom :1px solid #ddd
      height :35px
      line-height :35px
      &:first-child
        border-right : 1px solid #eee
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
          border-bottom :1px solid rgb(240, 20, 20)
</style>



<script type="text/ecmascript-6">
export default {
  activated() {
    document.body.className = 'register-body';
  }
}
</script>
