// List of Weekdays
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

// Server Reset Time
const resetTime = '04:00:00 AM'
const currentDate = new Date()

// Array of Farmable Days in pairs
const farmableDays = [
  'Sunday',
  'Monday/Thursday',
  'Tuesday/Friday',
  'Wednesday/Saturday',
]

// will return index from array weekdays
const currentDay = currentDate.getDay()

console.log(currentDay)

let availableToday = `Available Today: ${getFarmableDays(currentDay)}`
document.querySelector('.available-title').innerHTML = availableToday

const talentMaterials = [
  // Monday/Thursday
  '../assets/talent-materials/monstadt-freedom.png',
  '../assets/talent-materials/liyue-prosperity.png',
  '../assets/talent-materials/inazuma-transience.png',
  '../assets/talent-materials/sumeru-admonition.png',
  // Tuesday/Friday
  '../assets/talent-materials/monstadt-resistance.png',
  '../assets/talent-materials/liyue-diligence.png',
  '../assets/talent-materials/inazuma-elegance.png',
  '../assets/talent-materials/sumeru-ingenuity.png',
  // Wednesday/Saturday
  '../assets/talent-materials/monstadt-ballad.png',
  '../assets/talent-materials/liyue-gold.png',
  '../assets/talent-materials/inazuma-light.png',
  '../assets/talent-materials/sumeru-praxis.png',
]

const talentMaterialNames = [
  // Monday/Thursday
  'Freedom',
  'Prosperity',
  'Transience',
  'Admonition',
  // Tuesday/Friday
  'Resistance',
  'Diligence',
  'Elegance',
  'Ingenuity',
  // Wednesday/Saturday
  'Ballad',
  'Gold',
  'Light',
  'Praxis',
]

const regionPrefix = ['.monstadt-', '.liyue-', '.inazuma-', '.sumeru-']

function getFarmableDays(currentDay) {
  if (currentDay === 0) {
    return farmableDays[0]
  } else if (currentDay === 1 || currentDay === 4) {
    return farmableDays[1]
  } else if (currentDay === 2 || currentDay === 5) {
    return farmableDays[2]
  } else if (currentDay === 3 || currentDay === 6) {
    return farmableDays[3]
  }
}

function getTalentMaterials(currentDay) {
  if (currentDay === 0) {
    for (let i = 4, k = 0; i < 7; i++, k++) {
      const talentMaterialClass = regionPrefix[k] + 'item-name'
      const talentClass = regionPrefix[k] + 'talent-icon'
      const talentElem = document.createElement('img')
      talentElem.src = talentMaterials[i]
      document.querySelector(talentClass).appendChild(talentElem)
      document.querySelector(talentMaterialClass).innerHTML =
        talentMaterialNames[i]
    }
  } else if (currentDay === 1 || currentDay === 4) {
    for (let i = 0, k = 0; i < 4; i++, k++) {
      const talentClass = regionPrefix[k] + 'talent-icon'
      const talentMaterialClass = regionPrefix[k] + 'item-name'

      const talentElem = document.createElement('img')
      talentElem.src = talentMaterials[i]
      document.querySelector(talentMaterialClass).innerHTML = document
        .querySelector(talentClass)
        .appendChild(talentElem)
      document.querySelector(talentMaterialClass).innerHTML =
        talentMaterialNames[i]
    }
  } else if (currentDay === 2 || currentDay === 5) {
    for (let i = 4, k = 0; i < 8; i++, k++) {
      const talentClass = regionPrefix[k] + 'talent-icon'
      const talentMaterialClass = regionPrefix[k] + 'item-name'

      const talentElem = document.createElement('img')
      talentElem.src = talentMaterials[i]
      document.querySelector(talentClass).appendChild(talentElem)
      document.querySelector(talentMaterialClass).innerHTML =
        talentMaterialNames[i]
    }
  } else if (currentDay === 3 || currentDay === 6) {
    for (let i = 8, k = 0; i < 12; i++, k++) {
      const talentClass = regionPrefix[k] + 'talent-icon'
      const talentMaterialClass = regionPrefix[k] + 'item-name'
      const talentElem = document.createElement('img')
      talentElem.src = talentMaterials[i]
      document.querySelector(talentClass).appendChild(talentElem)
      document.querySelector(talentMaterialClass).innerHTML =
        talentMaterialNames[i]
    }
  }
}
getTalentMaterials(currentDay)

// --------------------- Characters
// Character Object Constructor
function Character(name, element, talent, rarity) {
  this.name = name
  this.element = element
  this.talent = talent
  this.icon =
    '../assets/character-icons/' +
    name.toLowerCase().replace(' ', '-').concat('-icon.png')
  this.rarity = rarity
}

const allChars = []

function createAndStoreChars(name, element, talent, rarity) {
  const char = new Character(name, element, talent, rarity)
  allChars.push(char)
}

//CREATED USING FUNCTION

createAndStoreChars('Albedo', 'Geo', 'Ballad', 5)
createAndStoreChars('Alhaitham', 'Dendro', 'Ingenuity', 5)
createAndStoreChars('Aloy', 'Cryo', 'Freedom', 5)
createAndStoreChars('Amber', 'Pyro', 'Freedom', 4)
createAndStoreChars('Arataki Itto', 'Geo', 'Elegance', 5)
createAndStoreChars('Baizhu', 'Dendro', 'Gold', 5)
createAndStoreChars('Barbara', 'Hydro', 'Freedom', 4)
createAndStoreChars('Beidou', 'Electro', 'Gold', 4)
createAndStoreChars('Bennett', 'Pyro', 'Resistance', 4)
createAndStoreChars('Candace', 'Hydro', 'Admonition', 4)
createAndStoreChars('Chongyun', 'Cryo', 'Diligence', 4)
createAndStoreChars('Collei', 'Dendro', 'Praxis', 4)
createAndStoreChars('Cyno', 'Electro', 'Admonition', 5)
createAndStoreChars('Dehya', 'Pyro', 'Praxis', 5)
createAndStoreChars('Diluc', 'Pyro', 'Resistance', 5)
createAndStoreChars('Diona', 'Cryo', 'Freedom', 4)
createAndStoreChars('Dori', 'Electro', 'Ingenuity', 4)
createAndStoreChars('Eula', 'Cryo', 'Resistance', 5)
createAndStoreChars('Faruzan', 'Anemo', 'Admonition', 4)
createAndStoreChars('Fischl', 'Electro', 'Ballad', 4)
createAndStoreChars('Ganyu', 'Cryo', 'Diligence', 5)
createAndStoreChars('Gorou', 'Geo', 'Light', 4)
createAndStoreChars('Hu Tao', 'Pyro', 'Diligence', 5)
createAndStoreChars('Jean', 'Anemo', 'Resistance', 5)
createAndStoreChars('Kaeya', 'Cryo', 'Ballad', 4)
createAndStoreChars('Kamisato Ayaka', 'Cryo', 'Elegance', 5)
createAndStoreChars('Kamisato Ayato', 'Hydro', 'Elegance', 5)
createAndStoreChars('Kaveh', 'Dendro', 'Ingenuity', 4)
createAndStoreChars('Kaedehara Kazuha', 'Anemo', 'Diligence', 5)
createAndStoreChars('Keqing', 'Electro', 'Prosperity', 5)
createAndStoreChars('Kirara', 'Dendro', 'Transience', 4)
createAndStoreChars('Klee', 'Pyro', 'Freedom', 5)
createAndStoreChars('Kujou Sara', 'Electro', 'Elegance', 4)
createAndStoreChars('Kuki Shinobu', 'Electro', 'Elegance', 4)
createAndStoreChars('Lisa', 'Electro', 'Ballad', 4)
createAndStoreChars('Mika', 'Cryo', 'Ballad', 4)
createAndStoreChars('Mona', 'Hydro', 'Resistance', 5)
createAndStoreChars('Nahida', 'Dendro', 'Ingenuity', 5)
createAndStoreChars('Nilou', 'Hydro', 'Praxis', 5)
createAndStoreChars('Ningguang', 'Geo', 'Prosperity', 4)
createAndStoreChars('Noelle', 'Geo', 'Resistance', 4)
createAndStoreChars('Qiqi', 'Cryo', 'Prosperity', 5)
createAndStoreChars('Raiden Shogun', 'Electro', 'Light', 5)
createAndStoreChars('Razor', 'Electro', 'Resistance', 4)
createAndStoreChars('Rosaria', 'Cryo', 'Ballad', 4)
createAndStoreChars('Sangonomiya Kokomi', 'Hydro', 'Transience', 5)
createAndStoreChars('Sayu', 'Anemo', 'Light', 4)
createAndStoreChars('Shenhe', 'Cryo', 'Prosperity', 5)
createAndStoreChars('Shikanoin Heizou', 'Anemo', 'Transience', 4)
createAndStoreChars('Sucrose', 'Anemo', 'Freedom', 4)
createAndStoreChars('Tartaglia', 'Hydro', 'Freedom', 5)
createAndStoreChars('Thoma', 'Pyro', 'Transience', 4)
createAndStoreChars('Tighnari', 'Dendro', 'Admonition', 5)
createAndStoreChars('Traveler', 'Anemo', 'Freedom', 5)
createAndStoreChars('Traveler', 'Geo', 'Prosperity', 5)
createAndStoreChars('Traveler', 'Electro', 'Transience', 5)
createAndStoreChars('Traveler', 'Dendro', 'Admonition', 5)
createAndStoreChars('Venti', 'Anemo', 'Ballad', 5)
createAndStoreChars('Wanderer', 'Anemo', 'Praxis', 5)
createAndStoreChars('Xiangling', 'Pyro', 'Diligence', 4)
createAndStoreChars('Xiao', 'Anemo', 'Prosperity', 5)
createAndStoreChars('Xingqiu', 'Hydro', 'Gold', 4)
createAndStoreChars('Xinyan', 'Pyro', 'Gold', 4)
createAndStoreChars('Yae Miko', 'Electro', 'Light', 5)
createAndStoreChars('Yanfei', 'Pyro', 'Gold', 4)
createAndStoreChars('Yaoyao', 'Dendro', 'Diligence', 4)
createAndStoreChars('Yelan', 'Hydro', 'Prosperity', 5)
createAndStoreChars('Yoimiya', 'Pyro', 'Transience', 5)
createAndStoreChars('Yun Jin', 'Geo', 'Diligence', 4)
createAndStoreChars('Zhongli', 'Geo', 'Gold', 5)

function farmableTalents() {
  let monstadtFarmableChars = []
  let liyueFarmableChars = []
  let inazumaFarmableChars = []
  let sumeruFarmableChars = []
  for (char of allChars) {
    // Sorts char acc to the region of their talent materials
    // Stores the src or char.icon in its respective array

    if (currentDay === 0) {
      // IDK YET
    }

    // Monday/Thursday
    else if (currentDay === 1 || currentDay === 4) {
      // Freedom
      if (talentMaterialNames.indexOf(char.talent) === 0) {
        monstadtFarmableChars.push(char.icon)
      } else if (talentMaterialNames.indexOf(char.talent) === 1) {
        liyueFarmableChars.push(char.icon)
      } else if (talentMaterialNames.indexOf(char.talent) === 2) {
        inazumaFarmableChars.push(char.icon)
      } else if (talentMaterialNames.indexOf(char.talent) === 3) {
        sumeruFarmableChars.push(char.icon)
      }
    }
    // Tuesday/Friday
    else if (currentDay === 2 || currentDay === 5) {
      if (talentMaterialNames.indexOf(char.talent) === 4) {
        monstadtFarmableChars.push(char.icon)
      } else if (talentMaterialNames.indexOf(char.talent) === 5) {
        liyueFarmableChars.push(char.icon)
      } else if (talentMaterialNames.indexOf(char.talent) === 6) {
        inazumaFarmableChars.push(char.icon)
      } else if (talentMaterialNames.indexOf(char.talent) === 7) {
        sumeruFarmableChars.push(char.icon)
      }
    }
    // Wednesday/Saturday
    else if (currentDay === 3 || currentDay === 6) {
      if (talentMaterialNames.indexOf(char.talent) === 8) {
        monstadtFarmableChars.push(char.icon)
      } else if (talentMaterialNames.indexOf(char.talent) === 9) {
        liyueFarmableChars.push(char.icon)
      } else if (talentMaterialNames.indexOf(char.talent) === 10) {
        inazumaFarmableChars.push(char.icon)
      } else if (talentMaterialNames.indexOf(char.talent) === 11) {
        sumeruFarmableChars.push(char.icon)
      }
    }
  }

  // Display part ng function pag append sa region container div
  for (chars of monstadtFarmableChars) {
    const charImgEl = document.createElement('img')
    charImgEl.setAttribute('src', chars)
    charImgEl.style.background = 'white'

    // Insert function here
    document
      .querySelector('.monstadt-characters-container')
      .appendChild(charImgEl)
  }
  for (chars of liyueFarmableChars) {
    const charImgEl = document.createElement('img')
    charImgEl.setAttribute('src', chars)
    charImgEl.style.background = 'white'

    document.querySelector('.liyue-characters-container').appendChild(charImgEl)
  }
  for (chars of inazumaFarmableChars) {
    const charImgEl = document.createElement('img')
    charImgEl.setAttribute('src', chars)
    charImgEl.style.background = 'white'

    document
      .querySelector('.inazuma-characters-container')
      .appendChild(charImgEl)
  }
  for (chars of sumeruFarmableChars) {
    const charImgEl = document.createElement('img')
    charImgEl.setAttribute('src', chars)
    charImgEl.style.background = 'white'

    document
      .querySelector('.sumeru-characters-container')
      .appendChild(charImgEl)
  }
}

farmableTalents()

if (allChars.find((name) => name === 'Zhongli')) {
  console.log(char.rarity)
}

function charRarityColor(charImgEl) {
  for (char of allChars) {
    if (char.rarity === 5) {
      charImgEl.classList.add('five-star')
    } else if (char.rarity === 4) {
      charImgEl.classList.add('four-star')
    }
  }
}
