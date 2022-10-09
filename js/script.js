const menu = document.querySelectorAll('.menu li')
const logo = document.querySelector('.logo')

const moon = document.querySelector('.moon')
const meteor = document.querySelector('.meteor')
const terra = document.querySelector('.harth')

window.onscroll = function() { scrollHeader() };
window.addEventListener('scroll', parallax)

function parallax() {
  let valorScroll = window.scrollY
  moveMoon(valorScroll)
  moveMeteor(valorScroll)
  moveHarth(valorScroll)
}

function moveMoon(valorScroll) {
  const moveDown = 50 + valorScroll

  if (moveDown < 550) {
    const moveEsq = 300 - valorScroll / 2
    moon.style.top = `${moveDown}px`
    moon.style.left = `${moveEsq}px`
  }
}

function moveMeteor(valorScroll) {
  const moveEsq = 800 - valorScroll
  const moveTop = 200 - (valorScroll / 200)
  meteor.style.top = `${moveTop}px`
  meteor.style.left = `${moveEsq}px`
}

function moveHarth(valorScroll) {
  const moveBottom = 300 - valorScroll / 2
  if (moveBottom > 0) {
    console.log(valorScroll)
    terra.style.bottom = `${moveBottom}px`
  }
}

menu.forEach(item => {
  item.addEventListener('click', () => {
    swapItem(item)
  });
})

logo.addEventListener('click', () => {
  const home = document.querySelector('.menu li')
  swapItem(home)
})



function scrollHeader() {
  if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 500) {
    document.getElementById("header").style.backgroundColor = "#000";
  } else {
    document.getElementById("header").style.backgroundColor = "#0000";
  }
}


function swapItem(item) {
  removeSelecao()
  adicionaNovaSelecao(item)
}

function removeSelecao() {
  menu.forEach(item => {
    item.classList.remove('selecionado')
  })
}

function adicionaNovaSelecao(item) {
  item.classList.add('selecionado')
}
