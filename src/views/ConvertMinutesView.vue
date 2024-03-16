<script setup>
import { ref, computed, onMounted } from 'vue';
import { minutesToTimesheet } from '@/utils/timeUtils';
import MainSubtitle from '@/components/MainSubtitle.vue';

const minutes = ref(null)

const timesheet = computed(function () {
  return minutesToTimesheet(minutes.value)
});

const previousPath = ref('')
previousPath.value = window.history.state?.back
</script>

<template>
  <div class="view-container animate__animated animate__fast" :class="previousPath && previousPath === '/calculate' ? 'animate__slideInRight' : 'animate__slideInDown'">
    <MainSubtitle title="Converter minutos" />
  
    <div class="input-container">
      <label for="total-minutes">Tempo total em minutos</label>
      <input id="total-minutes" type="number" v-model="minutes">
    </div>
  
    <div class="input-container">
      <label for="total-timesheet">Tempo total Timesheet</label>
      <input id="total-timesheet" type="text" :value="timesheet" readonly>
    </div>
  </div>
</template>
