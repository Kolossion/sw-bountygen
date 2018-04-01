import Chance from 'chance'

export default {
  state: {
    count: 0,
    rng: new Chance()
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    roll: state => { state.count = state.rng.d20() }
  }
}
