(() => {
    chrome.runtime.onMessage.addListener(() => {
        alert('Hi');
    })
})();
// for(let i = 0; i < 10; i++) {
//     alert('Hi');
// }
