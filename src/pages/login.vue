<template>
  <div class="login text-center">
    <img src="../assets/img/logo.png" alt="">
    <p class="text-center title">设备统一管理平台</p>
    <div class="login-form">
      <div class="form-item">
        <img src="../assets/img/mun.png" alt="">
        <input :value="form.name" type="text">
      </div>
      <div class="form-item">
        <img src="../assets/img/key.png" alt="">
        <input :value="form.password" type="text">
      </div>
      <button type="primary" @click="$router.push('/index')">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '18931894584',
        password: '111'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login{
  >img{
    width: 160px;
    height: 160px;
    margin-top: 14vh;
  }
  .title{
    font-size: 36px;
    color: #666;
    margin: 30px 0 80px;
  }
  .login-form{
    width: 520px;
    margin: 0 auto;
    .form-item{
      width: 100%;
      height: 80px;
      position: relative;
      border-bottom: solid 1px #418eee;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      img{
        width: 46px;
        height: 46px;
        margin-left: 8px;
        margin-right: 23px;
      }
      input{
        flex: 1;
        border-radius: 10px;
        background: none;
        outline: none;
        line-height: 80px;
        border: none;
        font-size: 28px;
      }
    }
    button{
      width: 100%;
      margin-top: 60px;
    }
  }
}
</style>
