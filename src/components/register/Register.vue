<template>
<div class="register-wapper">
  <div class="register-title"></div>
  <div class="register-tab">
    <ul>
      <li>
        <router-link to="/userRegister">用户名注册</router-link>
      <li>
        <router-link to="/phoneRegister">手机注册</router-link>
      </li>
    </ul>
  </div>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>
