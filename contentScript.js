(() => {
    chrome.runtime.onMessage.addListener(() => {
        alert('yo');
    })
})();
// for(let i = 0; i < 10; i++) {
//     alert('Hi');
// }
