/* eslint-disable no-unused-vars */

const complication = [
  { rangeMin: 1,
    rangeMax: 50,
    content: {
      complication: 'None - Straightforward bounty'
    }
  },
  { rangeMin: 51,
    rangeMax: 60,
    content: {
      complication: 'Already Dead - The target has already died or been incarcerated by other causes.'
    }
  },
  { rangeMin: 61,
    rangeMax: 70,
    content: {
      complication: 'Favored Prey - Several other bounty hunters are already on the trail.'
    }
  },
  { rangeMin: 71,
    rangeMax: 80,
    content: {
      complication: 'Covered Tracks - One or more pieces of information provided are out of date or incorrect.'
    }
  },
  { rangeMin: 81,
    rangeMax: 90,
    content: {
      complication: 'Upgraded - The target had upgraded combat or escape capabilities.'
    }
  },
  { rangeMin: 91,
    rangeMax: 95,
    content: {
      complication: 'Swapped Target - The target is not the actual person or item looked for.'
    }
  },
  { rangeMin: 96,
    rangeMax: 100,
    content: {
      complication: 'It\'s a trap! - Bounty is entirely false and posted for nefarious reasons.'
    }
  }
]

const informationLevel = [
  { rangeMin: 1,
    rangeMax: 10,
    content: {
      information: 'Negligible (A photo and an alias, location at least 2 months old, etc.)',
      modifier: 10
    }
  },
  { rangeMin: 11,
    rangeMax: 50,
    content: {
      information: 'Limited (Verified real name, transponder code, location only 2 weeks old, etc.)',
      modifier: 5
    }
  },
  { rangeMin: 51,
    rangeMax: 80,
    content: {
      information: 'Researched (Compiled file including history, hangouts, profile, location 1 week old)',
      modifier: 0
    }
  },
  { rangeMin: 81,
    rangeMax: 90,
    content: {
      information: 'Up-to-date (Compiled file including history, hangouts, profile, location 1 day old)',
      modifier: -5
    }
  },
  { rangeMin: 91,
    rangeMax: 100,
    content: {
      information: 'Extensive (Compiled file including history, hangouts, profile, current location, and limited movement range)',
      modifier: -10
    }
  }
]

const threatLevel = {
  arrest: [
    { rangeMin: 1,
      rangeMax: 10,
      content: {
        threat: 'Exceptionally Deadly',
        modifier: 5
      }
    },
    { rangeMin: 11,
      rangeMax: 25,
      content: {
        threat: 'Highly Dangerous',
        modifier: 2
      }
    },
    { rangeMin: 26,
      rangeMax: 60,
      content: {
        threat: 'Well-Armed and Dangerous',
        modifier: 0
      }
    },
    { rangeMin: 61,
      rangeMax: 90,
      content: {
        threat: 'Threatening',
        modifier: -3
      }
    },
    { rangeMin: 91,
      rangeMax: 100,
      content: {
        threat: 'Unthreatening',
        modifier: -5
      }
    }
  ],
  convict: [
    { rangeMin: 1,
      rangeMax: 20,
      content: {
        threat: 'Exceptionally Deadly',
        modifier: 5
      }
    },
    { rangeMin: 21,
      rangeMax: 40,
      content: {
        threat: 'Highly Dangerous',
        modifier: 2
      }
    },
    { rangeMin: 41,
      rangeMax: 80,
      content: {
        threat: 'Well-Armed and Dangerous',
        modifier: 0
      }
    },
    { rangeMin: 81,
      rangeMax: 95,
      content: {
        threat: 'Threatening',
        modifier: -3
      }
    },
    { rangeMin: 96,
      rangeMax: 100,
      content: {
        threat: 'Unthreatening',
        modifier: -5
      }
    }
  ],
  debt: [
    { rangeMin: 1,
      rangeMax: 10,
      content: {
        threat: 'Exceptionally Deadly',
        modifier: 5
      }
    },
    { rangeMin: 11,
      rangeMax: 20,
      content: {
        threat: 'Highly Dangerous',
        modifier: 2
      }
    },
    { rangeMin: 21,
      rangeMax: 50,
      content: {
        threat: 'Well-Armed and Dangerous',
        modifier: 0
      }
    },
    { rangeMin: 51,
      rangeMax: 80,
      content: {
        threat: 'Threatening',
        modifier: -3
      }
    },
    { rangeMin: 81,
      rangeMax: 100,
      content: {
        threat: 'Unthreatening',
        modifier: -5
      }
    }
  ],
  piracy: [
    { rangeMin: 1,
      rangeMax: 25,
      content: {
        threat: 'Exceptionally Deadly',
        modifier: 5
      }
    },
    { rangeMin: 26,
      rangeMax: 50,
      content: {
        threat: 'Highly Dangerous',
        modifier: 2
      }
    },
    { rangeMin: 50,
      rangeMax: 85,
      content: {
        threat: 'Well-Armed and Dangerous',
        modifier: 0
      }
    },
    { rangeMin: 86,
      rangeMax: 100,
      content: {
        threat: 'Threatening',
        modifier: -3
      }
    }
  ],
  theft: [
    { rangeMin: 1,
      rangeMax: 5,
      content: {
        threat: 'Exceptionally Deadly',
        modifier: 5
      }
    },
    { rangeMin: 6,
      rangeMax: 15,
      content: {
        threat: 'Highly Dangerous',
        modifier: 2
      }
    },
    { rangeMin: 16,
      rangeMax: 40,
      content: {
        threat: 'Well-Armed and Dangerous',
        modifier: 0
      }
    },
    { rangeMin: 41,
      rangeMax: 75,
      content: {
        threat: 'Threatening',
        modifier: -3
      }
    },
    { rangeMin: 76,
      rangeMax: 100,
      content: {
        threat: 'Unthreatening',
        modifier: -5
      }
    }
  ],
  item: [
    { rangeMin: 1,
      rangeMax: 5,
      content: {
        threat: 'Exceptionally Deadly',
        modifier: 5
      }
    },
    { rangeMin: 6,
      rangeMax: 15,
      content: {
        threat: 'Highly Dangerous',
        modifier: 2
      }
    },
    { rangeMin: 16,
      rangeMax: 40,
      content: {
        threat: 'Well-Armed and Dangerous',
        modifier: 0
      }
    },
    { rangeMin: 41,
      rangeMax: 75,
      content: {
        threat: 'Threatening',
        modifier: -3
      }
    },
    { rangeMin: 76,
      rangeMax: 100,
      content: {
        threat: 'Unthreatening',
        modifier: -5
      }
    }
  ]
}

const returnCondition = {
  arrest: [
    { rangeMin: 1,
      rangeMax: 25,
      content: {
        condition: 'Undamaged and Unspoiled',
        modifier: 2
      }
    },
    { rangeMin: 26,
      rangeMax: 95,
      content: {
        condition: 'Alive/Recovered',
        modifier: 0
      }
    },
    { rangeMin: 96,
      rangeMax: 100,
      content: {
        condition: 'Dead or Alive',
        modifier: 0,
        deadOrAlive: true
      }
    }
  ],
  convict: [
    { rangeMin: 1,
      rangeMax: 15,
      content: {
        condition: 'Undamaged and Unspoiled',
        modifier: 2
      }
    },
    { rangeMin: 16,
      rangeMax: 50,
      content: {
        condition: 'Alive/Recovered',
        modifier: 0
      }
    },
    { rangeMin: 51,
      rangeMax: 85,
      content: {
        condition: 'Dead or Alive',
        modifier: 0,
        deadOrAlive: true
      }
    },
    { rangeMin: 86,
      rangeMax: 100,
      content: {
        condition: 'Dead/Destroyed',
        modifier: -3
      }
    }
  ],
  debt: [
    { rangeMin: 1,
      rangeMax: 50,
      content: {
        condition: 'Undamaged and Unspoiled',
        modifier: 2
      }
    },
    { rangeMin: 51,
      rangeMax: 80,
      content: {
        condition: 'Alive/Recovered',
        modifier: 0
      }
    },
    { rangeMin: 81,
      rangeMax: 95,
      content: {
        condition: 'Dead or Alive',
        modifier: 0,
        deadOrAlive: true
      }
    },
    { rangeMin: 96,
      rangeMax: 100,
      content: {
        condition: 'Dead/Destroyed',
        modifier: -3
      }
    }
  ],
  piracy: [
    { rangeMin: 1,
      rangeMax: 25,
      content: {
        condition: 'Undamaged and Unspoiled',
        modifier: 2
      }
    },
    { rangeMin: 26,
      rangeMax: 50,
      content: {
        condition: 'Alive/Recovered',
        modifier: 0
      }
    },
    { rangeMin: 51,
      rangeMax: 75,
      content: {
        condition: 'Dead or Alive',
        modifier: 0,
        deadOrAlive: true
      }
    },
    { rangeMin: 76,
      rangeMax: 100,
      content: {
        condition: 'Dead/Destroyed',
        modifier: -3
      }
    }
  ],
  theft: [
    { rangeMin: 1,
      rangeMax: 50,
      content: {
        condition: 'Undamaged and Unspoiled',
        modifier: 2
      }
    },
    { rangeMin: 51,
      rangeMax: 80,
      content: {
        condition: 'Alive/Recovered',
        modifier: 0
      }
    },
    { rangeMin: 81,
      rangeMax: 95,
      content: {
        condition: 'Dead or Alive',
        modifier: 0,
        deadOrAlive: true
      }
    },
    { rangeMin: 96,
      rangeMax: 100,
      content: {
        condition: 'Dead/Destroyed',
        modifier: -3
      }
    }
  ],
  item: [
    { rangeMin: 1,
      rangeMax: 15,
      content: {
        condition: 'Undamaged and Unspoiled',
        modifier: 2
      }
    },
    { rangeMin: 16,
      rangeMax: 75,
      content: {
        condition: 'Alive/Recovered',
        modifier: 0
      }
    },
    { rangeMin: 76,
      rangeMax: 95,
      content: {
        condition: 'Dead or Alive',
        modifier: 0,
        deadModifier: -3
      }
    },
    { rangeMin: 96,
      rangeMax: 100,
      content: {
        condition: 'Dead/Destroyed',
        modifier: -3
      }
    }
  ]
}

const bountyReason = {
  lawEnforcement: [
    { rangeMin: 1,
      rangeMax: 25,
      content: {
        reason: 'Fleeing Arrest',
        reasonCode: 'arrest',
        modifier: 2
      }
    },
    { rangeMin: 26,
      rangeMax: 50,
      content: {
        reason: 'Convicted and Fleeing',
        reasonCode: 'convict',
        modifier: 3
      }
    },
    { rangeMin: 51,
      rangeMax: 75,
      content: {
        reason: 'Piracy',
        reasonCode: 'piracy',
        modifier: 3
      }
    },
    { rangeMin: 76,
      rangeMax: 95,
      content: {
        reason: 'Theft',
        reasonCode: 'theft',
        modifier: 3
      }
    },
    { rangeMin: 96,
      rangeMax: 100,
      content: {
        reason: 'Unstated (GM Choice)',
        reasonCode: 'unstated',
        modifier: 3
      }
    }
  ],
  commercial: [
    { rangeMin: 1,
      rangeMax: 30,
      content: {
        reason: 'Debt',
        reasonCode: 'debt',
        modifier: 1
      }
    },
    { rangeMin: 31,
      rangeMax: 75,
      content: {
        reason: 'Piracy',
        reasonCode: 'piracy',
        modifier: 3
      }
    },
    { rangeMin: 76,
      rangeMax: 90,
      content: {
        reason: 'Theft',
        reasonCode: 'theft',
        modifier: 3
      }
    },
    { rangeMin: 91,
      rangeMax: 100,
      content: {
        reason: 'Unstated (GM Choice)',
        reasonCode: 'unstated',
        modifier: 3
      }
    }
  ],
  individual: [
    { rangeMin: 1,
      rangeMax: 40,
      content: {
        reason: 'Debt',
        reasonCode: 'debt',
        modifier: 1
      }
    },
    { rangeMin: 41,
      rangeMax: 75,
      content: {
        reason: 'Theft',
        reasonCode: 'theft',
        modifier: 3
      }
    },
    { rangeMin: 76,
      rangeMax: 100,
      content: {
        reason: 'Unstated (GM Choice)',
        reasonCode: 'unstated',
        modifier: 3
      }
    }
  ]
}

const bountyTarget = {
  lawEnforcement: [
    { rangeMin: 1,
      rangeMax: 35,
      content: {
        target: 'Crew',
        modifier: 3
      }
    },
    { rangeMin: 36,
      rangeMax: 75,
      content: {
        target: 'Individual',
        modifier: 0
      }
    },
    { rangeMin: 76,
      rangeMax: 95,
      content: {
        target: 'Ship',
        modifier: 5
      }
    },
    { rangeMin: 96,
      rangeMax: 100,
      content: {
        target: 'Item',
        reason: 'item',
        modifier: -4
      }
    }
  ],
  commercial: [
    { rangeMin: 1,
      rangeMax: 30,
      content: {
        target: 'Crew',
        modifier: 3
      }
    },
    { rangeMin: 31,
      rangeMax: 50,
      content: {
        target: 'Individual',
        modifier: 0
      }
    },
    { rangeMin: 51,
      rangeMax: 80,
      content: {
        target: 'Ship',
        modifier: 5
      }
    },
    { rangeMin: 81,
      rangeMax: 100,
      content: {
        target: 'Item',
        reason: 'item',
        modifier: -4
      }
    }
  ],
  individual: [
    { rangeMin: 1,
      rangeMax: 5,
      content: {
        target: 'Crew',
        modifier: 3
      }
    },
    { rangeMin: 6,
      rangeMax: 50,
      content: {
        target: 'Individual',
        modifier: 0
      }
    },
    { rangeMin: 51,
      rangeMax: 70,
      content: {
        target: 'Ship',
        modifier: 5
      }
    },
    { rangeMin: 71,
      rangeMax: 100,
      content: {
        target: 'Item',
        reason: 'item',
        modifier: -4
      }
    }

  ]
}

const listingAgent = [
  { rangeMin: 1,
    rangeMax: 10,
    content: {
      agent: 'The Empire',
      modifier: 3,
      category: 'lawEnforcement'
    }
  },
  { rangeMin: 11,
    rangeMax: 30,
    content: {
      agent: 'Sector Rangers',
      modifier: 2,
      category: 'lawEnforcement'
    }
  },
  { rangeMin: 31,
    rangeMax: 50,
    content: {
      agent: 'Planetary Enforcement',
      modifier: 1,
      category: 'lawEnforcement'
    }
  },
  { rangeMin: 51,
    rangeMax: 65,
    content: {
      agent: 'Merchant Guild',
      modifier: 2,
      category: 'commercial'
    }
  },
  { rangeMin: 66,
    rangeMax: 80,
    content: {
      agent: 'Hutt',
      modifier: 3,
      category: 'commercial'
    }
  },
  { rangeMin: 81,
    rangeMax: 90,
    content: {
      agent: 'Anonymous',
      modifier: 1,
      category: 'individual'
    }
  },
  { rangeMin: 91,
    rangeMax: 95,
    content: {
      agent: 'Imperial Official',
      modifier: 0,
      category: 'individual'
    }
  },
  { rangeMin: 96,
    rangeMax: 100,
    content: {
      agent: 'Private Individual',
      modifier: -2,
      category: 'individual'
    }
  }
]

/*

  sumMods = (k, l, r) => k == 'modifier' ? l + r : r

*/

const makeIndexMap = (table) => {
  let indexMap = []

  for (let i = 0; i < table.length; i++) {
    const row = table[i]
    let numHits = (row.rangeMax - row.rangeMin) + 1

    while (numHits > 0) {
      indexMap.push(i)
      numHits--
    }
  }

  return indexMap
}

const roll = (rng, table) => {
  const indexMap = makeIndexMap(table)
  const roll = rng.integer({min: 0, max: indexMap.length - 1})
  const rollIndex = indexMap[roll]

  return table[rollIndex].content
}

export default {
  makeIndexMap,
  roll,
  listingAgent,
  complication,
  informationLevel,
  bountyTarget,
  bountyReason,
  returnCondition,
  threatLevel
}
