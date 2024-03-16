<script setup>
import ArrowLeft from './Icons/ArrowLeft.vue';
import ArrowRight from './Icons/ArrowRight.vue';

const props = defineProps(['icon', 'size'])

const getIconComponent = () => {
  if (props.icon === 'ArrowLeft') {
    return ArrowLeft;
  } else if (props.icon === 'ArrowRight') {
    return ArrowRight;
  }
};
</script>

<template>
  <div class="icon-container" :style="`width: ${props.size || '24'}px; height: ${props.size || '24'}px;`">
    <component :is="getIconComponent()" />
  </div>
</template>

<style scoped>
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;

  fill: var(--secondary-color);
}
</style>
