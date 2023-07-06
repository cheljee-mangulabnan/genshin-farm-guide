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

// Array of all Character Objects
const allChars = []

// will return index from array weekdays
const currentDay = currentDate.getDay()

const availableToday = `Available Today: ${getFarmableDays(currentDay)}`
document.querySelector('.available-title').innerHTML = availableToday

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

function ifFarmableDay(day1, day2) {
  if (day1 === 'sunday' && day2 == undefined) {
    return currentDay === 0 ? true : false
  } else if (day1 === 'monday' && day2 === 'thursday') {
    return currentDay === 1 || currentDay === 4 ? true : false
  } else if (day1 === 'tuesday' && day2 === 'friday') {
    return currentDay === 2 || currentDay === 5 ? true : false
  } else if (day1 === 'wednesday' && day2 === 'saturday') {
    return currentDay === 3 || currentDay === 6 ? true : false
  }
}

function renderTalentMaterials(i, k) {
  const talentMaterialClass = regionPrefix[k] + 'item-name'
  const talentClass = regionPrefix[k] + 'talent-icon'
  const talentElem = document.createElement('img')
  talentElem.src = talentMaterials[i]
  document.querySelector(talentClass).appendChild(talentElem)
  document.querySelector(talentMaterialClass).innerHTML = talentMaterialNames[i]
}

function getTalentMaterials(currentDay) {
  if (currentDay === 0) {
    for (let i = 4, k = 0; i < 7; i++, k++) {
      renderTalentMaterials(i, k)
    }
  } else if (currentDay === 1 || currentDay === 4) {
    for (let i = 0, k = 0; i < 4; i++, k++) {
      renderTalentMaterials(i, k)
    }
  } else if (currentDay === 2 || currentDay === 5) {
    for (let i = 4, k = 0; i < 8; i++, k++) {
      renderTalentMaterials(i, k)
    }
  } else if (currentDay === 3 || currentDay === 6) {
    for (let i = 8, k = 0; i < 12; i++, k++) {
      renderTalentMaterials(i, k)
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


function makeCharIcon() {
  allChars.forEach(char => {
    const iconSrc = '../assets/character-icons/' +
    char.name.toLowerCase().replace(' ', '-').concat('-icon.png')
    char.icon = iconSrc
  });
}
 
async function getCharData() {
  try {
    const response = await fetch('./char-data.json')
    // .json() -> converts json to javascript object
    const data = await response.json()
    console.log(data)
    for (char of data) {
      allChars.push(char)
    }
    makeCharIcon()
    farmableTalents()
    console.log(allChars[0].name)

  } catch(error) {
    console.log(error)
  }
}

getCharData()

function charRarityColor(charImgEl, chars) {
  if (chars.rarity === 5) {
    charImgEl.classList.add('five-star')
  } else if (chars.rarity === 4) {
    charImgEl.classList.add('four-star')
  }
}

function renderChars(charArray, destination) {
  function compareRarity(a, b) {
    return b.rarity - a.rarity
  }
  charArray.sort(compareRarity)
  for (chars of charArray) {
    const charImgEl = document.createElement('img')
    charImgEl.setAttribute('src', chars.icon)
    charRarityColor(charImgEl, chars)
    document.querySelector(destination).appendChild(charImgEl)
  }
}

function farmableTalents() {
  const monstadtFarmableChars = []
  const liyueFarmableChars = []
  const inazumaFarmableChars = []
  const sumeruFarmableChars = []

  // Push char in respective array
  function sortCharRegion(talentIndex) {
    if (talentMaterialNames.indexOf(char.talent) === talentIndex) {
      monstadtFarmableChars.push(char)
    } else if (talentMaterialNames.indexOf(char.talent) === talentIndex + 1) {
      liyueFarmableChars.push(char)
    } else if (talentMaterialNames.indexOf(char.talent) === talentIndex + 2) {
      inazumaFarmableChars.push(char)
    } else if (talentMaterialNames.indexOf(char.talent) === talentIndex + 3) {
      sumeruFarmableChars.push(char)
    }
  }
  for (char of allChars) {
    // Sorts char acc to the region of their talent materials
    if (ifFarmableDay('sunday')) {
      // IDK YET
    } else if (ifFarmableDay('monday', 'thursday')) {
      sortCharRegion(0)
    } else if (ifFarmableDay('tuesday', 'friday')) {
      sortCharRegion(4)
    } else if (ifFarmableDay('wednesday', 'saturday')) {
      sortCharRegion(8)
    }
  }

  // Display Farmable Characters
  renderChars(monstadtFarmableChars, '.monstadt-characters-container')
  renderChars(liyueFarmableChars, '.liyue-characters-container')
  renderChars(inazumaFarmableChars, '.inazuma-characters-container')
  renderChars(sumeruFarmableChars, '.sumeru-characters-container')
}


// Responsive Burger Menu 
const burger = document.querySelector('.burger')
burger.onclick = () => {
  const navBar = document.querySelector('.nav-bar')
  navBar.classList.toggle('active')
}
