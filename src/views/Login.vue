<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <h1 class="h3 mb-4 font-weight-bold text-center text-success">請先登入</h1>
      <div class="col-6">
        <form class="form-signin" id="form">
          <div class="form-floating mb-3">
            <input class="form-control" id="username" type="email" placeholder="請輸入 E-Mail" v-model="username" />
            <label for="username">請輸入 E-Mail</label>
          </div>
          <div class="form-floating">
            <input class="form-control" id="password" type="password" placeholder="請輸入密碼" v-model="password" />
            <label for="password">請輸入密碼</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="login">登入</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      const username = this.username
      const password = this.password
      if (username === '' || password === '') {
        alert('請輸入帳號或密碼')
        return
      };
      const info = {
        username,
        password
      }

      this.axios.post(`${process.env.VUE_APP_API}/admin/signin`, info)
        .then(res => {
          alert(res.data.message)
          const { expired, token } = res.data
          document.cookie = `token=${token}; expires=${new Date(expired)}`
          // 登入成功後轉址
          this.$router.push('/admin/products')
        })
        .catch(error => {
          alert(error.response.data.message)
          this.username = ''
          this.password = ''
        })
    }
  }
}
</script>
