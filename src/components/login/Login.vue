<template>
  <div class="login-wapper" id="login">
      <div class="login-logo">
      </div>
       <div class="login-area">
          <div class="input input-bor">
           <i class="fa fa-user icon-inbox" aria-hidden="true"></i>
            <input type="text" id="userName"/>
          </div>
          <div class="input input-bor">
            <i class="fa fa-key icon-inbox" aria-hidden="true"></i>
            <input type="password" id="userPwd"/>
          </div>
          <input type="button" value="登录" class="btn btn-login"/>
       </div>

      <div class="login-enroll">
        <span><a href="javascript:void(0)">忘记密码?</a></span>
        <span><router-link to="register">账号注册</router-link></span>
      </div>

  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
body
  background-image :url('./Login_Backgroud.png')
  background-repeat: no
.login-wapper
  .login-area

    margin-top :160px
    padding :10px 15px
    height :150px
    .input-bor
      position :relative
      .icon-inbox
        position :absolute;
        left:30px;
        z-index:5
        background-repeat :no-repeat;
        line-height :35px
    .input
      height :40px
      width :100%
      margin :5px auto
      input
         height :35px
         width :80%
         border-radius: 5px;
         line-height :35px
         padding-left :30px
    .btn-login
      height :40px
      width :88%
      border-radius :5px
      background-color : #D9D919
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
  methods: {

  }
}
</script>

