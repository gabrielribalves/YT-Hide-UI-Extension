chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const videoURL = "https://www.youtube.com/watch"
    const ytToggle = localStorage.getItem("ytToggle")
    if(obj.action === "hide-yt-ui" && obj.url.includes(videoURL) && ytToggle === null){
        hideYoutubeUI()
    }else if(obj.action === "hide-yt-ui" && obj.url.includes(videoURL) && ytToggle === "true"){
        showYoutubeUI()
    }else if (obj.action === "other" && !obj.url.includes(videoURL)){
        hideYoutubeHome(obj)
    }
});
  
function hideYoutubeUI(){
    localStorage.setItem("ytToggle", "true")
    document.querySelector("div.ytp-title").style.display = "none"
    document.querySelector("div.ytp-chrome-top-buttons").style.display = "none"
    document.querySelector("div.ytp-chrome-bottom").style.display = "none"
    document.querySelector("div.ytp-gradient-bottom").style.display = "none"
    document.querySelector("button.branding-img-container").style.display = "none"
}

function showYoutubeUI(){
    localStorage.removeItem("ytToggle")
    document.querySelector("div.ytp-title").style.removeProperty('display')
    document.querySelector("div.ytp-chrome-top-buttons").style.removeProperty('display')
    document.querySelector("div.ytp-chrome-bottom").style.removeProperty('display')
    document.querySelector("div.ytp-gradient-bottom").style.removeProperty('display')
    document.querySelector("button.branding-img-container").style.removeProperty('display')
}

function hideYoutubeHome(obj){
    const currentURL = obj.url
    document.querySelector("ytd-guide-entry-renderer a#endpoint[title='Shorts']").style.display = "none"
    if(currentURL === "https://www.youtube.com/"){
        document.querySelector("ytd-page-manager#page-manager").style.display = "none"
    }else{
        document.querySelector("ytd-page-manager#page-manager").style.display = "flex"
    }
}