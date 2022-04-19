<template>
  欢迎,{{ nickname }}
  <q-btn @click="logout">退出</q-btn>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const nickname = computed(()=>store.state.user.nickname)
const logout = () => store.dispatch('user/logout').then(()=>window.location.reload())
</script>

<style scoped>

</style>