const cookieSites = []
const clearCookies = domains => {
  domains.forEach(d => {
    chrome.cookies.getAll({domain: d}, cookies => {
      cookies.forEach(c => {
        alert(c.path)
        chrome.cookies.remove({url: (d + c.path), name: c.name})
      })
    })
  })
}

setInterval(() => {
  clearCookies(cookieSites)
}, 60000)
clearCookies(cookieSites)