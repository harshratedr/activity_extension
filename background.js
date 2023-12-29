chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ 'urls': [] });
});

chrome.webNavigation.onCompleted.addListener(function (details) {
  const url = details.url;
  chrome.storage.sync.get('urls', function (data) {
    const urls = data.urls || [];
    urls.push(url);
    chrome.storage.sync.set({ 'urls': urls });
  });
});
