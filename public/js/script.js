const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const use = document.getElementById('user')
const nfts = document.getElementById('nft')
const badge = document.getElementById('check')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
  use.classList.toggle('hidden')
  nfts.classList.toggle('hidden')
  badge.classList.toggle('hidden')
})
