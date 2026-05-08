// discord copy-to-clipboard (requires .discord__btn and #discord-tooltip in HTML)
const btn = document.querySelector('.discord__btn')
if (btn) {
  const tooltip = document.getElementById('discord-tooltip')
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText('kiiyo')
    tooltip.classList.add('visible')
    setTimeout(() => tooltip.classList.remove('visible'), 2000)
  })
}
