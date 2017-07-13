<template>
  <div>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel">
      <img src="./phone-register.svg" height="16px" width="16px">
    </mt-field>
    <mt-field label="验证码" placeholder="请输入验证码" type="tel">
      <mt-button class="btn-identify-code" type="default" size="small">获取</mt-button>
      <img src="./identify-code.svg" height="16px" width="16px">
    </mt-field>
    <mt-field label="密      码" placeholder="请输入密码" type="password">
      <img src="./pwd-register.svg" height="16px" width="16px">
    </mt-field>
    <mt-field label="确认密码" placeholder="请确认密码" type="password">
      <img src="./pwd-register.svg" height="16px" width="16px">
    </mt-field>
    <div class="btn-register-wrapper">
        <mt-button class="btn-register" type="primary" size="large">立即注册</mt-button>
    </div>
  </div>
</template>

<style lang="stylus">
.btn-identify-code
  border-radius:0
  background-color: Transparent;
  border-style: none;
  border-left : 1px solid #ff4343
  color :#ff4343
  box-shadow:none;
  outline: none;
.btn-register-wrapper
  margin :15px 10px 10px 10px;
  border-radius:5px
  .btn-register
    background-color :#ff4343


</style>

