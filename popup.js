document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.sync.get('urls', function (data) {
    const urlList = document.getElementById('urlList');
    if (data.urls) {
      data.urls.forEach(function (url) {
        const li = document.createElement('li');
        li.textContent = url;
        urlList.appendChild(li);
      });
    }
  });
});
