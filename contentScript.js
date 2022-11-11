// (() => {
//     chrome.runtime.onMessage.addListener(() => {
//         alert('yo');
//     })
// })();
// alert('hi');
// async function onPage() {
//     console.log('success');
//     alert('success');
// }
chrome.tabs.onActivated.addListener(onPage);
async function onPage(info) {
    alert('hi');
}
