// Create style tag with modifications
const narwhalStyle = document.createElement('style')

narwhalStyle.innerHTML = `
  .inhouse__subscription-ribbon, #piano__in-line-regwall {
    display: none !important;
  }
`
document.head.appendChild(narwhalStyle)

const contentSelector = '.blog-post__text'
const paywallSelector = '#piano__in-line-regwall'
const full = document.querySelector(contentSelector).innerHTML

const checkPaywall = () => {
  const paywall = document.querySelector(paywallSelector)
  const content = document.querySelector(contentSelector)
  if (paywall && content) {
    content.innerHTML = full
  }
}

setInterval(() => {
  checkPaywall()
}, 500)