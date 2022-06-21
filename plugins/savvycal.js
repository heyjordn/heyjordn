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

// Props to https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
function waitForElement(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
              resolve(document.querySelector(selector));
              observer.disconnect();
          }
      });

      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}
window.addEventListener('DOMContentLoaded', () => {
  waitForElement('#booking-page').then((element) => {
    if (window.location.pathname === '/booking') {
      window.SavvyCal('inline', {
        link: 'heyjordn/chat',
        selector: '#booking-page',
      })
    }
  });
})



