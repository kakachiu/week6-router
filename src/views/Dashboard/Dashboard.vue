<template>
  <div class="container text-center mt-5">
    <div>後台</div>
    <router-link to="/admin/products">產品列表</router-link> |
    <router-link to="/admin/orders">訂單列表</router-link> |
    <router-link to="/admin/coupons">優惠券</router-link> |
    <router-link to="/">登出回前台</router-link>
    <router-view></router-view>
  </div>
</template>
