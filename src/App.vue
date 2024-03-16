<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
import FooterNav from './components/FooterNav.vue';
</script>

<template>
  <MainHeader />

  <main>
    <RouterView />
  </main>

  <FooterNav />
</template>

<style scoped>
</style>
