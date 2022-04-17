<script setup>
import { ref } from 'vue'
import { hello } from "../api/hello"
const message = ref("云音乐盒")
const get = () => {
  hello().then(response => {
    message.value = response.data
  })
}
</script>

<template>
  <h1>{{ message }}</h1>
  <q-btn color="primary" @click="get">点击获取</q-btn>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
