<script setup>
import Icon from '@/components/Icon.vue'
import { useAlertStore } from '@/stores/alert'

const alertStore = useAlertStore()
</script>

<template>
  <div v-if="alertStore.show" class="alert-container animate__animated animate__fast animate__bounceIn">
    <Icon icon="CircleExclamation" class="alert-icon" />
    <span>{{ alertStore.msg }}</span>
  </div>
</template>

<style scoped>
.alert-container {
  padding: 24px;
  margin: 24px;
  background-color: var(--secondary-color);
  color: white;
  position: absolute;
  top: 0;
  z-index: 200;
  width: calc(100% - 48px);
  border-radius: 8px;
  display: flex;
}

.alert-icon {
  margin-right: 12px;
}
</style>