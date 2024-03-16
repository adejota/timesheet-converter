<script setup>
import { computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Icon from '@/components/Icon.vue';

const animate = ref(0)
const route = useRoute();
const currentPath = computed(function () {
  return route.path
});

const router = useRouter()
function handleNavigate(path) {
  animate.value++
  router.push(path)
}
</script>

<template>
  <footer :key="animate" class="footer-container animate__animated animate__slideInUp"
    :class="currentPath === '/' ? 'end' : 'start'"
  >
    <button v-if="currentPath !== '/'"
      @click="handleNavigate('/')"
    >
      <Icon :icon="'ArrowLeft'" />
    </button>

    <button v-else
      @click="handleNavigate('/calculate')"
    >
      <Icon :icon="'ArrowRight'" />
    </button>
  </footer>
</template>

<style scoped>

.footer-container {
  position: absolute;
  bottom: 0;
  padding: 32px;
  display: flex;
  width: 100%;
}

.footer-container.end {
  justify-content: end;
}

.footer-container.start {
  justify-content: start;
}

.footer-container button {
  padding: 16px 24px;
  text-decoration: none;
  font-size: 32px;
  border: none;
  background-color: var(--primary-color);
  border-radius: 8px;
}

.footer-container button:focus {
  outline: 2px solid var(--secondary-color);
}

.footer-container button a {
  color: var(--secondary-color);
}
</style>
