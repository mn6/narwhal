// Create style tag with modifications
const narwhalStyle = document.createElement('style')

narwhalStyle.innerHTML = `
  .hidden, #gateway-content {
    display: none !important;
  }
  .overflow-auto {
    overflow: auto !important;
  }
`
document.head.appendChild(narwhalStyle)

const checkPaywall = () => {
  const sel = document.querySelectorAll('div[class^="css"]')
  const sel2 = document.querySelectorAll('[role="main"] div[class^="css"]')
  
  if (sel) [].forEach.call(sel, item => {
    if (~getComputedStyle(item).background.indexOf('linear-gradient(transparent, rgb(0, 0, 0)')) {
      item.classList.add('hidden')
    }
  })
  
  if (sel2) [].forEach.call(sel2, item => {
    if (getComputedStyle(item).overflow === 'hidden') {
      item.classList.add('overflow-auto')
    }
  })
}

checkPaywall()
setTimeout(() => {
  checkPaywall()
}, 750)