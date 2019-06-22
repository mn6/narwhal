// Create style tag with modifications
const z = document.createElement('style')
const className = 'skip-to-recipe'

z.innerHTML = `
  button.${className} {
    font-size: 24px;
    background: 0;
    border: 0;
    border: 2px solid blue;
    color: blue;
    border-radius: 5px;
    font-weight: bold;
    display: block;
    margin: 10px auto;
  }
`

document.head.appendChild(z)
var posts = document.querySelectorAll('article.post')
if (posts) [].forEach.call(posts, function (target) {
  var b = document.createElement('button')
  b.classList.add(className)
  b.innerHTML = 'Skip to Recipe'
  b.addEventListener('click', e => {
    const trgt = e.target.closest('article.post').querySelector('.wprm-recipe-pin')
    trgt.focus()
  })
  target.prepend(b)
})