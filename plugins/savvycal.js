/* eslint-disable */
// Include Calendy external widget script globally
const savvycal = document.createElement('script')

window.SavvyCal =
  window.SavvyCal ||
  function () {
    ;(window.SavvyCal.q = window.SavvyCal.q || []).push(arguments)
  }

savvycal.setAttribute('src', 'https://embed.savvycal.com/v1/embed.js')

document.head.appendChild(savvycal)

window.SavvyCal('init')

window.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/booking') {
    window.SavvyCal('inline', {
      link: 'heyjordn/chat',
      selector: '#booking-page',
    })
  }
})
