<script setup>
const props = defineProps(['title'])
</script>

<template>
  <div class="subtitle-container">
    <h2 class="page-subtitle">{{ props.title }}</h2>
  </div>
</template>

<style scoped>
.subtitle-container {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 0 32px;
}

.page-subtitle {
  font-weight: 600;
  padding: 0 12px;
}
</style>
