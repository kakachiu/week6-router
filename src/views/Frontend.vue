<template>
  <div class="text-center mt-5">
    <h2>前台</h2>
    <div class="mb-2">
      <router-link to="/">首頁</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/cart">購物車</router-link> |
      <router-link to="/login">登入</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>
