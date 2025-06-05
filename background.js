chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            const videos = Array.from(document.querySelectorAll('video'));
            const video = videos.find(v => v.readyState > 0 && !v.disablePictureInPicture && v.offsetParent !== null);
            if (video) {
                video.requestPictureInPicture();
            } else {
                alert('No video found or video cannot be opened in Picture-in-Picture mode.');
            }
        }
    });
});
