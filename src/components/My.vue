<template>
    <div class="my-main">
      <p class="tit">我的喵喵</p>
      <p><input type="text" placeholder="账户名/手机号/Email"></p>
      <p><input type="text" placeholder="请输入您的密码"></p>
<p><input type="button" value="登录"></p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
  .my-main{
    width: 100%;
    height: 100%;
    background: yellow;
    .tit{
        height: 0.51rem;
        font-size: 0.18rem;
        line-height: 0.51rem;
        text-align: center;
        color: #fff;
        background: #e54847;
    }
  }
</style>