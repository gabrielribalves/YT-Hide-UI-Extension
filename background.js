chrome.tabs.onUpdated.addListener((tabId, e, tab) => {
  chrome.tabs.sendMessage(tabId, {
	action: "other",
    url: tab.url
  });
});

chrome.commands.onCommand.addListener((command) => {
	chrome.tabs.query({
			currentWindow: true,
			active: true
		},
		(tabArray) => {
			chrome.tabs.sendMessage(tabArray[0].id, {
				action: command,
				url: tabArray[0].url
			})
		}
	)
});