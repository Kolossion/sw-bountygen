import Chance from 'chance'
// import Tables from './tables'

export default {
  state: {
    count: 0,
    rng: new Chance()
  },
  mutations: {
    roll: state => {
      state.count = state.rng.d20()
    }
  }
}
