chrome.tabs.onActivated.addListener((tabId, tab) => {
    if(tab.url && tab.url.includes("https://poeltl.dunk.town/")) {
      console.log('success');
      chrome.tabs.sendMessage(tabId);
    }
});