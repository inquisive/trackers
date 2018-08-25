import Api from '@/services/Api'
import store from '@/store'

export default {
  getData () {
    const day = store.getters.formattedDay
    const gamepk = store.getters.gamepk
    // console.log(day, gamepk)
    return Api().get(`?day=${day}&gamepk=${gamepk}`)
      .then(response => {
        const res = response.data
        // console.log(res)
        store.dispatch('setTracker', res)
      })
      .catch(console.error)
  }
}
