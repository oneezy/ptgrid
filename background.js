// Create PT Grid tab
chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.create({ url: chrome.extension.getURL('pt-grid/pt-grid.html') });
});

// Send message to content page
chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab) {
	let msg = {
		txt: "hello"
	}
	chrome.tabs.sendMessage(tab.id, msg);
}