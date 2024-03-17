<script setup>
import NoIcon from './Icons/NoIcon.vue';
import ArrowLeft from './Icons/ArrowLeft.vue';
import ArrowRight from './Icons/ArrowRight.vue';
import CircleExclamation from './Icons/CircleExclamation.vue';

const props = defineProps(['icon', 'size'])

const getIconComponent = () => {
  switch (props.icon) {
    case 'ArrowLeft':
      return ArrowLeft
    case 'ArrowRight':
      return ArrowRight
    case 'CircleExclamation':
      return CircleExclamation
    default:
      return NoIcon;
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

  fill: white;
}
</style>
