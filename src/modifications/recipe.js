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

const targets = document.querySelectorAll(selectors)

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.doSkip) {
    try {
      targets[0].scrollIntoView()
      targets[0].focus()
    } catch (err) { return }
  } else if (req.skipCheck) sendResponse({ 'skip': targets && targets[0] })
  return true
})