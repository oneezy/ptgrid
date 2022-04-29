chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.create({ url: chrome.extension.getURL('pt-grid/pt-grid.html') });
});