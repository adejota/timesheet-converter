<script setup>
import { computed, ref, onMounted } from 'vue';
import { minutesToTimesheet, timeToMinutes } from '@/utils/timeUtils';
import MainSubtitle from '@/components/MainSubtitle.vue';

const timeStart = ref(null)
const timeEnd = ref(null)

const error = ref(null)
const errors = [
  { id: 1, msg: 'Término não pode ser menor do que o início' },
]

function getError(id) {
  return errors.find(e => e.id === id)
}

function handleInputChange(el) {
  if (!error.value) {
    return
  }

  if (error.value.id === 1 && el === 'end-time' && timeEnd.value.length < 5) {
    error.value = null
  }
}

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
    error.value = getError(1)
    return 0
  }

  return end - start
});

const timeSheet = computed(function () {
  return minutesToTimesheet(totalMinutes.value)
});

const previousPath = ref('')
previousPath.value = window.history.state?.back
</script>

<template>
  <div class="view-container animate__animated animate__fast" :class="previousPath && previousPath === '/' ? 'animate__slideInLeft' : 'animate__slideInDown'">
    <MainSubtitle title="Calcular horas" />
  
    <div class="input-container">
      <label for="start-time">Início</label>
      <input id="start-time" v-maska data-maska="##:##" inputmode="numeric" type="text" v-model="timeStart"
        @input="handleInputChange('start-time')"
      >
    </div>
  
    <div class="input-container">
      <label for="end-time">Término</label>
      <input id="end-time" v-maska data-maska="##:##" inputmode="numeric" type="text" v-model="timeEnd"
        @input="handleInputChange('end-time')"
      >
    </div>
  
    <div class="input-container">
      <label for="total-timesheet">Tempo total Timesheet</label>
      <input id="total-timesheet" type="text" :value="timeSheet" readonly>
    </div>

    <div v-if="!!error" class="error-container animate__animated animate__fast animate__bounceIn">
      <span>{{ error.msg }}</span>
    </div>
  </div>
</template>
