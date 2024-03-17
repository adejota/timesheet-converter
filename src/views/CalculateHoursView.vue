<script setup>
import { computed, ref, onMounted } from 'vue';
import { minutesToTimesheet, timeToMinutes } from '@/utils/timeUtils';
import MainSubtitle from '@/components/MainSubtitle.vue';
import { useAlertStore } from '@/stores/alert'

const alertStore = useAlertStore()

const timeStart = ref(null)
const timeEnd = ref(null)

const totalMinutes = computed(function () {
  if (!timeEnd.value || timeEnd.value.length < 5) {
    return 0
  }

  if (!timeStart.value || timeStart.value.length < 5) {
    return 0
  }

  const start = timeToMinutes(timeStart.value)
  const end = timeToMinutes(timeEnd.value)

  if (end < start) {
    alertStore.showAlert('Término não pode ser menor do que o início')
    return 0
  }

  return end - start
});

const timeSheet = computed(function () {
  return minutesToTimesheet(totalMinutes.value)
});

function validateLength(value) {
  if (value && value.length < 5) {
    alertStore.showAlert('O formato do horário deve ser hh:mm')
  }
}

const previousPath = ref('')
previousPath.value = window.history.state?.back
</script>

<template>
  <div class="view-container animate__animated animate__fast" :class="previousPath && previousPath === '/' ? 'animate__slideInLeft' : 'animate__slideInDown'">
    <MainSubtitle title="Calcular horas" />
  
    <div class="input-container">
      <label for="start-time">Início</label>
      <input id="start-time" v-maska data-maska="##:##" inputmode="numeric" type="text" v-model="timeStart"
        @blur="validateLength(timeStart)"
        placeholder="hh:mm"
      >
    </div>
  
    <div class="input-container">
      <label for="end-time">Término</label>
      <input id="end-time" v-maska data-maska="##:##" inputmode="numeric" type="text" v-model="timeEnd"
        @blur="validateLength(timeEnd)"
        placeholder="hh:mm"
      >
    </div>
  
    <div class="input-container">
      <label for="total-timesheet">Tempo total Timesheet</label>
      <input id="total-timesheet" type="text" :value="timeSheet" readonly>
    </div>
  </div>
</template>
