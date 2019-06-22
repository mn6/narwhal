// Create style tag with modifications
const z = document.createElement('style')
const className = 'skip-to-recipe'
let finished = []

z.innerHTML = `
  button.${className} {
    font-size: 24px !important;
    background: white;
    border: 0;
    border: 2px solid #e53d4d !important;
    color: #e53d4d !important;
    border-radius: 5px !important;
    font-weight: bold !important;
    display: block !important;
    font-family: Arial !important;
    padding: 5px !important;
    margin: 10px auto !important;
    position: absolute;
    top: -2px;
    left: 5px;
    z-index: 10000000000000000;
  }
  .${className} img {
    height: 15px !important;
    margin-right: 8px !important;
    border: 2px solid #e53d4d !important;
    border-radius: 5px !important;
    display: inline !important;
  }
`

const selectors = `
  .tasty-recipes,
  .ERSPrintBtn,
  [title="Print Recipe"],
  .wprm-recipe,
  .print-recipe,
  .simple-recipe-pro,
  [itemtype*="schema.org/Recipe"],
  .easyrecipe,
  .wpurp-container,
  section.zip-recipes,
  .cooked-recipe-info,
  .boorecipe-recipe
`

const generateSkip = target => {
  var span = document.createElement('span')
  span.textContent = 'Skip to Recipe'

  var img = document.createElement('img')
  img.src = 'https://i.imgur.com/wmg3cZP.png'
  img.alt = 'Narwhal Logo'

  var b = document.createElement('button')
  b.classList.add(className)

  b.prepend(span)
  b.prepend(img)
  b.addEventListener('click', e => {
    const trgt = document.querySelectorAll(selectors)
    if (trgt && trgt[trgt.length - 1]) {
      trgt[trgt.length - 1].scrollIntoView()
      trgt[trgt.length - 1].focus()
    }
  })

  document.body.prepend(b)
}

document.head.appendChild(z)
var targets = document.querySelectorAll(selectors)

if (targets[0]) generateSkip(targets[targets.length - 1])
