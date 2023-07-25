let borderColors = ['#6cf', '#c9f', '#9ff', '#f90', '#ff0', '#c9f', '#f69','#6cf', '#c9f', '#9ff', '#f90', '#ff0',]
let menuItem = document.querySelectorAll('ul.menu>li>a')
console.log(menuItem);

menuItem.forEach((item,i) => {
  item.style.borderColor = borderColors[i]
  item.addEventListener('mouseenter', () => {
    item.style.color = borderColors[i]
  })
  item.addEventListener('mouseleave', () => {
    item.style.color = 'inherit'
  })
})