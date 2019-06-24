// Create style tag with modifications
const narwhalStyle = document.createElement('style')

narwhalStyle.innerHTML = `
  #cx-articlecover {
    display: none !important;
  }
`
document.head.appendChild(narwhalStyle)

const redirQuery = 'mod=rsswn'
const href = window.location.href
const applied = ~href.indexOf(redirQuery)
let newhref = ''

if (!applied) {
  const ary = /(?:[&\?]*)(mod\=.+)/g.exec(href)
  if (ary) newhref = href.replace(ary[1], redirQuery)
  else newhref = href + (~href.indexOf('?') ? '&' : '?') + redirQuery
  
  window.location.replace(newhref)
}

