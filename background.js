chrome.tabs.onSelectionChanged.addListener((tabId, tab) => {
    if(tab.url && tab.url.includes("https://poeltl.dunk.town/")) {
        alert('hi');
        chrome.tabs.sendMessage();
    }
})