const menu = document.querySelectorAll('.menu li')
const logo = document.querySelector('.logo')

window.onscroll = function() {scrollHeader()};

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
   if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
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
