<template>
  <div>前台產品</div>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col" width="300">產品圖片</th>
        <th scope="col">產品名稱</th>
        <th scope="col">價格</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td> <img :src="item.imageUrl" class="img-thumbnail img-fluid"></td>
        <td>{{ item.title }}</td>
        <td>
          <p class="originPrice">原價 {{ item.origin_price }}</p>
          <p>特價 {{ item.price }}</p>
        </td>
        <td>
          <router-link :to="`/product/${item.id}`">查看詳細內容</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      this.axios.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`)
        .then(res => {
          this.products = res.data.products
        })
        .catch(error => {
          alert(error.response.data.message)
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
<style lang="sass">
.originPrice
  text-decoration: line-through
</style>
