<template>
  <div>單一產品頁</div>
  <h2> {{ product.title }} </h2>
  <img :src="product.imageUrl" alt="">
  <p> {{ product.description }}</p>
</template>

<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      this.axios.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.$route.params.id}`)
        .then(res => {
          this.product = res.data.product
        })
        .catch(error => {
          alert(error.response.data.message)
        })
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
