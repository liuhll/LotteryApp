<template>
  <div class="login-wapper" id="login">
      <div class="login-logo">
      </div>
       <div class="login-area">
          <div class="input input-bor">
           <i class="fa fa-user icon-inbox" aria-hidden="true"></i>
           <mt-field class="login-input" placeholder="请输入用户名|手机号|邮箱"></mt-field>
          </div>
          <div class="input input-bor">
            <i class="fa fa-key icon-inbox" aria-hidden="true"></i>
            <mt-field class="login-input" placeholder="请输入密码" type="password"></mt-field>
          </div>
          <mt-button class="btn-login" type="primary" size="large" @click="login">登录</mt-button>

       </div>

      <div class="login-enroll">
        <span><a href="javascript:void(0)">忘记密码?</a></span>
        <span><router-link to="register">账号注册</router-link></span>
      </div>

  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
.login-wapper
  .login-area
    margin-top :160px
    padding :10px 15px
    height :150px
    .input-bor
      position :relative
      .icon-inbox
        position :absolute;
        left:10px;
        z-index:5
        background-repeat :no-repeat;
        line-height :35px
    .input
      height :40px
      width :100%
      margin :5px auto
      input
         width :90%
         line-height :35px
         padding-left :30px
      .login-input
        margin : 15px 0
        border-radius: 5px;
        height :30px
    .btn-login
      height :40px
      border-radius :5px
      background-color : #D9D919
      margin-top :15px
      &:active
        background-color : red

  .login-enroll
    margin : 5px 0 10px 0
    & > span
      display :inline-block
      margin :5px 20px
      font-size :14px
      & > a
        line-height :20px
        padding :5px

</style>

<script type="text/ecmascript-6">
export default {
  activated() {
    document.body.className = 'login-body';
  },
  methods: {
    login() {
      this.$router.push({ name: 'main' });
    }

  }
}
</script>

