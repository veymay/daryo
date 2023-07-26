let menu = document.querySelector('.menu')
let search = document.querySelector('.search')
let searchInp = document.querySelector('.search_input')
let searchBtn = document.querySelector('.search_button')
let closeSearch = document.querySelector('.close_search')
let searchOverlay = document.querySelector('.search_overlay')
let uzb = ['MAHALLIY', 'MARKAZIY OSIYO', 'DUNYO', 'PUL', 'MADANIYAT', 'LAYFSTAYL', 'SPORT', 'KOLUMNISTLAR', 'MULTIMEDIA']
let uzbKril = ['МАҲАЛЛИЙ', 'МАРКАЗИЙ ОСИЙЎ', 'ДУНЙЎ', 'ПУЛ', 'МАДАНИЯТ', 'ЛАЙФСТАЙЛ', 'СПОРТ', 'КОЛУМНИСТЛАР', 'МУЛЬТИМEДИА']
let rus = ['МЕСТНЫЕ', 'ЦЕНТРАЛЬНАЯ АЗИЯ', 'МИР', 'ДЕНЬГИ', 'КУЛЬТУРА', 'ОБРАЗ ЖИЗНИ', 'СПОРТ', 'ОБОЗНАЧИТЕЛИ', 'МУЛЬТИМЕДИА']
let eng = ['LOCAL', 'CENTRAL ASIA', 'WORLD', 'MONEY', 'CULTURE', 'LIFESTYLE', 'SPORTS', 'COLUMNISTS', 'MULTIMEDIA']
let menuItem = document.querySelectorAll('ul.menu>li>a')
let langActive = document.querySelector('.active_lang')
let langs = document.querySelector('ul.language')
let langsItem = document.querySelectorAll('ul.language>li')
langActive.addEventListener('click', () => {
  langs.classList.toggle('active')
  langsItem.forEach(langItem => {
    langItem.addEventListener('click', () => {
      langItem.classList.add('active')
      if (langItem.innerHTML == 'O\'zbekcha') {
        langActive.innerHTML = 'O\'ZB'
        menu.innerHTML=''
        uzb.forEach(uz => {
          menu.innerHTML += `<li><a href='#'>${uz}</a></li>`
        })
      } else if (langItem.innerHTML == 'Ўзбекча') {
        langActive.innerHTML = 'Ўзб'
        menu.innerHTML=''
        uzbKril.forEach(uzkril => {
          menu.innerHTML += `<li><a href='#'>${uzkril}</a></li>`
        })
      } else if (langItem.innerHTML == 'Русский') {
        langActive.innerHTML = 'РУС'
        menu.innerHTML=''
        rus.forEach(ru => {
          menu.innerHTML += `<li><a href='#'>${ru}</a></li>`
        })
      } else {
        langActive.innerHTML = 'ENG'
        menu.innerHTML=''
        eng.forEach(en => {
          menu.innerHTML += `<li><a href='#'>${en}</a></li>`
        })
      }
      langsItem.forEach(langitem2 => {
        if (langItem!=langitem2) {
          langitem2.classList.remove('active')
        }
      });
    })
  })
})

let borderColors = ['#6cf', '#c9f', '#9ff', '#f90', '#ff0', '#c9f', '#f69', '#6cf', '#c9f', '#9ff', '#f90', '#ff0',]

menuItem.forEach((item,i) => {
  item.style.borderColor = borderColors[i]
  item.addEventListener('mouseenter', () => {
    item.style.color = borderColors[i]
  })
  item.addEventListener('mouseleave', () => {
    item.style.color = 'inherit'
  })
})

// Search
search.addEventListener('click', () => {
  document.body.style.padding='0 16px 0 0'
  document.body.style.overflow='hidden'
  searchOverlay.classList.toggle('active')
  searchInp.focus()
})
searchBtn.style.opacity='0'
// searchInp.value=''
document.addEventListener('keydown', () => {
  console.log(searchInp.value,"-",searchInp.value.length);
  searchInp.focus()
  if (searchInp.value.length>=0) {
    searchBtn.style.opacity='1'
  } else {
    searchBtn.style.opacity='0'
  }
})
closeSearch.addEventListener('click', () => {
  document.body.style.overflow='visible'
  document.body.style.padding='0 0px 0 0'
  searchOverlay.classList.toggle('active')
})