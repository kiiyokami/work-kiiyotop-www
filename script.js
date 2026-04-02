const btn = document.querySelector('.discord-btn')
const tooltip = document.getElementById('discord-tooltip')

btn.addEventListener('click', () => {
  navigator.clipboard.writeText('kiiyo')
  tooltip.classList.add('visible')
  setTimeout(() => tooltip.classList.remove('visible'), 2000)
})
