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
chrome.tabs.onUpdated.addListener(onPage);
async function onPage(info) {
    alert('hi');
}
