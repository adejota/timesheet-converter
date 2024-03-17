import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => {
    return {
      show: false,
      msg: ''
    }
  },
  
  actions: {
    showAlert(msg) {
      this.msg = msg
      this.show = true

      setTimeout(() => {
        this.show = false
        this.msg = ''
      }, 3000)
    },
  },
})
