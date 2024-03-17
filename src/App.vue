<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
import FooterNav from './components/FooterNav.vue';
import Alert from './components/Alert.vue';

</script>

<template>
  <MainHeader />

  <main>
    <RouterView />
  </main>

  <FooterNav />
  <Alert />
</template>

<style scoped>
</style>
