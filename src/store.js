/* eslint-disable no-unused-vars */
import Chance from 'chance'
import Tables from './tables'
const R = require('ramda')

const concatValues = (k, l, r) => k === 'modifier' ? R.add(l, r) : r

const generateBounty = (rng) => {
  let newBounty = {}

  const agent = Tables.roll(rng, Tables.listingAgent)
  newBounty = R.mergeWithKey(concatValues, newBounty, agent)

  const target = Tables.roll(rng, Tables.bountyTarget[newBounty.category])
  newBounty = R.mergeWithKey(concatValues, newBounty, target)

  const reason = Tables.roll(rng, Tables.bountyReason[newBounty.category])
  newBounty = R.mergeWithKey(concatValues, newBounty, reason)

  var reasonCode = newBounty.reasonCode
  if (reasonCode === 'unstated') {
    const reasonCodeList = ['arrest', 'convict', 'debt', 'piracy', 'theft']
    const roll = rng.integer({min: 0, max: 4})
    reasonCode = reasonCodeList[roll]
  }

  const condition = Tables.roll(rng, Tables.returnCondition[reasonCode])
  newBounty = R.mergeWithKey(concatValues, newBounty, condition)

  const threat = Tables.roll(rng, Tables.threatLevel[reasonCode])
  newBounty = R.mergeWithKey(concatValues, newBounty, threat)

  const info = Tables.roll(rng, Tables.informationLevel)
  newBounty = R.mergeWithKey(concatValues, newBounty, info)

  const complication = Tables.roll(rng, Tables.complication)
  newBounty = R.mergeWithKey(concatValues, newBounty, complication)

  newBounty['value'] = 1000 * (rng.integer({min: 1, max: 10}) + newBounty.modifier)

  return newBounty
}

export default {
  state: {
    showGmInfo: false,
    bounty: null,
    rng: new Chance()
  },
  mutations: {
    toggleGmInfo: state => {
      state.showGmInfo = !state.showGmInfo
    },
    generate: state => {
      let newBounty = { value: -1 }

      do {
        newBounty = generateBounty(state.rng)
      } while (newBounty.value <= 3000)

      state.bounty = newBounty
    }
  }
}
