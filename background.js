chrome.tabs.onUpdated.addListener((tabId, tab) => {
    console.log('one');
    if(tab.url) console.log('two');
    if(tab.url && tab.url.includes("https://poeltl.dunk.town/")) {
      console.log('success');
      chrome.tabs.sendMessage(tabId);
    }
});