// Check tab if skippable
const doCheck = tabid => {
  chrome.tabs.sendMessage(tabid, { skipCheck: true }, res => {
    if (res && res.skip) setBadge(true)
    else setBadge(false)
    return true
  })
}

// Set badge
const setBadge = bool => {
  const text = { text: bool ? 'Skip!' : '' }
  chrome.browserAction.setBadgeText(text)
}
chrome.browserAction.setBadgeBackgroundColor({ color: '#808000' })

// On clicked, try to focus
chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.sendMessage(tab.id, { doSkip: true })
})

// On page navigation
chrome.tabs.onUpdated.addListener((tabid, changeInfo, tab) => {
  if (changeInfo.status == 'complete' && tab.active) doCheck(tabid)
})

// On tab switch
chrome.tabs.onActivated.addListener(activeInfo => {
  doCheck(activeInfo.tabId)
})