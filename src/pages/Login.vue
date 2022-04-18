<template>
  <div class="login-page">
    <q-card class="login-form-content">
    <div class="title">登录</div>
      <q-form
          class="q-gutter-md"
      >
        <q-input
            filled
            label="用户名"
            lazy-rules
            :rules="[ val => val && val.length > 0 || '请输入用户名']"
        />

        <q-input
            filled
            type="password"
            label="密码"
            lazy-rules
            :rules="[
          val => val !== null && val !== '' || '请输入密码',
        ]"
        />

        <q-toggle v-model="accept" label="记住我"/>

        <div>
          <q-btn label="登录" class="full-width" type="submit" color="primary"/>
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script setup>
import {ref} from "vue";

const accept = ref(false)
</script>

<style scoped lang="less">
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login-form-content {
    .title{
      font-size: 40px;
      text-align: center;
      margin-bottom: 50px;
    }
    width: 400px;
    padding: 20px;
  }
}
</style>